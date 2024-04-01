/**
 * For demo purposes I am using only memory for post storage
 * I would not do this if this was a production application
 * 
 * I asked ChatGPT to generate some test data for me so the application
 * would be a bit more interesting when it is started up
 */

import { Post } from "@/types/post/Post";

export let posts: Post[] = [
  {
    timestamp: "2024-03-31T14:55:23Z",
    username: "user123",
    content:
      "Just had the best pizza ever at the new place downtown! #foodie #pizza",
    topics: ["foodie", "pizza"],
  },
  {
    timestamp: "2024-03-31T15:10:47Z",
    username: "nature_lover",
    content:
      "Spent the morning hiking in the mountains. Nature is so healing. #hiking #nature #mountains",
    topics: ["hiking", "nature", "mountains"],
  },
  {
    timestamp: "2024-03-31T16:20:55Z",
    username: "tech_guru",
    content:
      "Exploring the latest in AI technology at the conference this week. So much to learn! #AI #technology",
    topics: ["AI", "technology"],
  },
  {
    timestamp: "2024-03-31T17:45:33Z",
    username: "bookworm1984",
    content:
      "Just finished 'The Great Gatsby'. A timeless masterpiece. #books #classic",
    topics: ["books", "classic"],
  },
  {
    timestamp: "2022-04-01T09:30:00Z",
    username: "adventureseeker",
    content:
      "Skydiving is one of the most exhilarating experiences I've ever had! #adventure #skydiving",
    topics: ["adventure", "skydiving"],
  },
  {
    timestamp: "2022-06-15T11:45:00Z",
    username: "healthy_eats",
    content:
      "Experimenting with vegan recipes this week. Who knew lentils could be so versatile? #foodie #vegan",
    topics: ["foodie", "vegan"],
  },
  {
    timestamp: "2022-08-23T14:22:00Z",
    username: "globetrotter",
    content:
      "Just booked my trip to Japan! Can't wait to experience the culture and cuisine. #travel #Japan",
    topics: ["travel", "Japan"],
  },
  {
    timestamp: "2022-10-05T16:30:00Z",
    username: "tech_guru",
    content:
      "The new smartphone release has some impressive specs. Battery life is a game changer! #technology #gadgets",
    topics: ["technology", "gadgets"],
  },
  {
    timestamp: "2023-01-12T19:55:00Z",
    username: "nature_lover",
    content:
      "There's nothing like a quiet walk in the forest to reset your mind. #nature #hiking",
    topics: ["nature", "hiking"],
  },
  {
    timestamp: "2023-03-28T08:20:00Z",
    username: "cinema_buff",
    content:
      "Rewatched 'Inception' last night. That movie never gets old. #movies #classic",
    topics: ["movies", "classic"],
  },
  {
    timestamp: "2023-05-30T13:47:00Z",
    username: "fashionista",
    content:
      "Summer fashion is all about bold colors and patterns this year. #fashion #summer",
    topics: ["fashion", "summer"],
  },
  {
    timestamp: "2023-07-18T17:05:00Z",
    username: "bookworm1984",
    content:
      "I'm starting a book club! First up: '1984' by George Orwell. Interested? #books #bookclub",
    topics: ["books", "bookclub"],
  },
  {
    timestamp: "2023-09-24T20:16:00Z",
    username: "music_maven",
    content:
      "Just discovered a great new band from Australia. Music is the universal language. #music #newfinds",
    topics: ["music", "newfinds"],
  },
  {
    timestamp: "2023-12-15T22:30:00Z",
    username: "green_thumb",
    content:
      "Winter is a tough time for my garden, but it's planning season! #gardening #green",
    topics: ["gardening", "green"],
  },
  {
    timestamp: "2024-02-27T05:40:00Z",
    username: "tech_guru",
    content:
      "Attending a workshop on blockchain technology. The potential applications are endless. #technology #blockchain",
    topics: ["technology", "blockchain"],
  },
  {
    timestamp: "2024-03-20T12:10:00Z",
    username: "pet_lover",
    content:
      "My cat just did the funniest thing! Pets really do make life better. #pets #funny",
    topics: ["pets", "funny"],
  },
];
  
