import React, { useState, useEffect } from 'react';

// KEY and ID ON LIST WILL CAUSE PROBLEMS EVENTUALLY

function ToDo() {
    const [view, setView] = useState('all');
    const [list, setList] = useState([]);
    const [listHTML, setListHTML] = useState();

    var input = '';
    var inputRef = React.createRef();
    var listRef = React.createRef();

    class ListObj {
        constructor(id, title, done) {
            this.id = id;
            this.title = title;
            this.done = done;
        }
    }

    useEffect(() => {
        var tempList = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < JSON.parse(window.localStorage.todoList).length; i++) {
                let parsedJSON = JSON.parse(window.localStorage.todoList)[`${i}`];
                tempList.push(new ListObj(i, parsedJSON.title, parsedJSON.done));
                // if (tempList[i].done) {
                //     console.log('done');
                // }
                // if (list[i].done) {
                //     let x = document.querySelector(`input[name="${i}"]`);
                //     x.parentElement.className = 'text-success text-left';
                //     x.checked = true;
                // }
            }
            setList(tempList);
            addToList(tempList);
        }
    }, []);

    document.addEventListener('keydown', function (e) {
        // For testing --> Clears the local storage on key "="
        if (e.keyCode === 187) {
            localStorage.clear();
            setList([]);
            console.log(window.localStorage);
        }
        // For testing --> Displays some useful console.log()'s on "-" key
        if (e.keyCode === 189) {
            console.log('----- Local Storage -----');
            console.log(JSON.parse(window.localStorage.todoList));
            console.log('----- My Code -----');
            console.log('List: ' + list);
            console.log('Input box: ' + input);
            console.log('View state: ' + view);
        }
        // "Enter" key
        if (e.keyCode === 13) {
            // Removes space from left or right of input
            var tempList = list;
            if (input.trim() !== '') {
                tempList.push(new ListObj(list.length, input, false));
                setList(tempList);
                localStorage.setItem(`todoList`, JSON.stringify(list));
                // Clears the input box after 'enter'
                input = '';
                inputRef.value = '';
                addToList(tempList);
            }
        }

    });

    function updateInput(e) {
        input = e.target.value;
    }

    var sectionStyle = {
        width: '80%',
    };

    var listStyle = {
        wordWrap: 'word-break',
    };

    function addToList(tempList) {
        setListHTML(
            <>
                {tempList.map((val, idx) => {
                    console.log(val.done);
                    return (
                        <div key={`groupKey_${idx}`} className='custom-control custom-checkbox ml-5' >
                            <input key={`inputKey_${idx}`} onChange={strike} type='checkbox' className='custom-control-input' id={idx} />
                            {/* checked={val.done} --> this fixs on load, but makes it so you can't click */}
                            <label key={`labelKey_${idx}`} className={val.done ? 'custom-control-label text-success' : 'custom-control-label'} htmlFor={idx}>{val.title}</label>
                        </div>
                    );
                })}
            </>
        );
    }

    function strike(e) {
        var tempList = list;
        if (e.target.checked) {
            e.target.nextElementSibling.className = 'custom-control-label text-success';
            tempList[e.target.id].done = true;
            localStorage.setItem(`todoList`, JSON.stringify(tempList));
            setList(tempList);
        } else {
            e.target.nextElementSibling.className = 'custom-control-label';
            tempList[e.target.id].done = false;
            localStorage.setItem(`todoList`, JSON.stringify(tempList));
            setList(tempList);
        }
        // switch (VIEW_STATE) {
        //     case 'todo':
        //         viewTodoFunc();
        //         break;
        //     case 'done':
        //         viewDoneFunc();
        // }
    }

    return (
        <>
            <div className='container bg-transparent border rounded'>
                <div className='row'>
                    <h1 id='todoTitle' className='display-4 text-dark mt-2 mx-auto'>to-do</h1>
                </div>
                <div className='row'>
                    <input id='todoInput' ref={el => inputRef = el} className='m-2 test-dark rounded mx-auto' style={sectionStyle} type='text' placeholder='What needs to get done?' onChange={updateInput} />
                </div>
                <div ref={el => listRef = el} className='row text-left'>
                    <div id='listRow'>
                        {listHTML}
                    </div>
                </div>
                <div className='row'>
                    <div className='btn-group pt-2 mx-auto' role='group' aria-label='Selection Buttons'>
                        <button id="viewDone" type="button" className="btn btn-success">&#10004;</button><button id="viewAll" type="button" className="btn btn-secondary">ALL</button>
                        <button id="viewTodo" type="button" className="btn btn-danger">&#10006;</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='btn-group p-2 mb-2 mx-auto' display='block' aria-label='Selection Buttons'>
                        <button id="toggleAll" type="button" className="btn btn-primary">&#128280;</button>
                        <button id="delete" type="button" className="btn btn-primary">&#128163;</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDo;
