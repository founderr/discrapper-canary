n.d(t, {
  y: function() {
    return S
  }
});
var s = n(735250),
  o = n(470079),
  r = n(481060),
  a = n(617136),
  l = n(113434),
  i = n(497505),
  c = n(918701),
  u = n(796111),
  d = n(667105),
  p = n(341907),
  x = n(46140),
  m = n(689938),
  g = n(347051);
let h = e => {
    let {
      quest: t
    } = e;
    return (0, s.jsx)("div", {
      className: g.ctaContainer,
      children: (0, s.jsx)(r.Button, {
        className: g.flex,
        size: r.Button.Sizes.SMALL,
        onClick: () => (0, c.FE)(t, {
          content: i.jn.QUEST_BAR_V2,
          ctaContent: a.jZ.OPEN_GAME_LINK
        }),
        children: m.Z.Messages.QUESTS_GET_THIS_GAME
      })
    })
  },
  C = e => {
    let {
      quest: t
    } = e;
    return (0, s.jsx)("div", {
      className: g.ctaContainer,
      children: (0, s.jsx)(r.Button, {
        fullWidth: !0,
        onClick: () => (0, p.gI)({
          quest: t,
          showInline: !1
        }, {
          content: i.jn.QUEST_BAR_V2,
          ctaContent: a.jZ.CONNECT_CONSOLE
        }),
        size: r.Button.Sizes.SMALL,
        children: m.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
      })
    })
  },
  f = e => {
    let {
      quest: t,
      useReducedMotion: n,
      isExpanded: o
    } = e, a = (0, d.hf)({
      quest: t,
      location: i.jn.QUEST_BAR_V2
    });
    return (0, s.jsx)("div", {
      className: g.ctaContainer,
      children: (0, s.jsx)(r.ShinyButton, {
        fullWidth: !0,
        size: r.Button.Sizes.SMALL,
        onClick: a,
        pauseAnimation: n || !o,
        buttonShineClassName: g.shine,
        children: m.Z.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  E = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = (0, l.z6)(), s = (0, u.P)({
      location: x.dr.QUESTS_BAR
    });
    return o.useMemo(() => {
      let e = (0, c.$J)(t),
        o = 0 === n.length;
      return e && o && !s
    }, [t, n, s])
  },
  S = e => {
    var t;
    let {
      quest: n,
      useReducedMotion: o,
      isExpanded: r,
      hasMadeProgress: a
    } = e, l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, i = E({
      quest: n
    });
    if (l) return (0, s.jsx)(f, {
      quest: n,
      useReducedMotion: o,
      isExpanded: r
    });
    if (i) return (0, s.jsx)(C, {
      quest: n
    });
    if (!a && !(0, c.zK)(n, x.S7.IN_HOUSE_CONSOLE_QUEST)) return (0, s.jsx)(h, {
      quest: n
    });
    return null
  }