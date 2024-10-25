n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(789020);
var i = n(200651);
n(192379);
var s = n(630388),
    a = n(901461),
    l = n(773176),
    r = n(981631),
    o = n(916315);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: u },
            isFocused: d,
            buttonProps: { message: h, channel: m, groupId: p, compact: _ = !1 }
        } = e,
        f = h.state === r.yb.SENDING,
        E = h.id === p,
        g = (0, s.yE)(h.flags, r.iLy.EPHEMERAL),
        C = h.state === r.yb.SEND_FAILED;
    return f || (g && !C)
        ? null
        : (0, i.jsx)(l.Z, {
              className: o.buttons,
              innerClassName: o.buttonsInner,
              isHeader: !_ && E && !(0, a.Z)(h),
              isReply: !_ && h.type === r.uaV.REPLY && null != h.messageReference,
              channel: m,
              message: h,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: u,
              isFocused: d
          });
}
