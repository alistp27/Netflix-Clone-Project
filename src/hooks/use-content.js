import { useState, useEffect, useContext } from "react";
import { FireBase } from '../context/firebase'

export default function useContent(target) {
    const [Content, setContent] = useState([])
    const {firebase} = useContext(FireBase)
    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return { [target]: Content };
}



