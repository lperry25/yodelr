/**
 * For demo purposes I am using only memory for user storage
 * I would not do this if this was a production application
 * 
 * ChatGPT generated users to match the posts it generated
 * You can login with these users
 */

import { User } from "@/types/auth/User";

export let users: User[] = [
  {
    username: "user123",
    token: "fake_jwt_token_for_user123",
    password: "password123",
  },
  {
    username: "nature_lover",
    token: "fake_jwt_token_for_nature_lover",
    password: "secretPassword!",
  },
  {
    username: "tech_guru",
    token: "fake_jwt_token_for_tech_guru",
    password: "techIsCool123",
  },
  {
    username: "bookworm1984",
    token: "fake_jwt_token_for_bookworm1984",
    password: "readBooks!",
  },
  {
    username: "adventureseeker",
    token: "fake_jwt_token_for_adventureseeker",
    password: "adventureAwaits",
  },
  {
    username: "healthy_eats",
    token: "fake_jwt_token_for_healthy_eats",
    password: "eatWellLiveWell",
  },
  {
    username: "globetrotter",
    token: "fake_jwt_token_for_globetrotter",
    password: "travelTheWorld",
  },
  {
    username: "cinema_buff",
    token: "fake_jwt_token_for_cinema_buff",
    password: "movies4ever",
  },
  {
    username: "fashionista",
    token: "fake_jwt_token_for_fashionista",
    password: "fashionForward",
  },
  {
    username: "music_maven",
    token: "fake_jwt_token_for_music_maven",
    password: "musicIsLife",
  },
  {
    username: "green_thumb",
    token: "fake_jwt_token_for_green_thumb",
    password: "plantsAreFriends",
  },
  {
    username: "pet_lover",
    token: "fake_jwt_token_for_pet_lover",
    password: "petsRgreat",
  },
];
