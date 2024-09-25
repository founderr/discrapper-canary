r.d(n, {
    L: function () {
        return c;
    }
});
var t = r(735250);
r(470079);
var a = r(409813),
    o = r(443650),
    i = r(464797),
    s = r(170038);
function l(e) {
    let { onClose: n } = e,
        { guildProductListing: r } = (0, i._)();
    return (0, t.jsx)(o.Z, {
        guildProductListing: r,
        className: s.header,
        onClose: n
    });
}
let c = (e, n, r) => (r === a.h8.CONFIRM ? null : (0, t.jsx)(l, { onClose: () => n(!1) }));
