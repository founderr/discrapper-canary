var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(481060),
    o = n(442837),
    c = n(547280),
    d = n(678513),
    u = n(981631),
    _ = n(689938),
    h = n(224719);
t.Z = function (e) {
    let { guild: t } = e,
        s = (0, o.e7)([d.Z], () => d.Z.getActiveGuildSignUp(t.id)),
        E = a.useCallback(() => {
            null != s &&
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('22862'), n.e('53596')]).then(n.bind(n, 646202));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            target: s,
                            guildId: t.id
                        });
                });
        }, [s, t.id]),
        m = a.useCallback(() => {
            null != s && (0, c.b)(s.key, s.dismissibleContent);
        }, [s]);
    if (null == s) return null;
    let I = 'url('.concat(s.backgroundAssetUrl, ') black top / cover no-repeat');
    return (0, i.jsx)(l.ThemeProvider, {
        theme: u.BRd.DARK,
        children: (e) =>
            (0, i.jsx)('div', {
                className: r()(h.container, e),
                children: (0, i.jsxs)('div', {
                    className: h.card,
                    style: { background: I },
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.eyebrow,
                            children: [
                                (0, i.jsx)(l.EnvelopeIcon, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'none',
                                    children: _.Z.Messages.SIGNUP_NOTICE_EYEBROW
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-sm/medium',
                            children: s.noticeHeader
                        }),
                        (0, i.jsx)(l.Button, {
                            className: h.button,
                            color: 'none',
                            onClick: E,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'none',
                                children: _.Z.Messages.SIGNUP_NOTICE_CTA
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: h.dismiss,
                            children: (0, i.jsx)(l.Clickable, {
                                onClick: m,
                                'aria-label': _.Z.Messages.CLOSE,
                                children: (0, i.jsx)(l.XSmallIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        })
                    ]
                })
            })
    });
};
