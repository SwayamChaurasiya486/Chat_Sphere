import { User } from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateJWTtoken.js";

export const signup = async (req, res) => {
    try {
        console.log(req.body);
        const { fullname, username, password, confirmPassword, gender } = req.body;
        if (confirmPassword !== password) {
            return res.status(400).json({
                error: "Password don't match"
            })
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({
                error: "User already exits"
            })
        }

        //Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`
        const girlProfilePic = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if (newUser) {
            generateTokenandSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({
                error: "Invalid user data"
            })

        }
    } catch (e) {
        console.log("Error in sigingUp ", e.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}


export const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({
                error: "Invalid username"
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if(passwordMatch){

            generateTokenandSetCookie(user._id, res);

            return res.status(200).json({
               _id: user._id,
               fullname: user.fullname,
               username: user.username,
               profilePic: user.profilePic,
            });
        }

        return res.status(400).json({
            error: "Invalid password"
        });

    } catch (err) {
        console.log("Error in login ", err.message)
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}


export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({
            message: "Logged out successfully"
        });

    } catch (err) {
        console.log("Error in logout ", err.message)
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}