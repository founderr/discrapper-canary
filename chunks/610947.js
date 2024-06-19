n.d(t, {
  Z: function() {
    return f
  }
}), n(653041);
var l = n(470079),
  i = n(846519),
  s = n(692547),
  a = n(481060),
  r = n(220082),
  o = n(979651),
  c = n(125268),
  u = n(673125),
  d = n(292793),
  h = n(88315),
  m = n(262433),
  p = n(400321),
  E = n(813900);
let g = 1e3 / 60;

function f(e, t, n, f) {
  let C = (0, a.useToken)(s.Z.unsafe_rawColors.BRAND_500).hex(),
    _ = (0, a.useToken)(s.Z.unsafe_rawColors.BLACK_500).hex(),
    I = (0, a.useToken)(s.Z.unsafe_rawColors.WHITE_500).hex(),
    x = l.useRef({}),
    T = l.useRef(new i.Xp),
    N = l.useCallback(t => {
      let n = u.Z.getDrawables(t);
      (0, h.UN)(e), ! function(e) {
        let {
          canvasRef: t,
          drawables: n,
          fallbackColor: l,
          linesDrawnAt: i,
          streamerId: s,
          channelId: a,
          outlineColorDark: r,
          outlineColorLight: u
        } = e;
        if (0 === n.length) return;
        let h = t.current;
        if (null == h) return;
        let E = h.getContext("2d");
        if (null == E) return;
        let {
          width: g,
          height: f
        } = h.getBoundingClientRect(), C = [];
        n.forEach(e => {
          if (!(null != o.Z.getVoiceStateForChannel(a, e.userId))) {
            C.push(e);
            return
          }! function(e) {
            let {
              drawable: t,
              context: n,
              canvasWidth: l,
              canvasHeight: i,
              fallbackColor: s,
              outlineColorDark: a,
              outlineColorLight: r,
              linesDrawnAt: o,
              streamerId: c,
              deadDrawables: u
            } = e;
            switch (t.type) {
              case d.W.LINE:
                return (0, p.Z)({
                  line: t,
                  context: n,
                  canvasWidth: l,
                  canvasHeight: i,
                  fallbackColor: s,
                  outlineColorDark: a,
                  outlineColorLight: r,
                  linesDrawnAt: o,
                  deadDrawables: u
                });
              case d.W.EMOJI_HOSE:
                return (0, m.Z)({
                  emojiHose: t,
                  context: n,
                  canvasWidth: l,
                  canvasHeight: i,
                  fallbackColor: s,
                  outlineColorDark: a,
                  outlineColorLight: r,
                  streamerId: c,
                  deadDrawables: u
                })
            }
          }({
            drawable: e,
            context: E,
            canvasWidth: g,
            canvasHeight: f,
            fallbackColor: l,
            outlineColorDark: r,
            outlineColorLight: u,
            linesDrawnAt: i,
            deadDrawables: C,
            streamerId: s
          })
        }), C.length > 0 && (0, c.fW)(C, s)
      }({
        canvasRef: e,
        drawables: n,
        fallbackColor: C,
        linesDrawnAt: x,
        streamerId: t,
        outlineColorDark: _,
        outlineColorLight: I,
        channelId: f
      })
    }, [e, f, C, _, I]);
  l.useEffect(() => {
    let t = new ResizeObserver(() => {
      let t = e.current;
      if (null == t) return;
      let {
        width: l,
        height: i
      } = t.getBoundingClientRect();
      t.width = l * window.devicePixelRatio, t.height = i * window.devicePixelRatio, N(n)
    });
    return null != e.current && t.observe(e.current), () => t.disconnect()
  }, [e, N, n]);
  let Z = l.useCallback(() => {
    let t = u.Z.getDrawables(n),
      l = m.U.getState().particles,
      i = t.length > 0 || Object.keys(l).length > 0;
    i && null == T.current._ref && (null == T.current._ref ? (N(n), T.current.start(g, () => N(n))) : !i && null != T.current._ref && (T.current.stop(), (0, h.UN)(e)))
  }, [e, N, n]);
  l.useEffect(() => {
    let e = T.current;
    return u.Z.addChangeListener(Z), Z(), (0, r.vM)(t.getAvatarURL(null, E.Ks)), () => {
      u.Z.removeChangeListener(Z), e.stop()
    }
  })
}