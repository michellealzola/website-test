function cubesAjax(){
    var ajax_cubes = new XMLHttpRequest();

    ajax_cubes.open("GET", "./cubes.html", true);

    ajax_cubes.onreadystatechange = function(){
            if( ajax_cubes.readyState == 4 && ajax_cubes.status == 200){
                var response_cubes = ajax_cubes.responseText;
                document.getElementById('purchasecubes').innerHTML = response_cubes;
            }
        }; 

    ajax_cubes.send();

}
function cylinderAjax(){    
    var ajax_cylinders = new XMLHttpRequest();       
   
    ajax_cylinders.open("GET", "./cylinders.html", true);

    ajax_cylinders.onreadystatechange = function(){
            if( ajax_cylinders.readyState == 4 && ajax_cylinders.status == 200){
                var response_cylinders = ajax_cylinders.responseText;
                document.getElementById('purchasecylinders').innerHTML = response_cylinders;
            }
        }; 
           
    ajax_cylinders.send();
}
function sphericalAjax(){
    var ajax_spherical = new XMLHttpRequest();     
   
    ajax_spherical.open("GET", "./spherical.html", true);

    ajax_spherical.onreadystatechange = function(){
            if( ajax_spherical.readyState == 4 && ajax_spherical.status == 200){
                var response_spherical = ajax_spherical.responseText;
                document.getElementById('purchasespherical').innerHTML = response_spherical;
            }
        }; 
           
    ajax_spherical.send();
}
function coneAjax(){
    var ajax_cone = new XMLHttpRequest();
 
    ajax_cone.open("GET", "./cone.html", true);

    ajax_cone.onreadystatechange = function(){
            if( ajax_cone.readyState == 4 && ajax_cone.status == 200){
                var response_cone = ajax_cone.responseText;
                document.getElementById('purchasecone').innerHTML = response_cone;
            }
        }; 
           
    ajax_cone.send();
}

var cubes_length = 0;
var cubes_width = 0;
var cubes_height = 0;
var cube_selected = document.getElementById('cubesChecked');
var cube_section = document.getElementById('cubesSection');

function cubeSelect() {
   

    if(cube_selected.checked){
        cube_section.style.visibility = 'visible';
       
              
    } else {
        cube_section.style.visibility = 'hidden';
        
    }
    
}

var cylinders_radius = 0;
var cylinders_height = 0;
var cylinders_selected = document.getElementById('cylindersChecked');
var cylinders_section = document.getElementById('cylindersSection');

function cylindersSelect() {
    

    if(cylinders_selected.checked){
        cylinders_section.style.visibility = 'visible';  
              
    } else {
        cylinders_section.style.visibility = 'hidden';
       
    }
}

var spherical_radius = 0;
var spherical_selected = document.getElementById('sphericalChecked');
var spherical_section = document.getElementById('sphericalSection');

function sphericalSelect() {
    

    if(spherical_selected.checked){
        spherical_section.style.visibility = 'visible';  
            
    } else {
        spherical_section.style.visibility = 'hidden';
        
    }
}

var cone_radius = 0;
var cone_radius2 = 0;
var cone_height = 0;
var cone_selected = document.getElementById('coneChecked');
var cone_section = document.getElementById('coneSection');


function coneSelect() {
    

    if(cone_selected.checked){
        cone_section.style.visibility = 'visible'; 
         
             
    } else {
        cone_section.style.visibility = 'hidden';
       
        
    }

    
}

