import { createContext,  useState } from "react";

// step-1 Creating a Context
export const AppContext = createContext();



function AppContextProvider({children}){
// ie all the data will be passed to the children of the component inside the AppContextProvider. So in this project, we are using it on App.js so go to index.js and provide the App component rendering inside the AppContextProvider component 

    // loading is set false initiazlly
    const [loading, setLoading] = useState(false);
    // initially empty post 
    const [posts, setPosts] = useState([]);
    // default page no.1
    const [page, setPage] = useState(1);
    // initially no pages record obtained
    const [totalPages, setTotalPages] = useState(null);

    // finding the data from API
    const apiURL = `https://codehelp-apis.vercel.app/api/get-blogs`;
    async function fetchPost(page=1){
        setLoading(true);
        let url = `${apiURL}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();

            // console.log(data);
            setPage(data.page);
            console.log(data)
            setPosts(data.posts)
            console.log(data.posts)
            setTotalPages(data.totalPages);
        }

        catch(error){
            console.error("Data fetch failed!")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false)
    }
   

    // handling page change and number
    function pageChangeHandler(page){
        setPage(page);
        fetchPost(page);
    }


    // setting up the states and methods that will be needed by the components
    // step-2 Providing a Context
    const requiredValue = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchPost,
        pageChangeHandler
    }

    return <AppContext.Provider value = {requiredValue}>
        {children}
    </AppContext.Provider>
    // children is coming from the AppContextProvider and the AppContextProvider has App component as children in index.js
    // So we are passing all the above states and methods to the children
}
export default AppContextProvider;

