t.d(n, {
  L: function() {
    return c
  }
});
var r = t(735250);
t(470079);
var s = t(409813),
  l = t(443650),
  a = t(464797),
  o = t(950806);

function i(e) {
  let {
    onClose: n
  } = e, {
    guildProductListing: t
  } = (0, a._)();
  return (0, r.jsx)(l.Z, {
    guildProductListing: t,
    className: o.header,
    onClose: n
  })
}
let c = (e, n, t) => t === s.h8.CONFIRM ? null : (0, r.jsx)(i, {
  onClose: () => n(!1)
})