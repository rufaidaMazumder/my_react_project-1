1...What is JSX, and why is it used in React?

=> JSX lets us write HTML-like code inside JavaScript. React uses it because it makes it easier to see what the UI will look like instead of writing everything with plain JavaScript functions. 

2...What is the difference between props and state?

=> Props are values passed from a parent component to a child component, and the child cannot change them. State is data a component keeps and manages by itself, and it can change when the user interacts with the app. 

3...What does the useState hook do, and where did you use it in this project?

=> useState lets a component store and update its own data. In this project I used it in App.tsx for technologies, loading, error, and stack, and in Navbar.tsx to open and close the mobile menu. 

4...What does the useEffect hook do, and why did you need it to load the JSON data?

=> useEffect runs code after the component renders, like fetching data. I needed it to load the technology data from data.json when the app first loads, since fetching should not happen during rendering. 

5...Why does every item in a .map() list need a unique key prop?

=> The key helps React know which item changed, was added, or was removed, so it can update the list correctly. Without a key, React may update the wrong item on screen. 

6...What is conditional rendering? Show one place you used it.

=>  Conditional rendering means showing different content based on a condition. I used it in Sidebar.tsx, where it shows an empty stack message when stack.length is 0, and shows the list of items otherwise. 

7...How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

=> Data is passed from parent to child using props. For example, App.tsx passes stack and technologies to MainLayout. A child sends data back by calling a function passed as a prop, like TechCard calling handleAddToStack, which was defined in App.tsx.