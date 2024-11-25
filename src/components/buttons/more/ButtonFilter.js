
    // Первый вариант не работает поиск!?

    // import { useState } from 'react'

    // const data01 = [
    //     {type: "услуги", description: "H.Lorem ipsum dolor sit amet."},
    //     {type: "услуги", description: "F.Lorem ipsum dolor sit amet."},
    //     {type: "услуги", description: "Z.Lorem ipsum dolor sit amet."},
    //     {type: "услуги", description: "L.Lorem ipsum dolor sit amet."},
    //     {type: "услуги", description: "L.Lorem ipsum dolor sit amet."},
    //     {type: "услуги", description: "A.Lorem ipsum dolor sit amet."},
    // ];

    // export default function ButtonFilter({data02}){
    //     const [dataState01, setDataState01] = useState(data01)
    //     const [dataState02, setDataState02] = useState(data02)
    
    //     function handleSort(){
    //         const dataCopy = JSON.parse(JSON.stringify(dataState01));
        
    //         setDataState01(dataCopy);
    //     }
    
    //     return (
    //         <>
    //           <input
    //             type="text"
    //             placeholder='Type to search'
    //           />
    //         </>
    //     )
       
    // }



// Второй вариант поиск работает, но не срабатывает на символы L A

import { useState } from 'react'

export default function ButtonFilter(){
    const namesFromDatabase = [
        {type: "услуги", description: "H.Lorem ipsum dolor sit amet."},
        {type: "услуги", description: "F.Lorem ipsum dolor sit amet."},
        {type: "услуги", description: "Z.Lorem ipsum dolor sit amet."},
        {type: "услуги", description: "L.Lorem ipsum dolor sit amet."},
        {type: "услуги", description: "L.Lorem ipsum dolor sit amet."},
        {type: "услуги", description: "A.Lorem ipsum dolor sit amet."},
    ];

    const [names, setNames] = useState(namesFromDatabase)

    const filterNames = e => {
        const search = e.target.value.toLowerCase()
        const filterNames = namesFromDatabase.filter(names => names.description.toLowerCase().includes(search))
        setNames(filterNames)
    }

    return (
        <div>
            <header>
                <h2>Description</h2>
                <input type='text' onChange={(e) => filterNames(e)} />
                <button>Search</button>
                <ul>
                    {names.map(name => {
                        return <li key={name.id}>{name.description}</li>
                    })}
                </ul>
            </header>
        </div>
    );
}