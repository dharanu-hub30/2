// ---- Media page: YouTube video ----
// Paste a YouTube video ID below (the part after "v=" in the video's address),
// e.g. "abc123XYZ00". Leave it empty to show a link card instead.
const YOUTUBE_VIDEO_ID = "";

const ytBox = document.getElementById("ytBox");
if (ytBox) {
  if (YOUTUBE_VIDEO_ID) {
    ytBox.innerHTML = '<iframe src="https://www.youtube.com/embed/' + YOUTUBE_VIDEO_ID +
      '" title="Wind energy video" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
  } else {
    ytBox.innerHTML = '<div class="fallback"><p>Watch how wind turbines work on YouTube.</p>' +
      '<a href="https://www.youtube.com/results?search_query=how+wind+turbines+work" target="_blank" rel="noopener">Open YouTube results</a></div>';
  }
}

// ---- Application form page ----
const form = document.getElementById("windForm");
if (form) {
  const today = new Date().toISOString().split("T")[0];
  const survey = document.getElementById("survey");
  const install = document.getElementById("install");
  survey.min = today;
  install.min = today;
  survey.addEventListener("change", () => { install.min = survey.value || today; });

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // remove this line to post to a real server
    const name = form.elements.firstName.value;
    const thanks = document.getElementById("thanks");
    thanks.textContent = "Thank you, " + name + ". Your Wind Wave application has been received.";
    thanks.style.display = "block";
    thanks.scrollIntoView({ behavior: "smooth" });
  });
  form.addEventListener("reset", () => { document.getElementById("thanks").style.display = "none"; });
}
