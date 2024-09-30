n.r(t),
    n.d(t, {
        default: function () {
            return _;
        }
    });
var o = n(735250);
n(470079);
var a = n(481060),
    s = n(144535),
    i = n(332664),
    l = n(142497),
    r = n(774378),
    u = n(445102),
    c = n(190378),
    d = n(689938);
function _(e) {
    let { onClose: t, transitionState: _, analyticsData: m } = e,
        b = (0, s.I)('CALL_FEEDBACK_OPTION_OTHER');
    return (0, o.jsx)(i.Z, {
        modalType: 'voice',
        header: d.Z.Messages.CALL_FEEDBACK_SHEET_TITLE,
        body: d.Z.Messages.CALL_FEEDBACK_PROMPT,
        problemTitle: d.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
        problems: (0, r.Z)(!1),
        feedbackProblems: [b],
        onSubmit: function (e) {
            var t, s, i;
            let { rating: _, problem: b, dontShowAgain: E, feedback: h } = e;
            if ((E && (0, l.Kw)(c.v.VOICE_CALL_FEEDBACK), null != _))
                (0, u.Z)(_, ((t = b), null !== (i = null === (s = (0, r.Z)(!1).find((e) => e.label === t)) || void 0 === s ? void 0 : s.code) && void 0 !== i ? i : null), b, h, m),
                    null != b &&
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    body: d.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                                    ...t
                                });
                        });
        },
        onClose: t,
        transitionState: _,
        otherKey: b
    });
}
