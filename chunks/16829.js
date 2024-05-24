"use strict";
s.r(t);
var E = s("735250"),
  _ = s("470079"),
  a = s("120356"),
  n = s.n(a),
  T = s("442837"),
  i = s("481060"),
  u = s("749210"),
  A = s("700582"),
  l = s("484459"),
  I = s("271383"),
  r = s("246946"),
  o = s("594174"),
  L = s("669405"),
  d = s("104259"),
  N = s("206017"),
  S = s("757698"),
  g = s("912527"),
  D = s("202597"),
  c = s("5192"),
  O = s("893966"),
  G = s("527379"),
  C = s("327999"),
  U = s("689938"),
  M = s("673330");
let f = _.memo(function() {
    return (0, E.jsx)(i.Tooltip, {
      text: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, E.jsx)(i.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: M.unknownInvite,
        children: U.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  R = _.memo(function() {
    return (0, E.jsx)(i.Tooltip, {
      text: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
      children: e => (0, E.jsx)(i.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: M.unknownInvite,
        children: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
      })
    })
  }),
  h = {
    [C.JoinSourceType.UNSPECIFIED]: {
      type: C.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [C.JoinSourceType.BOT]: {
      type: C.JoinSourceType.BOT,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, E.jsx)(g.default, {
        className: M.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [C.JoinSourceType.INTEGRATION]: {
      type: C.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, E.jsx)(D.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [C.JoinSourceType.DISCOVERY]: {
      type: C.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, E.jsx)(d.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [C.JoinSourceType.HUB]: {
      type: C.JoinSourceType.HUB,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, E.jsx)(N.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [C.JoinSourceType.INVITE]: {
      type: C.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, E.jsx)(S.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [C.JoinSourceType.VANITY_URL]: {
      type: C.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, E.jsx)(S.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [C.JoinSourceType.MANUAL_MEMBER_VERIFICATION]: {
      type: C.JoinSourceType.MANUAL_MEMBER_VERIFICATION,
      getJoinTypeLabel: e => null != e ? U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION_CODE.format({
        code: e
      }) : U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION,
      icon: (0, E.jsx)(L.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function p(e) {
  var t;
  let {
    guildId: s,
    inviterUser: a,
    joinSourceType: u,
    className: l,
    onClickInviter: r
  } = e, o = (0, T.useStateFromStores)([I.default], () => null == a ? null : I.default.getMember(s, a.id), [a, s]), L = _.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != a && (null == r || r(a))
  }, [a, r]);
  return null == a ? null : (0, E.jsxs)("div", {
    className: n()(M.inviterTooltipContainer, l),
    children: [(0, E.jsx)(i.Text, {
      variant: "text-xs/medium",
      children: u !== C.JoinSourceType.BOT ? U.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : U.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, E.jsxs)(i.Clickable, {
      className: n()(M.inviterUserContainer, null != r && M.clickable),
      onClick: L,
      children: [(0, E.jsx)(A.default, {
        user: a,
        size: i.AvatarSizes.SIZE_16
      }), (0, E.jsx)(i.Text, {
        variant: "text-xs/medium",
        children: (0, E.jsx)(i.NameWithRole, {
          name: c.default.getName(s, null, a),
          color: null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function y(e) {
  let {
    children: t,
    hasTooltip: s,
    guildId: _,
    inviterUser: a,
    joinSourceType: n
  } = e;
  return s && null != a ? (0, E.jsx)(i.Tooltip, {
    "aria-label": n !== C.JoinSourceType.BOT ? U.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : U.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, E.jsx)(p, {
      guildId: _,
      inviterUser: a,
      joinSourceType: n
    }),
    children: e => (0, E.jsx)(E.Fragment, {
      children: t(e)
    })
  }) : (0, E.jsx)(E.Fragment, {
    children: t({})
  })
}

function P(e) {
  let {
    type: t
  } = e, s = (0, C.useGetIntegrationIconString)(t);
  return null == s ? null : (0, E.jsx)("div", {
    className: M.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: s
    }
  })
}

function m(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: s,
    integrationType: a,
    showInviterAsFooter: T,
    guildId: u,
    inviterUser: A,
    onClickInviter: l,
    ...I
  } = e, r = null != s ? h[s] : null, o = s === C.JoinSourceType.INTEGRATION && null != a, L = _.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == s:
      case null == s:
        return;
      case s === C.JoinSourceType.INVITE && null != t:
        var E;
        (0, G.updateSearchState)(u, {
          selectedSourceInviteCode: null !== (E = null == t ? void 0 : t.trim()) && void 0 !== E ? E : void 0,
          selectedJoinSourceType: s
        });
        return;
      default:
        (0, G.updateSearchState)(u, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != s ? s : void 0
        });
        return
    }
  }, [u, s, t]);
  switch (!0) {
    case null == r:
    case null == s:
    case s === C.JoinSourceType.UNSPECIFIED:
      return (0, E.jsx)(f, {
        ...I
      });
    case null != a && o:
      return (0, E.jsxs)(i.Clickable, {
        className: M.inviteContainer,
        ...I,
        "aria-label": (0, C.getIntegrationLabel)(a),
        role: "button",
        tabIndex: 0,
        onClick: L,
        children: [(0, E.jsx)(P, {
          type: a
        }), (0, E.jsx)(i.Text, {
          variant: "text-sm/medium",
          children: (0, C.getIntegrationLabel)(a)
        })]
      });
    case null != r:
      return (0, E.jsxs)("div", {
        className: n()(T && M.footerAlignment),
        children: [(0, E.jsxs)(i.Clickable, {
          className: M.inviteContainer,
          ...I,
          "aria-label": null == r ? void 0 : r.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: L,
          children: [null == r ? void 0 : r.icon, (0, E.jsx)(i.Text, {
            variant: "text-sm/medium",
            children: null == r ? void 0 : r.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), T && (0, E.jsx)(p, {
          guildId: u,
          inviterUser: A,
          joinSourceType: s,
          className: M.inviterFooter,
          onClickInviter: l
        })]
      });
    default:
      return (0, E.jsx)(f, {
        ...I
      })
  }
}
t.default = _.memo(function(e) {
  var t, s;
  let {
    userId: a,
    guildId: n,
    showInviterAsFooter: i,
    onClickInviter: A
  } = e, I = (0, T.useStateFromStores)([O.default], () => O.default.getEnhancedMember(n, a), [n, a]), L = null !== (t = null == I ? void 0 : I.inviterId) && void 0 !== t ? t : null, d = (0, T.useStateFromStores)([o.default], () => o.default.getUser(L), [L]);
  _.useEffect(() => {
    null != L && (u.default.requestMembersById(n, [L]), (0, l.default)(L, void 0, {
      guildId: n
    }))
  }, [n, L]);
  let N = (0, T.useStateFromStores)([r.default], () => r.default.hideInstantInvites, []);
  if (null == I) return (0, E.jsx)(f, {});
  let {
    sourceInviteCode: S,
    joinSourceType: g,
    integrationType: D
  } = I, c = null != g ? h[g] : null, G = null !== (s = null == c ? void 0 : c.hasTooltip) && void 0 !== s && s;
  return (g === C.JoinSourceType.INVITE || g === C.JoinSourceType.VANITY_URL || g === C.JoinSourceType.MANUAL_MEMBER_VERIFICATION && null != S) && N ? (0, E.jsx)(R, {}) : (0, E.jsx)(y, {
    hasTooltip: G && !i,
    inviterUser: null != d ? d : null,
    guildId: n,
    joinSourceType: g,
    children: e => (0, E.jsx)(m, {
      sourceInviteCode: S,
      joinSourceType: g,
      integrationType: D,
      showInviterAsFooter: i,
      inviterUser: null != d ? d : null,
      guildId: n,
      onClickInviter: A,
      ...e
    })
  })
})