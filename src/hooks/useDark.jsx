const useDark = (isDark) => {
    if(isDark !== null) {
        localStorage.setItem('dark-mode', isDark)
    }
    const isDarkMode = localStorage.getItem('dark-mode')
    
    if(isDarkMode === "true") {
        document.querySelector("html").setAttribute("data-theme", "dark")
    } else {       
        document.querySelector("html").setAttribute("data-theme", "light")

    }
}

export default useDark