export async function getNews() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=id&pageSize=6&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data = await res.json();
  return data.articles.map((article: any) => ({
    title: article.title.slice(0, 100),
    image: article.urlToImage,
    url: article.url,
    publishedAt: new Date(article.publishedAt).toLocaleString(),
    source: article.source.name,
  }));
}
