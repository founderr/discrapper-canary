r.d(n, {
  L: function() {
    return c
  }
});
var t = r(735250);
r(470079);
var o = r(409813),
  a = r(443650),
  i = r(464797),
  l = r(950806);

function s(e) {
  let {
    onClose: n
  } = e, {
    guildProductListing: r
  } = (0, i._)();
  return (0, t.jsx)(a.Z, {
    guildProductListing: r,
    className: l.header,
    onClose: n
  })
}
let c = (e, n, r) => r === o.h8.CONFIRM ? null : (0, t.jsx)(s, {
  onClose: () => n(!1)
})