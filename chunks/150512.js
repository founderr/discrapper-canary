l.d(n, {
  Z: function() {
    return E
  }
});
var a = l(735250),
  i = l(470079),
  s = l(120356),
  r = l.n(s),
  t = l(866442),
  d = l(399606),
  c = l(481060),
  o = l(749210),
  u = l(410030),
  h = l(607070),
  m = l(603368),
  g = l(484459),
  x = l(318661),
  Z = l(721987),
  C = l(502762),
  v = l(430824),
  f = l(594174),
  I = l(5192),
  j = l(51144),
  N = l(228168),
  p = l(448147);

function E(e) {
  let {
    guildId: n,
    welcomeMessage: l,
    className: s
  } = e, E = (0, d.e7)([v.Z], () => v.Z.getGuild(n)), _ = (0, d.e7)([h.Z], () => h.Z.useReducedMotion), b = (0, d.e7)([f.default], () => f.default.getUser(null == l ? void 0 : l.authorIds[0])), M = (0, d.e7)([f.default], () => f.default.getCurrentUser()), A = (0, x.ZP)(null == b ? void 0 : b.id, n), {
    theme: S,
    primaryColor: T
  } = (0, Z.Z)({
    user: b,
    displayProfile: A
  }), R = (0, u.ZP)(), P = (0, c.useToken)(c.tokens.colors.BACKGROUND_SECONDARY, S).hex(), L = i.useMemo(() => {
    var e;
    return null !== (e = null == l ? void 0 : l.authorIds) && void 0 !== e ? e : []
  }, [l]);
  i.useEffect(() => {
    o.Z.requestMembersById(n, L)
  }, [n, L]), i.useEffect(() => {
    null != b && (0, g.Z)(b.id, b.getAvatarURL(n, 48), {
      guildId: n
    })
  }, [b, n]);
  let H = (0, j._T)(M),
    y = null != T ? (0, t.br)(T, 1) : P,
    D = (0, m.$0)(y);
  if (null == b || null == M || null == l) return null;
  let k = null != E && E.ownerId === b.id;
  return (0, a.jsx)("div", {
    className: r()(p.welcomeMessageContainer, s),
    children: (0, a.jsxs)(C.Z, {
      className: p.welcomeMessageProfileContainer,
      user: b,
      displayProfile: A,
      profileType: N.y0.CARD,
      themeOverride: R,
      forceShowPremium: !0,
      children: [(0, a.jsx)("div", {
        className: p.avatarBackground
      }), _ ? (0, a.jsx)(c.Avatar, {
        src: b.getAvatarURL(n, 48),
        size: c.AvatarSizes.SIZE_48,
        className: p.avatar,
        "aria-label": b.username
      }) : (0, a.jsx)(c.AnimatedAvatar, {
        src: b.getAvatarURL(n, 48),
        size: c.AvatarSizes.SIZE_48,
        className: p.avatar,
        "aria-label": b.username
      }), (0, a.jsx)("div", {
        className: p.avatarBorder,
        style: {
          backgroundColor: y
        }
      }), (0, a.jsxs)("div", {
        className: p.welcomeMessageContent,
        style: {
          color: D.hex()
        },
        children: [(0, a.jsxs)("div", {
          className: p.adminUsernameContainer,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "currentColor",
            children: I.ZP.getName(n, null, b)
          }), k ? (0, a.jsx)(c.CrownIcon, {
            size: "md",
            color: "currentColor",
            className: p.ownerIcon
          }) : null]
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: function(e, n) {
            let l = e.split(/\[@username\]/g);
            return (0, a.jsx)("span", {
              children: l.map((e, s) => (0, a.jsxs)(i.Fragment, {
                children: [e, s < l.length - 1 ? (0, a.jsx)(c.Text, {
                  tag: "span",
                  variant: "text-md/semibold",
                  children: "@".concat(n)
                }) : null]
              }, "username-".concat(s)))
            })
          }(null == l ? void 0 : l.message, null != H ? H : M.username)
        })]
      })]
    })
  })
}