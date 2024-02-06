"use strict";
i.r(t), i.d(t, {
  useEmojiColorPalette: function() {
    return r
  }
});
var a = i("446674"),
  l = i("819855"),
  n = i("206230"),
  s = i("161778"),
  o = i("584375");
let r = e => {
  let t = (0, a.useStateFromStores)([n.default], () => n.default.saturation),
    i = (0, a.useStateFromStores)([s.default], () => (0, l.isThemeDark)(s.default.theme));
  return (0, o.buildEmojiColorPalette)(e, t, i)
}