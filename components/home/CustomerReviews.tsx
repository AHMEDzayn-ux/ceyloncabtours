import { Review } from '@/types';

interface CustomerReviewsProps {
  reviews: Review[];
}

export default function CustomerReviews({ reviews }: CustomerReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from travelers who explored Sri Lanka with us
          </p>
          <div className="w-20 h-1 bg-primary mt-4 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{review.content}&rdquo;
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{review.name}</p>
                {review.location && (
                  <p className="text-sm text-gray-600">📍 {review.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
