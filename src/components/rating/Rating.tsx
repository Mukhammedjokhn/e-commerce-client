import { Star } from "lucide-react";

type RatingProps = {
    rating: number;
};

const Rating = ({ rating }: RatingProps) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className='flex gap-1 text-yellow-500'>
            {[...Array(fullStars)].map((_, i) => (
                <Star
                    key={`full-${i}`}
                    className='w-4 h-4 fill-yellow-500 stroke-yellow-500'
                />
            ))}

            {hasHalfStar && (
                <div className='relative w-4 h-4'>
                    <Star className='w-4 h-4 stroke-yellow-500' />
                    <div className='absolute top-0 left-0 w-1/2 h-full overflow-hidden'>
                        <Star className='w-4 h-4 fill-yellow-500 stroke-yellow-500' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Rating;
