"use client";

export default function MovieList({ movies, onDelete }) {
    return (
        <ul className="space-y-2">
            {movies.map(({ title, rating }) => (
                <li
                    key={title}
                    className="bg-slate-100 p-4 shadow flex justify-between items-center"
                >
                    <span>{title}</span>
                    <span className="flex items-center space-x-2">
                        {[...Array(rating)].map((_, i) => (
                            <img
                                key={i}
                                src="/star.png"
                                alt="star"
                                className="w-5 h-5"
                            />
                        ))}
                        <img
                            src="/delete.png"
                            alt="Delete"
                            className="w-5 h-5 cursor-pointer"
                            onClick={() => onDelete(title)}
                        />
                    </span>
                </li>
            ))}
        </ul>
    );
}
