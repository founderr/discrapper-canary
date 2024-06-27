n.d(t, {
  y: function() {
    return _
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
  p = n(46140),
  m = n(689938),
  x = n(347051);
let g = e => {
    let {
      quest: t
    } = e;
    return (0, o.jsx)("div", {
      className: x.ctaContainer,
      children: (0, o.jsx)(r.Button, {
        className: x.flex,
        size: r.Button.Sizes.SMALL,
        onClick: () => (0, c.FE)(t, {
          content: l.jn.QUEST_BAR_V2,
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
    return (0, o.jsx)("div", {
      className: x.ctaContainer,
      children: (0, o.jsx)(r.Button, {
        fullWidth: !0,
        onClick: () => (0, c.gI)({
          quest: t,
          showInline: !1
        }, {
          content: l.jn.QUEST_BAR_V2,
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
      isExpanded: s
    } = e, a = (0, u.hf)({
      quest: t,
      location: l.jn.QUEST_BAR_V2
    });
    return (0, o.jsx)("div", {
      className: x.ctaContainer,
      children: (0, o.jsx)(r.ShinyButton, {
        fullWidth: !0,
        size: r.Button.Sizes.SMALL,
        onClick: a,
        pauseAnimation: n || !s,
        buttonShineClassName: x.shine,
        children: m.Z.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  h = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = (0, i.z6)(), o = (0, d.P)({
      location: p.dr.QUESTS_BAR
    });
    return s.useMemo(() => {
      let e = (0, c.$J)(t),
        s = 0 === n.length;
      return e && s && !o
    }, [t, n, o])
  },
  _ = e => {
    var t;
    let {
      quest: n,
      useReducedMotion: s,
      isExpanded: r,
      hasMadeProgress: a
    } = e, i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, l = h({
      quest: n
    });
    if (i) return (0, o.jsx)(f, {
      quest: n,
      useReducedMotion: s,
      isExpanded: r
    });
    if (l) return (0, o.jsx)(C, {
      quest: n
    });
    if (!a && !(0, c.zK)(n, p.S7.IN_HOUSE_CONSOLE_QUEST)) return (0, o.jsx)(g, {
      quest: n
    });
    return null
  }