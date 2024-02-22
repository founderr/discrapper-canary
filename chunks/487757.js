"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
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
  _ = a("191814"),
  m = a("476765"),
  L = a("151185"),
  f = a("562228"),
  T = a("104182"),
  p = a("741138"),
  C = a("362415"),
  P = a("418298"),
  R = a("612805"),
  x = a("53013"),
  O = a("233365"),
  h = a("264317"),
  N = a("186859"),
  I = a("660516"),
  g = a("782340"),
  S = a("149753");
let M = (0, m.uid)(),
  v = (0, m.uid)();

function j(e) {
  let {
    selectedDuration: t,
    onSelect: a
  } = e, n = (0, p.default)(), s = n[t];
  return (0, l.jsxs)("div", {
    className: S.duration,
    children: [(0, l.jsx)(d.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      tag: "label",
      "aria-hidden": !0,
      children: g.default.Messages.CREATE_POLL_DURATION_LABEL
    }), (0, l.jsx)(d.Select, {
      "aria-label": g.default.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({
        duration: s
      }),
      className: S.durationSelect,
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

function D(e) {
  let {
    channel: t,
    transitionState: a,
    onClose: s
  } = e, i = (0, f.useCanPostImagePolls)();
  (0, E.default)({
    type: I.ImpressionTypes.MODAL,
    name: u.ImpressionNames.POLL_EDITOR_VIEWED
  });
  let {
    answers: m,
    question: p,
    setQuestion: y,
    selectedLayoutType: k,
    setSelectedLayoutType: b,
    allowMultiSelect: w,
    setAllowMultiSelect: U,
    duration: B,
    setDuration: F,
    canPost: G,
    canAddMoreAnswers: H,
    handleAddAnswer: W,
    handleAnswerTextChange: V,
    handleEmojiSelect: Y,
    handleGifSelect: K,
    handleRemoveAnswer: z,
    createPoll: X,
    createPollError: Z,
    submitting: J
  } = (0, T.default)(t, s), {
    trackPollCreationCancelled: Q
  } = (0, C.useTrackPollCreationEvents)(p, m, w, k), q = n.useRef([]), {
    togglePollExpressionPicker: $,
    lastActiveInputIndex: ee
  } = (0, h.useToggleExpressionPicker)(t, k), et = n.useCallback(() => {
    o(null != ee, "Must have an active input");
    let e = q.current[ee];
    return o(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
  }, [ee]), ea = k === c.PollLayoutTypes.DEFAULT, el = n.useCallback(() => {
    Q(), s()
  }, [s, Q]), en = n.useCallback(() => {
    let e = p.length > 0 || m.some(e => (0, f.isAnswerFilled)(e, k));
    e ? (0, O.default)({
      title: g.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
      body: g.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
      cta: g.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
      closeLabel: g.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
      onConfirm: () => {
        el()
      }
    }) : el()
  }, [el, m, p, k]);
  n.useEffect(() => {
    (0, d.updateModal)(N.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(D, {
      ...e,
      channel: t
    }), en)
  }, [en, t]);
  let es = (0, A.default)({
    disabled: !G,
    onSubmit: X
  });
  return (0, l.jsxs)(d.ModalRoot, {
    size: d.ModalSize.MEDIUM,
    className: S.container,
    transitionState: a,
    "aria-labelledby": M,
    children: [(0, l.jsxs)(d.ModalHeader, {
      className: S.header,
      separator: !1,
      children: [(0, l.jsx)(d.Heading, {
        color: "interactive-normal",
        variant: "text-lg/semibold",
        className: S.headerText,
        id: M,
        children: g.default.Messages.CREATE_POLL_HEADING
      }), (0, l.jsx)(d.ModalCloseButton, {
        onClick: en
      })]
    }), (0, l.jsxs)(d.ModalContent, {
      className: S.content,
      onKeyDown: es,
      children: [null != Z && (0, l.jsx)(d.FormErrorBlock, {
        children: Z.getAnyErrorMessage()
      }), (0, l.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.LABEL,
        htmlFor: v,
        children: g.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL
      }), (0, l.jsx)(d.TextInput, {
        id: v,
        "aria-label": g.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
        placeholder: g.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
        value: p,
        inputClassName: S.questionInput,
        onChange: y,
        maxLength: N.MAX_POLL_QUESTION_LENGTH,
        autoFocus: !0
      }), i && (0, l.jsx)(R.default, {
        selectedLayoutType: k,
        onSelectedLayoutType: b
      }), (0, l.jsx)(_.default, {
        size: 26
      }), (0, l.jsxs)("fieldset", {
        className: r(S.answerInputsContainer, ea ? S.defaultContainer : S.imageOnlyContainer),
        children: [(0, l.jsx)(d.FormTitle, {
          tag: d.FormTitleTags.LEGEND,
          children: g.default.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL
        }), m.map((e, a) => (0, l.jsx)(P.default, {
          answer: e,
          channelId: t.id,
          index: a,
          ref: e => q.current[a] = e,
          handleTogglePollExpressionPicker: () => $(a),
          layout: k,
          onAnswerTextChange: V,
          onRemoveAnswer: z
        }, e.localCreationAnswerId)), H && (0, l.jsxs)(d.Clickable, {
          className: ea ? S.addAnswerButtonDefault : S.addAnswerButtonImageOnly,
          onClick: H ? W : void 0,
          "aria-label": g.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
          children: [(0, l.jsx)(L.default, {
            className: ea ? S.addAnswerIconDefault : S.addAnswerIconImageOnly
          }), ea && (0, l.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: S.addAnswerButtonLabel,
            children: g.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
          })]
        })]
      }), (0, l.jsx)(_.default, {
        size: 18
      }), (0, l.jsx)(j, {
        selectedDuration: B,
        onSelect: F
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      className: S.footer,
      children: [(0, l.jsx)(d.Checkbox, {
        className: S.checkbox,
        type: d.Checkbox.Types.INVERTED,
        size: 24,
        value: w,
        checkboxColor: (0, d.useToken)(d.tokens.colors.INTERACTIVE_NORMAL).hex(),
        onChange: (e, t) => U(t),
        children: (0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: g.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
        })
      }), (0, l.jsx)(d.Button, {
        look: d.ButtonLooks.FILLED,
        size: d.Button.Sizes.MEDIUM,
        className: S.postButton,
        onClick: X,
        submitting: J,
        disabled: !G,
        children: (0, l.jsx)(d.Text, {
          variant: "text-md/semibold",
          className: S.postButtonText,
          children: g.default.Messages.CREATE_POLL_POST
        })
      })]
    }), (0, l.jsx)(x.default, {
      channel: t,
      parentModalKey: N.POLL_CREATION_MODAL_KEY,
      onEmojiSelect: Y,
      onGifSelect: K,
      positionTargetRef: et,
      lastActiveInputIndex: ee
    })]
  })
}