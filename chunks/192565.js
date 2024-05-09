"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("685626"),
  i = n("442837"),
  r = n("481060"),
  o = n("224706"),
  u = n("607070"),
  d = n("931240"),
  c = n("650461"),
  f = n("94963"),
  h = n("745628"),
  p = n("950279"),
  m = n("796918"),
  C = n("513532"),
  g = n("741595"),
  E = n("974842"),
  S = n("359380"),
  _ = n("308083"),
  I = n("689938"),
  N = n("590190");
let T = {
    mass: 1,
    tension: 300,
    friction: 60,
    clamp: !0
  },
  A = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
  };

function L(e) {
  let {
    progress: t,
    errors: n
  } = (0, i.useStateFromStoresObject)([c.default], () => {
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
    handleClanUpdate: a.useCallback(t => d.updateClanSetup(e, t), [e])
  }
}
let v = {
  [_.ClanSetupSteps.GAMES]: function(e) {
    let {
      guildId: t
    } = e;
    a.useEffect(() => {
      o.default.getDetectableGames()
    }, []);
    let {
      progress: n,
      errors: s,
      handleClanUpdate: i
    } = L(t);
    return (0, l.jsx)(p.default, {
      title: I.default.Messages.CLAN_SETUP_GAMES_TITLE,
      description: I.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
      handleUpdate: e => i({
        gameApplicationIds: e
      }),
      gameApplicationIds: n.gameApplicationIds,
      requiredGameId: n.requiredGameId,
      error: null == s ? void 0 : s.gameApplicationIds
    })
  },
  [_.ClanSetupSteps.PLAYSTYLE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: a,
      handleClanUpdate: s
    } = L(t);
    return (0, l.jsx)(g.default, {
      title: I.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
      description: I.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
      handleUpdate: e => s({
        playstyle: e
      }),
      playstyle: n.playstyle,
      error: null == a ? void 0 : a.playstyle
    })
  },
  [_.ClanSetupSteps.UTILITY_TRAITS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: a
    } = L(t);
    return (0, l.jsx)(S.default, {
      title: I.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
      description: I.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
      handleUpdate: e => a({
        interests: e
      }),
      requiredGameId: n.requiredGameId,
      interests: n.interests
    })
  },
  [_.ClanSetupSteps.INTERESTS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: a,
      handleClanUpdate: s
    } = L(t);
    return (0, l.jsx)(m.default, {
      handleUpdate: s,
      interests: n.interests,
      error: null == a ? void 0 : a.interests
    })
  },
  [_.ClanSetupSteps.DESCRIPTION]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: a,
      handleClanUpdate: s
    } = L(t);
    return (0, l.jsx)(h.default, {
      handleUpdate: s,
      description: n.description,
      wildcardDescriptors: n.wildcardDescriptors,
      errors: a
    })
  },
  [_.ClanSetupSteps.CUSTOMIZE_TAG_BADGE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: a,
      handleClanUpdate: s
    } = L(t);
    return (0, l.jsx)(E.default, {
      handleUpdate: s,
      tag: n.tag,
      error: null == a ? void 0 : a.tag,
      badge: n.badgeKind,
      primaryColor: n.badgePrimaryColor,
      secondaryColor: n.badgeSecondaryColor,
      furthestStep: n.furthestStep
    })
  },
  [_.ClanSetupSteps.CUSTOMIZE_BANNER]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: a
    } = L(t);
    return (0, l.jsx)(f.default, {
      handleUpdate: a,
      progress: n,
      guildId: t
    })
  },
  [_.ClanSetupSteps.MEMBER_APPLICATION]: function(e) {
    let {
      guildId: t
    } = e;
    return (0, l.jsx)(C.default, {
      guildId: t
    })
  }
};

function x(e) {
  var t, n, o, d;
  let {
    item: c,
    state: f,
    direction: h,
    cleanUp: p
  } = e, m = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion);
  let C = (0, s.useSpring)((t = f, n = h, o = p, d = m, t === r.TransitionStates.MOUNTED ? {
      from: {
        opacity: 0,
        transform: "translateY(40px) translateX(0px)"
      },
      to: {
        opacity: 1,
        transform: "translateY(0px) translateX(0px)"
      },
      config: T,
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
      config: A,
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
      config: A,
      immediate: d,
      onRest: () => {
        o()
      }
    })),
    g = a.useMemo(() => v[c.currentStep], [c.currentStep]);
  return (0, l.jsx)(s.animated.div, {
    style: C,
    className: N.step,
    children: (0, l.jsx)(r.ScrollerThin, {
      className: N.scroller,
      children: (0, l.jsx)(g, {
        guildId: c.guildId
      })
    })
  })
}

function R(e) {
  return e.currentStep.toString()
}

function M(e) {
  let {
    guildId: t
  } = e, n = (0, i.useStateFromStores)([c.default], () => {
    var e, n, l;
    return null !== (l = null === (n = c.default.getStateForGuild(t)) || void 0 === n ? void 0 : null === (e = n.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== l ? l : c.DEFAULT_CLAN_PROGRESS.currentStep
  }), s = a.useRef(n - 1);
  a.useEffect(() => {
    s.current = n
  }, [n]);
  let o = a.useMemo(() => [{
      previousStep: s,
      currentStep: n,
      guildId: t
    }], [n, t]),
    u = a.useMemo(() => null == s.current || n === s.current ? 0 : s.current < n ? 1 : -1, [n]),
    d = a.useCallback((e, t, n, a) => (0, l.jsx)(x, {
      item: t,
      direction: u,
      state: n,
      cleanUp: a
    }, e), [u]);
  return (0, l.jsx)("div", {
    className: N.stepsTransitionGroup,
    children: (0, l.jsx)(r.TransitionGroup, {
      items: o,
      renderItem: d,
      getItemKey: R
    })
  })
}