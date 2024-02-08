"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("917351"),
  s = n.n(a),
  r = n("77078"),
  o = n("867805"),
  u = n("993244"),
  d = n("315102"),
  c = n("958706"),
  f = n("593115");
let p = s.memoize(e => "".concat(e * c.EmojiSprites.NonDiversityPerRow, "px ").concat(e * Math.ceil(o.default.numNonDiversitySprites / c.EmojiSprites.NonDiversityPerRow), "px")),
  m = s.memoize(e => "".concat(e * c.EmojiSprites.DiversityPerRow, "px ").concat(e * Math.ceil(o.default.numDiversitySprites / c.EmojiSprites.DiversityPerRow), "px")),
  h = (e, t, l) => {
    let i, a, s;
    if (!e.useSpriteSheet) return;
    let r = null != e.index ? e.index : 0;
    e.hasDiversity ? (i = n("110126")("./images/spritesheet-".concat(t, "-").concat(l, ".png").replace("./images/", "./")), a = m(l), s = c.EmojiSprites.DiversityPerRow) : (i = n("996542")("./images/spritesheet-emoji-".concat(l, ".png").replace("./images/", "./")), a = p(l), s = c.EmojiSprites.NonDiversityPerRow);
    let o = -r % s * l,
      u = -Math.floor(r / s) * l;
    return {
      backgroundImage: "url('".concat(i, "')"),
      backgroundPosition: "".concat(o, "px ").concat(u, "px"),
      backgroundSize: a,
      height: l,
      width: l
    }
  },
  E = i.memo(function(e) {
    let {
      emoji: t,
      size: n,
      surrogateCodePoint: i,
      allowAnimatedEmoji: a,
      "aria-label": s
    } = e;
    if (!t.useSpriteSheet) {
      var o;
      let e = null == t.id ? t.url : d.default.getEmojiURL({
        id: t.id,
        animated: a && t.animated,
        size: 48
      });
      return null != e ? (0, l.jsx)(u.default, {
        "aria-label": s,
        src: e,
        size: n,
        alt: null !== (o = t.allNamesString) && void 0 !== o ? o : ""
      }) : null
    }
    return (0, l.jsx)("div", {
      className: f.emojiSpriteImage,
      style: h(t, i, n),
      children: (0, l.jsx)(r.HiddenVisually, {
        children: s
      })
    })
  });
var S = E