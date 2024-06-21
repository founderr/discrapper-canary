n.d(t, {
  Z: function() {
    return j
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(920906),
  o = n(704215),
  c = n(481060),
  u = n(442837),
  d = n(410030),
  h = n(607070),
  m = n(645041),
  p = n(430824),
  E = n(914010),
  g = n(594174),
  f = n(626135),
  C = n(645896),
  _ = n(905362),
  I = n(603368),
  x = n(353093),
  T = n(940725),
  N = n(114487),
  Z = n(979264),
  S = n(981631),
  v = n(921944),
  A = n(689938),
  M = n(492120);

function R(e) {
  var t;
  let {
    guild: n,
    showToast: s,
    onConfirm: o,
    onDismiss: m
  } = e, [p, E] = i.useState(!1), f = i.useRef(null), _ = (0, C.Cc)(n.id), T = (0, d.ZP)(), S = (0, u.e7)([h.Z], () => h.Z.useReducedMotion), v = (0, I.nP)(null == _ ? void 0 : null === (t = _.branding) || void 0 === t ? void 0 : t.primaryColor, [c.tokens.colors.BG_BRAND, .5]), R = c.tokens.colors.BG_SURFACE_OVERLAY.resolve({
    theme: T,
    saturation: 1
  }).hex(), j = (0, I.nj)(v, R, "top left", .3, "30%"), L = (0, u.e7)([g.default], () => {
    var e;
    return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan
  }, []);
  i.useLayoutEffect(() => {
    var e;
    if (null == f.current) return;
    let t = null === (e = f.current) || void 0 === e ? void 0 : e.parentNode;
    return null != t && (t.style.zIndex = "1003"), () => {
      null != t && (t.style.zIndex = "1002")
    }
  }, []);
  let O = i.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), m()
    }, [m]),
    P = i.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), o()
    }, [o]),
    b = (0, r.useTransition)(s, {
      from: {
        transform: S ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1,
        pointerEvents: "all"
      },
      leave: {
        transform: S ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      config: {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
      },
      delay: 200
    }),
    y = (0, x.Zp)(n, L),
    D = y ? A.Z.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_TITLE.format({
      guildName: n.name
    }) : A.Z.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({
      guildName: n.name
    }),
    U = y ? A.Z.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_DESCRIPTION : A.Z.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION,
    k = y ? A.Z.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_ARIA_LABEL.format({
      guildName: n.name
    }) : A.Z.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({
      guildName: n.name
    });
  return b((e, t) => {
    var i, s;
    return t && (0, l.jsx)(r.animated.div, {
      onMouseEnter: () => E(!0),
      onMouseLeave: () => E(!1),
      className: a()(M.wrapper),
      style: {
        ...e,
        ...j
      },
      ref: f,
      children: (0, l.jsx)(c.ClickableContainer, {
        "aria-label": k,
        onClick: P,
        children: (0, l.jsxs)("div", {
          className: a()(M.toastContainerInner, p ? M.hovered : null),
          children: [(0, l.jsxs)("div", {
            className: M.guildIconContainer,
            children: [(0, l.jsx)(N.Z, {
              guild: n,
              iconSize: 64,
              className: M.icon
            }), (0, l.jsx)("div", {
              className: M.guildTagContainer,
              children: (0, l.jsx)(Z.aG, {
                guildId: n.id,
                clanTag: null === (i = n.clan) || void 0 === i ? void 0 : i.tag,
                clanBadge: null === (s = n.clan) || void 0 === s ? void 0 : s.badge,
                className: M.guildClanTag
              })
            })]
          }), (0, l.jsxs)("div", {
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(c.Heading, {
                variant: "heading-md/bold",
                color: "header-primary",
                children: D
              })
            }), (0, l.jsx)("div", {
              children: (0, l.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                children: U
              })
            })]
          }), (0, l.jsx)("div", {
            children: (0, l.jsx)(c.Clickable, {
              className: M.toastButton,
              onClick: O,
              children: (0, l.jsx)(c.CloseSmallBoldIcon, {
                size: "custom",
                width: 20,
                height: 20
              })
            })
          })]
        })
      })
    })
  })
}

function j(e) {
  let {} = e, t = (0, u.e7)([E.Z], () => E.Z.getGuildId()), n = (0, T.h)(t, "clan_tag_upsell_toast"), s = (0, u.e7)([p.Z], () => p.Z.getGuild(t), [t]), [a, r] = i.useState(!1), c = i.useRef(null);
  i.useEffect(() => (n && (c.current = window.setTimeout(() => {
    r(!0), f.default.track(S.rMx.DISMISSIBLE_CONTENT_SHOWN, {
      type: o.C[o.C.ADOPT_CLAN_IDENTITY_NOTICE],
      guild_id: null != t ? t : S.lds
    })
  }, 2500)), () => {
    null != c.current && window.clearTimeout(c.current)
  }), []);
  let d = i.useCallback(() => {
      if (r(!1), null != t)(0, _.S)(t)
    }, [, t]),
    h = i.useCallback(() => {
      if (r(!1), null != t)(0, m.Qd)(o.C.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : S.lds, !0, v.L.DISMISS)
    }, [t]);
  return n && null != t && null != s ? (0, l.jsx)(R, {
    guild: s,
    onConfirm: d,
    onDismiss: h,
    showToast: a
  }) : null
}