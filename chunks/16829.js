"use strict";
s.r(t);
var E = s("735250"),
  _ = s("470079"),
  a = s("803997"),
  n = s.n(a),
  T = s("442837"),
  A = s("481060"),
  u = s("749210"),
  i = s("700582"),
  l = s("484459"),
  I = s("271383"),
  L = s("246946"),
  o = s("594174"),
  r = s("104259"),
  d = s("206017"),
  N = s("757698"),
  S = s("912527"),
  g = s("202597"),
  D = s("5192"),
  G = s("893966"),
  O = s("527379"),
  c = s("327999"),
  U = s("689938"),
  C = s("889630");
let M = _.memo(function() {
    return (0, E.jsx)(A.Tooltip, {
      text: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, E.jsx)(A.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: U.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  R = _.memo(function() {
    return (0, E.jsx)(A.Tooltip, {
      text: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
      children: e => (0, E.jsx)(A.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
      })
    })
  }),
  f = {
    [c.JoinSourceType.UNSPECIFIED]: {
      type: c.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [c.JoinSourceType.BOT]: {
      type: c.JoinSourceType.BOT,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, E.jsx)(S.default, {
        className: C.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [c.JoinSourceType.INTEGRATION]: {
      type: c.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, E.jsx)(g.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [c.JoinSourceType.DISCOVERY]: {
      type: c.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, E.jsx)(r.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [c.JoinSourceType.HUB]: {
      type: c.JoinSourceType.HUB,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, E.jsx)(d.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [c.JoinSourceType.INVITE]: {
      type: c.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, E.jsx)(N.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [c.JoinSourceType.VANITY_URL]: {
      type: c.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, E.jsx)(N.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function h(e) {
  var t;
  let {
    guildId: s,
    inviterUser: a,
    joinSourceType: u,
    className: l,
    onClickInviter: L
  } = e, o = (0, T.useStateFromStores)([I.default], () => null == a ? null : I.default.getMember(s, a.id), [a, s]), r = _.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != a && (null == L || L(a))
  }, [a, L]);
  return null == a ? null : (0, E.jsxs)("div", {
    className: n()(C.inviterTooltipContainer, l),
    children: [(0, E.jsx)(A.Text, {
      variant: "text-xs/medium",
      children: u !== c.JoinSourceType.BOT ? U.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : U.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, E.jsxs)(A.Clickable, {
      className: n()(C.inviterUserContainer, null != L && C.clickable),
      onClick: r,
      children: [(0, E.jsx)(i.default, {
        user: a,
        size: A.AvatarSizes.SIZE_16
      }), (0, E.jsx)(A.Text, {
        variant: "text-xs/medium",
        children: (0, E.jsx)(A.NameWithRole, {
          name: D.default.getName(s, null, a),
          color: null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function p(e) {
  let {
    children: t,
    hasTooltip: s,
    guildId: _,
    inviterUser: a,
    joinSourceType: n
  } = e;
  return s && null != a ? (0, E.jsx)(A.Tooltip, {
    "aria-label": n !== c.JoinSourceType.BOT ? U.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : U.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, E.jsx)(h, {
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
  } = e, s = (0, c.useGetIntegrationIconString)(t);
  return null == s ? null : (0, E.jsx)("div", {
    className: C.integrationIcon,
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
    inviterUser: i,
    onClickInviter: l,
    ...I
  } = e, L = null != s ? f[s] : null, o = s === c.JoinSourceType.INTEGRATION && null != a, r = _.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == s:
      case null == s:
        return;
      case s === c.JoinSourceType.INVITE && null != t:
        var E;
        (0, O.updateSearchState)(u, {
          selectedSourceInviteCode: null !== (E = null == t ? void 0 : t.trim()) && void 0 !== E ? E : void 0,
          selectedJoinSourceType: s
        });
        return;
      default:
        (0, O.updateSearchState)(u, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != s ? s : void 0
        });
        return
    }
  }, [u, s, t]);
  switch (!0) {
    case null == L:
    case null == s:
    case s === c.JoinSourceType.UNSPECIFIED:
      return (0, E.jsx)(M, {
        ...I
      });
    case null != a && o:
      return (0, E.jsxs)(A.Clickable, {
        className: C.inviteContainer,
        ...I,
        "aria-label": (0, c.getIntegrationLabel)(a),
        role: "button",
        tabIndex: 0,
        onClick: r,
        children: [(0, E.jsx)(P, {
          type: a
        }), (0, E.jsx)(A.Text, {
          variant: "text-sm/medium",
          children: (0, c.getIntegrationLabel)(a)
        })]
      });
    case null != L:
      return (0, E.jsxs)("div", {
        className: n()(T && C.footerAlignment),
        children: [(0, E.jsxs)(A.Clickable, {
          className: C.inviteContainer,
          ...I,
          "aria-label": null == L ? void 0 : L.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: r,
          children: [null == L ? void 0 : L.icon, (0, E.jsx)(A.Text, {
            variant: "text-sm/medium",
            children: null == L ? void 0 : L.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), T && (0, E.jsx)(h, {
          guildId: u,
          inviterUser: i,
          joinSourceType: s,
          className: C.inviterFooter,
          onClickInviter: l
        })]
      });
    default:
      return (0, E.jsx)(M, {
        ...I
      })
  }
}
t.default = _.memo(function(e) {
  var t, s;
  let {
    userId: a,
    guildId: n,
    showInviterAsFooter: A,
    onClickInviter: i
  } = e, I = (0, T.useStateFromStores)([G.default], () => G.default.getEnhancedMember(n, a), [n, a]), r = null !== (t = null == I ? void 0 : I.inviterId) && void 0 !== t ? t : null, d = (0, T.useStateFromStores)([o.default], () => o.default.getUser(r), [r]);
  _.useEffect(() => {
    null != r && (u.default.requestMembersById(n, [r]), (0, l.default)(r, void 0, {
      guildId: n
    }))
  }, [n, r]);
  let N = (0, T.useStateFromStores)([L.default], () => L.default.hideInstantInvites, []);
  if (null == I) return (0, E.jsx)(M, {});
  let {
    sourceInviteCode: S,
    joinSourceType: g,
    integrationType: D
  } = I, O = null != g ? f[g] : null, U = null !== (s = null == O ? void 0 : O.hasTooltip) && void 0 !== s && s;
  return (g === c.JoinSourceType.INVITE || g === c.JoinSourceType.VANITY_URL) && N ? (0, E.jsx)(R, {}) : (0, E.jsx)(p, {
    hasTooltip: U && !A,
    inviterUser: null != d ? d : null,
    guildId: n,
    joinSourceType: g,
    children: e => (0, E.jsx)(m, {
      sourceInviteCode: S,
      joinSourceType: g,
      integrationType: D,
      showInviterAsFooter: A,
      inviterUser: null != d ? d : null,
      guildId: n,
      onClickInviter: i,
      ...e
    })
  })
})