t.d(a, {
  I: function() {
    return j
  }
}), t(47120);
var n = t(735250),
  l = t(470079),
  s = t(120356),
  r = t.n(s),
  o = t(263568),
  i = t(442837),
  c = t(481060),
  u = t(166459),
  d = t(596454),
  E = t(273031),
  _ = t(907040),
  m = t(906411),
  A = t(592125),
  L = t(703558),
  C = t(117530),
  R = t(153124),
  h = t(358085),
  f = t(79390),
  T = t(885001),
  O = t(35463),
  N = t(489887),
  x = t(185923),
  I = t(957825),
  g = t(689938),
  p = t(828765);
let P = {
  offset: {
    top: -4,
    bottom: -4,
    left: 0,
    right: -8
  }
};

function j(e) {
  let {
    hasUpload: a,
    mediaUrl: t,
    mediaFilename: l,
    imageClassName: s,
    emoji: r,
    emojiClassName: o,
    fallback: i
  } = e;
  return a ? (0, n.jsx)("img", {
    src: t,
    alt: l,
    className: s
  }) : null != r ? (0, n.jsx)(d.Z, {
    className: o,
    emojiId: r.id,
    emojiName: r.type === m.B.UNICODE ? r.optionallyDiverseSequence : r.name,
    animated: r.animated
  }) : (0, n.jsx)(n.Fragment, {
    children: i
  })
}

function v(e) {
  let {
    onSelect: a,
    onEditMedia: t,
    onDeleteMedia: l,
    closePopout: s
  } = e;
  return (0, n.jsx)("div", {
    className: p.menuContainer,
    children: (0, n.jsx)(c.Menu, {
      navId: "poll-media-edit-menu",
      onClose: s,
      "aria-label": g.Z.Messages.CREATE_POLL_UPDATE_EMOJI_MENU_ARIA,
      onSelect: a,
      children: (0, n.jsxs)(c.MenuGroup, {
        children: [(0, n.jsx)(c.MenuItem, {
          id: "poll-media-replace",
          label: g.Z.Messages.CREATE_POLL_REPLACE_EMOJI,
          action: t
        }), (0, n.jsx)(c.MenuItem, {
          id: "poll-media-delete",
          label: g.Z.Messages.CREATE_POLL_REMOVE_EMOJI,
          action: l,
          color: "danger"
        })]
      })
    })
  })
}

