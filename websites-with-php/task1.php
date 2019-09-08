<?php
function randomColor(){
    $rcolor = '#';
    for($i=0;$i<6;$i++){
        $randNum = rand(0,15);
        switch($randNum){
            case 10:$randNum='A';
            break;
            case 11:$randNum='B';
            break;
            case 12:$randNum='C';
            break;
            case 13:$randNum='D';
            break;
            case 14:$randNum='E';
            break;
            case 15:$randNum='F';
            break;
        }
       $rcolor .= $randNum;

    }

    return $rcolor;


}

echo '<div style="padding:15px;background-color:'.randomColor().'">this will have a random background color</div>';
?>

