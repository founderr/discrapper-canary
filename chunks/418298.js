"use strict";
a.r(t), a.d(t, {
  PollCreationMediaPreview: function() {
    return g
  },
  default: function() {
    return M
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  r = a.n(s),
  i = a("597287"),
  o = a("446674"),
  u = a("77078"),
  c = a("418009"),
  d = a("81594"),
  E = a("430568"),
  _ = a("9560"),
  A = a("858619"),
  f = a("474643"),
  m = a("585722"),
  L = a("46829"),
  p = a("228220"),
  T = a("562228"),
  C = a("714411"),
  P = a("356581"),
  R = a("264317"),
  O = a("186859"),
  x = a("13030"),
  h = a("782340"),
  I = a("177037"),
  N = a("877055");

function g(e) {
  let {
    hasUpload: t,
    mediaUrl: a,
    mediaFilename: n,
    imageClassName: s,
    emoji: r,
    emojiClassName: i,
    fallback: o
  } = e;
  return t ? (0, l.jsx)("img", {
    src: a,
    alt: n,
    className: s
  }) : null != r ? (0, l.jsx)(E.default, {
    className: i,
    emojiId: r.id,
    emojiName: r.type === A.EmojiTypes.UNICODE ? r.surrogates : r.name,
    animated: r.animated
  }) : (0, l.jsx)(l.Fragment, {
    children: o
  })
}

function v(e) {
  let {
    channelId: t,
    localCreationAnswerId: a,
    buttonImage: s,
    layout: i,
    handleTogglePollExpressionPicker: o,
    answerIndex: d
  } = e, {
    pollExpressionPickerId: E
  } = (0, R.default)(i), {
    emoji: _,
    isLoadingMedia: A,
    hasUpload: f,
    mediaUrl: m,
    mediaFilename: p
  } = (0, P.default)({
    channelId: t,
    localCreationAnswerId: a,
    image: s
  }), C = i === c.PollLayoutTypes.DEFAULT, O = n.useMemo(() => f ? h.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: (0, T.filterOutUUID)(p),
    answerNumber: d + 1
  }) : null != _ ? h.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: _.name,
    answerNumber: d + 1
  }) : h.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
    answerNumber: d + 1
  }), [f, _, d, p]), N = A ? (0, l.jsx)(u.Spinner, {
    className: C ? I.spinnerWrapperDefault : I.spinnerWrapperImageOnly
  }) : (0, l.jsx)(g, {
    hasUpload: f,
    mediaUrl: m,
    mediaFilename: p,
    imageClassName: r(I.media, C ? I.gifDefault : I.gifJumbo),
    emoji: _,
    emojiClassName: r(I.media, C ? I.emojiDefault : I.emojiJumbo),
    fallback: (0, l.jsx)(L.default, {
      className: C ? I.expressionPickerIconDefault : I.expressionPickerIconImageOnly
    })
  });
  return (0, l.jsx)(u.Clickable, {
    onClick: o,
    "aria-controls": E,
    "aria-label": O,
    className: r(x.CHAT_INPUT_BUTTON_CLASSNAME, i === c.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? I.expressionPickerButtonImageOnly : I.expressionPickerButtonDefault),
    "data-menu-item": "true",
    children: N
  })
}
var M = n.forwardRef(function(e, t) {
  let {
    channelId: n,
    answer: s,
    index: E,
    layout: A,
    onAnswerTextChange: L,
    handleTogglePollExpressionPicker: T,
    onRemoveAnswer: P
  } = e, R = (0, o.useStateFromStores)([m.default], () => m.default.getUpload(n, s.localCreationAnswerId, f.DraftType.Poll)), x = () => {
    function e(e) {
      d.default.update(n, s.localCreationAnswerId, f.DraftType.Poll, {
        description: e
      })
    }(0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await a.el("38228").then(a.bind(a, "38228"));
      return a => (0, l.jsx)(t, {
        channelId: n,
        answer: s,
        onSave: e,
        ...a
      })
    })
  }, g = (0, l.jsx)(v, {
    channelId: n,
    buttonImage: s.image,
    layout: A,
    handleTogglePollExpressionPicker: T,
    localCreationAnswerId: s.localCreationAnswerId,
    answerIndex: E
  }), M = null != R && null != R.description && R.description.length > 0;
  return (0, l.jsx)(l.Fragment, {
    children: A === c.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
      className: I.answerRow,
      children: [(0, l.jsxs)("div", {
        className: r(N.formInput, I.defaultContainer),
        ref: t,
        children: [g, (0, l.jsx)(u.TextInput, {
          "aria-label": h.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
            answerNumber: E + 1
          }),
          placeholder: h.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
          value: s.text,
          className: I.defaultTextInput,
          inputClassName: r(N.formInput, I.defaultTextInput),
          onChange: e => L(e, E),
          maxLength: O.MAX_POLL_ANSWER_LENGTH
        })]
      }), (0, l.jsx)(u.Clickable, {
        onClick: () => P(E),
        className: I.removeAnswerButtonDefault,
        "aria-label": h.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
          answerNumber: E + 1
        }),
        children: (0, l.jsx)(p.default, {
          className: I.trashIcon,
          "aria-hidden": !0
        })
      })]
    }) : (0, l.jsxs)("div", {
      className: I.imageOnlyContainer,
      ref: t,
      children: [(0, l.jsxs)("div", {
        className: I.imagePreviewContainer,
        children: [g, M && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.Text, {
            variant: "text-xs/semibold",
            className: I.altBadge,
            "aria-hidden": !0,
            children: h.default.Messages.IMAGE_ALT
          }), (0, l.jsxs)("div", {
            onClick: x,
            children: [(0, l.jsx)(i.VisuallyHidden, {
              children: h.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
            }), (0, l.jsx)(u.Text, {
              variant: "text-xxs/medium",
              className: I.altTextPreview,
              children: R.description
            })]
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: I.imageOnlyAnswerActionBar,
        children: [null != R ? (0, l.jsx)(_.default, {
          tooltip: h.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
          "aria-label": M ? h.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
            answerNumber: E + 1
          }) : h.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
            answerNumber: E + 1
          }),
          onClick: x,
          children: (0, l.jsx)(C.ImageAltIcon, {
            "aria-hidden": !0
          })
        }) : null, (0, l.jsx)(_.default, {
          tooltip: h.default.Messages.CREATE_POLL_REMOVE_ANSWER,
          "aria-label": h.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
            answerNumber: E + 1
          }),
          onClick: () => P(E),
          dangerous: !0,
          children: (0, l.jsx)(p.default, {
            "aria-hidden": !0
          })
        })]
      })]
    })
  })
})