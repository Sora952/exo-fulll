import React, {useState, useEffect} from 'react'

const SearchGit = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState(undefined);
    const [error, setError] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const handleChange = async (e) => {
        setValue(e.target.value);
           fetch(`https://api.github.com/search/users?q=${e.target.value}`)
            .then((response) => {
                if (response.status === 403) {
                    setError("Vous allez trop vite pour l'API");
                    setIsDisabled(true);
                } else if (response.status === 200) {
                    setError("");
                    setIsDisabled(false);
                }
                return response.json();
            })
            .then((data) => {
                if (data.items.length === 0) setError("Recherche introuvable");
                else setError("");
                setResult(data.items)
            })
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        if (error !== "") {
            setTimeout(() => {
                setIsDisabled(false);
                setError("");
            }, 15000);
        }
    }, [error]);

    return (
        <div>
            <input onChange={(e) => handleChange(e)} value={value} disabled={isDisabled} style={{borderColor: isDisabled ? "red" : "black"}} />
            {error === "" ? null : <p>{error}</p>}
            <div>
                {result !== undefined ? result.map(item => {
                    return (
                        <p key={item.id}>{item.login}</p>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default SearchGit;