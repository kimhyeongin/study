import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function App() {
  const books = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600751550112-4209be589cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwbWluaW1hbHxlbnwxfHx8fDE3NjgzNzM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "The Minimalist",
      author: "Sofia Chen",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1534289855405-ab820a118fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3xlbnwxfHx8fDE3NjgzMDU0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Vintage Tales",
      author: "James Morrison",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1472173148041-00294f0814a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYWVzdGhldGljfGVufDF8fHx8MTc2ODM3MzU2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Library Dreams",
      author: "Emma Woods",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9va3xlbnwxfHx8fDE3NjgzNTcwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "The Reader",
      author: "Michael Park",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1613577553731-e102e5de62f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwc3RhY2t8ZW58MXx8fHwxNzY4MzczNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Stacked Stories",
      author: "Lisa Anderson",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1529589941132-43606325dfb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9va3xlbnwxfHx8fDE3NjgzNzM1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Open Horizons",
      author: "David Kim",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1605647507668-43f85faee767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzY4MzczNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "The Collection",
      author: "Rachel White",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcGFnZXN8ZW58MXx8fHwxNzY4MzczNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Pages of Time",
      author: "Thomas Gray",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Banner Section */}
      <header className="w-full bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center text-neutral-900 mb-4">
            Discover Your Next Great Read
          </h1>
          <p className="text-lg sm:text-xl text-center text-neutral-600 max-w-2xl mx-auto">
            Explore our curated collection of timeless classics
            and contemporary favorites
          </p>
        </div>
      </header>

      {/* Book Gallery Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-neutral-900 mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {book.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* More Features Button Section */}
      <section className="w-full py-12 sm:py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl text-neutral-900 mb-4">
            Want to explore more?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Discover additional features, personalized
            recommendations, and exclusive content
          </p>
          <button className="bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors duration-200 text-lg font-medium">
            More Features
          </button>
        </div>
      </section>
    </div>
  );
}