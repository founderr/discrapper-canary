n.d(t, {
  B: function() {
    return m
  },
  F: function() {
    return T
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(393238),
  c = n(626135),
  u = n(981631),
  d = n(626953);
let E = ["egirl", "egirls", "waifu", "dating", "nsfw", "sex", "playboy", "stupid", "harem", "playgirl", "shitcoin", "shitpost", "porno", "nudes", "sexy", "horny", "fart", "tits", "balls", "cum"],
  h = e => {
    let {
      text: t,
      onClick: n,
      className: i,
      hide: l
    } = e;
    return (0, s.jsx)("li", {
      className: a()(d.tag, i, {
        [d.hide]: l
      }),
      children: (0, s.jsx)(r.Clickable, {
        className: d.tagText,
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
      section: a
    } = e;
    return i.useEffect(() => {
      c.default.track(u.rMx.OPEN_POPOUT, {
        type: "Discovery Tags Overflow",
        guild_id: l,
        location: {
          page: u.ZY5.GUILD_DISCOVERY,
          section: a
        }
      })
    }, [l, a]), (0, s.jsx)(r.Dialog, {
      className: d.overflowTagsPopout,
      children: (0, s.jsx)("ul", {
        children: t.map(e => (0, s.jsx)(h, {
          onClick: () => n(e),
          className: d.tagAlt,
          text: e
        }, e))
      })
    })
  },
  I = e => {
    let {
      className: t,
      count: n
    } = e;
    return (0, s.jsx)(r.Popout, {
      renderPopout: () => (0, s.jsx)(_, {
        ...e
      }),
      position: "right",
      align: "top",
      closeOnScroll: !0,
      children: e => (0, s.jsx)(h, {
        className: t,
        ...e,
        text: "+".concat(n)
      })
    })
  },
  m = {
    DEFAULT: d.tagDefault,
    LIGHT: d.tagLight,
    ALT: d.tagAlt
  },
  T = e => {
    let {
      tags: t,
      onTagClick: n,
      className: l,
      discoveryTagStyle: r = m.DEFAULT,
      hideOverflow: c = !1,
      guildId: u,
      section: _
    } = e, {
      ref: T,
      width: g
    } = (0, o.Z)(), [p, N] = i.useState(null), S = t.filter(e => !E.includes(e.toLowerCase()));
    return i.useLayoutEffect(() => {
      if (null == T.current || null == g || 0 === g) return;
      let e = 0,
        t = 0,
        n = g - 40 - 4;
      for (let s = 0; s < S.length && (t += T.current.children[s].clientWidth + 4, s === S.length - 1 ? !(t > n + 40) : !(t > n)); s++) {
        ;
        e++
      }
      N(t => e <= S.length ? e : t)
    }, [g, T, S]), (0, s.jsxs)("ul", {
      ref: T,
      className: a()(d.tagContainer, l, {
        [d.invisible]: null == p
      }),
      children: [S.map((e, t) => (0, s.jsx)(h, {
        className: r,
        onClick: () => n(e),
        hide: null != p && t >= p,
        text: e
      }, e)), !c && null != p && p < S.length && (0, s.jsx)(I, {
        className: r,
        onTagClick: n,
        tags: S.slice(p),
        count: S.length - p,
        guildId: u,
        section: _
      })]
    })
  }