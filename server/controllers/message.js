import { Conversation } from "../models/conversationmodel.js";
import { Message } from "../models/messagemodel.js";

export const sendMessages = async (req , res) =>{
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
           participants: {$all : [senderId, receiverId]},
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessages = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessages){
            conversation.messages.push(newMessages._id);
        }

        //SOCKET IO functionality will go here

        // await conversation.save();
        // await newMessages.save();

        //this will run in parallel
        Promise.all([conversation.save(), newMessages.save()]);

        res.status(201).json(newMessages);

    } catch (e) {
        console.log("Error in sendMessages controller ", e.message)
        res.status(500).json({
            error: "Internal server error"
        });
    };
}

export const getMessages = async (req, res) =>{
    try {
        const {id: userTOChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all : [senderId, userTOChatId]},
        }).populate("messages")   //it will return whole messages object that contain senderId, reciverId etc..
        //.populate("messages", "message")   // return only message

        if(!conversation){
            return res.status(200).json([]); // no messages yet
        }

        res.status(200).json(conversation.messages);
        
    } catch (e) {
        console.log("Error in getMessages controller ", e.message)
        res.status(500).json({
            error: "Internal server error"
        });
    }
}