n.d(t, {
    Z: function () {
        return F;
    }
});
var r = n(536091);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(512722),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(692547),
    E = n(780384),
    f = n(481060),
    h = n(749210),
    p = n(99690),
    m = n(410030),
    I = n(726542),
    T = n(367907),
    g = n(906732),
    S = n(385499),
    A = n(171368),
    v = n(598077),
    N = n(271383),
    O = n(626135),
    R = n(275759),
    C = n(107484),
    y = n(977392),
    L = n(134433),
    b = n(753194),
    D = n(458034),
    M = n(856651),
    P = n(981631),
    U = n(228168),
    w = n(689938),
    x = n(857141);
function G(e) {
    let t,
        { connectionType: n, connectionMetadataField: r, operator: i, value: o, description: s } = e;
    if (null != s)
        switch (i) {
            case M.iO.LESS_THAN:
                t = w.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: s,
                    count: Math.max(0, Number(o) - 1)
                });
                break;
            case M.iO.GREATER_THAN:
                t = w.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: s,
                    count: Math.max(0, Number(o) + 1)
                });
                break;
            default:
                t = s;
        }
    else
        t = (0, R.n_)({
            connectionType: n,
            connectionMetadataField: r,
            operator: i,
            value: o
        });
    return null == t
        ? null
        : (0, a.jsxs)('div', {
              className: x.popoutCheck,
              children: [
                  (0, a.jsx)(f.CheckmarkLargeIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: x.popoutCheckIcon
                  }),
                  (0, a.jsx)(f.Text, {
                      variant: 'text-xs/medium',
                      color: 'header-primary',
                      children: t
                  })
              ]
          });
}
function k(e) {
    let { eligibilityStates: t } = e,
        n = (0, m.ZP)(),
        r = (0, f.useToken)(_.Z.unsafe_rawColors.GREEN_330).hex(),
        i = c().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, a.jsx)(a.Fragment, {
        children: Object.keys(i).map((e) => {
            var t, o;
            let s;
            let u = i[e],
                c = u.filter((e) => null != e.operator),
                d = u.find((e) => null != e.application),
                _ = I.Z.get(e),
                h = null == d ? void 0 : d.application,
                m = (null == h ? void 0 : h.bot) != null ? new v.Z(h.bot) : null;
            return (
                R.SJ.includes(null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : '')
                    ? (s = (0, a.jsx)(b.Z, {
                          className: x.botTag,
                          color: r,
                          size: 16
                      }))
                    : null != m &&
                      (s = (0, a.jsx)(S.Z, {
                          className: x.botTag,
                          verified: m.isVerifiedBot()
                      })),
                (0, a.jsxs)(
                    'div',
                    {
                        className: x.popoutChecksGroup,
                        children: [
                            (0, a.jsxs)('div', {
                                className: x.popoutCheckGroupName,
                                children: [
                                    null != _
                                        ? (0, a.jsx)('img', {
                                              src: (0, E.wj)(n) ? _.icon.darkSVG : _.icon.lightSVG,
                                              alt: '',
                                              className: x.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != m
                                        ? (0, a.jsx)(p.Z, {
                                              user: m,
                                              size: f.AvatarSizes.SIZE_20,
                                              className: x.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, a.jsx)(f.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null !== (o = null == _ ? void 0 : _.name) && void 0 !== o ? o : null == h ? void 0 : h.name
                                    }),
                                    s
                                ]
                            }),
                            c.map((e) => {
                                let { connection_type: t, connection_metadata_field: n, operator: r, value: i, description: o } = e;
                                return (
                                    l()(null != n, 'connectionMetadataField is null'),
                                    l()(null != r, 'operator is null'),
                                    l()(null != i, 'value is null'),
                                    (0, a.jsx)(
                                        G,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: r,
                                            value: i,
                                            description: o
                                        },
                                        ''.concat(t, ':').concat(n, ':').concat(r, ':').concat(i)
                                    )
                                );
                            })
                        ]
                    },
                    e
                )
            );
        })
    });
}
function B(e) {
    let t,
        { onGetRolesClicked: n, onOpenProfile: r, eligibilityStates: i, userId: s, roleId: l, channelId: u, guildId: c } = e;
    o.useEffect(() => {
        O.default.track(P.rMx.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: s,
            role_id: l,
            ...(0, T.JS)(u),
            ...(0, T.hH)(c)
        });
    }, [s, l, u, c]);
    let _ = (0, d.e7)(
        [N.ZP],
        () => {
            var e, t;
            return null !== (t = null === (e = N.ZP.getSelfMember(c)) || void 0 === e ? void 0 : e.roles.includes(l)) && void 0 !== t && t;
        },
        [c, l]
    );
    return (
        (t = 1 === i.length && 1 === i[0].length ? w.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === i.length ? w.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : w.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format()),
        (0, a.jsxs)('div', {
            className: x.popout,
            children: [
                (0, a.jsx)('div', {
                    className: x.popoutHeaderContainer,
                    children: (0, a.jsx)(f.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        className: x.popoutHeaderText,
                        children: t
                    })
                }),
                (0, a.jsx)('div', {
                    className: x.popoutChecks,
                    children: (0, a.jsx)(k, { eligibilityStates: i.flat() })
                }),
                (0, a.jsxs)('div', {
                    className: x.buttonContainer,
                    children: [
                        _
                            ? null
                            : (0, a.jsx)(f.Button, {
                                  className: x.getRolesButton,
                                  onClick: n,
                                  children: w.Z.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                              }),
                        (0, a.jsx)(f.Button, {
                            className: x.viewConnectionsButton,
                            color: f.Button.Colors.PRIMARY,
                            onClick: r,
                            children: w.Z.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                        })
                    ]
                })
            ]
        })
    );
}
function F(e) {
    let { userId: t, messageId: n, guild: r, channel: i } = e,
        { analyticsLocations: s } = (0, g.ZP)(),
        u = (0, y.Z)(r, t, i.id, !0),
        c = (0, d.e7)([C.Z], () => C.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [_, E] = o.useState(null == c);
    if (null == u) return null;
    async function p() {
        if ((l()(null != u, 'visibleConnectionsRole is null'), !!_ && null == c)) await h.Z.fetchGuildRoleConnectionsEligibility(r.id, u.id), E(!1);
    }
    function m() {
        return Promise.resolve((e) => {
            let { closePopout: o } = e;
            return null == c
                ? (0, a.jsx)(a.Fragment, {})
                : (l()(null != u, 'visibleConnectionsRole is null'),
                  (0, a.jsx)(B, {
                      eligibilityStates: c,
                      userId: t,
                      roleId: u.id,
                      channelId: i.id,
                      guildId: r.id,
                      onGetRolesClicked: () => {
                          (0, D.Am)(r.id);
                      },
                      onOpenProfile: () => {
                          (0, A.openUserProfileModal)({
                              userId: t,
                              messageId: n,
                              guildId: r.id,
                              channelId: i.id,
                              roleId: u.id,
                              subsection: U.Tb.CONNECTIONS,
                              sourceAnalyticsLocations: s,
                              analyticsLocation: { section: P.jXE.CHANNEL }
                          }),
                              o();
                      }
                  }));
        });
    }
    return (0, a.jsx)(f.LazyPopout, {
        onRequestOpen: p,
        renderPopout: m,
        align: 'top',
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, a.jsx)(f.Tooltip, {
                text: w.Z.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
                children: (t) =>
                    (0, a.jsxs)('div', {
                        className: x.badge,
                        ...t,
                        ...e,
                        children: [
                            (0, a.jsx)(L.Z, {
                                className: x.badgeVerifiedIcon,
                                size: 16,
                                color: u.colorString
                            }),
                            (0, a.jsx)(f.Text, {
                                variant: 'text-xs/bold',
                                color: 'header-primary',
                                className: x.roleName,
                                children: u.name
                            })
                        ]
                    })
            })
    });
}
