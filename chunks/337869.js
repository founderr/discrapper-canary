var i = r(411104);
var a = r(992774),
    s = r(710845),
    o = r(358085),
    l = r(998502);
(0, a.f3)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (o.isPlatformEmbedded) {
                let e = (0, a.zS)();
                if (null == e.VoiceConnection || (null == e.setVideoOutputSink && null == e.addVideoOutputSink)) throw Error('voe function missing');
                return !0;
            }
        } catch (e) {
            new s.Z('injectMediaEngine').error('Potentially corrupt installation:', e.message);
        }
        return !1;
    },
    supportsFeature: (e) => l.ZP.supportsFeature(e),
    setProcessPriority(e) {
        l.ZP.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => l.ZP.getVoiceEngine()
});
