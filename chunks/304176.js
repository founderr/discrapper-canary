var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(367907),
    l = n(111028),
    u = n(91218),
    c = n(829883),
    d = n(623624),
    _ = n(973542),
    E = n(703656),
    f = n(592125),
    h = n(430824),
    p = n(944486),
    m = n(709586),
    I = n(626135),
    T = n(524444),
    g = n(981631),
    S = n(176505),
    A = n(689938),
    v = n(118151);
let N = 40,
    O = (e) => {
        let { roleIcon: t, guild: n } = e,
            { name: O } = t;
        i.useEffect(() => {
            I.default.track(g.rMx.OPEN_POPOUT, {
                type: 'Role Icon Popout',
                guild_id: n.id,
                ...(0, s.v_)(f.Z.getChannel(p.Z.getChannelId(n.id)))
            });
        }, []);
        let R = (0, a.e7)([h.Z], () => (null != t.roleId ? h.Z.getRole(n.id, t.roleId) : void 0)),
            C = (0, _.Z)(R),
            y = C ? A.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({ name: O }) : A.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({ name: O }),
            L = {
                ...t,
                src: null == t.src ? t.src : (0, c.o)(t.src, N),
                size: N
            },
            b = () => {
                (0, d.f)({
                    guildId: n.id,
                    location: { section: g.jXE.ROLE_ICON_POPOUT }
                });
            },
            D = () => {
                (0, E.uL)(g.Z5c.CHANNEL(n.id, S.oC.ROLE_SUBSCRIPTIONS));
            },
            M = C ? D : b;
        return (0, r.jsx)(o.Dialog, {
            children: (0, r.jsx)(T.W_, {
                children: (0, r.jsxs)('div', {
                    className: v.popoutContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.mainContent,
                            children: [
                                (0, r.jsx)('div', {
                                    className: v.roleIconContainer,
                                    children: (0, r.jsx)(u.Z, {
                                        ...L,
                                        enableTooltip: !1,
                                        className: v.__invalid_roleIcon,
                                        enableHeight: !1
                                    })
                                }),
                                (0, r.jsxs)('div', {
                                    className: v.truncatingText,
                                    children: [
                                        (0, r.jsx)(o.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: v.roleName,
                                            children: (0, r.jsx)(l.Z, { children: O })
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            children: y
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.PRIMARY,
                            className: v.ctaButton,
                            innerClassName: v.ctaButtonContent,
                            fullWidth: !0,
                            onClick: M,
                            autoFocus: !0,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    width: 14,
                                    height: 14,
                                    className: v.boosterBadge
                                }),
                                A.Z.Messages.ROLE_ICON_POPOUT_CTA
                            ]
                        })
                    ]
                })
            })
        });
    };
t.Z = O;
