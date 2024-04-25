"use strict";
l.r(t);
var a = l("470079"),
  n = l("906732"),
  s = l("407316"),
  i = l("937784");
t.default = e => {
  let {
    channelId: t,
    setExporting: l
  } = e, {
    analyticsLocations: o
  } = (0, n.default)();
  return {
    onShareClick: a.useCallback(async e => {
      let {
        clip: a,
        cropData: n,
        applicationAudioEnabled: r,
        voiceAudioEnabled: u,
        onShareComplete: c
      } = e;
      l(a.id);
      try {
        var d, f, m, p, C, v, h, g, S, x;
        let e = (0, s.canAttachClipsToChannel)(t);
        await (0, i.shareClip)(a, {
          channelId: e ? t : void 0,
          analyticsLocations: o,
          editMetadata: {
            start: null !== (v = null !== (C = null == n ? void 0 : n.start) && void 0 !== C ? C : null === (d = a.editMetadata) || void 0 === d ? void 0 : d.start) && void 0 !== v ? v : 0,
            end: null !== (g = null !== (h = null == n ? void 0 : n.end) && void 0 !== h ? h : null === (f = a.editMetadata) || void 0 === f ? void 0 : f.end) && void 0 !== g ? g : a.length / 1e3,
            applicationAudio: null === (S = null != r ? r : null === (m = a.editMetadata) || void 0 === m ? void 0 : m.applicationAudio) || void 0 === S || S,
            voiceAudio: null === (x = null != u ? u : null === (p = a.editMetadata) || void 0 === p ? void 0 : p.voiceAudio) || void 0 === x || x
          }
        })
      } catch (e) {} finally {
        null == c || c(), l(null)
      }
    }, [t, o, l])
  }
}