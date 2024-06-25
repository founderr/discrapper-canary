"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(481060),
  _ = n(633302),
  c = n(334920),
  d = n(768581),
  E = n(185923),
  I = n(212645);
let T = l().memoize(e => "".concat(e * E.DC.NonDiversityPerRow, "px ").concat(e * Math.ceil(_.ZP.numNonDiversitySprites / E.DC.NonDiversityPerRow), "px")),
  h = l().memoize(e => "".concat(e * E.DC.DiversityPerRow, "px ").concat(e * Math.ceil(_.ZP.numDiversitySprites / E.DC.DiversityPerRow), "px")),
  f = (e, t, i) => {
    let r, s, o;
    if (!e.useSpriteSheet) return;
    let a = null != e.index ? e.index : 0;
    e.hasDiversity ? (r = n(735800)("./spritesheet-".concat(t, "-").concat(i, ".png")), s = h(i), o = E.DC.DiversityPerRow) : (r = n(604901)("./spritesheet-emoji-".concat(i, ".png")), s = T(i), o = E.DC.NonDiversityPerRow);
    let l = -a % o * i,
      u = -Math.floor(a / o) * i;
    return {
      backgroundImage: "url('".concat(r, "')"),
      backgroundPosition: "".concat(l, "px ").concat(u, "px"),
      backgroundSize: s,
      height: i,
      width: i
    }
  },
  S = r.memo(function(e) {
    let {
      emoji: t,
      size: n,
      surrogateCodePoint: s,
      allowAnimatedEmoji: a,
      "aria-label": l,
      isLocked: _
    } = e, T = (() => {
      if (!t.useSpriteSheet) {
        var e;
        let r = null == t.id ? t.url : d.ZP.getEmojiURL({
          id: t.id,
          animated: a && t.animated,
          size: E.$U
        });
        return null != r ? (0, i.jsx)(c.Z, {
          className: I.lockedEmoji,
          "aria-label": l,
          src: r,
          size: n,
          alt: null !== (e = t.allNamesString) && void 0 !== e ? e : ""
        }) : null
      }
      return (0, i.jsx)("div", {
        className: o()(I.emojiSpriteImage, {
          [I.lockedEmoji]: _
        }),
        style: f(t, s, n),
        children: (0, i.jsx)(u.HiddenVisually, {
          children: l
        })
      })
    })();
    return (0, i.jsxs)(r.Fragment, {
      children: [T, _ ? (0, i.jsx)("div", {
        className: I.emojiLockIconContainer,
        children: (0, i.jsx)(u.LockIcon, {
          size: "xs",
          color: "currentColor",
          className: I.emojiLockIcon
        })
      }) : null]
    })
  });
t.Z = S