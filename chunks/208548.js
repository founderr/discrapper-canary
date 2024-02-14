"use strict";
n.r(e), n.d(e, {
  default: function() {
    return p
  }
});
var i = n("37983"),
  r = n("884691"),
  u = n("414456"),
  a = n.n(u),
  l = n("446674"),
  o = n("77078"),
  s = n("430568"),
  c = n("133403"),
  d = n("252744"),
  f = n("86678"),
  E = n("923959"),
  _ = n("882641"),
  T = n("384830"),
  I = n("958706"),
  S = n("782340"),
  N = n("468464");

function p(t) {
  let {
    className: e,
    guildId: n,
    error: u,
    emojiId: p,
    emojiName: C,
    isRequiredField: A = !0,
    shouldUpdateBothEmojiFields: h = !1,
    setEmojiId: v,
    setEmojiName: P
  } = t, R = (0, T.default)({
    emojiId: p,
    emojiName: C
  }), g = (0, l.useStateFromStores)([E.default], () => null != n ? E.default.getDefaultChannel(n) : null), m = r.createRef(), D = (0, d.default)(m), U = () => {
    P(void 0), v(void 0)
  }, L = t => (e, n) => {
    let i = (null == e ? void 0 : e.id) == null;
    U(), i ? P(null == e ? void 0 : e.optionallyDiverseSequence) : (h && P(null == e ? void 0 : e.name), v(null == e ? void 0 : e.id)), n && t()
  }, y = t => {
    t.stopPropagation(), U()
  };
  return (0, i.jsx)(o.FormItem, {
    required: A,
    title: S.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
    className: a(e, N.section),
    error: u,
    children: (0, i.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: "top",
      renderPopout: t => {
        let {
          closePopout: e
        } = t;
        return (0, i.jsx)(f.default, {
          closePopout: e,
          pickerIntention: I.EmojiIntention.SOUNDBOARD,
          onNavigateAway: e,
          onSelectEmoji: L(e),
          guildId: n,
          channel: g
        })
      },
      children: (t, e) => {
        let {
          isShown: n
        } = e;
        return (0, i.jsxs)("div", {
          ...t,
          className: N.emojiInput,
          ref: m,
          children: [(0, i.jsx)(_.default, {
            className: N.emojiButton,
            active: n,
            tabIndex: 0,
            renderButtonContents: null != p || null != C ? () => (0, i.jsx)(s.default, {
              emojiName: C,
              emojiId: p
            }) : null
          }), (0, i.jsx)(o.TextInput, {
            inputClassName: N.emojiText,
            placeholder: S.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
            value: null != R ? ":".concat(R, ":") : "",
            readOnly: !0
          }), D && null != R && (0, i.jsx)(c.default, {
            ...t,
            onClick: y,
            className: N.removeButton
          })]
        })
      }
    })
  })
}