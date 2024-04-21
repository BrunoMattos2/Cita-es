
        document.getElementById('fetchButton').addEventListener('click', function() {
            fetch("https://valid-anime-quote-api-endpoint")
                .then((response) => response.json())
                .then((quote) => {
                    console.log(quote);
                    const obj = {
                        anime: quote.anime,
                        character: quote.character,
                        quote: quote.quote
                    };
                    console.log(obj);
                    fetch("https://valid-translate-api-endpoint", {
                        method: "POST",
                        body: JSON.stringify({
                            q: obj.quote,
                            source: "en",
                            target: "pt"
                        }),
                        headers: {"Content-Type": "application/json"}
                    })
                    .then(response => response.json())
                    .then(data => {
                        const translatedQuote = data.translatedText;
                        document.getElementById('quote').innerHTML = `Anime: ${obj.anime}<br>Personagem: ${obj.character}<br>Quote: ${translatedQuote}`;
                    });
                });
        });
