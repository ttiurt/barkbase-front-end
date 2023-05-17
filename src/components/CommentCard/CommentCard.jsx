// components
import { Link } from 'react-router-dom'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import styles from './CommentCard.module.css'

const CommentCard = ({ comment, dogId, user, handleDeleteComment }) => {
  return ( 
    <article className={styles.cardComponent}>
      <header className={styles.cardHeader}>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <div className={styles.cardButtonContainer}>
              <Link to={`/dogs/${dogId}/comments/${comment._id}`} state={comment}>
                <button>EDIT</button>
              </Link>
              <button onClick={()=> handleDeleteComment(dogId, comment._id)}>DELETE</button>
            </div>
          }
      </header>
      <div className={styles.cardContent}>
        {comment.text}
      </div>
      </article>
  )
}

export default CommentCard