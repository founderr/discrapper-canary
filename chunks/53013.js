"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("627445"),
  r = a.n(s),
  i = a("241488"),
  o = a("254398"),
  u = a("264317"),
  c = a("929574");

function d(e) {
  let {
    channel: t,
    layout: a,
    parentModalKey: s,
    lastActiveInputIndex: d,
    onEmojiSelect: E,
    onGifSelect: _,
    onCustomUpload: A,
    positionTargetRef: f
  } = e, {
    showPollExpressionPicker: m,
    closePollExpressionPicker: L,
    chatInputType: p
  } = (0, u.default)(a), T = n.useCallback(e => {
    r(null != d, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && _(t.id, d, (0, o.makeTenorProxyURL)(e.gifSrc)), L()
  }, [L, d, _, t.id]), C = n.useCallback(e => {
    r(null != d, "Expected to have an active input"), r(null != e, "Expected to have an emoji"), E(e, d), L()
  }, [d, E, L]), P = n.useCallback(e => {
    r(null != d, "Expected to have an active input"), A(t.id, d, e), L()
  }, [t.id, L, d, A]), R = n.useCallback(() => {}, []);
  return m ? (0, l.jsx)(i.default, {
    positionTargetRef: f,
    type: p,
    hideGifFavorites: !0,
    includeCreateEmojiButton: !1,
    onSelectGIF: T,
    onSelectEmoji: C,
    onSelectSticker: R,
    onCustomUpload: P,
    channel: t,
    parentModalKey: s,
    closeOnModalOuterClick: !0,
    position: "bottom",
    align: "left",
    positionLayerClassName: c.expressionPickerPositionLayer
  }) : null
}