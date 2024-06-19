n.d(t, {
  Z: function() {
    return c
  }
}), n(789020);
var l = n(735250);
n(470079);
var i = n(630388),
  s = n(901461),
  a = n(773176),
  r = n(981631),
  o = n(105461);

function c(e) {
  let {
    setPopout: t,
    messagePopouts: {
      emojiPicker: n,
      emojiBurstPicker: c,
      moreUtilities: u
    },
    isFocused: d,
    buttonProps: {
      message: h,
      channel: m,
      groupId: p,
      compact: E = !1
    }
  } = e, g = h.state === r.yb.SENDING, f = h.id === p, C = (0, i.yE)(h.flags, r.iLy.EPHEMERAL), _ = h.state === r.yb.SEND_FAILED;
  return g || C && !_ ? null : (0, l.jsx)(a.Z, {
    className: o.buttons,
    innerClassName: o.buttonsInner,
    isHeader: !E && f && !(0, s.Z)(h),
    channel: m,
    message: h,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: c,
    showMoreUtilities: u,
    isFocused: d
  })
}