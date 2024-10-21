i.d(l, {
    Z: function () {
        return d;
    }
});
var a = i(200651);
i(192379);
var o = i(866442),
    n = i(91218),
    r = i(518738),
    t = i(134433),
    s = i(981631);
function d(e) {
    var l;
    let { guildId: i, role: d, size: c, className: u } = e,
        f = (0, r.p9)({
            guildId: i,
            roleId: d.id,
            size: c
        });
    return null != f
        ? (0, a.jsx)(n.Z, {
              className: u,
              ...f
          })
        : (0, a.jsx)(t.Z, {
              color: null !== (l = d.colorString) && void 0 !== l ? l : (0, o.Rf)(s.p6O),
              className: u,
              size: c
          });
}
