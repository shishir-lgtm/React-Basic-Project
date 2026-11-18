learnings

1. we are only passing the data to the child compo everything is contorlled by the parent
2. we can`t pass the student arary to the child direclt if we do this,add new stdent feature won`t update the student list everytime new student is added,updated student data must go to child so we are passing the state variable here
3. new student is only needed by button handler so we are creating it inside the handler
4. here effect is running when list is changing ,i have doubt that we can do that operation wihtout effect directly inside the handlesubmit button and can update the LS so why we are using effect although??
5. list won`t last on refresh so using LS would be better choice and we are geting teh list at mount of app.jsx it would include the add or delete students also
