---

# 	******************************
# 	* assets/js/VersionNumber.js *
#	******************************
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

const major = {{ site.majorversion }};
const releaseDateTime = new Date ("{{ site.releasedatetime }}");


import { Octokit, App } from "https://esm.sh/octokit";

const octokit = new Octokit({ });

var results = await octokit.paginate ("GET /repos/{{ site.repo }}/commits?per_page=100",
{
  owner: "OWNER",
  repo: "REPO",
  headers:
  {
    "X-GitHub-Api-Version": "2022-11-28"
  }
});

var commitsSinceLastMajorVersion = [];

for (var commit of results)
{
	var commitDate = new Date (commit.commit.committer.date);
	
	if (commitDate.getTime () >= releaseDateTime.getTime ())
	{
		commitsSinceLastMajorVersion.push (commit);
	}
}

document.getElementById ("VersionNumber").textContent = major + "." + commitsSinceLastMajorVersion.length;