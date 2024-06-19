n.d(t, {
  Vz: function() {
    return u
  },
  Zn: function() {
    return d
  },
  aB: function() {
    return c
  }
}), n(757143);
var i = n(392711),
  s = n(772848),
  a = n(134432),
  l = n(963838),
  o = n(302221),
  r = n(347904);
let u = 7.5,
  c = (0, i.memoize)((e, t, n, i) => new Promise(e => {
    let s = new Image;
    s.src = t, s.crossOrigin = "Anonymous", s.onload = () => {
      let t = 32 * (0, a.x_)(),
        l = JSON.stringify(n);
      if (null != i && (l = (0, r.s4)(l, (0, o.oo)(i))), s.width === t && s.height === t || 0 === s.width && 0 === s.height) e(JSON.parse(l));
      else {
        let t = 128 / s.width * s.height;
        e(JSON.parse(l = (l = l.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
      }
    }
  }));

function d(e, t, n, i) {
  let {
    emojiSize: a,
    key: o,
    messageId: r
  } = null != i ? i : {}, u = (0, l._r)(e, null != a ? 2 * a : void 0);
  return {
    channelId: n,
    messageId: r,
    emoji: e,
    animationId: (0, s.Z)(),
    url: u,
    key: o,
    color: t
  }
}