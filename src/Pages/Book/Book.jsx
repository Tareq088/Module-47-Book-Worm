import React, { use } from 'react';
import { CiStar } from "react-icons/ci";


const Book = ({singleBook}) => {
    // const data = use(bookPromise);
    // console.log(data)

    console.log(singleBook);
    const {bookId, bookName, author, image, review, totalPages, rating, category}=singleBook;
    return (
            <div className="card bg-base-100 w-96 shadow-sm border p-4">
            <figure className='p-3  bg-gray-300 w-2/3 mx-auto'>
                <img className='h-[190px]'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
               {bookName}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline flex items-center justify-center">{rating} <CiStar /></div>
                </div>
            </div>
            </div>
    );
};

export default Book;