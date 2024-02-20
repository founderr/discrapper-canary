"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("509043"),
  d = n("65597"),
  o = n("77078"),
  u = n("851387"),
  c = n("841098"),
  N = n("206230"),
  _ = n("388491"),
  I = n("506885"),
  E = n("217513"),
  f = n("528438"),
  O = n("430312"),
  S = n("305961"),
  T = n("697218"),
  m = n("928201"),
  D = n("387111"),
  A = n("158998"),
  g = n("590456"),
  G = n("345696");

function h(e) {
  var t;
  let {
    guildId: n,
    welcomeMessage: s,
    className: h
  } = e, L = (0, c.default)(), R = (0, d.default)([S.default], () => S.default.getGuild(n)), p = (0, d.default)([N.default], () => N.default.syncProfileThemeWithUserTheme), x = (0, d.default)([N.default], () => N.default.useReducedMotion), P = (0, d.default)([T.default], () => T.default.getUser(null == s ? void 0 : s.authorIds[0])), M = (0, d.default)([T.default], () => T.default.getCurrentUser()), v = (0, E.default)(null == P ? void 0 : P.id, n), [U] = (0, f.default)(P, v), C = p ? L : null !== (t = (0, _.getProfileTheme)(U)) && void 0 !== t ? t : L, B = (0, o.useToken)(o.tokens.colors.BACKGROUND_SECONDARY, C).hex(), j = l.useMemo(() => {
    var e;
    return null !== (e = null == s ? void 0 : s.authorIds) && void 0 !== e ? e : []
  }, [s]);
  l.useEffect(() => {
    u.default.requestMembersById(n, j)
  }, [n, j]), l.useEffect(() => {
    null != P && (0, I.default)(P.id, P.getAvatarURL(n, 48), {
      guildId: n
    })
  }, [P, n]);
  let b = (0, A.useName)(M);
  if (null == P || null == M || null == s) return null;
  let w = null != R && R.ownerId === P.id;
  return (0, a.jsx)("div", {
    className: i(G.welcomeMessageContainer, h),
    children: (0, a.jsxs)(O.default, {
      className: G.welcomeMessageProfileContainer,
      user: P,
      guildId: n,
      profileType: g.UserProfileTypes.CARD,
      forceShowPremium: !0,
      useDefaultClientTheme: !0,
      children: [(0, a.jsx)("div", {
        className: G.avatarBackground
      }), x ? (0, a.jsx)(o.Avatar, {
        src: P.getAvatarURL(n, 48),
        size: o.AvatarSizes.SIZE_48,
        className: G.avatar,
        "aria-label": P.username
      }) : (0, a.jsx)(o.AnimatedAvatar, {
        src: P.getAvatarURL(n, 48),
        size: o.AvatarSizes.SIZE_48,
        className: G.avatar,
        "aria-label": P.username
      }), (0, a.jsx)("div", {
        className: G.avatarBorder,
        style: {
          backgroundColor: null != U ? (0, r.int2rgba)(U, 1) : B
        }
      }), (0, a.jsxs)("div", {
        className: G.welcomeMessageContent,
        children: [(0, a.jsxs)("div", {
          className: G.adminUsernameContainer,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/semibold",
            children: D.default.getName(n, null, P)
          }), w ? (0, a.jsx)(m.default, {
            className: G.ownerIcon
          }) : null]
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
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
          }(null == s ? void 0 : s.message, null != b ? b : M.username)
        })]
      })]
    })
  })
}