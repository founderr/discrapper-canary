var s = E(735250),
    T = E(470079),
    I = E(120356),
    n = E.n(I),
    t = E(442837),
    A = E(481060),
    r = E(749210),
    a = E(700582),
    N = E(484459),
    S = E(271383),
    l = E(246946),
    D = E(594174),
    L = E(669405),
    U = E(5192),
    O = E(893966),
    G = E(527379),
    o = E(327999),
    i = E(689938),
    M = E(894922);
let R = T.memo(function () {
        return (0, s.jsx)(A.Tooltip, {
            text: i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
            children: (e) =>
                (0, s.jsx)(A.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: M.unknownInvite,
                    children: i.Z.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
                })
        });
    }),
    u = T.memo(function () {
        return (0, s.jsx)(A.Tooltip, {
            text: i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
            children: (e) =>
                (0, s.jsx)(A.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: M.unknownInvite,
                    children: i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
                })
        });
    }),
    c = {
        [o.gq.UNSPECIFIED]: {
            type: o.gq.UNSPECIFIED,
            getJoinTypeLabel: () => i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
            icon: null,
            hasTooltip: !1
        },
        [o.gq.BOT]: {
            type: o.gq.BOT,
            getJoinTypeLabel: () => i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
            icon: (0, s.jsx)(A.RobotIcon, {
                size: 'custom',
                color: 'currentColor',
                className: M.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [o.gq.INTEGRATION]: {
            type: o.gq.INTEGRATION,
            getJoinTypeLabel: () => i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
            icon: (0, s.jsx)(A.WebhookIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [o.gq.DISCOVERY]: {
            type: o.gq.DISCOVERY,
            getJoinTypeLabel: () => i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
            icon: (0, s.jsx)(A.CompassIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [o.gq.HUB]: {
            type: o.gq.HUB,
            getJoinTypeLabel: () => i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
            icon: (0, s.jsx)(A.HubIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [o.gq.INVITE]: {
            type: o.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, s.jsx)(A.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [o.gq.VANITY_URL]: {
            type: o.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, s.jsx)(A.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [o.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: o.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION_CODE.format({ code: e }) : i.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION),
            icon: (0, s.jsx)(L.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function C(e) {
    var _;
    let { guildId: E, inviterUser: I, joinSourceType: r, className: N, onClickInviter: l } = e,
        D = (0, t.e7)([S.ZP], () => (null == I ? null : S.ZP.getMember(E, I.id)), [I, E]),
        L = T.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != I && (null == l || l(I));
            },
            [I, l]
        );
    return null == I
        ? null
        : (0, s.jsxs)('div', {
              className: n()(M.inviterTooltipContainer, N),
              children: [
                  (0, s.jsx)(A.Text, {
                      variant: 'text-xs/medium',
                      children: r !== o.gq.BOT ? i.Z.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : i.Z.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
                  }),
                  (0, s.jsxs)(A.Clickable, {
                      className: n()(M.inviterUserContainer, null != l && M.clickable),
                      onClick: L,
                      children: [
                          (0, s.jsx)(a.Z, {
                              user: I,
                              size: A.AvatarSizes.SIZE_16
                          }),
                          (0, s.jsx)(A.Text, {
                              variant: 'text-xs/medium',
                              children: (0, s.jsx)(A.NameWithRole, {
                                  name: U.ZP.getName(E, null, I),
                                  color: null !== (_ = null == D ? void 0 : D.colorString) && void 0 !== _ ? _ : void 0
                              })
                          })
                      ]
                  })
              ]
          });
}
function d(e) {
    let { children: _, hasTooltip: E, guildId: T, inviterUser: I, joinSourceType: n } = e;
    return E && null != I
        ? (0, s.jsx)(A.Tooltip, {
              'aria-label': n !== o.gq.BOT ? i.Z.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : i.Z.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
              allowOverflow: !0,
              text: (0, s.jsx)(C, {
                  guildId: T,
                  inviterUser: I,
                  joinSourceType: n
              }),
              children: (e) => (0, s.jsx)(s.Fragment, { children: _(e) })
          })
        : (0, s.jsx)(s.Fragment, { children: _({}) });
}
function g(e) {
    let { type: _ } = e,
        E = (0, o.Ph)(_);
    return null == E
        ? null
        : (0, s.jsx)('div', {
              className: M.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: E
              }
          });
}
function f(e) {
    let { sourceInviteCode: _, joinSourceType: E, integrationType: I, showInviterAsFooter: t, guildId: r, inviterUser: a, onClickInviter: N, ...S } = e,
        l = null != E ? c[E] : null,
        D = E === o.gq.INTEGRATION && null != I,
        L = T.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == _ && null == E:
                    case null == E:
                        return;
                    case E === o.gq.INVITE && null != _:
                        var s;
                        (0, G.Dr)(r, {
                            selectedSourceInviteCode: null !== (s = null == _ ? void 0 : _.trim()) && void 0 !== s ? s : void 0,
                            selectedJoinSourceType: E
                        });
                        return;
                    default:
                        (0, G.Dr)(r, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != E ? E : void 0
                        });
                        return;
                }
            },
            [r, E, _]
        );
    switch (!0) {
        case null == l:
        case null == E:
        case E === o.gq.UNSPECIFIED:
            return (0, s.jsx)(R, { ...S });
        case null != I && D:
            return (0, s.jsxs)(A.Clickable, {
                className: M.inviteContainer,
                ...S,
                'aria-label': (0, o.MS)(I),
                role: 'button',
                tabIndex: 0,
                onClick: L,
                children: [
                    (0, s.jsx)(g, { type: I }),
                    (0, s.jsx)(A.Text, {
                        variant: 'text-sm/medium',
                        children: (0, o.MS)(I)
                    })
                ]
            });
        case null != l:
            return (0, s.jsxs)('div', {
                className: n()(t && M.footerAlignment),
                children: [
                    (0, s.jsxs)(A.Clickable, {
                        className: M.inviteContainer,
                        ...S,
                        'aria-label': null == l ? void 0 : l.getJoinTypeLabel(null != _ ? _ : void 0),
                        role: 'button',
                        tabIndex: 0,
                        onClick: L,
                        children: [
                            null == l ? void 0 : l.icon,
                            (0, s.jsx)(A.Text, {
                                variant: 'text-sm/medium',
                                children: null == l ? void 0 : l.getJoinTypeLabel(null != _ ? _ : void 0)
                            })
                        ]
                    }),
                    t &&
                        (0, s.jsx)(C, {
                            guildId: r,
                            inviterUser: a,
                            joinSourceType: E,
                            className: M.inviterFooter,
                            onClickInviter: N
                        })
                ]
            });
        default:
            return (0, s.jsx)(R, { ...S });
    }
}
_.ZP = T.memo(function (e) {
    var _, E;
    let { userId: I, guildId: n, showInviterAsFooter: A, onClickInviter: a } = e,
        S = (0, t.e7)([O.Z], () => O.Z.getEnhancedMember(n, I), [n, I]),
        L = null !== (_ = null == S ? void 0 : S.inviterId) && void 0 !== _ ? _ : null,
        U = (0, t.e7)([D.default], () => D.default.getUser(L), [L]);
    T.useEffect(() => {
        null != L && (r.Z.requestMembersById(n, [L]), (0, N.Z)(L, void 0, { guildId: n }));
    }, [n, L]);
    let G = (0, t.e7)([l.Z], () => l.Z.hideInstantInvites, []);
    if (null == S) return (0, s.jsx)(R, {});
    let { sourceInviteCode: i, joinSourceType: M, integrationType: C } = S,
        g = null != M ? c[M] : null,
        Z = null !== (E = null == g ? void 0 : g.hasTooltip) && void 0 !== E && E;
    return (M === o.gq.INVITE || M === o.gq.VANITY_URL || (M === o.gq.MANUAL_MEMBER_VERIFICATION && null != i)) && G
        ? (0, s.jsx)(u, {})
        : (0, s.jsx)(d, {
              hasTooltip: Z && !A,
              inviterUser: null != U ? U : null,
              guildId: n,
              joinSourceType: M,
              children: (e) =>
                  (0, s.jsx)(f, {
                      sourceInviteCode: i,
                      joinSourceType: M,
                      integrationType: C,
                      showInviterAsFooter: A,
                      inviterUser: null != U ? U : null,
                      guildId: n,
                      onClickInviter: a,
                      ...e
                  })
          });
});
