s.d(t, {
  Z: function() {
    return _
  }
});
var n = s(735250),
  r = s(470079),
  l = s(399606),
  i = s(481060),
  o = s(367907),
  a = s(863249),
  d = s(944163),
  c = s(14263),
  u = s(996753),
  m = s(626135),
  h = s(823379),
  x = s(806223),
  g = s(45966),
  p = s(637853),
  N = s(968644),
  E = s(104265),
  I = s(588632),
  f = s(290511),
  Z = s(981631),
  j = s(689938),
  v = s(570754);

function O(e, t) {
  return (0, n.jsx)("span", {
    className: v.helpTextItem,
    children: e
  }, t)
}

function C(e) {
  return null != e && x.Z.getCurrentConfig({
    location: "ba216b_1"
  }, {
    autoTrackExposure: !0
  }).includeRules
}

function R(e) {
  let {
    headerId: t,
    guild: s,
    step: r,
    lastPrompt: o,
    questionCount: a,
    currentPrompt: d,
    selectOption: m,
    gotoPrevPrompt: h,
    gotoNextPrompt: x,
    completeOnboarding: E
  } = e, f = (0, l.Wu)([g.Z], () => g.Z.getOnboardingResponsesForPrompt(s.id, d.id)), Z = 0 === f.length && (null == d ? void 0 : d.required), C = null == d ? void 0 : d.options.filter(e => f.includes(e.id)), R = (0, p.L6)(C), b = (0, p.dX)(C), _ = 0 === f.length, {
    helpText: D,
    helpTextAdditional: M
  } = (0, N.Z)({
    guild: s,
    prompt: d,
    selectedRoleIds: R,
    selectedChannelIds: b,
    itemHook: O
  }), T = (0, c.Z)(s.id, 1e3), B = d.options.map(e => ({
    value: e.id,
    ...e
  })), P = d.options.filter(e => f.includes(e.id)).map(e => e.id);
  return (0, n.jsx)("div", {
    className: v.prompt,
    children: (0, n.jsxs)("div", {
      className: v.promptContent,
      children: [(0, n.jsxs)(i.ScrollerThin, {
        className: v.scrollerContent,
        children: [(0, n.jsxs)("div", {
          className: v.questionHeader,
          children: [(0, n.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: j.Z.Messages.ONBOARDING_QUESTION_COUNT.format({
              currentQuestion: r + 1,
              questionCount: a
            })
          }), d.required ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(i.Text, {
              variant: "text-xs/normal",
              className: v.headerSeparator,
              children: "\xb7"
            }), (0, n.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: j.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
            })]
          }) : null]
        }), (0, n.jsx)(i.Heading, {
          className: v.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: d.title
        }), (0, n.jsx)(I.Z, {
          options: B,
          value: P,
          onChange: e => {
            let t = e.find(e => !f.includes(e.id)),
              s = e.map(e => e.id);
            if (null != t) m(d.id, t.id, !0);
            else {
              let e = f.filter(e => !s.includes(e));
              d.options.filter(t => e.includes(t.id)).forEach(e => {
                m(d.id, e.id, !1)
              })
            }
          },
          memberCounts: T
        })]
      }), (0, n.jsxs)("div", {
        className: v.navButtons,
        children: [(0, n.jsx)("div", {
          className: v.leftButtons,
          children: r > 0 && (0, n.jsxs)(i.Button, {
            className: v.button,
            innerClassName: v.buttonInner,
            onClick: () => h(f.length),
            size: i.Button.Sizes.MEDIUM,
            look: i.Button.Looks.OUTLINED,
            grow: !1,
            color: i.Button.Colors.PRIMARY,
            children: [(0, n.jsx)(u.Z, {
              className: v.arrow,
              direction: u.Z.Directions.LEFT
            }), j.Z.Messages.BACK]
          })
        }), (0, n.jsxs)("div", {
          className: v.rightButtons,
          children: [(0, n.jsxs)(i.Text, {
            className: v.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [D, " ", M]
          }), (0, n.jsx)(i.Tooltip, {
            text: Z ? j.Z.Messages.ONBOARDING_REQUIRED_QUESTION : null,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: s
              } = e;
              return (0, n.jsx)(i.Button, {
                className: v.button,
                innerClassName: v.buttonInner,
                onMouseEnter: t,
                onMouseLeave: s,
                onClick: () => o ? E() : x(f.length),
                disabled: Z,
                size: i.Button.Sizes.MEDIUM,
                look: i.Button.Looks.FILLED,
                grow: !1,
                color: _ ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                children: o ? (0, n.jsxs)(n.Fragment, {
                  children: [j.Z.Messages.FINISH, (0, n.jsx)("span", {
                    className: v.finishEmoji,
                    role: "img",
                    "aria-hidden": !0,
                    children: "\uD83C\uDF89"
                  })]
                }) : (0, n.jsxs)(n.Fragment, {
                  children: [_ ? j.Z.Messages.SKIP : j.Z.Messages.NEXT, (0, n.jsx)(u.Z, {
                    className: v.arrow,
                    direction: u.Z.Directions.RIGHT
                  })]
                })
              })
            }
          })]
        })]
      })]
    })
  })
}

