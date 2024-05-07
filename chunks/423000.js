"use strict";
n.r(t), n.d(t, {
  handleInaccessiblePage: function() {
    return u
  }
});
var a = n("927723"),
  s = n("703656"),
  i = n("896797"),
  l = n("984933"),
  r = n("944486"),
  o = n("981631");

function u(e, t) {
  if ((0, a.showInaccessibleLinkModal)({
      kind: "channel"
    }), r.default.getChannelId(e) === t) {
    var n;
    (0, s.replaceWith)(o.Routes.CHANNEL(e, null === (n = l.default.getDefaultChannel(e)) || void 0 === n ? void 0 : n.id))
  } else(0, s.replaceWith)(i.default.defaultRoute)
}