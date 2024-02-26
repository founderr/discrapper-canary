"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("702976");
var a = n("37983");
n("884691");
var s = n("568734"),
  l = n("913491"),
  i = n("823674"),
  r = n("49111"),
  o = n("5762");

function u(e) {
  let {
    setPopout: t,
    messagePopouts: {
      emojiPicker: n,
      emojiBurstPicker: u,
      moreUtilities: d
    },
    isFocused: c,
    buttonProps: {
      message: f,
      channel: h,
      groupId: C,
      compact: p = !1
    }
  } = e, E = f.state === r.MessageStates.SENDING, m = f.id === C, g = (0, s.hasFlag)(f.flags, r.MessageFlags.EPHEMERAL), _ = f.state === r.MessageStates.SEND_FAILED;
  return E || g && !_ ? null : (0, a.jsx)(i.default, {
    className: o.buttons,
    innerClassName: o.buttonsInner,
    isHeader: !p && m && !(0, l.default)(f),
    channel: h,
    message: f,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: u,
    showMoreUtilities: d,
    isFocused: c
  })
}