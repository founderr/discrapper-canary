"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("866442"),
  d = n("399606"),
  o = n("481060"),
  u = n("749210"),
  c = n("410030"),
  N = n("607070"),
  _ = n("603368"),
  I = n("484459"),
  E = n("318661"),
  O = n("721987"),
  f = n("502762"),
  S = n("430824"),
  T = n("594174"),
  m = n("551388"),
  D = n("5192"),
  A = n("51144"),
  g = n("228168"),
  G = n("465368");

function h(e) {
  let {
    guildId: t,
    welcomeMessage: n,
    className: s
  } = e, h = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(t)), L = (0, d.useStateFromStores)([N.default], () => N.default.useReducedMotion), R = (0, d.useStateFromStores)([T.default], () => T.default.getUser(null == n ? void 0 : n.authorIds[0])), p = (0, d.useStateFromStores)([T.default], () => T.default.getCurrentUser()), x = (0, E.default)(null == R ? void 0 : R.id, t), {
    theme: P,
    primaryColor: M
  } = (0, O.default)({
    user: R,
    displayProfile: x
  }), U = (0, c.default)(), v = (0, o.useToken)(o.tokens.colors.BACKGROUND_SECONDARY, P).hex(), C = l.useMemo(() => {
    var e;
    return null !== (e = null == n ? void 0 : n.authorIds) && void 0 !== e ? e : []
  }, [n]);
  l.useEffect(() => {
    u.default.requestMembersById(t, C)
  }, [t, C]), l.useEffect(() => {
    null != R && (0, I.default)(R.id, R.getAvatarURL(t, 48), {
      guildId: t
    })
  }, [R, t]);
  let B = (0, A.useName)(p),
    b = null != M ? (0, r.int2rgba)(M, 1) : v,
    j = (0, _.getAccessibleTextColor)(b);
  if (null == R || null == p || null == n) return null;
  let w = null != h && h.ownerId === R.id;
  return (0, a.jsx)("div", {
    className: i()(G.welcomeMessageContainer, s),
    children: (0, a.jsxs)(f.default, {
      className: G.welcomeMessageProfileContainer,
      user: R,
      displayProfile: x,
      profileType: g.UserProfileTypes.CARD,
      themeOverride: U,
      forceShowPremium: !0,
      children: [(0, a.jsx)("div", {
        className: G.avatarBackground
      }), L ? (0, a.jsx)(o.Avatar, {
        src: R.getAvatarURL(t, 48),
        size: o.AvatarSizes.SIZE_48,
        className: G.avatar,
        "aria-label": R.username
      }) : (0, a.jsx)(o.AnimatedAvatar, {
        src: R.getAvatarURL(t, 48),
        size: o.AvatarSizes.SIZE_48,
        className: G.avatar,
        "aria-label": R.username
      }), (0, a.jsx)("div", {
        className: G.avatarBorder,
        style: {
          backgroundColor: b
        }
      }), (0, a.jsxs)("div", {
        className: G.welcomeMessageContent,
        style: {
          color: j.hex()
        },
        children: [(0, a.jsxs)("div", {
          className: G.adminUsernameContainer,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "currentColor",
            children: D.default.getName(t, null, R)
          }), w ? (0, a.jsx)(m.default, {
            className: G.ownerIcon
          }) : null]
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: function(e, t) {
            let n = e.split(/\[@username\]/g);
            return (0, a.jsx)("span", {
              children: n.map((e, l) => (0, a.jsxs)(a.Fragment, {
                children: [e, l < n.length - 1 ? (0, a.jsx)(o.Text, {
                  tag: "span",
                  variant: "text-md/semibold",
                  children: "@".concat(t)
                }) : null]
              }))
            })
          }(null == n ? void 0 : n.message, null != B ? B : p.username)
        })]
      })]
    })
  })
}