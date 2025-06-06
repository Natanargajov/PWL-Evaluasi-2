import { getNews } from "@/lib/getNews";

export default async function Home() {
  const articles = await getNews();

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {articles.map((article, idx) => (
        <a
          key={idx}
          href={`/detail?url=${encodeURIComponent(article.url)}`}
          className="border rounded shadow p-2"
        >
          <img
            src={article.image || "/default.jpg"}
            alt=""
            className="h-48 w-full object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
          <p className="text-sm text-gray-500">
            {article.publishedAt} • {article.source}
          </p>
        </a>
      ))}
    </div>
  );
}
