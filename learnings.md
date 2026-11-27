learnings

1. we are only passing the data to the child compo everything is contorlled by the parent
2. we can`t pass the student arary to the child direclt if we do this,add new stdent feature won`t update the student list everytime new student is added,updated student data must go to child so we are passing the state variable here
3. new student is only needed by button handler so we are creating it inside the handler
4. here effect is running when list is changing ,i have doubt that we can do that operation wihtout effect directly inside the handlesubmit button and can update the LS so why we are using effect although??
5. list won`t last on refresh so using LS would be better choice and we are geting teh list at mount of app.jsx it would include the add or delete students also
6. now i am covering the edge cases for add opertion ==>first. empty input 2nd.duplicate entry
   here we need to check the casing also beacsue "Skd" and skd would be treated as different but we would be considering both as same
7. o whenever dealing wiht input data we need to consider casing,empty vlaue,spaces as well.
