import React from 'react'
import { 
    useMultiChatLogic,
    MultiChatSocket,
    MultiChatWindow
} from 'react-chat-engine-advanced'
import Header from "@/components/header"
import CustomForm from '@/components/messageForm/CustomForm'
// import NewHeader from '../newhead'


const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "newuser",
        "123",
    )
  return (
    <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps} />
        {/* <NewHeader/> */}
        <MultiChatWindow
            {...chatProps}
            style={{ height: "100vh" }}
            renderChatHeader={(chat) => <Header chat={chat} />}
            renderMessageForm={(props) => {
                return (
                    <CustomForm  props={props} activeChat={chatProps.chat} />
                )
            }}
        />
    </div>
  )
}

export default Chat