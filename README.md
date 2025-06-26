# 🎬 Streamify — Lightweight OTT Platform

**Streamify** is a sleek and modern OTT (Over-The-Top) platform built using **HTML**, **CSS**, and **JavaScript**. It allows users to browse and stream movies via embedded YouTube links with genre filtering, search functionality, and a responsive layout. 


## 🌟 Features

- 🎞️ Browse movies by **genre**
- 🔍 **Real-time search** functionality
- 💻 **Responsive UI** with mobile-first design
- 📺 Video streaming via **YouTube embed**

## 🛠️ Technologies Used

| Tool / Library        | Purpose                          |
|------------------------|-----------------------------------|
| HTML5                  | Structure and markup              |
| CSS3                   | Styling and responsive layout     |
| JavaScript             | Functionality and interactivity   |
| YouTube Embed          | Video playback                    |


## 📁 Project Structure
```
streamify/
├── index.html          // Home page with movie cards
├── watch.html          // Watch page with video player
├── style.css           // All custom styles
├── script.js           // Handles movie rendering and filtering
├── data.js             // Movie data (title, poster, videoId, etc.)
└── README.md           // This documentation
```

## 🚀 Live Preview

🎥 Check out the live version of **Streamify** here:  
👉 [Click Here](https://niteshgurjarr.github.io/streamify)


## 📽️ How It Works

### 🎬 Home Page (`index.html`)
- Displays a grid of movie cards with **title**, **poster**, **description**, **duration**, and a **"Watch Now"** link.
- Genre buttons filter movies based on selected type.
- Search input filters movies by title in real-time.

### ▶️ Watch Page (`watch.html`)
- Extracts `videoId` from URL query string.
- Embeds the corresponding **YouTube video**.
- Shows an error message if the video ID is missing or invalid.

## 🙋‍♂️ Credits

**[Nitesh Gurjar](https://github.com/niteshgurjarr)**  


## Fun Fact

All movie posters in Streamify are fetched directly from YouTube using this clever trick: <br>
https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg <br>
Just replace `VIDEO_ID` with the actual YouTube ID of the video — no external image hosting needed!
