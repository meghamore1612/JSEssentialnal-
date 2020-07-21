
console.log('Fetch API');
// Make a post Request
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))


// jokes api

async function fetchTodas(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

fetchTodas();
