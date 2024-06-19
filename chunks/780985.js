n.d(t, {
  I: function() {
    return o
  },
  c: function() {
    return r
  }
});
var s = n(399606),
  a = n(594174),
  i = n(914788),
  l = n(880257);
let r = () => {
    let e = (0, l.Z)();
    return (0, s.e7)([i.Z, a.default], () => {
      if (!e) return a.default.getCurrentUser();
      let t = i.Z.getSelectedTeenId();
      if (null !== t) return a.default.getUser(t)
    })
  },
  o = e => (0, s.e7)([a.default], () => {
    let t = a.default.getUser(e);
    if (null != t) return t
  })