s.d(t, {
  I: function() {
    return o
  },
  c: function() {
    return l
  }
});
var n = s(399606),
  a = s(594174),
  i = s(914788),
  r = s(880257);
let l = () => {
    let e = (0, r.Z)();
    return (0, n.e7)([i.Z, a.default], () => {
      if (!e) return a.default.getCurrentUser();
      let t = i.Z.getSelectedTeenId();
      if (null !== t) return a.default.getUser(t)
    })
  },
  o = e => (0, n.e7)([a.default], () => {
    let t = a.default.getUser(e);
    if (null != t) return t
  })