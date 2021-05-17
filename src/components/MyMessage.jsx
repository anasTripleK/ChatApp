const MyMessage = ({message}) => {
        if(message?.attachments?.length > 0){
            return(
                <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float:'right'}}
                />
            )
        }
        return (
        <div className="message" style={{float:'right', marighRight:'18px',color:'white', backgroundcolor:'#3B2A50'}}>
            {message.text}
        </div>
    );
}
export default MyMessage;