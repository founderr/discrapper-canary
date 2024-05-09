"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("442837"),
  _ = s("481060"),
  r = s("749210"),
  u = s("700582"),
  o = s("484459"),
  T = s("271383"),
  d = s("246946"),
  A = s("594174"),
  I = s("104259"),
  L = s("206017"),
  c = s("757698"),
  N = s("912527"),
  S = s("202597"),
  g = s("5192"),
  D = s("893966"),
  C = s("527379"),
  f = s("327999"),
  O = s("689938"),
  G = s("230559");
let M = n.memo(function() {
    return (0, a.jsx)(_.Tooltip, {
      text: O.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, a.jsx)(_.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: G.unknownInvite,
        children: O.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  U = n.memo(function() {
    return (0, a.jsx)(_.Tooltip, {
      text: O.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
      children: e => (0, a.jsx)(_.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: G.unknownInvite,
        children: O.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
      })
    })
  }),
  R = {
    [f.JoinSourceType.UNSPECIFIED]: {
      type: f.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => O.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [f.JoinSourceType.BOT]: {
      type: f.JoinSourceType.BOT,
      getJoinTypeLabel: () => O.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, a.jsx)(N.default, {
        className: G.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [f.JoinSourceType.INTEGRATION]: {
      type: f.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => O.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, a.jsx)(S.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [f.JoinSourceType.DISCOVERY]: {
      type: f.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => O.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, a.jsx)(I.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [f.JoinSourceType.HUB]: {
      type: f.JoinSourceType.HUB,
      getJoinTypeLabel: () => O.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, a.jsx)(L.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [f.JoinSourceType.INVITE]: {
      type: f.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, a.jsx)(c.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [f.JoinSourceType.VANITY_URL]: {
      type: f.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, a.jsx)(c.default, {
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
    inviterUser: i,
    joinSourceType: r,
    className: o,
    onClickInviter: d
  } = e, A = (0, l.useStateFromStores)([T.default], () => null == i ? null : T.default.getMember(s, i.id), [i, s]), I = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != i && (null == d || d(i))
  }, [i, d]);
  return null == i ? null : (0, a.jsxs)("div", {
    className: E()(G.inviterTooltipContainer, o),
    children: [(0, a.jsx)(_.Text, {
      variant: "text-xs/medium",
      children: r !== f.JoinSourceType.BOT ? O.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : O.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, a.jsxs)(_.Clickable, {
      className: E()(G.inviterUserContainer, null != d && G.clickable),
      onClick: I,
      children: [(0, a.jsx)(u.default, {
        user: i,
        size: _.AvatarSizes.SIZE_16
      }), (0, a.jsx)(_.Text, {
        variant: "text-xs/medium",
        children: (0, a.jsx)(_.NameWithRole, {
          name: g.default.getName(s, null, i),
          color: null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function m(e) {
  let {
    children: t,
    hasTooltip: s,
    guildId: n,
    inviterUser: i,
    joinSourceType: E
  } = e;
  return s && null != i ? (0, a.jsx)(_.Tooltip, {
    "aria-label": E !== f.JoinSourceType.BOT ? O.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : O.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, a.jsx)(h, {
      guildId: n,
      inviterUser: i,
      joinSourceType: E
    }),
    children: e => (0, a.jsx)(a.Fragment, {
      children: t(e)
    })
  }) : (0, a.jsx)(a.Fragment, {
    children: t({})
  })
}

function p(e) {
  let {
    type: t
  } = e, s = (0, f.useGetIntegrationIconString)(t);
  return null == s ? null : (0, a.jsx)("div", {
    className: G.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: s
    }
  })
}

function y(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: s,
    integrationType: i,
    showInviterAsFooter: l,
    guildId: r,
    inviterUser: u,
    onClickInviter: o,
    ...T
  } = e, d = null != s ? R[s] : null, A = s === f.JoinSourceType.INTEGRATION && null != i, I = n.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == s:
      case null == s:
        return;
      case s === f.JoinSourceType.INVITE && null != t:
        var a;
        (0, C.updateSearchState)(r, {
          selectedSourceInviteCode: null !== (a = null == t ? void 0 : t.trim()) && void 0 !== a ? a : void 0,
          selectedJoinSourceType: s
        });
        return;
      default:
        (0, C.updateSearchState)(r, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != s ? s : void 0
        });
        return
    }
  }, [r, s, t]);
  switch (!0) {
    case null == d:
    case null == s:
    case s === f.JoinSourceType.UNSPECIFIED:
      return (0, a.jsx)(M, {
        ...T
      });
    case null != i && A:
      return (0, a.jsxs)(_.Clickable, {
        className: G.inviteContainer,
        ...T,
        "aria-label": (0, f.getIntegrationLabel)(i),
        role: "button",
        tabIndex: 0,
        onClick: I,
        children: [(0, a.jsx)(p, {
          type: i
        }), (0, a.jsx)(_.Text, {
          variant: "text-sm/medium",
          children: (0, f.getIntegrationLabel)(i)
        })]
      });
    case null != d:
      return (0, a.jsxs)("div", {
        className: E()(l && G.footerAlignment),
        children: [(0, a.jsxs)(_.Clickable, {
          className: G.inviteContainer,
          ...T,
          "aria-label": null == d ? void 0 : d.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: I,
          children: [null == d ? void 0 : d.icon, (0, a.jsx)(_.Text, {
            variant: "text-sm/medium",
            children: null == d ? void 0 : d.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), l && (0, a.jsx)(h, {
          guildId: r,
          inviterUser: u,
          joinSourceType: s,
          className: G.inviterFooter,
          onClickInviter: o
        })]
      });
    default:
      return (0, a.jsx)(M, {
        ...T
      })
  }
}
t.default = n.memo(function(e) {
  var t, s;
  let {
    userId: i,
    guildId: E,
    showInviterAsFooter: _,
    onClickInviter: u
  } = e, T = (0, l.useStateFromStores)([D.default], () => D.default.getEnhancedMember(E, i), [E, i]), I = null !== (t = null == T ? void 0 : T.inviterId) && void 0 !== t ? t : null, L = (0, l.useStateFromStores)([A.default], () => A.default.getUser(I), [I]);
  n.useEffect(() => {
    null != I && (r.default.requestMembersById(E, [I]), (0, o.default)(I, void 0, {
      guildId: E
    }))
  }, [E, I]);
  let c = (0, l.useStateFromStores)([d.default], () => d.default.hideInstantInvites, []);
  if (null == T) return (0, a.jsx)(M, {});
  let {
    sourceInviteCode: N,
    joinSourceType: S,
    integrationType: g
  } = T, C = null != S ? R[S] : null, O = null !== (s = null == C ? void 0 : C.hasTooltip) && void 0 !== s && s;
  return (S === f.JoinSourceType.INVITE || S === f.JoinSourceType.VANITY_URL) && c ? (0, a.jsx)(U, {}) : (0, a.jsx)(m, {
    hasTooltip: O && !_,
    inviterUser: null != L ? L : null,
    guildId: E,
    joinSourceType: S,
    children: e => (0, a.jsx)(y, {
      sourceInviteCode: N,
      joinSourceType: S,
      integrationType: g,
      showInviterAsFooter: _,
      inviterUser: null != L ? L : null,
      guildId: E,
      onClickInviter: u,
      ...e
    })
  })
})