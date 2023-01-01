import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div id='questions'>
                <div class="question-container">
                    <div className="form-floating mb-3" >
                        <input type="name" className="form-control" id="floatingInput" placeholder="enter question" />
                        <label htmlfor="floatingInput" className="floatingIn">Question</label>
                    </div>
                    <div className="form-floating mb-3" >
                        <input type="name" className="form-control" id="floatingInput" placeholder="option 1" />
                        <label htmlfor="floatingInput" className="floatingIn">Option 1</label>
                    </div>
                    <div className="form-floating mb-3" >
                        <input type="name" className="form-control" id="floatingInput" placeholder="option 2" />
                        <label htmlfor="floatingInput" className="floatingIn">Option 2</label>
                    </div>
                    <div className="form-floating mb-3" >
                        <input type="name" className="form-control" id="floatingInput" placeholder="option 3" />
                        <label htmlfor="floatingInput" className="floatingIn">Option 3</label>
                    </div>
                    <div className="form-floating mb-3" >
                        <input type="name" className="form-control" id="floatingInput" placeholder="option 4" />
                        <label htmlfor="floatingInput" className="floatingIn">Option 4</label>
                    </div>
                    <div className="form-floating mb-3" >
                        <input type="name" className="form-control" id="floatingInput" placeholder="Correct Option" />
                        <label htmlfor="floatingInput" className="floatingIn">Correct Answer</label>
                    </div>
                    <button type="submit" className="btn btn-primary" id='submit-question' >Submit</button>
                </div>
                
            </div>
        </div>

    )
}

export default Questions