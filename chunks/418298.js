"use strict";
a.r(t), a.d(t, {
  PollCreationMediaPreview: function() {
    return g
  },
  default: function() {
    return v
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  r = a.n(s),
  i = a("597287"),
  o = a("418009"),
  u = a("446674"),
  c = a("77078"),
  d = a("81594"),
  E = a("430568"),
  A = a("9560"),
  _ = a("858619"),
  m = a("538282"),
  f = a("474643"),
  L = a("585722"),
  T = a("46829"),
  p = a("228220"),
  C = a("562228"),
  P = a("714411"),
  R = a("356581"),
  O = a("186859"),
  x = a("13030"),
  h = a("782340"),
  I = a("345379"),
  N = a("149753");

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
    emojiName: r.type === _.EmojiTypes.UNICODE ? r.surrogates : r.name,
    animated: r.animated
  }) : (0, l.jsx)(l.Fragment, {
    children: o
  })
}

function S(e) {
  let {
    channelId: t,
    localCreationAnswerId: a,
    buttonImage: s,
    layout: i,
    handleTogglePollExpressionPicker: u,
    answerIndex: d
  } = e, E = (0, m.useExpressionPickerStore)(e => e.pickerId), {
    emoji: A,
    isLoadingMedia: _,
    hasUpload: f,
    mediaUrl: L,
    mediaFilename: p
  } = (0, R.default)({
    channelId: t,
    localCreationAnswerId: a,
    image: s
  }), P = i === o.PollLayoutTypes.DEFAULT, O = n.useMemo(() => f ? h.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: (0, C.filterOutUUID)(p),
    answerNumber: d + 1
  }) : null != A ? h.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: A.name,
    answerNumber: d + 1
  }) : h.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
    answerNumber: d + 1
  }), [f, A, d, p]), N = _ ? (0, l.jsx)(c.Spinner, {
    className: P ? I.spinnerWrapperDefault : I.spinnerWrapperImageOnly
  }) : (0, l.jsx)(g, {
    hasUpload: f,
    mediaUrl: L,
    mediaFilename: p,
    imageClassName: r(I.media, P ? I.gifDefault : I.gifJumbo),
    emoji: A,
    emojiClassName: r(I.media, P ? I.emojiDefault : I.emojiJumbo),
    fallback: (0, l.jsx)(T.default, {
      className: P ? I.expressionPickerIconDefault : I.expressionPickerIconImageOnly
    })
  });
  return (0, l.jsx)(c.Clickable, {
    onClick: u,
    "aria-controls": E,
    "aria-label": O,
    className: r(x.CHAT_INPUT_BUTTON_CLASSNAME, i === o.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? I.expressionPickerButtonImageOnly : I.expressionPickerButtonDefault),
    "data-menu-item": "true",
    children: N
  })
}
var v = n.forwardRef(function(e, t) {
  let {
    channelId: n,
    answer: s,
    index: E,
    layout: _,
    onAnswerTextChange: m,
    handleTogglePollExpressionPicker: T,
    onRemoveAnswer: C
  } = e, R = (0, u.useStateFromStores)([L.default], () => L.default.getUpload(n, s.localCreationAnswerId, f.DraftType.Poll)), x = () => {
    function e(e) {
      d.default.update(n, s.localCreationAnswerId, f.DraftType.Poll, {
        description: e
      })
    }(0, c.openModalLazy)(async () => {
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
  }, g = (0, l.jsx)(S, {
    channelId: n,
    buttonImage: s.image,
    layout: _,
    handleTogglePollExpressionPicker: T,
    localCreationAnswerId: s.localCreationAnswerId,
    answerIndex: E
  }), v = null != R && null != R.description && R.description.length > 0;
  return (0, l.jsx)(l.Fragment, {
    children: _ === o.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
      className: I.answerRow,
      children: [(0, l.jsxs)("div", {
        className: r(N.formInput, I.defaultContainer),
        ref: t,
        children: [g, (0, l.jsx)(c.TextInput, {
          "aria-label": h.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
            answerNumber: E + 1
          }),
          placeholder: h.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
          value: s.text,
          className: I.defaultTextInput,
          inputClassName: r(N.formInput, I.defaultTextInput),
          onChange: e => m(e, E),
          maxLength: O.MAX_POLL_ANSWER_LENGTH
        })]
      }), (0, l.jsx)(c.Clickable, {
        onClick: () => C(E),
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
        children: [g, v && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: I.altBadge,
            "aria-hidden": !0,
            children: h.default.Messages.IMAGE_ALT
          }), (0, l.jsxs)("div", {
            onClick: x,
            children: [(0, l.jsx)(i.VisuallyHidden, {
              children: h.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
            }), (0, l.jsx)(c.Text, {
              variant: "text-xxs/medium",
              className: I.altTextPreview,
              children: R.description
            })]
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: I.imageOnlyAnswerActionBar,
        children: [null != R ? (0, l.jsx)(A.default, {
          tooltip: h.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
          "aria-label": v ? h.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
            answerNumber: E + 1
          }) : h.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
            answerNumber: E + 1
          }),
          onClick: x,
          children: (0, l.jsx)(P.ImageAltIcon, {
            "aria-hidden": !0
          })
        }) : null, (0, l.jsx)(A.default, {
          tooltip: h.default.Messages.CREATE_POLL_REMOVE_ANSWER,
          "aria-label": h.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
            answerNumber: E + 1
          }),
          onClick: () => C(E),
          dangerous: !0,
          children: (0, l.jsx)(p.default, {
            "aria-hidden": !0
          })
        })]
      })]
    })
  })
})