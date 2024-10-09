var s = E(735250),
    n = E(470079),
    t = E(120356),
    r = E.n(t),
    T = E(442837),
    a = E(481060),
    I = E(749210),
    l = E(700582),
    o = E(484459),
    A = E(271383),
    i = E(246946),
    N = E(594174),
    D = E(669405),
    L = E(5192),
    S = E(893966),
    u = E(527379),
    c = E(327999),
    O = E(689938),
    U = E(406385);
let d = n.memo(function () {
        return (0, s.jsx)(a.Tooltip, {
            text: O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
            children: (e) =>
                (0, s.jsx)(a.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: U.unknownInvite,
                    children: O.Z.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
                })
        });
    }),
    G = n.memo(function () {
        return (0, s.jsx)(a.Tooltip, {
            text: O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
            children: (e) =>
                (0, s.jsx)(a.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: U.unknownInvite,
                    children: O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
                })
        });
    }),
    M = {
        [c.gq.UNSPECIFIED]: {
            type: c.gq.UNSPECIFIED,
            getJoinTypeLabel: () => O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
            icon: null,
            hasTooltip: !1
        },
        [c.gq.BOT]: {
            type: c.gq.BOT,
            getJoinTypeLabel: () => O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
            icon: (0, s.jsx)(a.RobotIcon, {
                size: 'custom',
                color: 'currentColor',
                className: U.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [c.gq.INTEGRATION]: {
            type: c.gq.INTEGRATION,
            getJoinTypeLabel: () => O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
            icon: (0, s.jsx)(a.WebhookIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [c.gq.DISCOVERY]: {
            type: c.gq.DISCOVERY,
            getJoinTypeLabel: () => O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
            icon: (0, s.jsx)(a.CompassIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [c.gq.HUB]: {
            type: c.gq.HUB,
            getJoinTypeLabel: () => O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
            icon: (0, s.jsx)(a.HubIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [c.gq.INVITE]: {
            type: c.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, s.jsx)(a.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [c.gq.VANITY_URL]: {
            type: c.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, s.jsx)(a.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [c.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: c.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION_CODE.format({ code: e }) : O.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION),
            icon: (0, s.jsx)(D.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function R(e) {
    var _;
    let { guildId: E, inviterUser: t, joinSourceType: I, className: o, onClickInviter: i } = e,
        N = (0, T.e7)([A.ZP], () => (null == t ? null : A.ZP.getMember(E, t.id)), [t, E]),
        D = n.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != t && (null == i || i(t));
            },
            [t, i]
        );
    return null == t
        ? null
        : (0, s.jsxs)('div', {
              className: r()(U.inviterTooltipContainer, o),
              children: [
                  (0, s.jsx)(a.Text, {
                      variant: 'text-xs/medium',
                      children: I !== c.gq.BOT ? O.Z.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : O.Z.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
                  }),
                  (0, s.jsxs)(a.Clickable, {
                      className: r()(U.inviterUserContainer, null != i && U.clickable),
                      onClick: D,
                      children: [
                          (0, s.jsx)(l.Z, {
                              user: t,
                              size: a.AvatarSizes.SIZE_16
                          }),
                          (0, s.jsx)(a.Text, {
                              variant: 'text-xs/medium',
                              children: (0, s.jsx)(a.NameWithRole, {
                                  name: L.ZP.getName(E, null, t),
                                  color: null !== (_ = null == N ? void 0 : N.colorString) && void 0 !== _ ? _ : void 0
                              })
                          })
                      ]
                  })
              ]
          });
}
function g(e) {
    let { children: _, hasTooltip: E, guildId: n, inviterUser: t, joinSourceType: r } = e;
    return E && null != t
        ? (0, s.jsx)(a.Tooltip, {
              'aria-label': r !== c.gq.BOT ? O.Z.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : O.Z.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
              allowOverflow: !0,
              text: (0, s.jsx)(R, {
                  guildId: n,
                  inviterUser: t,
                  joinSourceType: r
              }),
              children: (e) => (0, s.jsx)(s.Fragment, { children: _(e) })
          })
        : (0, s.jsx)(s.Fragment, { children: _({}) });
}
function C(e) {
    let { type: _ } = e,
        E = (0, c.Ph)(_);
    return null == E
        ? null
        : (0, s.jsx)('div', {
              className: U.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: E
              }
          });
}
function f(e) {
    let { sourceInviteCode: _, joinSourceType: E, integrationType: t, showInviterAsFooter: T, guildId: I, inviterUser: l, onClickInviter: o, ...A } = e,
        i = null != E ? M[E] : null,
        N = E === c.gq.INTEGRATION && null != t,
        D = n.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == _ && null == E:
                    case null == E:
                        return;
                    case E === c.gq.INVITE && null != _:
                        var s;
                        (0, u.Dr)(I, {
                            selectedSourceInviteCode: null !== (s = null == _ ? void 0 : _.trim()) && void 0 !== s ? s : void 0,
                            selectedJoinSourceType: E
                        });
                        return;
                    default:
                        (0, u.Dr)(I, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != E ? E : void 0
                        });
                        return;
                }
            },
            [I, E, _]
        );
    switch (!0) {
        case null == i:
        case null == E:
        case E === c.gq.UNSPECIFIED:
            return (0, s.jsx)(d, { ...A });
        case null != t && N:
            return (0, s.jsxs)(a.Clickable, {
                className: U.inviteContainer,
                ...A,
                'aria-label': (0, c.MS)(t),
                role: 'button',
                tabIndex: 0,
                onClick: D,
                children: [
                    (0, s.jsx)(C, { type: t }),
                    (0, s.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        children: (0, c.MS)(t)
                    })
                ]
            });
        case null != i:
            return (0, s.jsxs)('div', {
                className: r()(T && U.footerAlignment),
                children: [
                    (0, s.jsxs)(a.Clickable, {
                        className: U.inviteContainer,
                        ...A,
                        'aria-label': null == i ? void 0 : i.getJoinTypeLabel(null != _ ? _ : void 0),
                        role: 'button',
                        tabIndex: 0,
                        onClick: D,
                        children: [
                            null == i ? void 0 : i.icon,
                            (0, s.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                children: null == i ? void 0 : i.getJoinTypeLabel(null != _ ? _ : void 0)
                            })
                        ]
                    }),
                    T &&
                        (0, s.jsx)(R, {
                            guildId: I,
                            inviterUser: l,
                            joinSourceType: E,
                            className: U.inviterFooter,
                            onClickInviter: o
                        })
                ]
            });
        default:
            return (0, s.jsx)(d, { ...A });
    }
}
_.ZP = n.memo(function (e) {
    var _, E;
    let { userId: t, guildId: r, showInviterAsFooter: a, onClickInviter: l } = e,
        A = (0, T.e7)([S.Z], () => S.Z.getEnhancedMember(r, t), [r, t]),
        D = null !== (_ = null == A ? void 0 : A.inviterId) && void 0 !== _ ? _ : null,
        L = (0, T.e7)([N.default], () => N.default.getUser(D), [D]);
    n.useEffect(() => {
        null != D && (I.Z.requestMembersById(r, [D]), (0, o.Z)(D, void 0, { guildId: r }));
    }, [r, D]);
    let u = (0, T.e7)([i.Z], () => i.Z.hideInstantInvites, []);
    if (null == A) return (0, s.jsx)(d, {});
    let { sourceInviteCode: O, joinSourceType: U, integrationType: R } = A,
        C = null != U ? M[U] : null,
        p = null !== (E = null == C ? void 0 : C.hasTooltip) && void 0 !== E && E;
    return (U === c.gq.INVITE || U === c.gq.VANITY_URL || (U === c.gq.MANUAL_MEMBER_VERIFICATION && null != O)) && u
        ? (0, s.jsx)(G, {})
        : (0, s.jsx)(g, {
              hasTooltip: p && !a,
              inviterUser: null != L ? L : null,
              guildId: r,
              joinSourceType: U,
              children: (e) =>
                  (0, s.jsx)(f, {
                      sourceInviteCode: O,
                      joinSourceType: U,
                      integrationType: R,
                      showInviterAsFooter: a,
                      inviterUser: null != L ? L : null,
                      guildId: r,
                      onClickInviter: l,
                      ...e
                  })
          });
});
