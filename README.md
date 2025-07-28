#  URL Shortener (Frontend Only)

A clean and simple **URL Shortener** built using **React.js (v18)** that allows users to:

- Convert long URLs into short ones
- Add a custom short code (optional)
- Set a validity period (in days)
- View and manage shortened links with expiration info

>  This is a frontend project. All data is stored locally in the browser's `localStorage`.

---

## Screenshots

### Home Page (Shortener)
<img width="2879" height="1542" alt="image" src="https://github.com/user-attachments/assets/c61934c7-c7d9-44c4-ad5d-d488056d4139" />


### Statistics Page

<img width="2873" height="1503" alt="image" src="https://github.com/user-attachments/assets/2f728199-ae35-4aed-9980-f1e2ce292612" />

---
## how to Open

### 1. Clone the repository

```
git clone https://github.com/Shraddharai412/22881A05Q4.git
cd 22881A05Q4_Frontend

npm install
npm start
```
Project Structure
```
src/
├── components/
│   ├── Navbar.js
│   ├── URLForm.js
│   ├── URLCard.js
│   └── Statistics.js
├── middleware/
│   └── logger.js
├── pages/
│   ├── ShortenerPage.js
│   └── StatisticsPage.js
├── utils/
│   └── validators.js
├── App.js
└── index.js
```


 Features

- Create short URLs from long ones

- Add optional custom code (e.g., shr.tn/mycode)

- Set validity duration (in days)

- See stats of all generated links

- Data persistence using localStorage

- Handles duplicate custom code with friendly errors


 Tech Stack

 - React 18

 - Pure CSS (no Tailwind or Bootstrap)

 - localStorage for persistence





