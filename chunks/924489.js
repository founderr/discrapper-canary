t.d(n, {
  Z: function() {
    return E
  },
  x: function() {
    return l
  }
}), t(653041);
var l, i, r = t(735250),
  s = t(470079),
  o = t(120356),
  a = t.n(o),
  c = t(477690),
  u = t(481060),
  d = t(806519),
  C = t(768581),
  p = t(624138),
  h = t(689938),
  f = t(845511);
(i = l || (l = {}))[i.SMALL = (0, p.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", i[i.LARGE = (0, p.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE";
let m = {
    [l.SMALL]: f.moreGuildsSmall,
    [l.LARGE]: f.moreGuildsLarge
  },
  v = {
    [l.SMALL]: f.iconSmall,
    [l.LARGE]: f.iconLarge
  };

function E(e) {
  var n, t, i;
  let {
    application: o,
    mutualGuilds: c,
    mutualGuildShownMax: p = 4,
    className: E,
    textVariant: g = "text-sm/normal",
    compact: A,
    guildIconSize: Z = l.LARGE
  } = e, _ = new Intl.ListFormat("en-US"), x = null !== (t = null === (n = o.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== t ? t : 0, M = null !== (i = null == c ? void 0 : c.length) && void 0 !== i ? i : 0, L = Math.max(0, x - M), {
    shownMutualGuilds: N,
    hiddenMutualGuilds: R
  } = s.useMemo(() => {
    let e = [],
      n = [];
    return null == c || c.forEach(t => {
      e.length < p && null != t.icon ? e.push(t) : n.push(t)
    }), e.length === p && n.length > 0 && (n.push(e[p - 1]), e = e.slice(0, p - 1)), {
      shownMutualGuilds: e,
      hiddenMutualGuilds: n
    }
  }, [c, p]), j = R.length, I = function(e, n, t, l) {
    if (0 === n && 0 === e) return null;
    if (n > 0 && 0 === t) return h.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
      mutualGuildCount: n
    });
    let i = n > 0 ? h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : h.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
      r = new Intl.NumberFormat("en-US", {
        notation: l ? "compact" : "standard",
        compactDisplay: "short"
      });
    return i.format({
      guildCount: r.format(e),
      mutualGuildCount: n,
      nonMutualGuildCount: r.format(t)
    })
  }(x, M, L, A);
  return 0 === N.length && null == I ? null : (0, r.jsxs)("div", {
    className: a()(E, f.wrapper),
    children: [(0, r.jsx)("div", {
      className: f.icons,
      children: N.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [N.map((e, n) => {
          let t = n === N.length - 1 && 0 === j,
            l = C.ZP.getGuildIconURL({
              id: e.id,
              icon: e.icon,
              size: Z,
              canAnimate: !1
            }),
            i = (0, r.jsx)(u.Tooltip, {
              text: e.name,
              position: "top",
              children: e => (0, r.jsx)("img", {
                ...e,
                className: a()(f.icon, v[Z]),
                src: l,
                alt: ""
              })
            });
          return t ? (0, r.jsx)(s.Fragment, {
            children: i
          }, e.id) : (0, r.jsx)(d.ZP, {
            className: f.iconMask,
            height: Z,
            width: Z,
            mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
            children: i
          }, e.id)
        }), j > 0 ? (0, r.jsx)(u.Tooltip, {
          text: h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({
            appNames: _.format(R.map(e => e.name))
          }),
          position: "top",
          children: e => (0, r.jsxs)("div", {
            ...e,
            className: a()(f.moreGuilds, m[Z]),
            children: ["+", j]
          })
        }) : null]
      }) : (0, r.jsx)(u.CompassIcon, {
        size: "custom",
        color: "currentColor",
        width: Z,
        height: Z,
        className: f.defaultIcon
      })
    }), null != I ? (0, r.jsx)(u.Text, {
      variant: g,
      color: "header-secondary",
      children: I
    }) : null]
  })
}