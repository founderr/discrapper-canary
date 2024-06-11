"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("920906"),
  o = s("442837"),
  d = s("692547"),
  u = s("215569"),
  c = s("780384"),
  E = s("481060"),
  _ = s("410030"),
  I = s("607070"),
  T = s("367907"),
  S = s("996753"),
  f = s("626135"),
  m = s("585483"),
  N = s("999382"),
  g = s("743475"),
  h = s("983135"),
  C = s("8426"),
  R = s("969632"),
  x = s("570961"),
  L = s("208665"),
  O = s("359191"),
  p = s("84658"),
  A = s("142961"),
  M = s("232764"),
  D = s("729311"),
  v = s("850864"),
  j = s("966301"),
  G = s("981631"),
  U = s("689938"),
  P = s("231249");

function b() {
  let e = (0, o.useStateFromStores)([N.default], () => N.default.getGuild());
  return null == e ? null : (0, a.jsx)(y, {
    guild: e
  })
}

function y(e) {
  let {
    guild: t
  } = e, n = t.id, N = (0, o.useStateFromStores)([O.default], () => O.default.getCurrentPage()), b = (0, A.default)(n), {
    hasChanges: y,
    hasConfiguredAnythingForCurrentStep: B,
    hasErrors: F
  } = (0, o.useStateFromStoresObject)([O.default], () => ({
    hasChanges: O.default.hasChanges(),
    hasConfiguredAnythingForCurrentStep: O.default.hasConfiguredAnythingForCurrentStep(),
    hasErrors: O.default.hasErrors()
  })), H = (0, o.useStateFromStores)([O.default], () => {
    let e = (0, p.pageToEducationUpsellType)(N);
    return null != e && !O.default.isEducationUpsellDismissed(e)
  }), k = (0, o.useStateFromStores)([I.default], () => I.default.useReducedMotion), w = (0, _.default)(), V = l.useRef(null), [{
    spring: Y
  }, W] = (0, r.useSpring)(() => ({
    spring: 0
  }));
  l.useEffect(() => {
    function e() {
      W({
        spring: 1,
        config: r.config.gentle
      }), W({
        spring: 0,
        config: r.config.gentle,
        delay: 1e3
      })
    }
    return m.ComponentDispatch.subscribe(G.ComponentActions.EMPHASIZE_NOTICE, e), () => {
      m.ComponentDispatch.unsubscribe(G.ComponentActions.EMPHASIZE_NOTICE, e)
    }
  }, [W]);
  let z = (0, E.useToken)(d.default.colors.BACKGROUND_FLOATING).hex(),
    K = (0, E.useToken)(d.default.unsafe_rawColors.PRIMARY_160).hex(),
    Z = (0, c.isThemeDark)(w) ? z : K,
    X = Y.to({
      range: [0, 1],
      output: [(0, E.useToken)(d.default.unsafe_rawColors.WHITE_500).hex(), (0, E.useToken)(d.default.colors.TEXT_NORMAL).hex()]
    }),
    Q = Y.to({
      range: [0, 1],
      output: [Z, (0, E.useToken)(d.default.colors.STATUS_DANGER).hex()]
    });
  if (b) {
    if (N === p.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) return (0, a.jsx)(D.GuildSettingsDefaultChannelsNotice, {});
    if (N === p.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) return (0, a.jsx)(j.GuildSettingsOnboardingPromptsNotice, {});
    else if (N === p.GuildSettingsOnboardingPage.HOME_SETTINGS) return (0, a.jsx)(v.GuildSettingsHomeSettingsNotice, {})
  }
  let J = N === p.ONBOARDING_STEPS[p.ONBOARDING_STEPS.length - 1],
    q = async () => {
      let e = L.default.advancedMode;
      if (y) try {
        if (N === p.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) await (0, g.saveDefaultChannels)(t).then(() => e ? (0, x.saveGuildOnboardingPrompts)(t, {
          ignoreDefaultPrompt: !0
        }) : Promise.resolve());
        else if (N === p.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) await (0, x.saveGuildOnboardingPrompts)(t, {
          ignoreDefaultPrompt: !0
        });
        else if (N === p.GuildSettingsOnboardingPage.HOME_SETTINGS) {
          let e = R.default.getSettings();
          await (0, C.saveHomeSettings)(t.id, e)
        }
      } catch {
        return !1
      }
      return !0
    }, $ = async () => {
      f.default.track(G.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
        ...(0, T.collectGuildAnalyticsMetadata)(n),
        step: p.GuildSettingsOnboardingPage[N],
        back: !1,
        skip: !y
      }), (0, h.dismissEducationUpsell)((0, p.pageToEducationUpsellType)(N)), await q() && (0, h.goToNextOnboardingStep)(n, N)
    }, ee = async () => {
      f.default.track(G.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
        ...(0, T.collectGuildAnalyticsMetadata)(n),
        step: p.GuildSettingsOnboardingPage[N],
        back: !0,
        skip: !1
      }), await q() && (0, h.goToPrevOnboardingStep)(n, N)
    }, et = null;
  H && (N === p.GuildSettingsOnboardingPage.SAFETY_CHECK ? et = (0, a.jsx)(M.SafetyCheckUpsell, {}) : N === p.GuildSettingsOnboardingPage.DEFAULT_CHANNELS ? et = (0, a.jsx)(M.DefaultChannelsUpsell, {}) : N === p.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS ? et = (0, a.jsx)(M.CustomizationQuestionsUpsell, {}) : N === p.GuildSettingsOnboardingPage.HOME_SETTINGS && (et = (0, a.jsx)(M.HomeSettingsUpsell, {})));
  let es = (0, a.jsx)(E.Button, {
      className: i()(P.button, {
        [P.hidden]: H
      }),
      color: E.Button.Colors.PRIMARY,
      look: E.Button.Looks.OUTLINED,
      size: E.Button.Sizes.SMALL,
      onClick: ee,
      disabled: H || F,
      children: (0, a.jsxs)("span", {
        className: P.button,
        children: [(0, a.jsx)(S.default, {
          className: P.arrow,
          direction: S.default.Directions.LEFT
        }), U.default.Messages.BACK]
      })
    }),
    ea = (0, a.jsx)(E.Button, {
      className: P.button,
      color: B ? E.Button.Colors.BRAND : E.Button.Colors.PRIMARY,
      look: E.Button.Looks.FILLED,
      size: E.Button.Sizes.SMALL,
      onClick: $,
      disabled: H || F,
      children: (0, a.jsxs)(r.animated.span, {
        className: P.button,
        style: {
          color: X
        },
        children: [B ? U.default.Messages.NEXT : U.default.Messages.SKIP, (0, a.jsx)(S.default, {
          className: P.arrow,
          direction: S.default.Directions.RIGHT
        })]
      })
    });
  return (0, a.jsx)(u.TransitionGroup, {
    component: "div",
    children: (0, a.jsx)(E.SlideIn, {
      className: i()(P.noticeRegion),
      children: (0, a.jsx)(r.animated.div, {
        className: P.container,
        style: {
          backgroundColor: Q
        },
        children: (0, a.jsxs)("div", {
          className: P.flexContainer,
          ref: V,
          children: [H ? (0, a.jsxs)("div", {
            className: P.educationUpsellRoot,
            children: [(0, a.jsx)("img", {
              className: i()(P.wumpus, {
                [P.animated]: !k
              }),
              src: s("33631"),
              alt: "wumpus"
            }), (0, a.jsxs)("div", {
              className: P.educationUpsell,
              children: [et, (0, a.jsx)("div", {
                className: P.educationUpsellArrow
              })]
            })]
          }) : null, (0, a.jsx)(E.FocusRingScope, {
            containerRef: V,
            children: (0, a.jsxs)("div", {
              className: P.actions,
              children: [es, (0, a.jsxs)("div", {
                className: P.next,
                children: [F ? (0, a.jsx)(E.Text, {
                  variant: "text-sm/normal",
                  color: "status-warning",
                  children: U.default.Messages.ONBOARDING_PROMPTS_INCOMPLETE
                }) : null, J ? null : ea]
              })]
            })
          })]
        })
      })
    })
  })
}