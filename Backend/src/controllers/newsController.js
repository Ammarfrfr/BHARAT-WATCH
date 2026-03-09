import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import NewsArticle from "../models/newsArticle.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllNews = asyncHandler(async (req, res) => {
  const newsArticles = await NewsArticle.find().sort({ pubDate: -1 });
  if (!newsArticles.length) {
    throw new ApiError(404, "No news articles found");
  }
  res
  .status(200)
  .json(
    new ApiResponse(200, newsArticles, "News articles retrieved successfully")
  );  
})

export {
  getAllNews,
}