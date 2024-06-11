"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("47120");
var a, l, n, i, r = s("735250"),
  o = s("470079"),
  d = s("120356"),
  u = s.n(d),
  c = s("920906"),
  E = s("481060"),
  _ = s("119331"),
  I = s("597043"),
  T = s("171042"),
  S = s("402766"),
  f = s("696202"),
  m = s("630641"),
  N = s("267642"),
  g = s("981631"),
  h = s("689938"),
  C = s("961414");
let R = {
    tension: 200,
    friction: 20
  },
  x = {
    ...R,
    clamp: !0
  };

function L(e) {
  let [t, s] = o.useState(0), {
    numUnlocked: a,
    numRequired: l
  } = e, n = () => {
    s(1)
  }, i = () => {
    s(2)
  }, d = 2 === t, _ = 1 === t;
  if (!(!(a >= l) && a / l >= .8) || d) return null;
  let I = _ || d ? C.hidden : null,
    S = _ ? T.default.Stages.FLYING : T.default.Stages.HOVERING;
  return (0, r.jsx)(c.Spring, {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: x,
    children: e => (0, r.jsxs)(c.animated.div, {
      className: C.tierClose,
      style: e,
      children: [(0, r.jsx)(T.default, {
        className: C.tierCloseMechaWumpus,
        stage: S,
        onFlyingComplete: i
      }), (0, r.jsx)("div", {
        className: u()(C.tierCloseHint, I),
        children: h.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_CLOSE_HINT.format({
          numLeft: l - a
        })
      }), (0, r.jsx)(E.Clickable, {
        onClick: n,
        className: u()(C.tierCloseClose, I),
        children: (0, r.jsx)(f.default, {
          className: C.tierCloseCloseIcon
        })
      })]
    })
  })
}

function O(e) {
  let {
    withCardBody: t,
    isAnimatedTo: s,
    hasAnimatedUnlocked: a,
    onSetRef: l,
    tier: n,
    showHeaderLockStatus: i,
    headerButton: d = null,
    subscriptionsRequired: E,
    subscriptionCount: _,
    className: I
  } = e, T = e => {
    null == l || l(e)
  }, [f, m] = o.useState(0);
  return o.useLayoutEffect(() => {
    s && m(1)
  }, [s]), (0, r.jsx)(c.Spring, {
    from: {
      unlockedTranslateY: 50
    },
    to: {
      unlockedTranslateY: 0 === f ? 50 : 0
    },
    config: R,
    children: e => (0, r.jsx)("div", {
      className: u()({
        [C.tierHeaderWithoutCardBody]: !t,
        [C.tierHeaderUnlocked]: a,
        [C.tierHeaderLocked]: !a
      }, I),
      ref: T,
      children: (0, r.jsxs)("div", {
        className: C.tierHeaderContent,
        children: [(0, r.jsx)(S.default, {
          tier: n.tier,
          className: u()(C.tierIcon, {
            [C.tierIconLocked]: !a
          })
        }), (0, r.jsx)("div", {
          className: u()(C.tierTitle, {
            [C.tierTitleActive]: a
          }),
          children: n.title
        }), i ? (0, r.jsx)(A, {
          transform: null == e ? void 0 : e.unlockedTranslateY.to(e => "translate3d(0, ".concat(e, "px, 0)")),
          headerButton: d,
          subscriptionsRequired: E,
          hasAnimatedUnlocked: a
        }) : null, (0, r.jsx)(L, {
          numUnlocked: _,
          numRequired: E
        })]
      })
    })
  })
}

function p(e) {
  let {
    children: t,
    subscriptionCount: s,
    onSetRef: a,
    tier: l,
    isAnimatedTo: n,
    hasBottomMargin: i,
    headerButton: o = null,
    withCardBody: d = !0,
    guildId: c,
    showHeaderLockStatus: T = !0
  } = e, S = (0, N.getAppliedGuildBoostsRequired)(c)[l.tier], f = n && s >= S, m = l.tier !== g.BoostedGuildTiers.NONE && l.tier !== g.BoostedGuildTiers.TIER_1, R = (e, t) => {
    let {
      icon: s,
      className: a
    } = (0, _.getPerkIcon)(e.icon, t);
    return (0, r.jsxs)("div", {
      className: C.perk,
      children: [(0, r.jsx)(I.default, {
        name: String(e.icon),
        icon: s,
        className: C.perkIcon,
        iconClassName: a
      }), (0, r.jsxs)("div", {
        className: C.perkText,
        children: [(0, r.jsxs)("div", {
          className: C.perkTitle,
          children: [e.title, e.isNew ? (0, r.jsx)(E.TextBadge, {
            className: C.newBadge,
            text: h.default.Messages.NEW
          }) : null]
        }), (0, r.jsx)("div", {
          className: C.perkDescription,
          children: e.description
        })]
      })]
    }, e.title)
  };
  return (0, r.jsxs)("div", {
    className: u()(C.tier, {
      [C.tierBottomMargin]: i
    }),
    children: [(0, r.jsx)(O, {
      subscriptionCount: s,
      tier: l,
      headerButton: o,
      showHeaderLockStatus: T,
      onSetRef: e => {
        null != a && a(e, l)
      },
      withCardBody: d,
      guildId: c,
      hasBottomMargin: i,
      subscriptionsRequired: S,
      hasAnimatedUnlocked: f,
      isAnimatedTo: n
    }), (0, r.jsx)("div", {
      className: u()({
        [C.tierBody]: d
      }),
      children: null != t ? t : (0, r.jsxs)(r.Fragment, {
        children: [m ? (0, r.jsx)("div", {
          className: C.previousPerks,
          children: h.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_PREVIOUS_PERKS
        }) : null, null != l.perks && (0, r.jsx)("div", {
          className: C.perks,
          children: l.perks.map(e => R(e, f))
        })]
      })
    })]
  }, l.tier)
}(n = a || (a = {}))[n.OPEN = 0] = "OPEN", n[n.CLOSING = 1] = "CLOSING", n[n.CLOSED = 2] = "CLOSED", (i = l || (l = {}))[i.NONE = 0] = "NONE", i[i.UNLOCKED_SLIDE = 1] = "UNLOCKED_SLIDE";
let A = e => {
    let {
      transform: t,
      hasAnimatedUnlocked: s,
      headerButton: a,
      subscriptionsRequired: l
    } = e;
    return null !== a ? a : s ? (0, r.jsx)(M, {
      transform: t
    }) : (0, r.jsx)(D, {
      subscriptionsRequired: l
    })
  },
  M = e => {
    let {
      transform: t
    } = e;
    return (0, r.jsx)(c.animated.div, {
      style: {
        transform: t
      },
      className: C.tierUnlocked,
      children: h.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_UNLOCKED
    })
  },
  D = e => {
    let {
      subscriptionsRequired: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: C.tierRequirement,
        children: h.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TIER_REQUIREMENT.format({
          required: t
        })
      }), (0, r.jsx)(m.default, {
        className: C.tierLock
      })]
    })
  }