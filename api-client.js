const getTask = async function() {
    const response = await fetch(`https://jsonbox.io/box_19a0f46f4abff53ace46`);
    return response;
};

const deleteTask = async(id) => {
    try {
        const response = await fetch(
            `https://jsonbox.io/box_19a0f46f4abff53ace46/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

const changeDone = async(id, data) => {
    const endpoint = `https://jsonbox.io/box_19a0f46f4abff53ace46/${id}/done`;
    try {
        const response = await fetch(endpoint, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

const changeText = async(id, data) => {
    const endpoint = `https://jsonbox.io/box_19a0f46f4abff53ace46/${id}/text`;
    try {
        const response = await fetch(endpoint, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
};