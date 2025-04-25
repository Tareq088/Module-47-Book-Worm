import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';
import { useLoaderData } from 'react-router';


const Books = ({data}) => {

                            // 1st way: using loader:, useLoaderData(



                            //2nd way  using suspense and promise
// const bookPromise = fetch("booksData.json").then(res => res.json())

                            // 3rd way using useEffect
// const [allBooks, setAllBooks] = useState([]);
// useEffect(()=>{
//     fetch("booksData.json")
//         .then(res =>res.json())
//             .then(data=>{setAllBooks(data)})
// }, [])
             

    return (
        <div>
           <h1 className='text-4xl my-4 text-center font-extrabold'>Books</h1>
           <Suspense fallback={<span>Loading.......</span>}>
                                {/* //2nd way */}
                {/* <Book bookPromise={bookPromise}></Book> */}
                                 {/* 1st way */}
            {/* <Book data={data}></Book> */}
                                {/* 1st way using map here */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {
                data.map(singleBook =><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
            }
            </div>
           </Suspense>
        </div>
    );
};

export default Books;