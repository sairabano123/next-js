import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

interface restaurantsInterface {
    id: number;
    name: string;
    logoSrc: string;
}

export default async function restaurants() {

    const prisma = new PrismaClient();


    const restaurantsData: restaurantsInterface[] = await prisma.restaurant.findMany();

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold">Restaurants Listings</h2>
            <div className="grid grid-cols-4 gap-4">
                {restaurantsData.map((restaurantData: restaurantsInterface) => (
                    <Link key={restaurantData.id} href={`/restaurants/${restaurantData.name}`}>
                        <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 group">
                            <img
                                src={restaurantData.logoSrc}
                                alt={`${restaurantData.name} Logo`}
                                className="h-16 mx-auto mb-2 rounded-lg shadow-lg group-hover:shadow-gray-500/50"
                            />
                            <h3 className="text-lg font-semibold text-center">{restaurantData.name}</h3>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}