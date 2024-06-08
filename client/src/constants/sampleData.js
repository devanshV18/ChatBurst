import Chat from "../pages/Chat"

export const sampleChats = [
    {
    avatar:["https://www.w3schools.com/howto/image_avatar.png"],
    name:"Devansh Verma",
    _id:"1",
    groupChat:"false",
    members:["1","2"]
    },

    {
        avatar:['https://www.w3schools.com/howto/image_avatar.png'],
        name:"Sakshi tripathi",
        _id:"2",
        groupChat:"true",
        members:["1","2"]
        },

]

export const sampleUsers = [
    {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "John Doe",
        _id: "1"
    },
    {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name:"John Boi",
        _id:"2"
    }
]


export const sampleNotifications = [
    {
        sender:{
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Doe",
        },
        _id: "1"
    },
    {
        sender:{
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name:"John Boi",
        },
        _id:"2"
    }
]

export const sampleMessage = [
    {
        attachments: [
            {
                public_id: "asdasd",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            },
        ],
        content: "Lauda ka msg hai",
        _id: "fisnfisnf",
        sender: {
            _id: "user._id",
            name: "Chodu"
        },
        Chat:"chatId",
        createdAt: "2024-02-12T10:41:30.630Z"
    },

    {
        attachments: [
            {
                public_id: "asdasd2",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            },
        ],
        content: "Lauda 2 ka msg hai",
        _id: "fisnfisnf",
        sender: {
            _id: "adadmad",
            name: "Chodu2"
        },
        Chat:"chatId",
        createdAt: "2024-02-12T10:41:30.630Z"
    }
]
