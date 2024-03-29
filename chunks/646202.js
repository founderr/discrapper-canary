"use strict";
a.r(t), a.d(t, {
  default: function() {
    return R
  }
}), a("47120");
var l, s, n = a("735250"),
  r = a("470079"),
  i = a("803997"),
  c = a.n(i),
  o = a("505578"),
  d = a.n(o),
  u = a("718017"),
  m = a("902190"),
  x = a("25752"),
  h = a("149020"),
  p = a("331650"),
  N = a("481060"),
  j = a("442837"),
  C = a("607070"),
  v = a("594174"),
  T = a("153124"),
  g = a("975667"),
  E = a("626135"),
  k = a("792125"),
  S = a("547280"),
  f = a("678513"),
  y = a("445507"),
  I = a("981631"),
  _ = a("689938"),
  M = a("720871");
let P = (0, k.getThemeClass)(I.ThemeTypes.DARK);

function O(e) {
  let {
    selectedOption: t,
    targetKey: a,
    data: l,
    handleGoToNextFormGroup: s
  } = e, [i, c] = r.useState(""), [o, d] = r.useState(null), [u, m] = r.useState(null), [x, h] = r.useState(!1), [p, j] = r.useState(!1), C = r.useCallback(e => {
    let {
      value: t
    } = e;
    null != l.current && (l.current.playstyle = t, m(t), s(6))
  }, [l, m, s]), v = r.useCallback(() => {
    if (null != l.current) {
      let e = !x;
      h(e), l.current.acknowledgeCap = e, e && p && s(8)
    }
  }, [p, x, h, l, s]), T = r.useCallback(() => {
    if (null != l.current) {
      let e = !p;
      j(e), l.current.acknowledgeScreen = e, e && x && s(8)
    }
  }, [x, p, j, l, s]), g = r.useCallback(e => {
    null != l.current && (l.current.email = e, c(e), d(null))
  }, [l, d]), E = r.useCallback(() => {
    if (null != t && null != l.current) {
      if (i.length < 3 || -1 === i.indexOf("@")) {
        d(_.default.Messages.SIGNUP_EMAIL_ERROR);
        return
      }(0, S.completeSignUp)({
        targetKey: a,
        data: l.current,
        completed: !0
      })
    }
  }, [a, i, t, d, l]);
  return null == t ? null : "email" === t.type ? (0, n.jsxs)("div", {
    className: M.emailContainer,
    children: [(0, n.jsx)(N.Text, {
      variant: "text-lg/medium",
      color: "header-primary",
      children: _.default.Messages.SIGNUP_EMAIL_PROMPT
    }), (0, n.jsxs)("div", {
      className: M.emailForm,
      children: [(0, n.jsx)(N.TextInput, {
        className: M.emailInput,
        value: i,
        onChange: g,
        placeholder: _.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
        error: o
      }), (0, n.jsx)(N.Button, {
        onClick: E,
        children: (0, n.jsx)(N.Text, {
          variant: "text-sm/medium",
          color: "interactive-active",
          children: _.default.Messages.SIGNUP_COMPLETE_CTA
        })
      })]
    })]
  }) : "clan" === t.type ? (0, n.jsxs)("div", {
    className: M.form,
    children: [(0, n.jsxs)("div", {
      className: M.formGroup,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(N.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: _.default.Messages.SIGNUP_CLAN_PLAYSTYLE_TITLE
        }), (0, n.jsx)(N.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: _.default.Messages.SIGNUP_CLAN_PLAYSTYLE_DESCRIPTION
        })]
      }), (0, n.jsx)("div", {
        className: M.options,
        children: (0, y.getClanOptions)(_.default).map(e => (0, n.jsx)(b, {
          option: e,
          isSelected: e.value === u,
          onOptionSelected: C
        }, e.value))
      })]
    }), (0, n.jsxs)("div", {
      className: M.formGroup,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(N.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: _.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENTS_TITLE
        }), (0, n.jsx)(N.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: _.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENTS_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: M.acknowledgements,
        children: [(0, n.jsxs)(N.Clickable, {
          className: M.acknowledgement,
          onClick: v,
          children: [(0, n.jsx)(N.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: _.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENT_CAP
          }), (0, n.jsx)("div", {
            className: M.checkboxWrapper,
            children: (0, n.jsx)(N.Checkbox, {
              displayOnly: !0,
              type: N.Checkbox.Types.INVERTED,
              value: x
            })
          })]
        }), (0, n.jsxs)(N.Clickable, {
          className: M.acknowledgement,
          onClick: T,
          children: [(0, n.jsx)(N.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: _.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENT_APPROVAL
          }), (0, n.jsx)("div", {
            className: M.checkboxWrapper,
            children: (0, n.jsx)(N.Checkbox, {
              displayOnly: !0,
              type: N.Checkbox.Types.INVERTED,
              value: p
            })
          })]
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: M.formGroup,
      children: [(0, n.jsx)(N.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: _.default.Messages.SIGNUP_EMAIL_PROMPT
      }), (0, n.jsxs)("div", {
        className: M.emailForm,
        children: [(0, n.jsx)(N.TextInput, {
          className: M.emailInput,
          value: i,
          onChange: g,
          placeholder: _.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
          error: o
        }), (0, n.jsx)(N.Button, {
          onClick: E,
          children: (0, n.jsx)(N.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: _.default.Messages.SIGNUP_COMPLETE_CTA
          })
        })]
      })]
    })]
  }) : (0, n.jsx)("div", {})
}

