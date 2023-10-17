import { PrismaClient } from "@prisma/client";

export default async function dish({ params }: { params: { dish_id: any } }) {
    const id = parseInt(params.dish_id);
    const prisma = new PrismaClient();
    const dishData = await prisma.dish.findUnique({
        where: {
            id: id
        }
    })

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-semibold text-center mb-6">{dishData?.name}</h2>
            <div className="flex flex-col lg:flex-row items-center rounded-lg shadow-lg p-4">
                <div className="lg:w-1/3">
                    <img
                        src={dishData?.imgSrc}
                        alt={`${dishData?.name} Image`}
                        className="w-full h-auto lg:w-64 lg:h-64  mx-auto rounded-lg"
                    />
                </div>
                <div className="lg:w-2/3 mt-4 lg:mt-0">
                    <div className="bg-white p-6 ">
                        <h3 className="text-2xl font-semibold mb-4">Dish Details</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <p className="text-gray-700 font-semibold">Name</p>
                                <p>{dishData?.name}</p>
                            </div>
                            <div>
                                <p className="text-gray-700 font-semibold">Cuisine</p>
                                <p>{dishData?.cuisine}</p>
                            </div>
                            <div>
                                <p className="text-gray-700 font-semibold">Course</p>
                                <p>{dishData?.course}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}