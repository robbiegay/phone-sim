import React, { useState, useEffect } from 'react';

function ToDo() {
    const [view, setView] = useState('all');
    const [list, setList] = useState([]);
    const [time, setTime] = useState(new Date());
    const settings = { hour: 'numeric', minute: '2-digit' };

    class ListObj {
        constructor(id, title, done) {
            this.id = id;
            this.title = title;
            this.done = done;
        }
    }

    // useEffect(() => {
    //     if (localStorage.length > 0) {
    //         for (let i = 0; i < JSON.parse(window.localStorage.todoList).length; i++) {
    //             let parsedJSON = JSON.parse(window.localStorage.todoList)[`${i}`];
    //             LIST_OBJ_ARRAY.push(new ListObj(i, parsedJSON.title, parsedJSON.done));
    //             addToList(i, JSON.parse(window.localStorage.todoList)[i].title);
    //             if (LIST_OBJ_ARRAY[i].done) {
    //                 let x = document.querySelector(`input[name="${i}"]`);
    //                 x.parentElement.className = 'text-success text-left';
    //                 x.checked = true;
    //             }
    //         }
    //     }
    //     const clock = setInterval(
    //         () => setTime(new Date()), 1000
    //     );

    //     return function cleanup() {
    //         clearInterval(clock);
    //     }
    // });
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
                    <input id='todoInput' className='m-2 test-dark rounded mx-auto' style={sectionStyle} type='text' placeholder='What needs to get done?' />
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