function L(e) {
  let {
    iconName: t
  } = e, a = null;
  switch (t) {
    case "compass":
      a = (0, n.jsx)(m.CompassIcon, {
        className: M.icon
      });
      break;
    case "gamepad":
      a = (0, n.jsx)(g.default, {
        className: M.icon
      });
      break;
    case "controller":
      a = (0, n.jsx)(h.GameControllerIcon, {
        className: M.icon
      });
      break;
    case "microphone":
      a = (0, n.jsx)(p.MicrophoneIcon, {
        className: M.icon
      });
      break;
    default:
      a = null
  }
  return (0, n.jsx)("div", {
    className: M.iconContainer,
    children: a
  })
}

function b(e) {
  let {
    option: t,
    icon: a,
    isSelected: l,
    onOptionSelected: s
  } = e, [i, o] = r.useState(!1), d = (0, N.useToken)(N.tokens.colors.BACKGROUND_TERTIARY).hsl({
    opacity: i && !l ? .9 : .8
  }), u = r.useCallback(() => {
    s(t)
  }, [s, t]);
  return (0, n.jsxs)(N.Clickable, {
    className: c()(M.option, {
      [M.selectedOption]: l
    }),
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    style: {
      backgroundColor: d
    },
    onClick: u,
    children: [a, (0, n.jsxs)("div", {
      className: M.optionContent,
      children: [(0, n.jsx)(N.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: t.title
      }), (0, n.jsx)(N.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: t.description
      })]
    })]
  })
}

function A(e) {
  let {
    option: t,
    selectedOption: a,
    setSelectedOption: l
  } = e, s = t.key === (null == a ? void 0 : a.key);
  return (0, n.jsx)(b, {
    option: t,
    icon: (0, n.jsx)(L, {
      iconName: t.icon
    }),
    isSelected: s,
    onOptionSelected: l
  })
}

