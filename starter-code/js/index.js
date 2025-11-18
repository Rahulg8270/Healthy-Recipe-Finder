document.addEventListener('DOMContentLoaded',async() => {

    const headerPlaceholder = document.querySelectorAll('.header-placeholder')

    const loadPromises  = Array.from(headerPlaceholder).map(async (placeholder) =>{
        const url = placeholder.dataset.componentUrl;

        if(!url) return;

        try {
            const response = await fetch(url)
            if(!response.ok) throw new Error(`Fetch error ${response.status}`)
            const html = await response.text();
            
            placeholder.innerHTML = html;
        } catch (error) {
            console.error(`Error loading ${url}: `, error)
            placeholder.innerHTML = `<p>problem fetching navbar</p>`
            
        }
    })

    await Promise.all(loadPromises)
})