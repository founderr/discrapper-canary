n(47120);
var o = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(442837),
  l = n(481060),
  c = n(607070),
  d = n(63063),
  u = n(617136),
  p = n(272008),
  m = n(113434),
  x = n(497505),
  g = n(918701),
  C = n(566078),
  f = n(667105),
  h = n(585857),
  _ = n(693900),
  E = n(46140),
  S = n(981631),
  T = n(689938),
  N = n(517107);

function v(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: s
  } = e;
  return (0, o.jsxs)("li", {
    className: a()(N.stepWrapper, {
      [N.stepWrapperComplete]: n
    }, {
      [N.stepWrapperWithNextStep]: s
    }),
    children: [(0, o.jsxs)("div", {
      className: N.stepIndicator,
      children: [(0, o.jsx)("div", {
        className: N.stepIconWrapper,
        children: n && (0, o.jsx)(l.CheckmarkBoldIcon, {
          className: N.stepIcon,
          color: l.tokens.colors.WHITE
        })
      }), s && (0, o.jsx)("div", {
        className: N.stepConnector
      })]
    }), (0, o.jsx)("div", {
      className: N.stepContent,
      children: t
    })]
  })
}

function A(e) {
  let {
    quest: t,
    useReducedMotion: n,
    connectedAccounts: r
  } = e, [a, i] = s.useState([]), c = (0, f.g2)({
    useReducedMotion: n,
    className: N.microphoneUnitRefreshIcon
  }), m = async () => {
    c.startAnimation(), i((await (0, p.CS)(t.id)).errorHints), c.stopAnimation()
  }, {
    header: h,
    renderBody: _
  } = s.useMemo(() => {
    let e = a.length > 0,
      n = () => (0, o.jsx)("div", {
        children: a.map((e, t) => (0, o.jsx)(l.Text, {
          className: N.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    if ((0, g.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST)) return {
      header: e ? T.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : T.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
      renderBody: e ? n : () => (0, o.jsx)(l.Text, {
        className: N.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: T.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
      })
    };
    let s = C.r.build(t.config).application.name;
    return {
      header: e ? T.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: s
      }) : T.Z.Messages.QUESTS_LAUNCHED_GAME.format({
        gameTitle: s
      }),
      renderBody: e ? n : () => (0, o.jsx)(l.Text, {
        className: N.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: T.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
          gameTitle: s
        })
      })
    }
  }, [t, a]);
  return (0, o.jsxs)("div", {
    className: N.microphoneUnit,
    children: [(0, o.jsxs)("div", {
      className: N.microphoneUnitHeader,
      children: [(0, o.jsx)(l.CircleExclamationPointIcon, {
        size: "custom",
        color: "currentColor",
        className: 0 === a.length ? N.warningCircle : N.errorCircle,
        width: 16,
        height: 16
      }), (0, o.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: h
      }), (0, o.jsx)(l.Clickable, {
        className: N.microphoneUnitRefreshIconWrapper,
        onClick: () => {
          (0, u._3)({
            questId: t.id,
            questContent: x.jn.QUEST_BAR_V2,
            questContentCTA: u.jZ.DEFIBRILLATOR
          }), m()
        },
        children: c.render()
      })]
    }), _(), 0 === a.length ? null : (0, o.jsx)(l.Text, {
      className: N.microphoneUnitBodyText,
      color: "text-muted",
      variant: "text-xxs/normal",
      children: function() {
        let e = r.playstationAccounts.length > 0,
          t = r.xboxAccounts.length > 0;
        return e && !t || !e && t ? T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_SINGLE_CONSOLE.format({
          helpdeskArticle: d.Z.getArticleURL(e ? S.BhN.PS_CONNECTION : S.BhN.XBOX_CONNECTION)
        }) : T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_PLAYSTATION_OR_XBOX.format({
          psHelpdeskArticle: d.Z.getArticleURL(S.BhN.PS_CONNECTION),
          xboxHelpdeskArticle: d.Z.getArticleURL(S.BhN.XBOX_CONNECTION)
        })
      }()
    })]
  })
}

function j(e) {
  let {
    text: t
  } = e;
  return (0, o.jsx)(l.Text, {
    color: "text-muted",
    variant: "text-xs/medium",
    children: t
  })
}
t.Z = function(e) {
  let {
    quest: t
  } = e, n = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), r = (0, m.Rf)({
    quest: t,
    location: E.dr.QUESTS_BAR
  }), a = (0, m.z6)(), {
    steps: d,
    hasConnectedAccounts: u,
    isProgressingQuestForLaunchedGame: p,
    isQuestComplete: x
  } = s.useMemo(() => {
    var e;
    let n = a.xboxAndPlaystationAccounts.length > 0,
      s = n && (0, g.Bz)(t),
      i = (0, g.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST),
      l = C.r.build(t.config).application.name,
      c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => (0, o.jsx)(h.Q, {
          ...a,
          quest: t
        }),
        isComplete: n || s || c
      }, {
        renderContent: () => (0, o.jsx)(j, {
          text: i ? T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
            gameTitle: l
          })
        }),
        isComplete: s || c
      }, {
        renderContent: () => (0, o.jsx)(j, {
          text: T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
            numMinutes: r.targetMinutes
          })
        }),
        isComplete: c
      }],
      hasConnectedAccounts: n,
      isProgressingQuestForLaunchedGame: s,
      isQuestComplete: c
    }
  }, [a, t, r]);
  return (0, o.jsxs)("div", {
    className: N.wrapper,
    children: [(0, o.jsx)("div", {
      className: N.headingWrapper,
      children: (0, o.jsx)(l.Heading, {
        className: N.heading,
        variant: "text-xs/medium",
        children: T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, o.jsx)(_.n, {
      children: (0, o.jsxs)("div", {
        className: N.stepsWrapper,
        children: [(0, o.jsx)("ul", {
          children: d.map((e, t) => (0, o.jsx)(v, {
            isComplete: e.isComplete,
            hasNextStep: t < d.length - 1,
            children: e.renderContent()
          }, t))
        }), u && !p && !x && (0, o.jsx)(A, {
          connectedAccounts: a,
          useReducedMotion: n,
          quest: t
        })]
      })
    })]
  })
}