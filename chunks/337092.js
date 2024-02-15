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
  E = l("87657"),
  m = l("149638"),
  M = l("681937"),
  h = l("509"),
  _ = l("459824"),
  T = l("654017"),
  x = l("982108"),
  S = l("305961"),
  A = l("957255"),
  p = l("697218"),
  L = l("91551"),
  H = l("4845"),
  N = l("635731"),
  g = l("491401"),
  I = l("663745"),
  R = l("781896"),
  v = l("864982"),
  j = l("151185"),
  D = l("339123"),
  b = l("387111"),
  O = l("158998"),
  B = l("64905"),
  V = l("490931"),
  y = l("466818"),
  U = l("178406"),
  F = l("150162"),
  w = l("290491"),
  k = l("624663"),
  Z = l("553275"),
  P = l("412013"),
  Y = l("49111"),
  G = l("782340"),
  J = l("615319");
let q = n.memo(function(e) {
  let {
    member: t
  } = e, l = n.useMemo(() => (0, h.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), s = n.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return (0, a.jsxs)("div", {
    className: i(J.flagContainer),
    children: [t.hasUnusualDmActivity && (0, a.jsx)(f.Tooltip, {
      text: G.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
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
    }), l && (0, a.jsx)(f.Tooltip, {
      "aria-label": G.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
      allowOverflow: !0,
      text: (0, a.jsxs)("div", {
        className: J.communicationDisabledTooltip,
        children: [(0, a.jsx)("div", {
          children: G.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
        }), (0, a.jsx)(L.default, {
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
        return (0, a.jsx)(g.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), (0, T.isSpammer)(t.userId) && (0, a.jsx)(f.Tooltip, {
      text: G.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
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
      text: G.default.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
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
          color: c.default.colors.TEXT_MUTED.css
        })
      }
    })]
  })
});

function z(e) {
  let {
    member: t
  } = e, l = (0, C.default)([S.default], () => S.default.getGuild(t.guildId), [t.guildId]), s = n.useMemo(() => {
    var e;
    if (null == l) return [];
    let a = null !== (e = null == l ? void 0 : l.roles) && void 0 !== e ? e : {};
    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
      var l, n, s, i;
      return null !== (i = null !== (s = null === (l = a[t]) || void 0 === l ? void 0 : l.position) && void 0 !== s ? s : 0 - (null === (n = a[e]) || void 0 === n ? void 0 : n.position)) && void 0 !== i ? i : 0
    })
  }, [t.roles, t.highestRoleId, l]);
  return null == l || 0 === s.length ? null : (0, a.jsx)("div", {
    className: J.roleTooltipItemContainer,
    children: s.map(e => (0, a.jsx)(P.default, {
      className: i(J.roleTooltipItem),
      role: l.roles[e],
      guildId: t.guildId
    }, e))
  })
}
let K = n.memo(function(e) {
    let {
      member: t,
      highestRole: l
    } = e, s = (0, C.default)([S.default], () => S.default.getGuild(t.guildId), [t.guildId]), [o, d] = n.useState(!1), r = t.roles.length - 1, u = n.useMemo(() => new Intl.NumberFormat(G.default.getLocale()).format(r), [r]), c = (0, Z.useContextMenuModerateRoles)(t), E = (0, C.default)([A.default], () => A.default.can(Y.Permissions.MANAGE_ROLES, s), [s]), m = n.useCallback(e => () => {
      d(!0), null == e || e()
    }, []), M = n.useCallback(e => () => {
      d(!1), null == e || e()
    }, []);
    return null == s ? null : (0, a.jsxs)("div", {
      className: i(J.roleContainer),
      children: [null != l && (0, a.jsx)(P.default, {
        className: i(J.roleTooltipItem, J.highestRole),
        role: l,
        guildId: t.guildId
      }), r > 0 && (0, a.jsx)(f.Tooltip, {
        "aria-label": G.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
        tooltipContentClassName: J.roleTooltip,
        allowOverflow: !0,
        text: (0, a.jsx)("div", {
          className: J.roleTooltipSafetyContainer,
          children: o ? (0, a.jsx)(z, {
            member: t
          }) : G.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
        }),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(J.otherRoles),
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
        text: G.default.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(J.otherRoles, J.addRoleContainer),
            onClick: c,
            onMouseEnter: t,
            onMouseLeave: l,
            children: (0, a.jsx)(j.default, {
              className: i(J.addRoleIcon),
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
      user: s
    } = e, o = n.useCallback(e => {
      null != l && (e.stopPropagation(), e.preventDefault(), (0, Z.openMemberProfile)(l))
    }, [l]);
    return null == s || null == l ? null : (0, a.jsxs)("div", {
      className: i(J.memberNameContainer),
      children: [(0, a.jsx)(f.Clickable, {
        className: i(J.memberAvatar),
        onClick: o,
        children: (0, a.jsx)(E.default, {
          user: s
        })
      }), (0, a.jsx)("div", {
        className: i(J.memberName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-sm/medium",
          children: (0, a.jsx)(f.Clickable, {
            onClick: o,
            children: (0, a.jsx)(f.NameWithRole, {
              name: b.default.getName(l.guildId, null, s),
              color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
              className: i(J.memberNameText)
            })
          })
        })
      }), (0, a.jsx)("div", {
        className: i(J.memberGlobalName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          tag: "span",
          children: (0, a.jsx)(f.Clickable, {
            onClick: o,
            tag: "span",
            children: O.default.getUserTag(s)
          })
        })
      })]
    })
  });

function Q(e) {
  let t = null == e ? null : (0, B.formatDateRelativeTime)(e, B.MembersTableDateFormats.JOINED_AT),
    l = new Date(null != e ? e : 0).toLocaleDateString(G.default.getLocale(), B.MEMBER_JOIN_DATE_TOOLTIP_CONFIG);
  return {
    short: t,
    long: l
  }
}

function X(e) {
  let {
    member: t,
    showLongDate: l,
    isSortedBy: s
  } = e, [o, d] = n.useState(null);
  n.useEffect(() => {
    d(Q(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, m.default)(() => {
    d(Q(t.joinedAtTimestamp))
  }, 1e4);
  let r = s ? "text-brand" : "text-normal";
  return (null == o ? void 0 : o.short) == null ? null : l ? (0, a.jsx)("div", {
    className: i(J.joinedAtContainer),
    children: (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: r,
      children: o.long
    })
  }) : (0, a.jsx)("div", {
    className: i(J.joinedAtContainer),
    children: (0, a.jsx)(f.Tooltip, {
      align: "left",
      text: o.long,
      children: e => (0, a.jsx)(f.Text, {
        ...e,
        variant: "text-sm/medium",
        color: r,
        children: o.short
      })
    })
  })
}
let $ = n.memo(function(e) {
    let {
      member: t,
      showLongDate: l,
      isSortedBy: s
    } = e, {
      accountCreationDateShort: i,
      accountCreationDateLong: o
    } = n.useMemo(() => {
      let e = u.default.extractTimestamp(t.userId),
        l = (0, B.formatDateRelativeTime)(e, B.MembersTableDateFormats.ACCOUNT_AGE),
        a = new Date(e).toLocaleDateString(G.default.getLocale(), B.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG);
      return {
        accountCreationDateShort: l,
        accountCreationDateLong: a
      }
    }, [t.userId]), d = s ? "text-brand" : "text-normal";
    return l ? (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: d,
      children: o
    }) : (0, a.jsx)(f.Tooltip, {
      align: "left",
      text: o,
      children: e => (0, a.jsx)(f.Text, {
        ...e,
        variant: "text-sm/medium",
        color: d,
        children: i
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
      onOpenProfileMenu: u,
      compact: c
    } = e, E = (0, C.default)([A.default, S.default], () => A.default.can(Y.Permissions.MANAGE_GUILD, S.default.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: m,
      addUsers: M,
      removeUser: h
    } = (0, k.default)(t.guildId), T = (0, y.useCanAccessBulkBanningFeature)(t.guildId), x = (0, y.useCanBulkBanUser)(t.guildId, T, t.userId), p = (0, _.useCanAccessGuildMemberModView)(t.guildId), L = (0, C.default)([U.default], () => {
      var e;
      return null !== (e = U.default.getSearchStateByGuildId(t.guildId).selectedSort) && void 0 !== e ? e : V.OrderBy.ORDER_BY_UNSPECIFIED
    }, [t.guildId], r), H = n.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && x && (m.has(t.userId) ? h(t.userId) : M([t.userId]))
    }, [M, x, t, h, m]), N = L === V.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC, g = L === V.OrderBy.ORDER_BY_USER_ID_ASC || L === V.OrderBy.ORDER_BY_USER_ID_DESC;
    return (0, a.jsxs)(a.Fragment, {
      children: [T && (0, a.jsx)(f.Tooltip, {
        tooltipClassName: J.disabledActionTooltip,
        shouldShow: !x,
        text: G.default.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
        children: e => (0, a.jsx)("td", {
          ...e,
          children: (0, a.jsx)("div", {
            className: i(J.checkbox, J.xsmallCol),
            children: (0, a.jsx)(f.Clickable, {
              onClick: H,
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
          [J.compact]: c
        }),
        children: (0, a.jsx)(W, {
          member: t,
          user: l
        })
      }), (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: c
        }),
        children: (0, a.jsx)(X, {
          showLongDate: o,
          member: t,
          isSortedBy: N
        })
      }), (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: c
        }),
        children: (0, a.jsx)($, {
          showLongDate: o,
          member: t,
          isSortedBy: g
        })
      }), E && (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: c
        }),
        children: (0, a.jsx)(w.default, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, a.jsx)("td", {
        className: i(J.mediumCol, {
          [J.compact]: c
        }),
        children: (0, a.jsx)(K, {
          member: t,
          highestRole: s
        })
      }), (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: c
        }),
        children: (0, a.jsx)(q, {
          member: t
        })
      }), (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: c
        }),
        children: (0, a.jsxs)("div", {
          className: i(J.actionCell),
          children: [(0, a.jsx)(f.Tooltip, {
            text: p ? G.default.Messages.MEMBER_SAFETY_TABLE_MOD_VIEW_TOOLTIP : G.default.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: u,
                className: i(J.button),
                children: p ? (0, a.jsx)(D.default, {
                  width: et,
                  height: et
                }) : (0, a.jsx)(R.default, {
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
                className: i(J.button),
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
    isLoading: c = !1,
    isHoldingAdvancedInfoKey: f = !1,
    compact: E = !1
  } = e, m = (0, C.default)([x.default], () => x.default.getGuildSidebarState(l), [l]), M = (null == m ? void 0 : m.details.userId) === t, h = (0, C.default)([U.default], () => U.default.getEnhancedMember(l, t), [l, t]), _ = (0, Z.useHighestRole)(h), T = (0, C.default)([p.default], () => p.default.getUser(t), [t]), S = (0, Z.useContextMenuModerateUser)(null != h ? h : void 0), A = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), S(e)
  }, [S]), L = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != h && (null == d || d(h))
  }, [d, h]), H = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != h && (null == d || d(h))
  }, [h, d]), N = n.useCallback((e, t) => r((0, o.omit)(e, el), (0, o.omit)(t, el)), []);
  return null == h ? null : (0, a.jsx)(F.default, {
    role: "row",
    value: h,
    style: s,
    className: i(J.roundedRow, J.memberRowContainer, u && J.selected, M && J.memberSelected, c && J.loading),
    equalityFn: N,
    onClick: L,
    onContextMenu: A,
    children: (0, a.jsx)(ee, {
      member: h,
      user: T,
      highestRole: _,
      isHoldingAdvancedInfoKey: f,
      onOpenModerationMenu: A,
      onOpenProfileMenu: H,
      compact: E
    })
  })
})