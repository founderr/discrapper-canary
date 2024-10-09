s(47120);
var o = s(735250),
    T = s(470079),
    n = s(481060),
    a = s(230711),
    l = s(187819),
    _ = s(63063),
    i = s(378298),
    r = s(584656),
    S = s(993750),
    E = s(981631),
    c = s(526761),
    u = s(689938),
    O = s(681789);
t.Z = function (e) {
    let { onClose: t, channelId: s } = e,
        [d, A] = T.useState(!1),
        I = (0, l._p)({
            location: 'safety-tools-about-safety-alerts',
            autoTrackExposure: !1
        }),
        L = T.useCallback(() => {
            a.Z.open(E.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: I ? c.to.DM_SAFETY_ALERTS_V2 : c.to.DM_SAFETY_ALERTS }), t();
        }, [I, t]),
        C = T.useCallback(() => {
            !d &&
                (A(!0),
                (0, i.Uj)(s)
                    .then(() => {
                        t(),
                            (0, r.t)({
                                text: u.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
                                id: 'safety-tools-report-false-positive'
                            });
                    })
                    .catch(() => {
                        A(!1), (0, n.showToast)((0, n.createToast)(u.Z.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE));
                    }));
        }, [s, t, d]);
    return (0, o.jsxs)(S.Z, {
        style: O.wrapperStyle,
        children: [
            (0, o.jsx)(n.Text, {
                variant: 'text-md/medium',
                children: u.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({ learnMoreLink: _.Z.getArticleURL(E.BhN.SAFETY_ALERTS) })
            }),
            (0, o.jsx)(n.Button, {
                className: O.settingsButton,
                onClick: L,
                fullWidth: !0,
                children: u.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
            }),
            (0, o.jsx)('div', {
                children: (0, o.jsx)(n.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: O.reportFalsePositiveText,
                    children: u.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
                        reportFalsePositiveHook: (e, t) =>
                            (0, o.jsx)(
                                n.Button,
                                {
                                    className: O.reportFalsePositiveButton,
                                    size: n.Button.Sizes.NONE,
                                    color: n.Button.Colors.LINK,
                                    look: n.Button.Looks.LINK,
                                    disabled: d,
                                    onClick: C,
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
