/*

 	*************************
 	* assets/js/Carousel.js *
	*************************

 	Copyright 2024 1st New Longton Scouts

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

		http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.


	AUTHOR'S NOTE:

	I initially wrote this script as part of a university project when I'd
	just started learning JS. I pulled it into this project as a "quick and
	easy" way of including a carousel before I thought of making this
	publicly available. I apologise in advance for any horrendous rookie
	mistakes you may find.

*/

var paths = [];
var captions = [];
var currentIndex = 1;
var time = 5000;

async function MakeCarousel ()
{
	var file = "Carousel.json";

	var auto = document.currentScript.getAttribute ("auto-scroll");

	if (document.currentScript.getAttribute ("definition") != null)
	{
		file = document.currentScript.getAttribute ("definition");
	}

	let response = await fetch ("assets/json/" + file);
	let jsonObject =  await response.json (); // Convert response to JSON.
	
	var carousel = document.getElementById ("Carousel");

	for (i in jsonObject) // Itterate through all the JSON objects.
	{
		paths.push (jsonObject [i].path); // Put the stuff into the arrays.
		captions.push (jsonObject [i].caption);
	}
	
	if (auto != null)
	{
		if (auto == "false")
		{
			GoLeft (false); // No auto-scroll.
			return;
		}
	}

	GoLeft (true); // Old behaviour by default.
}

function GoLeft (auto = false)
{
	var image = document.getElementById ("CarouselImage");

	currentIndex--;
	
	if (currentIndex < 0) // Wrap round.
	{
		currentIndex = paths.length - 1;
	}
	
	image.setAttribute ("src", paths [currentIndex]);
	image.setAttribute ("alt", captions [currentIndex]);
	
	if (auto === true)
	{
		setTimeout (GoLeft, time); // Scroll automatically.
	}
}

function GoRight () // Called when the Right Arrow is pressed.
{
	var image = document.getElementById ("CarouselImage");

	currentIndex++;
	
	if (currentIndex > paths.length - 1) // Wrap round.
	{
		currentIndex = 0;
	}
	
	image.setAttribute ("src", paths [currentIndex]);
	image.setAttribute ("alt", captions [currentIndex]);
}

MakeCarousel (); // Call the function on page load.