window.onload = function() {
  var tags = document.getElementsByTagName('*');
  var tag;
  for(var i=0; i<tags.length; ++i) {
    tag = tags[i];
    if(tag.getAttribute('class') && tag.getAttribute('class').indexOf('delete') != -1)
    {
      tag.onclick = function() {
        return window.confirm("Are you sure you want to delete this item ?");
      }
    }
  }
}