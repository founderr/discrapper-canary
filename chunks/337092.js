"use strict";
l.r(t), l.d(t, {
  default: function() {
    return ea
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
  m = l("87657"),
  E = l("149638"),
  M = l("681937"),
  h = l("509"),
  T = l("459824"),
  x = l("654017"),
  _ = l("982108"),
  g = l("305961"),
  H = l("957255"),
  p = l("697218"),
  A = l("91551"),
  S = l("4845"),
  L = l("635731"),
  N = l("491401"),
  I = l("663745"),
  v = l("781896"),
  b = l("864982"),
  j = l("151185"),
  R = l("339123"),
  D = l("387111"),
  O = l("158998"),
  V = l("536999"),
  B = l("466818"),
  y = l("178406"),
  F = l("150162"),
  w = l("998940"),
  U = l("290491"),
  k = l("624663"),
  Z = l("553275"),
  P = l("412013"),
  Y = l("49111"),
  G = l("782340"),
  q = l("236807");
let J = n.memo(function(e) {
  let {
    member: t
  } = e, l = n.useMemo(() => (0, h.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), s = n.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]), o = (0, V.isInMembersTableSafetySignalsExperiment)(t.guildId);
  return (0, a.jsxs)("div", {
    className: i(q.flagContainer),
    children: [t.hasUnusualDmActivity && (0, a.jsx)(f.Tooltip, {
      text: G.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(S.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_MUTED.css
        })
      }
    }), l && (0, a.jsx)(f.Tooltip, {
      "aria-label": G.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
      allowOverflow: !0,
      text: (0, a.jsxs)("div", {
        className: q.communicationDisabledTooltip,
        children: [(0, a.jsx)("div", {
          children: G.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
        }), (0, a.jsx)(A.default, {
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
    }), o && (0, x.isSpammer)(t.userId) && (0, a.jsx)(f.Tooltip, {
      text: G.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(b.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), o && (0, M.hasAutomodQuarantinedProfile)(t) && (0, a.jsx)(f.Tooltip, {
      text: G.default.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
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
    })]
  })
});

function K(e) {
  let {
    member: t
  } = e, l = (0, C.default)([g.default], () => g.default.getGuild(t.guildId), [t.guildId]), s = n.useMemo(() => {
    var e;
    if (null == l) return [];
    let a = null !== (e = null == l ? void 0 : l.roles) && void 0 !== e ? e : {};
    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
      var l, n, s, i;
      return null !== (i = null !== (s = null === (l = a[t]) || void 0 === l ? void 0 : l.position) && void 0 !== s ? s : 0 - (null === (n = a[e]) || void 0 === n ? void 0 : n.position)) && void 0 !== i ? i : 0
    })
  }, [t.roles, t.highestRoleId, l]);
  return null == l || 0 === s.length ? null : (0, a.jsx)("div", {
    className: q.roleTooltipItemContainer,
    children: s.map(e => (0, a.jsx)(P.default, {
      className: i(q.roleTooltipItem),
      role: l.roles[e],
      guildId: t.guildId
    }, e))
  })
}
let z = n.memo(function(e) {
    let {
      member: t,
      highestRole: l
    } = e, s = (0, C.default)([g.default], () => g.default.getGuild(t.guildId), [t.guildId]), [o, d] = n.useState(!1), r = t.roles.length - 1, u = n.useMemo(() => new Intl.NumberFormat(G.default.getLocale()).format(r), [r]), c = (0, Z.useContextMenuModerateRoles)(t), m = (0, C.default)([H.default], () => H.default.can(Y.Permissions.MANAGE_ROLES, s), [s]), E = n.useCallback(e => () => {
      d(!0), null == e || e()
    }, []), M = n.useCallback(e => () => {
      d(!1), null == e || e()
    }, []);
    return null == s ? null : (0, a.jsxs)("div", {
      className: i(q.roleContainer),
      children: [null != l && (0, a.jsx)(P.default, {
        className: i(q.roleTooltipItem, q.highestRole),
        role: l,
        guildId: t.guildId
      }), r > 0 && (0, a.jsx)(f.Tooltip, {
        "aria-label": G.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
        tooltipContentClassName: q.roleTooltip,
        allowOverflow: !0,
        text: (0, a.jsx)("div", {
          className: q.roleTooltipSafetyContainer,
          children: o ? (0, a.jsx)(K, {
            member: t
          }) : G.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
        }),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(q.otherRoles),
            onMouseEnter: E(t),
            onMouseLeave: M(l),
            children: (0, a.jsxs)(f.Text, {
              variant: "text-xs/medium",
              color: "header-primary",
              children: ["+", u]
            })
          })
        }
      }), m && (0, a.jsx)(f.Tooltip, {
        text: G.default.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(q.otherRoles, q.addRoleContainer),
            onClick: c,
            onMouseEnter: t,
            onMouseLeave: l,
            children: (0, a.jsx)(j.default, {
              className: i(q.addRoleIcon),
              width: 16,
              height: 16
            })
          })
        }
      })]
    })
  }),
  W = n.memo(function(e) {
    var t;
    let {
      member: l,
      user: n
    } = e;
    return null == n || null == l ? null : (0, a.jsxs)("div", {
      className: i(q.memberNameContainer),
      children: [(0, a.jsx)("div", {
        className: i(q.memberAvatar),
        children: (0, a.jsx)(m.default, {
          user: n
        })
      }), (0, a.jsx)("div", {
        className: i(q.memberName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-sm/medium",
          children: (0, a.jsx)(f.NameWithRole, {
            name: D.default.getName(l.guildId, null, n),
            color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
            className: i(q.memberNameText)
          })
        })
      }), (0, a.jsx)("div", {
        className: i(q.memberGlobalName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: O.default.getUserTag(n)
        })
      })]
    })
  });

