What is Redux?

 Redux provides a way to store and manage the data that your application needs to work. It follows a strict pattern to ensure that state changes are predictable and manageable.

---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------


Why Use Redux for Data Management?


    Centralized State Management:

         Redux stores the application's state in a single store, making it easier to manage and debug compared to having scattered state across multiple components.

    Predictable State Changes: 

        State mutations are done through reducers, which are pure functions. This ensures that state changes are predictable and traceable, making it easier to understand how data flows through your application.

    Easier Debugging:

         With a single source of truth, debugging becomes simpler. You can log state changes, track actions, and even implement time-travel debugging (via Redux DevTools) to replay actions and inspect state at any point in time.

    Facilitates Testing:
    
         Since reducers are pure functions that depend only on their input and produce predictable output, testing becomes straightforward. You can easily test how reducers update the state in response to different actions.

    Enforces Unidirectional Data Flow:
        
         Redux follows a strict unidirectional data flow pattern. Data flows in one direction: actions are dispatched, reducers update the state immutably, and components subscribe to the changes they're interested in. This pattern simplifies data management and reduces bugs related to inconsistent state.

    Eases State Persistence: 
    
        Redux makes it easier to persist your application state across sessions or store it locally, enhancing the user experience by preserving data between visits.

    Scalability: 
    
        Redux scales well with large applications because of its centralized state management. As your application grows, managing state becomes more manageable and less error-prone compared to using local component state or prop drilling.


---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------

![alt text](image.png)


---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------

![alt text](image.png)


---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------


1. make store 
    create redux folder 
    indside make store.js and export
    in main.jsx use Provider from {react-redux}
    use store prop in provider give store.js as prop
