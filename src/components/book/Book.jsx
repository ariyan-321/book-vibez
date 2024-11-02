import React from "react";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    category,
    rating,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <Link to={`books/${bookId}`}>
      <div>
        <div className="card w-full 2xl:w-96 bg-base-100  shadow-xl">
          <figure className="bg-gray-200">
            <img
              className="p-12 w-[300px] h-[400px] object-cover rounded-[60px]"
              src={image}
              alt={author}
            />
          </figure>
          <div className="card-body">
            <div className="flex gap-7">
              {tags.map((tag,i) => (
                <div key={i} className="badge badge-secondary">{tag}</div>
              ))}
            </div>

            <h2 className="card-title">{bookName}</h2>
            <p>By:{author}</p>

            <div className="card-actions justify-between  border-t-2 border-dashed py-3">
              <div className="badge badge-outline">{category}</div>
              <div className="flex items-center">
                <p>{rating}</p>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