function Q(e) {
  let t = null == e ? null : (0, w.formatDateRelativeTime)(e, w.MembersTableDateFormats.JOINED_AT),
    l = new Date(null != e ? e : 0).toLocaleDateString(G.default.getLocale(), w.MEMBER_JOIN_DATE_TOOLTIP_CONFIG);
  return {
    short: t,
    long: l
  }
}

function X(e) {
  let {
    member: t,
    showLongDate: l
  } = e, [s, o] = n.useState(null);
  return (n.useEffect(() => {
    o(Q(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, E.default)(() => {
    o(Q(t.joinedAtTimestamp))
  }, 1e4), (null == s ? void 0 : s.short) == null) ? null : l ? (0, a.jsx)("div", {
    className: i(q.joinedAtContainer),
    children: (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: s.long
    })
  }) : (0, a.jsx)("div", {
    className: i(q.joinedAtContainer),
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
let $ = n.memo(function(e) {
    let {
      member: t,
      showLongDate: l
    } = e, {
      accountCreationDateShort: s,
      accountCreationDateLong: i
    } = n.useMemo(() => {
      let e = u.default.extractTimestamp(t.userId),
        l = (0, w.formatDateRelativeTime)(e, w.MembersTableDateFormats.ACCOUNT_AGE),
        a = new Date(e).toLocaleDateString(G.default.getLocale(), w.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG);
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
  ee = n.memo(function(e) {
    let {
      member: t,
      user: l,
      highestRole: s,
      isHoldingAdvancedInfoKey: o,
      onOpenModerationMenu: d,
      onOpenProfileMenu: r,
      compact: u
    } = e, c = (0, C.default)([H.default, g.default], () => H.default.can(Y.Permissions.MANAGE_GUILD, g.default.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: m,
      addUsers: E,
      removeUser: M
    } = (0, k.default)(t.guildId), h = (0, B.useCanAccessBulkBanningFeature)(t.guildId), x = (0, B.useCanBulkBanUser)(t.guildId, h, t.userId), _ = (0, T.useCanAccessGuildMemberModView)(t.guildId), p = n.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && x && (m.has(t.userId) ? M(t.userId) : E([t.userId]))
    }, [E, x, t, M, m]);
    return (0, a.jsxs)(a.Fragment, {
      children: [h && (0, a.jsx)(f.Tooltip, {
        tooltipClassName: q.disabledActionTooltip,
        shouldShow: !x,
        text: G.default.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
        children: e => (0, a.jsx)("td", {
          ...e,
          children: (0, a.jsx)("div", {
            className: i(q.checkbox, q.xsmallCol),
            children: (0, a.jsx)(f.Clickable, {
              onClick: p,
              children: (0, a.jsx)(f.Checkbox, {
                type: f.Checkbox.Types.INVERTED,
                value: m.has(t.userId),
                disabled: !x
              })
            })
          })
        })
      }), (0, a.jsx)("td", {
        className: i({
          [q.compact]: u
        }),
        children: (0, a.jsx)(W, {
          member: t,
          user: l
        })
      }), (0, a.jsx)("td", {
        className: i(q.smallCol, {
          [q.compact]: u
        }),
        children: (0, a.jsx)(X, {
          showLongDate: o,
          member: t
        })
      }), (0, a.jsx)("td", {
        className: i(q.smallCol, {
          [q.compact]: u
        }),
        children: (0, a.jsx)($, {
          showLongDate: o,
          member: t
        })
      }), c && (0, a.jsx)("td", {
        className: i(q.smallCol, {
          [q.compact]: u
        }),
        children: (0, a.jsx)(U.default, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, a.jsx)("td", {
        className: i(q.mediumCol, {
          [q.compact]: u
        }),
        children: (0, a.jsx)(z, {
          member: t,
          highestRole: s
        })
      }), (0, a.jsx)("td", {
        className: i(q.smallCol, {
          [q.compact]: u
        }),
        children: (0, a.jsx)(J, {
          member: t
        })
      }), (0, a.jsx)("td", {
        className: i(q.smallCol, {
          [q.compact]: u
        }),
        children: (0, a.jsxs)("div", {
          className: i(q.actionCell),
          children: [(0, a.jsx)(f.Tooltip, {
            text: _ ? G.default.Messages.MEMBER_SAFETY_TABLE_MOD_VIEW_TOOLTIP : G.default.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: r,
                className: i(q.button),
                children: _ ? (0, a.jsx)(R.default, {
                  width: et,
                  height: et
                }) : (0, a.jsx)(v.default, {
                  width: et,
                  height: et
                })
              })
            }
          }), (0, a.jsx)(f.Tooltip, {
            text: G.default.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: d,
                className: i(q.button),
                children: (0, a.jsx)(I.default, {
                  width: et,
                  height: et
                })
              })
            }
          })]
        })
      })]
    })
  }),
  et = 18,
  el = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"];
var ea = n.memo(function(e) {
  let {
    userId: t,
    guildId: l,
    style: s,
    onSelect: d,
    rowSelected: u,
    isHoldingAdvancedInfoKey: c = !1,
    compact: f = !1
  } = e, m = (0, C.default)([_.default], () => _.default.getGuildSidebarState(l), [l]), E = (null == m ? void 0 : m.details.userId) === t, M = (0, C.default)([y.default], () => y.default.getEnhancedMember(l, t), [l, t]), h = (0, Z.useHighestRole)(M), T = (0, C.default)([p.default], () => p.default.getUser(t), [t]), x = (0, Z.useContextMenuModerateUser)(null != M ? M : void 0), g = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), x(e)
  }, [x]), H = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != M && (null == d || d(M))
  }, [d, M]), A = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != M && (0, Z.openMemberProfile)(M)
  }, [M]), S = n.useCallback((e, t) => r((0, o.omit)(e, el), (0, o.omit)(t, el)), []);
  return null == M ? null : (0, a.jsx)(F.default, {
    role: "row",
    value: M,
    style: s,
    className: i(q.roundedRow, q.memberRowContainer, u && q.selected, E && q.memberSelected),
    equalityFn: S,
    onClick: H,
    onContextMenu: g,
    children: (0, a.jsx)(ee, {
      member: M,
      user: T,
      highestRole: h,
      isHoldingAdvancedInfoKey: c,
      onOpenModerationMenu: g,
      onOpenProfileMenu: A,
      compact: f
    })
  })
})