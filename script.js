const q = document.getElementById("q");
const cards = document.querySelectorAll("#list .card");
const none = document.getElementById("none");

function filter() {
  const term = q.value.trim().toLowerCase();
  let found = 0;
  cards.forEach(c => {
    const match = c.textContent.toLowerCase().includes(term);
    c.hidden = !match;
    if (match) found++;
  });
  none.hidden = found > 0;
}

q.addEventListener("input", filter);
q.value = new URLSearchParams(location.search).get("q") || "";
filter();