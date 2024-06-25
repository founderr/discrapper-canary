"use strict";
n.d(t, {
  KQ: function() {
    return f
  },
  aG: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(594174),
  _ = n(645896),
  c = n(353093),
  d = n(954138),
  E = n(426964),
  I = n(308083),
  T = n(689938),
  h = n(388949);
let f = r.memo(function(e) {
    let {
      src: t,
      tag: n,
      className: r,
      size: s = I.NC.SIZE_16
    } = e;
    return null == t ? null : (0, i.jsx)("img", {
      src: t,
      alt: T.Z.Messages.CLAN_BADGE_ALT.format({
        tag: n
      }),
      className: o()(h.badge, r),
      width: s,
      height: s
    })
  }),
  S = r.memo(function(e) {
    let {
      guildId: t,
      clanTag: n,
      clanBadge: r,
      className: s,
      textClassName: a,
      badgeClassName: u,
      onClick: _,
      onMouseEnter: E,
      textVariant: T = "text-xs/semibold",
      textColor: S = "text-normal",
      badgeSize: A = I.NC.SIZE_12,
      inline: N = !0
    } = e;
    return (0, d.Z)("base_clan_tag_chiplet") ? (0, i.jsx)(l.Clickable, {
      tag: "span",
      tabIndex: null == _ ? -1 : void 0,
      onClick: _,
      onMouseEnter: E,
      className: o()(h.chipletContainerInner, N && h.chipletContainerInline, null != _ && h.clickable, s),
      children: (0, i.jsxs)(l.Text, {
        variant: T,
        color: S,
        tag: "span",
        className: o()(h.text, a),
        children: [null != r && "string" == typeof r ? (0, i.jsx)(f, {
          src: (0, c.ky)(t, r, A),
          tag: null == n ? void 0 : n.toString(),
          size: A,
          className: u
        }) : r, (0, i.jsx)("span", {
          className: h.unselectable,
          children: n
        })]
      })
    }) : null
  }),
  A = r.memo(function(e) {
    var t, n;
    let {
      clan: s,
      userId: o,
      children: c,
      profileViewedAnalytics: d
    } = e, I = (0, a.e7)([u.default], () => u.default.getUser(o), [o]), T = null !== (t = null == I ? void 0 : I.clan) && void 0 !== t ? t : s, [f, S] = (0, _.L_)(null !== (n = null == T ? void 0 : T.identityGuildId) && void 0 !== n ? n : null), A = r.useCallback(() => {
      S()
    }, [S]);
    return (0, i.jsx)(l.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(E.Z, {
          isLoading: f,
          clan: T,
          onClose: t,
          profileViewedAnalytics: d
        })
      },
      position: "top",
      animationPosition: "top",
      spacing: 16,
      children: e => (0, i.jsx)(l.Clickable, {
        className: h.clickable,
        tag: "span",
        ...e,
        onClick: t => {
          var n;
          null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation()
        },
        onMouseEnter: () => {
          var t;
          A(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        children: c
      })
    })
  });
t.ZP = r.memo(function(e) {
  var t;
  let {
    clan: n,
    userId: r,
    contextGuildId: s,
    className: l,
    textVariant: _,
    textColor: d,
    badgeSize: E,
    disableGuildProfile: I = !1,
    inline: T = !0,
    profileViewedAnalytics: f
  } = e, N = (0, a.e7)([u.default], () => u.default.getUser(r), [r]), m = null !== (t = null == N ? void 0 : N.clan) && void 0 !== t ? t : n, {
    tag: O,
    badge: p,
    guildId: R
  } = (0, c.vh)(m);
  return (0, c.p0)(r, s) && null != R ? I ? (0, i.jsx)(S, {
    guildId: R,
    clanTag: O,
    clanBadge: p,
    className: o()(h.noTooltip, l),
    textVariant: _,
    textColor: d,
    badgeSize: E,
    inline: T
  }) : (0, i.jsx)(A, {
    clan: m,
    userId: r,
    profileViewedAnalytics: f,
    children: (0, i.jsx)(S, {
      guildId: R,
      clanTag: O,
      clanBadge: p,
      className: l,
      textVariant: _,
      textColor: d,
      badgeSize: E,
      inline: T
    })
  }) : null
})