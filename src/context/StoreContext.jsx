import React, { createContext, useEffect, useState } from 'react'
import { posts_list } from '../assets/assets'


// createContext is a function that creates a Context object. This Contect object allows you to share data between components without having to pass props down through every level of the component TreeWalker, a procss known as prop drilling
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [bookmarkItems, setBookmarkItems] = useState({});

    const addToBookmark = (itemId) => {
        //When user click on the empty star icon, they are able to bookmark the post and initialize a count with 1
        setBookmarkItems((prev) => ({...prev, [itemId]:1}))
    }

    const removeFromBookmark = (itemId) => {
        //When user click on the full star icon, they are able to remove the post from bookmark record
        setBookmarkItems((prev) => ({...prev, [itemId]:0}))
    }

    const contextValue = {
        posts_list, bookmarkItems, setBookmarkItems, addToBookmark, removeFromBookmark
    }

    useEffect(() => {
        console.log(bookmarkItems);
    }, [bookmarkItems])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider