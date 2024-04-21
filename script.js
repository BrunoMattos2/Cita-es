fetch("https://animechan.xyz/api/random")
    .then((response) => response.json())
    .then((quote) => {
        console.log(quote);
        const obj = {
            anime: "...",
            character: "...",
            quote: "..."
        };
        console.log(obj);
    });