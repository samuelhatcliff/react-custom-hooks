import React, {useState} from 'react';
import axios from "axios";
import uuid from "uuid";

const useAxios = (baseUrl) => {
    const [state, setState] = useState([]);
    const addData = async function (restOfUrl = "") {
                let query = `${baseUrl}${restOfUrl}`
                const res = await axios.get(query);
                setState(s => [...s, { ...res.data, id: uuid() }])
}
return [state, addData]
}

export default useAxios;