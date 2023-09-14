import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-lg">
            <div className='bg-gray-200 px-4 rounded-lg mb-7'>
                <h3 className='text-2xl text-center'>Spent time on read : {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                key={idx}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime: PropTypes.number

}

export default Bookmarks;