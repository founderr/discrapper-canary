"use strict";
a.r(t), a.d(t, {
  DiscoveryTagStyle: function() {
    return C
  },
  DiscoveryTags: function() {
    return m
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("481060"),
  o = a("393238"),
  u = a("626135"),
  d = a("981631"),
  c = a("85458");
let f = ["egirl", "egirls", "waifu", "dating", "nsfw", "sex", "playboy", "stupid", "harem", "playgirl", "shitcoin", "shitpost", "porno", "nudes", "sexy", "horny", "fart", "tits", "balls", "cum"],
  E = e => {
    let {
      text: t,
      onClick: a,
      className: s,
      hide: l
    } = e;
    return (0, n.jsx)("li", {
      className: i()(c.tag, s, {
        [c.hide]: l
      }),
      children: (0, n.jsx)(r.Clickable, {
        className: c.tagText,
        onClick: e => {
          e.stopPropagation(), e.preventDefault(), a(e)
        },
        children: t
      })
    })
  },
  h = e => {
    let {
      tags: t,
      onTagClick: a,
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
    }, [l, i]), (0, n.jsx)(r.Dialog, {
      className: c.overflowTagsPopout,
      children: (0, n.jsx)("ul", {
        children: t.map(e => (0, n.jsx)(E, {
          onClick: () => a(e),
          className: c.tagAlt,
          text: e
        }, e))
      })
    })
  },
  _ = e => {
    let {
      className: t,
      count: a
    } = e;
    return (0, n.jsx)(r.Popout, {
      renderPopout: () => (0, n.jsx)(h, {
        ...e
      }),
      position: "right",
      align: "top",
      closeOnScroll: !0,
      children: e => (0, n.jsx)(E, {
        className: t,
        ...e,
        text: "+".concat(a)
      })
    })
  },
  C = {
    DEFAULT: c.tagDefault,
    LIGHT: c.tagLight,
    ALT: c.tagAlt
  },
  m = e => {
    let {
      tags: t,
      onTagClick: a,
      className: l,
      discoveryTagStyle: r = C.DEFAULT,
      hideOverflow: u = !1,
      guildId: d,
      section: h
    } = e, {
      ref: m,
      width: S
    } = (0, o.default)(), [I, p] = s.useState(null), T = t.filter(e => !f.includes(e.toLowerCase()));
    return s.useLayoutEffect(() => {
      if (null == m.current || null == S || 0 === S) return;
      let e = 0,
        t = 0,
        a = S - 40 - 4;
      for (let n = 0; n < T.length && (t += m.current.children[n].clientWidth + 4, n === T.length - 1 ? !(t > a + 40) : !(t > a)); n++) {
        ;
        e++
      }
      p(t => e <= T.length ? e : t)
    }, [S, m, T]), (0, n.jsxs)("ul", {
      ref: m,
      className: i()(c.tagContainer, l, {
        [c.invisible]: null == I
      }),
      children: [T.map((e, t) => (0, n.jsx)(E, {
        className: r,
        onClick: () => a(e),
        hide: null != I && t >= I,
        text: e
      }, e)), !u && null != I && I < T.length && (0, n.jsx)(_, {
        className: r,
        onTagClick: a,
        tags: T.slice(I),
        count: T.length - I,
        guildId: d,
        section: h
      })]
    })
  }