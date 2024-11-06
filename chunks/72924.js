n.d(t, {
    S: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(481060),
    o = n(558381),
    s = n(821849),
    c = n(15640),
    u = n(724870),
    d = n(87484),
    m = n(928518),
    h = n(106976),
    f = n(689011),
    p = n(55563),
    g = n(981631);
async function _(e) {
    let { applicationId: t, skuId: n, initialPlanId: r, analyticsLocations: _, analyticsLocationObject: E } = e,
        C = p.Z.get(n);
    if (null == C) {
        let e = (await (0, o.oJ)(t)).find((e) => e.sku.id === n);
        l()(null != e, 'Could not find store listing for sku'), e.sku.type === g.epS.SUBSCRIPTION_GROUP && (await (0, h.rx)(t, e.id));
    }
    (C = null != C ? C : p.Z.get(n)), l()(null != C && C.applicationId === t, 'SKU must belong to application'), C.type === g.epS.SUBSCRIPTION && !(0, c.a)([C.id]) && (await (0, s.GZ)(C.id));
    let I = (function () {
        let e = m.Z.getWindow(g.KJ3.CHANNEL_CALL_POPOUT);
        return null == e || e.closed ? a.DEFAULT_MODAL_CONTEXT : a.POPOUT_MODAL_CONTEXT;
    })();
    if (C.type !== g.epS.SUBSCRIPTION)
        return new Promise((e, i) => {
            (0, d.Z)({
                applicationId: t,
                skuId: n,
                analyticsLocationObject: E,
                analyticsLocations: _,
                contextKey: I,
                onComplete: (t) => {
                    var n;
                    e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : []);
                },
                onClose: (e) => {
                    !e && i();
                }
            });
        });
    await (function (e, t, n, r, l) {
        return (0, u.m)({
            applicationId: e,
            skuId: t,
            initialPlanId: n,
            analyticsLocationObject: r,
            analyticsLocations: l,
            renderHeader: (e, t, n) =>
                (0, i.jsx)(f.t, {
                    step: n,
                    onClose: () => t(!1)
                })
        });
    })(t, n, r, E, _);
}
