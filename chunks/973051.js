s.d(t, {
  Z: function() {
    return E
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  l = s(399606),
  i = s(780384),
  o = s(481060),
  a = s(410030),
  d = s(367907),
  c = s(863249),
  u = s(944163),
  m = s(454585),
  h = s(996753),
  x = s(626135),
  g = s(981631),
  p = s(689938),
  N = s(570754);

function E(e) {
  var t;
  let {
    guild: s,
    prompts: E,
    completeOnboarding: I,
    setCurrentStep: f,
    disableTracking: Z,
    previousPromptIndex: j
  } = e, v = r.useRef(null), O = (0, l.e7)([u.Z], () => u.Z.getRulesPrompt(s.id)), [C, R] = r.useState(null !== (t = null == O ? void 0 : O.response) && void 0 !== t && t), b = (0, l.e7)([u.Z], () => u.Z.get(s.id)), _ = (0, a.ZP)(), D = r.useRef(null), M = r.useRef(null), T = (0, i.wj)(_) ? "linear-gradient(to top, rgba(54, 57, 63, 1), rgba(54, 57, 63, 0))" : "linear-gradient(to top, rgba(242, 243, 245, 1), rgba(242, 243, 245, 0))", B = r.useCallback(async () => {
    if (null != b && null != O) {
      try {
        await c.Z.submitVerificationForm(s.id, {
          ...b,
          formFields: [{
            ...O,
            response: C
          }]
        })
      } catch {}
      I()
    }
  }, [s.id, b, O, C, I]);

  function P(e) {
    let [t] = e;
    t.isIntersecting && R(!0)
  }
  return (r.useEffect(() => {
    let e = new IntersectionObserver(P, {
        root: D.current,
        rootMargin: "0px",
        threshold: 0
      }),
      t = M.current;
    return null != t && null != t.lastElementChild && e.observe(t.lastElementChild), () => {
      null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild)
    }
  }, [M, D]), null == O) ? null : (0, n.jsx)("div", {
    className: N.prompt,
    children: (0, n.jsxs)("div", {
      className: N.promptContent,
      ref: D,
      children: [(0, n.jsxs)(o.AdvancedScrollerThin, {
        className: N.scrollerContent,
        ref: v,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: p.Z.Messages.ONBOARDING_RULES_STEP
        }), (0, n.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          children: p.Z.Messages.ONBOARDING_RULES_TITLE
        }), (0, n.jsx)("div", {
          className: N.termsFieldBody,
          ref: M,
          children: O.values.map((e, t) => (0, n.jsxs)("div", {
            className: N.termsRow,
            children: [(0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "".concat(t + 1, ".")
            }), (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: N.termsRowContent,
              children: m.Z.parseGuildVerificationFormRule(e, !0, {
                channelId: s.rulesChannelId
              })
            })]
          }, "term-".concat(t)))
        })]
      }), (0, n.jsx)("div", {
        className: N.overlay,
        style: {
          background: T
        }
      }), (0, n.jsxs)("div", {
        className: N.navButtons,
        children: [(0, n.jsx)("div", {
          className: N.leftButtons,
          children: -1 !== j && (0, n.jsxs)(o.Button, {
            innerClassName: N.buttonInner,
            onClick: () => {
              !Z && (x.default.track(g.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, d.hH)(s.id),
                step: -1,
                skipped: !1,
                back: !0,
                options_selected: 0,
                in_onboarding: !0,
                is_final_step: !1
              }), j >= 0 && x.default.track(g.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                ...(0, d.hH)(s.id),
                step: j,
                required: E[j].required
              })), f(j)
            },
            size: o.Button.Sizes.MEDIUM,
            look: o.Button.Looks.OUTLINED,
            grow: !1,
            color: o.Button.Colors.PRIMARY,
            children: [(0, n.jsx)(h.Z, {
              className: N.arrow,
              direction: h.Z.Directions.LEFT
            }), p.Z.Messages.BACK]
          })
        }), (0, n.jsxs)("div", {
          className: N.rightButtons,
          children: [(0, n.jsx)(o.Text, {
            className: N.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: C ? p.Z.Messages.MEMBER_VERIFICATION_READ_AGREE_RULES : p.Z.Messages.MEMBER_VERIFICATION_MUST_READ_RULES
          }), (0, n.jsxs)(o.Button, {
            innerClassName: N.buttonInner,
            onClick: B,
            disabled: !C,
            size: o.Button.Sizes.MEDIUM,
            look: o.Button.Looks.FILLED,
            grow: !1,
            color: o.Button.Colors.BRAND,
            children: [p.Z.Messages.FINISH, (0, n.jsx)("span", {
              className: N.finishEmoji,
              role: "img",
              "aria-hidden": !0,
              children: "\uD83C\uDF89"
            })]
          })]
        })]
      })]
    })
  })
}