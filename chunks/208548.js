"use strict";
n.r(e), n.d(e, {
  default: function() {
    return A
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  r = n.n(a),
  o = n("446674"),
  s = n("77078"),
  u = n("430568"),
  c = n("133403"),
  d = n("252744"),
  f = n("86678"),
  p = n("923959"),
  C = n("882641"),
  h = n("384830"),
  v = n("958706"),
  I = n("782340"),
  E = n("545456");

function A(t) {
  let {
    className: e,
    guildId: n,
    error: a,
    emojiId: A,
    emojiName: _,
    isRequiredField: g = !0,
    shouldUpdateBothEmojiFields: m = !1,
    setEmojiId: N,
    setEmojiName: L
  } = t, T = (0, h.default)({
    emojiId: A,
    emojiName: _
  }), x = (0, o.useStateFromStores)([p.default], () => null != n ? p.default.getDefaultChannel(n) : null), y = i.createRef(), S = (0, d.default)(y), P = () => {
    L(void 0), N(void 0)
  }, R = t => (e, n) => {
    let l = (null == e ? void 0 : e.id) == null;
    P(), l ? L(null == e ? void 0 : e.optionallyDiverseSequence) : (m && L(null == e ? void 0 : e.name), N(null == e ? void 0 : e.id)), n && t()
  }, w = t => {
    t.stopPropagation(), P()
  };
  return (0, l.jsx)(s.FormItem, {
    required: g,
    title: I.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
    className: r(e, E.section),
    error: a,
    children: (0, l.jsx)(s.Popout, {
      animation: s.Popout.Animation.NONE,
      position: "top",
      renderPopout: t => {
        let {
          closePopout: e
        } = t;
        return (0, l.jsx)(f.default, {
          closePopout: e,
          pickerIntention: v.EmojiIntention.SOUNDBOARD,
          onNavigateAway: e,
          onSelectEmoji: R(e),
          guildId: n,
          channel: x
        })
      },
      children: (t, e) => {
        let {
          isShown: n
        } = e;
        return (0, l.jsxs)("div", {
          ...t,
          className: E.emojiInput,
          ref: y,
          children: [(0, l.jsx)(C.default, {
            className: E.emojiButton,
            active: n,
            tabIndex: 0,
            renderButtonContents: null != A || null != _ ? () => (0, l.jsx)(u.default, {
              emojiName: _,
              emojiId: A
            }) : null
          }), (0, l.jsx)(s.TextInput, {
            inputClassName: E.emojiText,
            placeholder: I.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
            value: null != T ? ":".concat(T, ":") : "",
            readOnly: !0
          }), S && null != T && (0, l.jsx)(c.default, {
            ...t,
            onClick: w,
            className: E.removeButton
          })]
        })
      }
    })
  })
}