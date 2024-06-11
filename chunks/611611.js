"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  r = a.n(s),
  o = a("525769"),
  i = a("263568"),
  u = a("481060"),
  d = a("213609"),
  c = a("542383"),
  E = a("153124"),
  _ = a("729285"),
  A = a("79390"),
  m = a("728076"),
  f = a("2466"),
  L = a("485168"),
  R = a("309081"),
  C = a("185306"),
  N = a("759970"),
  T = a("489887"),
  h = a("20281"),
  O = a("689938"),
  P = a("812160");
let I = (0, E.uid)(),
  p = (0, E.uid)();

function g(e) {
  let {
    question: t,
    onChange: a,
    error: s,
    inputRef: o
  } = e, [i, d] = n.useState(!1);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.FormTitle, {
      tag: u.FormTitleTags.LABEL,
      htmlFor: p,
      children: O.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL
    }), (0, l.jsx)(u.TextArea, {
      inputRef: o,
      id: p,
      placeholder: O.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
      value: t,
      className: r()(P.questionInput, {
        [P.hasError]: null != s
      }),
      onChange: a,
      maxLength: T.MAX_POLL_QUESTION_LENGTH,
      error: s,
      onFocus: () => d(!0),
      onBlur: () => d(!1),
      showCharacterCount: i,
      showCharacterCountFullPadding: !0,
      showRemainingCharacterCount: i,
      rows: 1,
      autosize: !0,
      autoFocus: !0
    })]
  })
}

