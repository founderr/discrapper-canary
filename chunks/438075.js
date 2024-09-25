n.d(t, {
    Q: function () {
        return s;
    },
    Z: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(275344),
    a = n(938353);
function o(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: o = !1 },
        hasSpoilerEmbeds: s,
        handleContextMenu: l,
        isInteracting: u,
        isAutomodBlockedMessage: c,
        isMessageSnapshot: d,
        renderThreadAccessory: _,
        renderComponentAccessory: E,
        renderSuppressEmbeds: f,
        forceAddReactions: h,
        className: p
    } = e;
    return c
        ? null
        : (0, r.jsx)(i.Z, {
              message: t,
              children: (0, r.jsx)(a.ZP, {
                  className: p,
                  isInteracting: u,
                  message: t,
                  channel: n,
                  compact: o,
                  hasSpoilerEmbeds: s,
                  isMessageSnapshot: d,
                  onMediaItemContextMenu: l,
                  renderThreadAccessory: _,
                  renderComponentAccessory: E,
                  renderSuppressEmbeds: f,
                  forceAddReactions: h
              })
          });
}
function s(e, t) {
    let { message: n, channel: i, compact: o = !1, renderThreadAccessory: s, disableReactionCreates: l, disableReactionUpdates: u, isSearchResult: c } = e;
    return (0, r.jsx)(a.$p, {
        message: n,
        channel: i,
        compact: o,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: s,
        disableReactionCreates: l,
        disableReactionUpdates: u,
        isSearchResult: c
    });
}
