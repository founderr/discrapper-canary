n.d(t, {
    S: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var a = n(512722),
    s = n.n(a),
    r = n(481060),
    l = n(558381),
    o = n(821849),
    c = n(15640),
    u = n(724870),
    d = n(87484),
    _ = n(928518),
    E = n(106976),
    I = n(689011),
    m = n(55563),
    T = n(981631);
async function f(e) {
    let { applicationId: t, skuId: n, initialPlanId: a, analyticsLocations: f, analyticsLocationObject: h } = e,
        N = m.Z.get(n);
    if (null == N) {
        let e = (await (0, l.oJ)(t)).find((e) => e.sku.id === n);
        s()(null != e, 'Could not find store listing for sku'), e.sku.type === T.epS.SUBSCRIPTION_GROUP && (await (0, E.rx)(t, e.id));
    }
    (N = null != N ? N : m.Z.get(n)), s()(null != N && N.applicationId === t, 'SKU must belong to application'), N.type === T.epS.SUBSCRIPTION && !(0, c.a)([N.id]) && (await (0, o.GZ)(N.id));
    let p = (function () {
        let e = _.Z.getWindow(T.KJ3.CHANNEL_CALL_POPOUT);
        return null == e || e.closed ? r.DEFAULT_MODAL_CONTEXT : r.POPOUT_MODAL_CONTEXT;
    })();
    if (N.type !== T.epS.SUBSCRIPTION)
        return new Promise((e, i) => {
            (0, d.Z)({
                applicationId: t,
                skuId: n,
                analyticsLocationObject: h,
                analyticsLocations: f,
                contextKey: p,
                onComplete: (t) => {
                    var n;
                    e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : []);
                },
                onClose: (e) => {
                    !e && i();
                }
            });
        });
    await (function (e, t, n, a, s) {
        return (0, u.m)({
            applicationId: e,
            skuId: t,
            initialPlanId: n,
            analyticsLocationObject: a,
            analyticsLocations: s,
            renderHeader: (e, t, n) =>
                (0, i.jsx)(I.t, {
                    step: n,
                    onClose: () => t(!1)
                })
        });
    })(t, n, a, h, f);
}
