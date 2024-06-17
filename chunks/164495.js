"use strict";
s.r(t), s.d(t, {
  QuestBarV2BottomCta: function() {
    return S
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("722770"),
  i = s("846519"),
  r = s("481060"),
  o = s("230711"),
  u = s("757206"),
  d = s("617136"),
  c = s("113434"),
  E = s("497505"),
  f = s("918701"),
  _ = s("667105"),
  h = s("46140"),
  m = s("981631"),
  C = s("689938"),
  T = s("424716");
let g = e => {
    let {
      quest: t,
      isExpanded: s,
      hidePlayGameButton: o = !1
    } = e, [c, _] = a.useState(!1), [h, m] = a.useState(!1), g = a.useRef(new i.Timeout), p = a.useRef(new i.Timeout);
    a.useEffect(() => {
      let e = p.current,
        t = g.current;
      return function() {
        e.stop(), t.stop()
      }
    }, []);
    let A = () => {
        let e = o ? 20 : 16;
        return (0, n.jsx)(u.default, {
          className: o ? T.copyIcon : void 0,
          width: e,
          height: e,
          color: c ? l.default.GREEN_360 : "currentColor"
        })
      },
      N = () => {
        (0, f.copyShareLink)(t.id, {
          content: E.QuestContent.QUEST_BAR_V2,
          ctaContent: d.QuestContentCTA.QUEST_BAR_COPY_LINK
        }), _(!0), m(!0), p.current.start(500, () => m(!1)), g.current.start(600, () => _(!1))
      };
    return (0, n.jsxs)("div", {
      className: T.ctaContainer,
      children: [!o && (0, n.jsx)(r.Button, {
        className: T.flex,
        size: r.Button.Sizes.SMALL,
        onClick: () => (0, f.openGameLink)(t, {
          content: E.QuestContent.QUEST_BAR_V2,
          ctaContent: d.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: C.default.Messages.QUESTS_GET_THIS_GAME
      }), (() => {
        let e = c ? r.Tooltip.Colors.GREEN : r.Tooltip.Colors.PRIMARY,
          t = c ? C.default.Messages.COPY_SUCCESS_1 : C.default.Messages.QUESTS_SHARE_LINK,
          a = o && !c;
        return (0, n.jsx)(r.Tooltip, {
          hideOnClick: !1,
          shouldShow: !a,
          forceOpen: h && s,
          color: e,
          text: t,
          children: e => (0, n.jsxs)(r.Button, {
            ...e,
            className: o ? T.iconButtonLarge : T.iconButton,
            innerClassName: T.iconButtonInner,
            size: o ? r.Button.Sizes.SMALL : r.Button.Sizes.ICON,
            color: r.Button.Colors.CUSTOM,
            onClick: N,
            children: [o && (0, n.jsx)(r.Text, {
              color: c ? "status-positive" : "text-primary",
              variant: "text-sm/normal",
              children: C.default.Messages.COPY_LINK
            }), A()]
          })
        })
      })()]
    })
  },
  p = () => (0, n.jsx)("div", {
    className: T.ctaContainer,
    children: (0, n.jsx)(r.Button, {
      fullWidth: !0,
      onClick: () => o.default.open(m.UserSettingsSections.CONNECTIONS),
      size: r.Button.Sizes.SMALL,
      children: C.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
    })
  }),
  A = e => {
    let {
      quest: t,
      isExpanded: s
    } = e, {
      xboxAndPlaystationAccounts: a
    } = (0, c.useConnectedAccounts)(), l = 0 === a.length, i = !l && (0, f.isQuestProgressingOnConsole)(t) || (0, f.hasVariant)(t, h.QuestVariants.IN_HOUSE_CONSOLE_QUEST);
    return l ? (0, n.jsx)(p, {}) : (0, n.jsx)(g, {
      quest: t,
      isExpanded: s,
      hidePlayGameButton: i
    })
  },
  N = e => {
    let {
      quest: t,
      useReducedMotion: s,
      isExpanded: a
    } = e, l = (0, _.useHandleClaimQuestsReward)({
      quest: t,
      location: E.QuestContent.QUEST_BAR
    });
    return (0, n.jsx)("div", {
      className: T.ctaContainer,
      children: (0, n.jsx)(r.ShinyButton, {
        fullWidth: !0,
        size: r.Button.Sizes.SMALL,
        onClick: l,
        pauseAnimation: s || !a,
        buttonShineClassName: T.shine,
        children: C.default.Messages.QUESTS_CLAIM_REWARD
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
    } = e, o = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, u = a.useMemo(() => (0, f.isConsoleQuest)(s), [s]);
    if (o) return (0, n.jsx)(N, {
      quest: s,
      useReducedMotion: l,
      isExpanded: i
    });
    if (!r && u) return (0, n.jsx)(A, {
      quest: s,
      isExpanded: i
    });
    if (!r) return (0, n.jsx)(g, {
      quest: s,
      isExpanded: i
    });
    return null
  }