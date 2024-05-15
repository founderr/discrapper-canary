"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("685626"),
  l = n("442837"),
  r = n("481060"),
  o = n("224706"),
  u = n("607070"),
  d = n("931240"),
  c = n("650461"),
  f = n("94963"),
  E = n("745628"),
  h = n("950279"),
  _ = n("796918"),
  C = n("513532"),
  m = n("741595"),
  p = n("974842"),
  S = n("359380"),
  g = n("308083"),
  I = n("689938"),
  T = n("590190");
let A = {
    mass: 1,
    tension: 300,
    friction: 60,
    clamp: !0
  },
  N = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
  };

function v(e) {
  let {
    progress: t,
    errors: n
  } = (0, l.useStateFromStoresObject)([c.default], () => {
    var t;
    let n = c.default.getStateForGuild(e);
    return {
      progress: null !== (t = n.progress) && void 0 !== t ? t : c.DEFAULT_CLAN_PROGRESS,
      errors: n.errors
    }
  });
  return {
    progress: t,
    errors: n,
    handleClanUpdate: s.useCallback(t => d.updateClanSetup(e, t), [e])
  }
}
let R = {
  [g.ClanSetupSteps.GAMES]: function(e) {
    let {
      guildId: t
    } = e;
    s.useEffect(() => {
      o.default.getDetectableGames()
    }, []);
    let {
      progress: n,
      errors: i,
      handleClanUpdate: l
    } = v(t);
    return (0, a.jsx)(h.default, {
      title: I.default.Messages.CLAN_SETUP_GAMES_TITLE,
      description: I.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
      handleUpdate: e => l({
        gameApplicationIds: e
      }),
      gameApplicationIds: n.gameApplicationIds,
      requiredGameId: n.requiredGameId,
      error: null == i ? void 0 : i.gameApplicationIds
    })
  },
  [g.ClanSetupSteps.PLAYSTYLE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: i
    } = v(t);
    return (0, a.jsx)(m.default, {
      title: I.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
      description: I.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
      handleUpdate: e => i({
        playstyle: e
      }),
      playstyle: n.playstyle,
      error: null == s ? void 0 : s.playstyle
    })
  },
  [g.ClanSetupSteps.UTILITY_TRAITS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: s
    } = v(t);
    return (0, a.jsx)(S.default, {
      title: I.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
      description: I.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
      handleUpdate: e => s({
        interests: e
      }),
      requiredGameId: n.requiredGameId,
      interests: n.interests
    })
  },
  [g.ClanSetupSteps.INTERESTS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: i
    } = v(t);
    return (0, a.jsx)(_.default, {
      handleUpdate: i,
      interests: n.interests,
      error: null == s ? void 0 : s.interests
    })
  },
  [g.ClanSetupSteps.DESCRIPTION]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: i
    } = v(t);
    return (0, a.jsx)(E.default, {
      handleUpdate: i,
      description: n.description,
      wildcardDescriptors: n.wildcardDescriptors,
      errors: s
    })
  },
  [g.ClanSetupSteps.CUSTOMIZE_TAG_BADGE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: i
    } = v(t);
    return (0, a.jsx)(p.default, {
      handleUpdate: i,
      tag: n.tag,
      error: null == s ? void 0 : s.tag,
      badge: n.badgeKind,
      primaryColor: n.badgePrimaryColor,
      secondaryColor: n.badgeSecondaryColor,
      furthestStep: n.furthestStep
    })
  },
  [g.ClanSetupSteps.CUSTOMIZE_BANNER]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: s
    } = v(t);
    return (0, a.jsx)(f.default, {
      handleUpdate: s,
      progress: n,
      guildId: t
    })
  },
  [g.ClanSetupSteps.MEMBER_APPLICATION]: function(e) {
    let {
      guildId: t
    } = e;
    return (0, a.jsx)(C.default, {
      guildId: t
    })
  }
};

function O(e) {
  var t, n, o, d;
  let {
    item: c,
    state: f,
    direction: E,
    cleanUp: h
  } = e, _ = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
  let C = (0, i.useSpring)((t = f, n = E, o = h, d = _, t === r.TransitionStates.MOUNTED ? {
      from: {
        opacity: 0,
        transform: "translateY(40px) translateX(0px)"
      },
      to: {
        opacity: 1,
        transform: "translateY(0px) translateX(0px)"
      },
      config: A,
      delay: 500,
      immediate: d
    } : t === r.TransitionStates.ENTERED ? {
      from: {
        opacity: 0,
        transform: "translateY(0px) translateX(".concat(-1 === n ? -40 : 40, "px)")
      },
      to: {
        opacity: 1,
        transform: "translateY(0px) translateX(0px)"
      },
      config: N,
      delay: 500,
      immediate: d
    } : {
      from: {
        opacity: 1,
        transform: "translateY(0px) translateX(0px)"
      },
      to: {
        opacity: 0,
        transform: "translateY(0px) translateX(".concat(-1 === n ? 40 : -40, "px))")
      },
      config: N,
      immediate: d,
      onRest: () => {
        o()
      }
    })),
    m = s.useMemo(() => R[c.currentStep], [c.currentStep]);
  return (0, a.jsx)(i.animated.div, {
    style: C,
    className: T.step,
    children: (0, a.jsx)(r.ScrollerThin, {
      className: T.scroller,
      children: (0, a.jsx)(m, {
        guildId: c.guildId
      })
    })
  })
}

function L(e) {
  return e.currentStep.toString()
}

function M(e) {
  let {
    guildId: t
  } = e, n = (0, l.useStateFromStores)([c.default], () => {
    var e, n, a;
    return null !== (a = null === (n = c.default.getStateForGuild(t)) || void 0 === n ? void 0 : null === (e = n.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== a ? a : c.DEFAULT_CLAN_PROGRESS.currentStep
  }), i = s.useRef(n - 1);
  s.useEffect(() => {
    i.current = n
  }, [n]);
  let o = s.useMemo(() => [{
      previousStep: i,
      currentStep: n,
      guildId: t
    }], [n, t]),
    u = s.useMemo(() => null == i.current || n === i.current ? 0 : i.current < n ? 1 : -1, [n]),
    d = s.useCallback((e, t, n, s) => (0, a.jsx)(O, {
      item: t,
      direction: u,
      state: n,
      cleanUp: s
    }, e), [u]);
  return (0, a.jsx)("div", {
    className: T.stepsTransitionGroup,
    children: (0, a.jsx)(r.TransitionGroup, {
      items: o,
      renderItem: d,
      getItemKey: L
    })
  })
}