import PropTypes from "prop-types"


function Title({ title, authorName, made, date}) {
  return(
    <>
    <h1 className="text-5xl mb-5">{title}</h1>
    <h3 className="text-xl italic text-neutral-500 dark:text-neutral-400 mb-7">{authorName}</h3>
    <p className="text-neutral-400">{made}</p>
    <span>{date}</span>
    </>
  )}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  made: PropTypes.string.isRequired,
  date: PropTypes.any
}

export default Title