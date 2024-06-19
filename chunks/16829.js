var T = e(735250),
  s = e(470079),
  I = e(120356),
  A = e.n(I),
  n = e(442837),
  N = e(481060),
  t = e(749210),
  r = e(700582),
  a = e(484459),
  L = e(271383),
  D = e(246946),
  S = e(594174),
  U = e(669405),
  l = e(5192),
  O = e(893966),
  G = e(527379),
  M = e(327999),
  R = e(689938),
  u = e(160190);
let i = s.memo(function() {
    return (0, T.jsx)(N.Tooltip, {
      text: R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: E => (0, T.jsx)(N.Text, {
        ...E,
        variant: "text-sm/medium",
        color: "text-muted",
        className: u.unknownInvite,
        children: R.Z.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  o = s.memo(function() {
    return (0, T.jsx)(N.Tooltip, {
      text: R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
      children: E => (0, T.jsx)(N.Text, {
        ...E,
        variant: "text-sm/medium",
        color: "text-muted",
        className: u.unknownInvite,
        children: R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
      })
    })
  }),
  C = {
    [M.gq.UNSPECIFIED]: {
      type: M.gq.UNSPECIFIED,
      getJoinTypeLabel: () => R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [M.gq.BOT]: {
      type: M.gq.BOT,
      getJoinTypeLabel: () => R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, T.jsx)(N.RobotIcon, {
        size: "custom",
        color: "currentColor",
        className: u.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [M.gq.INTEGRATION]: {
      type: M.gq.INTEGRATION,
      getJoinTypeLabel: () => R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, T.jsx)(N.WebhookIcon, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [M.gq.DISCOVERY]: {
      type: M.gq.DISCOVERY,
      getJoinTypeLabel: () => R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, T.jsx)(N.CompassIcon, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [M.gq.HUB]: {
      type: M.gq.HUB,
      getJoinTypeLabel: () => R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, T.jsx)(N.HubIcon, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [M.gq.INVITE]: {
      type: M.gq.INVITE,
      getJoinTypeLabel: E => E,
      icon: (0, T.jsx)(N.LinkIcon, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [M.gq.VANITY_URL]: {
      type: M.gq.VANITY_URL,
      getJoinTypeLabel: E => E,
      icon: (0, T.jsx)(N.LinkIcon, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [M.gq.MANUAL_MEMBER_VERIFICATION]: {
      type: M.gq.MANUAL_MEMBER_VERIFICATION,
      getJoinTypeLabel: E => null != E ? R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION_CODE.format({
        code: E
      }) : R.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION,
      icon: (0, T.jsx)(U.Z, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function c(E) {
  var _;
  let {
    guildId: e,
    inviterUser: I,
    joinSourceType: t,
    className: a,
    onClickInviter: D
  } = E, S = (0, n.e7)([L.ZP], () => null == I ? null : L.ZP.getMember(e, I.id), [I, e]), U = s.useCallback(E => {
    E.stopPropagation(), E.preventDefault(), null != I && (null == D || D(I))
  }, [I, D]);
  return null == I ? null : (0, T.jsxs)("div", {
    className: A()(u.inviterTooltipContainer, a),
    children: [(0, T.jsx)(N.Text, {
      variant: "text-xs/medium",
      children: t !== M.gq.BOT ? R.Z.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : R.Z.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, T.jsxs)(N.Clickable, {
      className: A()(u.inviterUserContainer, null != D && u.clickable),
      onClick: U,
      children: [(0, T.jsx)(r.Z, {
        user: I,
        size: N.AvatarSizes.SIZE_16
      }), (0, T.jsx)(N.Text, {
        variant: "text-xs/medium",
        children: (0, T.jsx)(N.NameWithRole, {
          name: l.ZP.getName(e, null, I),
          color: null !== (_ = null == S ? void 0 : S.colorString) && void 0 !== _ ? _ : void 0
        })
      })]
    })]
  })
}

function g(E) {
  let {
    children: _,
    hasTooltip: e,
    guildId: s,
    inviterUser: I,
    joinSourceType: A
  } = E;
  return e && null != I ? (0, T.jsx)(N.Tooltip, {
    "aria-label": A !== M.gq.BOT ? R.Z.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : R.Z.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, T.jsx)(c, {
      guildId: s,
      inviterUser: I,
      joinSourceType: A
    }),
    children: E => (0, T.jsx)(T.Fragment, {
      children: _(E)
    })
  }) : (0, T.jsx)(T.Fragment, {
    children: _({})
  })
}

function d(E) {
  let {
    type: _
  } = E, e = (0, M.Ph)(_);
  return null == e ? null : (0, T.jsx)("div", {
    className: u.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: e
    }
  })
}

function Z(E) {
  let {
    sourceInviteCode: _,
    joinSourceType: e,
    integrationType: I,
    showInviterAsFooter: n,
    guildId: t,
    inviterUser: r,
    onClickInviter: a,
    ...L
  } = E, D = null != e ? C[e] : null, S = e === M.gq.INTEGRATION && null != I, U = s.useCallback(E => {
    switch (E.stopPropagation(), E.preventDefault(), !0) {
      case null == _ && null == e:
      case null == e:
        return;
      case e === M.gq.INVITE && null != _:
        var T;
        (0, G.Dr)(t, {
          selectedSourceInviteCode: null !== (T = null == _ ? void 0 : _.trim()) && void 0 !== T ? T : void 0,
          selectedJoinSourceType: e
        });
        return;
      default:
        (0, G.Dr)(t, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != e ? e : void 0
        });
        return
    }
  }, [t, e, _]);
  switch (!0) {
    case null == D:
    case null == e:
    case e === M.gq.UNSPECIFIED:
      return (0, T.jsx)(i, {
        ...L
      });
    case null != I && S:
      return (0, T.jsxs)(N.Clickable, {
        className: u.inviteContainer,
        ...L,
        "aria-label": (0, M.MS)(I),
        role: "button",
        tabIndex: 0,
        onClick: U,
        children: [(0, T.jsx)(d, {
          type: I
        }), (0, T.jsx)(N.Text, {
          variant: "text-sm/medium",
          children: (0, M.MS)(I)
        })]
      });
    case null != D:
      return (0, T.jsxs)("div", {
        className: A()(n && u.footerAlignment),
        children: [(0, T.jsxs)(N.Clickable, {
          className: u.inviteContainer,
          ...L,
          "aria-label": null == D ? void 0 : D.getJoinTypeLabel(null != _ ? _ : void 0),
          role: "button",
          tabIndex: 0,
          onClick: U,
          children: [null == D ? void 0 : D.icon, (0, T.jsx)(N.Text, {
            variant: "text-sm/medium",
            children: null == D ? void 0 : D.getJoinTypeLabel(null != _ ? _ : void 0)
          })]
        }), n && (0, T.jsx)(c, {
          guildId: t,
          inviterUser: r,
          joinSourceType: e,
          className: u.inviterFooter,
          onClickInviter: a
        })]
      });
    default:
      return (0, T.jsx)(i, {
        ...L
      })
  }
}
_.ZP = s.memo(function(E) {
  var _, e;
  let {
    userId: I,
    guildId: A,
    showInviterAsFooter: N,
    onClickInviter: r
  } = E, L = (0, n.e7)([O.Z], () => O.Z.getEnhancedMember(A, I), [A, I]), U = null !== (_ = null == L ? void 0 : L.inviterId) && void 0 !== _ ? _ : null, l = (0, n.e7)([S.default], () => S.default.getUser(U), [U]);
  s.useEffect(() => {
    null != U && (t.Z.requestMembersById(A, [U]), (0, a.Z)(U, void 0, {
      guildId: A
    }))
  }, [A, U]);
  let G = (0, n.e7)([D.Z], () => D.Z.hideInstantInvites, []);
  if (null == L) return (0, T.jsx)(i, {});
  let {
    sourceInviteCode: R,
    joinSourceType: u,
    integrationType: c
  } = L, d = null != u ? C[u] : null, P = null !== (e = null == d ? void 0 : d.hasTooltip) && void 0 !== e && e;
  return (u === M.gq.INVITE || u === M.gq.VANITY_URL || u === M.gq.MANUAL_MEMBER_VERIFICATION && null != R) && G ? (0, T.jsx)(o, {}) : (0, T.jsx)(g, {
    hasTooltip: P && !N,
    inviterUser: null != l ? l : null,
    guildId: A,
    joinSourceType: u,
    children: E => (0, T.jsx)(Z, {
      sourceInviteCode: R,
      joinSourceType: u,
      integrationType: c,
      showInviterAsFooter: N,
      inviterUser: null != l ? l : null,
      guildId: A,
      onClickInviter: r,
      ...E
    })
  })
})