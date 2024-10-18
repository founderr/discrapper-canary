var t = n(735250),
    a = n(470079),
    l = n(481060),
    r = n(665149),
    i = n(51144),
    o = n(246364),
    c = n(666233),
    d = n(50662),
    u = n(395716),
    I = n(673885),
    E = n(981631),
    _ = n(689938),
    T = n(794284);
s.Z = function (e) {
    let { guild: s, guildJoinRequest: m, guildJoinRequestUser: R, onClose: M } = e,
        N = a.useMemo(() => {
            var e;
            return null !== (e = m.formResponses) && void 0 !== e ? e : [];
        }, [m.formResponses]),
        C = s.hasFeature(E.oNc.CLAN) && m.applicationStatus === o.wB.SUBMITTED,
        x = a.useCallback(
            () =>
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('17945').then(n.bind(n, 223926));
                    return (n) =>
                        (0, t.jsx)(e, {
                            ...n,
                            guild: s,
                            guildJoinRequest: m,
                            user: R
                        });
                }),
            [s, m, R]
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(r.ZP, {
                toolbar: (0, t.jsx)(r.ZP.Icon, {
                    icon: l.XSmallIcon,
                    onClick: M,
                    tooltip: _.Z.Messages.CLOSE
                }),
                children: [
                    (0, t.jsx)(r.ZP.Icon, {
                        icon: l.UserIcon,
                        disabled: !0,
                        'aria-label': _.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
                    }),
                    (0, t.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        children: i.ZP.getName(R)
                    })
                ]
            }),
            (0, t.jsx)(d.Z, {
                guildJoinRequest: m,
                guildJoinRequestUser: R,
                guild: s
            }),
            (0, t.jsxs)(l.Scroller, {
                children: [
                    (0, t.jsxs)('div', {
                        className: T.container,
                        children: [
                            (0, t.jsx)(I.Z, {
                                user: R,
                                joinRequestId: m.joinRequestId
                            }),
                            C &&
                                (0, t.jsxs)('div', {
                                    className: T.actionButtons,
                                    children: [
                                        (0, t.jsx)(u.Z, { joinRequest: m }),
                                        (0, t.jsx)(l.Button, {
                                            color: l.ButtonColors.PRIMARY,
                                            onClick: x,
                                            children: _.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_CTA
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: T.disabledFormRenderer,
                        children: (0, t.jsx)(c.Z, {
                            guildId: s.id,
                            formFields: N,
                            user: R
                        })
                    })
                ]
            })
        ]
    });
};
