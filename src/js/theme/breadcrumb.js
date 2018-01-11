var $ = require('jquery');
var url = require('url');

function init() {
  var $breadcrumb = $('.hengshidoc-header-breadcrumb');
  var crumbs = window.location.pathname.slice(1).split('/');

  crumbs.forEach(function(path, index) {
    $breadcrumb.append($('<a>', {
      text: path,
      href: ['/'].concat(crumbs.slice(0, index)).join(''),
    }));
    if (index < (crumbs.length - 1)) {
      $breadcrumb.append($('<span>', {
        text: '/',
      }))
    }
  });
}

module.exports = {
  init: init,
};
