"use strict";
t.d(s, {
  E: function() {
    return _
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(768581),
  o = t(723047),
  c = t(570533),
  d = t(689938),
  u = t(605509);

function E(e) {
  let {
    emoji: s,
    onRemoveEmoji: t,
    disabled: i = !1
  } = e, o = r.ZP.getEmojiURL({
    id: s.id,
    animated: s.animated,
    size: 32
  });
  return (0, n.jsxs)("div", {
    className: l()(u.emojiRow, {
      [u.disabled]: i
    }),
    children: [(0, n.jsx)("img", {
      className: u.emojiImage,
      src: o,
      alt: s.name
    }), (0, n.jsx)(a.Text, {
      color: "header-primary",
      variant: "text-md/medium",
      className: u.emojiAlias,
      children: s.name
    }), (0, n.jsx)(a.Button, {
      look: a.Button.Looks.BLANK,
      size: a.Button.Sizes.ICON,
      className: u.deleteButton,
      onClick: () => t(s),
      "aria-label": d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_REMOVE_BUTTON_ARIA_LABEL,
      disabled: i,
      children: (0, n.jsx)(a.TrashIcon, {
        size: "md",
        color: "currentColor",
        className: u.trashIcon
      })
    })]
  })
}

function _(e) {
  let {
    tierEmojiIds: s,
    guildId: t,
    onRemoveEmoji: i
  } = e, l = (0, c.Z)(t), a = null != s ? l.filter(e => s.has(e.id)) : [], r = (0, o.mY)();
  return (0, n.jsx)("div", {
    className: u.container,
    children: a.map(e => (0, n.jsx)(E, {
      emoji: e,
      onRemoveEmoji: () => i(e),
      disabled: r
    }, e.id))
  })
}