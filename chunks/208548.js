"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("37983"),
  a = n("884691"),
  i = n("414456"),
  r = n.n(i),
  u = n("446674"),
  o = n("77078"),
  s = n("430568"),
  c = n("133403"),
  d = n("252744"),
  f = n("86678"),
  h = n("923959"),
  C = n("882641"),
  p = n("384830"),
  v = n("958706"),
  E = n("782340"),
  m = n("468464");

function A(e) {
  let {
    className: t,
    guildId: n,
    error: i,
    emojiId: A,
    emojiName: S,
    isRequiredField: _ = !0,
    shouldUpdateBothEmojiFields: I = !1,
    setEmojiId: T,
    setEmojiName: g
  } = e, N = (0, p.default)({
    emojiId: A,
    emojiName: S
  }), P = (0, u.useStateFromStores)([h.default], () => null != n ? h.default.getDefaultChannel(n) : null), L = a.createRef(), R = (0, d.default)(L), y = () => {
    g(void 0), T(void 0)
  }, x = e => (t, n) => {
    let l = (null == t ? void 0 : t.id) == null;
    y(), l ? g(null == t ? void 0 : t.optionallyDiverseSequence) : (I && g(null == t ? void 0 : t.name), T(null == t ? void 0 : t.id)), n && e()
  }, M = e => {
    e.stopPropagation(), y()
  };
  return (0, l.jsx)(o.FormItem, {
    required: _,
    title: E.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
    className: r(t, m.section),
    error: i,
    children: (0, l.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: "top",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, l.jsx)(f.default, {
          closePopout: t,
          pickerIntention: v.EmojiIntention.SOUNDBOARD,
          onNavigateAway: t,
          onSelectEmoji: x(t),
          guildId: n,
          channel: P
        })
      },
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, l.jsxs)("div", {
          ...e,
          className: m.emojiInput,
          ref: L,
          children: [(0, l.jsx)(C.default, {
            className: m.emojiButton,
            active: n,
            tabIndex: 0,
            renderButtonContents: null != A || null != S ? () => (0, l.jsx)(s.default, {
              emojiName: S,
              emojiId: A
            }) : null
          }), (0, l.jsx)(o.TextInput, {
            inputClassName: m.emojiText,
            placeholder: E.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
            value: null != N ? ":".concat(N, ":") : "",
            readOnly: !0
          }), R && null != N && (0, l.jsx)(c.default, {
            ...e,
            onClick: M,
            className: m.removeButton
          })]
        })
      }
    })
  })
}