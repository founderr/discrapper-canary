s(47120);
var T = s(200651),
    o = s(192379),
    n = s(481060),
    a = s(230711),
    l = s(187819),
    _ = s(63063),
    i = s(378298),
    r = s(584656),
    S = s(993750),
    E = s(981631),
    c = s(526761),
    O = s(689938),
    A = s(681789);
t.Z = function (e) {
    let { onClose: t, channelId: s } = e,
        [d, u] = o.useState(!1),
        I = (0, l._p)({ location: 'safety-tools-about-safety-alerts' }),
        L = o.useCallback(() => {
            I ? a.Z.open(E.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: c.to.DM_SAFETY_ALERTS_V2 }) : a.Z.open(E.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: c.to.DM_SAFETY_ALERTS }), t();
        }, [I, t]),
        N = o.useCallback(() => {
            !d &&
                (u(!0),
                (0, i.Uj)(s)
                    .then(() => {
                        t(),
                            (0, r.t)({
                                text: O.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
                                id: 'safety-tools-report-false-positive'
                            });
                    })
                    .catch(() => {
                        u(!1), (0, n.showToast)((0, n.createToast)(O.Z.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE));
                    }));
        }, [s, t, d]);
    return (0, T.jsxs)(S.Z, {
        style: A.wrapperStyle,
        children: [
            (0, T.jsx)(n.Text, {
                variant: 'text-md/medium',
                children: O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({ learnMoreLink: _.Z.getArticleURL(E.BhN.SAFETY_ALERTS) })
            }),
            (0, T.jsx)(n.Button, {
                className: A.settingsButton,
                onClick: L,
                fullWidth: !0,
                children: O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
            }),
            (0, T.jsx)('div', {
                children: (0, T.jsx)(n.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: A.reportFalsePositiveText,
                    children: O.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
                        reportFalsePositiveHook: (e, t) =>
                            (0, T.jsx)(
                                n.Button,
                                {
                                    className: A.reportFalsePositiveButton,
                                    size: n.Button.Sizes.NONE,
                                    color: n.Button.Colors.LINK,
                                    look: n.Button.Looks.LINK,
                                    disabled: d,
                                    onClick: N,
                                    children: e
                                },
                                t
                            )
                    })
                })
            })
        ]
    });
};
