i.r(n), i.d(n, {
  default: function() {
    return r
  }
});
var l = i(735250);
i(470079);
var s = i(447452),
  t = i(877485),
  o = i(910364),
  a = i(107889);

function r(e) {
  let {
    location: n,
    user: i,
    ...r
  } = e, {
    basicsEnabled: d
  } = (0, s.t)({
    location: n
  }), {
    originalFriendingEnabled: u,
    improvedFriendingEnabled: c
  } = (0, t.V)({
    location: n
  });
  return (d || u || c) && !i.bot && !i.isNonUserBot() && !i.isClyde() ? (0, l.jsx)(a.Z, {
    ...r,
    user: i
  }) : (0, l.jsx)(o.Z, {
    ...r,
    user: i
  })
}