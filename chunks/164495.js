n.d(t, {
  y: function() {
    return T
  }
}), n(47120);
var s = n(735250),
  o = n(470079),
  r = n(722770),
  a = n(846519),
  l = n(481060),
  i = n(617136),
  c = n(113434),
  u = n(497505),
  d = n(918701),
  p = n(796111),
  x = n(667105),
  m = n(341907),
  g = n(46140),
  C = n(689938),
  h = n(347051);
let S = e => {
    let {
      quest: t,
      isExpanded: n,
      hidePlayGameButton: c = !1
    } = e, [p, x] = o.useState(!1), [m, g] = o.useState(!1), S = o.useRef(new a.V7), E = o.useRef(new a.V7);
    o.useEffect(() => {
      let e = E.current,
        t = S.current;
      return function() {
        e.stop(), t.stop()
      }
    }, []);
    let f = () => {
        let e = c ? 20 : 16;
        return (0, s.jsx)(l.CopyIcon, {
          size: "custom",
          className: c ? h.copyIcon : void 0,
          width: e,
          height: e,
          color: p ? r.Z.GREEN_360 : "currentColor"
        })
      },
      N = () => {
        (0, d.f2)(t.id, {
          content: u.jn.QUEST_BAR_V2,
          ctaContent: i.jZ.QUEST_BAR_COPY_LINK
        }), x(!0), g(!0), E.current.start(500, () => g(!1)), S.current.start(600, () => x(!1))
      };
    return (0, s.jsxs)("div", {
      className: h.ctaContainer,
      children: [!c && (0, s.jsx)(l.Button, {
        className: h.flex,
        size: l.Button.Sizes.SMALL,
        onClick: () => (0, d.FE)(t, {
          content: u.jn.QUEST_BAR_V2,
          ctaContent: i.jZ.OPEN_GAME_LINK
        }),
        children: C.Z.Messages.QUESTS_GET_THIS_GAME
      }), (() => {
        let e = p ? l.Tooltip.Colors.GREEN : l.Tooltip.Colors.PRIMARY,
          t = p ? C.Z.Messages.COPY_SUCCESS_1 : C.Z.Messages.QUESTS_SHARE_LINK,
          o = c && !p;
        return (0, s.jsx)(l.Tooltip, {
          hideOnClick: !1,
          shouldShow: !o,
          forceOpen: m && n,
          color: e,
          text: t,
          children: e => (0, s.jsxs)(l.Button, {
            ...e,
            className: c ? h.iconButtonLarge : h.iconButton,
            innerClassName: h.iconButtonInner,
            size: c ? l.Button.Sizes.SMALL : l.Button.Sizes.ICON,
            color: l.Button.Colors.CUSTOM,
            onClick: N,
            children: [c && (0, s.jsx)(l.Text, {
              color: p ? "status-positive" : "text-primary",
              variant: "text-sm/normal",
              children: C.Z.Messages.COPY_LINK
            }), f()]
          })
        })
      })()]
    })
  },
  E = () => (0, s.jsx)("div", {
    className: h.ctaContainer,
    children: (0, s.jsx)(l.Button, {
      fullWidth: !0,
      onClick: () => (0, m.gI)({
        showInline: !1
      }),
      size: l.Button.Sizes.SMALL,
      children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
    })
  }),
  f = e => {
    let {
      quest: t,
      isExpanded: n
    } = e, {
      xboxAndPlaystationAccounts: o
    } = (0, c.z6)(), r = 0 === o.length, a = (0, p.P)({
      location: g.dr.QUESTS_BAR
    }), l = !r && (0, d.Bz)(t) || (0, d.zK)(t, g.S7.IN_HOUSE_CONSOLE_QUEST);
    return r && !a ? (0, s.jsx)(E, {}) : (0, s.jsx)(S, {
      quest: t,
      isExpanded: n,
      hidePlayGameButton: l
    })
  },
  N = e => {
    let {
      quest: t,
      useReducedMotion: n,
      isExpanded: o
    } = e, r = (0, x.hf)({
      quest: t,
      location: u.jn.QUEST_BAR_V2
    });
    return (0, s.jsx)("div", {
      className: h.ctaContainer,
      children: (0, s.jsx)(l.ShinyButton, {
        fullWidth: !0,
        size: l.Button.Sizes.SMALL,
        onClick: r,
        pauseAnimation: n || !o,
        buttonShineClassName: h.shine,
        children: C.Z.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  T = e => {
    var t;
    let {
      quest: n,
      useReducedMotion: r,
      isExpanded: a,
      hasMadeProgress: l
    } = e, i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, c = o.useMemo(() => (0, d.$J)(n), [n]);
    if (i) return (0, s.jsx)(N, {
      quest: n,
      useReducedMotion: r,
      isExpanded: a
    });
    if (!l && c) return (0, s.jsx)(f, {
      quest: n,
      isExpanded: a
    });
    if (!l) return (0, s.jsx)(S, {
      quest: n,
      isExpanded: a
    });
    return null
  }