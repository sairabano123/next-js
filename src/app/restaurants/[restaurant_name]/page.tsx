import Link from 'next/link';
import { Dish, PrismaClient } from '@prisma/client';

export default async function restaurant({ params }: { params: { restaurant_name: string } }) {
    const restaurant = params.restaurant_name;
    const prisma = new PrismaClient();


    const restaurantData = await prisma.restaurant.findUnique({
        where: {
            name: restaurant,
        },
        select:{
            dishes:true
        }
    });

    const dishesData = restaurantData?.dishes;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold">{restaurant} menu</h2>
            <div className="grid grid-cols-4 gap-6">
                {dishesData?.map((dishData: Dish) => (
                    <Link key={dishData.id} href={`/restaurants/${restaurant}/${dishData.id}`}>
                        <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 group">
                            <img
                                src={dishData.imgSrc}
                                alt={`${dishData.name} Logo`}
                                className="h-16 mx-auto mb-2 rounded-lg shadow-lg group-hover:shadow-gray-500/50"
                            />
                            <h3 className="text-lg font-semibold text-center">{dishData.name}</h3>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
};
