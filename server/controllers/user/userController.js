export const getUserProfile = (req, res) => {
    const user = {
        name: "rinad",
        age: 22
    }

    res.json(user)
}