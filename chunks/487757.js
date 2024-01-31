"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  r = a.n(s),
  i = a("627445"),
  o = a.n(i),
  u = a("77078"),
  c = a("33112"),
  d = a("418009"),
  E = a("428958"),
  _ = a("773284"),
  A = a("476765"),
  f = a("151185"),
  m = a("562228"),
  L = a("104182"),
  p = a("741138"),
  T = a("362415"),
  C = a("418298"),
  P = a("612805"),
  R = a("53013"),
  O = a("233365"),
  x = a("264317"),
  h = a("186859"),
  I = a("660516"),
  N = a("782340"),
  g = a("877055");
let v = (0, A.uid)();

function M(e) {
  let {
    selectedDuration: t,
    onSelect: a
  } = e, n = (0, p.default)(), s = n[t];
  return (0, l.jsxs)("div", {
    className: g.duration,
    children: [(0, l.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      tag: "label",
      "aria-hidden": !0,
      children: N.default.Messages.CREATE_POLL_TEXT_PRECEDING_DURATION_SELECTION
    }), (0, l.jsx)(u.Select, {
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
      renderOptionLabel: e => (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: e.label
      }),
      popoutPosition: "top"
    })]
  })
}

function S(e) {
  let {
    channel: t,
    transitionState: a,
    onClose: s
  } = e;
  (0, E.default)({
    type: I.ImpressionTypes.MODAL,
    name: c.ImpressionNames.POLL_EDITOR_VIEWED
  });
  let {
    answers: i,
    question: A,
    setQuestion: p,
    selectedLayoutType: D,
    setSelectedLayoutType: j,
    allowMultiSelect: y,
    setAllowMultiSelect: b,
    duration: k,
    setDuration: U,
    canPost: w,
    canAddMoreAnswers: B,
    handleAddAnswer: G,
    handleAnswerTextChange: F,
    handleEmojiSelect: H,
    handleGifSelect: W,
    handleCustomUpload: Y,
    handleRemoveAnswer: V,
    createPoll: K,
    createPollError: z,
    submitting: X
  } = (0, L.default)(t, s), {
    trackPollCreationCancelled: Z
  } = (0, T.useTrackPollCreationEvents)(A, i, y, D), J = n.useRef([]), {
    togglePollExpressionPicker: Q,
    lastActiveParentIndex: q
  } = (0, x.default)(D), $ = n.useCallback(() => {
    o(null != q, "Must have an active input");
    let e = J.current[q];
    return o(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
  }, [q]), ee = D === d.PollLayoutTypes.DEFAULT, et = n.useCallback(() => {
    Z(), s()
  }, [s, Z]), ea = n.useCallback(() => {
    let e = A.length > 0 || i.some(e => (0, m.isAnswerFilled)(e, D));
    e ? (0, O.default)({
      title: N.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
      body: N.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
      cta: N.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
      closeLabel: N.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
      onConfirm: () => {
        et()
      }
    }) : et()
  }, [et, i, A, D]);
  n.useEffect(() => {
    (0, u.updateModal)(h.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(S, {
      ...e,
      channel: t
    }), ea)
  }, [ea, t]);
  let el = (0, _.default)({
    disabled: !w,
    onSubmit: K
  });
  return (0, l.jsxs)(u.ModalRoot, {
    size: u.ModalSize.MEDIUM,
    className: g.container,
    transitionState: a,
    "aria-labelledby": v,
    children: [(0, l.jsxs)(u.ModalHeader, {
      className: g.header,
      separator: !1,
      children: [(0, l.jsx)(u.Heading, {
        color: "interactive-normal",
        variant: "text-lg/semibold",
        className: g.headerText,
        id: v,
        children: N.default.Messages.CREATE_POLL_HEADING
      }), (0, l.jsx)(u.ModalCloseButton, {
        onClick: ea
      })]
    }), (0, l.jsxs)(u.ModalContent, {
      className: g.content,
      onKeyDown: el,
      children: [null != z && (0, l.jsx)(u.FormErrorBlock, {
        children: z.getAnyErrorMessage()
      }), (0, l.jsx)(u.TextInput, {
        "aria-label": N.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
        placeholder: N.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
        value: A,
        inputClassName: g.questionInput,
        onChange: p,
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
          onRemoveAnswer: V
        }, e.localCreationAnswerId)), B && (0, l.jsxs)(u.Clickable, {
          className: ee ? g.addAnswerButtonDefault : g.addAnswerButtonImageOnly,
          onClick: B ? G : void 0,
          "aria-label": N.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
          children: [(0, l.jsx)(f.default, {
            className: ee ? g.addAnswerIconDefault : g.addAnswerIconImageOnly
          }), ee && (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: N.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
          })]
        })]
      }), (0, l.jsx)(M, {
        selectedDuration: k,
        onSelect: U
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      className: g.footer,
      children: [(0, l.jsx)(u.Checkbox, {
        type: u.Checkbox.Types.INVERTED,
        size: 24,
        value: y,
        onChange: (e, t) => b(t),
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "text-normal",
          children: N.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
        })
      }), (0, l.jsx)(u.Button, {
        look: u.ButtonLooks.FILLED,
        size: u.Button.Sizes.MEDIUM,
        className: g.postButton,
        onClick: K,
        submitting: X,
        disabled: !w,
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/semibold",
          className: g.postButtonText,
          children: N.default.Messages.CREATE_POLL_POST
        })
      })]
    }), (0, l.jsx)(R.default, {
      channel: t,
      layout: D,
      parentModalKey: h.POLL_CREATION_MODAL_KEY,
      onEmojiSelect: H,
      onGifSelect: W,
      onCustomUpload: Y,
      positionTargetRef: $,
      lastActiveInputIndex: q
    })]
  })
}