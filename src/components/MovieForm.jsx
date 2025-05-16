"use client";

import { useState } from "react";

export default function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "") {
            alert("Well actually name it already!");
            return;
        }

        if (rating === 0) {
            alert("Rate pls");
            return;
        }

        onAddMovie(title, rating);
        setTitle("");
        setRating(0);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <fieldset>
                <legend className="font-semibold mb-2">Lägg till en film</legend>
                <label className="block">Titel:</label>
                <input
                    type="text"
                    className="form-input w-full border border-gray-300 p-2 rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className="block mt-2">Betyg:</label>
                <select
                    className="form-select w-full border border-gray-300 p-2 rounded"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                >
                    <option value={0}>Välj betyg här...</option>
                    <option key={1} value={1}>1</option>
                    <option key={2} value={2}>2</option>
                    <option key={3} value={3}>3</option>
                    <option key={4} value={4}>4</option>
                    <option key={5} value={5}>5</option>
                </select>

                <button
                    type="submit"
                    className="btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-3"
                >
                    Spara film
                </button>
            </fieldset>
        </form>
    );
}
