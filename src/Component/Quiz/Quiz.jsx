import './Quiz.css'

const Quiz = () => {
    return (
        <div class='quiz'>
            <h2 id ='header'>Take Test</h2>
            <div id='list'>
                <ul class="list-group">
                    <li class="list-group-item"><a href="/mcq" class="btn btn-primary btn-lg" role="button" aria-disabled="true">Quiz-1</a></li>
                    <li class="list-group-item"><a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Quiz-2</a></li>
                    <li class="list-group-item"><a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Quiz-3</a></li>
                    <li class="list-group-item"><a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Quiz-4</a></li>
                    <li class="list-group-item"><a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Quiz-5</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Quiz