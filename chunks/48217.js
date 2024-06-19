n.d(t, {
  c: function() {
    return N
  }
});
var o = n(735250);
n(470079);
var i = n(481060),
  s = n(269128),
  a = n(358555),
  l = n(267642),
  r = n(26323),
  c = n(30513),
  u = n(981631),
  d = n(689938),
  E = n(342864);

function _(e) {
  let {
    guild: t,
    banner: n
  } = e;
  return (0, o.jsx)("div", {
    className: E.guildBanner,
    style: {
      backgroundImage: "url(".concat(n)
    },
    children: (0, o.jsxs)("div", {
      className: E.guildHeader,
      children: [(0, o.jsx)(a.Z, {
        guild: t,
        isBannerVisible: !0
      }), (0, o.jsx)(i.Heading, {
        className: E.guildName,
        variant: "heading-md/semibold",
        children: t.toString()
      }), (0, o.jsx)(s.Z, {
        className: E.dropdown,
        open: !1
      })]
    })
  })
}

function N(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    guild: i,
    isGIF: s,
    banner: a
  } = e, E = s ? (0, l._p)(u.oNc.ANIMATED_BANNER) : (0, l._p)(u.oNc.BANNER);
  null != E && (0, r.Z)({
    analyticsLocations: t,
    analyticsSourceLocation: n,
    guild: i,
    headerProps: {
      title: d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
      subtitle: function(e, t) {
        let n = (0, l.nW)(e);
        return t ? d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
          targetLevelOrPlan: n
        }) : d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
          targetLevelOrPlan: n
        })
      }(E, s),
      image: (0, o.jsx)(_, {
        guild: i,
        banner: a
      })
    },
    perkIntro: d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
    perks: s ? (0, c.zC)() : (0, c.XO)()
  })
}