"use strict";
t.d(s, {
  Z: function() {
    return R
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(603211),
  d = t(710344),
  u = t(637853),
  E = t(107862),
  _ = t(259580),
  I = t(823379),
  T = t(889369),
  N = t(570961),
  m = t(208665),
  S = t(976983),
  h = t(290511),
  g = t(689938),
  C = t(519871);
let x = {
  optionErrors: []
};

function R(e) {
  var s;
  let {
    guild: t,
    prompt: l,
    disableAutofocus: d,
    promptIndex: S,
    dragIndex: R,
    includeCount: A,
    singleColumn: p,
    onPromptDragComplete: M,
    onPromptDragStart: f,
    onPromptDragReset: D
  } = e, {
    dropdownsAllowed: v
  } = (0, E.Ug)(t.id), j = (0, r.e7)([T.Z], () => T.Z.editedDefaultChannelIds), Z = v ? h.qm : h.M$, {
    drag: U,
    dragSourcePosition: G,
    drop: P,
    setIsDraggable: b
  } = (0, c.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: R,
    optionId: l.id,
    onDragStart: f,
    onDragComplete: M,
    onDragReset: D
  }), B = (0, r.cj)([m.Z], () => {
    var e;
    return null !== (e = m.Z.errors[S]) && void 0 !== e ? e : x
  }), [y, F] = i.useState(!1), [k, H] = i.useState(!1), w = null !== (s = B.options) && void 0 !== s ? s : B.optionErrors.filter(I.lm)[0], V = B.config, Y = v && l.options.length >= h.fY, W = (0, u.kl)(t.id, Array.from(j), [l]).length - j.size, z = i.useRef(null);
  return (i.useLayoutEffect(() => {
    setTimeout(() => {
      if (0 === S && !d) {
        var e;
        null === (e = z.current) || void 0 === e || e.focus()
      }
    }, 0)
  }, [d]), y) ? (0, n.jsx)(o.FocusRing, {
    children: (0, n.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => H(!0),
      onBlur: () => H(!1),
      onMouseLeave: () => H(!1),
      className: a()(C.container, {
        [C.dropIndicatorBefore]: null != G && S < G,
        [C.dropIndicatorAfter]: null != G && S > G,
        [C.containerFocused]: k
      }),
      ref: e => U(P(e)),
      children: [(0, n.jsx)("div", {
        className: C.dragContainer,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: (0, n.jsx)(o.DragIcon, {
          size: "xs",
          color: "currentColor",
          className: C.dragIcon
        })
      }), (0, n.jsx)(o.Text, {
        className: C.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: g.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: S + 1
        })
      }), (0, n.jsx)(o.Text, {
        variant: "text-lg/semibold",
        color: "text-normal",
        children: l.title
      }), (0, n.jsx)(o.Clickable, {
        className: C.collapseButton,
        onClick: () => F(!1),
        children: (0, n.jsx)(_.Z, {
          direction: _.Z.Directions.DOWN,
          height: 16,
          width: 16
        })
      }), (0, n.jsx)(o.TooltipContainer, {
        text: g.Z.Messages.ONBOARDING_PROMPT_DELETE,
        className: C.removeButton,
        children: (0, n.jsx)(o.Clickable, {
          className: C.closeIcon,
          onClick: () => (0, N.fi)(t, l.id),
          children: (0, n.jsx)(o.TrashIcon, {
            size: "xs",
            color: "currentColor"
          })
        })
      })]
    })
  }) : (0, n.jsx)(o.FocusRing, {
    children: (0, n.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => H(!0),
      onBlur: () => H(!1),
      className: a()(C.container, {
        [C.dropIndicatorBefore]: null != G && S < G,
        [C.dropIndicatorAfter]: null != G && S > G,
        [C.containerFocused]: k
      }),
      ref: e => U(P(e)),
      children: [(0, n.jsx)("div", {
        className: C.dragContainer,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: (0, n.jsx)(o.DragIcon, {
          size: "xs",
          color: "currentColor",
          className: C.dragIcon
        })
      }), (0, n.jsx)(o.Text, {
        className: C.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: g.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: S + 1
        })
      }), (0, n.jsx)(o.TextInput, {
        className: C.title,
        inputClassName: C.titleInput,
        inputRef: z,
        value: l.title,
        onChange: e => (0, N.Kk)(t, l.id, {
          title: e
        }),
        placeholder: g.Z.Messages.ONBOARDING_PROMPT_TITLE_PLACEHOLDER,
        maxLength: h.iU,
        error: B.title
      }), (0, n.jsx)(L, {
        prompt: l,
        guild: t
      }), (0, n.jsx)(o.Text, {
        className: C.optionsHeader,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: Y ? g.Z.Messages.ONBOARDING_PROMPT_DROPDOWN_OPTIONS_HEADER.format({
          count: l.options.length,
          total: Z
        }) : g.Z.Messages.ONBOARDING_PROMPT_OPTIONS_HEADER.format({
          count: l.options.length,
          total: Z
        })
      }), (0, n.jsx)(O, {
        guild: t,
        prompt: l,
        promptIndex: S,
        errors: B,
        singleColumn: p
      }), null != w ? (0, n.jsx)(o.InputError, {
        error: w
      }) : null, (0, n.jsxs)("div", {
        className: C.buttons,
        children: [(0, n.jsxs)("div", {
          className: C.checkboxes,
          children: [(0, n.jsx)(o.Checkbox, {
            size: 20,
            type: o.Checkbox.Types.INVERTED,
            value: !l.singleSelect,
            onChange: (e, s) => (0, N.Kk)(t, l.id, {
              singleSelect: !s
            }),
            children: (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: g.Z.Messages.ONBOARDING_PROMPT_ALLOW_MULTIPLE_LABEL
            })
          }), l.inOnboarding ? (0, n.jsx)(o.Checkbox, {
            size: 20,
            type: o.Checkbox.Types.INVERTED,
            value: l.inOnboarding && l.required,
            onChange: (e, s) => (0, N.Kk)(t, l.id, {
              required: s
            }),
            disabled: !l.inOnboarding,
            children: (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: A ? g.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL_WITH_COUNT.format({
                count: W
              }) : g.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
            })
          }) : null]
        }), (0, n.jsx)(o.Clickable, {
          className: C.collapseButton,
          onClick: () => F(!0),
          children: (0, n.jsx)(_.Z, {
            direction: _.Z.Directions.UP,
            height: 16,
            width: 16
          })
        }), (0, n.jsx)(o.TooltipContainer, {
          text: g.Z.Messages.ONBOARDING_PROMPT_DELETE,
          className: C.removeButton,
          children: (0, n.jsx)(o.Clickable, {
            className: C.closeIcon,
            onClick: () => (0, N.fi)(t, l.id),
            children: (0, n.jsx)(o.TrashIcon, {
              size: "xs",
              color: "currentColor"
            })
          })
        })]
      }), null != V ? (0, n.jsx)(o.InputError, {
        error: V
      }) : null]
    })
  })
}

