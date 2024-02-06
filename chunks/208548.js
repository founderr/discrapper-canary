"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var r = n("37983"),
  i = n("884691"),
  o = n("414456"),
  l = n.n(o),
  a = n("446674"),
  u = n("77078"),
  s = n("430568"),
  c = n("133403"),
  d = n("252744"),
  f = n("86678"),
  E = n("923959"),
  _ = n("882641"),
  I = n("384830"),
  T = n("958706"),
  p = n("782340"),
  S = n("545456");

function N(e) {
  let {
    className: t,
    guildId: n,
    error: o,
    emojiId: N,
    emojiName: h,
    isRequiredField: C = !0,
    shouldUpdateBothEmojiFields: v = !1,
    setEmojiId: R,
    setEmojiName: A
  } = e, g = (0, I.default)({
    emojiId: N,
    emojiName: h
  }), U = (0, a.useStateFromStores)([E.default], () => null != n ? E.default.getDefaultChannel(n) : null), m = i.createRef(), P = (0, d.default)(m), L = () => {
    A(void 0), R(void 0)
  }, D = e => (t, n) => {
    let r = (null == t ? void 0 : t.id) == null;
    L(), r ? A(null == t ? void 0 : t.optionallyDiverseSequence) : (v && A(null == t ? void 0 : t.name), R(null == t ? void 0 : t.id)), n && e()
  }, O = e => {
    e.stopPropagation(), L()
  };
  return (0, r.jsx)(u.FormItem, {
    required: C,
    title: p.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
    className: l(t, S.section),
    error: o,
    children: (0, r.jsx)(u.Popout, {
      animation: u.Popout.Animation.NONE,
      position: "top",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(f.default, {
          closePopout: t,
          pickerIntention: T.EmojiIntention.SOUNDBOARD,
          onNavigateAway: t,
          onSelectEmoji: D(t),
          guildId: n,
          channel: U
        })
      },
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, r.jsxs)("div", {
          ...e,
          className: S.emojiInput,
          ref: m,
          children: [(0, r.jsx)(_.default, {
            className: S.emojiButton,
            active: n,
            tabIndex: 0,
            renderButtonContents: null != N || null != h ? () => (0, r.jsx)(s.default, {
              emojiName: h,
              emojiId: N
            }) : null
          }), (0, r.jsx)(u.TextInput, {
            inputClassName: S.emojiText,
            placeholder: p.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
            value: null != g ? ":".concat(g, ":") : "",
            readOnly: !0
          }), P && null != g && (0, r.jsx)(c.default, {
            ...e,
            onClick: O,
            className: S.removeButton
          })]
        })
      }
    })
  })
}