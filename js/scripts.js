$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat-talk").prepend("<li>Meow!</li>");
    $("ul#dog-talk").prepend("<li>Woof!</li>");
  });

  $("button#dog").click(function() {
    $("ul#cat-talk").prepend("<li>Woof?</li>");
    $("ul#dog-talk").prepend("<li>Wait, meow?</li>");
  });
});