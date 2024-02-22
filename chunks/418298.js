"use strict";
a.r(t), a.d(t, {
  PollCreationMediaPreview: function() {
    return I
  },
  default: function() {
    return S
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
  L = a("474643"),
  f = a("585722"),
  T = a("46829"),
  p = a("228220"),
  C = a("562228"),
  P = a("714411"),
  R = a("356581"),
  x = a("186859"),
  O = a("13030"),
  h = a("782340"),
  N = a("345379");

function I(e) {
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

function g(e) {
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
    hasUpload: L,
    mediaUrl: f,
    mediaFilename: p
  } = (0, R.default)({
    channelId: t,
    localCreationAnswerId: a,
    image: s
  }), P = i === o.PollLayoutTypes.DEFAULT, x = n.useMemo(() => L ? h.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: (0, C.filterOutUUID)(p),
    answerNumber: d + 1
  }) : null != A ? h.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: A.name,
    answerNumber: d + 1
  }) : h.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
    answerNumber: d + 1
  }), [L, A, d, p]), g = _ ? (0, l.jsx)(c.Spinner, {
    className: P ? N.spinnerWrapperDefault : N.spinnerWrapperImageOnly
  }) : (0, l.jsx)(I, {
    hasUpload: L,
    mediaUrl: f,
    mediaFilename: p,
    imageClassName: r(N.media, P ? N.gifDefault : N.gifJumbo),
    emoji: A,
    emojiClassName: r(N.media, P ? N.emojiDefault : N.emojiJumbo),
    fallback: (0, l.jsx)(T.default, {
      className: P ? N.expressionPickerIconDefault : N.expressionPickerIconImageOnly
    })
  });
  return (0, l.jsx)(c.Clickable, {
    onClick: u,
    "aria-controls": E,
    "aria-label": x,
    className: r(O.CHAT_INPUT_BUTTON_CLASSNAME, i === o.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? N.expressionPickerButtonImageOnly : N.expressionPickerButtonDefault),
    "data-menu-item": "true",
    children: g
  })
}
var S = n.forwardRef(function(e, t) {
  let {
    channelId: n,
    answer: s,
    index: r,
    layout: E,
    onAnswerTextChange: _,
    handleTogglePollExpressionPicker: m,
    onRemoveAnswer: T
  } = e, C = (0, u.useStateFromStores)([f.default], () => f.default.getUpload(n, s.localCreationAnswerId, L.DraftType.Poll)), R = () => {
    function e(e) {
      d.default.update(n, s.localCreationAnswerId, L.DraftType.Poll, {
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
  }, O = (0, l.jsx)(g, {
    channelId: n,
    buttonImage: s.image,
    layout: E,
    handleTogglePollExpressionPicker: m,
    localCreationAnswerId: s.localCreationAnswerId,
    answerIndex: r
  }), I = null != C && null != C.description && C.description.length > 0;
  return (0, l.jsx)(l.Fragment, {
    children: E === o.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
      className: N.answerRow,
      children: [(0, l.jsxs)("div", {
        className: N.defaultTextInputWrapper,
        ref: t,
        children: [O, (0, l.jsx)(c.TextInput, {
          "aria-label": h.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
            answerNumber: r + 1
          }),
          placeholder: h.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
          value: s.text,
          className: N.defaultTextInput,
          inputClassName: N.defaultTextInput,
          onChange: e => _(e, r),
          maxLength: x.MAX_POLL_ANSWER_LENGTH
        })]
      }), (0, l.jsx)(c.Clickable, {
        onClick: () => T(r),
        className: N.removeAnswerButtonDefault,
        "aria-label": h.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
          answerNumber: r + 1
        }),
        children: (0, l.jsx)(p.default, {
          className: N.trashIcon,
          "aria-hidden": !0
        })
      })]
    }) : (0, l.jsxs)("div", {
      className: N.imageOnlyContainer,
      ref: t,
      children: [(0, l.jsxs)("div", {
        className: N.imagePreviewContainer,
        children: [O, I && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: N.altBadge,
            "aria-hidden": !0,
            children: h.default.Messages.IMAGE_ALT
          }), (0, l.jsxs)("div", {
            onClick: R,
            children: [(0, l.jsx)(i.VisuallyHidden, {
              children: h.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
            }), (0, l.jsx)(c.Text, {
              variant: "text-xxs/medium",
              className: N.altTextPreview,
              children: C.description
            })]
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: N.imageOnlyAnswerActionBar,
        children: [null != C ? (0, l.jsx)(A.default, {
          tooltip: h.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
          "aria-label": I ? h.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
            answerNumber: r + 1
          }) : h.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
            answerNumber: r + 1
          }),
          onClick: R,
          children: (0, l.jsx)(P.ImageAltIcon, {
            "aria-hidden": !0
          })
        }) : null, (0, l.jsx)(A.default, {
          tooltip: h.default.Messages.CREATE_POLL_REMOVE_ANSWER,
          "aria-label": h.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
            answerNumber: r + 1
          }),
          onClick: () => T(r),
          dangerous: !0,
          children: (0, l.jsx)(p.default, {
            "aria-hidden": !0
          })
        })]
      })]
    })
  })
})