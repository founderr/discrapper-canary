n.d(t, {
  Z: function() {
    return M
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(913527),
  o = n.n(r),
  c = n(399606),
  u = n(481060),
  d = n(480137),
  h = n(906732),
  m = n(884737),
  E = n(376923),
  p = n(472596),
  g = n(987707),
  f = n(501801),
  C = n(271383),
  _ = n(430824),
  I = n(274730),
  x = n(5192),
  T = n(776767),
  N = n(689938),
  Z = n(361163),
  S = n(130081),
  v = n(332513);

function A(e) {
  let {
    log: t,
    member: n,
    guild: s
  } = e, {
    analyticsLocations: r
  } = (0, h.ZP)(), d = m.nm(t), g = m.QM(t), _ = m.of(t), I = m.J5(t), T = (0, E.LJ)(t.id), v = (0, c.e7)([C.ZP], () => null != t.userId ? C.ZP.getMember(n.guildId, t.userId) : null, [n.guildId, t.userId]), A = i.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, p.RE)(e, r)
  }, [r]), M = i.useCallback(() => null == t.user ? null : (0, l.jsx)(u.Tooltip, {
    text: N.Z.Messages.GUILD_MEMBER_MOD_VIEW_AUDIT_LOG_SOURCE_USER,
    children: e => {
      var i;
      let {
        onMouseEnter: s,
        onMouseLeave: r
      } = e;
      return (0, l.jsx)(u.Clickable, {
        tag: "span",
        className: Z.username,
        onClick: A(v),
        onMouseEnter: s,
        onMouseLeave: r,
        children: (0, l.jsxs)(u.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, l.jsx)(u.NameWithRole, {
            name: x.ZP.getName(n.guildId, null, t.user),
            color: null !== (i = null == v ? void 0 : v.colorString) && void 0 !== i ? i : void 0,
            className: a()(Z.__invalid_memberNameText)
          })]
        })
      })
    }
  }), [A, t.user, n.guildId, v])();
  return (0, l.jsxs)("div", {
    className: a()(S.modInfoItem, Z.auditLogItem),
    children: [(0, l.jsxs)("div", {
      className: Z.auditLogItemTitleContainer,
      children: [(0, l.jsxs)("div", {
        className: Z.auditLogItemTitle,
        children: [null != d && (0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: d
        }), null != g && (0, l.jsxs)(u.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof g ? g : o()(g).fromNow(), ")"]
        })]
      }), (0, l.jsx)("div", {
        className: Z.auditLogItemDate,
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: T
        })
      })]
    }), null != _ && (0, l.jsx)("div", {
      className: Z.auditLogSecondaryContainer,
      children: (0, l.jsxs)("div", {
        className: Z.auditLogReason,
        children: [M, (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: _
        })]
      })
    }), null == _ && null != I && (0, l.jsx)("div", {
      className: Z.auditLogSecondaryContainer,
      children: (0, l.jsxs)("div", {
        className: Z.auditLogSecondary,
        children: [M, (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: I
        })]
      })
    }), null == _ && null == I && (0, l.jsx)("div", {
      className: Z.auditLogSecondaryContainer,
      children: (0, l.jsx)("div", {
        className: Z.auditLogSecondary,
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, l.jsx)(f.tP, {
            log: t,
            guild: s,
            onContentClick: () => {},
            className: Z.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function M(e) {
  let {
    member: t
  } = e, n = (0, c.e7)([_.Z], () => _.Z.getGuild(t.guildId), [t.guildId]), s = (0, c.e7)([g.Z], () => {
    let e = g.Z.logs;
    return null == e || null == n ? [] : I._$(e, n)
  }, [n]);
  return (i.useEffect(() => {
    (async function e(e, t) {
      await d.gV(t, e)
    })(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === s.length) ? null : (0, l.jsx)("div", {
    className: a()(v.__invalid_safetySignalsMainContainer),
    children: (0, l.jsx)(u.FormItem, {
      title: N.Z.Messages.GUILD_MEMBER_MOD_VIEW_RECENT_AUDIT_LOG,
      titleClassName: v.infoTitle,
      children: s.length > 0 ? (0, l.jsx)(T.WM, {
        children: s.map(e => (0, l.jsx)(A, {
          log: e,
          member: t,
          guild: n
        }, e.id))
      }) : null
    })
  })
}