function b(e) {
  let {
    headerId: t,
    guild: s,
    step: r,
    lastPrompt: o,
    questionCount: a,
    currentPrompt: d,
    selectOption: c,
    gotoPrevPrompt: m,
    gotoNextPrompt: h,
    completeOnboarding: x
  } = e, I = (0, l.Wu)([g.Z], () => g.Z.getOnboardingResponsesForPrompt(s.id, d.id)), f = 0 === I.length && (null == d ? void 0 : d.required), Z = null == d ? void 0 : d.options.filter(e => I.includes(e.id)), C = (0, p.L6)(Z), R = (0, p.dX)(Z), b = 0 === I.length, {
    helpText: _,
    helpTextAdditional: D
  } = (0, N.Z)({
    guild: s,
    prompt: d,
    selectedRoleIds: C,
    selectedChannelIds: R,
    itemHook: O
  });
  return (0, n.jsx)("div", {
    className: v.prompt,
    children: (0, n.jsxs)("div", {
      className: v.promptContent,
      children: [(0, n.jsxs)(i.ScrollerThin, {
        className: v.scrollerContent,
        children: [(0, n.jsxs)("div", {
          className: v.questionHeader,
          children: [(0, n.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: j.Z.Messages.ONBOARDING_QUESTION_COUNT.format({
              currentQuestion: r + 1,
              questionCount: a
            })
          }), d.required ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(i.Text, {
              variant: "text-xs/normal",
              className: v.headerSeparator,
              children: "\xb7"
            }), (0, n.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: j.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
            })]
          }) : null]
        }), (0, n.jsx)(i.Heading, {
          className: v.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: d.title
        }), (0, n.jsx)("div", {
          className: v.promptOptions,
          children: d.options.map(e => (0, n.jsx)(E.Z, {
            guildId: s.id,
            option: e,
            onSelect: t => c(d.id, e.id, null != t && t),
            selected: I.includes(e.id)
          }, e.id))
        })]
      }), (0, n.jsxs)("div", {
        className: v.navButtons,
        children: [(0, n.jsx)("div", {
          className: v.leftButtons,
          children: r > 0 && (0, n.jsxs)(i.Button, {
            className: v.button,
            innerClassName: v.buttonInner,
            onClick: () => m(I.length),
            size: i.Button.Sizes.MEDIUM,
            look: i.Button.Looks.OUTLINED,
            grow: !1,
            color: i.Button.Colors.PRIMARY,
            children: [(0, n.jsx)(u.Z, {
              className: v.arrow,
              direction: u.Z.Directions.LEFT
            }), j.Z.Messages.BACK]
          })
        }), (0, n.jsxs)("div", {
          className: v.rightButtons,
          children: [(0, n.jsxs)(i.Text, {
            className: v.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [_, " ", D]
          }), (0, n.jsx)(i.Tooltip, {
            text: f ? j.Z.Messages.ONBOARDING_REQUIRED_QUESTION : null,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: s
              } = e;
              return (0, n.jsx)(i.Button, {
                className: v.button,
                innerClassName: v.buttonInner,
                onMouseEnter: t,
                onMouseLeave: s,
                onClick: () => o ? x() : h(I.length),
                disabled: f,
                size: i.Button.Sizes.MEDIUM,
                look: i.Button.Looks.FILLED,
                grow: !1,
                color: b ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                children: o ? (0, n.jsxs)(n.Fragment, {
                  children: [j.Z.Messages.FINISH, (0, n.jsx)("span", {
                    className: v.finishEmoji,
                    role: "img",
                    "aria-hidden": !0,
                    children: "\uD83C\uDF89"
                  })]
                }) : (0, n.jsxs)(n.Fragment, {
                  children: [b ? j.Z.Messages.SKIP : j.Z.Messages.NEXT, (0, n.jsx)(u.Z, {
                    className: v.arrow,
                    direction: u.Z.Directions.RIGHT
                  })]
                })
              })
            }
          })]
        })]
      })]
    })
  })
}

