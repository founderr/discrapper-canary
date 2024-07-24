n.d(t, {
  B: function() {
return m;
  },
  F: function() {
return g;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(393238),
  c = n(626135),
  d = n(981631),
  u = n(671078);
let _ = [
'egirl',
'egirls',
'waifu',
'dating',
'nsfw',
'sex',
'playboy',
'stupid',
'harem',
'playgirl',
'shitcoin',
'shitpost',
'porno',
'nudes',
'sexy',
'horny',
'fart',
'tits',
'balls',
'cum'
  ],
  h = e => {
let {
  text: t,
  onClick: n,
  className: s,
  hide: a
} = e;
return (0, i.jsx)('li', {
  className: r()(u.tag, s, {
    [u.hide]: a
  }),
  children: (0, i.jsx)(l.Clickable, {
    className: u.tagText,
    onClick: e => {
      e.stopPropagation(), e.preventDefault(), n(e);
    },
    children: t
  })
});
  },
  E = e => {
let {
  tags: t,
  onTagClick: n,
  guildId: a,
  section: r
} = e;
return s.useEffect(() => {
  c.default.track(d.rMx.OPEN_POPOUT, {
    type: 'Discovery Tags Overflow',
    guild_id: a,
    location: {
      page: d.ZY5.GUILD_DISCOVERY,
      section: r
    }
  });
}, [
  a,
  r
]), (0, i.jsx)(l.Dialog, {
  className: u.overflowTagsPopout,
  children: (0, i.jsx)('ul', {
    children: t.map(e => (0, i.jsx)(h, {
      onClick: () => n(e),
      className: u.tagAlt,
      text: e
    }, e))
  })
});
  },
  I = e => {
let {
  className: t,
  count: n
} = e;
return (0, i.jsx)(l.Popout, {
  renderPopout: () => (0, i.jsx)(E, {
    ...e
  }),
  position: 'right',
  align: 'top',
  closeOnScroll: !0,
  children: e => (0, i.jsx)(h, {
    className: t,
    ...e,
    text: '+'.concat(n)
  })
});
  },
  m = {
DEFAULT: u.tagDefault,
LIGHT: u.tagLight,
ALT: u.tagAlt
  },
  g = e => {
let {
  tags: t,
  onTagClick: n,
  className: a,
  discoveryTagStyle: l = m.DEFAULT,
  hideOverflow: c = !1,
  guildId: d,
  section: E
} = e, {
  ref: g,
  width: p
} = (0, o.Z)(), [T, f] = s.useState(null), S = t.filter(e => !_.includes(e.toLowerCase()));
return s.useLayoutEffect(() => {
  if (null == g.current || null == p || 0 === p)
    return;
  let e = 0,
    t = 0,
    n = p - 40 - 4;
  for (let i = 0; i < S.length && (t += g.current.children[i].clientWidth + 4, i === S.length - 1 ? !(t > n + 40) : !(t > n)); i++) {
    ;
    e++;
  }
  f(t => e <= S.length ? e : t);
}, [
  p,
  g,
  S
]), (0, i.jsxs)('ul', {
  ref: g,
  className: r()(u.tagContainer, a, {
    [u.invisible]: null == T
  }),
  children: [
    S.map((e, t) => (0, i.jsx)(h, {
      className: l,
      onClick: () => n(e),
      hide: null != T && t >= T,
      text: e
    }, e)),
    !c && null != T && T < S.length && (0, i.jsx)(I, {
      className: l,
      onTagClick: n,
      tags: S.slice(T),
      count: S.length - T,
      guildId: d,
      section: E
    })
  ]
});
  };