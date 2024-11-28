var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    E = n(749210),
    u = n(700582),
    c = n(484459),
    d = n(271383),
    _ = n(246946),
    A = n(594174),
    T = n(785195),
    I = n(5192),
    N = n(893966),
    g = n(527379),
    R = n(327999),
    O = n(388032),
    f = n(106053);
let S = l.memo(function () {
        return (0, r.jsx)(o.Tooltip, {
            text: O.intl.string(O.t['vu/MiY']),
            children: (e) =>
                (0, r.jsx)(o.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: f.unknownInvite,
                    children: O.intl.string(O.t.yobFdn)
                })
        });
    }),
    D = l.memo(function () {
        return (0, r.jsx)(o.Tooltip, {
            text: O.intl.string(O.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(o.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: f.unknownInvite,
                    children: O.intl.string(O.t['4upToa'])
                })
        });
    }),
    U = {
        [R.gq.UNSPECIFIED]: {
            type: R.gq.UNSPECIFIED,
            getJoinTypeLabel: () => O.intl.string(O.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [R.gq.BOT]: {
            type: R.gq.BOT,
            getJoinTypeLabel: () => O.intl.string(O.t.HumZAg),
            icon: (0, r.jsx)(o.RobotIcon, {
                size: 'custom',
                color: 'currentColor',
                className: f.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [R.gq.INTEGRATION]: {
            type: R.gq.INTEGRATION,
            getJoinTypeLabel: () => O.intl.string(O.t.gmCUFx),
            icon: (0, r.jsx)(o.WebhookIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [R.gq.DISCOVERY]: {
            type: R.gq.DISCOVERY,
            getJoinTypeLabel: () => O.intl.string(O.t['Ql/e9f']),
            icon: (0, r.jsx)(o.CompassIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [R.gq.HUB]: {
            type: R.gq.HUB,
            getJoinTypeLabel: () => O.intl.string(O.t.Op8B3N),
            icon: (0, r.jsx)(o.HubIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [R.gq.INVITE]: {
            type: R.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [R.gq.VANITY_URL]: {
            type: R.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [R.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: R.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? O.intl.formatToPlainString(O.t['VHLp+v'], { code: e }) : O.intl.string(O.t.vdu7oa)),
            icon: (0, r.jsx)(T.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function L(e) {
    var t;
    let { guildId: n, inviterUser: i, joinSourceType: E, className: c, onClickInviter: _ } = e,
        A = (0, a.e7)([d.ZP], () => (null == i ? null : d.ZP.getMember(n, i.id)), [i, n]),
        T = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != i && (null == _ || _(i));
            },
            [i, _]
        );
    return null == i
        ? null
        : (0, r.jsxs)('div', {
              className: s()(f.inviterTooltipContainer, c),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      children: E !== R.gq.BOT ? O.intl.string(O.t.azhY2t) : O.intl.string(O.t['2ByN2t'])
                  }),
                  (0, r.jsxs)(o.Clickable, {
                      className: s()(f.inviterUserContainer, null != _ && f.clickable),
                      onClick: T,
                      children: [
                          (0, r.jsx)(u.Z, {
                              user: i,
                              size: o.AvatarSizes.SIZE_16
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              children: (0, r.jsx)(o.NameWithRole, {
                                  name: I.ZP.getName(n, null, i),
                                  color: null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : void 0
                              })
                          })
                      ]
                  })
              ]
          });
}
function p(e) {
    let { children: t, hasTooltip: n, guildId: l, inviterUser: i, joinSourceType: s } = e;
    return n && null != i
        ? (0, r.jsx)(o.Tooltip, {
              'aria-label': s !== R.gq.BOT ? O.intl.string(O.t.azhY2t) : O.intl.string(O.t['2ByN2t']),
              allowOverflow: !0,
              text: (0, r.jsx)(L, {
                  guildId: l,
                  inviterUser: i,
                  joinSourceType: s
              }),
              children: (e) => (0, r.jsx)(r.Fragment, { children: t(e) })
          })
        : (0, r.jsx)(r.Fragment, { children: t({}) });
}
function h(e) {
    let { type: t } = e,
        n = (0, R.Ph)(t);
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: f.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n
              }
          });
}
function C(e) {
    let { sourceInviteCode: t, joinSourceType: n, integrationType: i, showInviterAsFooter: a, guildId: E, inviterUser: u, onClickInviter: c, ...d } = e,
        _ = null != n ? U[n] : null,
        A = n === R.gq.INTEGRATION && null != i,
        T = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === R.gq.INVITE && null != t:
                        var r;
                        (0, g.Dr)(E, {
                            selectedSourceInviteCode: null !== (r = null == t ? void 0 : t.trim()) && void 0 !== r ? r : void 0,
                            selectedJoinSourceType: n
                        });
                        return;
                    default:
                        (0, g.Dr)(E, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != n ? n : void 0
                        });
                        return;
                }
            },
            [E, n, t]
        );
    switch (!0) {
        case null == _:
        case null == n:
        case n === R.gq.UNSPECIFIED:
            return (0, r.jsx)(S, { ...d });
        case null != i && A:
            return (0, r.jsxs)(o.Clickable, {
                className: f.inviteContainer,
                ...d,
                'aria-label': (0, R.MS)(i),
                role: 'button',
                tabIndex: 0,
                onClick: T,
                children: [
                    (0, r.jsx)(h, { type: i }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        children: (0, R.MS)(i)
                    })
                ]
            });
        case null != _:
            return (0, r.jsxs)('div', {
                className: s()(a && f.footerAlignment),
                children: [
                    (0, r.jsxs)(o.Clickable, {
                        className: f.inviteContainer,
                        ...d,
                        'aria-label': null == _ ? void 0 : _.getJoinTypeLabel(null != t ? t : void 0),
                        role: 'button',
                        tabIndex: 0,
                        onClick: T,
                        children: [
                            null == _ ? void 0 : _.icon,
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                children: null == _ ? void 0 : _.getJoinTypeLabel(null != t ? t : void 0)
                            })
                        ]
                    }),
                    a &&
                        (0, r.jsx)(L, {
                            guildId: E,
                            inviterUser: u,
                            joinSourceType: n,
                            className: f.inviterFooter,
                            onClickInviter: c
                        })
                ]
            });
        default:
            return (0, r.jsx)(S, { ...d });
    }
}
t.ZP = l.memo(function (e) {
    var t, n;
    let { userId: i, guildId: s, showInviterAsFooter: o, onClickInviter: u } = e,
        d = (0, a.e7)([N.Z], () => N.Z.getEnhancedMember(s, i), [s, i]),
        T = null !== (t = null == d ? void 0 : d.inviterId) && void 0 !== t ? t : null,
        I = (0, a.e7)([A.default], () => A.default.getUser(T), [T]);
    l.useEffect(() => {
        null != T && (E.Z.requestMembersById(s, [T]), (0, c.Z)(T, void 0, { guildId: s }));
    }, [s, T]);
    let g = (0, a.e7)([_.Z], () => _.Z.hideInstantInvites, []);
    if (null == d) return (0, r.jsx)(S, {});
    let { sourceInviteCode: O, joinSourceType: f, integrationType: L } = d,
        h = null != f ? U[f] : null,
        M = null !== (n = null == h ? void 0 : h.hasTooltip) && void 0 !== n && n;
    return (f === R.gq.INVITE || f === R.gq.VANITY_URL || (f === R.gq.MANUAL_MEMBER_VERIFICATION && null != O)) && g
        ? (0, r.jsx)(D, {})
        : (0, r.jsx)(p, {
              hasTooltip: M && !o,
              inviterUser: null != I ? I : null,
              guildId: s,
              joinSourceType: f,
              children: (e) =>
                  (0, r.jsx)(C, {
                      sourceInviteCode: O,
                      joinSourceType: f,
                      integrationType: L,
                      showInviterAsFooter: o,
                      inviterUser: null != I ? I : null,
                      guildId: s,
                      onClickInviter: u,
                      ...e
                  })
          });
});
