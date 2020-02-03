import React, { useState, useEffect, useRef } from 'react';

function ToDo() {
    const view = useRef('all');
    const list = useRef([]);
    const [listHTML, setListHTML] = useState();

    var input = '';
    var inputRef = React.createRef();

    class ListObj {
        constructor(id, title, done) {
            this.id = id;
            this.title = title;
            this.done = done;
        }
    }

    useEffect(() => {
        list.current.map((val, idx) => {
            const x = document.getElementById(idx);
            // Makes sure this doesn't trigger before the list loads
            if (val.done && x) {
                x.checked = true;
            } else if (!val.done && x) {
                x.checked = false;
                x.nextSibling.className = 'custom-control-label';
            }
            return null;
        });
    }, [listHTML]);

    useEffect(() => {
        if (localStorage.length > 0) {
            for (let i = 0; i < JSON.parse(window.localStorage.todoList).length; i++) {
                let parsedJSON = JSON.parse(window.localStorage.todoList)[`${i}`];
                list.current.push(new ListObj(i, parsedJSON.title, parsedJSON.done));
            }
            addToList();
        }
    }, []);

    document.addEventListener('keydown', function (e) {
        // 'Enter' key
        if (e.keyCode === 13) {
            // Removes space from left or right of input
            if (input.trim() !== '') {
                list.current.push(new ListObj(list.length, input, false));
                localStorage.setItem(`todoList`, JSON.stringify(list.current));
                // Clears the input box after 'enter'
                input = '';
                inputRef.value = '';
                addToList();
            }
        }
    });

    function updateInput(e) {
        input = e.target.value;
    }

    var listStyle = {
        wordBreak: 'break-all',
    };

    function addToList() {
        setListHTML(
            <>
                {list.current.map((val, idx) => {
                    return (
                        <div key={`groupKey_${idx}`} className='custom-control custom-checkbox ml-5' >
                            <input key={`inputKey_${idx}`} onChange={strike} type='checkbox' className='custom-control-input' id={idx} />
                            <label style={listStyle} key={`labelKey_${idx}`} className={val.done ? 'custom-control-label text-success' : 'custom-control-label'} htmlFor={idx}>{val.title}</label>
                        </div>
                    );
                })}
            </>
        );
    }

    function viewDone() {
        setListHTML(
            <>
                {list.current.map((val, idx) => {
                    if (val.done) {
                        return (
                            <div key={`groupKey_${idx}`} className='custom-control custom-checkbox ml-5' >
                                <input key={`inputKey_${idx}`} onChange={strike} type='checkbox' className='custom-control-input' id={idx} />
                                <label key={`labelKey_${idx}`} className={val.done ? 'custom-control-label text-success' : 'custom-control-label'} htmlFor={idx}>{val.title}</label>
                            </div>
                        );
                    }
                    return null;
                })}
            </>
        );
    }

    function viewAll() {
        addToList();
    }

    function viewTodo() {
        setListHTML(
            <>
                {list.current.map((val, idx) => {
                    if (!val.done) {
                        return (
                            <div key={`groupKey_${idx}`} className='custom-control custom-checkbox ml-5' >
                                <input key={`inputKey_${idx}`} onChange={strike} type='checkbox' className='custom-control-input' id={idx} />
                                <label key={`labelKey_${idx}`} className={val.done ? 'custom-control-label text-success' : 'custom-control-label'} htmlFor={idx}>{val.title}</label>
                            </div>
                        );
                    }
                    return null;
                })}
            </>
        );
    }

    function toggleAll() {
        var anyChecked = true;
        list.current.map((val) => {
            if (!val.done) {
                anyChecked = false;
            }
            return null;
        });
        list.current.map((val, idx) => {
            if (val.done && anyChecked) {
                document.getElementById(idx).click();
            }
            if (!val.done && !anyChecked) {
                document.getElementById(idx).click();
            }
            return null;
        });
    }

    function deleteItems() {
        var temp = [];
        list.current.map((val) => {
            if (!val.done) {
                temp.push(true);
            } else {
                temp.push(false);
            }
            return null;
        });
        var tempList = list.current;
        list.current = [];
        temp.map((val, idx) => {
            if (val) {
                list.current.push(tempList[idx]);
            }
            return null;
        });
        localStorage.setItem(`todoList`, JSON.stringify(list.current));
        setListHTML(
            <>
                {list.current.map((val, idx) => {
                    return (
                        <div key={`groupKey_${idx}`} className='custom-control custom-checkbox ml-5' >
                            <input key={`inputKey_${idx}`} onChange={strike} type='checkbox' className='custom-control-input' id={idx} />
                            <label key={`labelKey_${idx}`} className={val.done ? 'custom-control-label text-success' : 'custom-control-label'} htmlFor={idx}>{val.title}</label>
                        </div>
                    );
                })};
            </>
        );
    }

    function strike(e) {
        if (e.target.checked) {
            e.target.nextElementSibling.className = 'custom-control-label text-success';
            list.current[e.target.id].done = true;
            localStorage.setItem(`todoList`, JSON.stringify(list.current));
        } else {
            e.target.nextElementSibling.className = 'custom-control-label';
            list.current[e.target.id].done = false;
            localStorage.setItem(`todoList`, JSON.stringify(list.current));
        }
        changeView();;
    }

    function changeView() {
        switch (view.current) {
            case 'todo':
                viewTodo();
                break;
            case 'done':
                viewDone();
                break;
            default:
                viewAll();
        }
    }

    function showCount() {
        // Loops through the array, counts the number of done and not-done items.
        // Then sets the inner HTML of the view-state buttons to their respective
        // count numbers. Is triggered on a mouseover event.
        if (localStorage.length > 0) {
            let doneNum = 0, notDoneNum = 0;
            for (let i = 0; i < list.current.length; i++) {
                list.current[i].done ? doneNum++ : notDoneNum++;
            }
            document.getElementById('viewDone').innerHTML = `${doneNum}`;
            document.getElementById('viewAll').innerHTML = `${list.current.length}`;
            document.getElementById('viewTodo').innerHTML = `${notDoneNum}`;
        }
    }

    // Triggered on mouseout, returns view-state buttons to their original content
    function hideCount() {
        if (localStorage.length > 0) {
            document.getElementById('viewDone').innerHTML = `&#10004;`;
            document.getElementById('viewAll').innerHTML = `ALL`;
            document.getElementById('viewTodo').innerHTML = `&#10006;`;
        }
    }

    var sectionStyle = {
        width: '80%',
    };

    return (
        <>
            <div className='container bg-transparent border rounded'>
                <div className='row'>
                    <h1 id='todoTitle' className='display-4 text-dark mt-2 mx-auto'>to-do</h1>
                </div>
                <div className='row'>
                    <input id='todoInput' ref={el => inputRef = el} className='m-2 test-dark rounded mx-auto' style={sectionStyle} type='text' placeholder='What needs to get done?' onChange={updateInput} />
                </div>
                <div className='row text-left'>
                    <div id='listRow'>
                        {listHTML}
                    </div>
                </div>
                <div className='row'>
                    <div onMouseEnter={showCount} onMouseLeave={hideCount} className='btn-group pt-2 mx-auto' role='group' aria-label='Selection Buttons'>
                        <button id='viewDone' onClick={() => { view.current = 'done'; changeView(); }} type='button' className='btn btn-success'>&#10004;</button>
                        <button id='viewAll' onClick={() => { view.current = 'all'; changeView(); }} type='button' className='btn btn-secondary'>ALL</button>
                        <button id='viewTodo' onClick={() => { view.current = 'todo'; changeView(); }} type='button' className='btn btn-danger'>&#10006;</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='btn-group p-2 mb-2 mx-auto' display='block' aria-label='Selection Buttons'>
                        <button id='toggleAll' onClick={() => toggleAll()} type='button' className='btn btn-primary'><span role='img' aria-label='emoji'>&#128280;</span></button>
                        <button id='delete' onClick={() => deleteItems()} type='button' className='btn btn-primary'><span role='img' aria-label='emoji'>&#128163;</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDo;

// KEY and ID ON LIST WILL CAUSE PROBLEMS EVENTUALLY

// // For testing --> Clears the local storage on key '='
// if (e.keyCode === 187) {
//     localStorage.clear();
//     list.current = [];
//     console.log(window.localStorage);
// }
// // For testing --> Displays some useful console.log()'s on '-' key
// if (e.keyCode === 189) {
//     console.log('----- Local Storage -----');
//     console.log(JSON.parse(window.localStorage.todoList));
//     console.log('----- My Code -----');
//     console.log('List: ' + list.current);
//     console.log('Input box: ' + input);
//     console.log('View state: ' + view);
// }
