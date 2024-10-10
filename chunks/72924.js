n.d(t, {
    S: function () {
        return N;
    }
});
var i = n(735250);
n(470079);
var a = n(512722),
    s = n.n(a),
    l = n(481060),
    r = n(558381),
    o = n(821849),
    c = n(15640),
    d = n(724870),
    u = n(87484),
    _ = n(928518),
    E = n(106976),
    I = n(689011),
    m = n(55563),
    T = n(981631);
async function N(e) {
    let { applicationId: t, skuId: n, initialPlanId: a, analyticsLocations: N, analyticsLocationObject: h } = e,
        C = m.Z.get(n);
    if (null == C) {
        let e = (await (0, r.oJ)(t)).find((e) => e.sku.id === n);
        s()(null != e, 'Could not find store listing for sku'), e.sku.type === T.epS.SUBSCRIPTION_GROUP && (await (0, E.rx)(t, e.id));
    }
    (C = null != C ? C : m.Z.get(n)), s()(null != C && C.applicationId === t, 'SKU must belong to application'), C.type === T.epS.SUBSCRIPTION && !(0, c.a)([C.id]) && (await (0, o.GZ)(C.id));
    let f = (function () {
        let e = _.Z.getWindow(T.KJ3.CHANNEL_CALL_POPOUT);
        return null == e || e.closed ? l.DEFAULT_MODAL_CONTEXT : l.POPOUT_MODAL_CONTEXT;
    })();
    if (C.type !== T.epS.SUBSCRIPTION)
        return new Promise((e, i) => {
            (0, u.Z)({
                applicationId: t,
                skuId: n,
                analyticsLocationObject: h,
                analyticsLocations: N,
                contextKey: f,
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
        return (0, d.m)({
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
    })(t, n, a, h, N);
}
