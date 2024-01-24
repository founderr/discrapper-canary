"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  o = n("446674"),
  u = n("77078"),
  a = n("851387"),
  c = n("87657"),
  d = n("506885"),
  f = n("26989"),
  E = n("697218"),
  _ = n("627490"),
  h = n("745633"),
  p = n("83900"),
  m = n("71216"),
  S = n("741919"),
  M = n("387111"),
  v = n("178406"),
  C = n("645266"),
  L = n("835257"),
  T = n("782340"),
  I = n("50183");
let g = i.memo(function() {
    return (0, l.jsx)(u.Tooltip, {
      text: T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, l.jsx)(u.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: I.unknownInvite,
        children: T.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  A = {
    [L.JoinSourceType.UNSPECIFIED]: {
      type: L.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [L.JoinSourceType.BOT]: {
      type: L.JoinSourceType.BOT,
      getJoinTypeLabel: () => T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, l.jsx)(m.default, {
        className: I.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [L.JoinSourceType.INTEGRATION]: {
      type: L.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, l.jsx)(S.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [L.JoinSourceType.DISCOVERY]: {
      type: L.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, l.jsx)(_.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [L.JoinSourceType.HUB]: {
      type: L.JoinSourceType.HUB,
      getJoinTypeLabel: () => T.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, l.jsx)(h.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [L.JoinSourceType.INVITE]: {
      type: L.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, l.jsx)(p.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [L.JoinSourceType.VANITY_URL]: {
      type: L.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, l.jsx)(p.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function N(e) {
  var t;
  let {
    guildId: n,
    inviterUser: r,
    joinSourceType: a,
    className: d,
    onClickInviter: E
  } = e, _ = (0, o.useStateFromStores)([f.default], () => null == r ? null : f.default.getMember(n, r.id), [r, n]), h = i.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != r && (null == E || E(r))
  }, [r, E]);
  return null == r ? null : (0, l.jsxs)("div", {
    className: s(I.inviterTooltipContainer, d),
    children: [(0, l.jsx)(u.Text, {
      variant: "text-xs/medium",
      children: a !== L.JoinSourceType.BOT ? T.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : T.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, l.jsxs)(u.Clickable, {
      className: s(I.inviterUserContainer, null != E && I.clickable),
      onClick: h,
      children: [(0, l.jsx)(c.default, {
        user: r,
        size: u.AvatarSizes.SIZE_16
      }), (0, l.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: (0, l.jsx)(u.NameWithRole, {
          name: M.default.getName(n, null, r),
          color: null !== (t = null == _ ? void 0 : _.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function x(e) {
  let {
    children: t,
    hasTooltip: n,
    guildId: i,
    inviterUser: r,
    joinSourceType: s
  } = e;
  return n && null != r ? (0, l.jsx)(u.Tooltip, {
    "aria-label": s !== L.JoinSourceType.BOT ? T.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : T.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, l.jsx)(N, {
      guildId: i,
      inviterUser: r,
      joinSourceType: s
    }),
    children: e => (0, l.jsx)(l.Fragment, {
      children: t(e)
    })
  }) : (0, l.jsx)(l.Fragment, {
    children: t({})
  })
}

function j(e) {
  let {
    type: t
  } = e, n = (0, L.useGetIntegrationIconString)(t);
  return null == n ? null : (0, l.jsx)("div", {
    className: I.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: n
    }
  })
}

function k(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: n,
    integrationType: r,
    showInviterAsFooter: o,
    guildId: a,
    inviterUser: c,
    onClickInviter: d,
    ...f
  } = e, E = null != n ? A[n] : null, _ = n === L.JoinSourceType.INTEGRATION && null != r, h = i.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == n:
      case null == n:
        return;
      case n === L.JoinSourceType.INVITE && null != t:
        var l;
        (0, C.updateSearchState)(a, {
          selectedSourceInviteCode: null !== (l = null == t ? void 0 : t.trim()) && void 0 !== l ? l : void 0,
          selectedJoinSourceType: n
        });
        return;
      default:
        (0, C.updateSearchState)(a, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != n ? n : void 0
        });
        return
    }
  }, [a, n, t]);
  switch (!0) {
    case null == E:
    case null == n:
    case n === L.JoinSourceType.UNSPECIFIED:
      return (0, l.jsx)(g, {
        ...f
      });
    case null != r && _:
      return (0, l.jsxs)(u.Clickable, {
        className: I.inviteContainer,
        ...f,
        "aria-label": (0, L.getIntegrationLabel)(r),
        role: "button",
        tabIndex: 0,
        onClick: h,
        children: [(0, l.jsx)(j, {
          type: r
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: (0, L.getIntegrationLabel)(r)
        })]
      });
    case null != E:
      return (0, l.jsxs)("div", {
        className: s(o && I.footerAlignment),
        children: [(0, l.jsxs)(u.Clickable, {
          className: I.inviteContainer,
          ...f,
          "aria-label": null == E ? void 0 : E.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: h,
          children: [null == E ? void 0 : E.icon, (0, l.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: null == E ? void 0 : E.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), o && (0, l.jsx)(N, {
          guildId: a,
          inviterUser: c,
          joinSourceType: n,
          className: I.inviterFooter,
          onClickInviter: d
        })]
      });
    default:
      return (0, l.jsx)(g, {
        ...f
      })
  }
}
var R = i.memo(function(e) {
  var t, n;
  let {
    userId: r,
    guildId: s,
    showInviterAsFooter: u,
    onClickInviter: c
  } = e, f = (0, o.useStateFromStores)([v.default], () => v.default.getEnhancedMember(s, r), [s, r]), _ = null !== (t = null == f ? void 0 : f.inviterId) && void 0 !== t ? t : null, h = (0, o.useStateFromStores)([E.default], () => E.default.getUser(_), [_]);
  if (i.useEffect(() => {
      null != _ && (a.default.requestMembersById(s, [_]), (0, d.default)(_, void 0, {
        guildId: s
      }))
    }, [s, _]), null == f) return (0, l.jsx)(g, {});
  let {
    sourceInviteCode: p,
    joinSourceType: m,
    integrationType: S
  } = f, M = null != m ? A[m] : null, C = null !== (n = null == M ? void 0 : M.hasTooltip) && void 0 !== n && n;
  return (0, l.jsx)(x, {
    hasTooltip: C && !u,
    inviterUser: null != h ? h : null,
    guildId: s,
    joinSourceType: m,
    children: e => (0, l.jsx)(k, {
      sourceInviteCode: p,
      joinSourceType: m,
      integrationType: S,
      showInviterAsFooter: u,
      inviterUser: null != h ? h : null,
      guildId: s,
      onClickInviter: c,
      ...e
    })
  })
})