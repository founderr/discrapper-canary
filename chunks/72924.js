n.d(t, {
    S: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(512722),
    a = n.n(i),
    o = n(481060),
    s = n(558381),
    l = n(821849),
    u = n(15640),
    c = n(724870),
    d = n(87484),
    _ = n(928518),
    E = n(106976),
    f = n(689011),
    h = n(55563),
    p = n(981631);
function m() {
    let e = _.Z.getWindow(p.KJ3.CHANNEL_CALL_POPOUT);
    return null == e || e.closed ? o.DEFAULT_MODAL_CONTEXT : o.POPOUT_MODAL_CONTEXT;
}
async function I(e) {
    let { applicationId: t, skuId: n, initialPlanId: r, analyticsLocations: i, analyticsLocationObject: o } = e,
        c = h.Z.get(n);
    if (null == c) {
        let e = (await (0, s.oJ)(t)).find((e) => e.sku.id === n);
        a()(null != e, 'Could not find store listing for sku'), e.sku.type === p.epS.SUBSCRIPTION_GROUP && (await (0, E.rx)(t, e.id));
    }
    (c = null != c ? c : h.Z.get(n)), a()(null != c && c.applicationId === t, 'SKU must belong to application'), c.type === p.epS.SUBSCRIPTION && !(0, u.a)([c.id]) && (await (0, l.GZ)(c.id));
    let _ = m();
    if (c.type !== p.epS.SUBSCRIPTION)
        return new Promise((e, r) => {
            let a = (t) => {
                    var n;
                    e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : []);
                },
                s = (e) => {
                    !e && r();
                };
            (0, d.Z)({
                applicationId: t,
                skuId: n,
                analyticsLocationObject: o,
                analyticsLocations: i,
                contextKey: _,
                onComplete: a,
                onClose: s
            });
        });
    await T(t, n, r, o, i);
}
function T(e, t, n, i, a) {
    let o = (e, t, n) =>
        (0, r.jsx)(f.t, {
            step: n,
            onClose: () => t(!1)
        });
    return (0, c.m)({
        applicationId: e,
        skuId: t,
        initialPlanId: n,
        analyticsLocationObject: i,
        analyticsLocations: a,
        renderHeader: o
    });
}
