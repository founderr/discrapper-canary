n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(866442),
    s = n(91218),
    r = n(518738),
    l = n(134433),
    o = n(981631);
function c(e) {
    var t;
    let { guildId: n, role: c, size: d, className: u } = e,
        _ = (0, r.p9)({
            guildId: n,
            roleId: c.id,
            size: d
        });
    return null != _
        ? (0, i.jsx)(s.Z, {
              className: u,
              ..._
          })
        : (0, i.jsx)(l.Z, {
              color: null !== (t = c.colorString) && void 0 !== t ? t : (0, a.Rf)(o.p6O),
              className: u,
              size: d
          });
}
