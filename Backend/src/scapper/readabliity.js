import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import Parser from 'rss-parser';
const parser = new Parser();

const keyword = "rape sexual assault india"

async function fetchNews(keyword) {
  const feed = await parser.parseURL(`https://news.google.com/rss/search?q=${keyword}`);
  return feed.items
}

fetchNews(keyword).then(items => {
  for (const item of items) {
    // console.log(item.link);
    // // console.log(item.title);
    // console.log(items[0].content)
    // console.log(items[0].contentSnippet)
  }
  return items[0].link
})

async function decodeGoogleNewsUrl(googleUrl) {
  const response = await fetch(googleUrl)
  console.log(response.url) // this will show the real URL after redirect
  return response.url // after redirect, this is the real URL
}

decodeGoogleNewsUrl('https://news.google.com/rss/articles/CBMiX0FVX3lxTE1mX1JRaEdOZ2lIUlpwS1VVZ0FtckVGU2lDTzBwVUdPQ3Exc0haZTk5bXo0Sm1DSV81T2lvRHE3djBWb05VSm9lWVNtMUlZSHh1T1A1OGdjS1Z2YjdGcr1N?oc=5')

// async function extractArticleText(url) {
//   const response = await fetch(url);
//   const html = await response.text()
//   const dom = new JSDOM(html, { url })
//   const reader = new Readability(dom.window.document)
//   const article = reader.parse()
//   console.log(article.textContent)
// }

async function extractArticleText(url) {
  const response = await fetch(url)
  const html = await response.text()
  console.log(html.slice(0, 500)) // first 500 chars
}

extractArticleText('https://news.google.com/rss/articles/CBMiX0FVX3lxTE1mX1JRaEdOZ2lIUlpwS1VVZ0FtckVGU2lDTzBwVUdPQ3Exc0haZTk5bXo0Sm1DSV81T2lvRHE3djBWb05VSm9lWVNtMUlZSHh1T1A1OGdjS1Z2YjdGck1N?oc=5')