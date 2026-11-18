learnings

1. we are only passing the data to the child compo everything is contorlled by the parent
2. we can`t pass the student arary to the child direclt if we do this,add new stdent feature won`t update the student list everytime new student is added,updated student data must go to child so we are passing the state variable here
3. new student is only needed by button handler so we are creating it inside the handler
