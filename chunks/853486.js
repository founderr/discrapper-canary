var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(665149),
    s = n(51144),
    o = n(246364),
    c = n(666233),
    d = n(50662),
    u = n(395716),
    m = n(673885),
    h = n(981631),
    x = n(388032),
    b = n(794284);
t.Z = function (e) {
    let { guild: t, guildJoinRequest: j, guildJoinRequestUser: p, onClose: g } = e,
        v = l.useMemo(() => {
            var e;
            return null !== (e = j.formResponses) && void 0 !== e ? e : [];
        }, [j.formResponses]),
        f = t.hasFeature(h.oNc.CLAN) && j.applicationStatus === o.wB.SUBMITTED,
        C = l.useCallback(
            () =>
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e('17945').then(n.bind(n, 223926));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t,
                            guildJoinRequest: j,
                            user: p
                        });
                }),
            [t, j, p]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.ZP, {
                toolbar: (0, i.jsx)(a.ZP.Icon, {
                    icon: r.XSmallIcon,
                    onClick: g,
                    tooltip: x.intl.string(x.t.cpT0Cg)
                }),
                children: [
                    (0, i.jsx)(a.ZP.Icon, {
                        icon: r.UserIcon,
                        disabled: !0,
                        'aria-label': x.intl.string(x.t.PuCkTU)
                    }),
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        children: s.ZP.getName(p)
                    })
                ]
            }),
            (0, i.jsx)(d.Z, {
                guildJoinRequest: j,
                guildJoinRequestUser: p,
                guild: t
            }),
            (0, i.jsxs)(r.Scroller, {
                children: [
                    (0, i.jsxs)('div', {
                        className: b.container,
                        children: [
                            (0, i.jsx)(m.Z, {
                                user: p,
                                joinRequestId: j.joinRequestId
                            }),
                            f &&
                                (0, i.jsxs)('div', {
                                    className: b.actionButtons,
                                    children: [
                                        (0, i.jsx)(u.Z, { joinRequest: j }),
                                        (0, i.jsx)(r.Button, {
                                            color: r.ButtonColors.PRIMARY,
                                            onClick: C,
                                            children: x.intl.string(x.t['6DpJRU'])
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: b.disabledFormRenderer,
                        children: (0, i.jsx)(c.Z, {
                            guildId: t.id,
                            formFields: v,
                            user: p
                        })
                    })
                ]
            })
        ]
    });
};