function G(e) {
  let {
    target: t,
    selectedOption: a,
    handleSetSelectedOption: l,
    data: s
  } = e, i = (0, j.useStateFromStores)([C.default], () => C.default.useReducedMotion), [{
    state: c
  }, o] = (0, u.useSpring)(() => ({
    state: 0
  }), []), m = (0, j.useStateFromStores)([v.default], () => v.default.getCurrentUser()), h = c.to({
    range: [0, 1],
    output: [1, 0]
  }), p = c.to({
    range: [0, 1],
    output: [0, 1]
  }), T = c.to({
    range: [0, 10],
    output: [0, -700]
  }), g = r.useCallback(e => {
    l(e), o({
      state: "email" === e.type ? 2 : 3,
      immediate: i
    })
  }, [l, o, i]), E = r.useCallback(e => {
    o({
      state: e,
      immediate: i
    })
  }, [o, i]);
  return null == m ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.animated.div, {
      className: M.header,
      style: {
        opacity: h
      },
      children: [(0, n.jsxs)("div", {
        className: M.eyebrow,
        children: [(0, n.jsx)(x.EnvelopeIcon, {
          height: 12,
          width: 12,
          color: "currentColor"
        }), (0, n.jsx)(N.Text, {
          variant: "text-xs/semibold",
          color: "none",
          children: _.default.Messages.SIGNUP_NOTICE_EYEBROW
        })]
      }), (0, n.jsx)(N.Heading, {
        variant: "heading-xxl/medium",
        color: "header-primary",
        children: t.title
      }), (0, n.jsx)(N.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: t.subtitle
      })]
    }), (0, n.jsxs)(u.animated.div, {
      className: M.question,
      style: {
        transform: T.to(e => "translateY(".concat(e, "px)")),
        marginTop: t.questionMargin
      },
      children: [(0, n.jsx)(N.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: t.question
      }), (0, n.jsx)("div", {
        className: M.options,
        children: (function(e, t) {
          let a = e.slice();
          return a.sort((e, a) => {
            let l = d().v3("".concat(e.key).concat(t));
            return l - d().v3("".concat(a.key).concat(t))
          }), a
        })(t.options, m.id).map(e => (0, n.jsx)(A, {
          option: e,
          selectedOption: a,
          setSelectedOption: g
        }, e.key))
      })]
    }), (0, n.jsx)(u.animated.div, {
      style: {
        transform: T.to(e => "translateY(".concat(e, "px)")),
        opacity: p
      },
      children: (0, n.jsx)(O, {
        selectedOption: a,
        targetKey: t.key,
        data: s,
        handleGoToNextFormGroup: E
      })
    })]
  })
}

function R(e) {
  let {
    target: t,
    guildId: a,
    transitionState: l,
    onClose: s
  } = e, i = (0, T.useUID)(), o = r.useRef({
    guildId: a
  }), [d, u] = r.useState(null), m = (0, j.useStateFromStores)([f.default], () => f.default.hasCompletedTarget(t.key)) ? 1 : 0;
  r.useEffect(() => {
    E.default.track(I.AnalyticEvents.SIGNUP_VIEWED, {
      target_key: t.key,
      guild_id: a
    });
    let e = o.current;
    return () => {
      (0, S.completeSignUp)({
        targetKey: t.key,
        data: e,
        completed: !1
      })
    }
  }, [t.key, o, a]);
  let x = r.useCallback(e => {
      null != o.current && (o.current.selectedOptionKey = e.key, u(e))
    }, [u, o]),
    h = "url(".concat(t.backgroundAssetUrl, ") black top / cover no-repeat"),
    p = null;
  switch (m) {
    case 0:
      p = (0, n.jsx)(G, {
        target: t,
        selectedOption: d,
        handleSetSelectedOption: x,
        data: o
      });
      break;
    case 1:
      p = (0, n.jsxs)("div", {
        className: M.completedContainer,
        children: [(0, n.jsx)(N.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: _.default.Messages.SIGNUP_COMPLETED_TITLE
        }), (0, n.jsx)(N.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: _.default.Messages.SIGNUP_COMPLETED_DESCRIPTION
        }), (0, n.jsx)("div", {
          children: (0, n.jsx)(N.Button, {
            onClick: s,
            children: (0, n.jsx)(N.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: _.default.Messages.CLOSE
            })
          })
        })]
      })
  }
  return (0, n.jsx)(N.ThemeContextProvider, {
    theme: I.ThemeTypes.DARK,
    children: (0, n.jsxs)(N.ModalRoot, {
      transitionState: l,
      "aria-labelledby": i,
      size: N.ModalSize.LARGE,
      className: c()(M.modal, P),
      children: [(0, n.jsxs)(N.Scroller, {
        className: M.content,
        children: [(0, n.jsx)("div", {
          style: {
            background: h,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }
        }), (0, n.jsx)("div", {
          className: M.contentInner,
          children: (0, n.jsx)(N.Sequencer, {
            animationMotionType: "lift",
            fillParent: !0,
            step: m,
            steps: [0, 1],
            children: p
          })
        })]
      }), (0, n.jsx)("div", {
        className: M.closeButtonContainer,
        children: (0, n.jsx)(N.ModalCloseButton, {
          onClick: s
        })
      })]
    })
  })
}(s = l || (l = {}))[s.OPTIONS = 0] = "OPTIONS", s[s.COMPLETED = 1] = "COMPLETED"