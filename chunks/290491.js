"use strict";
E.r(t), E.d(t, {
  default: function() {
    return P
  }
});
var _ = E("37983"),
  s = E("884691"),
  a = E("414456"),
  T = E.n(a),
  n = E("446674"),
  A = E("77078"),
  u = E("851387"),
  I = E("87657"),
  i = E("506885"),
  l = E("26989"),
  L = E("697218"),
  o = E("627490"),
  r = E("745633"),
  d = E("83900"),
  N = E("71216"),
  S = E("741919"),
  g = E("387111"),
  D = E("178406"),
  G = E("645266"),
  O = E("835257"),
  c = E("782340"),
  U = E("724023");
let C = s.memo(function() {
    return (0, _.jsx)(A.Tooltip, {
      text: c.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, _.jsx)(A.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: U.unknownInvite,
        children: c.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  M = {
    [O.JoinSourceType.UNSPECIFIED]: {
      type: O.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => c.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [O.JoinSourceType.BOT]: {
      type: O.JoinSourceType.BOT,
      getJoinTypeLabel: () => c.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, _.jsx)(N.default, {
        className: U.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [O.JoinSourceType.INTEGRATION]: {
      type: O.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => c.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, _.jsx)(S.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.JoinSourceType.DISCOVERY]: {
      type: O.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => c.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, _.jsx)(o.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.JoinSourceType.HUB]: {
      type: O.JoinSourceType.HUB,
      getJoinTypeLabel: () => c.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, _.jsx)(r.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.JoinSourceType.INVITE]: {
      type: O.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, _.jsx)(d.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [O.JoinSourceType.VANITY_URL]: {
      type: O.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, _.jsx)(d.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function R(e) {
  var t;
  let {
    guildId: E,
    inviterUser: a,
    joinSourceType: u,
    className: i,
    onClickInviter: L
  } = e, o = (0, n.useStateFromStores)([l.default], () => null == a ? null : l.default.getMember(E, a.id), [a, E]), r = s.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != a && (null == L || L(a))
  }, [a, L]);
  return null == a ? null : (0, _.jsxs)("div", {
    className: T(U.inviterTooltipContainer, i),
    children: [(0, _.jsx)(A.Text, {
      variant: "text-xs/medium",
      children: u !== O.JoinSourceType.BOT ? c.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : c.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, _.jsxs)(A.Clickable, {
      className: T(U.inviterUserContainer, null != L && U.clickable),
      onClick: r,
      children: [(0, _.jsx)(I.default, {
        user: a,
        size: A.AvatarSizes.SIZE_16
      }), (0, _.jsx)(A.Text, {
        variant: "text-xs/medium",
        children: (0, _.jsx)(A.NameWithRole, {
          name: g.default.getName(E, null, a),
          color: null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function f(e) {
  let {
    children: t,
    hasTooltip: E,
    guildId: s,
    inviterUser: a,
    joinSourceType: T
  } = e;
  return E && null != a ? (0, _.jsx)(A.Tooltip, {
    "aria-label": T !== O.JoinSourceType.BOT ? c.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : c.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, _.jsx)(R, {
      guildId: s,
      inviterUser: a,
      joinSourceType: T
    }),
    children: e => (0, _.jsx)(_.Fragment, {
      children: t(e)
    })
  }) : (0, _.jsx)(_.Fragment, {
    children: t({})
  })
}

function h(e) {
  let {
    type: t
  } = e, E = (0, O.useGetIntegrationIconString)(t);
  return null == E ? null : (0, _.jsx)("div", {
    className: U.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: E
    }
  })
}

function p(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: E,
    integrationType: a,
    showInviterAsFooter: n,
    guildId: u,
    inviterUser: I,
    onClickInviter: i,
    ...l
  } = e, L = null != E ? M[E] : null, o = E === O.JoinSourceType.INTEGRATION && null != a, r = s.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == E:
      case null == E:
        return;
      case E === O.JoinSourceType.INVITE && null != t:
        var _;
        (0, G.updateSearchState)(u, {
          selectedSourceInviteCode: null !== (_ = null == t ? void 0 : t.trim()) && void 0 !== _ ? _ : void 0,
          selectedJoinSourceType: E
        });
        return;
      default:
        (0, G.updateSearchState)(u, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != E ? E : void 0
        });
        return
    }
  }, [u, E, t]);
  switch (!0) {
    case null == L:
    case null == E:
    case E === O.JoinSourceType.UNSPECIFIED:
      return (0, _.jsx)(C, {
        ...l
      });
    case null != a && o:
      return (0, _.jsxs)(A.Clickable, {
        className: U.inviteContainer,
        ...l,
        "aria-label": (0, O.getIntegrationLabel)(a),
        role: "button",
        tabIndex: 0,
        onClick: r,
        children: [(0, _.jsx)(h, {
          type: a
        }), (0, _.jsx)(A.Text, {
          variant: "text-sm/medium",
          children: (0, O.getIntegrationLabel)(a)
        })]
      });
    case null != L:
      return (0, _.jsxs)("div", {
        className: T(n && U.footerAlignment),
        children: [(0, _.jsxs)(A.Clickable, {
          className: U.inviteContainer,
          ...l,
          "aria-label": null == L ? void 0 : L.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: r,
          children: [null == L ? void 0 : L.icon, (0, _.jsx)(A.Text, {
            variant: "text-sm/medium",
            children: null == L ? void 0 : L.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), n && (0, _.jsx)(R, {
          guildId: u,
          inviterUser: I,
          joinSourceType: E,
          className: U.inviterFooter,
          onClickInviter: i
        })]
      });
    default:
      return (0, _.jsx)(C, {
        ...l
      })
  }
}
var P = s.memo(function(e) {
  var t, E;
  let {
    userId: a,
    guildId: T,
    showInviterAsFooter: A,
    onClickInviter: I
  } = e, l = (0, n.useStateFromStores)([D.default], () => D.default.getEnhancedMember(T, a), [T, a]), o = null !== (t = null == l ? void 0 : l.inviterId) && void 0 !== t ? t : null, r = (0, n.useStateFromStores)([L.default], () => L.default.getUser(o), [o]);
  if (s.useEffect(() => {
      null != o && (u.default.requestMembersById(T, [o]), (0, i.default)(o, void 0, {
        guildId: T
      }))
    }, [T, o]), null == l) return (0, _.jsx)(C, {});
  let {
    sourceInviteCode: d,
    joinSourceType: N,
    integrationType: S
  } = l, g = null != N ? M[N] : null, G = null !== (E = null == g ? void 0 : g.hasTooltip) && void 0 !== E && E;
  return (0, _.jsx)(f, {
    hasTooltip: G && !A,
    inviterUser: null != r ? r : null,
    guildId: T,
    joinSourceType: N,
    children: e => (0, _.jsx)(p, {
      sourceInviteCode: d,
      joinSourceType: N,
      integrationType: S,
      showInviterAsFooter: A,
      inviterUser: null != r ? r : null,
      guildId: T,
      onClickInviter: I,
      ...e
    })
  })
})