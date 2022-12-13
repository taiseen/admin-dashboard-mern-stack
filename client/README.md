> 12 - Dec - 2022

# Client Site Dependencies...

|No| Package Installs               | Use for                                   |
|--|--------------------------------|-------------------------------------------|
|1 | yarn add `react-router-dom`    | Declarative routing for React web app     |
|2 | yarn add `react-datepicker`    | date-picker range at UI                   |
|3 | yarn add `react-redux`         | Official React bindings for Redux         |
|4 | yarn add `redux-persist`       | persist and rehydrate redux stores        |
|5 | yarn add `@reduxjs/toolkit`    | tool-set for efficient state management   |
|6 | yarn add `@mui/icons-material` | Icons distributed as SVG React components |
|7 | yarn add `@mui/material`       | Components that implement M. Design       |
|7 | yarn add `@mui/x-data-grid`    | Components that implement M. Design       |
|8 | yarn add `@emotion/react`      | Simple styling in React                   |
|9 | yarn add `@emotion/styled`     | styled API for emotion                    |
|10| yarn add `@nivo/core`          | Nivo Core                                 |
|11| yarn add `@nivo/bar`           | Bar Chart                                 |
|12| yarn add `@nivo/geo`           | Geo Chart                                 |
|13| yarn add `@nivo/line`          | Line Chart                                |
|14| yarn add `@nivo/pie`           | Pie Chart                                 |


<br />

# File / Folder short info...

|No| File / Folder | Usage of...                                |
|--|---------------|--------------------------------------------|
|1 | index         | basic config for react + redux store       |
|2 | App.js        | total app routing + auth + theme setup     |
|3 | components    | all reusable ui components...              |
|4 | api           | all REST API request + auth token add in request header |
|5 | pages         | pages/ui for different URL accessing       |
|6 | redux         | global state data available here accessing |
|7 | styles        | UI level custom css + theme configuration  |

<br />

**.env**

```js
REACT_APP_SERVER_URL = http://localhost:3001/
```


# Leaning Context

* REST API call from a single js file.
* Basic architecture of frontend web application.
* Redux toolkit integration with many different slices.
* Access redux store from non react components or vanilla js files.
* Inside `.env` file variables must start with `REACT_APP_`, then its work.

# File & Folder hierarchy 
```
🟨
src
├── api
|   └── index.js
|
├── components
|   ├── FlexBetween.jsx
|   ├── Friend.jsx
|   ├── UserImage.jsx
|   └── WidgetWrapper.jsx
|
├── pages
|   ├── loginPage
|   |   ├── Form.jsx
|   |   ├── index.jsx
|   |   └── value&validation.js
|   |
|   ├── widgets
|   |   ├── Advert.jsx
|   |   ├── DeletePostDialog.jsx
|   |   ├── FriendList.jsx
|   |   ├── index.js
|   |   ├── NewPostCreate.jsx
|   |   ├── PostsContainer.jsx
|   |   ├── SinglePost.jsx
|   |   └── UserInfo.jsx
|   |
|   ├── HomePage.jsx
|   ├── Navbar.jsx
|   └── UserProfilePage.jsx
|
├── redux
|   ├──features
|   |  ├── authSlice.js
|   |  ├── postSlice.js
|   |  └── themeSlice.js
|   |
|   ├── index.js
|   └── rootReducer.js
|
├── styles
|   ├── index.css
|   └── theme.js
|
├── App.jsx
└── index.js
🟨
```

<br />

# ReactJs | Frontend Basic Data Flow...
<img src="./public/frontendDataFlow.png" />