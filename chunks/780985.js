n.d(t, {
  I: function() {
    return c
  },
  c: function() {
    return r
  }
});
var s = n(399606),
  i = n(594174),
  a = n(914788),
  l = n(880257);
let r = () => {
    let e = (0, l.Z)();
    return (0, s.e7)([a.Z, i.default], () => {
      if (!e) return i.default.getCurrentUser();
      let t = a.Z.getSelectedTeenId();
      if (null !== t) return i.default.getUser(t)
    })
  },
  c = e => (0, s.e7)([i.default], () => {
    let t = i.default.getUser(e);
    if (null != t) return t
  })