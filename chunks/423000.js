"use strict";
a.r(t), a.d(t, {
  handleInaccessiblePage: function() {
    return u
  }
});
var n = a("927723"),
  s = a("703656"),
  l = a("896797"),
  i = a("984933"),
  r = a("944486"),
  o = a("981631");

function u(e, t) {
  if ((0, n.showInaccessibleLinkModal)({
      kind: "channel"
    }), r.default.getChannelId(e) === t) {
    var a;
    (0, s.replaceWith)(o.Routes.CHANNEL(e, null === (a = i.default.getDefaultChannel(e)) || void 0 === a ? void 0 : a.id))
  } else(0, s.replaceWith)(l.default.defaultRoute)
}