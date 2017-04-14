javascript:(function() {
  matchers = [
    {
      live: 's://www.qab',
      local: '://local',
    },
    {
      live: 's://www.qaa',
      local: '://local',
    },
  ];

  var terminated = false;
  matchers.forEach(function (matcher, index) {
    if (!terminated) {
      var matchFound = window.location.href.match(matcher);
      if (matchFound) {
        var link = window.location.href.replace('s://www.qab', '://local');
        window.location.href = link;
        terminated = true;
      }
    }
  });
})()
