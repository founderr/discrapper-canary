n.d(t, {
  J: function() {
    return a
  }
});
var i = n(442837),
  s = n(375954),
  l = n(594174);
let a = e => (0, i.e7)([s.Z, l.default], () => {
  if (null == e) return !1;
  let t = l.default.getCurrentUser();
  return null != s.Z.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
})