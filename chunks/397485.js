"use strict";
x.r(t), x.d(t, {
  CUSTOM_CALL_SOUND_ANIMATION_RANGE: function() {
    return P
  },
  AnimationTypeToAnimations: function() {
    return D
  },
  getResizedEmojiData: function() {
    return M
  },
  sampleAnimationId: function() {
    return H
  },
  getEffectUrl: function() {
    return U
  },
  getEffectAnnouncement: function() {
    return Y
  }
});
var s = x("917351"),
  a = x.n(s),
  o = x("440540"),
  y = x("811217"),
  d = x("504936"),
  k = x("988078"),
  p = x("939118"),
  e = x("101559"),
  r = x("326209"),
  n = x("610237"),
  m = x("733261"),
  c = x("596926"),
  l = x("761999"),
  _ = x("189580"),
  f = x("679126"),
  I = x("101593"),
  u = x("414668"),
  h = x("97656"),
  w = x("812007"),
  b = x("721336"),
  E = x("954877"),
  T = x("662151"),
  C = x("155232"),
  A = x("843093"),
  g = x("867805"),
  O = x("407063"),
  F = x("697218"),
  R = x("315102"),
  S = x("402671"),
  L = x("626334"),
  N = x("782340");
let P = {
    start: 10,
    end: 15
  },
  v = {
    BASIC: [o],
    PREMIUM: [y, d, k, p, e, r, n, m, c, l, _, f, I, u, h, w, b, E, T, C, A]
  },
  D = {
    [L.VoiceChannelEffectAnimationType.BASIC]: v.BASIC,
    [L.VoiceChannelEffectAnimationType.PREMIUM]: v.PREMIUM
  },
  M = a.memoize(i => new Promise(t => {
    let x = new Image;
    x.src = i, x.crossOrigin = "Anonymous", x.onload = () => {
      let s = L.EMOJI_SIZE * (0, O.getDevicePixelRatio)();
      if (x.width === s && x.height === s) t(i);
      else {
        var a;
        let i = document.createElement("canvas");
        i.width = s, i.height = s, null === (a = i.getContext("2d")) || void 0 === a || a.drawImage(x, 0, 0), t(i.toDataURL("image/png"))
      }
    }
  })),
  H = (i, t) => {
    let x = D[i];
    if (null != t && i === L.VoiceChannelEffectAnimationType.PREMIUM) {
      let i = t.end + 1;
      return Math.floor(Math.random() * (t.start - i) + i)
    }
    return Math.floor(Math.random() * x.length)
  };

function U(i) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L.EMOJI_SIZE;
  if (null != i.id) {
    var x;
    return R.default.getEmojiURL({
      id: i.id,
      animated: null !== (x = i.animated) && void 0 !== x && x,
      size: t
    })
  }
  let s = g.default.convertSurrogateToName(i.name, !1),
    a = g.default.getByName(s);
  return null != a ? S.default.getURL(a.surrogates) : ""
}

function G(i, t) {
  return a(i).map(i => {
    var x;
    return null !== (x = i[t]) && void 0 !== x ? x : null
  }).filter(i => null != i).uniq().value()
}

function Y(i) {
  var t, x, s, a, o, y;
  if (i.length < 1) return "";
  let d = G(i, "userId"),
    k = G(i, "emojiName"),
    p = k.length < 2 ? null !== (t = null == k ? void 0 : k[0]) && void 0 !== t ? t : "" : k.join(", ");
  if (d.length < 1) return "";
  if (1 === d.length) return N.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_SINGLE.format({
    firstUsername: null === (x = F.default.getUser(d[0])) || void 0 === x ? void 0 : x.username,
    emojiNames: p
  });
  if (2 === d.length) return N.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_DOUBLE.format({
    firstUsername: null === (s = F.default.getUser(d[0])) || void 0 === s ? void 0 : s.username,
    secondUsername: null === (a = F.default.getUser(d[1])) || void 0 === a ? void 0 : a.username,
    emojiNames: p
  });
  else return N.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_MULTIPLE.format({
    firstUsername: null === (o = F.default.getUser(d[0])) || void 0 === o ? void 0 : o.username,
    secondUsername: null === (y = F.default.getUser(d[1])) || void 0 === y ? void 0 : y.username,
    count: d.length - 2,
    emojiNames: p
  })
}