"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("424973");
var l = n("884691"),
  a = n("862337"),
  s = n("669491"),
  i = n("77078"),
  r = n("462274"),
  u = n("800762"),
  o = n("760679"),
  d = n("242260"),
  c = n("315841"),
  f = n("52477"),
  h = n("553930"),
  m = n("717482"),
  p = n("827520");
let E = 1e3 / 60;

function S(e, t, n, S) {
  let g = (0, i.useToken)(s.default.unsafe_rawColors.BRAND_500).hex(),
    C = (0, i.useToken)(s.default.unsafe_rawColors.BLACK_500).hex(),
    _ = (0, i.useToken)(s.default.unsafe_rawColors.WHITE_500).hex(),
    I = l.useRef({}),
    T = l.useRef(new a.Interval),
    v = l.useCallback(t => {
      let n = d.default.getDrawables(t);
      (0, f.clearCanvas)(e), ! function(e) {
        let {
          canvasRef: t,
          drawables: n,
          fallbackColor: l,
          linesDrawnAt: a,
          streamerId: s,
          channelId: i,
          outlineColorDark: r,
          outlineColorLight: d
        } = e;
        if (0 === n.length) return;
        let f = t.current;
        if (null == f) return;
        let p = f.getContext("2d");
        if (null == p) return;
        let {
          width: E,
          height: S
        } = f.getBoundingClientRect(), g = [];
        n.forEach(e => {
          let t = null != u.default.getVoiceStateForChannel(i, e.userId);
          if (!t) {
            g.push(e);
            return
          }! function(e) {
            let {
              drawable: t,
              context: n,
              canvasWidth: l,
              canvasHeight: a,
              fallbackColor: s,
              outlineColorDark: i,
              outlineColorLight: r,
              linesDrawnAt: u,
              streamerId: o,
              deadDrawables: d
            } = e;
            switch (t.type) {
              case c.DrawableType.LINE:
                return (0, m.default)({
                  line: t,
                  context: n,
                  canvasWidth: l,
                  canvasHeight: a,
                  fallbackColor: s,
                  outlineColorDark: i,
                  outlineColorLight: r,
                  linesDrawnAt: u,
                  deadDrawables: d
                });
              case c.DrawableType.EMOJI_HOSE:
                return (0, h.default)({
                  emojiHose: t,
                  context: n,
                  canvasWidth: l,
                  canvasHeight: a,
                  fallbackColor: s,
                  outlineColorDark: i,
                  outlineColorLight: r,
                  streamerId: o,
                  deadDrawables: d
                })
            }
          }({
            drawable: e,
            context: p,
            canvasWidth: E,
            canvasHeight: S,
            fallbackColor: l,
            outlineColorDark: r,
            outlineColorLight: d,
            linesDrawnAt: a,
            deadDrawables: g,
            streamerId: s
          })
        }), g.length > 0 && (0, o.clearDrawables)(g, s)
      }({
        canvasRef: e,
        drawables: n,
        fallbackColor: g,
        linesDrawnAt: I,
        streamerId: t,
        outlineColorDark: C,
        outlineColorLight: _,
        channelId: S
      })
    }, [e, S, g, C, _]);
  l.useEffect(() => {
    let t = new ResizeObserver(() => {
      let t = e.current;
      if (null == t) return;
      let {
        width: l,
        height: a
      } = t.getBoundingClientRect();
      t.width = l * window.devicePixelRatio, t.height = a * window.devicePixelRatio, v(n)
    });
    return null != e.current && t.observe(e.current), () => t.disconnect()
  }, [e, v, n]);
  let x = l.useCallback(() => {
    let t = d.default.getDrawables(n),
      l = h.useEmojiHoseStore.getState().particles,
      a = t.length > 0 || Object.keys(l).length > 0;
    a && null == T.current._ref && (null == T.current._ref ? (v(n), T.current.start(E, () => v(n))) : !a && null != T.current._ref && (T.current.stop(), (0, f.clearCanvas)(e)))
  }, [e, v, n]);
  l.useEffect(() => {
    let e = T.current;
    return d.default.addChangeListener(x), x(), (0, r.maybeFetchColors)(t.getAvatarURL(null, p.AVATAR_COLOR_AVATAR_SIZE)), () => {
      d.default.removeChangeListener(x), e.stop()
    }
  })
}