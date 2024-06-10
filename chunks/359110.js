"use strict";
n.r(t), n.d(t, {
  transitionToChannel: function() {
    return d
  },
  transitionToThread: function() {
    return _
  }
});
var i = n("512722"),
  r = n.n(i),
  s = n("493683"),
  a = n("727429"),
  o = n("592125"),
  l = n("703656"),
  u = n("981631");

function d(e, t, n) {
  let i = o.default.getChannel(e);
  if (null == i) return;
  let r = (0, a.getGuildIdForGenericRedirect)(i);
  s.default.preload(i.guild_id, i.id), (0, l.transitionTo)(u.Routes.CHANNEL(r, i.id), t, n)
}

function _(e, t, n) {
  r()(null != e.parent_id, "Thread must have a parent ID.");
  let i = (0, a.getGuildIdForGenericRedirect)(e);
  (0, l.transitionTo)(u.Routes.CHANNEL(i, e.id), n, t)
}