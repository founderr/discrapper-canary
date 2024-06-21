n.d(t, {
  B: function() {
    return m
  },
  F: function() {
    return g
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
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
      className: s,
      hide: l
    } = e;
    return (0, i.jsx)("li", {
      className: a()(d.tag, s, {
        [d.hide]: l
      }),
      children: (0, i.jsx)(r.Clickable, {
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
    return s.useEffect(() => {
      c.default.track(u.rMx.OPEN_POPOUT, {
        type: "Discovery Tags Overflow",
        guild_id: l,
        location: {
          page: u.ZY5.GUILD_DISCOVERY,
          section: a
        }
      })
    }, [l, a]), (0, i.jsx)(r.Dialog, {
      className: d.overflowTagsPopout,
      children: (0, i.jsx)("ul", {
        children: t.map(e => (0, i.jsx)(h, {
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
    return (0, i.jsx)(r.Popout, {
      renderPopout: () => (0, i.jsx)(_, {
        ...e
      }),
      position: "right",
      align: "top",
      closeOnScroll: !0,
      children: e => (0, i.jsx)(h, {
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
  g = e => {
    let {
      tags: t,
      onTagClick: n,
      className: l,
      discoveryTagStyle: r = m.DEFAULT,
      hideOverflow: c = !1,
      guildId: u,
      section: _
    } = e, {
      ref: g,
      width: p
    } = (0, o.Z)(), [N, T] = s.useState(null), C = t.filter(e => !E.includes(e.toLowerCase()));
    return s.useLayoutEffect(() => {
      if (null == g.current || null == p || 0 === p) return;
      let e = 0,
        t = 0,
        n = p - 40 - 4;
      for (let i = 0; i < C.length && (t += g.current.children[i].clientWidth + 4, i === C.length - 1 ? !(t > n + 40) : !(t > n)); i++) {
        ;
        e++
      }
      T(t => e <= C.length ? e : t)
    }, [p, g, C]), (0, i.jsxs)("ul", {
      ref: g,
      className: a()(d.tagContainer, l, {
        [d.invisible]: null == N
      }),
      children: [C.map((e, t) => (0, i.jsx)(h, {
        className: r,
        onClick: () => n(e),
        hide: null != N && t >= N,
        text: e
      }, e)), !c && null != N && N < C.length && (0, i.jsx)(I, {
        className: r,
        onTagClick: n,
        tags: C.slice(N),
        count: C.length - N,
        guildId: u,
        section: _
      })]
    })
  }