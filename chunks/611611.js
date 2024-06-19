t.r(a), t.d(a, {
  default: function() {
    return P
  }
}), t(47120);
var n = t(735250),
  l = t(470079),
  s = t(120356),
  r = t.n(s),
  o = t(525769),
  i = t(263568),
  c = t(481060),
  u = t(213609),
  d = t(542383),
  E = t(153124),
  _ = t(79390),
  m = t(728076),
  A = t(2466),
  L = t(485168),
  C = t(309081),
  R = t(185306),
  h = t(759970),
  f = t(489887),
  T = t(20281),
  O = t(689938),
  N = t(314467);
let x = (0, E.hQ)(),
  I = (0, E.hQ)();

function g(e) {
  let {
    question: a,
    onChange: t,
    error: s,
    inputRef: o
  } = e, [i, u] = l.useState(!1);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.LABEL,
      htmlFor: I,
      children: O.Z.Messages.CREATE_POLL_QUESTION_INPUT_LABEL
    }), (0, n.jsx)(c.TextArea, {
      inputRef: o,
      id: I,
      placeholder: O.Z.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
      value: a,
      className: r()(N.questionInput, {
        [N.hasError]: null != s
      }),
      onChange: t,
      maxLength: f.Az,
      error: s,
      onFocus: () => u(!0),
      onBlur: () => u(!1),
      showCharacterCount: i,
      showCharacterCountFullPadding: !0,
      showRemainingCharacterCount: i,
      rows: 1,
      autosize: !0,
      autoFocus: !0
    })]
  })
}

function p(e) {
  let {
    selectedDuration: a,
    onSelect: t
  } = e, l = (0, A.Z)(), s = l[a];
  return (0, n.jsxs)("div", {
    className: N.duration,
    children: [(0, n.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      tag: "label",
      "aria-hidden": !0,
      children: O.Z.Messages.CREATE_POLL_DURATION_LABEL
    }), (0, n.jsx)(c.Select, {
      "aria-label": O.Z.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({
        duration: s
      }),
      className: N.durationSelect,
      options: Object.entries(l).map(e => {
        let [a, t] = e;
        return {
          label: t,
          value: parseInt(a)
        }
      }),
      isSelected: e => e === a,
      select: t,
      serialize: e => "".concat(e),
      renderOptionLabel: e => (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: e.label
      }),
      popoutPosition: "top"
    })]
  })
}

