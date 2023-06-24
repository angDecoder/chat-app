import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import sent from '../../assets/sent.svg'
import received from '../../assets/received.svg';
import seen from '../../assets/seen.svg';

function Chat({ elem }) {

    const username = useSelector(state => state.user.username);

    return <section className='chat_secton' >
        <span className='message_date'>{elem[0]}</span>
        {
            Object.values(elem[1]).map(elem => {

                const messageType = elem.sender === username ? 'self_message' :
                    'other_message';

                let image = '';
                if (messageType === 'self_message') {
                    if (elem.status === 'sent')
                        image = sent;
                    else if (elem.status === 'received')
                        image = received;
                    else
                        image = seen;
                }
                return <div
                    className={`chat_message ${messageType}`}>
                    <p className={`message_sender ${messageType}`}>
                        {elem.sender}
                    </p>
                    <p>
                        {elem.message}
                    </p>
                    <p className={`message_time ${messageType}`}>
                        {format(elem.time, 'hh:MM')}
                        {
                            image === '' ? '' :
                                <img src={image} alt="" className='message_status' />
                        }
                    </p>

                </div>
            })
        }
    </section>
}


export default Chat