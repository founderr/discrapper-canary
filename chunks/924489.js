"use strict";
l.r(t), l.d(t, {
  GuildIconSize: function() {
    return n
  },
  default: function() {
    return A
  }
}), l("653041");
var n, i, r = l("735250"),
  a = l("470079"),
  s = l("120356"),
  o = l.n(s),
  c = l("477690"),
  u = l("481060"),
  d = l("104259"),
  C = l("806519"),
  f = l("768581"),
  p = l("624138"),
  h = l("689938"),
  m = l("636721");
(i = n || (n = {}))[i.SMALL = (0, p.cssValueToNumber)(c.default.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", i[i.LARGE = (0, p.cssValueToNumber)(c.default.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE";
let v = {
    [n.SMALL]: m.moreGuildsSmall,
    [n.LARGE]: m.moreGuildsLarge
  },
  g = {
    [n.SMALL]: m.iconSmall,
    [n.LARGE]: m.iconLarge
  };

function A(e) {
  var t, l, i;
  let {
    application: s,
    mutualGuilds: c,
    mutualGuildShownMax: p = 4,
    className: A,
    textVariant: E = "text-sm/normal",
    compact: x,
    guildIconSize: _ = n.LARGE
  } = e, M = new Intl.ListFormat("en-US"), L = null !== (l = null === (t = s.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0, y = null !== (i = null == c ? void 0 : c.length) && void 0 !== i ? i : 0, {
    shownMutualGuilds: j,
    hiddenMutualGuilds: I
  } = a.useMemo(() => {
    let e = [],
      t = [];
    return null == c || c.forEach(l => {
      e.length < p && null != l.icon ? e.push(l) : t.push(l)
    }), e.length === p && t.length > 0 && (t.push(e[p - 1]), e = e.slice(0, p - 1)), {
      shownMutualGuilds: e,
      hiddenMutualGuilds: t
    }
  }, [c, p]), N = I.length, R = function(e, t, l, n) {
    if (0 === t && 0 === e) return null;
    if (t > 0 && 0 === l) return h.default.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
      mutualGuildCount: t
    });
    let i = t > 0 ? h.default.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : h.default.Messages.APP_DIRECTORY_GUILD_COUNT,
      r = new Intl.NumberFormat("en-US", {
        notation: n ? "compact" : "standard",
        compactDisplay: "short"
      });
    return i.format({
      guildCount: r.format(e),
      mutualGuildCount: t,
      nonMutualGuildCount: r.format(l)
    })
  }(L, y, Math.max(0, L - y), x);
  return 0 === j.length && null == R ? null : (0, r.jsxs)("div", {
    className: o()(A, m.wrapper),
    children: [(0, r.jsx)("div", {
      className: m.icons,
      children: j.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [j.map((e, t) => {
          let l = t === j.length - 1 && 0 === N,
            n = f.default.getGuildIconURL({
              id: e.id,
              icon: e.icon,
              size: _,
              canAnimate: !1
            }),
            i = (0, r.jsx)(u.Tooltip, {
              text: e.name,
              position: "top",
              children: e => (0, r.jsx)("img", {
                ...e,
                className: o()(m.icon, g[_]),
                src: n,
                alt: ""
              })
            });
          return l ? (0, r.jsx)(a.Fragment, {
            children: i
          }, e.id) : (0, r.jsx)(C.default, {
            className: m.iconMask,
            height: _,
            width: _,
            mask: C.default.Masks.VOICE_USER_SUMMARY_ITEM,
            children: i
          }, e.id)
        }), N > 0 ? (0, r.jsx)(u.Tooltip, {
          text: h.default.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({
            appNames: M.format(I.map(e => e.name))
          }),
          position: "top",
          children: e => (0, r.jsxs)("div", {
            ...e,
            className: o()(m.moreGuilds, v[_]),
            children: ["+", N]
          })
        }) : null]
      }) : (0, r.jsx)(d.default, {
        width: _,
        height: _,
        className: m.defaultIcon
      })
    }), null != R ? (0, r.jsx)(u.Text, {
      variant: E,
      color: "header-secondary",
      children: R
    }) : null]
  })
}