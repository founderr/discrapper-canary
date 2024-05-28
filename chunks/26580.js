"use strict";
n.r(t), n.d(t, {
  DiscoveryTagStyle: function() {
    return _
  },
  DiscoveryTags: function() {
    return S
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("393238"),
  u = n("626135"),
  d = n("981631"),
  c = n("804428");
let f = ["egirl", "egirls", "waifu", "dating", "nsfw", "sex", "playboy", "stupid", "harem", "playgirl", "shitcoin", "shitpost", "porno", "nudes", "sexy", "horny", "fart", "tits", "balls", "cum"],
  E = e => {
    let {
      text: t,
      onClick: n,
      className: s,
      hide: l
    } = e;
    return (0, a.jsx)("li", {
      className: i()(c.tag, s, {
        [c.hide]: l
      }),
      children: (0, a.jsx)(r.Clickable, {
        className: c.tagText,
        onClick: e => {
          e.stopPropagation(), e.preventDefault(), n(e)
        },
        children: t
      })
    })
  },
  C = e => {
    let {
      tags: t,
      onTagClick: n,
      guildId: l,
      section: i
    } = e;
    return s.useEffect(() => {
      u.default.track(d.AnalyticEvents.OPEN_POPOUT, {
        type: "Discovery Tags Overflow",
        guild_id: l,
        location: {
          page: d.AnalyticsPages.GUILD_DISCOVERY,
          section: i
        }
      })
    }, [l, i]), (0, a.jsx)(r.Dialog, {
      className: c.overflowTagsPopout,
      children: (0, a.jsx)("ul", {
        children: t.map(e => (0, a.jsx)(E, {
          onClick: () => n(e),
          className: c.tagAlt,
          text: e
        }, e))
      })
    })
  },
  h = e => {
    let {
      className: t,
      count: n
    } = e;
    return (0, a.jsx)(r.Popout, {
      renderPopout: () => (0, a.jsx)(C, {
        ...e
      }),
      position: "right",
      align: "top",
      closeOnScroll: !0,
      children: e => (0, a.jsx)(E, {
        className: t,
        ...e,
        text: "+".concat(n)
      })
    })
  },
  _ = {
    DEFAULT: c.tagDefault,
    LIGHT: c.tagLight,
    ALT: c.tagAlt
  },
  S = e => {
    let {
      tags: t,
      onTagClick: n,
      className: l,
      discoveryTagStyle: r = _.DEFAULT,
      hideOverflow: u = !1,
      guildId: d,
      section: C
    } = e, {
      ref: S,
      width: m
    } = (0, o.default)(), [p, I] = s.useState(null), g = t.filter(e => !f.includes(e.toLowerCase()));
    return s.useLayoutEffect(() => {
      if (null == S.current || null == m || 0 === m) return;
      let e = 0,
        t = 0,
        n = m - 40 - 4;
      for (let a = 0; a < g.length && (t += S.current.children[a].clientWidth + 4, a === g.length - 1 ? !(t > n + 40) : !(t > n)); a++) {
        ;
        e++
      }
      I(t => e <= g.length ? e : t)
    }, [m, S, g]), (0, a.jsxs)("ul", {
      ref: S,
      className: i()(c.tagContainer, l, {
        [c.invisible]: null == p
      }),
      children: [g.map((e, t) => (0, a.jsx)(E, {
        className: r,
        onClick: () => n(e),
        hide: null != p && t >= p,
        text: e
      }, e)), !u && null != p && p < g.length && (0, a.jsx)(h, {
        className: r,
        onTagClick: n,
        tags: g.slice(p),
        count: g.length - p,
        guildId: d,
        section: C
      })]
    })
  }