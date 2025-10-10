async function submitJournal(url, options={}, setIsLoading) {
    if(!url) return 
    try{
        const response = await fetch(url, options)
        if(!response.ok){
            throw new Error("Opps! somthig went wrong!")
        } 
        let jsonData = await response.json()
        return jsonData
    } catch(error) {
        console.log(error)
        setIsLoading(false)

    }
}

export { submitJournal }