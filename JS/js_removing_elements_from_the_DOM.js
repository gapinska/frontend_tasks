var parent= getElementById("main-nav").getElementsByTagName("ul")[0];
var child= parent.getElementsByTagName("li")[0];
var removed = parent.removeChild(child);

//przywrócenie
parent.appendChild(removed);