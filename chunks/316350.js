"use strict";
t.d(s, {
  Z: function() {
    return O
  }
}), t(47120);
var n, i, l, a, r = t(735250),
  o = t(470079),
  c = t(120356),
  d = t.n(c),
  u = t(920906),
  E = t(481060),
  _ = t(119331),
  I = t(597043),
  T = t(171042),
  N = t(402766),
  m = t(267642),
  S = t(981631),
  h = t(689938),
  g = t(961414);
let C = {
    tension: 200,
    friction: 20
  },
  x = {
    ...C,
    clamp: !0
  };

function R(e) {
  let [s, t] = o.useState(0), {
    numUnlocked: n,
    numRequired: i
  } = e, l = () => {
    t(1)
  }, a = () => {
    t(2)
  }, c = 2 === s, _ = 1 === s;
  if (!(!(n >= i) && n / i >= .8) || c) return null;
  let I = _ || c ? g.hidden : null,
    N = _ ? T.Z.Stages.FLYING : T.Z.Stages.HOVERING;
  return (0, r.jsx)(u.Spring, {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: x,
    children: e => (0, r.jsxs)(u.animated.div, {
      className: g.tierClose,
      style: e,
      children: [(0, r.jsx)(T.Z, {
        className: g.tierCloseMechaWumpus,
        stage: N,
        onFlyingComplete: a
      }), (0, r.jsx)("div", {
        className: d()(g.tierCloseHint, I),
        children: h.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_CLOSE_HINT.format({
          numLeft: i - n
        })
      }), (0, r.jsx)(E.Clickable, {
        onClick: l,
        className: d()(g.tierCloseClose, I),
        children: (0, r.jsx)(E.CircleXIcon, {
          size: "md",
          color: "currentColor",
          className: g.tierCloseCloseIcon
        })
      })]
    })
  })
}

function L(e) {
  let {
    withCardBody: s,
    isAnimatedTo: t,
    hasAnimatedUnlocked: n,
    onSetRef: i,
    tier: l,
    showHeaderLockStatus: a,
    headerButton: c = null,
    subscriptionsRequired: E,
    subscriptionCount: _,
    className: I
  } = e, T = e => {
    null == i || i(e)
  }, [m, S] = o.useState(0);
  return o.useLayoutEffect(() => {
    t && S(1)
  }, [t]), (0, r.jsx)(u.Spring, {
    from: {
      unlockedTranslateY: 50
    },
    to: {
      unlockedTranslateY: 0 === m ? 50 : 0
    },
    config: C,
    children: e => (0, r.jsx)("div", {
      className: d()({
        [g.tierHeaderWithoutCardBody]: !s,
        [g.tierHeaderUnlocked]: n,
        [g.tierHeaderLocked]: !n
      }, I),
      ref: T,
      children: (0, r.jsxs)("div", {
        className: g.tierHeaderContent,
        children: [(0, r.jsx)(N.Z, {
          tier: l.tier,
          className: d()(g.tierIcon, {
            [g.tierIconLocked]: !n
          })
        }), (0, r.jsx)("div", {
          className: d()(g.tierTitle, {
            [g.tierTitleActive]: n
          }),
          children: l.title
        }), a ? (0, r.jsx)(A, {
          transform: null == e ? void 0 : e.unlockedTranslateY.to(e => "translate3d(0, ".concat(e, "px, 0)")),
          headerButton: c,
          subscriptionsRequired: E,
          hasAnimatedUnlocked: n
        }) : null, (0, r.jsx)(R, {
          numUnlocked: _,
          numRequired: E
        })]
      })
    })
  })
}

function O(e) {
  let {
    children: s,
    subscriptionCount: t,
    onSetRef: n,
    tier: i,
    isAnimatedTo: l,
    hasBottomMargin: a,
    headerButton: o = null,
    withCardBody: c = !0,
    guildId: u,
    showHeaderLockStatus: T = !0
  } = e, N = (0, m.vn)(u)[i.tier], C = l && t >= N, x = i.tier !== S.Eu4.NONE && i.tier !== S.Eu4.TIER_1, R = (e, s) => {
    let {
      icon: t,
      className: n
    } = (0, _.t)(e.icon, s);
    return (0, r.jsxs)("div", {
      className: g.perk,
      children: [(0, r.jsx)(I.Z, {
        name: String(e.icon),
        icon: t,
        className: g.perkIcon,
        iconClassName: n
      }), (0, r.jsxs)("div", {
        className: g.perkText,
        children: [(0, r.jsxs)("div", {
          className: g.perkTitle,
          children: [e.title, e.isNew ? (0, r.jsx)(E.TextBadge, {
            className: g.newBadge,
            text: h.Z.Messages.NEW
          }) : null]
        }), (0, r.jsx)("div", {
          className: g.perkDescription,
          children: e.description
        })]
      })]
    }, e.title)
  };
  return (0, r.jsxs)("div", {
    className: d()(g.tier, {
      [g.tierBottomMargin]: a
    }),
    children: [(0, r.jsx)(L, {
      subscriptionCount: t,
      tier: i,
      headerButton: o,
      showHeaderLockStatus: T,
      onSetRef: e => {
        null != n && n(e, i)
      },
      withCardBody: c,
      guildId: u,
      hasBottomMargin: a,
      subscriptionsRequired: N,
      hasAnimatedUnlocked: C,
      isAnimatedTo: l
    }), (0, r.jsx)("div", {
      className: d()({
        [g.tierBody]: c
      }),
      children: null != s ? s : (0, r.jsxs)(r.Fragment, {
        children: [x ? (0, r.jsx)("div", {
          className: g.previousPerks,
          children: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_PREVIOUS_PERKS
        }) : null, null != i.perks && (0, r.jsx)("div", {
          className: g.perks,
          children: i.perks.map(e => R(e, C))
        })]
      })
    })]
  }, i.tier)
}(l = n || (n = {}))[l.OPEN = 0] = "OPEN", l[l.CLOSING = 1] = "CLOSING", l[l.CLOSED = 2] = "CLOSED", (a = i || (i = {}))[a.NONE = 0] = "NONE", a[a.UNLOCKED_SLIDE = 1] = "UNLOCKED_SLIDE";
let A = e => {
    let {
      transform: s,
      hasAnimatedUnlocked: t,
      headerButton: n,
      subscriptionsRequired: i
    } = e;
    return null !== n ? n : t ? (0, r.jsx)(p, {
      transform: s
    }) : (0, r.jsx)(M, {
      subscriptionsRequired: i
    })
  },
  p = e => {
    let {
      transform: s
    } = e;
    return (0, r.jsx)(u.animated.div, {
      style: {
        transform: s
      },
      className: g.tierUnlocked,
      children: h.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_UNLOCKED
    })
  },
  M = e => {
    let {
      subscriptionsRequired: s
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: g.tierRequirement,
        children: h.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TIER_REQUIREMENT.format({
          required: s
        })
      }), (0, r.jsx)(E.LockIcon, {
        size: "md",
        color: "currentColor",
        className: g.tierLock
      })]
    })
  }