"use strict";
a.r(t), a.d(t, {
  default: function() {
    return G
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
  p = a("481060"),
  N = a("442837"),
  j = a("607070"),
  C = a("594174"),
  v = a("153124"),
  T = a("975667"),
  E = a("626135"),
  g = a("792125"),
  k = a("547280"),
  S = a("678513"),
  f = a("445507"),
  y = a("981631"),
  I = a("689938"),
  _ = a("720871");
let M = (0, g.getThemeClass)(y.ThemeTypes.DARK);

function P(e) {
  let {
    selectedOption: t,
    targetKey: a,
    data: l,
    handleGoToNextFormGroup: s
  } = e, [i, c] = r.useState(""), [o, d] = r.useState(null), [u, m] = r.useState(null), [x, h] = r.useState(!1), [N, j] = r.useState(!1), C = r.useCallback(e => {
    let {
      value: t
    } = e;
    null != l.current && (l.current.playstyle = t, m(t), s(6))
  }, [l, m, s]), v = r.useCallback(() => {
    if (null != l.current) {
      let e = !x;
      h(e), l.current.acknowledgeCap = e, e && N && s(8)
    }
  }, [N, x, h, l, s]), T = r.useCallback(() => {
    if (null != l.current) {
      let e = !N;
      j(e), l.current.acknowledgeScreen = e, e && x && s(8)
    }
  }, [x, N, j, l, s]), E = r.useCallback(e => {
    null != l.current && (l.current.email = e, c(e), d(null))
  }, [l, d]), g = r.useCallback(() => {
    if (null != t && null != l.current) {
      if (i.length < 3 || -1 === i.indexOf("@")) {
        d(I.default.Messages.SIGNUP_EMAIL_ERROR);
        return
      }(0, k.completeSignUp)({
        targetKey: a,
        data: l.current,
        completed: !0
      })
    }
  }, [a, i, t, d, l]);
  return null == t ? null : "email" === t.type ? (0, n.jsxs)("div", {
    className: _.emailContainer,
    children: [(0, n.jsx)(p.Text, {
      variant: "text-lg/medium",
      color: "header-primary",
      children: I.default.Messages.SIGNUP_EMAIL_PROMPT
    }), (0, n.jsxs)("div", {
      className: _.emailForm,
      children: [(0, n.jsx)(p.TextInput, {
        className: _.emailInput,
        value: i,
        onChange: E,
        placeholder: I.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
        error: o
      }), (0, n.jsx)(p.Button, {
        onClick: g,
        children: (0, n.jsx)(p.Text, {
          variant: "text-sm/medium",
          color: "interactive-active",
          children: I.default.Messages.SIGNUP_COMPLETE_CTA
        })
      })]
    })]
  }) : "clan" === t.type ? (0, n.jsxs)("div", {
    className: _.form,
    children: [(0, n.jsxs)("div", {
      className: _.formGroup,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(p.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: I.default.Messages.SIGNUP_CLAN_PLAYSTYLE_TITLE
        }), (0, n.jsx)(p.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: I.default.Messages.SIGNUP_CLAN_PLAYSTYLE_DESCRIPTION
        })]
      }), (0, n.jsx)("div", {
        className: _.options,
        children: (0, f.getClanOptions)(I.default).map(e => (0, n.jsx)(L, {
          option: e,
          isSelected: e.value === u,
          onOptionSelected: C
        }, e.value))
      })]
    }), (0, n.jsxs)("div", {
      className: _.formGroup,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(p.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: I.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENTS_TITLE
        }), (0, n.jsx)(p.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: I.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENTS_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: _.acknowledgements,
        children: [(0, n.jsxs)(p.Clickable, {
          className: _.acknowledgement,
          onClick: v,
          children: [(0, n.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: I.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENT_CAP
          }), (0, n.jsx)("div", {
            className: _.checkboxWrapper,
            children: (0, n.jsx)(p.Checkbox, {
              displayOnly: !0,
              type: p.Checkbox.Types.INVERTED,
              value: x
            })
          })]
        }), (0, n.jsxs)(p.Clickable, {
          className: _.acknowledgement,
          onClick: T,
          children: [(0, n.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: I.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENT_APPROVAL
          }), (0, n.jsx)("div", {
            className: _.checkboxWrapper,
            children: (0, n.jsx)(p.Checkbox, {
              displayOnly: !0,
              type: p.Checkbox.Types.INVERTED,
              value: N
            })
          })]
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: _.formGroup,
      children: [(0, n.jsx)(p.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: I.default.Messages.SIGNUP_EMAIL_PROMPT
      }), (0, n.jsxs)("div", {
        className: _.emailForm,
        children: [(0, n.jsx)(p.TextInput, {
          className: _.emailInput,
          value: i,
          onChange: E,
          placeholder: I.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
          error: o
        }), (0, n.jsx)(p.Button, {
          onClick: g,
          children: (0, n.jsx)(p.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: I.default.Messages.SIGNUP_COMPLETE_CTA
          })
        })]
      })]
    })]
  }) : (0, n.jsx)("div", {})
}

