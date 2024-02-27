"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  n = a("414456"),
  r = a.n(n),
  i = a("33112"),
  o = a("418009"),
  u = a("77078"),
  d = a("428958"),
  c = a("773284"),
  A = a("191814"),
  E = a("476765"),
  _ = a("151185"),
  m = a("562228"),
  L = a("104182"),
  f = a("741138"),
  T = a("362415"),
  C = a("418298"),
  N = a("612805"),
  R = a("233365"),
  O = a("186859"),
  h = a("660516"),
  P = a("782340"),
  I = a("149753");
let x = (0, E.uid)(),
  p = (0, E.uid)();

function g(e) {
  let {
    selectedDuration: t,
    onSelect: a
  } = e, s = (0, f.default)(), n = s[t];
  return (0, l.jsxs)("div", {
    className: I.duration,
    children: [(0, l.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      tag: "label",
      "aria-hidden": !0,
      children: P.default.Messages.CREATE_POLL_DURATION_LABEL
    }), (0, l.jsx)(u.Select, {
      "aria-label": P.default.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({
        duration: n
      }),
      className: I.durationSelect,
      options: Object.entries(s).map(e => {
        let [t, a] = e;
        return {
          label: a,
          value: parseInt(t)
        }
      }),
      isSelected: e => e === t,
      select: a,
      serialize: e => "".concat(e),
      renderOptionLabel: e => (0, l.jsx)(u.Text, {
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
    onClose: n
  } = e, E = (0, m.useCanPostImagePolls)();
  (0, d.default)({
    type: h.ImpressionTypes.MODAL,
    name: i.ImpressionNames.POLL_EDITOR_VIEWED
  });
  let {
    answers: f,
    question: j,
    setQuestion: D,
    selectedLayoutType: S,
    setSelectedLayoutType: v,
    allowMultiSelect: b,
    setAllowMultiSelect: U,
    duration: y,
    setDuration: w,
    canPost: k,
    canAddMoreAnswers: B,
    handleAddAnswer: G,
    handleAnswerTextChange: F,
    handleEmojiSelect: H,
    handleRemoveAnswer: W,
    createPoll: Y,
    createPollError: V,
    submitting: z
  } = (0, L.default)(t, n), {
    trackPollCreationCancelled: K
  } = (0, T.useTrackPollCreationEvents)(j, f, b, S), X = s.useRef([]), Q = S === o.PollLayoutTypes.DEFAULT, Z = s.useCallback(() => {
    K(), n()
  }, [n, K]), q = s.useCallback(() => {
    let e = j.length > 0 || f.some(e => (0, m.isAnswerFilled)(e, S));
    e ? (0, R.default)({
      title: P.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
      body: P.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
      cta: P.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
      closeLabel: P.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
      onConfirm: () => {
        Z()
      }
    }) : Z()
  }, [Z, f, j, S]);
  s.useEffect(() => {
    (0, u.updateModal)(O.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(M, {
      ...e,
      channel: t
    }), q)
  }, [q, t]);
  let J = (0, c.default)({
    disabled: !k,
    onSubmit: Y
  });
  return (0, l.jsxs)(u.ModalRoot, {
    size: u.ModalSize.MEDIUM,
    className: I.container,
    transitionState: a,
    "aria-labelledby": x,
    children: [(0, l.jsxs)(u.ModalHeader, {
      className: I.header,
      separator: !1,
      children: [(0, l.jsx)(u.Heading, {
        color: "interactive-normal",
        variant: "text-lg/semibold",
        className: I.headerText,
        id: x,
        children: P.default.Messages.CREATE_POLL_HEADING
      }), (0, l.jsx)(u.ModalCloseButton, {
        onClick: q
      })]
    }), (0, l.jsxs)(u.ModalContent, {
      className: I.content,
      onKeyDown: J,
      children: [null != V && (0, l.jsx)(u.FormErrorBlock, {
        children: V.getAnyErrorMessage()
      }), (0, l.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.LABEL,
        htmlFor: p,
        children: P.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL
      }), (0, l.jsx)(u.TextInput, {
        id: p,
        "aria-label": P.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
        placeholder: P.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
        value: j,
        inputClassName: I.questionInput,
        onChange: D,
        maxLength: O.MAX_POLL_QUESTION_LENGTH,
        autoFocus: !0
      }), E && (0, l.jsx)(N.default, {
        selectedLayoutType: S,
        onSelectedLayoutType: v
      }), (0, l.jsx)(A.default, {
        size: 26
      }), (0, l.jsxs)("fieldset", {
        className: r(I.answerInputsContainer, Q ? I.defaultContainer : I.imageOnlyContainer),
        children: [(0, l.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.LEGEND,
          children: P.default.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL
        }), f.map((e, a) => (0, l.jsx)(C.default, {
          answer: e,
          channelId: t.id,
          index: a,
          ref: e => X.current[a] = e,
          onEmojiSelect: H,
          layout: S,
          onAnswerTextChange: F,
          onRemoveAnswer: W
        }, e.localCreationAnswerId)), B && (0, l.jsxs)(u.Clickable, {
          className: Q ? I.addAnswerButtonDefault : I.addAnswerButtonImageOnly,
          onClick: B ? G : void 0,
          "aria-label": P.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
          children: [(0, l.jsx)(_.default, {
            className: Q ? I.addAnswerIconDefault : I.addAnswerIconImageOnly
          }), Q && (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: I.addAnswerButtonLabel,
            children: P.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
          })]
        })]
      }), (0, l.jsx)(A.default, {
        size: 18
      }), (0, l.jsx)(g, {
        selectedDuration: y,
        onSelect: w
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      className: I.footer,
      children: [(0, l.jsx)(u.Checkbox, {
        className: I.checkbox,
        type: u.Checkbox.Types.INVERTED,
        size: 24,
        value: b,
        checkboxColor: (0, u.useToken)(u.tokens.colors.INTERACTIVE_NORMAL).hex(),
        onChange: (e, t) => U(t),
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: P.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
        })
      }), (0, l.jsx)(u.Button, {
        look: u.ButtonLooks.FILLED,
        size: u.Button.Sizes.MEDIUM,
        className: I.postButton,
        onClick: Y,
        submitting: z,
        disabled: !k,
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/semibold",
          className: I.postButtonText,
          children: P.default.Messages.CREATE_POLL_POST
        })
      })]
    })]
  })
}