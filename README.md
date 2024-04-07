# ClickView Programming Practical

Please try and complete as much of this practical as possible in the allotted time. You will be judged on your overall software design skills, use of language best practices, code reuse, and design patterns. Keep in mind that this is not an assignment and there are no strict marking criteria or rules. We are simply looking for a demonstration of your ability to design and implement software.

## Background

ClickView enables educators to manage media across many platforms. One component of this, is allowing educators to create and manage playlists of videos. 

## Overview

For this practical, we have provided you with the skeleton of a React application for managing playlists of videos. You are tasked with building out this application so that it is fully featured, allowing users to:
- Browse videos and playlists
- Create playlists
- Delete playlists
- Add videos to playlists
- Remove videos from playlists.

**Note**

- Please ensure that you have installed the LTS versions of Node and NPM before proceeding with the practical.
- Please do not modify the any of the files in `api` or `common/db` as these contain the initial data for your application. Feel free to modify any other files we have provided you with.
- We encourage you to attempt the practical with TypeScript, but if you are more comfortable using JavaScript then feel free to use that.

## Task 1: Set up a public git repository and commit the downloaded files

You will submit your code to us via a public git repository. We strongly recommend using GitHub or GitLab, but any public git provider is acceptable.

Start out by committing this codebase in the state that you downloaded it in.
**Please commit your code at the end of every task.**

## Task 2: Display the videos and playlists

We have provided you with 2 API endpoints to fetch your initial data:
- `api/videos`
- `api/playlists`

We have included interfaces for the data:
- `video.ts` For video object
- `playlist.ts` For playlist object

We have also provided you with some pre-made routes:
- `/videos` For browsing videos 
- `/playlists` For browsing playlists

You will need to setup a dynamic route to fetch videos within the playlist with Next.js
- `/playlists/[id]` For browing videos within a playlist

Using the pre-made `playlist-item` and `video-item` components, update these routes to display the appropriate data.

## Task 3: Video management in playlists

Add support for adding videos into playlists, and removing videos from playlists.

How you choose to implement this is up to you! Try to consider what would make for the best user experience in your opinion.

Note: Please ensure that videos cannot be added to a playlist more than once.

## Task 4: Playlist creation/deletion

Add support for creating new playlists, and deleting existing playlists.

## Task 5: You're all done!

If you've made it this far, you've completed all of the tasks and it's time to submit your practical. If you've found yourself with some extra time, feel free to either polish what you've done before submitting or add your own flair to the app.