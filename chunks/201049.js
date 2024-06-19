l.r(n), l.d(n, {
  default: function() {
    return x
  }
}), l(47120);
var o = l(735250),
  a = l(470079),
  t = l(442837),
  i = l(481060),
  s = l(596454),
  d = l(907040),
  u = l(339085),
  r = l(984933),
  c = l(401227),
  m = l(153124),
  j = l(883429),
  C = l(981631),
  h = l(185923),
  v = l(689938),
  E = l(568505);

function x(e) {
  var n;
  let {
    transitionState: l,
    onClose: x,
    channelId: N,
    guildId: g,
    tag: T
  } = e, p = (0, m.Dt)(), M = null != T, [R, _] = a.useState(null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : ""), [k, I] = a.useState(null != T ? {
    id: T.emojiId,
    name: T.emojiName
  } : null), [A, Z] = a.useState(null == T ? void 0 : T.moderated), B = (0, t.e7)([u.Z], () => (null == k ? void 0 : k.id) != null ? u.Z.getUsableCustomEmojiById(k.id) : null), O = (null == T ? void 0 : T.name) !== R || (null == T ? void 0 : T.emojiId) !== (null == k ? void 0 : k.id) || (null == T ? void 0 : T.emojiName) !== (null == k ? void 0 : k.name) || A !== (null == T ? void 0 : T.moderated), b = () => {
    if (null != R && O) {
      if (M) {
        j.Z.updateForumTag({
          id: T.id,
          name: R,
          emojiId: null == k ? void 0 : k.id,
          emojiName: null == k ? void 0 : k.name,
          moderated: A
        }, N), x();
        return
      }
      j.Z.createForumTag({
        name: R,
        emojiId: null == k ? void 0 : k.id,
        emojiName: null == k ? void 0 : k.name,
        moderated: A
      }, N), x()
    }
  }, f = e => {
    null != e && I(null != e.id ? {
      id: e.id,
      name: e.name
    } : {
      id: void 0,
      name: e.optionallyDiverseSequence
    })
  }, D = a.useCallback(e => _(e), []), F = a.createRef();
  return a.useEffect(() => {
    null != F.current && F.current.focus()
  }, []), (0, o.jsxs)(i.ModalRoot, {
    transitionState: l,
    "aria-labelledby": p,
    children: [(0, o.jsx)(i.ModalHeader, {
      separator: !1,
      children: (0, o.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: M ? v.Z.Messages.FORUM_TAG_EDIT : v.Z.Messages.FORUM_TAG_CREATE
      })
    }), (0, o.jsxs)("div", {
      className: E.content,
      children: [(0, o.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: v.Z.Messages.FORUM_TAG_CREATE_DESCRIPTION
      }), (0, o.jsxs)("div", {
        className: E.inputContainer,
        children: [(0, o.jsx)("div", {
          className: E.emojiButtonContainer,
          children: (0, o.jsx)(i.Popout, {
            renderPopout: e => {
              let {
                closePopout: n
              } = e, l = r.ZP.getDefaultChannel(g);
              return (0, o.jsx)(d.Z, {
                guildId: g,
                closePopout: n,
                onSelectEmoji: (e, l) => {
                  f(e), l && n()
                },
                pickerIntention: h.Hz.COMMUNITY_CONTENT,
                onNavigateAway: x,
                channel: l
              })
            },
            position: "left",
            animation: i.Popout.Animation.NONE,
            align: "bottom",
            children: (e, n) => {
              let {
                isShown: l
              } = n;
              return (0, o.jsx)(c.Z, {
                ...e,
                onClick: n => {
                  var l;
                  null === (l = e.onClick) || void 0 === l || l.call(e, n)
                },
                active: l,
                className: E.emojiButton,
                tabIndex: 0,
                renderButtonContents: null != k && (null != k.id || null != k.name) ? () => (0, o.jsx)(s.Z, {
                  className: E.emoji,
                  emojiId: k.id,
                  emojiName: k.name,
                  animated: !!(null == B ? void 0 : B.animated)
                }) : null
              })
            }
          })
        }), (0, o.jsx)(i.TextInput, {
          inputRef: F,
          maxLength: 20,
          value: R,
          inputClassName: E.input,
          placeholder: v.Z.Messages.FORUM_TAG_CREATE_PLACEHOLDER,
          onChange: D,
          autoFocus: !0,
          onKeyDown: e => {
            e.keyCode === C.yXg.ENTER && R.length > 0 && (R.length > 0 && b(), e.preventDefault())
          }
        }), R.length > 0 || null != k ? (0, o.jsx)(i.Button, {
          "aria-label": v.Z.Messages.FORUM_TAG_EDIT_RESET_LABEL,
          className: E.clearButton,
          onClick: () => {
            _(""), I(null)
          },
          look: i.Button.Looks.BLANK,
          size: i.Button.Sizes.NONE,
          children: (0, o.jsx)(i.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: E.clearIcon
          })
        }) : null]
      })]
    }), (0, o.jsx)(i.Checkbox, {
      type: i.Checkbox.Types.INVERTED,
      size: 18,
      value: null != A && A,
      onChange: (e, n) => Z(n || (null == T ? void 0 : T.moderated) == null && void 0),
      className: E.moderatedCheckbox,
      children: (0, o.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: v.Z.Messages.FORUM_MODERATED_TAG_CHECKBOX
      })
    }), (0, o.jsxs)(i.ModalFooter, {
      className: E.footer,
      children: [(0, o.jsxs)("div", {
        className: E.buttons,
        children: [(0, o.jsx)(i.Button, {
          color: i.Button.Colors.PRIMARY,
          onClick: () => {
            x()
          },
          children: v.Z.Messages.CANCEL
        }), (0, o.jsx)(i.Button, {
          onClick: b,
          disabled: 0 === R.length || !O,
          autoFocus: !0,
          children: v.Z.Messages.SAVE
        })]
      }), M && (0, o.jsx)(i.Button, {
        color: i.Button.Colors.RED,
        look: i.Button.Looks.LINK,
        onClick: () => {
          M && (j.Z.deleteForumTag(N, T.id), x())
        },
        children: v.Z.Messages.FORUM_TAG_REMOVE
      })]
    })]
  })
}