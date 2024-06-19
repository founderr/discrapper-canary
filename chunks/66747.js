t(47120);
var n = t(735250),
  s = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(392711),
  r = t(498607),
  C = t.n(r),
  c = t(399606),
  d = t(692547),
  u = t(481060),
  E = t(700582),
  m = t(745735),
  _ = t(906732),
  M = t(715903),
  h = t(69882),
  x = t(189357),
  T = t(493892),
  L = t(433355),
  H = t(430824),
  g = t(496675),
  A = t(594174),
  I = t(373791),
  N = t(203893),
  R = t(777288),
  p = t(5192),
  S = t(709054),
  Z = t(51144),
  j = t(815790),
  v = t(588215),
  f = t(241559),
  D = t(893966),
  b = t(685244),
  O = t(16829),
  V = t(256003),
  B = t(472596),
  U = t(285173),
  F = t(981631),
  k = t(689938),
  w = t(405811);
let y = s.memo(function(e) {
  let {
    member: l
  } = e, t = s.useMemo(() => (0, h.J)(l.communicationDisabledUntil), [l.communicationDisabledUntil]), a = s.useMemo(() => null == l.communicationDisabledUntil ? new Date : new Date(l.communicationDisabledUntil), [l.communicationDisabledUntil]);
  return (0, n.jsxs)("div", {
    className: o()(w.flagContainer),
    children: [l.hasUnusualDmActivity && (0, n.jsx)(u.Tooltip, {
      text: k.Z.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: l,
          onMouseLeave: t
        } = e;
        return (0, n.jsx)(u.ChatAlertIcon, {
          size: "custom",
          width: 20,
          height: 20,
          onMouseEnter: l,
          onMouseLeave: t,
          color: d.Z.colors.TEXT_MUTED.css
        })
      }
    }), t && (0, n.jsx)(u.Tooltip, {
      "aria-label": k.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
      allowOverflow: !0,
      text: (0, n.jsxs)("div", {
        className: w.communicationDisabledTooltip,
        children: [(0, n.jsx)("div", {
          children: k.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
        }), (0, n.jsx)(I.Z, {
          deadline: a,
          showUnits: !0,
          stopAtOneSec: !0
        })]
      }),
      children: e => {
        let {
          onMouseEnter: l,
          onMouseLeave: t
        } = e;
        return (0, n.jsx)(u.ClockWarningIcon, {
          size: "custom",
          width: 20,
          height: 20,
          onMouseEnter: l,
          onMouseLeave: t,
          color: d.Z.colors.TEXT_DANGER.css
        })
      }
    }), (0, T.He)(l.userId) && (0, n.jsx)(u.Tooltip, {
      text: k.Z.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: l,
          onMouseLeave: t
        } = e;
        return (0, n.jsx)(N.Z, {
          width: 20,
          height: 20,
          onMouseEnter: l,
          onMouseLeave: t,
          color: d.Z.colors.TEXT_DANGER.css
        })
      }
    }), (0, M.EY)(l) && (0, n.jsx)(u.Tooltip, {
      text: k.Z.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: l,
          onMouseLeave: t
        } = e;
        return (0, n.jsx)(u.ChatXIcon, {
          size: "custom",
          width: 20,
          height: 20,
          onMouseEnter: l,
          onMouseLeave: t,
          color: d.Z.colors.TEXT_MUTED.css
        })
      }
    })]
  })
});

