var p1, p2, n1;

function adddetail(){
	p1 = document.getElementById("pswd1").value;
	p2 = document.getElementById("pswd2").value;
	n1 = document.getElementById("name1").value;
	if((p1==p2)&& (p1!="")){
	localStorage.setItem("name1",n1);
	localStorage.setItem("pswd1",p1);
	window.location="book.html";
	}
	else{
		document.getElementById("p1").innerHTML="password dosen't match";
	}
}

function backpage()
{
	window.location="index.html";
}

