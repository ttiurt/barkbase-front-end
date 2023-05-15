// components
import AuthorInfo from '../AuthorInfo/AuthorInfo'

import { Link } from 'react-router-dom'

const CommentCard = ({ comment, dogId, user, handleDeleteComment }) => {
  return ( 
    <article>
      <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <>
              <Link to={`/dogs/${dogId}/comments/${comment._id}`} state={comment}>
                EDIT
              </Link>
              <button onClick={()=> handleDeleteComment(dogId, comment._id)}>DELETE</button>
            </>
          }
        </span>
      </header>
      <p>{comment.text}</p>
      </article>
  )
}

export default CommentCard