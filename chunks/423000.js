"use strict";
a.r(t), a.d(t, {
  handleInaccessiblePage: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("703656"),
  i = a("896797"),
  r = a("984933"),
  o = a("944486"),
  u = a("981631");

function d(e, t) {
  if ((0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("22706")]).then(a.bind(a, "438725"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    }), o.default.getChannelId(e) === t) {
    var d;
    (0, l.replaceWith)(u.Routes.CHANNEL(e, null === (d = r.default.getDefaultChannel(e)) || void 0 === d ? void 0 : d.id))
  } else(0, l.replaceWith)(i.default.defaultRoute)
}