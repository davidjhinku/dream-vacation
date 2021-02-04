import React from 'react'

class CommentDetails extends React.Component{

    render () {
        const messageClass = ((this.props.idx) % 2 === 0)?"message-bubble-1" : "message-bubble-2"
        return (<div className='comment-list' >
            <li className={messageClass}>
                <section>
                    <div className="comment-text-user">
                        {this.props.comment.author.username}
                        <br />
                    </div>
                    <div className="comment-test-date">
                        {new Date(this.props.comment.date).toDateString()}
                        <br />
                    </div>
                    <div className="comment-test-time">
                        {new Date(this.props.comment.date).toLocaleTimeString()}
                        <br />
                    </div>
                    <div className="comment-text-body">
                        <p>{this.props.comment.comment}</p>
                    </div>
                </section>

                <div>
                    <br />
                    <button className="comment-delete-btn" onClick={() => this.props.deleteComment(this.props.comment._id)}>Delete Comment</button>
                </div>
            </li>
            <br />
        </div>
        )
    }
};

export default CommentDetails;
