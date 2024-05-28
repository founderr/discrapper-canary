"use strict";
E.r(t);
var s = E("735250"),
  _ = E("470079"),
  a = E("120356"),
  T = E.n(a),
  n = E("442837"),
  A = E("481060"),
  I = E("749210"),
  u = E("700582"),
  i = E("484459"),
  l = E("271383"),
  L = E("246946"),
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
let R = _.memo(function() {
    return (0, s.jsx)(A.Tooltip, {
      text: C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, s.jsx)(A.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: M.unknownInvite,
        children: C.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  f = _.memo(function() {
    return (0, s.jsx)(A.Tooltip, {
      text: C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
      children: e => (0, s.jsx)(A.Text, {
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
      icon: (0, s.jsx)(g.default, {
        className: M.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [U.JoinSourceType.INTEGRATION]: {
      type: U.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, s.jsx)(D.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [U.JoinSourceType.DISCOVERY]: {
      type: U.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, s.jsx)(d.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [U.JoinSourceType.HUB]: {
      type: U.JoinSourceType.HUB,
      getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, s.jsx)(N.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [U.JoinSourceType.INVITE]: {
      type: U.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, s.jsx)(S.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [U.JoinSourceType.VANITY_URL]: {
      type: U.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, s.jsx)(S.default, {
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
      icon: (0, s.jsx)(r.default, {
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
    inviterUser: a,
    joinSourceType: I,
    className: i,
    onClickInviter: L
  } = e, o = (0, n.useStateFromStores)([l.default], () => null == a ? null : l.default.getMember(E, a.id), [a, E]), r = _.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != a && (null == L || L(a))
  }, [a, L]);
  return null == a ? null : (0, s.jsxs)("div", {
    className: T()(M.inviterTooltipContainer, i),
    children: [(0, s.jsx)(A.Text, {
      variant: "text-xs/medium",
      children: I !== U.JoinSourceType.BOT ? C.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : C.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, s.jsxs)(A.Clickable, {
      className: T()(M.inviterUserContainer, null != L && M.clickable),
      onClick: r,
      children: [(0, s.jsx)(u.default, {
        user: a,
        size: A.AvatarSizes.SIZE_16
      }), (0, s.jsx)(A.Text, {
        variant: "text-xs/medium",
        children: (0, s.jsx)(A.NameWithRole, {
          name: G.default.getName(E, null, a),
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
    guildId: _,
    inviterUser: a,
    joinSourceType: T
  } = e;
  return E && null != a ? (0, s.jsx)(A.Tooltip, {
    "aria-label": T !== U.JoinSourceType.BOT ? C.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : C.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, s.jsx)(p, {
      guildId: _,
      inviterUser: a,
      joinSourceType: T
    }),
    children: e => (0, s.jsx)(s.Fragment, {
      children: t(e)
    })
  }) : (0, s.jsx)(s.Fragment, {
    children: t({})
  })
}

function P(e) {
  let {
    type: t
  } = e, E = (0, U.useGetIntegrationIconString)(t);
  return null == E ? null : (0, s.jsx)("div", {
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
    integrationType: a,
    showInviterAsFooter: n,
    guildId: I,
    inviterUser: u,
    onClickInviter: i,
    ...l
  } = e, L = null != E ? h[E] : null, o = E === U.JoinSourceType.INTEGRATION && null != a, r = _.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == E:
      case null == E:
        return;
      case E === U.JoinSourceType.INVITE && null != t:
        var s;
        (0, c.updateSearchState)(I, {
          selectedSourceInviteCode: null !== (s = null == t ? void 0 : t.trim()) && void 0 !== s ? s : void 0,
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
    case null == L:
    case null == E:
    case E === U.JoinSourceType.UNSPECIFIED:
      return (0, s.jsx)(R, {
        ...l
      });
    case null != a && o:
      return (0, s.jsxs)(A.Clickable, {
        className: M.inviteContainer,
        ...l,
        "aria-label": (0, U.getIntegrationLabel)(a),
        role: "button",
        tabIndex: 0,
        onClick: r,
        children: [(0, s.jsx)(P, {
          type: a
        }), (0, s.jsx)(A.Text, {
          variant: "text-sm/medium",
          children: (0, U.getIntegrationLabel)(a)
        })]
      });
    case null != L:
      return (0, s.jsxs)("div", {
        className: T()(n && M.footerAlignment),
        children: [(0, s.jsxs)(A.Clickable, {
          className: M.inviteContainer,
          ...l,
          "aria-label": null == L ? void 0 : L.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: r,
          children: [null == L ? void 0 : L.icon, (0, s.jsx)(A.Text, {
            variant: "text-sm/medium",
            children: null == L ? void 0 : L.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), n && (0, s.jsx)(p, {
          guildId: I,
          inviterUser: u,
          joinSourceType: E,
          className: M.inviterFooter,
          onClickInviter: i
        })]
      });
    default:
      return (0, s.jsx)(R, {
        ...l
      })
  }
}
t.default = _.memo(function(e) {
  var t, E;
  let {
    userId: a,
    guildId: T,
    showInviterAsFooter: A,
    onClickInviter: u
  } = e, l = (0, n.useStateFromStores)([O.default], () => O.default.getEnhancedMember(T, a), [T, a]), r = null !== (t = null == l ? void 0 : l.inviterId) && void 0 !== t ? t : null, d = (0, n.useStateFromStores)([o.default], () => o.default.getUser(r), [r]);
  _.useEffect(() => {
    null != r && (I.default.requestMembersById(T, [r]), (0, i.default)(r, void 0, {
      guildId: T
    }))
  }, [T, r]);
  let N = (0, n.useStateFromStores)([L.default], () => L.default.hideInstantInvites, []);
  if (null == l) return (0, s.jsx)(R, {});
  let {
    sourceInviteCode: S,
    joinSourceType: g,
    integrationType: D
  } = l, G = null != g ? h[g] : null, c = null !== (E = null == G ? void 0 : G.hasTooltip) && void 0 !== E && E;
  return (g === U.JoinSourceType.INVITE || g === U.JoinSourceType.VANITY_URL || g === U.JoinSourceType.MANUAL_MEMBER_VERIFICATION && null != S) && N ? (0, s.jsx)(f, {}) : (0, s.jsx)(y, {
    hasTooltip: c && !A,
    inviterUser: null != d ? d : null,
    guildId: T,
    joinSourceType: g,
    children: e => (0, s.jsx)(H, {
      sourceInviteCode: S,
      joinSourceType: g,
      integrationType: D,
      showInviterAsFooter: A,
      inviterUser: null != d ? d : null,
      guildId: T,
      onClickInviter: u,
      ...e
    })
  })
})