import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string
}

const prisma = new PrismaClient();


export default async function seed(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    await prisma.dish.deleteMany({});
    await prisma.restaurant.deleteMany({});



    const restaurants = [
        {
            name: 'RT',
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWyUde6ONwd-MjTb85lETQxZ_byflktJJlaV0b6M&s',
        },
        {
            name: 'Ridan',
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecdP3eXCKzGnelFtNx1xvGN3Tn9_S2Z-noD8i29SBiIXaqS1ixSVSxyx4i-PDRvJSpr4&usqp=CAU',
        },
        {
            name: 'Kfc',
            logoSrc: 'https://images.unsplash.com/photo-1542488246-1390a9a99a30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        },
        {
            name: 'Bitesforlife',
            logoSrc: "https://media.istockphoto.com/id/1454795758/photo/chickpea-bean-fusilli-pasta-on-a-gray-textile-background.jpg?s=1024x1024&w=is&k=20&c=810utEXylnYKFxFz5IXJhOEIHu6R4ZwogWrAV1FpVdc="
        },
        {
            name: 'Donuts',
            logoSrc: 'https://media.istockphoto.com/id/1324328377/photo/pink-box-donuts.jpg?s=1024x1024&w=is&k=20&c=DvRNSPl5yqUB02lvLVwP62TdXrEP97zu9ykJaMi8bQE=',
        },
        {
            name: 'Icecream',
            logoSrc: 'https://media.istockphoto.com/id/1472157425/photo/trio-of-tasty-chocolate-vanilla-and-strawberry-flavored-frozen-dessert-in-a-blue-bowl-with.webp?s=1024x1024&w=is&k=20&c=pUr2-vv6JyWIPBJyzGbgGcX5agFKWQHFy2HSAsgeCgc=',
        },
    ];


    for (const restaurantData of restaurants) {
        await prisma.restaurant.create({
            data: restaurantData,
        });
    }

    const restaurantsData = await prisma.restaurant.findMany();


const rtId = restaurantsData.find((restaurantData) => restaurantData.name === 'RT')?.id || 1

    let dishesData = [
        {
            name: 'Daal makhni',
            course: 'Main course',
            cuisine: 'Pakistani',
            restaurantId: rtId,
            imgSrc: "https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg%22"
        },
        {
            name: 'Fish',
            course: 'Main course',
            cuisine: 'Pakistani',
            restaurantId: rtId,
            imgSrc: "https://media.istockphoto.com/id/1295772368/photo/macher-jhol-in-black-bowl-on-dark-slate-table-top-indian-cuisine-bengali-fish-curry-asian.jpg?s=1024x1024&w=is&k=20&c=1RMq2BAk4ZEWQ27jKeVZxjE1_EfZPK5wwxGI3zbDH60="
        },
        {
            name: 'Chicken',
            course: 'Main course',
            cuisine: 'Pakistani ',
            restaurantId: rtId,
            imgSrc: "https://media.istockphoto.com/id/666553456/photo/chicken-tikka-jalfrezi-indian-food.jpg?s=1024x1024&w=is&k=20&c=SwMFqGWa4XXig_NEVW_Sv-e026rmcQQDllt_675jJ2A="
        },
        {
            name: 'Salad',
            course: 'Sidelines',
            cuisine: 'Pakistani ',
            restaurantId: rtId,
            imgSrc: "https://media.istockphoto.com/id/1454741285/photo/roast-fish-and-vegetable-salad-on-wooden-background.jpg?s=1024x1024&w=is&k=20&c=wdcyonmdYE1vfBV-xmUoLP0QNbD6c_x816x4dESFBkk="
        },
    ];

    for (const dishData of dishesData) {
        await prisma.dish.create({
            data: dishData,
        });
    }


    // ridan

    const ridanId = restaurantsData.find((restaurantData) => restaurantData.name === 'Ridan')?.id || 1

    dishesData = [
        {
            name: 'Mandi',
            course: 'Main Course',
            cuisine: 'Arabic',
            restaurantId: ridanId,
            imgSrc: "https://media.istockphoto.com/id/1292894074/photo/lamb%C2%A0haneeth%C2%A0is-a-traditional-dish-with-basmati-rice-close-up-in-a-frying-pan-horizontal.jpg?s=1024x1024&w=is&k=20&c=BP1PYwpR9otc-kYbz4zgPKuuJ-E4ZRtrnMOcrrBpAdA="
        },
        {
            name: 'Karahi',
            course: 'Main Course',
            cuisine: 'Arabic',
            restaurantId: ridanId,
            imgSrc: "https://media.istockphoto.com/id/673858790/photo/butter-chicken-curry-with-tender-chicken-breast-cream-butter-honey.jpg?s=1024x1024&w=is&k=20&c=o_y1qLvkh8uDdxKQBtKeUbpimK5eqx6OsjZxQrbtr0k="
        },
        {
            name: 'Kunafa',
            course: 'Main Course',
            cuisine: 'Arabic',
            restaurantId: ridanId,
            imgSrc: "https://media.istockphoto.com/id/1363891849/photo/arabic-traditional-dessert-kunafa-konafa-in-a-tray-with-pistachio-creative-delicious-middle.jpg?s=1024x1024&w=is&k=20&c=W1I6psZza7vMzJiqLyDYYsDSuY_ruOu_wuM9FQIUPXg="
        },
        {
            name: 'Icecream',
            course: 'Main Course',
            cuisine: 'Arabic',
            restaurantId: ridanId,
            imgSrc: "https://media.istockphoto.com/id/1326143969/photo/bowl-with-vanilla-ice-cream-balls.jpg?s=1024x1024&w=is&k=20&c=5iNhBGaZZlRLxBdO_01enZqq2h_LFiaSIbHRruat8aE="
        },

    ];

    for (const dishData of dishesData) {
        await prisma.dish.create({
            data: dishData,
        });
    }


    //kfc

const kfcId = restaurantsData.find((restaurantData) => restaurantData.name === 'Kfc')?.id || 1

dishesData = [
        {
            name: 'Wings',
            course: 'Main Course',
            cuisine: 'Eastern',
            restaurantId: kfcId,
            imgSrc: "https://www.istockphoto.com/photo/kfc-kentucky-grilled-chicken-bucket-gm458237151-26258761?phrase=Rice+n+spice+kfc"
        },
        {
            name: 'Burger',
            course: 'Main Course',
            cuisine: 'Eastern',
            restaurantId: kfcId,
            imgSrc: "https://www.istockphoto.com/photo/kfc-kentucky-grilled-chicken-bucket-gm458237151-26258761?phrase=Rice+n+spice+kfc"
        },
        {
            name: 'Ricenspice',
            course: 'Main Course',
            cuisine: 'Eastern',
            restaurantId: kfcId,
            imgSrc: "https://www.istockphoto.com/photo/kfc-kentucky-grilled-chicken-bucket-gm458237151-26258761?phrase=Rice+n+spice+kfc"
        },
        {
            name: 'Icecream',
            course: 'Main Course',
            cuisine: 'Eastern',
            restaurantId: kfcId,
            imgSrc: "https://media.istockphoto.com/id/1161805849/photo/strawberry-vanilla-chocolate-ice-cream-with-waffle-cone-on-marble-stone-backgrounds.jpg?s=1024x1024&w=is&k=20&c=jO42nXxcRqDgUT8T_1b-B1VBLGQW8u6ubxgHUkHpnjs="
        },

    ];

    for (const dishData of dishesData) {
        await prisma.dish.create({
            data: dishData,
        });
    }




    // bites4life

    const biteId = restaurantsData.find((restaurantData) => restaurantData.name === 'Bitesforlife')?.id || 1

    dishesData = [
            {
                name: 'Pasta',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: biteId,
                imgSrc: "https://media.istockphoto.com/id/1325172440/photo/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-olives-capers-anchovies-and.webp?s=1024x1024&w=is&k=20&c=eVgrg7L-CSj8fIT9oypFzn5xUB0N2-bbDmAtJiUCb0I="
            },
            {
                name: 'Chowmein',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: biteId,
                imgSrc: "https://media.istockphoto.com/id/1397240189/photo/mongolian-shrimp-with-udon-noodles.jpg?s=1024x1024&w=is&k=20&c=2uGRIWoHgY9oy8e5sqEWQEtNfSVUEaYS1qkEbmTO8kI="
            },
            {
                name: 'Fries',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: biteId,
                imgSrc: "https://media.istockphoto.com/id/966934632/photo/appetizing-french-fries-in-a-bowl.jpg?s=1024x1024&w=is&k=20&c=-4u3QPCq7tzCZtLj8guGP7jMsr_WLB36o_bGMWH99-E="
            },
            {
                name: 'Icecream',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: biteId,
                imgSrc: "https://media.istockphoto.com/id/1161805849/photo/strawberry-vanilla-chocolate-ice-cream-with-waffle-cone-on-marble-stone-backgrounds.jpg?s=1024x1024&w=is&k=20&c=jO42nXxcRqDgUT8T_1b-B1VBLGQW8u6ubxgHUkHpnjs="
            },

        ];

        for (const dishData of dishesData) {
            await prisma.dish.create({
                data: dishData,
            });
        }




    //  Donuts



    const donutId = restaurantsData.find((restaurantData) => restaurantData.name === 'Donuts')?.id || 1

    dishesData = [
            {
                name: 'Chocolate Donut',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: donutId,
                imgSrc: "https://media.istockphoto.com/id/686623972/photo/preparing-homemade-donuts.jpg?s=1024x1024&w=is&k=20&c=Qr7r53rXrE0lvfZeqmAwKYU7tZCfZuCloq7CvY6NC4k="
            },
            {
                name: 'Ice Donut',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: donutId,
                imgSrc: "https://media.istockphoto.com/id/1456999457/photo/easter-eggs-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=mwgdpmuN0DbU3DkjAUFycyG2cGpgu8j4-ldq-OJsNOI="
            },
            {
                name: 'Lava Donut',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: donutId,
                imgSrc: "https://media.istockphoto.com/id/1076620792/photo/pink-sweet-donut.jpg?s=1024x1024&w=is&k=20&c=idw4JyhgDPtt8j3-3Tn8YAQUEdmZRpyAuJw3HkrA3L0="
            },
            {
                name: 'Cream Donut',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: donutId,
                imgSrc: "https://media.istockphoto.com/id/624745020/photo/chocolate-donut.jpg?s=1024x1024&w=is&k=20&c=OvZTbZ8nli8bdn3pVbE-ZLkerzY9S8CTxNAbTQgNsTk="
            },

        ];

        for (const dishData of dishesData) {
            await prisma.dish.create({
                data: dishData,
            });
        }

    // Icecream


    const IcecreamId = restaurantsData.find((restaurantData) => restaurantData.name === 'Icecream')?.id || 1

    dishesData = [
            {
                name: 'Chocolate Icecream',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: IcecreamId,
                imgSrc: "https://media.istockphoto.com/id/1396358856/photo/chocolate-strawberry-and-vanilla-ice-cream.jpg?s=1024x1024&w=is&k=20&c=1Ki06sPUFb7nlYP4s-z47hA7Gp9KgnMLs5Sn7j0_9Yk="
            },
            {
                name: 'Ice Icecream',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: IcecreamId,
                imgSrc: "https://media.istockphoto.com/id/1438581253/photo/closeup-of-an-ice-cream.jpg?s=1024x1024&w=is&k=20&c=vF8UpIEhrqKBTfc6gxla-ypWm4xMNH25heXIHcUgVkM="
            },
            {
                name: 'Lava Icecream',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: IcecreamId,
                imgSrc: "https://media.istockphoto.com/id/1396897706/photo/vanilla-soft-serve-ice-cream-cone.jpg?s=1024x1024&w=is&k=20&c=HZESqo8KHrjKvELLHX908rgVLYfa5UmUy6nL22pf0DI="
            },
            {
                name: 'Cream Icecream',
                course: 'Main Course',
                cuisine: 'Eastern',
                restaurantId: IcecreamId,
                imgSrc: "https://media.istockphoto.com/id/1495674111/photo/triple-scoop-pastel-theme-ice-cream-cone-isolated-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=kopzbhoL6BvrMLB5GjKH3yDFyxcyoITrqRwdNx14hhQ="
            },

        ];

        for (const dishData of dishesData) {
            await prisma.dish.create({
                data: dishData,
            });
        }


    res.status(200).json({ message: "Data inserted" });


}
