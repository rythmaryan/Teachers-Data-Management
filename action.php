<?php

     $host = "localhost";  
     $user = "root";  
     $password = '';  
     $db_name = "teachersdetails";  
       
     $con = mysqli_connect($host, $user, $password, $db_name);  
     if(mysqli_connect_errno()) {  
         die("Failed to connect with MySQL: ". mysqli_connect_error());  
     }  
      
    
        $sql = "select * from teachersdetails";  
        $result = mysqli_query($con, $sql);  

        $row = mysqli_fetch_array($result);  
        $count = mysqli_num_rows($result);  
         
        echo $row[1];
        // if($count == 1){   
        //     header('location: modification.php');
        // }  
        // else{  
        //     echo "Login failed. Invalid username or password.";  
        //     header('location: register.php');
        // }     
?>