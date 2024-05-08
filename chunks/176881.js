"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("626135"),
  s = n("360347"),
  i = n("981631");

function l(e) {
  let {
    tab_opened: t,
    source: n
  } = e;
  a.default.track(i.AnalyticEvents.FRIENDS_LIST_VIEWED, {
    tab_opened: t,
    source: n,
    ...(0, s.default)()
  })
}