function P(e) {
  let {
    member: l
  } = e, t = (0, c.e7)([H.Z], () => H.Z.getRoles(l.guildId)), a = s.useMemo(() => null == l.highestRoleId ? l.roles : l.roles.filter(e => null != e && e !== l.highestRoleId).sort((e, l) => {
    var n, s, a, o;
    return null !== (o = null !== (a = null === (n = t[l]) || void 0 === n ? void 0 : n.position) && void 0 !== a ? a : 0 - (null === (s = t[e]) || void 0 === s ? void 0 : s.position)) && void 0 !== o ? o : 0
  }), [l.roles, l.highestRoleId, t]);
  return 0 === a.length ? null : (0, n.jsx)("div", {
    className: w.roleTooltipItemContainer,
    children: a.map(e => (0, n.jsx)(U.Z, {
      className: o()(w.roleTooltipItem),
      role: t[e],
      guildId: l.guildId
    }, e))
  })
}
let Y = s.memo(function(e) {
    let {
      member: l,
      highestRole: t
    } = e, a = (0, c.e7)([H.Z], () => H.Z.getGuild(l.guildId), [l.guildId]), [i, r] = s.useState(!1), C = l.roles.length - 1, d = s.useMemo(() => new Intl.NumberFormat(k.Z.getLocale()).format(C), [C]), E = (0, B.qr)(l), m = (0, c.e7)([g.Z], () => g.Z.can(F.Plq.MANAGE_ROLES, a), [a]), _ = s.useCallback(e => () => {
      r(!0), null == e || e()
    }, []), M = s.useCallback(e => () => {
      r(!1), null == e || e()
    }, []);
    return null == a ? null : (0, n.jsxs)("div", {
      className: o()(w.roleContainer),
      children: [null != t && (0, n.jsx)(U.Z, {
        className: o()(w.roleTooltipItem, w.highestRole),
        role: t,
        guildId: l.guildId
      }), C > 0 && (0, n.jsx)(u.Tooltip, {
        "aria-label": k.Z.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
        tooltipContentClassName: w.roleTooltip,
        allowOverflow: !0,
        text: (0, n.jsx)("div", {
          className: w.roleTooltipSafetyContainer,
          children: i ? (0, n.jsx)(P, {
            member: l
          }) : k.Z.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
        }),
        children: e => {
          let {
            onMouseEnter: l,
            onMouseLeave: t
          } = e;
          return (0, n.jsx)(u.Clickable, {
            className: o()(w.otherRoles),
            onMouseEnter: _(l),
            onMouseLeave: M(t),
            children: (0, n.jsxs)(u.Text, {
              variant: "text-xs/medium",
              color: "header-primary",
              children: ["+", d]
            })
          })
        }
      }), m && (0, n.jsx)(u.Tooltip, {
        text: k.Z.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
        children: e => {
          let {
            onMouseEnter: l,
            onMouseLeave: t
          } = e;
          return (0, n.jsx)(u.Clickable, {
            className: o()(w.otherRoles, w.addRoleContainer),
            onClick: E,
            onMouseEnter: l,
            onMouseLeave: t,
            children: (0, n.jsx)(u.PlusSmallIcon, {
              size: "custom",
              color: "currentColor",
              className: o()(w.addRoleIcon),
              width: 16,
              height: 16
            })
          })
        }
      })]
    })
  }),
  G = s.memo(function(e) {
    var l;
    let {
      member: t,
      user: a
    } = e, {
      analyticsLocations: i
    } = (0, _.ZP)(), r = s.useCallback(e => {
      if (null != t) e.stopPropagation(), e.preventDefault(), (0, B.RE)(t, i)
    }, [t, i]);
    return null == a || null == t ? null : (0, n.jsxs)("div", {
      className: o()(w.memberNameContainer),
      children: [(0, n.jsx)(u.Clickable, {
        className: o()(w.memberAvatar),
        onClick: r,
        children: (0, n.jsx)(E.Z, {
          user: a
        })
      }), (0, n.jsx)("div", {
        className: o()(w.memberName),
        children: (0, n.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: (0, n.jsx)(u.Clickable, {
            onClick: r,
            children: (0, n.jsx)(u.NameWithRole, {
              name: p.ZP.getName(t.guildId, null, a),
              color: null !== (l = t.colorString) && void 0 !== l ? l : void 0,
              className: o()(w.memberNameText)
            })
          })
        })
      }), (0, n.jsx)("div", {
        className: o()(w.memberGlobalName),
        children: (0, n.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          tag: "span",
          children: (0, n.jsx)(u.Clickable, {
            onClick: r,
            tag: "span",
            children: Z.ZP.getUserTag(a)
          })
        })
      })]
    })
  });

function z(e) {
  let l = null == e ? null : (0, j.fv)(e, j.jq.JOINED_AT);
  return {
    short: l,
    long: new Date(null != e ? e : 0).toLocaleDateString(k.Z.getLocale(), j.UG)
  }
}

