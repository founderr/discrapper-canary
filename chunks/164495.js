n.d(t, {
  y: function() {
    return E
  }
});
var o = n(735250),
  s = n(470079),
  r = n(481060),
  a = n(617136),
  i = n(113434),
  l = n(497505),
  c = n(918701),
  d = n(796111),
  u = n(667105),
  p = n(341907),
  m = n(46140),
  x = n(689938),
  g = n(347051);
let f = e => {
    let {
      quest: t
    } = e;
    return (0, o.jsx)("div", {
      className: g.ctaContainer,
      children: (0, o.jsx)(r.Button, {
        className: g.flex,
        size: r.Button.Sizes.SMALL,
        onClick: () => (0, c.FE)(t, {
          content: l.jn.QUEST_BAR_V2,
          ctaContent: a.jZ.OPEN_GAME_LINK
        }),
        children: x.Z.Messages.QUESTS_GET_THIS_GAME
      })
    })
  },
  C = e => {
    let {
      quest: t
    } = e;
    return (0, o.jsx)("div", {
      className: g.ctaContainer,
      children: (0, o.jsx)(r.Button, {
        fullWidth: !0,
        onClick: () => (0, p.gI)({
          quest: t,
          showInline: !1
        }, {
          content: l.jn.QUEST_BAR_V2,
          ctaContent: a.jZ.CONNECT_CONSOLE
        }),
        size: r.Button.Sizes.SMALL,
        children: x.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
      })
    })
  },
  h = e => {
    let {
      quest: t,
      useReducedMotion: n,
      isExpanded: s
    } = e, a = (0, u.hf)({
      quest: t,
      location: l.jn.QUEST_BAR_V2
    });
    return (0, o.jsx)("div", {
      className: g.ctaContainer,
      children: (0, o.jsx)(r.ShinyButton, {
        fullWidth: !0,
        size: r.Button.Sizes.SMALL,
        onClick: a,
        pauseAnimation: n || !s,
        buttonShineClassName: g.shine,
        children: x.Z.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  _ = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = (0, i.z6)(), o = (0, d.P)({
      location: m.dr.QUESTS_BAR
    });
    return s.useMemo(() => {
      let e = (0, c.$J)(t),
        s = 0 === n.length;
      return e && s && !o
    }, [t, n, o])
  },
  E = e => {
    var t;
    let {
      quest: n,
      useReducedMotion: s,
      isExpanded: r,
      hasMadeProgress: a
    } = e, i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, l = _({
      quest: n
    });
    if (i) return (0, o.jsx)(h, {
      quest: n,
      useReducedMotion: s,
      isExpanded: r
    });
    if (l) return (0, o.jsx)(C, {
      quest: n
    });
    if (!a && !(0, c.zK)(n, m.S7.IN_HOUSE_CONSOLE_QUEST)) return (0, o.jsx)(f, {
      quest: n
    });
    return null
  }