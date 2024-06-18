"use strict";
t.d(s, {
  $$: function() {
    return h
  },
  P_: function() {
    return x
  },
  ap: function() {
    return C
  },
  ku: function() {
    return g
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(45966),
  o = t(637853),
  c = t(734893),
  d = t(621923),
  u = t(8426),
  E = t(969632),
  _ = t(974513),
  I = t(290511),
  T = t(689938),
  N = t(94912);

function m(e) {
  let s, {
    title: t,
    description: i,
    icon: l,
    hasStarted: r,
    status: o,
    onEdit: c,
    extra: d
  } = e;
  switch (o) {
    case "good":
      s = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.CheckmarkLargeIcon, {
          size: "xs",
          color: "currentColor",
          className: N.checkmark
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-positive",
          className: N.statusText,
          children: T.Z.Messages.DEFAULT_CHANNELS_GOOD
        })]
      });
      break;
    case "warning":
      s = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.CircleExclamationPointIcon, {
          size: "xs",
          color: "currentColor",
          className: N.warning
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-warning",
          className: N.statusText,
          children: T.Z.Messages.ONBOARDING_PROMPTS_WARNING
        })]
      });
      break;
    case "required":
      s = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.CircleExclamationPointIcon, {
          size: "xs",
          color: "currentColor",
          className: N.danger
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-danger",
          className: N.statusText,
          children: T.Z.Messages.REQUIRED
        })]
      })
  }
  return (0, n.jsxs)("div", {
    className: N.onboardingStepContainer,
    children: [(0, n.jsxs)("div", {
      className: N.leftContainer,
      children: [(0, n.jsx)("div", {
        className: N.iconContainer,
        children: l
      }), (0, n.jsxs)("div", {
        className: N.onboardingStepText,
        children: [(0, n.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: t
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: r && "required" === o ? "status-danger" : "text-normal",
          children: i
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: N.rightContainer,
      children: [s, d, r ? (0, n.jsx)(a.Button, {
        className: N.cta,
        size: a.Button.Sizes.SMALL,
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.OUTLINED,
        onClick: c,
        children: T.Z.Messages.EDIT
      }) : (0, n.jsxs)(a.Button, {
        className: N.cta,
        innerClassName: N.ctaInner,
        size: a.Button.Sizes.SMALL,
        color: a.Button.Colors.PRIMARY,
        onClick: c,
        children: [T.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_SET_UP, (0, n.jsx)(a.ArrowSmallRightIcon, {
          size: "xxs",
          color: "currentColor"
        })]
      })]
    })]
  })
}

function S(e) {
  let s = (0, l.e7)([r.Z], () => r.Z.getDefaultChannelIds(e)),
    t = i.useMemo(() => new Set(s), [s]),
    [n, a] = (0, o.VF)(e, t);
  return a.length >= I.md && n.length >= I.X
}

function h(e) {
  let s = S(e),
    t = (0, _.O4)(e);
  return s || t
}

function g(e) {
  var s, t, c, d;
  let {
    guildId: u,
    onEdit: E,
    disableGoodStatus: h
  } = e, g = (0, l.Wu)([r.Z], () => r.Z.getDefaultChannelIds(u)), C = (0, l.e7)([r.Z], () => (0, o.kl)(u, r.Z.getDefaultChannelIds(u), r.Z.getOnboardingPrompts(u)).length), x = i.useMemo(() => new Set(g), [g]), [, R] = (0, o.VF)(u, x), L = R.length, O = S(u), A = (0, _.O4)(u), p = (0, l.e7)([r.Z], () => r.Z.isAdvancedMode(u));
  let M = (s = O, t = p, c = L, d = C, t ? T.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS_ADVANCED.format({
    numDefaultChannels: c,
    numFromQuestions: d - c
  }) : s ? T.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS.format({
    numDefaultChannels: c
  }) : T.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NOT_ENOUGH_DEFAULT_CHANNELS.format({
    numDefaultChannels: I.md,
    numChattableChannels: I.X
  }));
  return (0, n.jsx)(m, {
    title: p ? T.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_ADVANCED : T.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS,
    description: M,
    icon: (0, n.jsx)(a.TextIcon, {
      size: "md",
      color: "currentColor",
      className: N.channelIcon
    }),
    hasStarted: L > 0 || p,
    status: O || A ? h ? "none" : "good" : "required",
    onEdit: E
  })
}

function C(e) {
  let {
    guildId: s,
    onEdit: t,
    disableGoodStatus: i
  } = e, c = (0, l.Wu)([r.Z], () => r.Z.getDefaultChannelIds(s)), d = (0, l.Wu)([r.Z], () => r.Z.getOnboardingPrompts(s)), u = d.length, [E, _] = (0, o.dF)(s, d, c), I = E.length, S = E.length + _.length, h = I / S * 100, g = (0, l.e7)([r.Z], () => r.Z.isAdvancedMode(s)), C = u > 0, x = "none";
  return C && (h >= 85 && !i ? x = "good" : h < 85 && (x = "warning")), (0, n.jsx)(m, {
    title: g ? T.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : T.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER,
    description: T.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE.format({
      numChannels: I,
      numTotalChannels: S,
      channelsHook: (e, s) => (0, n.jsx)("span", {
        style: {
          color: h > 85 ? "var(--header-primary)" : "var(--status-warning)"
        },
        children: e
      }, s)
    }),
    icon: (0, n.jsx)(a.FriendsIcon, {
      size: "md",
      color: "currentColor",
      className: N.channelIcon
    }),
    hasStarted: C,
    status: x,
    onEdit: t
  })
}

function x(e) {
  let {
    guildId: s,
    onEdit: t,
    disableGoodStatus: o
  } = e, _ = (0, l.e7)([E.Z], () => E.Z.getSettings()), I = (0, l.e7)([r.Z], () => r.Z.getEnabled(s)), {
    serverGuideOptional: S
  } = (0, d.hl)(s), h = (0, c.uo)(_), g = _.enabled, C = i.useCallback(() => {
    (0, u.To)(s, !g)
  }, [s, g]), x = !(0, c.av)(_), R = "none";
  x && (h && !o ? R = "good" : !h && (R = "required"));
  let L = T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_DESCRIPTION;
  h ? !x && (L = T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_NOT_STARTED_DESCRIPTION) : L = T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_INVALID_DESCRIPTION;
  let O = null;
  return x && S && I && (O = (0, n.jsx)(a.Switch, {
    className: N.inlineSwitch,
    checked: g,
    onChange: C,
    disabled: !h
  })), (0, n.jsx)(m, {
    title: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_TITLE,
    description: L,
    icon: (0, n.jsx)(a.SignPostIcon, {
      size: "md",
      color: "currentColor",
      className: N.channelIcon
    }),
    hasStarted: x,
    status: R,
    onEdit: t,
    extra: O
  })
}