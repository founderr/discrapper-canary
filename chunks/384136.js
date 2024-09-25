n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(411104);
var i = n(836560);
var a = n(376398);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class s extends i.EventEmitter {
    static async get(e, t) {
        var n;
        let r = {
            audio: t && {
                echoCancellation: !1,
                noiseSuppression: !1,
                autoGainControl: !1
            },
            video: {
                ...e,
                frameRate: 30
            }
        };
        if ((null === (n = navigator.mediaDevices) || void 0 === n ? void 0 : n.getDisplayMedia) != null) return new s(await navigator.mediaDevices.getDisplayMedia(r));
        throw Error('UNKNOWN');
    }
    destroy() {
        this.removeAllListeners(), (0, a.jC)(this.streamId), this.stream.getTracks().forEach((e) => e.stop());
    }
    reset() {
        this.refreshSpeaking();
    }
    getStreamId() {
        return this.streamId;
    }
    refreshSpeaking() {
        this.emit(
            'speaking',
            this.stream.getAudioTracks().some((e) => e.enabled)
        );
    }
    constructor(e) {
        super(),
            o(this, 'id', void 0),
            o(this, 'stream', void 0),
            o(this, 'streamId', void 0),
            e.getVideoTracks().forEach((e) => {
                e.onended = () => {
                    this.emit('desktopsourceend');
                };
            }),
            (this.id = e.getVideoTracks()[0].label),
            (this.stream = e),
            (this.streamId = (0, a.N7)(e));
    }
}
