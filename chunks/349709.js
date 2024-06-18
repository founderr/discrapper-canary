"use strict";
t.d(n, {
  Z: function() {
    return v
  }
});
var l = t(735250),
  a = t(470079),
  s = t(120356),
  i = t.n(s),
  r = t(442837),
  u = t(481060),
  o = t(596454),
  c = t(225433),
  d = t(727637),
  f = t(907040),
  m = t(984933),
  h = t(401227),
  g = t(903749),
  p = t(185923),
  N = t(689938),
  _ = t(328452);

function v(e) {
  let {
    className: n,
    guildId: t,
    error: s,
    emojiId: v,
    emojiName: D,
    isRequiredField: O = !0,
    shouldUpdateBothEmojiFields: S = !1,
    setEmojiId: x,
    setEmojiName: y
  } = e, E = (0, g.Z)({
    emojiId: v,
    emojiName: D
  }), A = (0, r.e7)([m.ZP], () => null != t ? m.ZP.getDefaultChannel(t) : null), b = a.createRef(), M = (0, d.Z)(b), C = () => {
    y(void 0), x(void 0)
  }, j = e => (n, t) => {
    let l = (null == n ? void 0 : n.id) == null;
    C(), l ? y(null == n ? void 0 : n.optionallyDiverseSequence) : (S && y(null == n ? void 0 : n.name), x(null == n ? void 0 : n.id)), t && e()
  }, I = e => {
    e.stopPropagation(), C()
  };
  return (0, l.jsx)(u.FormItem, {
    required: O,
    title: N.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
    className: i()(n, _.section),
    error: s,
    children: (0, l.jsx)(u.Popout, {
      animation: u.Popout.Animation.NONE,
      position: "top",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, l.jsx)(f.Z, {
          closePopout: n,
          pickerIntention: p.Hz.SOUNDBOARD,
          onNavigateAway: n,
          onSelectEmoji: j(n),
          guildId: t,
          channel: A
        })
      },
      children: (e, n) => {
        let {
          isShown: t
        } = n;
        return (0, l.jsxs)("div", {
          ...e,
          className: _.emojiInput,
          ref: b,
          children: [(0, l.jsx)(h.Z, {
            className: _.emojiButton,
            active: t,
            tabIndex: 0,
            renderButtonContents: null != v || null != D ? () => (0, l.jsx)(o.Z, {
              emojiName: D,
              emojiId: v
            }) : null
          }), (0, l.jsx)(u.TextInput, {
            inputClassName: _.emojiText,
            placeholder: N.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
            value: null != E ? ":".concat(E, ":") : "",
            readOnly: !0
          }), M && null != E && (0, l.jsx)(c.Z, {
            ...e,
            onClick: I,
            className: _.removeButton
          })]
        })
      }
    })
  })
}