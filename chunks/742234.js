i.r(n),
    i.d(n, {
        default: function () {
            return e;
        }
    });
var r = i(200651);
i(192379);
var s = i(98278),
    a = i(790527),
    c = i(474936),
    o = i(388032);
function e(t) {
    let { onClose: n, analyticsSource: e, analyticsLocation: l, ...d } = t;
    return (0, r.jsx)(a.Z, {
        artURL: i(677531),
        type: c.cd.CLIENT_THEMES_UPSELL,
        title: o.intl.string(o.t.GI7t09),
        body: o.intl.string(o.t.MRrvSE),
        glowUp: o.intl.string(o.t.MRrvSE),
        onSecondaryClick: () => {
            (0, s.$)(n);
        },
        secondaryCTA: o.intl.string(o.t.PcTCBw),
        analyticsSource: e,
        analyticsLocation: l,
        onClose: n,
        enableArtBoxShadow: !1,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        ...d
    });
}