function x(e) {
  let {
    selectedDuration: t,
    onSelect: a
  } = e, n = (0, f.default)(), s = n[t];
  return (0, l.jsxs)("div", {
    className: P.duration,
    children: [(0, l.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      tag: "label",
      "aria-hidden": !0,
      children: O.default.Messages.CREATE_POLL_DURATION_LABEL
    }), (0, l.jsx)(u.Select, {
      "aria-label": O.default.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({
        duration: s
      }),
      className: P.durationSelect,
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

function M(e) {
  let {
    channel: t,
    transitionState: a,
    onClose: s
  } = e, E = (0, A.useCanPostImagePolls)();
  (0, d.default)({
    type: h.ImpressionTypes.MODAL,
    name: o.ImpressionNames.POLL_EDITOR_VIEWED
  });
  let f = n.useRef(null),
    p = n.useRef([]),
    S = n.useRef([]),
    v = n.useRef(null),
    j = n.useRef([]),
    D = n.useCallback(e => {
      var t, a, l, n;
      let {
        indexToRemove: s,
        numberOfAnswers: r
      } = e;
      r === T.MIN_NUMBER_OF_ANSWERS_PER_POLL + 1 ? null === (a = v.current) || void 0 === a || null === (t = a.ref) || void 0 === t || t.focus() : null === (n = j.current[s === r - 1 ? s - 1 : s + 1]) || void 0 === n || null === (l = n.ref) || void 0 === l || l.focus()
    }, []),
    {
      answers: b,
      question: w,
      selectedLayoutType: U,
      setSelectedLayoutType: y,
      allowMultiSelect: k,
      setAllowMultiSelect: B,
      duration: F,
      setDuration: H,
      handleQuestionChange: G,
      handleAnswerTextChange: W,
      handleEmojiSelect: K,
      canAddMoreAnswers: Y,
      handleRemoveAnswerImage: V,
      canRemoveMoreAnswers: z,
      handleAddAnswer: X,
      handleRemoveAnswer: q,
      createPollError: J,
      handleSubmitPoll: Q,
      fieldErrors: Z,
      submitting: $,
      shouldFocusOnInvalidField: ee,
      setShouldFocusOnInvalidField: et
    } = (0, m.default)(t, s, D),
    {
      trackPollCreationCancelled: ea
    } = (0, L.useTrackPollCreationEvents)(b, k, U),
    el = n.useRef(b.length),
    en = U === i.PollLayoutTypes.DEFAULT,
    es = n.useCallback(() => {
      ea(), s()
    }, [s, ea]),
    er = n.useCallback(() => {
      if ((0, A.isPollCreationEmpty)(w, b, U)) es();
      else {
        (0, N.default)({
          title: O.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
          body: O.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
          cta: O.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
          closeLabel: O.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
          onConfirm: () => {
            es()
          }
        });
        return
      }
    }, [es, b, w, U]);
  n.useEffect(() => {
    (0, u.updateModal)(T.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(M, {
      ...e,
      channel: t
    }), er)
  }, [er, t]), n.useEffect(() => {
    if (b.length > el.current) {
      var e;
      null === (e = S.current[b.length - 1]) || void 0 === e || e.focus()
    }
    el.current = b.length
  }, [b.length]), n.useEffect(() => {
    if (ee) {
      var e, t;
      if ((null == Z ? void 0 : Z.question) != null) null === (e = f.current) || void 0 === e || e.focus();
      else {
        let e = b.findIndex(e => Z["answer-".concat(e.localCreationAnswerId)]); - 1 !== e && (null === (t = S.current[e]) || void 0 === t || t.focus())
      }
      et(!1)
    }
  }, [Z, b, ee, et, S, p]);
  let eo = (0, c.default)({
    disabled: $,
    onSubmit: Q
  });
  return (0, l.jsxs)(u.ModalRoot, {
    size: u.ModalSize.MEDIUM,
    className: P.container,
    transitionState: a,
    "aria-labelledby": I,
    children: [(0, l.jsxs)(u.ModalHeader, {
      className: P.header,
      separator: !1,
      children: [(0, l.jsx)(u.Heading, {
        color: "interactive-normal",
        variant: "text-lg/semibold",
        className: P.headerText,
        id: I,
        children: O.default.Messages.CREATE_POLL_HEADING
      }), (0, l.jsx)(u.ModalCloseButton, {
        onClick: er
      })]
    }), (0, l.jsxs)(u.ModalContent, {
      className: P.content,
      onKeyDown: eo,
      children: [null != J && (0, l.jsx)(u.FormErrorBlock, {
        className: P.apiErrorBlock,
        children: J.getAnyErrorMessage()
      }), (0, l.jsx)(g, {
        question: w,
        onChange: G,
        error: null == Z ? void 0 : Z.question,
        inputRef: f
      }), E && (0, l.jsx)(C.default, {
        selectedLayoutType: U,
        onSelectedLayoutType: y
      }), (0, l.jsx)(u.Spacer, {
        size: 26
      }), (0, l.jsxs)("fieldset", {
        className: r()(P.answerInputsContainer, en ? P.defaultContainer : P.imageOnlyContainer),
        children: [(0, l.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.LEGEND,
          children: O.default.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL
        }), b.map((e, a) => (0, l.jsx)(R.default, {
          answer: e,
          channelId: t.id,
          index: a,
          isLastAnswer: a === b.length - 1,
          onEmojiSelect: K,
          onEmojiRemove: V,
          layout: U,
          onAnswerTextChange: W,
          onRemoveAnswer: q,
          addAnswer: X,
          submitPoll: Q,
          answerTextInputRefs: S,
          error: null == Z ? void 0 : Z["answer-".concat(e.localCreationAnswerId)],
          canRemoveAnswer: z,
          ref: e => p.current[a] = e,
          inputRef: e => S.current[a] = e,
          deleteButtonRef: e => j.current[a] = e
        }, e.localCreationAnswerId)), Y && (0, l.jsxs)(u.Clickable, {
          className: r()(en ? P.addAnswerButtonDefault : P.addAnswerButtonImageOnly, {
            [P.canRemoveMoreAnswers]: z
          }),
          onClick: Y ? X : void 0,
          "aria-label": O.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
          ref: v,
          children: [(0, l.jsx)(_.default, {
            className: en ? P.addAnswerIconDefault : P.addAnswerIconImageOnly
          }), en && (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: P.addAnswerButtonLabel,
            children: O.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
          })]
        })]
      }), (0, l.jsx)(u.Spacer, {
        size: 18
      }), (0, l.jsx)(x, {
        selectedDuration: F,
        onSelect: H
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      className: P.footer,
      children: [(0, l.jsx)(u.Checkbox, {
        className: P.checkbox,
        type: u.Checkbox.Types.INVERTED,
        size: 24,
        value: k,
        checkboxColor: (0, u.useToken)(u.tokens.colors.INTERACTIVE_NORMAL).hex(),
        onChange: (e, t) => B(t),
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: O.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
        })
      }), (0, l.jsx)(u.Button, {
        look: u.ButtonLooks.FILLED,
        size: u.Button.Sizes.MEDIUM,
        className: P.postButton,
        onClick: Q,
        submitting: $,
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/semibold",
          className: P.postButtonText,
          children: O.default.Messages.CREATE_POLL_POST
        })
      })]
    })]
  })
}