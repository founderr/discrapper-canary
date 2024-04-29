"use strict";
t.r(r), t.d(r, {
  default: function() {
    return h
  }
});
var a = t("735250");
t("470079");
var i = t("442837"),
  l = t("481060"),
  n = t("800599"),
  o = t("594174"),
  c = t("681619"),
  s = t("128386"),
  d = t("277513");
let u = [{
  key: "user",
  cellClassName: s.userCell,
  render(e) {
    var r;
    let {
      user: t,
      key: a
    } = e;
    return null !== (r = null == t ? void 0 : t.username) && void 0 !== r ? r : a
  }
}, {
  key: "affinity",
  cellClassName: s.affinityCell,
  render(e) {
    let {
      affinity: r
    } = e;
    return "".concat(r)
  }
}];

function h() {
  let e = (0, i.useStateFromStoresArray)([n.default, o.default], () => n.default.getUserAffinities().map(e => {
    let {
      user_id: r,
      affinity: t
    } = e;
    return {
      user: o.default.getUser(r),
      affinity: t,
      key: r
    }
  }));
  return 0 === e.length ? null : (0, a.jsx)(l.ScrollerThin, {
    children: (0, a.jsx)(c.default, {
      className: d.panel,
      columns: u,
      rowClassName: s.row,
      data: e
    })
  })
}