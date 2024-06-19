n.d(t, {
  h: function() {
    return a
  }
});
var l = n(237292),
  i = n(403485),
  s = n(604849);

function a(e) {
  let t = (0, l.y0)({
      location: "safety-tools-button"
    }),
    n = (0, s.c)(),
    a = (0, i.h)(e);
  if (!t || !n) return;
  let r = a.filter(e => null != e.dismiss_timestamp);
  if (0 !== r.length) return r.sort((e, t) => e.type > t.type ? 1 : e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1)[0]
}