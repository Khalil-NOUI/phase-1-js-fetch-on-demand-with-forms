const init = () => {

    const forma = document.querySelector("form")
    const display = document.querySelector("#movieDetails")
    // console.log(display)

    forma.addEventListener("submit", async (e) => {
        e.preventDefault()
        const inputer = e.target.searchByID.value
        // console.log(inputer)

        try {
            const res = await fetch(`http://localhost:3000/movies/${inputer}`)
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }  
        

        const data = await res.json();

        const header = document.createElement("h4")
         header.textContent = data.title

        const body = document.createElement("p")
        body.textContent = data.summary

        display.appendChild(header)
        display.appendChild(body)

        console.log("Data displayed successfully:", data)

        } catch (err) {
            console.log("error fetching movie:", err)
            const danger = document.createElement("h4")
            danger.style.color  = "#FF0000"
            danger.textContent = "Error Fetching Movie, You need to pay More"
            display.appendChild(danger)
        }   

    forma.reset()

    })
    
}

document.addEventListener('DOMContentLoaded', init);