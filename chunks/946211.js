t.d(n, {
  L: function() {
    return c
  }
});
var r = t(735250);
t(470079);
var o = t(409813),
  a = t(443650),
  l = t(464797),
  s = t(950806);

function i(e) {
  let {
    onClose: n
  } = e, {
    guildProductListing: t
  } = (0, l._)();
  return (0, r.jsx)(a.Z, {
    guildProductListing: t,
    className: s.header,
    onClose: n
  })
}
let c = (e, n, t) => t === o.h8.CONFIRM ? null : (0, r.jsx)(i, {
  onClose: () => n(!1)
})