function O(e) {
  let {
    iconName: t
  } = e, a = null;
  switch (t) {
    case "compass":
      a = (0, n.jsx)(m.CompassIcon, {
        className: _.icon
      });
      break;
    case "gamepad":
      a = (0, n.jsx)(T.default, {
        className: _.icon
      });
      break;
    case "controller":
      a = (0, n.jsx)(h.GameControllerIcon, {
        className: _.icon
      });
      break;
    default:
      a = null
  }
  return (0, n.jsx)("div", {
    className: _.iconContainer,
    children: a
  })
}

function L(e) {
  let {
    option: t,
    icon: a,
    isSelected: l,
    onOptionSelected: s
  } = e, [i, o] = r.useState(!1), d = (0, p.useToken)(p.tokens.colors.BACKGROUND_TERTIARY).hsl({
    opacity: i && !l ? .9 : .8
  }), u = r.useCallback(() => {
    s(t)
  }, [s, t]);
  return (0, n.jsxs)(p.Clickable, {
    className: c()(_.option, {
      [_.selectedOption]: l
    }),
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    style: {
      backgroundColor: d
    },
    onClick: u,
    children: [a, (0, n.jsxs)("div", {
      className: _.optionContent,
      children: [(0, n.jsx)(p.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: t.title
      }), (0, n.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: t.description
      })]
    })]
  })
}

function b(e) {
  let {
    option: t,
    selectedOption: a,
    setSelectedOption: l
  } = e, s = t.key === (null == a ? void 0 : a.key);
  return (0, n.jsx)(L, {
    option: t,
    icon: (0, n.jsx)(O, {
      iconName: t.icon
    }),
    isSelected: s,
    onOptionSelected: l
  })
}

