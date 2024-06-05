"use strict";
r.r(t), r.d(t, {
  default: function() {
    return h
  }
});
var a = r("735250");
r("470079");
var i = r("442837"),
  n = r("481060"),
  l = r("800599"),
  o = r("594174"),
  c = r("681619"),
  s = r("128386"),
  d = r("277513");
let u = [{
  key: "user",
  cellClassName: s.userCell,
  render(e) {
    var t;
    let {
      user: r,
      key: a
    } = e;
    return null !== (t = null == r ? void 0 : r.username) && void 0 !== t ? t : a
  }
}, {
  key: "affinity",
  cellClassName: s.affinityCell,
  render(e) {
    let {
      affinity: t
    } = e;
    return "".concat(t)
  }
}];

function h() {
  let e = (0, i.useStateFromStoresArray)([l.default, o.default], () => l.default.getUserAffinities().map(e => {
    let {
      user_id: t,
      affinity: r
    } = e;
    return {
      user: o.default.getUser(t),
      affinity: r,
      key: t
    }
  }));
  return 0 === e.length ? null : (0, a.jsx)(n.ScrollerThin, {
    children: (0, a.jsx)(c.default, {
      className: d.panel,
      columns: u,
      rowClassName: s.row,
      data: e
    })
  })
}