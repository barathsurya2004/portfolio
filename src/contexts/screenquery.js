import { createContext, useEffect, useState } from "react";


export const MediaContext = createContext({
    ham: null
})

export const MediaContextProvider = ({ children }) => {
    const [ham, setHam] = useState(true);
    useEffect(() => {
        function handleResize(event) {
            // console.log(event.currentTarget.outerWidth)
            if (event.currentTarget.outerWidth < 900) {
                setHam(true);
            }
            else {
                setHam(false);
            }
        }

        // Attach the event listener to the window object
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <MediaContext.Provider value={{ ham }}>{children}</MediaContext.Provider>
}
