---

# 	****************************
# 	* assets/js/ShowMessage.js *
#	****************************
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

const currentDate = new Date ();
const postDate = '{{ site.posts.first.date | date: "%Y-%m-%d" }}';
const persistent = {{ site.posts.first.persistent }};

if (postDate == currentDate.toISOString ().slice (0, 10) || persistent === "true")
{
	document.getElementById ("Message").style.display = "block";
}