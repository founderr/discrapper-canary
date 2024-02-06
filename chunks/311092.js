"use strict";
n.r(t), n.d(t, {
  DiscoveryTagStyle: function() {
    return C
  },
  DiscoveryTags: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("731898"),
  u = n("599110"),
  d = n("49111"),
  c = n("259160");
let f = ["egirl", "egirls", "waifu", "dating", "nsfw", "sex", "playboy", "stupid", "harem", "playgirl", "shitcoin", "shitpost", "porno", "nudes", "sexy", "horny", "fart", "tits", "balls", "cum"],
  E = e => {
    let {
      text: t,
      onClick: n,
      className: s,
      hide: l
    } = e;
    return (0, a.jsx)("li", {
      className: i(c.tag, s, {
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
  _ = e => {
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
      renderPopout: () => (0, a.jsx)(_, {
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
  C = {
    DEFAULT: c.tagDefault,
    LIGHT: c.tagLight,
    ALT: c.tagAlt
  },
  I = e => {
    let {
      tags: t,
      onTagClick: n,
      className: l,
      discoveryTagStyle: r = C.DEFAULT,
      hideOverflow: u = !1,
      guildId: d,
      section: _
    } = e, {
      ref: I,
      width: T
    } = (0, o.default)(), [S, p] = s.useState(null), m = t.filter(e => !f.includes(e.toLowerCase()));
    return s.useLayoutEffect(() => {
      if (null == I.current || null == T || 0 === T) return;
      let e = 0,
        t = 0,
        n = T - 40 - 4;
      for (let a = 0; a < m.length; a++) {
        let s = I.current.children[a],
          l = s.clientWidth;
        if (t += l + 4, a === m.length - 1 ? t > n + 40 : t > n) break;
        e++
      }
      p(t => e <= m.length ? e : t)
    }, [T, I, m]), (0, a.jsxs)("ul", {
      ref: I,
      className: i(c.tagContainer, l, {
        [c.invisible]: null == S
      }),
      children: [m.map((e, t) => (0, a.jsx)(E, {
        className: r,
        onClick: () => n(e),
        hide: null != S && t >= S,
        text: e
      }, e)), !u && null != S && S < m.length && (0, a.jsx)(h, {
        className: r,
        onTagClick: n,
        tags: m.slice(S),
        count: m.length - S,
        guildId: d,
        section: _
      })]
    })
  }