"use strict";
l.r(t), l.d(t, {
  default: function() {
    return el
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("917351"),
  d = l("969176"),
  r = l.n(d),
  u = l("249654"),
  C = l("65597"),
  c = l("669491"),
  f = l("77078"),
  E = l("87657"),
  m = l("149638"),
  M = l("681937"),
  h = l("509"),
  _ = l("459824"),
  T = l("654017"),
  x = l("982108"),
  A = l("305961"),
  S = l("957255"),
  g = l("697218"),
  p = l("91551"),
  L = l("4845"),
  H = l("635731"),
  N = l("491401"),
  I = l("663745"),
  R = l("781896"),
  v = l("864982"),
  j = l("151185"),
  b = l("339123"),
  D = l("387111"),
  O = l("158998"),
  V = l("64905"),
  B = l("466818"),
  y = l("178406"),
  F = l("150162"),
  U = l("290491"),
  w = l("624663"),
  k = l("553275"),
  Z = l("412013"),
  P = l("49111"),
  Y = l("782340"),
  G = l("236807");
let J = n.memo(function(e) {
  let {
    member: t
  } = e, l = n.useMemo(() => (0, h.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), s = n.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return (0, a.jsxs)("div", {
    className: i(G.flagContainer),
    children: [t.hasUnusualDmActivity && (0, a.jsx)(f.Tooltip, {
      text: Y.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(L.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_MUTED.css
        })
      }
    }), l && (0, a.jsx)(f.Tooltip, {
      "aria-label": Y.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
      allowOverflow: !0,
      text: (0, a.jsxs)("div", {
        className: G.communicationDisabledTooltip,
        children: [(0, a.jsx)("div", {
          children: Y.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
        }), (0, a.jsx)(p.default, {
          deadline: s,
          showUnits: !0,
          stopAtOneSec: !0
        })]
      }),
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(N.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), (0, T.isSpammer)(t.userId) && (0, a.jsx)(f.Tooltip, {
      text: Y.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(v.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), (0, M.hasAutomodQuarantinedProfile)(t) && (0, a.jsx)(f.Tooltip, {
      text: Y.default.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(H.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_MUTED.css
        })
      }
    })]
  })
});

function q(e) {
  let {
    member: t
  } = e, l = (0, C.default)([A.default], () => A.default.getGuild(t.guildId), [t.guildId]), s = n.useMemo(() => {
    var e;
    if (null == l) return [];
    let a = null !== (e = null == l ? void 0 : l.roles) && void 0 !== e ? e : {};
    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
      var l, n, s, i;
      return null !== (i = null !== (s = null === (l = a[t]) || void 0 === l ? void 0 : l.position) && void 0 !== s ? s : 0 - (null === (n = a[e]) || void 0 === n ? void 0 : n.position)) && void 0 !== i ? i : 0
    })
  }, [t.roles, t.highestRoleId, l]);
  return null == l || 0 === s.length ? null : (0, a.jsx)("div", {
    className: G.roleTooltipItemContainer,
    children: s.map(e => (0, a.jsx)(Z.default, {
      className: i(G.roleTooltipItem),
      role: l.roles[e],
      guildId: t.guildId
    }, e))
  })
}
let z = n.memo(function(e) {
    let {
      member: t,
      highestRole: l
    } = e, s = (0, C.default)([A.default], () => A.default.getGuild(t.guildId), [t.guildId]), [o, d] = n.useState(!1), r = t.roles.length - 1, u = n.useMemo(() => new Intl.NumberFormat(Y.default.getLocale()).format(r), [r]), c = (0, k.useContextMenuModerateRoles)(t), E = (0, C.default)([S.default], () => S.default.can(P.Permissions.MANAGE_ROLES, s), [s]), m = n.useCallback(e => () => {
      d(!0), null == e || e()
    }, []), M = n.useCallback(e => () => {
      d(!1), null == e || e()
    }, []);
    return null == s ? null : (0, a.jsxs)("div", {
      className: i(G.roleContainer),
      children: [null != l && (0, a.jsx)(Z.default, {
        className: i(G.roleTooltipItem, G.highestRole),
        role: l,
        guildId: t.guildId
      }), r > 0 && (0, a.jsx)(f.Tooltip, {
        "aria-label": Y.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
        tooltipContentClassName: G.roleTooltip,
        allowOverflow: !0,
        text: (0, a.jsx)("div", {
          className: G.roleTooltipSafetyContainer,
          children: o ? (0, a.jsx)(q, {
            member: t
          }) : Y.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
        }),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(G.otherRoles),
            onMouseEnter: m(t),
            onMouseLeave: M(l),
            children: (0, a.jsxs)(f.Text, {
              variant: "text-xs/medium",
              color: "header-primary",
              children: ["+", u]
            })
          })
        }
      }), E && (0, a.jsx)(f.Tooltip, {
        text: Y.default.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(G.otherRoles, G.addRoleContainer),
            onClick: c,
            onMouseEnter: t,
            onMouseLeave: l,
            children: (0, a.jsx)(j.default, {
              className: i(G.addRoleIcon),
              width: 16,
              height: 16
            })
          })
        }
      })]
    })
  }),
  K = n.memo(function(e) {
    var t;
    let {
      member: l,
      user: n
    } = e;
    return null == n || null == l ? null : (0, a.jsxs)("div", {
      className: i(G.memberNameContainer),
      children: [(0, a.jsx)("div", {
        className: i(G.memberAvatar),
        children: (0, a.jsx)(E.default, {
          user: n
        })
      }), (0, a.jsx)("div", {
        className: i(G.memberName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-sm/medium",
          children: (0, a.jsx)(f.NameWithRole, {
            name: D.default.getName(l.guildId, null, n),
            color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
            className: i(G.memberNameText)
          })
        })
      }), (0, a.jsx)("div", {
        className: i(G.memberGlobalName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: O.default.getUserTag(n)
        })
      })]
    })
  });

