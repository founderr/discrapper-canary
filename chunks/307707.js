e.d(_, {
  Z: function() {
    return A
  }
});
var T = e(399606),
  s = e(339085),
  I = e(633302);

function A(E, _) {
  let e = (0, T.e7)([s.Z], () => null != E ? s.Z.getCustomEmojiById(E) : null, [E]);
  return {
    customEmoji: e,
    unicodeEmoji: null != _ ? I.ZP.getByName(I.ZP.convertSurrogateToName(_, !1)) : null
  }
}