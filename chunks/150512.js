"use strict";
t.r(l), t.d(l, {
  default: function() {
    return _
  }
});
var a = t("735250"),
  n = t("470079"),
  s = t("120356"),
  i = t.n(s),
  d = t("866442"),
  r = t("399606"),
  u = t("481060"),
  o = t("749210"),
  c = t("410030"),
  f = t("607070"),
  m = t("603368"),
  h = t("484459"),
  g = t("318661"),
  x = t("721987"),
  C = t("502762"),
  v = t("430824"),
  I = t("594174"),
  S = t("551388"),
  N = t("5192"),
  j = t("51144"),
  p = t("228168"),
  E = t("465368");

function _(e) {
  let {
    guildId: l,
    welcomeMessage: t,
    className: s
  } = e, _ = (0, r.useStateFromStores)([v.default], () => v.default.getGuild(l)), M = (0, r.useStateFromStores)([f.default], () => f.default.useReducedMotion), b = (0, r.useStateFromStores)([I.default], () => I.default.getUser(null == t ? void 0 : t.authorIds[0])), A = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser()), T = (0, g.default)(null == b ? void 0 : b.id, l), {
    theme: H,
    primaryColor: R
  } = (0, x.default)({
    user: b,
    displayProfile: T
  }), L = (0, c.default)(), D = (0, u.useToken)(u.tokens.colors.BACKGROUND_SECONDARY, H).hex(), F = n.useMemo(() => {
    var e;
    return null !== (e = null == t ? void 0 : t.authorIds) && void 0 !== e ? e : []
  }, [t]);
  n.useEffect(() => {
    o.default.requestMembersById(l, F)
  }, [l, F]), n.useEffect(() => {
    null != b && (0, h.default)(b.id, b.getAvatarURL(l, 48), {
      guildId: l
    })
  }, [b, l]);
  let w = (0, j.useName)(A),
    G = null != R ? (0, d.int2rgba)(R, 1) : D,
    O = (0, m.getAccessibleTextColor)(G);
  if (null == b || null == A || null == t) return null;
  let y = null != _ && _.ownerId === b.id;
  return (0, a.jsx)("div", {
    className: i()(E.welcomeMessageContainer, s),
    children: (0, a.jsxs)(C.default, {
      className: E.welcomeMessageProfileContainer,
      user: b,
      displayProfile: T,
      profileType: p.UserProfileTypes.CARD,
      themeOverride: L,
      forceShowPremium: !0,
      children: [(0, a.jsx)("div", {
        className: E.avatarBackground
      }), M ? (0, a.jsx)(u.Avatar, {
        src: b.getAvatarURL(l, 48),
        size: u.AvatarSizes.SIZE_48,
        className: E.avatar,
        "aria-label": b.username
      }) : (0, a.jsx)(u.AnimatedAvatar, {
        src: b.getAvatarURL(l, 48),
        size: u.AvatarSizes.SIZE_48,
        className: E.avatar,
        "aria-label": b.username
      }), (0, a.jsx)("div", {
        className: E.avatarBorder,
        style: {
          backgroundColor: G
        }
      }), (0, a.jsxs)("div", {
        className: E.welcomeMessageContent,
        style: {
          color: O.hex()
        },
        children: [(0, a.jsxs)("div", {
          className: E.adminUsernameContainer,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "currentColor",
            children: N.default.getName(l, null, b)
          }), y ? (0, a.jsx)(S.default, {
            className: E.ownerIcon
          }) : null]
        }), (0, a.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: function(e, l) {
            let t = e.split(/\[@username\]/g);
            return (0, a.jsx)("span", {
              children: t.map((e, s) => (0, a.jsxs)(n.Fragment, {
                children: [e, s < t.length - 1 ? (0, a.jsx)(u.Text, {
                  tag: "span",
                  variant: "text-md/semibold",
                  children: "@".concat(l)
                }) : null]
              }, "username-".concat(s)))
            })
          }(null == t ? void 0 : t.message, null != w ? w : A.username)
        })]
      })]
    })
  })
}