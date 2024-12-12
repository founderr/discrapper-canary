r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651),
    a = r(442837),
    s = r(481060),
    o = r(695346),
    l = r(699516),
    u = r(388032);
function c(e) {
    let { userId: n, onClick: r } = e;
    if (!(0, a.e7)([l.Z], () => l.Z.isIgnored(n))) return null;
    let c = () => {
        o.Rt.updateSetting(!0), r();
    };
    return (0, i.jsx)(s.Button, {
        look: s.ButtonLooks.LINK,
        size: s.ButtonSizes.MIN,
        onClick: c,
        color: s.ButtonColors.LINK,
        children: u.intl.string(u.t.QbcRCA)
    });
}
