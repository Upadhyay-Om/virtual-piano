# virtual-piano
🎹 A simple interactive virtual piano built with HTML, CSS, and JavaScript. Play notes using your keyboard or mouse!
# Virtual Piano 🎹

An interactive piano simulator built with **HTML, CSS, and JavaScript**.  
You can play notes using your **computer keyboard** or by **clicking the keys with your mouse**.  
The piano includes realistic key press animations and responsive styles for a smooth experience.

---

## ✨ Features
- Play piano notes with both **keyboard** and **mouse clicks**
- Visual feedback with `:hover`, `:active`, and custom `.playing` animations
- White and black keys styled like a real piano
- Lightweight and beginner-friendly project

---

## 🚀 Tech Stack
- **HTML5**
- **CSS3** (Flexbox, transitions, shadows, pseudo-classes)
- **Vanilla JavaScript** (DOM manipulation, event listeners, dataset attributes)

---

## 🧠 What I Learned
While building this project, I explored a lot of new concepts:

### 🔹 CSS
- Using `:hover` to change styles when the mouse is over a key
- Using `:active` to simulate a key being pressed
- Creating custom animations by adding/removing a `.playing` class with JavaScript
- Using `box-shadow` with `inset` to give a **pressed-in effect**

### 🔹 JavaScript
- Handling **keyboard events**: `keydown` and `keyup`
- Handling **mouse events**: `click`
- Using `querySelector` and `querySelectorAll` to target DOM elements
- Converting `NodeList` to an array with `Array.from()` so I can use `.forEach`
- Reading custom `data-*` attributes with `dataset`
- Using `setTimeout` to reset the animation state after a short delay
- Resetting audio with `audio.currentTime = 0` to allow rapid note replay

---

## 🎯 Purpose
This project was built as part of my **JavaScript learning journey**.  
It helped me practice combining **HTML, CSS, and JavaScript** to build something interactive and fun.  

---

## ▶️ Demo
https://upadhyay-om.github.io/virtual-piano/
