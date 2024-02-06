---

# 	***********************
# 	* assets/js/Search.js *
#	***********************
#
# 	Copyright 2024 1st New Longton Scouts
#
#	Licensed under the Apache License, Version 2.0 (the "License");
#	you may not use this file except in compliance with the License.
#	You may obtain a copy of the License at
#
#		http://www.apache.org/licenses/LICENSE-2.0
#
#	Unless required by applicable law or agreed to in writing, software
#	distributed under the License is distributed on an "AS IS" BASIS,
#	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#	See the License for the specific language governing permissions and
#	limitations under the License.

---

document.getElementById ("SearchBarContainer").style.display = "initial"; // Only show Search box if JS runs.

const rows = document.getElementsByClassName ("Row");

function Search ()
{
	Clear ();
	
	var term = document.getElementById ("SearchTerm").value;
	term = term.toLowerCase ();
	term = term.replace (/\&/g, '&amp;').replace (/\</g, '&lt;').replace (/\>/g, '&gt;').replace (/\"/g, '&quot;').replace (/\'/g, '&#x27;').replace (/\//g, '&#x2F;');
	var found = false;
	
	for (var i = 0; i < rows.length; i++)
	{
		var filename = rows [i].innerText.slice (0, -8).toLowerCase ();
		
		if (filename.includes (term))
		{
			found = true;
		}
		else
		{
			rows [i].style.display = "none";
			
			if (i == rows.length - 1 && !found)
			{
				alert ('"' + term + '" not found! Please try again.'); 
			}
		}
	}
	
	if (found == false)
	{
		Clear ();
	}
}

function Clear ()
{
	for (let row of rows)
	{
		row.style.display = "table-row";
	}
}

function SearchOnEnter (element)
{
    if (event.key === "Enter")
	{
        Search ();       
    }
}