function M(e) {
  let {
    channelId: a,
    localCreationAnswerId: t,
    buttonImage: s,
    layout: u,
    onEmojiSelect: d,
    onEmojiRemove: E,
    answerIndex: m,
    shouldShowEmojiPicker: L,
    toggleEmojiPicker: C
  } = e, R = (0, i.e7)([A.Z], () => A.Z.getChannel(a)), {
    emoji: h,
    isLoadingMedia: T,
    hasUpload: N,
    mediaUrl: P,
    mediaFilename: M
  } = (0, O.Z)({
    channelId: a,
    localCreationAnswerId: t,
    image: s
  }), D = u === o.C.DEFAULT, S = N || null != h, b = l.useCallback(() => {
    E(m)
  }, [E, m]), w = l.useMemo(() => N ? g.Z.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: (0, f.fw)(M),
    answerNumber: m + 1
  }) : null != h ? g.Z.Messages.CREATE_POLL_EDIT_EMOJI_ARIA.format({
    emojiName: h.name,
    answerNumber: m + 1
  }) : g.Z.Messages.CREATE_POLL_ADD_EMOJI_ARIA.format({
    answerNumber: m + 1
  }), [N, h, m, M]), Z = l.useCallback(e => {
    let {
      closePopout: a
    } = e;
    return (0, n.jsx)("div", {
      className: p.emojiPicker,
      children: (0, n.jsx)(_.Z, {
        channel: R,
        pickerIntention: x.Hz.POLLS,
        closePopout: a,
        onNavigateAway: a,
        onSelectEmoji: (e, t) => {
          null != e && d(e, m), t && a()
        }
      })
    })
  }, [R, d, m]), k = l.useCallback(e => {
    let {
      closePopout: a
    } = e;
    return (0, n.jsx)(v, {
      onSelect: a,
      onEditMedia: C,
      onDeleteMedia: b,
      closePopout: a
    })
  }, [b, C]), U = T ? (0, n.jsx)(c.Spinner, {
    className: D ? p.spinnerWrapperDefault : p.spinnerWrapperImageOnly
  }) : (0, n.jsx)(j, {
    hasUpload: N,
    mediaUrl: P,
    mediaFilename: M,
    imageClassName: r()(p.media, D ? p.gifDefault : p.gifJumbo),
    emoji: h,
    emojiClassName: r()(p.media, D ? p.emojiDefault : p.emojiJumbo),
    fallback: (0, n.jsx)(c.ReactionIcon, {
      size: "md",
      color: "currentColor",
      className: D ? p.expressionPickerIconDefault : p.expressionPickerIconImageOnly
    })
  }), y = r()(I.CT, u === o.C.IMAGE_ONLY_ANSWERS ? p.expressionPickerButtonImageOnly : p.expressionPickerButtonDefault, {
    [p.canEditMedia]: S
  });
  return (0, n.jsx)(c.Popout, {
    renderPopout: Z,
    shouldShow: L,
    onRequestClose: C,
    animation: c.Popout.Animation.NONE,
    position: "bottom",
    spacing: 2,
    children: e => {
      let {
        "aria-controls": a,
        "aria-expanded": t,
        ...l
      } = e;
      return (0, n.jsx)(c.Popout, {
        animation: c.Popout.Animation.NONE,
        position: "bottom",
        renderPopout: k,
        children: e => {
          let {
            onClick: l,
            "aria-controls": s,
            "aria-expanded": r,
            ...o
          } = e;
          return (0, n.jsxs)(c.Clickable, {
            ...o,
            className: y,
            onClick: S && !L ? l : C,
            "aria-label": w,
            "aria-controls": null != a ? a : s,
            "aria-expanded": t || r,
            children: [U, S && (0, n.jsx)(c.PencilIcon, {
              size: "md",
              color: "currentColor",
              className: p.editIcon,
              "aria-hidden": !0
            })]
          })
        }
      })
    }
  })
}

