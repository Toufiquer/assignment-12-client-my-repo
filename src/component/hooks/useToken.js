const { useState, useEffect } = require("react");

const useToken = user => {
    const [token, SetToken] = useState("");
    const email = user?.user?.email;
    const name = user?.user?.displayName;

    useEffect(() => {
        const newUser = {
            email: email,
            name: name,
        };
        if (email && name) {
            fetch("https://fierce-savannah-66985.herokuapp.com/user", {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then(res => res.json())
                .then(data => {
                    SetToken(data.token);
                    localStorage.setItem("access-token-12", data.token);
                });
        }
    }, [email, name]);
    return [token];
};
export default useToken;
