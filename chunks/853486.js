var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(665149),
    a = n(51144),
    o = n(246364),
    c = n(666233),
    d = n(50662),
    u = n(395716),
    m = n(673885),
    h = n(981631),
    x = n(388032),
    j = n(337424);
t.Z = function (e) {
    let { guild: t, guildJoinRequest: g, guildJoinRequestUser: v, onClose: C } = e,
        f = s.useMemo(() => {
            var e;
            return null !== (e = g.formResponses) && void 0 !== e ? e : [];
        }, [g.formResponses]),
        R = t.hasFeature(h.oNc.CLAN) && g.applicationStatus === o.wB.SUBMITTED,
        E = s.useCallback(
            () =>
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e('17945').then(n.bind(n, 223926));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t,
                            guildJoinRequest: g,
                            user: v
                        });
                }),
            [t, g, v]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.ZP, {
                toolbar: (0, i.jsx)(l.ZP.Icon, {
                    icon: r.XSmallIcon,
                    onClick: C,
                    tooltip: x.intl.string(x.t.cpT0Cg)
                }),
                children: [
                    (0, i.jsx)(l.ZP.Icon, {
                        icon: r.UserIcon,
                        disabled: !0,
                        'aria-label': x.intl.string(x.t.PuCkTU)
                    }),
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        children: a.ZP.getName(v)
                    })
                ]
            }),
            (0, i.jsx)(d.Z, {
                guildJoinRequest: g,
                guildJoinRequestUser: v,
                guild: t
            }),
            (0, i.jsxs)(r.Scroller, {
                children: [
                    (0, i.jsxs)('div', {
                        className: j.container,
                        children: [
                            (0, i.jsx)(m.Z, {
                                user: v,
                                joinRequestId: g.joinRequestId
                            }),
                            R &&
                                (0, i.jsxs)('div', {
                                    className: j.actionButtons,
                                    children: [
                                        (0, i.jsx)(u.Z, { joinRequest: g }),
                                        (0, i.jsx)(r.Button, {
                                            color: r.ButtonColors.PRIMARY,
                                            onClick: E,
                                            children: x.intl.string(x.t['6DpJRU'])
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: j.disabledFormRenderer,
                        children: (0, i.jsx)(c.Z, {
                            guildId: t.id,
                            formFields: f,
                            user: v
                        })
                    })
                ]
            })
        ]
    });
};