function q(e) {
  let {
    member: l,
    showLongDate: t,
    isSortedBy: a
  } = e, [i, r] = s.useState(null);
  s.useEffect(() => {
    r(z(l.joinedAtTimestamp))
  }, [l.joinedAtTimestamp]), (0, m.Z)(() => {
    r(z(l.joinedAtTimestamp))
  }, 1e4);
  let C = a ? "text-brand" : "text-normal";
  return (null == i ? void 0 : i.short) == null ? null : t ? (0, n.jsx)("div", {
    className: o()(w.__invalid_joinedAtContainer),
    children: (0, n.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: C,
      children: i.long
    })
  }) : (0, n.jsx)("div", {
    className: o()(w.__invalid_joinedAtContainer),
    children: (0, n.jsx)(u.Tooltip, {
      align: "left",
      text: i.long,
      children: e => (0, n.jsx)(u.Text, {
        ...e,
        variant: "text-sm/medium",
        color: C,
        children: i.short
      })
    })
  })
}
let J = s.memo(function(e) {
    let {
      member: l,
      showLongDate: t,
      isSortedBy: a
    } = e, {
      accountCreationDateShort: o,
      accountCreationDateLong: i
    } = s.useMemo(() => {
      let e = S.default.extractTimestamp(l.userId),
        t = (0, j.fv)(e, j.jq.ACCOUNT_AGE);
      return {
        accountCreationDateShort: t,
        accountCreationDateLong: new Date(e).toLocaleDateString(k.Z.getLocale(), j.I)
      }
    }, [l.userId]), r = a ? "text-brand" : "text-normal";
    return t ? (0, n.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: r,
      children: i
    }) : (0, n.jsx)(u.Tooltip, {
      align: "left",
      text: i,
      children: e => (0, n.jsx)(u.Text, {
        ...e,
        variant: "text-sm/medium",
        color: r,
        children: o
      })
    })
  }),
  W = s.memo(function(e) {
    let {
      member: l,
      user: t,
      highestRole: a,
      isHoldingAdvancedInfoKey: i,
      onOpenModerationMenu: r,
      onOpenProfileMenu: d,
      compact: E
    } = e, m = (0, c.e7)([g.Z, H.Z], () => g.Z.can(F.Plq.MANAGE_GUILD, H.Z.getGuild(l.guildId)), [l.guildId]), {
      selectedUserIds: _,
      addUsers: M,
      removeUser: h
    } = (0, V.Z)(l.guildId), T = (0, f.xC)(l.guildId), L = (0, f.hB)(l.guildId, T, l.userId), A = (0, x.ms)(l.guildId), I = (0, c.e7)([D.Z], () => {
      var e;
      return null !== (e = D.Z.getSearchStateByGuildId(l.guildId).selectedSort) && void 0 !== e ? e : v.d$.ORDER_BY_UNSPECIFIED
    }, [l.guildId], C()), N = s.useCallback(e => {
      if (e.stopPropagation(), e.preventDefault(), null != l && !!L) _.has(l.userId) ? h(l.userId) : M([l.userId])
    }, [M, L, l, h, _]), p = I === v.d$.ORDER_BY_GUILD_JOINED_AT_ASC, S = I === v.d$.ORDER_BY_USER_ID_ASC || I === v.d$.ORDER_BY_USER_ID_DESC;
    return (0, n.jsxs)(n.Fragment, {
      children: [T && (0, n.jsx)(u.Tooltip, {
        tooltipClassName: w.disabledActionTooltip,
        shouldShow: !L,
        text: k.Z.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
        children: e => (0, n.jsx)("td", {
          ...e,
          children: (0, n.jsx)("div", {
            className: o()(w.__invalid_checkbox, w.xsmallCol),
            children: (0, n.jsx)(u.Clickable, {
              onClick: N,
              children: (0, n.jsx)(u.Checkbox, {
                type: u.Checkbox.Types.INVERTED,
                value: _.has(l.userId),
                disabled: !L
              })
            })
          })
        })
      }), (0, n.jsx)("td", {
        className: o()({
          [w.compact]: E
        }),
        children: (0, n.jsx)(G, {
          member: l,
          user: t
        })
      }), (0, n.jsx)("td", {
        className: o()(w.smallCol, {
          [w.compact]: E
        }),
        children: (0, n.jsx)(q, {
          showLongDate: i,
          member: l,
          isSortedBy: p
        })
      }), (0, n.jsx)("td", {
        className: o()(w.smallCol, {
          [w.compact]: E
        }),
        children: (0, n.jsx)(J, {
          showLongDate: i,
          member: l,
          isSortedBy: S
        })
      }), m && (0, n.jsx)("td", {
        className: o()(w.smallCol, {
          [w.compact]: E
        }),
        children: (0, n.jsx)(O.ZP, {
          userId: l.userId,
          guildId: l.guildId
        })
      }), (0, n.jsx)("td", {
        className: o()(w.mediumCol, {
          [w.compact]: E
        }),
        children: (0, n.jsx)(Y, {
          member: l,
          highestRole: a
        })
      }), (0, n.jsx)("td", {
        className: o()(w.smallCol, {
          [w.compact]: E
        }),
        children: (0, n.jsx)(y, {
          member: l
        })
      }), (0, n.jsx)("td", {
        className: o()(w.smallCol, {
          [w.compact]: E
        }),
        children: (0, n.jsxs)("div", {
          className: o()(w.actionCell),
          children: [(0, n.jsx)(u.Tooltip, {
            text: A ? k.Z.Messages.MEMBER_SAFETY_TABLE_MOD_VIEW_TOOLTIP : k.Z.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: l,
                onMouseLeave: t
              } = e;
              return (0, n.jsx)(u.Clickable, {
                onMouseEnter: l,
                onMouseLeave: t,
                onClick: d,
                className: o()(w.button),
                children: A ? (0, n.jsx)(R.Z, {
                  width: K,
                  height: K
                }) : (0, n.jsx)(u.UserIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: K,
                  height: K
                })
              })
            }
          }), (0, n.jsx)(u.Tooltip, {
            text: k.Z.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: l,
                onMouseLeave: t
              } = e;
              return (0, n.jsx)(u.Clickable, {
                onMouseEnter: l,
                onMouseLeave: t,
                onClick: r,
                className: o()(w.button),
                children: (0, n.jsx)(u.MoreVerticalIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: K,
                  height: K
                })
              })
            }
          })]
        })
      })]
    })
  }),
  K = 18,
  $ = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"];
