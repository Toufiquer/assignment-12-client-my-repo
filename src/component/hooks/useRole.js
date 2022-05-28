import { useEffect, useState } from "react";

const useRole = user => {
    console.log(user);
    const email = user?.user?.email;
    const [role, SetRole] = useState("");
    console.log(email);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:3500/userRole?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    SetRole(data.result.role);
                });
        }
    }, [email]);
    return [role];
};
export default useRole;
