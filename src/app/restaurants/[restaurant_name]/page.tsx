
export default async function restaurant({ params }: { params: { restaurant_name: string } }) {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"><p>This is {params.restaurant_name} dishes page.</p></main>
    );

}