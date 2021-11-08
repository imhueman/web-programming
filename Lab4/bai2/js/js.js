

function solve() {
   var a=document.getElementById('numbera').value;
   var b=document.getElementById('numberb').value;
   var c=document.getElementById('numberc').value;
    var delta=(b*b)-(4*a*c);
    var sqrtdelta=Math.sqrt(delta);
    if(a==0&&b==0&&c==0)
        alert("Please enter data");
    else if (delta<0)
        alert('Phương trình vô nghiệm!!');
    else if(delta==0){
        alert('Phương trình có nghiệm kép!!');
        document.getElementById('answer').value=(-b)/(2*a);
    }
    else {
        alert('Phương trình có 2 nghiệm!!')
        document.getElementById('answer').value=(-b-sqrtdelta)/(2*a) +", và ,"
                                                    +(-b+sqrtdelta)/2*a;
    }

}