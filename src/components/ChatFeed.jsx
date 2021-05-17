import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) =>{
    // DeStructuring from props => const { } = props;
    // DeStructure chats, activeChat, userName, messages
    const { chats, activeChat, userName, messages} = props;
    // Continue Here
    const chat = chats && chats[activeChat];
    // if 'chats' exits(&&) then look for 'activeChat'
    //console.log(chat, userName, messages);
    //console.log(props);
    // Below Component to generate Messages in a Chat App
    const renderMessages = () =>{
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            // In below we are checking the last message and if the only message
            // exists isn't the last message then we make sure that the message is last
            // by doing keys[index-1]
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            // below check is to check if the last message is our message or not i.e. me(sender)
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    {/*below is the css applied*/}
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marignLeft: isMyMessage?'0px':'68px'}}>
                        read-receipts
                    </div>
                </div>
            )
        })
        //console.log(keys);
    }
    renderMessages()
    return (
        <div classNme="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}>
                <div className="message-form-container">
                    <MessageForm {... props} chatId={activeChat} />
                </div>
            </div>
        </div>
    );
}
export default ChatFeed;