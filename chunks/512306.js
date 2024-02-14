"use strict";
n.r(t), n.d(t, {
  BurstReactionSize: function() {
    return a
  },
  default: function() {
    return E
  }
});
var l, a, r = n("37983"),
  i = n("884691"),
  o = n("414456"),
  s = n.n(o),
  u = n("865981"),
  c = n.n(u),
  d = n("913144"),
  f = n("15935"),
  h = n("569512"),
  m = n("941723"),
  g = n("235735");
(l = a || (a = {}))[l.NORMAL = 16] = "NORMAL", l[l.LARGE = 32] = "LARGE";
let R = async e => {
  var t;
  let {
    effect: n
  } = e, l = await (0, h.getBurstAnimation)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : "", n.emoji.name), a = await (0, m.getResizedAnimation)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, l, n.color);
  return a.assets[0].p = n.url, a
};

function E(e) {
  let {
    className: t,
    effect: n,
    onComplete: l,
    emojiSize: a = 16
  } = e, o = i.useRef(null), u = a * m.ANIMATION_TO_EMOJI_RATIO, h = (u + a) / 2;
  return i.useEffect(() => {
    let e;
    if (null != n) return !async function() {
      if (null != o.current) {
        let t = await R({
          effect: n
        });
        (e = c.loadAnimation({
          container: o.current,
          renderer: "svg",
          loop: !1,
          autoplay: !0,
          animationData: t
        })).addEventListener("complete", () => {
          null == l || l(), e.destroy()
        }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === f.BurstReactionEffectSource.HOVER && d.default.dispatch({
          type: "BURST_REACTION_ANIMATION_ADD",
          channelId: n.channelId,
          messageId: n.messageId,
          emoji: n.emoji,
          animation: e
        })
      }
    }(), () => {
      null != e && e.destroy()
    }
  }, [l, n, a]), (0, r.jsx)("div", {
    className: g.effectsWrapper,
    children: (0, r.jsx)("div", {
      className: s(g.effect, t),
      style: {
        transform: "translateY(".concat(h, "px)"),
        height: u,
        width: u
      },
      ref: o
    })
  })
}