n.d(t, {
  y: function() {
    return f
  }
});
var s = n(735250),
  o = n(470079),
  a = n(481060),
  r = n(617136),
  l = n(113434),
  i = n(497505),
  c = n(918701),
  u = n(796111),
  d = n(667105),
  p = n(341907),
  x = n(46140),
  m = n(689938),
  g = n(347051);
let C = e => {
    let {
      quest: t
    } = e;
    return (0, s.jsx)("div", {
      className: g.ctaContainer,
      children: (0, s.jsx)(a.Button, {
        className: g.flex,
        size: a.Button.Sizes.SMALL,
        onClick: () => (0, c.FE)(t, {
          content: i.jn.QUEST_BAR_V2,
          ctaContent: r.jZ.OPEN_GAME_LINK
        }),
        children: m.Z.Messages.QUESTS_GET_THIS_GAME
      })
    })
  },
  h = () => (0, s.jsx)("div", {
    className: g.ctaContainer,
    children: (0, s.jsx)(a.Button, {
      fullWidth: !0,
      onClick: () => (0, p.gI)({
        showInline: !1
      }),
      size: a.Button.Sizes.SMALL,
      children: m.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
    })
  }),
  S = e => {
    let {
      quest: t,
      useReducedMotion: n,
      isExpanded: o
    } = e, r = (0, d.hf)({
      quest: t,
      location: i.jn.QUEST_BAR_V2
    });
    return (0, s.jsx)("div", {
      className: g.ctaContainer,
      children: (0, s.jsx)(a.ShinyButton, {
        fullWidth: !0,
        size: a.Button.Sizes.SMALL,
        onClick: r,
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
  f = e => {
    var t;
    let {
      quest: n,
      useReducedMotion: o,
      isExpanded: a,
      hasMadeProgress: r
    } = e, l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, i = E({
      quest: n
    });
    if (l) return (0, s.jsx)(S, {
      quest: n,
      useReducedMotion: o,
      isExpanded: a
    });
    if (i) return (0, s.jsx)(h, {});
    if (!r && !(0, c.zK)(n, x.S7.IN_HOUSE_CONSOLE_QUEST)) return (0, s.jsx)(C, {
      quest: n
    });
    return null
  }