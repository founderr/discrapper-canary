a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a(47120), a(315314), a(610138), a(216116), a(78328), a(815648);
var n = a(735250),
  l = a(470079),
  r = a(990547),
  i = a(481060),
  s = a(240872),
  o = a(579806),
  u = a(100527),
  d = a(906732),
  c = a(39604),
  m = a(212039),
  v = a(259612),
  f = a(572720),
  p = a(362693),
  h = a(674908),
  x = a(20437),
  g = a(689938),
  j = a(162989);

function C(e) {
  var t, a, C, b, E, N, T, I;
  let {
    clip: S,
    channelId: L,
    transitionState: w,
    onClose: y
  } = e, [k, M] = l.useState(!0), [R, _] = l.useState(null), [Z, D] = l.useState(null), {
    analyticsLocations: P
  } = (0, d.ZP)(u.Z.CLIPS_EDITOR);
  l.useEffect(() => {
    (async function e() {
      let e;
      try {
        e = await o.Z.clips.loadClip(S.filepath)
      } catch {
        y(), s.Z.show({
          title: g.Z.Messages.CLIPS_LOAD_ERROR_TITLE,
          body: g.Z.Messages.CLIPS_LOAD_ERROR_BODY
        });
        return
      }
      let t = e.data.buffer,
        a = await (0, m.w)(t),
        n = URL.createObjectURL(new Blob([a], {
          type: "audio/mp4"
        })),
        l = URL.createObjectURL(new Blob([e.data], {
          type: "video/mp4"
        }));
      D(n), _(l)
    })()
  }, [S.filepath, y]), l.useEffect(() => () => {
    null != R && URL.revokeObjectURL(R)
  }, [R]), l.useEffect(() => () => {
    null != Z && URL.revokeObjectURL(Z)
  }, [Z]);
  let [A, O] = l.useState(null === (E = null === (t = S.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === E || E), [F, B] = l.useState(null === (N = null === (a = S.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === N || N), [U, z] = l.useState({
    start: null !== (T = null === (C = S.editMetadata) || void 0 === C ? void 0 : C.start) && void 0 !== T ? T : 0,
    end: null !== (I = null === (b = S.editMetadata) || void 0 === b ? void 0 : b.end) && void 0 !== I ? I : 0
  }), [H, W] = l.useState(S.name), G = l.useRef({
    name: H,
    editMetadata: {
      start: U.start,
      end: U.end,
      voiceAudio: A,
      applicationAudio: F
    }
  });
  G.current = {
    name: H,
    editMetadata: {
      start: U.start,
      end: U.end,
      voiceAudio: A,
      applicationAudio: F
    }
  };
  let V = (0, f.l)(S);
  l.useEffect(() => {
    async function e() {
      let e = {};
      null != V && (e = {
        thumbnail: await (0, v.R)(V, G.current.editMetadata.start)
      }), (0, c.Tm)(S.id, {
        ...G.current,
        ...e
      })
    }
    return () => {
      e()
    }
  }, [S.id, V]);
  let K = l.useRef(null),
    Y = l.useMemo(() => ({
      videoPlayerRef: K,
      applicationAudioEnabled: F,
      setApplicationAudioEnabled: B,
      voiceAudioEnabled: A,
      setVoiceAudioEnabled: O,
      cropData: U,
      setCropData: z
    }), [F, A, U]);
  return (0, n.jsx)(i.ModalRoot, {
    impression: {
      impressionName: r.ImpressionNames.CLIP_EDITOR_VIEWED
    },
    size: i.ModalSize.DYNAMIC,
    className: j.modalRoot,
    transitionState: w,
    children: (0, n.jsx)(d.Gt, {
      value: P,
      children: (0, n.jsx)(i.ModalContent, {
        className: j.modalContent,
        children: (0, n.jsx)(x.Q.Provider, {
          value: Y,
          children: null == R || null == Z ? (0, n.jsx)("div", {
            className: j.spinnerContainer,
            children: (0, n.jsx)(i.Spinner, {})
          }) : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(p.Z, {
              videoURL: R,
              isLoading: k,
              onDoneLoading: () => M(!1),
              audioURL: Z,
              transitionState: w
            }), !k && (0, n.jsx)(h.Z, {
              channelId: L,
              onSetClipName: W,
              clipName: H,
              clip: S,
              onClose: y
            })]
          })
        })
      })
    })
  })
}