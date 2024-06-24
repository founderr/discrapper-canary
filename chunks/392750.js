t.d(r, {
  Z: function() {
    return h
  }
});
var a = t(735250);
t(470079);
var n = t(442837),
  i = t(481060),
  l = t(814443),
  o = t(594174),
  c = t(681619),
  s = t(245149),
  d = t(719556);
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
  let e = (0, n.Wu)([l.Z, o.default], () => l.Z.getUserAffinities().map(e => {
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
  return 0 === e.length ? null : (0, a.jsx)(i.ScrollerThin, {
    children: (0, a.jsx)(c.Z, {
      className: d.panel,
      columns: u,
      rowClassName: s.row,
      data: e
    })
  })
}