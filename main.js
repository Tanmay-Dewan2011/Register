function submitting()
{
    var name_1=document.getElementById("name_of_the_student_1").value;
    var name_2=document.getElementById("name_of_the_student_2").value;
    var name_3=document.getElementById("name_of_the_student_3").value;
    var name_4=document.getElementById("name_of_the_student_4").value;
    var name_5=document.getElementById("name_of_the_student_5").value;


     name_of_the_student_array.push(name_1);
     name_of_the_student_array.push(name_2);
     name_of_the_student_array.push(name_3);
     name_of_the_student_array.push(name_4);
     name_of_the_student_array.push(name_5);

    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = name_of_the_student_array;
    document.getElementById("submit_name").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
 
function sorting()
{
name_of_the_student_array.sort()
console.log (name_of_the_student_array);
document.getElementById("display_name").innerHTML = name_of_the_student_array;
}


name_of_the_student_array = [];


var display_student_array = [];


for (var j = 1; j <= 4; j++)
{
    var name_of_the_student= document.getElementById("name_of_the_student" +j).value;
    console.log (name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);
    var length_of_the_student_array = name_of_the_student_array.lenght;
    console.log (length_of_the_student_array);

}


for (var k = 0; k < length_of_the_student_array; k++)
   {
    display_student_array.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");   
    console.log (display_student_array);
   } 
   document.getElementById("display_name_commas").innerHTML = display_student_array;

   var remove_commas = display_student_array.join("");
   console.log (remove_commas);

   document.getElementById("display_name_without_commas").innerHTML = remove_commas;

   document.getElementById("submitting").style.display = "none";
   document.getElementById("sort_button").style.display = "inline-block";

 var display_student_array_sortting= [];

 