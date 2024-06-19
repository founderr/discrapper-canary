n.d(t, {
  Z: function() {
    return r
  }
});
var l = n(735250);
n(470079);
var i = n(829750),
  s = n(280102);

function r(e) {
  let {
    channel: t,
    video: n,
    userCount: r
  } = e, {
    limit: a
  } = (0, i.Z)(t), o = -1, u = !1;
  return t.userLimit > 0 && (o = t.userLimit), n && a > 0 && (u = o < 0 || a < o, o = o > 0 ? Math.min(o, a) : a), (0, l.jsx)(s.Z, {
    users: r,
    total: o,
    videoLimit: u
  })
}