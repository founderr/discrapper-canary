n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(871499),
    l = n(388032),
    u = n(793635);
function c(e) {
    let { popoutOpen: t, onClosePopout: n, onOpenPopout: i, ...c } = e,
        d = t ? l.intl.string(l.t['7Dwcnp']) : l.intl.string(l.t.JzWez8);
    return (0, r.jsx)(o.Z, {
        label: d,
        onClick: t ? n : i,
        iconComponent: s.WindowLaunchIcon,
        iconClassName: a()({ [u.popIn]: t }),
        ...c
    });
}
