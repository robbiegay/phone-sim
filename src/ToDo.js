import React, { useState, useEffect } from 'react';

// KEY and ID ON LIST WILL CAUSE PROBLEMS EVENTUALLY

function ToDo() {
    const [view, setView] = useState('all');
    const [list, setList] = useState([]);

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
        if (localStorage.length > 0) {
            for (let i = 0; i < JSON.parse(window.localStorage.todoList).length; i++) {
                let parsedJSON = JSON.parse(window.localStorage.todoList)[`${i}`];
                list.push(new ListObj(i, parsedJSON.title, parsedJSON.done));
                // addToList(i, JSON.parse(window.localStorage.todoList)[i].title);
                // if (list[i].done) {
                //     let x = document.querySelector(`input[name="${i}"]`);
                //     x.parentElement.className = 'text-success text-left';
                //     x.checked = true;
                // }
            }
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
            if (input.trim() !== '') {
                list.push(new ListObj(list.length, input, false));
                localStorage.setItem(`todoList`, JSON.stringify(list));
                // Clears the input box after 'enter'
                input = '';
                inputRef.value = '';
                let x = JSON.parse(window.localStorage.todoList);
                addToList(x.length - 1, x[x.length - 1].title);
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

    function addToList(listIdx, title) {
        // Creates the new DOM element
        // list.map((val, idx) => {
        //     console.log(val + ' , ' + idx);
        //     // return setList(<input key={`key_${idx}`} id={idx} style={listStyle} type="checkbox" name={val} value="" />)
        // })
        setList(
            <>
                {list.map((val, idx) => {
                    return (
                        <div key={`groupKey_${idx}`} className="custom-control custom-checkbox ml-5">
                            <input key={`inputKey_${idx}`} type="checkbox" className="custom-control-input" id={idx} />
                            <label key={`labelKey_${idx}`} className="custom-control-label" htmlFor={idx}>{val.title}</label>
                        </div>
                    )
                    // <input key={`key_${idx}`} id={idx} style={listStyle} type='checkbox' name={val.title} value='' />
                })}
            </>)
        // todoRef
        // let newListEntry = createElementAndClass('div', 'text-left');
        // newListEntry.innerHTML = `<input type="checkbox" name="${name}" value=""> ${title}`;
        // newListEntry.addEventListener('change', strike);
        // newListEntry.setAttribute('id', `${name}`);
        // newListEntry.setAttribute('style', 'word-wrap: break-word;');
        // TO_DO_LIST.appendChild(newListEntry);
        // if (VIEW_STATE === 'done') {
        //     newListEntry.setAttribute('style', 'display: none; word-wrap: break-word;');
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
                <div className='row text-left'>
                    <div id='listRow'>
                        {list}
                        {/* <input key='1' id='1234' style={listStyle} type="checkbox" name='test' value='dfud' />
                    {console.log('test ' + list)}
                        {list.map((val, idx) => {
                            console.log('here');
                            return <input key={`key_${idx}`} id={idx} style={listStyle} type="checkbox" name={val} value="" />
                        })} */}
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
