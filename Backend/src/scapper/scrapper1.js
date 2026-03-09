import Parser from "rss-parser";
const parser = new Parser();

const TOPICS = [
  {keyword: "rape sexual assault india", type: "rape"}, 
  {keyword: "protest violent india", type: "protest"},
  {keyword: "violent murder india", type: "murder"},
  {keyword: "violent riots india", type: "riot"}
]

async function fetchNews (keyword) {
  const feed = await parser.parseURL(`https://news.google.com/rss/search?q=${keyword}`);
  return feed.items
}

async function fetchAllNews(){
  for(const topic of TOPICS){
    const items = await fetchNews(topic.keyword)
    for (const item of items){
      const newsSource = item.title;
      const str = newsSource.split("-")
      const source = str[str.length - 1]

      const link = item.link
      const pubDate = item.pubDate
      const title = item.title

      console.log(`Soure: ${source}\nTitle: ${title}\nLink: ${link}\nPublished On: ${pubDate}\nType: ${topic.type}`)
    }
  }
  process.exit(1)
}

fetchAllNews();