var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(367907),
    l = n(111028),
    u = n(91218),
    c = n(829883),
    d = n(623624),
    f = n(973542),
    _ = n(703656),
    p = n(592125),
    h = n(430824),
    m = n(944486),
    g = n(709586),
    E = n(626135),
    v = n(524444),
    b = n(981631),
    I = n(176505),
    T = n(388032),
    S = n(118151);
t.Z = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: y } = t;
    i.useEffect(() => {
        E.default.track(b.rMx.OPEN_POPOUT, {
            type: 'Role Icon Popout',
            guild_id: n.id,
            ...(0, o.v_)(p.Z.getChannel(m.Z.getChannelId(n.id)))
        });
    }, []);
    let A = (0, a.e7)([h.Z], () => (null != t.roleId ? h.Z.getRole(n.id, t.roleId) : void 0)),
        N = (0, f.Z)(A),
        C = N ? T.intl.formatToPlainString(T.t.t0928f, { name: y }) : T.intl.formatToPlainString(T.t.UDDkGx, { name: y }),
        R = {
            ...t,
            src: null == t.src ? t.src : (0, c.o)(t.src, 40),
            size: 40
        },
        O = N
            ? () => {
                  (0, _.uL)(b.Z5c.CHANNEL(n.id, I.oC.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, d.f)({
                      guildId: n.id,
                      location: { section: b.jXE.ROLE_ICON_POPOUT }
                  });
              };
    return (0, r.jsx)(s.Dialog, {
        children: (0, r.jsx)(v.W_, {
            children: (0, r.jsxs)('div', {
                className: S.popoutContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.mainContent,
                        children: [
                            (0, r.jsx)('div', {
                                className: S.roleIconContainer,
                                children: (0, r.jsx)(u.Z, {
                                    ...R,
                                    enableTooltip: !1,
                                    className: S.__invalid_roleIcon,
                                    enableHeight: !1
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: S.truncatingText,
                                children: [
                                    (0, r.jsx)(s.Heading, {
                                        variant: 'heading-md/semibold',
                                        className: S.roleName,
                                        children: (0, r.jsx)(l.Z, { children: y })
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        children: C
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(s.Button, {
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.PRIMARY,
                        className: S.ctaButton,
                        innerClassName: S.ctaButtonContent,
                        fullWidth: !0,
                        onClick: O,
                        autoFocus: !0,
                        children: [
                            (0, r.jsx)(g.Z, {
                                width: 14,
                                height: 14,
                                className: S.boosterBadge
                            }),
                            T.intl.string(T.t['H930+P'])
                        ]
                    })
                ]
            })
        })
    });
};