l.Z = s.memo(function(e) {
  let {
    userId: l,
    guildId: t,
    style: a,
    onSelect: r,
    rowSelected: d,
    isLoading: u = !1,
    isHoldingAdvancedInfoKey: E = !1,
    compact: m = !1
  } = e, _ = (0, c.e7)([L.ZP], () => L.ZP.getGuildSidebarState(t), [t]), M = (null == _ ? void 0 : _.details.userId) === l, h = (0, c.e7)([D.Z], () => D.Z.getEnhancedMember(t, l), [t, l]), x = (0, B.zq)(h), T = (0, c.e7)([A.default], () => A.default.getUser(l), [l]), H = (0, B.RN)(null != h ? h : void 0), g = s.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), H(e)
  }, [H]), I = s.useCallback(e => {
    if (e.stopPropagation(), e.preventDefault(), null != h) null == r || r(h)
  }, [r, h]), N = s.useCallback(e => {
    if (e.stopPropagation(), e.preventDefault(), null != h) null == r || r(h)
  }, [h, r]), R = s.useCallback((e, l) => C()((0, i.omit)(e, $), (0, i.omit)(l, $)), []);
  return null == h ? null : (0, n.jsx)(b.Z, {
    role: "row",
    value: h,
    style: a,
    className: o()(w.roundedRow, w.memberRowContainer, d && w.selected, M && w.memberSelected, u && w.loading),
    equalityFn: R,
    onClick: I,
    onContextMenu: g,
    children: (0, n.jsx)(W, {
      member: h,
      user: T,
      highestRole: x,
      isHoldingAdvancedInfoKey: E,
      onOpenModerationMenu: g,
      onOpenProfileMenu: N,
      compact: m
    })
  })
})