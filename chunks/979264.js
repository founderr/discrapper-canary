"use strict";
n.r(t), n.d(t, {
  BaseClanTagChiplet: function() {
    return N
  },
  ClanTagBadge: function() {
    return m
  },
  useShouldDisplayClanTag: function() {
    return O
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("607070"),
  d = n("715903"),
  _ = n("271383"),
  c = n("594174"),
  E = n("645896"),
  I = n("353093"),
  T = n("954138"),
  f = n("426964"),
  S = n("308083"),
  h = n("689938"),
  A = n("53408");
let m = r.memo(function(e) {
    let {
      src: t,
      tag: n,
      className: r,
      size: s = S.ClanTagBadgeSize.SIZE_16
    } = e;
    return null == t ? null : (0, i.jsx)("img", {
      src: t,
      alt: h.default.Messages.CLAN_BADGE_ALT.format({
        tag: n
      }),
      className: a()(A.badge, r),
      width: s,
      height: s
    })
  }),
  N = r.memo(function(e) {
    let {
      guildId: t,
      clanTag: n,
      clanBadge: r,
      className: s,
      textClassName: o,
      badgeClassName: u,
      onClick: d,
      onMouseEnter: _,
      textVariant: c = "text-xs/medium",
      textColor: E = "text-normal",
      badgeSize: f = S.ClanTagBadgeSize.SIZE_12,
      inline: h = !0
    } = e;
    return (0, T.default)("base_clan_tag_chiplet") ? (0, i.jsx)(l.Clickable, {
      tag: "span",
      tabIndex: null == d ? -1 : void 0,
      onClick: d,
      onMouseEnter: _,
      className: a()(A.chipletContainerInner, h && A.chipletContainerInline, null != d && A.clickable, s),
      children: (0, i.jsxs)(l.Text, {
        variant: c,
        color: E,
        tag: "span",
        className: a()(A.text, o),
        children: [null != r && "string" == typeof r ? (0, i.jsx)(m, {
          src: (0, I.getClanBadgeUrl)(t, r, f),
          tag: null == n ? void 0 : n.toString(),
          size: f,
          className: u
        }) : r, (0, i.jsx)("span", {
          className: A.unselectable,
          children: n
        })]
      })
    }) : null
  }),
  p = r.memo(function(e) {
    var t, n;
    let {
      clan: s,
      userId: a,
      children: u,
      profileViewedAnalytics: d
    } = e, _ = (0, o.useStateFromStores)([c.default], () => c.default.getUser(a), [a]), I = null !== (t = null == _ ? void 0 : _.clan) && void 0 !== t ? t : s, [T, S] = (0, E.useFetchClanInfo)(null !== (n = null == I ? void 0 : I.identityGuildId) && void 0 !== n ? n : null), h = r.useCallback(() => {
      S()
    }, [S]);
    return (0, i.jsx)(l.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(f.default, {
          isLoading: T,
          clan: I,
          onClose: t,
          profileViewedAnalytics: d
        })
      },
      position: "top",
      animationPosition: "top",
      spacing: 16,
      children: e => (0, i.jsx)(l.Clickable, {
        className: A.clickable,
        tag: "span",
        ...e,
        onClick: t => {
          var n;
          null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation()
        },
        onMouseEnter: () => {
          var t;
          h(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        children: u
      })
    })
  });

function O(e, t) {
  let n = (0, o.useStateFromStores)([u.default], () => u.default.hideTags),
    i = (0, o.useStateFromStores)([c.default], () => c.default.getUser(e), [e]),
    r = (0, o.useStateFromStores)([_.default], () => {
      if (null == t || null == e) return null;
      let n = _.default.getMember(t, e);
      return (0, d.hasAutomodQuarantinedProfile)(n)
    }, [t, e]),
    {
      tag: s,
      guildId: a
    } = (0, I.getUserClanData)(null == i ? void 0 : i.clan),
    l = (0, T.default)("clan_tag_chiplet");
  return !n && !!l && null != a && null != s && !r && !0
}
t.default = r.memo(function(e) {
  var t;
  let {
    clan: n,
    userId: r,
    contextGuildId: s,
    className: l,
    textVariant: u,
    textColor: d,
    badgeSize: _,
    disableGuildProfile: E = !1,
    inline: T = !0,
    profileViewedAnalytics: f
  } = e, S = (0, o.useStateFromStores)([c.default], () => c.default.getUser(r), [r]), h = null !== (t = null == S ? void 0 : S.clan) && void 0 !== t ? t : n, {
    tag: m,
    badge: C,
    guildId: R
  } = (0, I.getUserClanData)(h);
  return O(r, s) && null != R ? E ? (0, i.jsx)(N, {
    guildId: R,
    clanTag: m,
    clanBadge: C,
    className: a()(A.noTooltip, l),
    textVariant: u,
    textColor: d,
    badgeSize: _,
    inline: T
  }) : (0, i.jsx)(p, {
    clan: h,
    userId: r,
    profileViewedAnalytics: f,
    children: (0, i.jsx)(N, {
      guildId: R,
      clanTag: m,
      clanBadge: C,
      className: l,
      textVariant: u,
      textColor: d,
      badgeSize: _,
      inline: T
    })
  }) : null
})