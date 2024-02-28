"use strict";
r.r(t), r.d(t, {
  default: function() {
    return h
  }
});
var a = r("37983");
r("884691");
var n = r("446674"),
  i = r("77078"),
  l = r("843823"),
  o = r("697218"),
  s = r("637171"),
  c = r("661535"),
  d = r("699412");
let u = [{
  key: "user",
  cellClassName: c.userCell,
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
  cellClassName: c.affinityCell,
  render(e) {
    let {
      affinity: t
    } = e;
    return "".concat(t)
  }
}];

function h() {
  let e = (0, n.useStateFromStoresArray)([l.default, o.default], () => l.default.getUserAffinities().map(e => {
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
  return 0 === e.length ? null : (0, a.jsx)(i.ScrollerThin, {
    children: (0, a.jsx)(s.default, {
      className: d.panel,
      columns: u,
      rowClassName: c.row,
      data: e
    })
  })
}