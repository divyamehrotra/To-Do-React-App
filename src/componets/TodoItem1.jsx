function TodoItem1() {
    let todoName1 = 'Practice DSA' ;
    let todoName2 = 'Practice analytics for test' ;
    let todoDate = '24/02/2024' ;

    return (
        <div class="container">
            <div class="row n-row">
                <div class="col-6">
                    {todoName1}
                </div>
                <div class="col-4">
                    {todoDate}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger n-button">DELETE</button>
                </div>
            </div>
            <div class="row n-row">
                <div class="col-6">
                    {todoName2}
                </div>
                <div class="col-4">
                    {todoDate}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger n-button">DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem1;