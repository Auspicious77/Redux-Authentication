import AsyncStorage from '@react-native-async-storage/async-storage';
export const fetch2 = async (api, body) => {
    //body is an object for email or passwprd
    //api === /signup (end-point)
    const url = 'http://localhost:5000'
    const res = await fetch(url + api, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "authorization": AsyncStorage.getItem("token")
        },

        body: JSON.stringify(body)

    })
    return await res.json()

}

export const fetch3 = async (api, type) => {
    //body is an object for email or passwprd
    //api === /signup (end-point)
    const res = await fetch(url+api, {
        method: type,
        headers: {
            "Content-Type": "application/json",
            "authorization": AsyncStorage.getItem("token")
        },

        

    })
    return await res.json()

}