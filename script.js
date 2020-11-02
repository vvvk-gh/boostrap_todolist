$(()=>{
    
    let inpNewTask = $('#inpNewTask')
    let ulList = $('#ulList')
   
    let addTaskButton = $('#addTaskButton')
    let cleanTaskButton = $('#cleanTaskButton')
    let resetTaskButton = $('#resetTaskButton')
    let sortTaskButton = $('#sortTaskButton')



//Toogles the input buttons
function toggleButtons(){

       resetTaskButton.prop('disabled', inpNewTask.val() == '');
       addTaskButton.prop('disabled', inpNewTask.val() == '');
       sortTaskButton.prop('disabled' , ulList.children().length < 1);
       cleanTaskButton.prop('disabled', ulList.children().length < 1 )
        
}


//add Tasks function
function addTask(){
    if(inpNewTask.val() !== ''){
        ulList.append(`<li class="list-group-item">${inpNewTask.val()}</li>`);
        inpNewTask.val('')
    }
    toggleButtons()
}

// add new task from ui addbutton
addTaskButton.click(()=> addTask())

//add new task via keyboard enter button
inpNewTask.keypress('on' , (e)=>{
    if(e.which == 13) addTask()
    else toggleButtons();
})

// reset button
resetTaskButton.click(()=> {
    inpNewTask.val('')
    toggleButtons()
})

//clean button : cleans the done tasks
cleanTaskButton.click( function() {
    //console.log('clean button clicked')
    $('li.done').remove();
    toggleButtons()
})

//sort button
sortTaskButton.click(()=>{
    $('#ulList .done').appendTo("#ulList")
    toggleButtons()
})

// toggling tasks 
$('#ulList').on('click','li.list-group-item',function(e){
    $(e.target).toggleClass('done');
    });

})