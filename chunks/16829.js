"use strict";
E.r(t);
var _ = E("735250"),
  s = E("470079"),
  T = E("120356"),
  a = E.n(T),
  A = E("442837"),
  n = E("481060"),
  I = E("749210"),
  u = E("700582"),
  i = E("484459"),
  L = E("271383"),
  l = E("246946"),
  o = E("594174"),
  r = E("669405"),
  d = E("104259"),
  N = E("206017"),
  S = E("757698"),
  g = E("912527"),
  D = E("202597"),
  G = E("5192"),
  O = E("893966"),
  c = E("527379"),
  U = E("327999"),
  C = E("689938"),
  M = E("673330");
let R = s.memo(function() {
    return (0, _.jsx)(n.Tooltip, {
      text: C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, _.jsx)(n.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: M.unknownInvite,
        children: C.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  f = s.memo(function() {
    return (0, _.jsx)(n.Tooltip, {
      text: C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
      children: e => (0, _.jsx)(n.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: M.unknownInvite,
        children: C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
      })
    })
  }),
  h = {
    [U.JoinSourceType.UNSPECIFIED]: {
      type: U.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [U.JoinSourceType.BOT]: {
      type: U.JoinSourceType.BOT,
      getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, _.jsx)(g.default, {
        className: M.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [U.JoinSourceType.INTEGRATION]: {
      type: U.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, _.jsx)(D.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [U.JoinSourceType.DISCOVERY]: {
      type: U.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, _.jsx)(d.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [U.JoinSourceType.HUB]: {
      type: U.JoinSourceType.HUB,
      getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, _.jsx)(N.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [U.JoinSourceType.INVITE]: {
      type: U.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, _.jsx)(S.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [U.JoinSourceType.VANITY_URL]: {
      type: U.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, _.jsx)(S.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [U.JoinSourceType.MANUAL_MEMBER_VERIFICATION]: {
      type: U.JoinSourceType.MANUAL_MEMBER_VERIFICATION,
      getJoinTypeLabel: e => null != e ? C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION_CODE.format({
        code: e
      }) : C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION,
      icon: (0, _.jsx)(r.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function p(e) {
  var t;
  let {
    guildId: E,
    inviterUser: T,
    joinSourceType: I,
    className: i,
    onClickInviter: l
  } = e, o = (0, A.useStateFromStores)([L.default], () => null == T ? null : L.default.getMember(E, T.id), [T, E]), r = s.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != T && (null == l || l(T))
  }, [T, l]);
  return null == T ? null : (0, _.jsxs)("div", {
    className: a()(M.inviterTooltipContainer, i),
    children: [(0, _.jsx)(n.Text, {
      variant: "text-xs/medium",
      children: I !== U.JoinSourceType.BOT ? C.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : C.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, _.jsxs)(n.Clickable, {
      className: a()(M.inviterUserContainer, null != l && M.clickable),
      onClick: r,
      children: [(0, _.jsx)(u.default, {
        user: T,
        size: n.AvatarSizes.SIZE_16
      }), (0, _.jsx)(n.Text, {
        variant: "text-xs/medium",
        children: (0, _.jsx)(n.NameWithRole, {
          name: G.default.getName(E, null, T),
          color: null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function y(e) {
  let {
    children: t,
    hasTooltip: E,
    guildId: s,
    inviterUser: T,
    joinSourceType: a
  } = e;
  return E && null != T ? (0, _.jsx)(n.Tooltip, {
    "aria-label": a !== U.JoinSourceType.BOT ? C.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : C.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, _.jsx)(p, {
      guildId: s,
      inviterUser: T,
      joinSourceType: a
    }),
    children: e => (0, _.jsx)(_.Fragment, {
      children: t(e)
    })
  }) : (0, _.jsx)(_.Fragment, {
    children: t({})
  })
}

function P(e) {
  let {
    type: t
  } = e, E = (0, U.useGetIntegrationIconString)(t);
  return null == E ? null : (0, _.jsx)("div", {
    className: M.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: E
    }
  })
}

function H(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: E,
    integrationType: T,
    showInviterAsFooter: A,
    guildId: I,
    inviterUser: u,
    onClickInviter: i,
    ...L
  } = e, l = null != E ? h[E] : null, o = E === U.JoinSourceType.INTEGRATION && null != T, r = s.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == E:
      case null == E:
        return;
      case E === U.JoinSourceType.INVITE && null != t:
        var _;
        (0, c.updateSearchState)(I, {
          selectedSourceInviteCode: null !== (_ = null == t ? void 0 : t.trim()) && void 0 !== _ ? _ : void 0,
          selectedJoinSourceType: E
        });
        return;
      default:
        (0, c.updateSearchState)(I, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != E ? E : void 0
        });
        return
    }
  }, [I, E, t]);
  switch (!0) {
    case null == l:
    case null == E:
    case E === U.JoinSourceType.UNSPECIFIED:
      return (0, _.jsx)(R, {
        ...L
      });
    case null != T && o:
      return (0, _.jsxs)(n.Clickable, {
        className: M.inviteContainer,
        ...L,
        "aria-label": (0, U.getIntegrationLabel)(T),
        role: "button",
        tabIndex: 0,
        onClick: r,
        children: [(0, _.jsx)(P, {
          type: T
        }), (0, _.jsx)(n.Text, {
          variant: "text-sm/medium",
          children: (0, U.getIntegrationLabel)(T)
        })]
      });
    case null != l:
      return (0, _.jsxs)("div", {
        className: a()(A && M.footerAlignment),
        children: [(0, _.jsxs)(n.Clickable, {
          className: M.inviteContainer,
          ...L,
          "aria-label": null == l ? void 0 : l.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: r,
          children: [null == l ? void 0 : l.icon, (0, _.jsx)(n.Text, {
            variant: "text-sm/medium",
            children: null == l ? void 0 : l.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), A && (0, _.jsx)(p, {
          guildId: I,
          inviterUser: u,
          joinSourceType: E,
          className: M.inviterFooter,
          onClickInviter: i
        })]
      });
    default:
      return (0, _.jsx)(R, {
        ...L
      })
  }
}
t.default = s.memo(function(e) {
  var t, E;
  let {
    userId: T,
    guildId: a,
    showInviterAsFooter: n,
    onClickInviter: u
  } = e, L = (0, A.useStateFromStores)([O.default], () => O.default.getEnhancedMember(a, T), [a, T]), r = null !== (t = null == L ? void 0 : L.inviterId) && void 0 !== t ? t : null, d = (0, A.useStateFromStores)([o.default], () => o.default.getUser(r), [r]);
  s.useEffect(() => {
    null != r && (I.default.requestMembersById(a, [r]), (0, i.default)(r, void 0, {
      guildId: a
    }))
  }, [a, r]);
  let N = (0, A.useStateFromStores)([l.default], () => l.default.hideInstantInvites, []);
  if (null == L) return (0, _.jsx)(R, {});
  let {
    sourceInviteCode: S,
    joinSourceType: g,
    integrationType: D
  } = L, G = null != g ? h[g] : null, c = null !== (E = null == G ? void 0 : G.hasTooltip) && void 0 !== E && E;
  return (g === U.JoinSourceType.INVITE || g === U.JoinSourceType.VANITY_URL || g === U.JoinSourceType.MANUAL_MEMBER_VERIFICATION && null != S) && N ? (0, _.jsx)(f, {}) : (0, _.jsx)(y, {
    hasTooltip: c && !n,
    inviterUser: null != d ? d : null,
    guildId: a,
    joinSourceType: g,
    children: e => (0, _.jsx)(H, {
      sourceInviteCode: S,
      joinSourceType: g,
      integrationType: D,
      showInviterAsFooter: n,
      inviterUser: null != d ? d : null,
      guildId: a,
      onClickInviter: u,
      ...e
    })
  })
})