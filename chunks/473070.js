"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("37983"),
  n = a("884691"),
  i = a("759843"),
  r = a("77078"),
  s = a("477566"),
  u = a("49671"),
  o = a("812204"),
  d = a("685665"),
  c = a("803725"),
  f = a("758946"),
  m = a("430481"),
  v = a("135284"),
  p = a("488673"),
  h = a("5431"),
  x = a("464135"),
  C = a("28388"),
  g = a("782340"),
  E = a("204839");

function N(e) {
  var t, a, h, x, C, N, I, j;
  let {
    clip: M,
    channelId: T,
    transitionState: S,
    onClose: _
  } = e, [b, w] = n.useState(!0), [R, A] = n.useState(!1), [y, D] = n.useState(null), [k, P] = n.useState(null), {
    AnalyticsLocationProvider: O
  } = (0, d.default)(o.default.CLIPS_EDITOR);
  n.useEffect(() => {
    (async function e() {
      let e;
      try {
        e = await u.default.clips.loadClip(M.filepath)
      } catch {
        _(), s.default.show({
          title: g.default.Messages.CLIPS_LOAD_ERROR_TITLE,
          body: g.default.Messages.CLIPS_LOAD_ERROR_BODY
        });
        return
      }
      let t = e.data.buffer,
        a = await (0, f.createAudioMP4FromVideoMP4)(t),
        l = URL.createObjectURL(new Blob([a], {
          type: "audio/mp4"
        })),
        n = URL.createObjectURL(new Blob([e.data], {
          type: "video/mp4"
        }));
      P(l), D(n)
    })()
  }, [M.filepath, _]), n.useEffect(() => () => {
    null != y && URL.revokeObjectURL(y)
  }, [y]), n.useEffect(() => () => {
    null != k && URL.revokeObjectURL(k)
  }, [k]);
  let [F, B] = n.useState(null === (C = null === (t = M.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === C || C), [U, H] = n.useState(null === (N = null === (a = M.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === N || N), [z, Z] = n.useState({
    start: null !== (I = null === (h = M.editMetadata) || void 0 === h ? void 0 : h.start) && void 0 !== I ? I : 0,
    end: null !== (j = null === (x = M.editMetadata) || void 0 === x ? void 0 : x.end) && void 0 !== j ? j : 0
  }), [V, G] = n.useState(M.name), K = n.useRef({
    name: V,
    editMetadata: {
      start: z.start,
      end: z.end,
      voiceAudio: F,
      applicationAudio: U
    }
  });
  K.current = {
    name: V,
    editMetadata: {
      start: z.start,
      end: z.end,
      voiceAudio: F,
      applicationAudio: U
    }
  };
  let Y = (0, v.useClipProtocolURL)(M);
  return n.useEffect(() => {
    async function e() {
      let e = {};
      null != Y && (e = {
        thumbnail: await (0, m.createThumbnailFromVideo)(Y, K.current.editMetadata.start)
      }), (0, c.updateClipMetadata)(M.id, {
        ...K.current,
        ...e
      })
    }
    return () => {
      e()
    }
  }, [M.id, Y]), (0, l.jsx)(r.ModalRoot, {
    impression: {
      impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
    },
    size: r.ModalSize.DYNAMIC,
    className: E.modalRoot,
    transitionState: S,
    children: (0, l.jsx)(O, {
      children: (0, l.jsx)(r.ModalContent, {
        className: E.modalContent,
        children: null == y || null == k ? (0, l.jsx)("div", {
          className: E.spinnerContainer,
          children: (0, l.jsx)(r.Spinner, {})
        }) : (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(L, {
            voiceAudioEnabled: F,
            applicationAudioEnabled: U,
            videoURL: y,
            cropData: z,
            onSetCropData: Z,
            isLoading: b,
            hasOpenPrompt: R,
            onDoneLoading: () => w(!1),
            audioURL: k,
            transitionState: S
          }), !b && (0, l.jsx)(p.default, {
            voiceAudioEnabled: F,
            channelId: T,
            applicationAudioEnabled: U,
            onChangeApplicationAudioEnabled: H,
            onChangeVoiceAudioEnabled: B,
            cropData: z,
            onSetClipName: G,
            clipName: V,
            clip: M,
            onPrompt: A,
            onClose: _
          })]
        })
      })
    })
  })
}

function L(e) {
  let {
    cropData: t,
    onSetCropData: a,
    voiceAudioEnabled: i,
    applicationAudioEnabled: s,
    isLoading: u,
    hasOpenPrompt: o,
    onDoneLoading: d,
    videoURL: c,
    audioURL: f,
    transitionState: m
  } = e, v = n.useRef(null), p = n.useCallback(() => {
    var e;
    null === (e = v.current) || void 0 === e || e.seek(t.start), d()
  }, [d, t.start]);
  return n.useEffect(() => {
    var e, t, a;
    o && !(null === (t = v.current) || void 0 === t ? void 0 : null === (e = t.videoElement) || void 0 === e ? void 0 : e.paused) && (null === (a = v.current) || void 0 === a || a.pause())
  }, [o]), n.useEffect(() => {
    function e(e) {
      var a, l;
      if ((null === (a = document.activeElement) || void 0 === a ? void 0 : a.tagName) === "INPUT") return;
      let n = v.current;
      if (null == n) return;
      let i = null === (l = v.current) || void 0 === l ? void 0 : l.videoElement;
      if (null == i) return;
      let r = (0, C.default)(i.duration, e.shiftKey),
        s = !1;
      switch (e.key) {
        case " ":
          s = !0, i.paused ? n.play() : n.pause();
          break;
        case "ArrowLeft":
          s = !0, n.seek(Math.max(i.currentTime - r, t.start));
          break;
        case "ArrowRight":
          s = !0, n.seek(Math.min(i.currentTime + r, t.end))
      }
      s && (e.stopPropagation(), e.preventDefault())
    }
    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
  }, [t.start, t.end]), (0, l.jsxs)("div", {
    className: E.editorPane,
    children: [(0, l.jsx)("div", {
      className: E.videoSizer,
      children: (0, l.jsx)(h.default, {
        applicationAudioEnabled: s,
        voiceAudioEnabled: i,
        ref: v,
        audioSrc: f,
        src: c,
        isLoading: u,
        onDoneLoading: p,
        startTime: t.start,
        endTime: t.end
      })
    }), !u && m && [r.ModalTransitionState.ENTERED, r.ModalTransitionState.HIDDEN].includes(m) ? (0, l.jsx)(x.default, {
      videoPlayerRef: v,
      cropData: t,
      setCropData: a,
      sourceURL: c
    }) : null]
  })
}