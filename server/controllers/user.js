import { Conversation } from "../models/conversationmodel.js";
import { User } from "../models/usermodel.js";

export const getUsersForSidebar = async (req, res) => {
    try {
         const loggedInUserId = req.user._id;

    //    // getting all the users other than LoggedIn from Db.
      const filteredUsers = await User.find({_id : {$ne : loggedInUserId} }).select("username fullname profilePic");

      res.status(200).json(filteredUsers);


    // getting only those users by whom the loggedIn user conversate.
    // const conversations = await Conversation.find({
    //     participants: loggedInUserId
    // }).populate("participants", "username fullname profilePic");

    // const users = [];

    // conversations.forEach(conv => {
    //     conv.participants.forEach(user =>{
    //         if(user._id.toString() !== loggedInUserId.toString()){
    //             users.push(user);
    //         }
    //     });
    // });

    // res.status(200).json(users);

    } catch (e) {
        console.log("Error in getUsersForSidebar controller ", e.message)
        res.status(500).json({
            error: "Internal server error"
        });
    }
}