import { useEffect, useState } from 'react'
import './MCQ.css'


const MCQ = () => {
    const [a,setA] = useState('')
    const [b,setB] = useState("")
    const [c,setC] = useState("")
    const [d,setD] = useState("")
    const [counter, setCounter] = useState(0)
    const [list, setList] = useState([])
    const [question, setQuestion] = useState(null)
    const host = 'http://localhost:5000/questions'

    const getQuestions = async () =>{
        let result = await fetch(host, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json()
        setList(...list,result.data)
    }

    useEffect(()=>{
        getQuestions();
        setQuestion(list[0]);
        //console.log(list[counter])
    })

    //console.log(list[counter])
    //console.log(question)
    
    
    return (
        <div id='MCQ'>
            <div className='quiz-container'>
                <label id='qustion'>Demo Question </label>
                <div id='options'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value={a} name="flexRadioDefault" id="flexRadioDefault1"    />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            1930
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value={b} name="flexRadioDefault" id="flexRadioDefault1"  />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            1931
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value={c} name="flexRadioDefault" id="flexRadioDefault1"  />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            1932
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value={d} name="flexRadioDefault" id="flexRadioDefault1"  />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            1933
                        </label>
                    </div>
                </div>
                <button type="Login" className="btn btn-primary" id="Next" >Next</button>
            </div>
        </div>
    )
}

export default MCQ