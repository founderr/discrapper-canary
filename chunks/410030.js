"use strict";
n.r(t), n.d(t, {
  useTheme: function() {
    return s
  },
  useThemeIndex: function() {
    return a
  }
});
var i = n("780384"),
  r = n("981631");

function s() {
  let {
    theme: e
  } = (0, i.useThemeContext)();
  return e
}

function a() {
  return function(e) {
    switch (e) {
      case r.ThemeTypes.DARK:
        return 0;
      case r.ThemeTypes.LIGHT:
        return 1
    }
  }(s())
}
t.default = s