function _(e) {
  let {
    guild: t,
    prompts: s,
    step: i,
    selectOption: c,
    completeOnboarding: u,
    setCurrentStep: x,
    headerId: g,
    disableTracking: p
  } = e, N = (0, l.e7)([d.Z], () => d.Z.getRulesPrompt(t.id));
  r.useEffect(() => {
    a.Z.fetchVerificationForm(t.id)
  }, [t.id]);
  let E = s[i],
    I = i + 1 >= s.length && !C(N),
    j = s[0].required;
  r.useEffect(() => {
    if (!p) m.default.track(Z.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
      ...(0, o.hH)(t.id),
      step: 0,
      required: j
    })
  }, [t.id, j, p]);
  let v = e => {
      !p && (m.default.track(Z.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
        ...(0, o.hH)(t.id),
        step: i,
        options_selected: e,
        skipped: 0 === e,
        back: !1,
        in_onboarding: !0,
        is_final_step: !1
      }), i < s.length - 1 && m.default.track(Z.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
        ...(0, o.hH)(t.id),
        step: i,
        required: s[i + 1].required
      })), i + 1 < s.length ? x(i + 1) : C(N) && x("rules")
    },
    O = e => {
      !p && (m.default.track(Z.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
        ...(0, o.hH)(t.id),
        step: i,
        skipped: !1,
        back: !0,
        options_selected: e,
        in_onboarding: !0,
        is_final_step: !1
      }), i > 0 && m.default.track(Z.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
        ...(0, o.hH)(t.id),
        step: i - 1,
        required: s[i - 1].required
      })), x(Math.max(0, i - 1))
    };
  if (null == E) return null;
  switch (E.type) {
    case f.FN.MULTIPLE_CHOICE:
      return (0, n.jsx)(b, {
        guild: t,
        headerId: g,
        step: i,
        questionCount: s.length,
        currentPrompt: E,
        lastPrompt: I,
        selectOption: c,
        gotoPrevPrompt: O,
        gotoNextPrompt: v,
        completeOnboarding: u
      });
    case f.FN.DROPDOWN:
      return (0, n.jsx)(R, {
        guild: t,
        headerId: g,
        step: i,
        questionCount: s.length,
        currentPrompt: E,
        lastPrompt: I,
        selectOption: c,
        gotoPrevPrompt: O,
        gotoNextPrompt: v,
        completeOnboarding: u
      });
    default:
      (0, h.vE)(E.type)
  }
}