n.d(t, {
  y: function() {
    return A
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(722770),
  l = n(846519),
  r = n(481060),
  o = n(617136),
  c = n(113434),
  d = n(497505),
  u = n(918701),
  E = n(796111),
  _ = n(667105),
  h = n(341907),
  m = n(46140),
  T = n(689938),
  C = n(347051);
let g = e => {
    let {
      quest: t,
      isExpanded: n,
      hidePlayGameButton: c = !1
    } = e, [E, _] = a.useState(!1), [h, m] = a.useState(!1), g = a.useRef(new l.V7), p = a.useRef(new l.V7);
    a.useEffect(() => {
      let e = p.current,
        t = g.current;
      return function() {
        e.stop(), t.stop()
      }
    }, []);
    let N = () => {
        let e = c ? 20 : 16;
        return (0, s.jsx)(r.CopyIcon, {
          size: "custom",
          className: c ? C.copyIcon : void 0,
          width: e,
          height: e,
          color: E ? i.Z.GREEN_360 : "currentColor"
        })
      },
      I = () => {
        (0, u.f2)(t.id, {
          content: d.jn.QUEST_BAR_V2,
          ctaContent: o.jZ.QUEST_BAR_COPY_LINK
        }), _(!0), m(!0), p.current.start(500, () => m(!1)), g.current.start(600, () => _(!1))
      };
    return (0, s.jsxs)("div", {
      className: C.ctaContainer,
      children: [!c && (0, s.jsx)(r.Button, {
        className: C.flex,
        size: r.Button.Sizes.SMALL,
        onClick: () => (0, u.FE)(t, {
          content: d.jn.QUEST_BAR_V2,
          ctaContent: o.jZ.OPEN_GAME_LINK
        }),
        children: T.Z.Messages.QUESTS_GET_THIS_GAME
      }), (() => {
        let e = E ? r.Tooltip.Colors.GREEN : r.Tooltip.Colors.PRIMARY,
          t = E ? T.Z.Messages.COPY_SUCCESS_1 : T.Z.Messages.QUESTS_SHARE_LINK,
          a = c && !E;
        return (0, s.jsx)(r.Tooltip, {
          hideOnClick: !1,
          shouldShow: !a,
          forceOpen: h && n,
          color: e,
          text: t,
          children: e => (0, s.jsxs)(r.Button, {
            ...e,
            className: c ? C.iconButtonLarge : C.iconButton,
            innerClassName: C.iconButtonInner,
            size: c ? r.Button.Sizes.SMALL : r.Button.Sizes.ICON,
            color: r.Button.Colors.CUSTOM,
            onClick: I,
            children: [c && (0, s.jsx)(r.Text, {
              color: E ? "status-positive" : "text-primary",
              variant: "text-sm/normal",
              children: T.Z.Messages.COPY_LINK
            }), N()]
          })
        })
      })()]
    })
  },
  p = () => (0, s.jsx)("div", {
    className: C.ctaContainer,
    children: (0, s.jsx)(r.Button, {
      fullWidth: !0,
      onClick: () => (0, h.gI)({
        showInline: !1
      }),
      size: r.Button.Sizes.SMALL,
      children: T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
    })
  }),
  N = e => {
    let {
      quest: t,
      isExpanded: n
    } = e, {
      xboxAndPlaystationAccounts: a
    } = (0, c.z6)(), i = 0 === a.length, l = (0, E.P)({
      location: m.dr.QUESTS_BAR
    }), r = !i && (0, u.Bz)(t) || (0, u.zK)(t, m.S7.IN_HOUSE_CONSOLE_QUEST);
    return i && !l ? (0, s.jsx)(p, {}) : (0, s.jsx)(g, {
      quest: t,
      isExpanded: n,
      hidePlayGameButton: r
    })
  },
  I = e => {
    let {
      quest: t,
      useReducedMotion: n,
      isExpanded: a
    } = e, i = (0, _.hf)({
      quest: t,
      location: d.jn.QUEST_BAR
    });
    return (0, s.jsx)("div", {
      className: C.ctaContainer,
      children: (0, s.jsx)(r.ShinyButton, {
        fullWidth: !0,
        size: r.Button.Sizes.SMALL,
        onClick: i,
        pauseAnimation: n || !a,
        buttonShineClassName: C.shine,
        children: T.Z.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  A = e => {
    var t;
    let {
      quest: n,
      useReducedMotion: i,
      isExpanded: l,
      hasMadeProgress: r
    } = e, o = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, c = a.useMemo(() => (0, u.$J)(n), [n]);
    if (o) return (0, s.jsx)(I, {
      quest: n,
      useReducedMotion: i,
      isExpanded: l
    });
    if (!r && c) return (0, s.jsx)(N, {
      quest: n,
      isExpanded: l
    });
    if (!r) return (0, s.jsx)(g, {
      quest: n,
      isExpanded: l
    });
    return null
  }