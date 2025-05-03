fetch("http://127.0.0.1:8000/api/job/")
 .then((response) => {
 if (!response.ok) {
 throw new Error("Network response was not ok " + response.statusText);
 }
 return response.json();
 })
 .then((jobs) => {
 console.log("Fetched Jobs:", jobs);

 const container = document.getElementById("job-container");

 jobs.forEach((job) => {
 const col = document.createElement("div");
 col.className = "col-md-6 col-lg-4";

 col.innerHTML = `
 <div class="job-card p-4">
 <h4>${job.title || "Job Title"}</h4>
 <p><strong>Location:</strong> ${job.jobLocation || "N/A"}</p>
 <p><strong>Experience:</strong> ${job.experience || "N/A"}</p>
 <p><strong>Job Description:</strong> ${job.jobDescription || "N/A"}</p>
 <p><strong>Valid Through Date:</strong> ${job.validThroughDate || "N/A"}</p>
 <div class="text-end">
 <a href="${job.apply_link || "#"}" class="apply-btn" target="_blank">Apply Now</a>
 </div>
 </div>
 `;

 container.appendChild(col);
 });
 })
 .catch((error) => {
 console.error("There was a problem fetching job data:", error);
 });