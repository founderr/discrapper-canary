n.d(t, {
  Q: function() {
    return r
  },
  Z: function() {
    return a
  }
});
var s = n(735250);
n(470079);
var i = n(275344),
  l = n(938353);

function a(e) {
  let {
    channelMessageProps: {
      message: t,
      channel: n,
      compact: a = !1
    },
    hasSpoilerEmbeds: r,
    handleContextMenu: o,
    isInteracting: c,
    isAutomodBlockedMessage: u,
    isMessageSnapshot: d,
    renderThreadAccessory: E,
    renderComponentAccessory: _,
    renderSuppressEmbeds: I,
    forceAddReactions: T,
    className: N
  } = e;
  return u ? null : (0, s.jsx)(i.Z, {
    message: t,
    children: (0, s.jsx)(l.ZP, {
      className: N,
      isInteracting: c,
      message: t,
      channel: n,
      compact: a,
      hasSpoilerEmbeds: r,
      isMessageSnapshot: d,
      onMediaItemContextMenu: o,
      renderThreadAccessory: E,
      renderComponentAccessory: _,
      renderSuppressEmbeds: I,
      forceAddReactions: T
    })
  })
}

function r(e, t) {
  let {
    message: n,
    channel: i,
    compact: a = !1,
    renderThreadAccessory: r,
    disableReactionCreates: o,
    disableReactionUpdates: c
  } = e;
  return (0, s.jsx)(l.$p, {
    message: n,
    channel: i,
    compact: a,
    hasSpoilerEmbeds: t,
    renderThreadAccessory: r,
    disableReactionCreates: o,
    disableReactionUpdates: c
  })
}