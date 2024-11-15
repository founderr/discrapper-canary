var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(665149),
    o = n(51144),
    c = n(246364),
    s = n(666233),
    d = n(50662),
    u = n(395716),
    m = n(673885),
    f = n(981631),
    b = n(388032),
    x = n(46355);
t.Z = function (e) {
    let { guild: t, guildJoinRequest: h, guildJoinRequestUser: p, onClose: g } = e,
        C = r.useMemo(() => {
            var e;
            return null !== (e = h.formResponses) && void 0 !== e ? e : [];
        }, [h.formResponses]),
        _ = t.hasFeature(f.oNc.CLAN) && h.applicationStatus === c.wB.SUBMITTED,
        v = r.useCallback(
            () =>
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await n.e('17945').then(n.bind(n, 223926));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t,
                            guildJoinRequest: h,
                            user: p
                        });
                }),
            [t, h, p]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.ZP, {
                toolbar: (0, i.jsx)(l.ZP.Icon, {
                    icon: a.XSmallIcon,
                    onClick: g,
                    tooltip: b.intl.string(b.t.cpT0Cg)
                }),
                children: [
                    (0, i.jsx)(l.ZP.Icon, {
                        icon: a.UserIcon,
                        disabled: !0,
                        'aria-label': b.intl.string(b.t.PuCkTU)
                    }),
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        children: o.ZP.getName(p)
                    })
                ]
            }),
            (0, i.jsx)(d.Z, {
                guildJoinRequest: h,
                guildJoinRequestUser: p,
                guild: t
            }),
            (0, i.jsxs)(a.Scroller, {
                children: [
                    (0, i.jsxs)('div', {
                        className: x.container,
                        children: [
                            (0, i.jsx)(m.Z, {
                                user: p,
                                joinRequestId: h.joinRequestId
                            }),
                            _ &&
                                (0, i.jsxs)('div', {
                                    className: x.actionButtons,
                                    children: [
                                        (0, i.jsx)(u.Z, { joinRequest: h }),
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
                            formFields: C,
                            user: p
                        })
                    })
                ]
            })
        ]
    });
};
