"use strict";
t.d(s, {
  ZP: function() {
    return R
  },
  Zm: function() {
    return O
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(852860),
  o = t(471445),
  c = t(45966),
  d = t(637853),
  u = t(999382),
  E = t(889369),
  _ = t(983135),
  I = t(570961),
  T = t(208665),
  N = t(974513),
  m = t(716130),
  S = t(981631),
  h = t(290511),
  g = t(689938),
  C = t(82591);

function x(e) {
  let {
    guildId: s,
    prompts: t
  } = e, r = (0, l.e7)([E.Z], () => E.Z.editedDefaultChannelIds), [c, u] = (0, d.dF)(s, t, [...r]), _ = c.length, I = c.length + u.length, T = _ / I * 100, N = Math.max(Math.ceil(85 * I / 100) - _, 0), [m, S] = i.useState(!1), h = m ? a.ChevronSmallDownIcon : a.ChevronSmallUpIcon;
  return (0, n.jsxs)("div", {
    className: C.channelCoverage,
    children: [(0, n.jsxs)(a.Clickable, {
      className: C.coverageHeader,
      onClick: () => S(!m),
      children: [(0, n.jsxs)("div", {
        className: C.warningTextContainer,
        children: [T <= 85 && (0, n.jsx)(a.CircleExclamationPointIcon, {
          size: "xs",
          color: "currentColor",
          className: C.warning
        }), (0, n.jsx)(a.Text, {
          className: C.coverageTitle,
          variant: "text-xs/medium",
          color: "text-muted",
          children: g.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_MISSING_CHANNELS.format({
            numChannelsMissing: I - _
          })
        })]
      }), (0, n.jsxs)("div", {
        className: C.progressContainer,
        children: [(0, n.jsx)(a.Progress, {
          className: C.coverageProgress,
          foregroundColor: T > 85 ? "var(--status-positive)" : "var(--status-warning)",
          percent: T
        }), (0, n.jsx)(h, {
          size: "md",
          color: "currentColor",
          className: C.caret
        })]
      })]
    }), m ? (0, n.jsxs)("div", {
      className: C.channelCoverageDetails,
      children: [(0, n.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: g.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_CHANNELS
      }), (0, n.jsx)("div", {
        className: C.channels,
        children: u.map(e => {
          var s;
          let t = null !== (s = (0, o.KS)(e)) && void 0 !== s ? s : a.TextIcon;
          return (0, n.jsx)("div", {
            className: C.channelPill,
            children: (0, n.jsxs)(a.Text, {
              className: C.channel,
              variant: "text-xs/normal",
              color: "interactive-active",
              children: [(0, n.jsx)(t, {
                size: "xxs",
                color: "currentColor"
              }), e.name]
            })
          }, e.id)
        })
      }), (0, n.jsx)("div", {
        className: C.channelCoverageHint,
        children: N > 0 ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(a.CircleExclamationPointIcon, {
            size: "xs",
            color: "currentColor"
          }), (0, n.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: g.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_ADD_HELP.format({
              numChannels: N
            })
          })]
        }) : (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.Z.Messages.GUILD_NO_CHANNELS_HEADER
        })
      })]
    }) : null]
  })
}

function R(e) {
  let {
    saveOnClose: s
  } = e, t = (0, l.e7)([u.Z], () => u.Z.getGuild());
  return null == t ? null : (0, n.jsx)(L, {
    guild: t,
    saveOnClose: s
  })
}

function L(e) {
  let {
    guild: s,
    saveOnClose: t
  } = e, r = (0, l.e7)([c.Z], () => c.Z.isLoading()), o = (0, l.e7)([T.Z], () => T.Z.editedOnboardingPrompts), d = (0, l.e7)([T.Z], () => T.Z.advancedMode), u = i.useRef(!1);
  if (i.useEffect(() => {
      !r && !u.current && 0 === o.length && (u.current = !0, !d && (0, I.tS)(s, [(0, h.ae)()], !1))
    }), i.useEffect(() => {
      if (t) return () => {
        (0, I.rS)(s, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }
    }, [t]), null == s) return null;
  let E = async () => {
    try {
      await (0, I.rS)(s), await (0, _.di)(s.id)
    } catch {}
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(a.Heading, {
      className: C.header,
      variant: "heading-lg/extrabold",
      children: d ? g.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : g.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER
    }), (0, n.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: g.Z.Messages.ONBOARDING_PROMPT_SETTINGS_SUBHEADER
    }), (0, n.jsxs)("div", {
      className: C.links,
      children: [(0, n.jsx)(a.Anchor, {
        target: "_blank",
        href: S.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: g.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
        })
      }), (0, n.jsx)("div", {
        className: C.dot
      }), (0, n.jsx)(a.Anchor, {
        onClick: E,
        children: (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: g.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
        })
      }), (0, n.jsx)("div", {
        className: C.dot
      }), (0, n.jsx)(N.Wu, {
        guildId: s.id
      })]
    }), (0, n.jsx)(x, {
      guildId: s.id,
      prompts: o
    }), (0, n.jsx)("div", {
      className: C.prompts,
      children: r ? (0, n.jsx)(a.Spinner, {}) : (0, n.jsx)(m.Z, {
        postjoinOnly: d,
        guildId: s.id
      })
    })]
  })
}

function O() {
  let e = (0, l.e7)([u.Z], () => u.Z.getGuild()),
    s = (0, l.e7)([T.Z], () => T.Z.submitting);
  return null == e ? null : (0, n.jsx)(r.Z, {
    onSave: () => {
      try {
        (0, I.rS)(e)
      } catch {}
    },
    onReset: I.NB,
    submitting: s,
    onSaveText: g.Z.Messages.SAVE
  })
}