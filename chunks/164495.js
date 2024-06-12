"use strict";
s.r(t), s.d(t, {
  QuestBarV2BottomCta: function() {
    return S
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("722770"),
  i = s("846519"),
  r = s("481060"),
  o = s("230711"),
  u = s("757206"),
  d = s("617136"),
  c = s("113434"),
  E = s("497505"),
  _ = s("918701"),
  f = s("667105"),
  h = s("46140"),
  C = s("981631"),
  m = s("689938"),
  T = s("424716");
let g = e => {
    let {
      quest: t,
      isExpanded: s,
      hidePlayGameButton: o = !1
    } = e, [c, f] = n.useState(!1), [h, C] = n.useState(!1), g = n.useRef(new i.Timeout), A = n.useRef(new i.Timeout);
    n.useEffect(() => {
      let e = A.current,
        t = g.current;
      return function() {
        e.stop(), t.stop()
      }
    }, []);
    let p = () => {
        let e = o ? 20 : 16;
        return (0, a.jsx)(u.default, {
          className: o ? T.copyIcon : void 0,
          width: e,
          height: e,
          color: c ? l.default.GREEN_360 : "currentColor"
        })
      },
      N = () => {
        (0, _.copyShareLink)(t.id, {
          content: E.QuestContent.QUEST_BAR_V2,
          ctaContent: d.QuestContentCTA.QUEST_BAR_COPY_LINK
        }), f(!0), C(!0), A.current.start(500, () => C(!1)), g.current.start(600, () => f(!1))
      };
    return (0, a.jsxs)("div", {
      className: T.ctaContainer,
      children: [!o && (0, a.jsx)(r.Button, {
        className: T.flex,
        size: r.Button.Sizes.SMALL,
        onClick: () => (0, _.openGameLink)(t, {
          content: E.QuestContent.QUEST_BAR_V2,
          ctaContent: d.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: m.default.Messages.QUESTS_PLAY_GAME
      }), (() => {
        let e = c ? r.Tooltip.Colors.GREEN : r.Tooltip.Colors.PRIMARY,
          t = c ? m.default.Messages.COPY_SUCCESS_1 : m.default.Messages.QUESTS_SHARE_LINK,
          n = o && !c;
        return (0, a.jsx)(r.Tooltip, {
          hideOnClick: !1,
          shouldShow: !n,
          forceOpen: h && s,
          color: e,
          text: t,
          children: e => (0, a.jsxs)(r.Button, {
            ...e,
            className: o ? T.iconButtonLarge : T.iconButton,
            innerClassName: T.iconButtonInner,
            size: o ? r.Button.Sizes.SMALL : r.Button.Sizes.ICON,
            color: r.Button.Colors.CUSTOM,
            onClick: N,
            children: [o && (0, a.jsx)(r.Text, {
              color: c ? "status-positive" : "text-primary",
              variant: "text-sm/normal",
              children: m.default.Messages.COPY_LINK
            }), p()]
          })
        })
      })()]
    })
  },
  A = () => (0, a.jsx)("div", {
    className: T.ctaContainer,
    children: (0, a.jsx)(r.Button, {
      fullWidth: !0,
      onClick: () => o.default.open(C.UserSettingsSections.CONNECTIONS),
      size: r.Button.Sizes.SMALL,
      children: m.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
    })
  }),
  p = e => {
    let {
      quest: t,
      isExpanded: s
    } = e, {
      xboxAndPlaystationAccounts: n
    } = (0, c.useConnectedAccounts)(), l = 0 === n.length, i = !l && (0, _.isQuestProgressingOnConsole)(t) || (0, _.hasVariant)(t, h.QuestVariants.IN_HOUSE_CONSOLE_QUEST);
    return l ? (0, a.jsx)(A, {}) : (0, a.jsx)(g, {
      quest: t,
      isExpanded: s,
      hidePlayGameButton: i
    })
  },
  N = e => {
    let {
      quest: t,
      useReducedMotion: s,
      isExpanded: n
    } = e, l = (0, f.useHandleClaimQuestsReward)({
      quest: t,
      location: E.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: T.ctaContainer,
      children: (0, a.jsx)(r.ShinyButton, {
        fullWidth: !0,
        size: r.Button.Sizes.SMALL,
        onClick: l,
        pauseAnimation: s || !n,
        buttonShineClassName: T.shine,
        children: m.default.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  S = e => {
    var t;
    let {
      quest: s,
      useReducedMotion: l,
      isExpanded: i,
      hasMadeProgress: r
    } = e, o = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, u = n.useMemo(() => (0, _.isConsoleQuest)(s), [s]);
    if (o) return (0, a.jsx)(N, {
      quest: s,
      useReducedMotion: l,
      isExpanded: i
    });
    if (!r && u) return (0, a.jsx)(p, {
      quest: s,
      isExpanded: i
    });
    if (!r) return (0, a.jsx)(g, {
      quest: s,
      isExpanded: i
    });
    return null
  }