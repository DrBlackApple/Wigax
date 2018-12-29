<?php
	
/**
 * use this file to write your route
 */

return [

	/**
	 * Write your route like this :
	 * - for simple get/post request : "url|type>name" => "Controller@Method"
	 * - for redirection : "url" => "route_name"
	 * Where :
	 * - the type can be : post, get, any
	 * - {name} is variable champ
	 */
	"/                   |any  >home"           => "MainController@index",
	

]

?>