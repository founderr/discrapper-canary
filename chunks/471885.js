n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(411104);
var i = n(735250);
n(470079);
var a = n(758426),
    o = n(973675),
    s = n(949605),
    l = n(981631);
function u(e) {
    let { tier: t, ...n } = e;
    switch (t) {
        case l.Eu4.NONE:
        case l.Eu4.TIER_1:
            return (0, i.jsx)(a.Z, { ...n });
        case l.Eu4.TIER_2:
            return (0, i.jsx)(o.Z, { ...n });
        case l.Eu4.TIER_3:
            return (0, i.jsx)(s.Z, { ...n });
        default:
            throw Error('Not a valid tier type');
    }
}
