n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(536091),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(692547),
    d = n(780384),
    f = n(481060),
    _ = n(749210),
    p = n(99690),
    h = n(410030),
    m = n(726542),
    g = n(367907),
    E = n(906732),
    v = n(385499),
    b = n(171368),
    I = n(598077),
    S = n(271383),
    T = n(626135),
    y = n(275759),
    A = n(107484),
    N = n(977392),
    C = n(134433),
    R = n(753194),
    O = n(458034),
    D = n(856651),
    L = n(981631),
    x = n(228168),
    w = n(388032),
    M = n(857141);
function P(e) {
    let t,
        { connectionType: n, connectionMetadataField: i, operator: a, value: s, description: o } = e;
    if (null != o)
        switch (a) {
            case D.iO.LESS_THAN:
                t = w.intl.format(w.t['2p7dAw'], {
                    description: o,
                    count: Math.max(0, Number(s) - 1)
                });
                break;
            case D.iO.GREATER_THAN:
                t = w.intl.format(w.t['2p7dAw'], {
                    description: o,
                    count: Math.max(0, Number(s) + 1)
                });
                break;
            default:
                t = o;
        }
    else
        t = (0, y.n_)({
            connectionType: n,
            connectionMetadataField: i,
            operator: a,
            value: s
        });
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: M.popoutCheck,
              children: [
                  (0, r.jsx)(f.CheckmarkLargeIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: M.popoutCheckIcon
                  }),
                  (0, r.jsx)(f.Text, {
                      variant: 'text-xs/medium',
                      color: 'header-primary',
                      children: t
                  })
              ]
          });
}
function k(e) {
    let { eligibilityStates: t } = e,
        n = (0, h.ZP)(),
        i = (0, f.useToken)(c.Z.unsafe_rawColors.GREEN_330).hex(),
        a = l().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(a).map((e) => {
            var t, o;
            let l;
            let u = a[e],
                c = u.filter((e) => null != e.operator),
                _ = u.find((e) => null != e.application),
                h = m.Z.get(e),
                g = null == _ ? void 0 : _.application,
                E = (null == g ? void 0 : g.bot) != null ? new I.Z(g.bot) : null;
            return (
                y.SJ.includes(null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : '')
                    ? (l = (0, r.jsx)(R.Z, {
                          className: M.botTag,
                          color: i,
                          size: 16
                      }))
                    : null != E &&
                      (l = (0, r.jsx)(v.Z, {
                          className: M.botTag,
                          verified: E.isVerifiedBot()
                      })),
                (0, r.jsxs)(
                    'div',
                    {
                        className: M.popoutChecksGroup,
                        children: [
                            (0, r.jsxs)('div', {
                                className: M.popoutCheckGroupName,
                                children: [
                                    null != h
                                        ? (0, r.jsx)('img', {
                                              src: (0, d.wj)(n) ? h.icon.darkSVG : h.icon.lightSVG,
                                              alt: '',
                                              className: M.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != E
                                        ? (0, r.jsx)(p.Z, {
                                              user: E,
                                              size: f.AvatarSizes.SIZE_20,
                                              className: M.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, r.jsx)(f.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null !== (o = null == h ? void 0 : h.name) && void 0 !== o ? o : null == g ? void 0 : g.name
                                    }),
                                    l
                                ]
                            }),
                            c.map((e) => {
                                let { connection_type: t, connection_metadata_field: n, operator: i, value: a, description: o } = e;
                                return (
                                    s()(null != n, 'connectionMetadataField is null'),
                                    s()(null != i, 'operator is null'),
                                    s()(null != a, 'value is null'),
                                    (0, r.jsx)(
                                        P,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: i,
                                            value: a,
                                            description: o
                                        },
                                        ''.concat(t, ':').concat(n, ':').concat(i, ':').concat(a)
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
function U(e) {
    let t,
        { onGetRolesClicked: n, onOpenProfile: a, eligibilityStates: s, userId: o, roleId: l, channelId: c, guildId: d } = e;
    i.useEffect(() => {
        T.default.track(L.rMx.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: o,
            role_id: l,
            ...(0, g.JS)(c),
            ...(0, g.hH)(d)
        });
    }, [o, l, c, d]);
    let _ = (0, u.e7)(
        [S.ZP],
        () => {
            var e, t;
            return null !== (t = null === (e = S.ZP.getSelfMember(d)) || void 0 === e ? void 0 : e.roles.includes(l)) && void 0 !== t && t;
        },
        [d, l]
    );
    return (
        (t = 1 === s.length && 1 === s[0].length ? w.intl.string(w.t.jDym4O) : 1 === s.length ? w.intl.format(w.t['0eBj39'], {}) : w.intl.format(w.t.D7uftL, {})),
        (0, r.jsxs)('div', {
            className: M.popout,
            children: [
                (0, r.jsx)('div', {
                    className: M.popoutHeaderContainer,
                    children: (0, r.jsx)(f.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        className: M.popoutHeaderText,
                        children: t
                    })
                }),
                (0, r.jsx)('div', {
                    className: M.popoutChecks,
                    children: (0, r.jsx)(k, { eligibilityStates: s.flat() })
                }),
                (0, r.jsxs)('div', {
                    className: M.buttonContainer,
                    children: [
                        _
                            ? null
                            : (0, r.jsx)(f.Button, {
                                  className: M.getRolesButton,
                                  onClick: n,
                                  children: w.intl.string(w.t.T1t1WV)
                              }),
                        (0, r.jsx)(f.Button, {
                            className: M.viewConnectionsButton,
                            color: f.Button.Colors.PRIMARY,
                            onClick: a,
                            children: w.intl.string(w.t.hgKDnJ)
                        })
                    ]
                })
            ]
        })
    );
}
function B(e) {
    let { userId: t, messageId: n, guild: a, channel: o } = e,
        { analyticsLocations: l } = (0, E.ZP)(),
        c = (0, N.Z)(a, t, o.id, !0),
        d = (0, u.e7)([A.Z], () => A.Z.getGuildRoleConnectionEligibility(null == c ? void 0 : c.id)),
        [p, h] = i.useState(null == d);
    if (null == c) return null;
    async function m() {
        if ((s()(null != c, 'visibleConnectionsRole is null'), !!p && null == d)) await _.Z.fetchGuildRoleConnectionsEligibility(a.id, c.id), h(!1);
    }
    return (0, r.jsx)(f.LazyPopout, {
        onRequestOpen: m,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: i } = e;
                return null == d
                    ? (0, r.jsx)(r.Fragment, {})
                    : (s()(null != c, 'visibleConnectionsRole is null'),
                      (0, r.jsx)(U, {
                          eligibilityStates: d,
                          userId: t,
                          roleId: c.id,
                          channelId: o.id,
                          guildId: a.id,
                          onGetRolesClicked: () => {
                              (0, O.Am)(a.id);
                          },
                          onOpenProfile: () => {
                              (0, b.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: a.id,
                                  channelId: o.id,
                                  roleId: c.id,
                                  subsection: x.Tb.CONNECTIONS,
                                  sourceAnalyticsLocations: l,
                                  analyticsLocation: { section: L.jXE.CHANNEL }
                              }),
                                  i();
                          }
                      }));
            });
        },
        align: 'top',
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, r.jsx)(f.Tooltip, {
                text: w.intl.string(w.t.Wpsnam),
                children: (t) =>
                    (0, r.jsxs)('div', {
                        className: M.badge,
                        ...t,
                        ...e,
                        children: [
                            (0, r.jsx)(C.Z, {
                                className: M.badgeVerifiedIcon,
                                size: 16,
                                color: c.colorString
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: 'text-xs/bold',
                                color: 'header-primary',
                                className: M.roleName,
                                children: c.name
                            })
                        ]
                    })
            })
    });
}
