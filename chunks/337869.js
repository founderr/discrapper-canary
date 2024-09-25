var r = n(411104);
var i = n(992774),
    a = n(710845),
    o = n(358085),
    s = n(998502);
(0, i.f3)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (o.isPlatformEmbedded) {
                let e = (0, i.zS)();
                if (null == e.VoiceConnection || (null == e.setVideoOutputSink && null == e.addVideoOutputSink)) throw Error('voe function missing');
                return !0;
            }
        } catch (e) {
            new a.Z('injectMediaEngine').error('Potentially corrupt installation:', e.message);
        }
        return !1;
    },
    supportsFeature: (e) => s.ZP.supportsFeature(e),
    setProcessPriority(e) {
        s.ZP.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => s.ZP.getVoiceEngine()
});
