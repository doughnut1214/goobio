import Header from "../components/Header"

export default function Custom404() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Header />
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

                <h1 className=" font-bold">404 - Page Not Found  </h1>


            </main>

        </div>

    )
}