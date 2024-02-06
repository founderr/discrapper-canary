"use strict";
i.r(t), i.d(t, {
  default: function() {
    return g
  }
});
var n = i("37983"),
  s = i("884691"),
  l = i("917351"),
  r = i.n(l),
  a = i("77078"),
  o = i("867805"),
  u = i("993244"),
  c = i("315102"),
  d = i("958706"),
  f = i("593115");
let E = r.memoize(e => "".concat(e * d.EmojiSprites.NonDiversityPerRow, "px ").concat(e * Math.ceil(o.default.numNonDiversitySprites / d.EmojiSprites.NonDiversityPerRow), "px")),
  m = r.memoize(e => "".concat(e * d.EmojiSprites.DiversityPerRow, "px ").concat(e * Math.ceil(o.default.numDiversitySprites / d.EmojiSprites.DiversityPerRow), "px")),
  I = (e, t, n) => {
    let s, l, r;
    if (!e.useSpriteSheet) return;
    let a = null != e.index ? e.index : 0;
    e.hasDiversity ? (s = i("110126")("./images/spritesheet-".concat(t, "-").concat(n, ".png").replace("./images/", "./")), l = m(n), r = d.EmojiSprites.DiversityPerRow) : (s = i("996542")("./images/spritesheet-emoji-".concat(n, ".png").replace("./images/", "./")), l = E(n), r = d.EmojiSprites.NonDiversityPerRow);
    let o = -a % r * n,
      u = -Math.floor(a / r) * n;
    return {
      backgroundImage: "url('".concat(s, "')"),
      backgroundPosition: "".concat(o, "px ").concat(u, "px"),
      backgroundSize: l,
      height: n,
      width: n
    }
  },
  p = s.memo(function(e) {
    let {
      emoji: t,
      size: i,
      surrogateCodePoint: s,
      allowAnimatedEmoji: l,
      "aria-label": r
    } = e;
    if (!t.useSpriteSheet) {
      var o;
      let e = null == t.id ? t.url : c.default.getEmojiURL({
        id: t.id,
        animated: l && t.animated,
        size: 48
      });
      return null != e ? (0, n.jsx)(u.default, {
        "aria-label": r,
        src: e,
        size: i,
        alt: null !== (o = t.allNamesString) && void 0 !== o ? o : ""
      }) : null
    }
    return (0, n.jsx)("div", {
      className: f.emojiSpriteImage,
      style: I(t, s, i),
      children: (0, n.jsx)(a.HiddenVisually, {
        children: r
      })
    })
  });
var g = p