n.d(t, {
  Z: function() {
    return I
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(570140),
  r = n(475179),
  o = n(367907),
  c = n(358221),
  u = n(788983),
  d = n(268353),
  h = n(944486),
  m = n(626135),
  p = n(585483),
  E = n(358085),
  g = n(228488),
  f = n(981631),
  C = n(607176);
let _ = () => {
  a.Z.wait(() => u.xv(f.KJ3.CHANNEL_CALL_POPOUT))
};

function I(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: a,
    popoutWindow: u,
    currentWindow: I
  } = e, x = n === f.IlC.POPOUT, T = i.useRef(null), {
    currentLayout: N,
    mode: Z
  } = (0, s.cj)([c.Z], () => {
    let e = c.Z.getMode(t.id),
      l = n === f.IlC.POPOUT;
    l && (e = f.WtW.VIDEO);
    let i = e === f.WtW.VIDEO ? c.Z.getLayout(t.id, n) : f.AEg.MINIMUM;
    return l && i !== f.AEg.FULL_SCREEN && (i = f.AEg.NO_CHAT), {
      currentLayout: i,
      mode: e
    }
  }, [t, n]), S = (0, s.e7)([h.Z], () => h.Z.getVoiceChannelId() === t.id, [t.id]);
  i.useEffect(() => {
    T.current = Z
  });
  let v = i.useRef(N),
    {
      currentDocument: A,
      rootNode: M
    } = i.useMemo(() => {
      let e = null != u && x ? u.document : document,
        t = I.document.getElementById("app-mount");
      return {
        currentWindow: I,
        currentDocument: e,
        rootNode: t
      }
    }, [u, x, I]),
    R = a && !x,
    j = Z === f.WtW.VIDEO && S && !R,
    L = i.useCallback((e, l) => {
      l !== e && (r.Z.updateLayout(t.id, l, n), l === f.AEg.FULL_SCREEN && t.isPrivate() && p.S.dispatch(f.CkL.TEXTAREA_BLUR))
    }, [n, t]),
    O = i.useCallback(e => {
      if (null != M) e === f.AEg.FULL_SCREEN && (L(e, v.current), (0, g.Pr)(e => {
        v.current = e
      }, A))
    }, [A, L, M]),
    P = i.useCallback(e => () => {
      null != M && (e !== f.AEg.FULL_SCREEN ? (v.current = e, L(e, f.AEg.FULL_SCREEN), (0, g.Dj)(M)) : O(e))
    }, [L, O, M]);
  return (i.useEffect(() => {
    let e = () => {
      null != M && !(0, g.rB)(M, A) && N === f.AEg.FULL_SCREEN && P(N)()
    };
    return A.addEventListener(g.NO, e), () => {
      A.removeEventListener(g.NO, e)
    }
  }, [A, N, P, M]), i.useEffect(() => (m.default.track(f.rMx.VIDEO_LAYOUT_TOGGLED, {
    video_layout: x ? "popout" : N,
    ...(0, o.AB)(t.id)
  }), () => {
    !(x && (0, E.isMac)()) && O(N)
  }), [N, x]), i.useEffect(() => {
    null != M && T.current === f.WtW.VIDEO && Z === f.WtW.VOICE && (0, g.Pr)(M, A)
  }, [A, Z, T, M]), i.useEffect(() => {
    !S && x && _()
  }, [S, x]), j) ? (0, l.jsx)(d.Z, {
    themeable: !1,
    node: M,
    guestWindow: u,
    className: C.rightTrayIcon,
    onClick: P(N)
  }) : null
}