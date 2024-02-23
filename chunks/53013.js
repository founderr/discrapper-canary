"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("627445"),
  r = a.n(s),
  i = a("446674"),
  o = a("850391"),
  u = a("241488"),
  c = a("254398"),
  d = a("957255"),
  E = a("264317"),
  A = a("843455"),
  _ = a("161625");

function m(e) {
  let {
    channel: t,
    parentModalKey: a,
    lastActiveInputIndex: s,
    onEmojiSelect: m,
    onGifSelect: L,
    positionTargetRef: f
  } = e, {
    showPollExpressionPicker: T,
    closePollExpressionPicker: p
  } = (0, E.default)(), C = (0, i.useStateFromStores)([d.default], () => t.isPrivate() || d.default.can(A.Permissions.ATTACH_FILES, t)), P = n.useCallback(e => {
    r(null != s, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && L(t.id, s, (0, c.makeTenorProxyURL)(e.gifSrc)), p()
  }, [p, s, L, t.id]), R = n.useCallback(e => {
    r(null != s, "Expected to have an active input"), r(null != e, "Expected to have an emoji"), m(e, s), p()
  }, [s, m, p]);
  return T ? (0, l.jsx)(u.default, {
    positionTargetRef: f,
    type: o.ChatInputTypes.CREATE_POLL,
    hideGifFavorites: !0,
    includeCreateEmojiButton: !1,
    onSelectGIF: C ? P : void 0,
    onSelectEmoji: R,
    channel: t,
    parentModalKey: a,
    closeOnModalOuterClick: !0,
    position: "bottom",
    align: "left",
    positionLayerClassName: _.expressionPickerPositionLayer
  }) : null
}