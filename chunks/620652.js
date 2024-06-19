n.d(t, {
  M: function() {
    return s
  },
  Z: function() {
    return v
  }
});
var i, s, a = n(735250),
  l = n(470079),
  o = n(120356),
  r = n.n(o),
  u = n(500923),
  c = n.n(u),
  d = n(570140),
  h = n(960020),
  m = n(831244),
  p = n(815605),
  g = n(981631),
  T = n(114905);
(i = s || (s = {}))[i.NORMAL = 16] = "NORMAL", i[i.LARGE = 32] = "LARGE";
let f = async e => {
  var t;
  let {
    effect: n
  } = e, i = await (0, m.T)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : g.lds, n.emoji.name), s = await (0, p.aB)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, i, n.color);
  return s.assets[0].p = n.url, s
};

function v(e) {
  let {
    className: t,
    effect: n,
    onComplete: i,
    emojiSize: s = 16
  } = e, o = l.useRef(null), u = s * p.Vz, m = (u + s) / 2;
  return l.useEffect(() => {
    let e;
    if (null != n) return !async function() {
      if (null != o.current) {
        let t = await f({
          effect: n
        });
        (e = c().loadAnimation({
          container: o.current,
          renderer: "svg",
          loop: !1,
          autoplay: !0,
          animationData: t
        })).addEventListener("complete", () => {
          null == i || i(), e.destroy()
        }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === h.I.HOVER && d.Z.dispatch({
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
  }, [i, n, s]), (0, a.jsx)("div", {
    className: T.effectsWrapper,
    children: (0, a.jsx)("div", {
      className: r()(T.effect, t),
      style: {
        transform: "translateY(".concat(m, "px)"),
        height: u,
        width: u
      },
      ref: o
    })
  })
}