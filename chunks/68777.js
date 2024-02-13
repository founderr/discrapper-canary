"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("866227"),
  o = n.n(r),
  u = n("65597"),
  d = n("77078"),
  c = n("252073"),
  f = n("309021"),
  h = n("917397"),
  m = n("553275"),
  p = n("287103"),
  E = n("817343"),
  S = n("26989"),
  g = n("305961"),
  C = n("987663"),
  _ = n("387111"),
  I = n("136281"),
  T = n("782340"),
  v = n("954333"),
  x = n("558595"),
  N = n("63893");

function A(e) {
  let {
    log: t,
    member: n,
    guild: s
  } = e, r = f.getSimpleAuditLogTitleFromChange(t), c = f.getSimpleAuditLogTitleContextFromChange(t), p = f.getStringForBanReason(t), g = f.getSimpleAuditLogChangeDetails(t), C = (0, h.useAuditLogDate)(t.id), I = (0, u.default)([S.default], () => null != t.userId ? S.default.getMember(n.guildId, t.userId) : null, [n.guildId, t.userId]), N = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, m.openMemberProfile)(e)
  }, []), A = l.useCallback(() => null == t.user ? null : (0, a.jsx)(d.Tooltip, {
    text: T.default.Messages.GUILD_MEMBER_MOD_VIEW_AUDIT_LOG_SOURCE_USER,
    children: e => {
      var l;
      let {
        onMouseEnter: s,
        onMouseLeave: r
      } = e;
      return (0, a.jsx)(d.Clickable, {
        tag: "span",
        className: v.username,
        onClick: N(I),
        onMouseEnter: s,
        onMouseLeave: r,
        children: (0, a.jsxs)(d.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, a.jsx)(d.NameWithRole, {
            name: _.default.getName(n.guildId, null, t.user),
            color: null !== (l = null == I ? void 0 : I.colorString) && void 0 !== l ? l : void 0,
            className: i(v.memberNameText)
          })]
        })
      })
    }
  }), [N, t.user, n.guildId, I]), M = A();
  return (0, a.jsxs)("div", {
    className: i(x.modInfoItem, v.auditLogItem),
    children: [(0, a.jsxs)("div", {
      className: v.auditLogItemTitleContainer,
      children: [(0, a.jsxs)("div", {
        className: v.auditLogItemTitle,
        children: [null != r && (0, a.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: r
        }), null != c && (0, a.jsxs)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof c ? c : o(c).fromNow(), ")"]
        })]
      }), (0, a.jsx)("div", {
        className: v.auditLogItemDate,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: C
        })
      })]
    }), null != p && (0, a.jsx)("div", {
      className: v.auditLogSecondaryContainer,
      children: (0, a.jsxs)("div", {
        className: v.auditLogReason,
        children: [M, (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: p
        })]
      })
    }), null == p && null != g && (0, a.jsx)("div", {
      className: v.auditLogSecondaryContainer,
      children: (0, a.jsxs)("div", {
        className: v.auditLogSecondary,
        children: [M, (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: g
        })]
      })
    }), null == p && null == g && (0, a.jsx)("div", {
      className: v.auditLogSecondaryContainer,
      children: (0, a.jsx)("div", {
        className: v.auditLogSecondary,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, a.jsx)(E.AuditLogExpandedChangeDetails, {
            log: t,
            guild: s,
            onContentClick: () => {},
            className: v.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function M(e) {
  let {
    member: t
  } = e, n = (0, u.default)([g.default], () => g.default.getGuild(t.guildId), [t.guildId]), s = (0, u.default)([p.default], () => {
    let e = p.default.logs;
    return null == e || null == n ? [] : C.transformLogs(e, n)
  }, [n]);
  return (l.useEffect(() => {
    (async function e(e, t) {
      await c.filterByTargetId(t, e)
    })(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === s.length) ? null : (0, a.jsx)("div", {
    className: i(N.safetySignalsMainContainer),
    children: (0, a.jsx)(d.FormItem, {
      title: T.default.Messages.GUILD_MEMBER_MOD_VIEW_RECENT_AUDIT_LOG,
      titleClassName: N.infoTitle,
      children: s.length > 0 ? (0, a.jsx)(I.UserModInfoItemContainer, {
        children: s.map(e => (0, a.jsx)(A, {
          log: e,
          member: t,
          guild: n
        }, e.id))
      }) : null
    })
  })
}