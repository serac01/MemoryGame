# 🧠 Memory Game

> A Memory Game developed throughout the **Script Languages** course at the **Instituto Superior de Engenharia de Coimbra (ISEC)**.

This project documents the evolution of the same application over **10 practical assignments**, starting with **vanilla JavaScript** and progressively migrating to **React**, introducing component-based development, state management and React Hooks.

---

# ✨ Features

- 🎮 Interactive Memory Game
- 🃏 Dynamic card generation
- 🎲 Random card shuffle
- 📊 Multiple difficulty levels
- ⏱ Countdown timer
- ⭐ Score system
- ✅ Pair detection
- 🏆 Game over detection
- 🔄 Restart game
- ⚛ React state management
- 🎯 Responsive interface

---

# 🚀 Technologies

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- React Hooks
- Node.js
- npm

---

# 📚 Course Progress

The project was developed over **10 laboratory assignments**, each introducing new JavaScript and React concepts.

| Assignment | Main Topics |
|------------|-------------|
| 1 | JavaScript fundamentals |
| 2 | DOM manipulation |
| 3 | Events and interactions |
| 4 | Memory game logic |
| 5 | Scoring system |
| 6 | Game improvements |
| 7 | React introduction |
| 8 | React components |
| 9 | State management (`useState`) |
| 10 | React Hooks (`useEffect`) and dynamic game generation |

---

# 🎮 Gameplay

The objective is simple:

- Select a difficulty level.
- Memorize the cards.
- Flip two cards.
- Find every matching pair before the timer reaches zero.

Difficulty levels change the total number of pairs available.

| Level | Number of Pairs |
|--------|----------------:|
| Basic | 3 |
| Intermediate | 6 |
| Advanced | 10 |

---

# 🧩 Main React Components

```
App
│
├── Header
├── ControlPanel
├── GamePanel
│      └── Card
└── Footer
```

Each component has its own JSX and CSS file, promoting modularity and maintainability.

---

# ⚛ React Concepts

Throughout the project several React concepts were explored:

- Functional Components
- JSX
- Props
- Component composition
- useState
- useEffect
- Conditional rendering
- Dynamic rendering using `.map()`
- Keys
- Component lifecycle

---

# 🕹 Game Logic

The game includes:

- Random card generation
- Card duplication
- Card shuffling
- Pair verification
- Score calculation
- Countdown timer
- End-game detection
- Automatic reset

---

# 📁 Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── ControlPanel/
│   ├── GamePanel/
│   └── Card/
│
├── constants/
│
├── helpers/
│
├── App.js
└── index.js
```

---

# 🏃 Running the project

## Clone

```bash
git clone https://github.com/serac01/MemoryGame.git
```

## Install dependencies

```bash
npm install
```

## Start

```bash
npm start
```

Open

```
http://localhost:3000
```

---

# 🎯 Learning Objectives

This project demonstrates:

- Modern JavaScript
- React fundamentals
- Component-based architecture
- State management
- Event handling
- DOM rendering
- Functional programming concepts
- Front-end application structure

---

# 📄 License

This project was developed for the **Script Languages** course at the **Instituto Superior de Engenharia de Coimbra (ISEC)**.

It is intended for educational purposes.
