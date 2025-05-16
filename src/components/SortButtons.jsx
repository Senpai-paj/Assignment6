export default function SortButtons({ handleSort }) {
    return (
        <div className="flex justify-around gap-2 mt-4">

            <button
                className="bg-slate-100 hover:bg-blue-200 px-4 py-2 rounded"
                onClick={() => handleSort("title")}
            >
                Alfabetisk ordning
            </button>

            <button
                className="bg-slate-100 hover:bg-purple-200 px-4 py-2 rounded"
                onClick={() => handleSort("rating")}
            >
                Betygsorning
            </button>
        
        </div>
    );
}