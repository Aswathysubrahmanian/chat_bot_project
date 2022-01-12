// Collapsible

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}


function getHardResponse(userText) {
    
    if(userText=="hi"){
        
        let botResponse = userText;
    let botHtml = '<p class="botText"> <span>' +"You entered"+"  " + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    }
    else if(userText=="How do i change my withholdings for my bouns?"){
        
        
        let botHtml= `<div class="card" style="width: 18rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYSlBS6ZuAkToYdVL9xMKeh5sgtttmIMccw&usqp=CAU" class="card-img" alt="...">
        <div class="card-body">
          <h5 class="card-titles">Headding</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi deleniti officia, ex animi ipsam temporibus corrupti consequatur sunt aspernatur, voluptates ab repellat asperiores explicabo iste facere dolorum itaque! Molestiae.
          </p>
          <a href="hr.html" class="btn btn-outline-light" id="apply">Apply</a>
        </div>
      </div>`;
       return $("#chatbox").append(botHtml);
    }
    else{
      let botHtml="your question may be incorrect,please try again!!!"
      return $("#chatbox").append(botHtml);
    }

    document.getElementById("chat-bar-bottom").scrollTop(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        // userText = "hi";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

 
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});