"use strict";
n.r(t), n.d(t, {
  BaseClanTagChiplet: function() {
    return h
  },
  ClanTagBadge: function() {
    return S
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("594174"),
  d = n("645896"),
  _ = n("353093"),
  c = n("954138"),
  E = n("426964"),
  I = n("308083"),
  T = n("689938"),
  f = n("53408");
let S = r.memo(function(e) {
    let {
      src: t,
      tag: n,
      className: r,
      size: s = I.ClanTagBadgeSize.SIZE_16
    } = e;
    return null == t ? null : (0, i.jsx)("img", {
      src: t,
      alt: T.default.Messages.CLAN_BADGE_ALT.format({
        tag: n
      }),
      className: a()(f.badge, r),
      width: s,
      height: s
    })
  }),
  h = r.memo(function(e) {
    let {
      guildId: t,
      clanTag: n,
      clanBadge: r,
      className: s,
      textClassName: o,
      badgeClassName: u,
      onClick: d,
      onMouseEnter: E,
      textVariant: T = "text-xs/semibold",
      textColor: h = "text-normal",
      badgeSize: A = I.ClanTagBadgeSize.SIZE_12,
      inline: m = !0
    } = e;
    return (0, c.default)("base_clan_tag_chiplet") ? (0, i.jsx)(l.Clickable, {
      tag: "span",
      tabIndex: null == d ? -1 : void 0,
      onClick: d,
      onMouseEnter: E,
      className: a()(f.chipletContainerInner, m && f.chipletContainerInline, null != d && f.clickable, s),
      children: (0, i.jsxs)(l.Text, {
        variant: T,
        color: h,
        tag: "span",
        className: a()(f.text, o),
        children: [null != r && "string" == typeof r ? (0, i.jsx)(S, {
          src: (0, _.getClanBadgeUrl)(t, r, A),
          tag: null == n ? void 0 : n.toString(),
          size: A,
          className: u
        }) : r, (0, i.jsx)("span", {
          className: f.unselectable,
          children: n
        })]
      })
    }) : null
  }),
  A = r.memo(function(e) {
    var t, n;
    let {
      clan: s,
      userId: a,
      children: _,
      profileViewedAnalytics: c
    } = e, I = (0, o.useStateFromStores)([u.default], () => u.default.getUser(a), [a]), T = null !== (t = null == I ? void 0 : I.clan) && void 0 !== t ? t : s, [S, h] = (0, d.useFetchClanInfo)(null !== (n = null == T ? void 0 : T.identityGuildId) && void 0 !== n ? n : null), A = r.useCallback(() => {
      h()
    }, [h]);
    return (0, i.jsx)(l.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(E.default, {
          isLoading: S,
          clan: T,
          onClose: t,
          profileViewedAnalytics: c
        })
      },
      position: "top",
      animationPosition: "top",
      spacing: 16,
      children: e => (0, i.jsx)(l.Clickable, {
        className: f.clickable,
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
        children: _
      })
    })
  });
t.default = r.memo(function(e) {
  var t;
  let {
    clan: n,
    userId: r,
    contextGuildId: s,
    className: l,
    textVariant: d,
    textColor: c,
    badgeSize: E,
    disableGuildProfile: I = !1,
    inline: T = !0,
    profileViewedAnalytics: S
  } = e, m = (0, o.useStateFromStores)([u.default], () => u.default.getUser(r), [r]), N = null !== (t = null == m ? void 0 : m.clan) && void 0 !== t ? t : n, {
    tag: p,
    badge: O,
    guildId: C
  } = (0, _.getUserClanData)(N);
  return (0, _.useShouldDisplayClanTag)(r, s) && null != C ? I ? (0, i.jsx)(h, {
    guildId: C,
    clanTag: p,
    clanBadge: O,
    className: a()(f.noTooltip, l),
    textVariant: d,
    textColor: c,
    badgeSize: E,
    inline: T
  }) : (0, i.jsx)(A, {
    clan: N,
    userId: r,
    profileViewedAnalytics: S,
    children: (0, i.jsx)(h, {
      guildId: C,
      clanTag: p,
      clanBadge: O,
      className: l,
      textVariant: d,
      textColor: c,
      badgeSize: E,
      inline: T
    })
  }) : null
})