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
    onGifSelect: f,
    onCustomUpload: L,
    positionTargetRef: T
  } = e, {
    showPollExpressionPicker: p,
    closePollExpressionPicker: C
  } = (0, E.default)(), P = (0, i.useStateFromStores)([d.default], () => t.isPrivate() || d.default.can(A.Permissions.ATTACH_FILES, t)), R = n.useCallback(e => {
    r(null != s, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && f(t.id, s, (0, c.makeTenorProxyURL)(e.gifSrc)), C()
  }, [C, s, f, t.id]), O = n.useCallback(e => {
    r(null != s, "Expected to have an active input"), r(null != e, "Expected to have an emoji"), m(e, s), C()
  }, [s, m, C]), x = n.useCallback(e => {
    r(null != s, "Expected to have an active input"), L(t.id, s, e), C()
  }, [t.id, C, s, L]);
  return p ? (0, l.jsx)(u.default, {
    positionTargetRef: T,
    type: o.ChatInputTypes.CREATE_POLL,
    hideGifFavorites: !0,
    includeCreateEmojiButton: !1,
    onSelectGIF: P ? R : void 0,
    onSelectEmoji: O,
    onCustomUpload: P ? x : void 0,
    channel: t,
    parentModalKey: a,
    closeOnModalOuterClick: !0,
    position: "bottom",
    align: "left",
    positionLayerClassName: _.expressionPickerPositionLayer
  }) : null
}