function W(e) {
  let t = null == e ? null : (0, V.formatDateRelativeTime)(e, V.MembersTableDateFormats.JOINED_AT),
    l = new Date(null != e ? e : 0).toLocaleDateString(Y.default.getLocale(), V.MEMBER_JOIN_DATE_TOOLTIP_CONFIG);
  return {
    short: t,
    long: l
  }
}

function Q(e) {
  let {
    member: t,
    showLongDate: l
  } = e, [s, o] = n.useState(null);
  return (n.useEffect(() => {
    o(W(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, m.default)(() => {
    o(W(t.joinedAtTimestamp))
  }, 1e4), (null == s ? void 0 : s.short) == null) ? null : l ? (0, a.jsx)("div", {
    className: i(G.joinedAtContainer),
    children: (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: s.long
    })
  }) : (0, a.jsx)("div", {
    className: i(G.joinedAtContainer),
    children: (0, a.jsx)(f.Tooltip, {
      align: "left",
      text: s.long,
      children: e => (0, a.jsx)(f.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-normal",
        children: s.short
      })
    })
  })
}
let X = n.memo(function(e) {
    let {
      member: t,
      showLongDate: l
    } = e, {
      accountCreationDateShort: s,
      accountCreationDateLong: i
    } = n.useMemo(() => {
      let e = u.default.extractTimestamp(t.userId),
        l = (0, V.formatDateRelativeTime)(e, V.MembersTableDateFormats.ACCOUNT_AGE),
        a = new Date(e).toLocaleDateString(Y.default.getLocale(), V.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG);
      return {
        accountCreationDateShort: l,
        accountCreationDateLong: a
      }
    }, [t.userId]);
    return l ? (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: i
    }) : (0, a.jsx)(f.Tooltip, {
      align: "left",
      text: i,
      children: e => (0, a.jsx)(f.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-normal",
        children: s
      })
    })
  }),
  $ = n.memo(function(e) {
    let {
      member: t,
      user: l,
      highestRole: s,
      isHoldingAdvancedInfoKey: o,
      onOpenModerationMenu: d,
      onOpenProfileMenu: r,
      compact: u
    } = e, c = (0, C.default)([S.default, A.default], () => S.default.can(P.Permissions.MANAGE_GUILD, A.default.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: E,
      addUsers: m,
      removeUser: M
    } = (0, w.default)(t.guildId), h = (0, B.useCanAccessBulkBanningFeature)(t.guildId), T = (0, B.useCanBulkBanUser)(t.guildId, h, t.userId), x = (0, _.useCanAccessGuildMemberModView)(t.guildId), g = n.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && T && (E.has(t.userId) ? M(t.userId) : m([t.userId]))
    }, [m, T, t, M, E]);
    return (0, a.jsxs)(a.Fragment, {
      children: [h && (0, a.jsx)(f.Tooltip, {
        tooltipClassName: G.disabledActionTooltip,
        shouldShow: !T,
        text: Y.default.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
        children: e => (0, a.jsx)("td", {
          ...e,
          children: (0, a.jsx)("div", {
            className: i(G.checkbox, G.xsmallCol),
            children: (0, a.jsx)(f.Clickable, {
              onClick: g,
              children: (0, a.jsx)(f.Checkbox, {
                type: f.Checkbox.Types.INVERTED,
                value: E.has(t.userId),
                disabled: !T
              })
            })
          })
        })
      }), (0, a.jsx)("td", {
        className: i({
          [G.compact]: u
        }),
        children: (0, a.jsx)(K, {
          member: t,
          user: l
        })
      }), (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: u
        }),
        children: (0, a.jsx)(Q, {
          showLongDate: o,
          member: t
        })
      }), (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: u
        }),
        children: (0, a.jsx)(X, {
          showLongDate: o,
          member: t
        })
      }), c && (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: u
        }),
        children: (0, a.jsx)(U.default, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, a.jsx)("td", {
        className: i(G.mediumCol, {
          [G.compact]: u
        }),
        children: (0, a.jsx)(z, {
          member: t,
          highestRole: s
        })
      }), (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: u
        }),
        children: (0, a.jsx)(J, {
          member: t
        })
      }), (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: u
        }),
        children: (0, a.jsxs)("div", {
          className: i(G.actionCell),
          children: [(0, a.jsx)(f.Tooltip, {
            text: x ? Y.default.Messages.MEMBER_SAFETY_TABLE_MOD_VIEW_TOOLTIP : Y.default.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: r,
                className: i(G.button),
                children: x ? (0, a.jsx)(b.default, {
                  width: ee,
                  height: ee
                }) : (0, a.jsx)(R.default, {
                  width: ee,
                  height: ee
                })
              })
            }
          }), (0, a.jsx)(f.Tooltip, {
            text: Y.default.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: d,
                className: i(G.button),
                children: (0, a.jsx)(I.default, {
                  width: ee,
                  height: ee
                })
              })
            }
          })]
        })
      })]
    })
  }),
  ee = 18,
  et = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"];
