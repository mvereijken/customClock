## Synopsis

A small library that will create an analog clock in an element of your choice. customClock is a canvas element that will be appended to the element you prefer.

## Code Example

The code below is the code you need to use to call the customClock function (object constructor) in order to make this library work. The parameters can be changed to whatever you prefer.
You can choose which element to append your clock to, the background-color of the clock, the color of the numbers, the size of the clock, the css position and the css float of the clock.

```javascript
var element = "customClock";
var backgroundColor = "white";
var numberColor = "black";
var size = 400;
var positionStyle = "initial";
var cssFloat = "initial";

var newClock = new customClock(element, backgroundColor, numberColor, size, positionStyle, cssFloat);
```

## Demo
See customClock [demo](http://athena.fhict.nl/users/i313768/customClock/)

## Motivation

This library was created to learn how to make your own library.

## Installation

Just download customClock.js, put it under the body tag of your html page and call it. Make sure the height of the parent of the targeted element isn't smaller than the var size. 
The code below is the full code you need to add to your html page in order to make this library work. Just make sure the src of customClock locates the customClock.js file correctly. Also make sure this code is executed after the loading of the body by inserting it at the bottom of your html page.

```javascript
<script src="customClock.js"></script>
<script>

var element = "customClock";
var backgroundColor = "white";
var numberColor = "black";
var size = 400;
var positionStyle = "initial";
var cssFloat = "initial";

var newClock = new customClock(element, backgroundColor, numberColor, size, positionStyle, cssFloat);

</script>
```


### Parameters

| Parameters   		| Type       | Description                                                              				      | Example        |
|:-----------------:|:----------:|:----------------------------------------------------------------------------------------------:|:--------------:|
| element      		| string     | selector that targets the id of the element that will be the parent of the customClock canvas  | "customClock"  |
| backgroundColor   | string     | The background-color of your customClock  					           					 	  | "white"        |
| numberColor   	| string     | The color of the numbers of your customClock  				            				 	  | "#000"         |
| size    			| int        | The size of your customClock in px  							            				 	  | 400            |
| positionStyle     | string     | The css position of the customClock  					                				 	  | "absolute"     |
| cssFloat    		| string     | the css float of the customClock						                    				 	  | "center"       |
