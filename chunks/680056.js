var l = n(192379),
    a = n(906732),
    i = n(407316),
    o = n(937784);
t.Z = (e) => {
    let { channelId: t, setExporting: n } = e,
        { analyticsLocations: s } = (0, a.ZP)();
    return {
        onShareClick: l.useCallback(
            async (e) => {
                let { clip: l, cropData: a, applicationAudioEnabled: r, voiceAudioEnabled: c, onShareComplete: d } = e;
                n(l.id);
                try {
                    var u, m, p, v, h, x, g, C, f, j;
                    let e = (0, i.W)(t);
                    await (0, o.e)(l, {
                        channelId: e ? t : void 0,
                        analyticsLocations: s,
                        editMetadata: {
                            start: null !== (x = null !== (h = null == a ? void 0 : a.start) && void 0 !== h ? h : null === (u = l.editMetadata) || void 0 === u ? void 0 : u.start) && void 0 !== x ? x : 0,
                            end: null !== (C = null !== (g = null == a ? void 0 : a.end) && void 0 !== g ? g : null === (m = l.editMetadata) || void 0 === m ? void 0 : m.end) && void 0 !== C ? C : l.length / 1000,
                            applicationAudio: null === (f = null != r ? r : null === (p = l.editMetadata) || void 0 === p ? void 0 : p.applicationAudio) || void 0 === f || f,
                            voiceAudio: null === (j = null != c ? c : null === (v = l.editMetadata) || void 0 === v ? void 0 : v.voiceAudio) || void 0 === j || j
                        }
                    });
                } catch (e) {
                } finally {
                    null == d || d(), n(null);
                }
            },
            [t, s, n]
        )
    };
};
