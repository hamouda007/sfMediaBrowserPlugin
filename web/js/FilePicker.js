function sfMediaBrowserFilePicker(){}
sfMediaBrowserFilePicker = {
  findFiles: function() {
    var tags = document.getElementById('sf_media_browser_list').getElementsByTagName('li');
    var li, as, a;
    for(var i=0; i<tags.length; ++i) {
      li = tags[i];
      if(sfMediaBrowserFilePicker.hasClass(li, 'file')) {
        as = li.getElementsByTagName('a');
        a = as[0];
        a.onclick = function() {
          sfMediaBrowserFilePicker.callback(this.getAttribute('href'));
          return false;
        }
      }
    }
  },
  hasClass: function(element, class_name) {
    return element.getAttribute('class').indexOf(class_name) != -1;
  },
  callback: function(url) {
    var window_manager = window.opener.window_manager;
    window_manager.callback(url);
  }
};

window.onload = function() {
  sfMediaBrowserFilePicker.findFiles();
}