function D(e) {
  var a;
  let {
    value: t,
    id: l
  } = e, s = (() => {
    var e;
    let a = null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0;
    return N.WA - a
  })();
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: r()(p.characterCount),
      "aria-hidden": "true",
      children: [null !== (a = null == t ? void 0 : t.length) && void 0 !== a ? a : 0, " / ", N.WA]
    }), (0, n.jsxs)(c.HiddenVisually, {
      id: l,
      children: [g.Z.Messages.CHARACTER_COUNT_A11Y_LABEL.format({
        remainingCharacters: s
      }), " ", g.Z.Messages.MAXIMUM_LENGTH.format({
        maxLength: N.WA
      })]
    })]
  })
}
a.Z = l.forwardRef(function(e, a) {
  let {
    channelId: s,
    answer: d,
    index: _,
    layout: m,
    isLastAnswer: A,
    onAnswerTextChange: O,
    onEmojiSelect: x,
    onEmojiRemove: I,
    canRemoveAnswer: j,
    onRemoveAnswer: v,
    addAnswer: S,
    submitPoll: b,
    answerTextInputRefs: w,
    error: Z,
    inputRef: k,
    deleteButtonRef: U
  } = e, y = (0, R.Dt)(), B = (0, R.Dt)(), H = null != Z && Z.length > 0, Y = (0, i.e7)([C.Z], () => C.Z.getUpload(s, d.localCreationAnswerId, L.d.Poll)), [F, G] = l.useState(!1), W = () => {
    function e(e) {
      u.Z.update(s, d.localCreationAnswerId, L.d.Poll, {
        description: e
      })
    }(0, c.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([t.e("99387"), t.e("2538")]).then(t.bind(t, 92254));
      return t => (0, n.jsx)(a, {
        channelId: s,
        answer: d,
        onSave: e,
        ...t
      })
    })
  }, z = l.useCallback(() => {
    G(e => !e)
  }, []), K = l.useCallback(e => {
    let a = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
      t = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
    switch (e.key.toLowerCase()) {
      case "enter":
        var n;
        A && (e.preventDefault(), ((0, f.cS)(d, m) || "macos" !== (0, h.getOS)() ? a : t) ? (e.stopPropagation(), b()) : S()), null === (n = w.current[_ + 1]) || void 0 === n || n.focus();
        break;
      case "e":
        ("macos" === (0, h.getOS)() ? t : a) && (e.preventDefault(), e.stopPropagation(), z())
    }
  }, [S, d, w, _, A, m, b, z]), V = (0, n.jsx)(M, {
    channelId: s,
    buttonImage: d.image,
    layout: m,
    onEmojiSelect: x,
    onEmojiRemove: I,
    localCreationAnswerId: d.localCreationAnswerId,
    answerIndex: _,
    shouldShowEmojiPicker: F,
    toggleEmojiPicker: z
  }), q = null != Y && null != Y.description && Y.description.length > 0;
  return (0, n.jsx)(n.Fragment, {
    children: m === o.C.DEFAULT ? (0, n.jsxs)("div", {
      className: r()(p.answerRow, {
        [p.hasDeleteButton]: j
      }),
      children: [(0, n.jsxs)("div", {
        className: r()(p.defaultTextInputWrapper, {
          [p.hasError]: H
        }),
        ref: a,
        children: [V, (0, n.jsx)(c.TextInput, {
          "aria-label": g.Z.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
            answerNumber: _ + 1
          }),
          placeholder: g.Z.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
          value: d.text,
          className: p.defaultTextInput,
          inputClassName: p.defaultTextInput,
          onChange: e => O({
            text: e,
            index: _,
            localCreationAnswerId: d.localCreationAnswerId
          }),
          onKeyDown: K,
          maxLength: N.WA,
          "aria-invalid": H,
          "aria-describedby": H ? y : B,
          focusProps: P,
          inputRef: k
        }), (0, n.jsx)(D, {
          value: d.text,
          id: B
        })]
      }), j && (0, n.jsx)(c.Clickable, {
        onClick: () => v(_),
        className: p.removeAnswerButtonDefault,
        "aria-label": g.Z.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
          answerNumber: _ + 1
        }),
        ref: U,
        children: (0, n.jsx)(c.TrashIcon, {
          size: "md",
          color: "currentColor",
          className: p.trashIcon,
          "aria-hidden": !0
        })
      }), H && (0, n.jsx)(c.Text, {
        id: y,
        variant: "text-xs/medium",
        color: "text-danger",
        className: p.__invalid_errorText,
        children: Z
      })]
    }) : (0, n.jsxs)("div", {
      className: p.imageOnlyContainer,
      ref: a,
      children: [(0, n.jsxs)("div", {
        className: p.imagePreviewContainer,
        children: [V, q && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: p.altBadge,
            "aria-hidden": !0,
            children: g.Z.Messages.IMAGE_ALT
          }), (0, n.jsxs)("div", {
            onClick: W,
            children: [(0, n.jsx)(c.HiddenVisually, {
              children: g.Z.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
            }), (0, n.jsx)(c.Text, {
              variant: "text-xxs/medium",
              className: p.altTextPreview,
              children: Y.description
            })]
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: p.imageOnlyAnswerActionBar,
        children: [null != Y ? (0, n.jsx)(E.Z, {
          tooltip: g.Z.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
          "aria-label": q ? g.Z.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
            answerNumber: _ + 1
          }) : g.Z.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
            answerNumber: _ + 1
          }),
          onClick: W,
          children: (0, n.jsx)(T.N, {
            "aria-hidden": !0
          })
        }) : null, (0, n.jsx)(E.Z, {
          tooltip: g.Z.Messages.CREATE_POLL_REMOVE_ANSWER,
          "aria-label": g.Z.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
            answerNumber: _ + 1
          }),
          onClick: () => v(_),
          dangerous: !0,
          children: (0, n.jsx)(c.TrashIcon, {
            size: "md",
            color: "currentColor",
            "aria-hidden": !0
          })
        })]
      })]
    })
  })
})