"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  r = a.n(s),
  i = a("627445"),
  o = a.n(i),
  u = a("33112"),
  c = a("418009"),
  d = a("77078"),
  E = a("428958"),
  A = a("773284"),
  _ = a("476765"),
  f = a("151185"),
  m = a("562228"),
  L = a("104182"),
  T = a("741138"),
  p = a("362415"),
  C = a("418298"),
  P = a("612805"),
  R = a("53013"),
  O = a("233365"),
  x = a("264317"),
  I = a("186859"),
  h = a("660516"),
  N = a("782340"),
  g = a("149753");
let S = (0, _.uid)();

function M(e) {
  let {
    selectedDuration: t,
    onSelect: a
  } = e, n = (0, T.default)(), s = n[t];
  return (0, l.jsxs)("div", {
    className: g.duration,
    children: [(0, l.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      tag: "label",
      "aria-hidden": !0,
      children: N.default.Messages.CREATE_POLL_TEXT_PRECEDING_DURATION_SELECTION
    }), (0, l.jsx)(d.Select, {
      "aria-label": N.default.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({
        duration: s
      }),
      className: g.durationSelect,
      options: Object.entries(n).map(e => {
        let [t, a] = e;
        return {
          label: a,
          value: parseInt(t)
        }
      }),
      isSelected: e => e === t,
      select: a,
      serialize: e => "".concat(e),
      renderOptionLabel: e => (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: e.label
      }),
      popoutPosition: "top"
    })]
  })
}

function v(e) {
  let {
    channel: t,
    transitionState: a,
    onClose: s
  } = e;
  (0, E.default)({
    type: h.ImpressionTypes.MODAL,
    name: u.ImpressionNames.POLL_EDITOR_VIEWED
  });
  let {
    answers: i,
    question: _,
    setQuestion: T,
    selectedLayoutType: D,
    setSelectedLayoutType: j,
    allowMultiSelect: y,
    setAllowMultiSelect: k,
    duration: b,
    setDuration: w,
    canPost: U,
    canAddMoreAnswers: B,
    handleAddAnswer: G,
    handleAnswerTextChange: F,
    handleEmojiSelect: H,
    handleGifSelect: V,
    handleRemoveAnswer: W,
    createPoll: Y,
    createPollError: K,
    submitting: z
  } = (0, L.default)(t, s), {
    trackPollCreationCancelled: X
  } = (0, p.useTrackPollCreationEvents)(_, i, y, D), Z = n.useRef([]), {
    togglePollExpressionPicker: J,
    lastActiveInputIndex: Q
  } = (0, x.useToggleExpressionPicker)(t, D), q = n.useCallback(() => {
    o(null != Q, "Must have an active input");
    let e = Z.current[Q];
    return o(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
  }, [Q]), $ = D === c.PollLayoutTypes.DEFAULT, ee = n.useCallback(() => {
    X(), s()
  }, [s, X]), et = n.useCallback(() => {
    let e = _.length > 0 || i.some(e => (0, m.isAnswerFilled)(e, D));
    e ? (0, O.default)({
      title: N.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
      body: N.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
      cta: N.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
      closeLabel: N.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
      onConfirm: () => {
        ee()
      }
    }) : ee()
  }, [ee, i, _, D]);
  n.useEffect(() => {
    (0, d.updateModal)(I.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(v, {
      ...e,
      channel: t
    }), et)
  }, [et, t]);
  let ea = (0, A.default)({
    disabled: !U,
    onSubmit: Y
  });
  return (0, l.jsxs)(d.ModalRoot, {
    size: d.ModalSize.MEDIUM,
    className: g.container,
    transitionState: a,
    "aria-labelledby": S,
    children: [(0, l.jsxs)(d.ModalHeader, {
      className: g.header,
      separator: !1,
      children: [(0, l.jsx)(d.Heading, {
        color: "interactive-normal",
        variant: "text-lg/semibold",
        className: g.headerText,
        id: S,
        children: N.default.Messages.CREATE_POLL_HEADING
      }), (0, l.jsx)(d.ModalCloseButton, {
        onClick: et
      })]
    }), (0, l.jsxs)(d.ModalContent, {
      className: g.content,
      onKeyDown: ea,
      children: [null != K && (0, l.jsx)(d.FormErrorBlock, {
        children: K.getAnyErrorMessage()
      }), (0, l.jsx)(d.TextInput, {
        "aria-label": N.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
        placeholder: N.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
        value: _,
        inputClassName: g.questionInput,
        onChange: T,
        maxLength: I.MAX_POLL_QUESTION_LENGTH,
        autoFocus: !0
      }), (0, l.jsx)(P.default, {
        selectedLayoutType: D,
        onSelectedLayoutType: j
      }), (0, l.jsxs)("div", {
        className: r(g.answerInputsContainer, $ ? g.defaultContainer : g.imageOnlyContainer),
        role: "group",
        "aria-label": N.default.Messages.POLL_OPTIONS_ARIA,
        children: [i.map((e, a) => (0, l.jsx)(C.default, {
          answer: e,
          channelId: t.id,
          index: a,
          ref: e => Z.current[a] = e,
          handleTogglePollExpressionPicker: () => J(a),
          layout: D,
          onAnswerTextChange: F,
          onRemoveAnswer: W
        }, e.localCreationAnswerId)), B && (0, l.jsxs)(d.Clickable, {
          className: $ ? g.addAnswerButtonDefault : g.addAnswerButtonImageOnly,
          onClick: B ? G : void 0,
          "aria-label": N.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
          children: [(0, l.jsx)(f.default, {
            className: $ ? g.addAnswerIconDefault : g.addAnswerIconImageOnly
          }), $ && (0, l.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: N.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
          })]
        })]
      }), (0, l.jsx)(M, {
        selectedDuration: b,
        onSelect: w
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      className: g.footer,
      children: [(0, l.jsx)(d.Checkbox, {
        className: g.checkbox,
        type: d.Checkbox.Types.INVERTED,
        size: 24,
        value: y,
        checkboxColor: (0, d.useToken)(d.tokens.colors.INTERACTIVE_NORMAL).hex(),
        onChange: (e, t) => k(t),
        children: (0, l.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "text-normal",
          children: N.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
        })
      }), (0, l.jsx)(d.Button, {
        look: d.ButtonLooks.FILLED,
        size: d.Button.Sizes.MEDIUM,
        className: g.postButton,
        onClick: Y,
        submitting: z,
        disabled: !U,
        children: (0, l.jsx)(d.Text, {
          variant: "text-md/semibold",
          className: g.postButtonText,
          children: N.default.Messages.CREATE_POLL_POST
        })
      })]
    }), (0, l.jsx)(R.default, {
      channel: t,
      parentModalKey: I.POLL_CREATION_MODAL_KEY,
      onEmojiSelect: H,
      onGifSelect: V,
      positionTargetRef: q,
      lastActiveInputIndex: Q
    })]
  })
}