"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
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
  m = a("151185"),
  f = a("562228"),
  L = a("104182"),
  T = a("741138"),
  p = a("362415"),
  C = a("418298"),
  P = a("612805"),
  R = a("53013"),
  O = a("233365"),
  x = a("264317"),
  h = a("186859"),
  I = a("660516"),
  N = a("782340"),
  g = a("149753");
let S = (0, _.uid)();

function v(e) {
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

function M(e) {
  let {
    channel: t,
    transitionState: a,
    onClose: s
  } = e;
  (0, E.default)({
    type: I.ImpressionTypes.MODAL,
    name: u.ImpressionNames.POLL_EDITOR_VIEWED
  });
  let {
    answers: i,
    question: _,
    setQuestion: T,
    selectedLayoutType: D,
    setSelectedLayoutType: j,
    allowMultiSelect: k,
    setAllowMultiSelect: y,
    duration: b,
    setDuration: w,
    canPost: U,
    canAddMoreAnswers: B,
    handleAddAnswer: G,
    handleAnswerTextChange: F,
    handleEmojiSelect: H,
    handleGifSelect: V,
    handleCustomUpload: W,
    handleRemoveAnswer: Y,
    createPoll: K,
    createPollError: z,
    submitting: X
  } = (0, L.default)(t, s), {
    trackPollCreationCancelled: Z
  } = (0, p.useTrackPollCreationEvents)(_, i, k, D), J = n.useRef([]), {
    togglePollExpressionPicker: Q,
    lastActiveInputIndex: q
  } = (0, x.useToggleExpressionPicker)(t, D), $ = n.useCallback(() => {
    o(null != q, "Must have an active input");
    let e = J.current[q];
    return o(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
  }, [q]), ee = D === c.PollLayoutTypes.DEFAULT, et = n.useCallback(() => {
    Z(), s()
  }, [s, Z]), ea = n.useCallback(() => {
    let e = _.length > 0 || i.some(e => (0, f.isAnswerFilled)(e, D));
    e ? (0, O.default)({
      title: N.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
      body: N.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
      cta: N.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
      closeLabel: N.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
      onConfirm: () => {
        et()
      }
    }) : et()
  }, [et, i, _, D]);
  n.useEffect(() => {
    (0, d.updateModal)(h.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(M, {
      ...e,
      channel: t
    }), ea)
  }, [ea, t]);
  let el = (0, A.default)({
    disabled: !U,
    onSubmit: K
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
        onClick: ea
      })]
    }), (0, l.jsxs)(d.ModalContent, {
      className: g.content,
      onKeyDown: el,
      children: [null != z && (0, l.jsx)(d.FormErrorBlock, {
        children: z.getAnyErrorMessage()
      }), (0, l.jsx)(d.TextInput, {
        "aria-label": N.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
        placeholder: N.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
        value: _,
        inputClassName: g.questionInput,
        onChange: T,
        maxLength: h.MAX_POLL_QUESTION_LENGTH,
        autoFocus: !0
      }), (0, l.jsx)(P.default, {
        selectedLayoutType: D,
        onSelectedLayoutType: j
      }), (0, l.jsxs)("div", {
        className: r(g.answerInputsContainer, ee ? g.defaultContainer : g.imageOnlyContainer),
        role: "group",
        "aria-label": N.default.Messages.POLL_OPTIONS_ARIA,
        children: [i.map((e, a) => (0, l.jsx)(C.default, {
          answer: e,
          channelId: t.id,
          index: a,
          ref: e => J.current[a] = e,
          handleTogglePollExpressionPicker: () => Q(a),
          layout: D,
          onAnswerTextChange: F,
          onRemoveAnswer: Y
        }, e.localCreationAnswerId)), B && (0, l.jsxs)(d.Clickable, {
          className: ee ? g.addAnswerButtonDefault : g.addAnswerButtonImageOnly,
          onClick: B ? G : void 0,
          "aria-label": N.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
          children: [(0, l.jsx)(m.default, {
            className: ee ? g.addAnswerIconDefault : g.addAnswerIconImageOnly
          }), ee && (0, l.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: N.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
          })]
        })]
      }), (0, l.jsx)(v, {
        selectedDuration: b,
        onSelect: w
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      className: g.footer,
      children: [(0, l.jsx)(d.Checkbox, {
        className: g.checkbox,
        type: d.Checkbox.Types.INVERTED,
        size: 24,
        value: k,
        checkboxColor: (0, d.useToken)(d.tokens.colors.INTERACTIVE_NORMAL).hex(),
        onChange: (e, t) => y(t),
        children: (0, l.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "text-normal",
          children: N.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
        })
      }), (0, l.jsx)(d.Button, {
        look: d.ButtonLooks.FILLED,
        size: d.Button.Sizes.MEDIUM,
        className: g.postButton,
        onClick: K,
        submitting: X,
        disabled: !U,
        children: (0, l.jsx)(d.Text, {
          variant: "text-md/semibold",
          className: g.postButtonText,
          children: N.default.Messages.CREATE_POLL_POST
        })
      })]
    }), (0, l.jsx)(R.default, {
      channel: t,
      parentModalKey: h.POLL_CREATION_MODAL_KEY,
      onEmojiSelect: H,
      onGifSelect: V,
      onCustomUpload: W,
      positionTargetRef: $,
      lastActiveInputIndex: q
    })]
  })
}