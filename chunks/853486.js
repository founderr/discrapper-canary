var i = n(200651),
    r = n(192379),
    a = n(481060),
    o = n(665149),
    l = n(51144),
    c = n(246364),
    s = n(666233),
    d = n(50662),
    u = n(395716),
    m = n(673885),
    f = n(981631),
    b = n(388032),
    x = n(337424);
t.Z = function (e) {
    let { guild: t, guildJoinRequest: p, guildJoinRequestUser: h, onClose: C } = e,
        g = r.useMemo(() => {
            var e;
            return null !== (e = p.formResponses) && void 0 !== e ? e : [];
        }, [p.formResponses]),
        _ = t.hasFeature(f.oNc.CLAN) && p.applicationStatus === c.wB.SUBMITTED,
        v = r.useCallback(
            () =>
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await n.e('17945').then(n.bind(n, 223926));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t,
                            guildJoinRequest: p,
                            user: h
                        });
                }),
            [t, p, h]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.ZP, {
                toolbar: (0, i.jsx)(o.ZP.Icon, {
                    icon: a.XSmallIcon,
                    onClick: C,
                    tooltip: b.intl.string(b.t.cpT0Cg)
                }),
                children: [
                    (0, i.jsx)(o.ZP.Icon, {
                        icon: a.UserIcon,
                        disabled: !0,
                        'aria-label': b.intl.string(b.t.PuCkTU)
                    }),
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        children: l.ZP.getName(h)
                    })
                ]
            }),
            (0, i.jsx)(d.Z, {
                guildJoinRequest: p,
                guildJoinRequestUser: h,
                guild: t
            }),
            (0, i.jsxs)(a.Scroller, {
                children: [
                    (0, i.jsxs)('div', {
                        className: x.container,
                        children: [
                            (0, i.jsx)(m.Z, {
                                user: h,
                                joinRequestId: p.joinRequestId
                            }),
                            _ &&
                                (0, i.jsxs)('div', {
                                    className: x.actionButtons,
                                    children: [
                                        (0, i.jsx)(u.Z, { joinRequest: p }),
                                        (0, i.jsx)(a.Button, {
                                            color: a.ButtonColors.PRIMARY,
                                            onClick: v,
                                            children: b.intl.string(b.t['6DpJRU'])
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: x.disabledFormRenderer,
                        children: (0, i.jsx)(s.Z, {
                            guildId: t.id,
                            formFields: g,
                            user: h
                        })
                    })
                ]
            })
        ]
    });
};
