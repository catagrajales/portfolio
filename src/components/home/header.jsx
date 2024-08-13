export const Header = () => {
    return (
      <header className="bg-[#008F8C] text-[#D8FFDB] py-8 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold">Catalina Grajales</h1>
              <p className="text-lg text-[#D8FFDB]/80">Software Engineer</p>
            </div>
            <div className="flex justify-end">
              <img
                src="/catalina-grajales.jpeg"
                alt="Catalina Grajales"
                className="rounded-full w-30 h-30"
                width="120"
                height="120"
                style={{ aspectRatio: "120/120", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </header>
    )
};