"use strict";
n.r(t), n.d(t, {
  BurstReactionEffectSource: function() {
    return l
  },
  default: function() {
    return h
  }
}), n("222007");
var l, a, r = n("446674"),
  i = n("913144");
(a = l || (l = {})).HOVER = "HOVER", a.EXTERNAL = "EXTERNAL", a.RANDOM = "RANDOM";
let o = {},
  s = {},
  u = {},
  c = (e, t) => {
    let n = null != t.id ? t.id : t.name;
    return "".concat(e, ":").concat(n)
  },
  d = (e, t) => {
    var n;
    let l;
    switch (e) {
      case "HOVER":
        l = "HOVER";
        break;
      case "RANDOM":
        l = "RANDOM";
        break;
      default:
        l = "EXTERNAL"
    }
    let a = Object.entries(null !== (n = s[t]) && void 0 !== n ? n : {}),
      r = a.filter(e => {
        let [, t] = e;
        return t === l
      }),
      i = Object.fromEntries(r);
    if (Object.keys(i).length >= 5 && "EXTERNAL" === e) {
      for (let e in i)
        if (null == u[t] || null == u[t][e]) {
          delete s[t][e], delete i[e];
          break
        }
    }
    return Object.keys(i).length
  };
class f extends r.default.Store {
  getReactionPickerAnimation(e, t, n) {
    return o["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
  }
  getEffectForEmojiId(e, t, n) {
    var l;
    let a = c(t, n);
    return null === (l = s[e]) || void 0 === l ? void 0 : l[a]
  }
}
f.displayName = "BurstReactionEffectsStore";
var h = new f(i.default, {
  BURST_REACTION_EFFECT_CLEAR: e => {
    var t;
    let {
      channelId: n,
      messageId: l,
      emoji: a
    } = e, r = c(l, a);
    null === (t = s[n]) || void 0 === t || delete t[r]
  },
  BURST_REACTION_EFFECT_PLAY: e => {
    var t, n, l;
    let {
      channelId: a,
      messageId: r,
      emoji: i,
      key: o
    } = e, f = c(r, i);
    if (d(o, a) >= 5) return;
    let h = null !== (t = s[a]) && void 0 !== t ? t : {},
      m = null !== (n = u[a]) && void 0 !== n ? n : {},
      g = m[f],
      R = h[f];
    if ("HOVER" !== o || null == R) {
      "HOVER" === R && "EXTERNAL" === o && null != g && ("function" == typeof g.destroy && g.destroy(), null === (l = u[a]) || void 0 === l || delete l[f], R = void 0);
      null == R && (null != s[a] ? s[a][f] = o : s[a] = {
        [f]: o
      })
    }
  },
  BURST_REACTION_ANIMATION_ADD: e => {
    let {
      channelId: t,
      messageId: n,
      emoji: l,
      animation: a
    } = e, r = c(n, l);
    null == u[t] && (u[t] = {}), u[t][r] = a
  },
  BURST_REACTION_PICKER_ANIMATION_ADD: e => {
    let {
      messageId: t,
      emojiName: n,
      emojiId: l,
      startPosition: a
    } = e;
    o["".concat(t, ":").concat(n, ":").concat(null != l ? l : "")] = a
  },
  BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
    let {
      messageId: t,
      emojiName: n,
      emojiId: l
    } = e;
    delete o["".concat(t, ":").concat(n, ":").concat(null != l ? l : "")]
  }
})