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
    g = n(893966),
    N = n(527379),
    f = n(327999),
    R = n(388032),
    O = n(406385);
let S = l.memo(function () {
        return (0, r.jsx)(o.Tooltip, {
            text: R.intl.string(R.t['vu/MiY']),
            children: (e) =>
                (0, r.jsx)(o.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: O.unknownInvite,
                    children: R.intl.string(R.t.yobFdn)
                })
        });
    }),
    p = l.memo(function () {
        return (0, r.jsx)(o.Tooltip, {
            text: R.intl.string(R.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(o.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: O.unknownInvite,
                    children: R.intl.string(R.t['4upToa'])
                })
        });
    }),
    D = {
        [f.gq.UNSPECIFIED]: {
            type: f.gq.UNSPECIFIED,
            getJoinTypeLabel: () => R.intl.string(R.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [f.gq.BOT]: {
            type: f.gq.BOT,
            getJoinTypeLabel: () => R.intl.string(R.t.HumZAg),
            icon: (0, r.jsx)(o.RobotIcon, {
                size: 'custom',
                color: 'currentColor',
                className: O.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [f.gq.INTEGRATION]: {
            type: f.gq.INTEGRATION,
            getJoinTypeLabel: () => R.intl.string(R.t.gmCUFx),
            icon: (0, r.jsx)(o.WebhookIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [f.gq.DISCOVERY]: {
            type: f.gq.DISCOVERY,
            getJoinTypeLabel: () => R.intl.string(R.t['Ql/e9f']),
            icon: (0, r.jsx)(o.CompassIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [f.gq.HUB]: {
            type: f.gq.HUB,
            getJoinTypeLabel: () => R.intl.string(R.t.Op8B3N),
            icon: (0, r.jsx)(o.HubIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [f.gq.INVITE]: {
            type: f.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [f.gq.VANITY_URL]: {
            type: f.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [f.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: f.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? R.intl.formatToPlainString(R.t['VHLp+v'], { code: e }) : R.intl.string(R.t.vdu7oa)),
            icon: (0, r.jsx)(T.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function U(e) {
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
              className: s()(O.inviterTooltipContainer, c),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      children: E !== f.gq.BOT ? R.intl.string(R.t.azhY2t) : R.intl.string(R.t['2ByN2t'])
                  }),
                  (0, r.jsxs)(o.Clickable, {
                      className: s()(O.inviterUserContainer, null != _ && O.clickable),
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
function h(e) {
    let { children: t, hasTooltip: n, guildId: l, inviterUser: i, joinSourceType: s } = e;
    return n && null != i
        ? (0, r.jsx)(o.Tooltip, {
              'aria-label': s !== f.gq.BOT ? R.intl.string(R.t.azhY2t) : R.intl.string(R.t['2ByN2t']),
              allowOverflow: !0,
              text: (0, r.jsx)(U, {
                  guildId: l,
                  inviterUser: i,
                  joinSourceType: s
              }),
              children: (e) => (0, r.jsx)(r.Fragment, { children: t(e) })
          })
        : (0, r.jsx)(r.Fragment, { children: t({}) });
}
function C(e) {
    let { type: t } = e,
        n = (0, f.Ph)(t);
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: O.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n
              }
          });
}
function L(e) {
    let { sourceInviteCode: t, joinSourceType: n, integrationType: i, showInviterAsFooter: a, guildId: E, inviterUser: u, onClickInviter: c, ...d } = e,
        _ = null != n ? D[n] : null,
        A = n === f.gq.INTEGRATION && null != i,
        T = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === f.gq.INVITE && null != t:
                        var r;
                        (0, N.Dr)(E, {
                            selectedSourceInviteCode: null !== (r = null == t ? void 0 : t.trim()) && void 0 !== r ? r : void 0,
                            selectedJoinSourceType: n
                        });
                        return;
                    default:
                        (0, N.Dr)(E, {
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
        case n === f.gq.UNSPECIFIED:
            return (0, r.jsx)(S, { ...d });
        case null != i && A:
            return (0, r.jsxs)(o.Clickable, {
                className: O.inviteContainer,
                ...d,
                'aria-label': (0, f.MS)(i),
                role: 'button',
                tabIndex: 0,
                onClick: T,
                children: [
                    (0, r.jsx)(C, { type: i }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        children: (0, f.MS)(i)
                    })
                ]
            });
        case null != _:
            return (0, r.jsxs)('div', {
                className: s()(a && O.footerAlignment),
                children: [
                    (0, r.jsxs)(o.Clickable, {
                        className: O.inviteContainer,
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
                        (0, r.jsx)(U, {
                            guildId: E,
                            inviterUser: u,
                            joinSourceType: n,
                            className: O.inviterFooter,
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
        d = (0, a.e7)([g.Z], () => g.Z.getEnhancedMember(s, i), [s, i]),
        T = null !== (t = null == d ? void 0 : d.inviterId) && void 0 !== t ? t : null,
        I = (0, a.e7)([A.default], () => A.default.getUser(T), [T]);
    l.useEffect(() => {
        null != T && (E.Z.requestMembersById(s, [T]), (0, c.Z)(T, void 0, { guildId: s }));
    }, [s, T]);
    let N = (0, a.e7)([_.Z], () => _.Z.hideInstantInvites, []);
    if (null == d) return (0, r.jsx)(S, {});
    let { sourceInviteCode: R, joinSourceType: O, integrationType: U } = d,
        C = null != O ? D[O] : null,
        M = null !== (n = null == C ? void 0 : C.hasTooltip) && void 0 !== n && n;
    return (O === f.gq.INVITE || O === f.gq.VANITY_URL || (O === f.gq.MANUAL_MEMBER_VERIFICATION && null != R)) && N
        ? (0, r.jsx)(p, {})
        : (0, r.jsx)(h, {
              hasTooltip: M && !o,
              inviterUser: null != I ? I : null,
              guildId: s,
              joinSourceType: O,
              children: (e) =>
                  (0, r.jsx)(L, {
                      sourceInviteCode: R,
                      joinSourceType: O,
                      integrationType: U,
                      showInviterAsFooter: o,
                      inviterUser: null != I ? I : null,
                      guildId: s,
                      onClickInviter: u,
                      ...e
                  })
          });
});
