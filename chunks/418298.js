"use strict";
a.r(t), a.d(t, {
  PollCreationMediaPreview: function() {
    return g
  },
  default: function() {
    return j
  }
});
var l = a("37983"),
  s = a("884691"),
  n = a("414456"),
  r = a.n(n),
  i = a("597287"),
  o = a("418009"),
  u = a("446674"),
  d = a("77078"),
  c = a("81594"),
  A = a("430568"),
  E = a("9560"),
  _ = a("86678"),
  m = a("858619"),
  L = a("474643"),
  f = a("585722"),
  T = a("46829"),
  C = a("228220"),
  N = a("562228"),
  R = a("714411"),
  O = a("356581"),
  h = a("186859"),
  P = a("958706"),
  I = a("13030"),
  x = a("782340"),
  p = a("345379");

function g(e) {
  let {
    hasUpload: t,
    mediaUrl: a,
    mediaFilename: s,
    imageClassName: n,
    emoji: r,
    emojiClassName: i,
    fallback: o
  } = e;
  return t ? (0, l.jsx)("img", {
    src: a,
    alt: s,
    className: n
  }) : null != r ? (0, l.jsx)(A.default, {
    className: i,
    emojiId: r.id,
    emojiName: r.type === m.EmojiTypes.UNICODE ? r.surrogates : r.name,
    animated: r.animated
  }) : (0, l.jsx)(l.Fragment, {
    children: o
  })
}

function M(e) {
  let {
    channelId: t,
    localCreationAnswerId: a,
    buttonImage: n,
    layout: i,
    onEmojiSelect: u,
    answerIndex: c
  } = e, {
    emoji: A,
    isLoadingMedia: E,
    hasUpload: m,
    mediaUrl: L,
    mediaFilename: f
  } = (0, O.default)({
    channelId: t,
    localCreationAnswerId: a,
    image: n
  }), C = i === o.PollLayoutTypes.DEFAULT, R = s.useMemo(() => m ? x.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: (0, N.filterOutUUID)(f),
    answerNumber: c + 1
  }) : null != A ? x.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: A.name,
    answerNumber: c + 1
  }) : x.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
    answerNumber: c + 1
  }), [m, A, c, f]), h = s.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, l.jsx)("div", {
      className: p.emojiPicker,
      children: (0, l.jsx)(_.default, {
        pickerIntention: P.EmojiIntention.POLLS,
        closePopout: t,
        onNavigateAway: t,
        onSelectEmoji: (e, a) => {
          null != e && u(e, c), a && t()
        }
      })
    })
  }, [u, c]), M = E ? (0, l.jsx)(d.Spinner, {
    className: C ? p.spinnerWrapperDefault : p.spinnerWrapperImageOnly
  }) : (0, l.jsx)(g, {
    hasUpload: m,
    mediaUrl: L,
    mediaFilename: f,
    imageClassName: r(p.media, C ? p.gifDefault : p.gifJumbo),
    emoji: A,
    emojiClassName: r(p.media, C ? p.emojiDefault : p.emojiJumbo),
    fallback: (0, l.jsx)(T.default, {
      className: C ? p.expressionPickerIconDefault : p.expressionPickerIconImageOnly
    })
  });
  return (0, l.jsx)(d.Popout, {
    animation: d.Popout.Animation.NONE,
    position: "bottom",
    renderPopout: h,
    "aria-label": R,
    children: e => (0, l.jsx)(d.Clickable, {
      className: r(I.CHAT_INPUT_BUTTON_CLASSNAME, i === o.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? p.expressionPickerButtonImageOnly : p.expressionPickerButtonDefault),
      ...e,
      children: M
    })
  })
}
var j = s.forwardRef(function(e, t) {
  let {
    channelId: s,
    answer: n,
    index: r,
    layout: A,
    onAnswerTextChange: _,
    onEmojiSelect: m,
    onRemoveAnswer: T
  } = e, N = (0, u.useStateFromStores)([f.default], () => f.default.getUpload(s, n.localCreationAnswerId, L.DraftType.Poll)), O = () => {
    function e(e) {
      c.default.update(s, n.localCreationAnswerId, L.DraftType.Poll, {
        description: e
      })
    }(0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await a.el("38228").then(a.bind(a, "38228"));
      return a => (0, l.jsx)(t, {
        channelId: s,
        answer: n,
        onSave: e,
        ...a
      })
    })
  }, P = (0, l.jsx)(M, {
    channelId: s,
    buttonImage: n.image,
    layout: A,
    onEmojiSelect: m,
    localCreationAnswerId: n.localCreationAnswerId,
    answerIndex: r
  }), I = null != N && null != N.description && N.description.length > 0;
  return (0, l.jsx)(l.Fragment, {
    children: A === o.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
      className: p.answerRow,
      children: [(0, l.jsxs)("div", {
        className: p.defaultTextInputWrapper,
        ref: t,
        children: [P, (0, l.jsx)(d.TextInput, {
          "aria-label": x.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
            answerNumber: r + 1
          }),
          placeholder: x.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
          value: n.text,
          className: p.defaultTextInput,
          inputClassName: p.defaultTextInput,
          onChange: e => _(e, r),
          maxLength: h.MAX_POLL_ANSWER_LENGTH
        })]
      }), (0, l.jsx)(d.Clickable, {
        onClick: () => T(r),
        className: p.removeAnswerButtonDefault,
        "aria-label": x.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
          answerNumber: r + 1
        }),
        children: (0, l.jsx)(C.default, {
          className: p.trashIcon,
          "aria-hidden": !0
        })
      })]
    }) : (0, l.jsxs)("div", {
      className: p.imageOnlyContainer,
      ref: t,
      children: [(0, l.jsxs)("div", {
        className: p.imagePreviewContainer,
        children: [P, I && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(d.Text, {
            variant: "text-xs/semibold",
            className: p.altBadge,
            "aria-hidden": !0,
            children: x.default.Messages.IMAGE_ALT
          }), (0, l.jsxs)("div", {
            onClick: O,
            children: [(0, l.jsx)(i.VisuallyHidden, {
              children: x.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
            }), (0, l.jsx)(d.Text, {
              variant: "text-xxs/medium",
              className: p.altTextPreview,
              children: N.description
            })]
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: p.imageOnlyAnswerActionBar,
        children: [null != N ? (0, l.jsx)(E.default, {
          tooltip: x.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
          "aria-label": I ? x.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
            answerNumber: r + 1
          }) : x.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
            answerNumber: r + 1
          }),
          onClick: O,
          children: (0, l.jsx)(R.ImageAltIcon, {
            "aria-hidden": !0
          })
        }) : null, (0, l.jsx)(E.default, {
          tooltip: x.default.Messages.CREATE_POLL_REMOVE_ANSWER,
          "aria-label": x.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
            answerNumber: r + 1
          }),
          onClick: () => T(r),
          dangerous: !0,
          children: (0, l.jsx)(C.default, {
            "aria-hidden": !0
          })
        })]
      })]
    })
  })
})