function L(e) {
  let {
    prompt: s,
    guild: t
  } = e, [l, a] = i.useState(!1);
  if (i.useEffect(() => {
      !l && s.title.length > 0 && a(!0)
    }, [l, s]), l) return null;

  function r(e) {
    return (0, n.jsx)(o.Clickable, {
      className: C.example,
      onClick: () => (0, N.Kk)(t, s.id, {
        title: e
      }),
      children: (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: e
      })
    })
  }
  return (0, n.jsxs)("div", {
    className: C.examplesSection,
    children: [(0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_HEADER
    }), (0, n.jsxs)("div", {
      className: C.examples,
      children: [r(g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_1), r(g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_2), r(g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_3), r(g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_4)]
    })]
  })
}

function O(e) {
  let {
    guild: s,
    prompt: t,
    promptIndex: i,
    singleColumn: l,
    errors: a
  } = e, {
    dropdownsAllowed: r
  } = (0, E.Ug)(s.id), o = r ? h.qm : h.M$, {
    handleDragStart: c,
    handleDragReset: u,
    handleDragComplete: _
  } = (0, d.Z)(t.options, e => (0, N.Kk)(s, t.id, {
    options: e
  }));
  return (0, n.jsxs)("div", {
    className: C.options,
    children: [t.options.map((e, r) => (0, n.jsx)(S.Z, {
      guild: s,
      prompt: t,
      promptIndex: i,
      singleColumn: l,
      option: e,
      onDragStart: c,
      onDragComplete: _,
      onDragReset: u,
      hasError: null != a.optionErrors[r]
    }, e.id)), t.options.length < o ? (0, n.jsx)(S.B, {
      guild: s,
      prompt: t,
      promptIndex: i,
      singleColumn: l
    }) : null]
  })
}