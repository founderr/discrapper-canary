n.r(t),
    n.d(t, {
        default: function () {
            return _;
        }
    });
var a = n(735250),
    r = n(470079),
    o = n(481060),
    l = n(144535),
    s = n(332664),
    i = n(142497),
    c = n(626135),
    u = n(798733),
    d = n(559187),
    f = n(981631),
    m = n(190378),
    b = n(689938);
function _(e) {
    let { reportId: t, reportType: _, ...h } = e;
    r.useEffect(() => {
        c.default.track(f.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: _
        });
    }, [t, _]);
    let E = (0, l.I)('CALL_FEEDBACK_OPTION_OTHER');
    return (0, a.jsx)(s.Z, {
        modalType: 'in_app_report',
        header: b.Z.Messages.IAR_FEEDBACK_TITLE,
        body: b.Z.Messages.IAR_FEEDBACK_PROMPT,
        problemTitle: b.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
        problems: (0, u.Z)(),
        feedbackProblems: [E],
        onSubmit: function (e) {
            let { rating: r, problem: l, dontShowAgain: s, feedback: c } = e;
            if (
                (s && (0, i.Kw)(m.v.IN_APP_REPORTS_FEEDBACK),
                (0, d.Z)({
                    rating: r,
                    problem: l,
                    feedback: c,
                    reportId: t,
                    reportType: _,
                    dontShowAgain: s
                }),
                null != r && null != l)
            )
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, a.jsx)(e, {
                            body: b.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                            ...t
                        });
                });
        },
        otherKey: E,
        ...h
    });
}
