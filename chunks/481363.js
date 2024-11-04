n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(789020);
var i = n(200651);
n(192379);
var l = n(630388),
    r = n(901461),
    s = n(773176),
    a = n(981631),
    o = n(916315);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: u },
            isFocused: d,
            buttonProps: { message: h, channel: m, groupId: p, compact: f = !1 }
        } = e,
        g = h.state === a.yb.SENDING,
        C = h.id === p,
        x = (0, l.yE)(h.flags, a.iLy.EPHEMERAL),
        v = h.state === a.yb.SEND_FAILED;
    return g || (x && !v)
        ? null
        : (0, i.jsx)(s.Z, {
              className: o.buttons,
              innerClassName: o.buttonsInner,
              isHeader: !f && C && !(0, r.Z)(h),
              isReply: !f && h.type === a.uaV.REPLY && null != h.messageReference,
              channel: m,
              message: h,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: u,
              isFocused: d
          });
}
