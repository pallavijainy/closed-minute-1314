<!-- # Image-Editor -->

> 💻 PROJECT CODE ⭐⭐⭐
<h1>✨closed-minute-1314✨</h1>

> 💻 PROJECT NAME ⭐⭐⭐ 
<h1>🃏21 Lucky Game🃏</h1>
<br/>

[![Backend Repo Link](https://img.shields.io/badge/Backend_Repo_Link-0A66C2?style=for-the-badge&logo=github&logoColor=#FF7139)](https://github.com/avinash7488/gameBackend)
[![Deployed on Cyclic](https://img.shields.io/badge/Deployed_Cyclic_Link-0A66C2?style=for-the-badge&logo=ko-fi&logoColor=white)](https://crazy-tan-ray.cyclic.app/)
[![Deployed App on Vercel](https://img.shields.io/badge/Deployed_App_Vercel_Link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://21-lucky-game.vercel.app/)

<!-- ![ShopGIF](https://www.luckymobileslots.com/wp-content/uploads/2016/07/wild_times_logo.jpg) -->

## OBJECTIVE✨

> 21 Lucky Game is a real time full stack single player game. This game is build with the help of MERN Stack, also incorporating dynamic animation to create an immersive gaming experience.

---

## DESCRIPTION✨

- The objective of the game is to get a set of cards in which the sum must be 21. Or you can get as close as possible without bursting if you go over 21, you     lose, if the dealer has 21 or less and you have less points than the dealer, you lose.

- The repo includes both client-side and server-side.

---

## RUN the Game✨

1. Clone this repository.
2. Open the terminal and navigate to the folder.
3. Run the following command to install dependencies:

  ```
  npm install
  ```

4. Run the following command to run the game:

  ```
  npm run dev
  ```

5. Enjoy!

---

## TECH-STACK💫

- #### For Frontend :

  - `HTML5`
  - `CSS3`
  - `JavaScript`
  - `ReactJS`
  - `TypeScript`

- #### For Backend :

  - `NodeJS`
  - `ExpressJS`
  - `MongoDB `

- #### For Styling :

  - `Chakra UI `
  - `CSS-Animations`

- #### For deploying database :

  - `cyclic `

- #### For live Project : -
  - `vercel`

---

## FEATURES✨

| Serial No | Feature                                                                           |
| --------- | --------------------------------------------------------------------------------- |
| 1         | User signup, User Login                                                           |
| 2         | Able to play the game                                                             |
| 3         | Able to see the score                                                             |
| 4         | Dynamic Leaderboard                                                               |

---

# package.json(Dependency)✨

| Serial No | Backend      | Frontend                     |
| --------- | ------------ | ---------------------------- |
| 1         | bcrypt       | chakra-ui                    |
| 2         | mongoose     | react-router-dom             |
| 3         | cors         | react-icons                  |
| 4         | dotenv       | axios                        |
| 5         | express      | typescript                   |
| 6         | jsonwebtoken | react-simple-chatbot         |

---

## Flow✨

```mermaid
graph TD;
    App-->homePage
    homePage-->registerPage;
    homePage-->loginPage;
    registerPage-->gamePage;
    loginPage-->gamePage;
    gamePage-->resultPage
    resultPage-->gamePage
    resultPage-->leaderboardPage
    leaderboardPage-->homePage

```

## Creators Profile Links✨

| Creators                 | Github                                                                                                                                    | Linkedin                                                                                                                                                            | Portfolio                                                                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Pallavi Jain | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pallavijainy) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pallavi-jain-64442a23a/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://pallavijainy.github.io/)  |
| Avinash kumar | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/avinash7488) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/avinash-kumar-b1005b230/)  | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://avinash7488.github.io/) |
| Raj Kumar Sahu | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rajkumarsahu89) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raj-kumar-sahu89/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://rajkumarsahu89.github.io/)     |

---

## Screenshots 📷
---


# HOME-PAGE
  - Home page includes the title of the game (21 Lucky Game) along with the feature to register a new user or to login an existing user, connected with the backend. After the login or registration is successfull, the player will be able to select a theme based on his/her choice and get notified with the help of a 'toast', and will be directly navigated to the 'Gaming Page'.

 ![Screenshot (93)](https://github.com/rajkumarsahu89/Image-Editor/assets/106021391/60a761d3-3650-4125-8e31-f831aa24bf2e)

 ![Screenshot (92)](https://github.com/rajkumarsahu89/Image-Editor/assets/106021391/966b8407-89bc-4c53-9b0e-b4f732bb82d2)

![Screenshot (95)](https://github.com/rajkumarsahu89/Image-Editor/assets/106021391/128ea26d-5322-4e8d-8b51-26ba81559350)

# GAME-PAGE
  
  - HOW TO PLAY :
    - The objective of the game is to get a set of cards in which the sum must be 21. Or you can get as close as possible without bursting if you go over 21, you        lose, if the dealer has 21 or less and you have less points than the dealer, you lose.
    - The numbered cards correspond to their respective value, the cards with letters, the situation changes a little, J, Q and K cards are worth 10 points.
       But "A" card has a value of 1.
    - When you start the game, you will decide if you want more cards, or if you want to keep the amount you received, if you want to take more cards, it may           happen that you exceed the score of 21, if that happens you will lose because the dealer will not ask for cards. But, if you still haven't exceeded, a timer       will appear for you to play in up to 6 seconds, if you don't do anything, you will lose your turn (stay).
    
![Screenshot (97)](https://github.com/rajkumarsahu89/Image-Editor/assets/106021391/b94ebf28-0080-4fea-a5da-ae0ca9d0714e)



  ![Screenshot (99)](https://github.com/rajkumarsahu89/Image-Editor/assets/106021391/84d005f0-0e3c-4d69-b7fd-f075c9e4b6df)


# RESULT-PAGE
  - After the game ends the scores will be shown on this page.

  ![Screenshot (101)](https://github.com/rajkumarsahu89/Image-Editor/assets/106021391/60edd8e4-3610-4e45-9e7f-d4b60426e25c)


# LEADERBOARD
  - The ranking of all the players registered with us will be shown here with their all time scores and level they have crossed.

  
![Screenshot (103)](https://github.com/rajkumarsahu89/Image-Editor/assets/106021391/d4bb2b40-d901-47a6-b49c-15254cb27ebd)

---

## Reference✨

- [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)
- [Framer Motion](https://www.framer.com/motion/)

---

<h1 align="center">✨Thank You✨</h1>