function A(e) {
  let {
    target: t,
    selectedOption: a,
    handleSetSelectedOption: l,
    data: s
  } = e, i = (0, N.useStateFromStores)([j.default], () => j.default.useReducedMotion), [{
    state: c
  }, o] = (0, u.useSpring)(() => ({
    state: 0
  }), []), m = (0, N.useStateFromStores)([C.default], () => C.default.getCurrentUser()), h = c.to({
    range: [0, 1],
    output: [1, 0]
  }), v = c.to({
    range: [0, 1],
    output: [0, 1]
  }), T = c.to({
    range: [0, 10],
    output: [0, -700]
  }), E = r.useCallback(e => {
    l(e), o({
      state: "email" === e.type ? 2 : 3,
      immediate: i
    })
  }, [l, o, i]), g = r.useCallback(e => {
    o({
      state: e,
      immediate: i
    })
  }, [o, i]);
  return null == m ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.animated.div, {
      className: _.header,
      style: {
        opacity: h
      },
      children: [(0, n.jsxs)("div", {
        className: _.eyebrow,
        children: [(0, n.jsx)(x.EnvelopeIcon, {
          height: 12,
          width: 12,
          color: "currentColor"
        }), (0, n.jsx)(p.Text, {
          variant: "text-xs/semibold",
          color: "none",
          children: I.default.Messages.SIGNUP_NOTICE_EYEBROW
        })]
      }), (0, n.jsx)(p.Heading, {
        variant: "heading-xxl/medium",
        color: "header-primary",
        children: t.title
      }), (0, n.jsx)(p.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: t.subtitle
      })]
    }), (0, n.jsxs)(u.animated.div, {
      className: _.question,
      style: {
        transform: T.to(e => "translateY(".concat(e, "px)")),
        marginTop: t.questionMargin
      },
      children: [(0, n.jsx)(p.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: t.question
      }), (0, n.jsx)("div", {
        className: _.options,
        children: (function(e, t) {
          let a = e.slice();
          return a.sort((e, a) => {
            let l = d().v3("".concat(e.key).concat(t));
            return l - d().v3("".concat(a.key).concat(t))
          }), a
        })(t.options, m.id).map(e => (0, n.jsx)(b, {
          option: e,
          selectedOption: a,
          setSelectedOption: E
        }, e.key))
      })]
    }), (0, n.jsx)(u.animated.div, {
      style: {
        transform: T.to(e => "translateY(".concat(e, "px)")),
        opacity: v
      },
      children: (0, n.jsx)(P, {
        selectedOption: a,
        targetKey: t.key,
        data: s,
        handleGoToNextFormGroup: g
      })
    })]
  })
}

function G(e) {
  let {
    target: t,
    guildId: a,
    transitionState: l,
    onClose: s
  } = e, i = (0, v.useUID)(), o = r.useRef({
    guildId: a
  }), [d, u] = r.useState(null), m = (0, N.useStateFromStores)([S.default], () => S.default.hasCompletedTarget(t.key)) ? 1 : 0;
  r.useEffect(() => {
    E.default.track(y.AnalyticEvents.SIGNUP_VIEWED, {
      target_key: t.key
    });
    let e = o.current;
    return () => {
      (0, k.completeSignUp)({
        targetKey: t.key,
        data: e,
        completed: !1
      })
    }
  }, [t.key, o]);
  let x = r.useCallback(e => {
      null != o.current && (o.current.selectedOptionKey = e.key, u(e))
    }, [u, o]),
    h = "url(".concat(t.backgroundAssetUrl, ") black top / cover no-repeat"),
    j = null;
  switch (m) {
    case 0:
      j = (0, n.jsx)(A, {
        target: t,
        selectedOption: d,
        handleSetSelectedOption: x,
        data: o
      });
      break;
    case 1:
      j = (0, n.jsxs)("div", {
        className: _.completedContainer,
        children: [(0, n.jsx)(p.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: I.default.Messages.SIGNUP_COMPLETED_TITLE
        }), (0, n.jsx)(p.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: I.default.Messages.SIGNUP_COMPLETED_DESCRIPTION
        }), (0, n.jsx)("div", {
          children: (0, n.jsx)(p.Button, {
            onClick: s,
            children: (0, n.jsx)(p.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: I.default.Messages.CLOSE
            })
          })
        })]
      })
  }
  return (0, n.jsx)(p.ThemeContextProvider, {
    theme: y.ThemeTypes.DARK,
    children: (0, n.jsxs)(p.ModalRoot, {
      transitionState: l,
      "aria-labelledby": i,
      size: p.ModalSize.LARGE,
      className: c()(_.modal, M),
      children: [(0, n.jsxs)(p.Scroller, {
        className: _.content,
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
          className: _.contentInner,
          children: (0, n.jsx)(p.Sequencer, {
            animationMotionType: "lift",
            fillParent: !0,
            step: m,
            steps: [0, 1],
            children: j
          })
        })]
      }), (0, n.jsx)("div", {
        className: _.closeButtonContainer,
        children: (0, n.jsx)(p.ModalCloseButton, {
          onClick: s
        })
      })]
    })
  })
}(s = l || (l = {}))[s.OPTIONS = 0] = "OPTIONS", s[s.COMPLETED = 1] = "COMPLETED"