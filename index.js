const billAmount=document.querySelector("#bill-amount");
const Cashgiven=document.querySelector("#Cash-given");
const CheckButton=document.querySelector(".check-button");
var message=document.querySelector(".error-message");
const NotesNumber=document.querySelectorAll(".Notes");
var Notes=[2000,500,100,50,10,1];

CheckButton.addEventListener("click",function ValidateBillAmount(){
    message.style.display="none";
    if(billAmount.value>=0)
    {
        if(Cashgiven.value>=billAmount.value){
            var Cashleft=Cashgiven.value-billAmount.value;
            NotesCalculated(Cashleft);
        }
        else
        DenyMessage("Do you wish to wash the plates");
    }
    else
    DenyMessage("Invalid Amount entered");
});


function NotesCalculated(cashToBeCalculated){
    for(var i=0;i<Notes.length;i++)
    {
        var NotesNeeded=Math.trunc(cashToBeCalculated/Notes[i]);
        cashToBeCalculated%=Notes[i];
        NotesNumber[i].innerText=NotesNeeded;
    }
}

function DenyMessage(msg)
{
    message.style.display="block";
    message.innerText=msg;
}