function P(e) {
  let {
    channel: a,
    transitionState: t,
    onClose: s
  } = e, E = (0, _._N)();
  (0, u.Z)({
    type: T.n.MODAL,
    name: o.z.POLL_EDITOR_VIEWED
  });
  let A = l.useRef(null),
    I = l.useRef([]),
    j = l.useRef([]),
    v = l.useRef(null),
    M = l.useRef([]),
    D = l.useCallback(e => {
      var a, t, n, l;
      let {
        indexToRemove: s,
        numberOfAnswers: r
      } = e;
      r === f.gY + 1 ? null === (t = v.current) || void 0 === t || null === (a = t.ref) || void 0 === a || a.focus() : null === (l = M.current[s === r - 1 ? s - 1 : s + 1]) || void 0 === l || null === (n = l.ref) || void 0 === n || n.focus()
    }, []),
    {
      answers: S,
      question: b,
      selectedLayoutType: w,
      setSelectedLayoutType: Z,
      allowMultiSelect: k,
      setAllowMultiSelect: U,
      duration: y,
      setDuration: B,
      handleQuestionChange: H,
      handleAnswerTextChange: Y,
      handleEmojiSelect: F,
      canAddMoreAnswers: G,
      handleRemoveAnswerImage: W,
      canRemoveMoreAnswers: z,
      handleAddAnswer: K,
      handleRemoveAnswer: V,
      createPollError: q,
      handleSubmitPoll: J,
      fieldErrors: Q,
      submitting: X,
      shouldFocusOnInvalidField: $,
      setShouldFocusOnInvalidField: ee
    } = (0, m.Z)(a, s, D),
    {
      trackPollCreationCancelled: ea
    } = (0, L.l)(S, k, w),
    et = l.useRef(S.length),
    en = w === i.C.DEFAULT,
    el = l.useCallback(() => {
      ea(), s()
    }, [s, ea]),
    es = l.useCallback(() => {
      if ((0, _.D$)(b, S, w)) el();
      else {
        (0, h.Z)({
          title: O.Z.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
          body: O.Z.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
          cta: O.Z.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
          closeLabel: O.Z.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
          onConfirm: () => {
            el()
          }
        });
        return
      }
    }, [el, S, b, w]);
  l.useEffect(() => {
    (0, c.updateModal)(f.$z, e => (0, n.jsx)(P, {
      ...e,
      channel: a
    }), es)
  }, [es, a]), l.useEffect(() => {
    if (S.length > et.current) {
      var e;
      null === (e = j.current[S.length - 1]) || void 0 === e || e.focus()
    }
    et.current = S.length
  }, [S.length]), l.useEffect(() => {
    if ($) {
      var e, a;
      if ((null == Q ? void 0 : Q.question) != null) null === (e = A.current) || void 0 === e || e.focus();
      else {
        let e = S.findIndex(e => Q["answer-".concat(e.localCreationAnswerId)]); - 1 !== e && (null === (a = j.current[e]) || void 0 === a || a.focus())
      }
      ee(!1)
    }
  }, [Q, S, $, ee, j, I]);
  let er = (0, d.Z)({
    disabled: X,
    onSubmit: J
  });
  return (0, n.jsxs)(c.ModalRoot, {
    size: c.ModalSize.MEDIUM,
    className: N.container,
    transitionState: t,
    "aria-labelledby": x,
    children: [(0, n.jsxs)(c.ModalHeader, {
      className: N.header,
      separator: !1,
      children: [(0, n.jsx)(c.Heading, {
        color: "interactive-normal",
        variant: "text-lg/semibold",
        className: N.headerText,
        id: x,
        children: O.Z.Messages.CREATE_POLL_HEADING
      }), (0, n.jsx)(c.ModalCloseButton, {
        onClick: es
      })]
    }), (0, n.jsxs)(c.ModalContent, {
      className: N.content,
      onKeyDown: er,
      children: [null != q && (0, n.jsx)(c.FormErrorBlock, {
        className: N.apiErrorBlock,
        children: q.getAnyErrorMessage()
      }), (0, n.jsx)(g, {
        question: b,
        onChange: H,
        error: null == Q ? void 0 : Q.question,
        inputRef: A
      }), E && (0, n.jsx)(R.Z, {
        selectedLayoutType: w,
        onSelectedLayoutType: Z
      }), (0, n.jsx)(c.Spacer, {
        size: 26
      }), (0, n.jsxs)("fieldset", {
        className: r()(N.answerInputsContainer, en ? N.defaultContainer : N.imageOnlyContainer),
        children: [(0, n.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.LEGEND,
          children: O.Z.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL
        }), S.map((e, t) => (0, n.jsx)(C.Z, {
          answer: e,
          channelId: a.id,
          index: t,
          isLastAnswer: t === S.length - 1,
          onEmojiSelect: F,
          onEmojiRemove: W,
          layout: w,
          onAnswerTextChange: Y,
          onRemoveAnswer: V,
          addAnswer: K,
          submitPoll: J,
          answerTextInputRefs: j,
          error: null == Q ? void 0 : Q["answer-".concat(e.localCreationAnswerId)],
          canRemoveAnswer: z,
          ref: e => I.current[t] = e,
          inputRef: e => j.current[t] = e,
          deleteButtonRef: e => M.current[t] = e
        }, e.localCreationAnswerId)), G && (0, n.jsxs)(c.Clickable, {
          className: r()(en ? N.addAnswerButtonDefault : N.addAnswerButtonImageOnly, {
            [N.canRemoveMoreAnswers]: z
          }),
          onClick: G ? K : void 0,
          "aria-label": O.Z.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
          ref: v,
          children: [(0, n.jsx)(c.PlusSmallIcon, {
            size: "md",
            color: "currentColor",
            className: en ? N.addAnswerIconDefault : N.addAnswerIconImageOnly
          }), en && (0, n.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: N.addAnswerButtonLabel,
            children: O.Z.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
          })]
        })]
      }), (0, n.jsx)(c.Spacer, {
        size: 18
      }), (0, n.jsx)(p, {
        selectedDuration: y,
        onSelect: B
      })]
    }), (0, n.jsxs)(c.ModalFooter, {
      className: N.footer,
      children: [(0, n.jsx)(c.Checkbox, {
        className: N.checkbox,
        type: c.Checkbox.Types.INVERTED,
        size: 24,
        value: k,
        checkboxColor: (0, c.useToken)(c.tokens.colors.INTERACTIVE_NORMAL).hex(),
        onChange: (e, a) => U(a),
        children: (0, n.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: O.Z.Messages.CREATE_POLL_MULTIPLE_ANSWERS
        })
      }), (0, n.jsx)(c.Button, {
        look: c.ButtonLooks.FILLED,
        size: c.Button.Sizes.MEDIUM,
        className: N.postButton,
        onClick: J,
        submitting: X,
        children: (0, n.jsx)(c.Text, {
          variant: "text-md/semibold",
          className: N.postButtonText,
          children: O.Z.Messages.CREATE_POLL_POST
        })
      })]
    })]
  })
}