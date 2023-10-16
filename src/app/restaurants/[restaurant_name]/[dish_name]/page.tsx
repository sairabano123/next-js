export default function dish({ params }: { params: { dish_name: any } }) {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"><p>This is detail page for {params.dish_name}</p></main>
    );
}