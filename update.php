<?php

$contents = file_get_contents('items.json');


$contentsDecoded = json_decode($contents, true);
$contentsDecoded['products'] = 'lol';
$reEncoded = json_encode($contentsDecoded);

echo($reEncoded);
?>