function submitOrder() {
    
    var totalCost = 0;

    let full_name = document.getElementById('full_name').value;
    if(full_name == ""){
        alert("Please enter your Full Name");
        return false;
    }

    let c_address = document.getElementById('c_address').value;
    if(c_address == ""){
        alert("Please enter your Address");
        return false;
    }

    let c_postal = document.getElementById('c_postal').value;
    if(c_postal == ""){
        alert("Please enter your Postal Code");
        return false;
    }

    let c_phone = document.getElementById('c_phone').value;
    if(c_phone == ""){
        alert("Please enter your Phone Number");
        return false;
    }

    let c_email = document.getElementById('c_email').value;
    if(c_email == ""){
        alert("Please enter your E-mail");
        return false;
    }

    
    if(cube_selected.checked){
    cubes_length = document.getElementById('cubes_length').value;
    cubes_width = document.getElementById('cubes_width').value;
    cubes_height = document.getElementById('cubes_height').value;
    
    }
    if(cylinders_selected.checked){
        cylinders_radius = document.getElementById('cylinders_radius').value;
        cylinders_height = document.getElementById('cylinders_height').value;
      
    }

    if(spherical_selected.checked){
        spherical_radius = document.getElementById('spherical_radius').value;    
    }

    if(cone_selected.checked){
        cone_radius = document.getElementById('cone_radius').value;
        cone_radius2 = document.getElementById('cone_radius2').value;
        cone_height = document.getElementById('cone_height').value; 
    }

    var cubes_volume = cubes_length * cubes_width * cubes_height;
    var cubes_price =  cubes_volume * .001;

    

    var cylinders_volume = 3.14 * cylinders_radius * cylinders_radius * cylinders_height;
    var cylinders_price =  cylinders_volume * .0012;


    
   
    
    var spherical_volume = 2 / 3  * 3.14 * spherical_radius * spherical_radius * spherical_radius;
    var spherical_price =  spherical_volume * .0015;

    

    var c1 = cone_radius * cone_radius;
    var c2 = cone_radius * cone_radius2;
    var c3 = cone_radius2 *cone_radius2
    var cSum = c1 + c2 + c3;
    
    
    var cone_volume = (1/3) * 3.14 * cSum * cone_height;
    var cone_price =  cone_volume * .002;


    var invoice = "<h2>Invoice</h2>";
    invoice += "<div>";
    invoice += "Customer Name:     " + full_name + "<br>";
    invoice += "Address:     " + c_address + "<br>";
    invoice += "Postal Code:     " + c_postal + "<br>";
    invoice += "<br>";

    if(cubes_volume != 0){
        invoice += "Type of Planter:     Square/Rectangular Cubes<br>" ;
        invoice += "Dimension:     " + cubes_length + " x " + cubes_width + " x " + cubes_height + "<br>";
        invoice += "Volume:     " + cubes_volume.toFixed(2) + " cu. cm" + "<br>";
        totalCost += cubes_price;
        invoice += "<br>";
    } else {
        invoice += "";
    }
    if(cylinders_volume != 0){
        invoice += "Type of Planter:     Flat bottomed cylinders<br>";
        invoice += "Dimension:     " + cylinders_radius + " x " + cylinders_height + "<br>";
        invoice += "Volume:     " + cylinders_volume.toFixed(2) + " cu. cm" + "<br>";
        totalCost += cylinders_price;
        invoice += "<br>";
    }else {
        invoice += "";
    }
    if(spherical_volume != 0){
        invoice += "Type of Planter:     ½ Spherical<br>";
        invoice += "Dimension (Radius):     " + spherical_radius + "<br>";
        invoice += "Volume:     " + spherical_volume.toFixed(2) + " cu. cm" + "<br>";
        totalCost += spherical_price;
        invoice += "<br>";
    }else {
        invoice += "";
    }
    if(cone_volume != 0){
        invoice += "Type of Planter:     Truncated cone<br>";
        invoice += "Dimension:     " + cone_radius + " x " + cone_radius2 + " x " + cone_height + "<br>";
        invoice += "Volume:     " + cone_volume.toFixed(2) + " cu. cm" + "<br>";
        totalCost += cone_price;
        invoice += "<br>";
    }else {
        invoice += "";
    }

    invoice += "<br>";
    
    invoice += "Total Cost     $" + totalCost.toFixed(2) + "<br>"
    
    invoice += "</div>";

    document.getElementById('invoice').innerHTML = invoice;


}