var el = n.memo(function(e) {
  let {
    userId: t,
    guildId: l,
    style: s,
    onSelect: d,
    rowSelected: u,
    isLoading: c = !1,
    isHoldingAdvancedInfoKey: f = !1,
    compact: E = !1
  } = e, m = (0, C.default)([x.default], () => x.default.getGuildSidebarState(l), [l]), M = (null == m ? void 0 : m.details.userId) === t, h = (0, C.default)([y.default], () => y.default.getEnhancedMember(l, t), [l, t]), _ = (0, k.useHighestRole)(h), T = (0, C.default)([g.default], () => g.default.getUser(t), [t]), A = (0, k.useContextMenuModerateUser)(null != h ? h : void 0), S = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), A(e)
  }, [A]), p = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != h && (null == d || d(h))
  }, [d, h]), L = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != h && (null == d || d(h))
  }, [h, d]), H = n.useCallback((e, t) => r((0, o.omit)(e, et), (0, o.omit)(t, et)), []);
  return null == h ? null : (0, a.jsx)(F.default, {
    role: "row",
    value: h,
    style: s,
    className: i(G.roundedRow, G.memberRowContainer, u && G.selected, M && G.memberSelected, c && G.loading),
    equalityFn: H,
    onClick: p,
    onContextMenu: S,
    children: (0, a.jsx)($, {
      member: h,
      user: T,
      highestRole: _,
      isHoldingAdvancedInfoKey: f,
      onOpenModerationMenu: S,
      onOpenProfileMenu: L,
      compact: E
    })
  })
})