n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    });
var o = n(200651);
n(192379);
var i = n(481060),
    l = n(144535),
    a = n(332664),
    s = n(142497),
    r = n(774378),
    u = n(445102),
    c = n(190378),
    d = n(388032);
function m(e) {
    let { onClose: t, transitionState: m, analyticsData: b } = e,
        h = (0, l.I)('CALL_FEEDBACK_OPTION_OTHER');
    return (0, o.jsx)(a.Z, {
        modalType: 'voice',
        header: d.intl.string(d.t.Ss6tlZ),
        body: d.intl.string(d.t.tLi4cX),
        problemTitle: d.intl.string(d.t.FJmoxM),
        problems: (0, r.Z)(!1),
        feedbackProblems: [h],
        onSubmit: function (e) {
            var t, l, a;
            let { rating: m, problem: h, dontShowAgain: _, feedback: g } = e;
            if ((_ && (0, s.Kw)(c.v.VOICE_CALL_FEEDBACK), null != m))
                (0, u.Z)(m, ((t = h), null !== (a = null === (l = (0, r.Z)(!1).find((e) => e.label === t)) || void 0 === l ? void 0 : l.code) && void 0 !== a ? a : null), h, g, b),
                    null != h &&
                        (0, i.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    body: d.intl.string(d.t['d9+vQ0']),
                                    ...t
                                });
                        });
        },
        onClose: t,
        transitionState: m,
        otherKey: h
    });
}
