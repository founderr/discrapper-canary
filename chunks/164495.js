"use strict";
s.r(t), s.d(t, {
  QuestBarV2BottomCta: function() {
    return I
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("722770"),
  i = s("846519"),
  r = s("481060"),
  o = s("230711"),
  u = s("976644"),
  d = s("757206"),
  c = s("617136"),
  E = s("113434"),
  _ = s("497505"),
  f = s("918701"),
  h = s("667105"),
  m = s("46140"),
  C = s("981631"),
  T = s("689938"),
  g = s("424716");
let A = e => {
    let {
      quest: t,
      isExpanded: s,
      hidePlayGameButton: o = !1
    } = e, [u, E] = n.useState(!1), [h, m] = n.useState(!1), C = n.useRef(new i.Timeout), A = n.useRef(new i.Timeout);
    n.useEffect(() => {
      let e = A.current,
        t = C.current;
      return function() {
        e.stop(), t.stop()
      }
    }, []);
    let p = () => {
        let e = o ? 20 : 16;
        return (0, a.jsx)(d.default, {
          className: o ? g.copyIcon : void 0,
          width: e,
          height: e,
          color: u ? l.default.GREEN_360 : "currentColor"
        })
      },
      N = () => {
        (0, f.copyShareLink)(t.id, {
          content: _.QuestContent.QUEST_BAR_V2,
          ctaContent: c.QuestContentCTA.QUEST_BAR_COPY_LINK
        }), E(!0), m(!0), A.current.start(500, () => m(!1)), C.current.start(600, () => E(!1))
      };
    return (0, a.jsxs)("div", {
      className: g.ctaContainer,
      children: [!o && (0, a.jsx)(r.Button, {
        className: g.flex,
        size: r.Button.Sizes.SMALL,
        onClick: () => (0, f.openGameLink)(t, {
          content: _.QuestContent.QUEST_BAR_V2,
          ctaContent: c.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: T.default.Messages.QUESTS_PLAY_GAME
      }), (() => {
        let e = u ? r.Tooltip.Colors.GREEN : r.Tooltip.Colors.PRIMARY,
          t = u ? T.default.Messages.COPY_SUCCESS_1 : T.default.Messages.QUESTS_SHARE_LINK,
          n = o && !u;
        return (0, a.jsx)(r.Tooltip, {
          hideOnClick: !1,
          shouldShow: !n,
          forceOpen: h && s,
          color: e,
          text: t,
          children: e => (0, a.jsxs)(r.Button, {
            ...e,
            className: o ? g.iconButtonLarge : g.iconButton,
            innerClassName: g.iconButtonInner,
            size: o ? r.Button.Sizes.SMALL : r.Button.Sizes.ICON,
            color: r.Button.Colors.CUSTOM,
            onClick: N,
            children: [o && (0, a.jsx)(r.Text, {
              color: u ? "status-positive" : "text-primary",
              variant: "text-sm/normal",
              children: T.default.Messages.COPY_LINK
            }), p()]
          })
        })
      })()]
    })
  },
  p = () => (0, a.jsx)("div", {
    className: g.ctaContainer,
    children: (0, a.jsx)(r.Button, {
      fullWidth: !0,
      onClick: () => o.default.open(C.UserSettingsSections.CONNECTIONS),
      size: r.Button.Sizes.SMALL,
      children: T.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
    })
  }),
  N = e => {
    let {
      quest: t,
      isExpanded: s
    } = e, {
      xboxAndPlaystationAccounts: n
    } = (0, E.useConnectedAccounts)(), l = 0 === n.length, i = !l && (0, f.isQuestProgressingOnConsole)(t) || (0, f.hasVariant)(t, m.QuestVariants.IN_HOUSE_CONSOLE_QUEST);
    return l ? (0, a.jsx)(p, {}) : (0, a.jsx)(A, {
      quest: t,
      isExpanded: s,
      hidePlayGameButton: i
    })
  },
  S = e => {
    let {
      quest: t,
      useReducedMotion: s,
      isExpanded: n
    } = e, l = (0, h.useHandleClaimQuestsReward)({
      quest: t,
      location: _.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: g.ctaContainer,
      children: (0, a.jsx)(u.default, {
        fullWidth: !0,
        size: r.Button.Sizes.SMALL,
        onClick: l,
        pauseAnimation: s || !n,
        buttonShineClassName: g.shine,
        children: T.default.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  I = e => {
    var t;
    let {
      quest: s,
      useReducedMotion: l,
      isExpanded: i,
      hasMadeProgress: r
    } = e, o = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, u = n.useMemo(() => (0, f.isConsoleQuest)(s), [s]);
    if (o) return (0, a.jsx)(S, {
      quest: s,
      useReducedMotion: l,
      isExpanded: i
    });
    if (!r && u) return (0, a.jsx)(N, {
      quest: s,
      isExpanded: i
    });
    if (!r) return (0, a.jsx)(A, {
      quest: s,
      isExpanded: i
    });
    return null
  }