n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(653041);
var i = n(411104);
var a = n(47120);
var o = n(836560);
var s = n(264344),
    l = n.n(s),
    u = n(649318);
function c(e, t, n) {
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
class d extends o.EventEmitter {
    addStream(e, t, n) {
        let r = !1;
        !this.streams.some((e) => e.ssrc === t) &&
            this.streams.push({
                ssrc: t,
                cname: e,
                type: 'audio'
            }),
            this.activeAudioSSRCs[e] !== t &&
                ((this.activeAudioSSRCs = {
                    ...this.activeAudioSSRCs,
                    [e]: t
                }),
                (r = !0)),
            null != n &&
                (n > 0
                    ? (!this.streams.some((e) => e.ssrc === n) &&
                          this.streams.push({
                              ssrc: n,
                              cname: e,
                              type: 'video'
                          }),
                      this.activeVideoSSRCs[e] !== n &&
                          ((this.activeVideoSSRCs = {
                              ...this.activeVideoSSRCs,
                              [e]: n
                          }),
                          (r = !0)))
                    : null != this.activeVideoSSRCs[e] && ((r = !0), (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }), delete this.activeVideoSSRCs[e])),
            r && this.negotiationNeeded();
    }
    removeStream(e) {
        let t = !1;
        null != this.activeAudioSSRCs[e] && ((t = !0), (this.activeAudioSSRCs = { ...this.activeAudioSSRCs }), delete this.activeAudioSSRCs[e]), null != this.activeVideoSSRCs[e] && ((t = !0), (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }), delete this.activeVideoSSRCs[e]), t && this.negotiationNeeded();
    }
    get sdp() {
        if (null == this._sdp) throw Error('sdp is not set');
        return this._sdp;
    }
    set sdp(e) {
        if (!(0, u.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
        (this._sdp = e), this.createAnswer(), (this.connected = !0), this._negotiationNeeded && this.negotiationNeeded();
    }
    negotiationNeeded() {
        if (this.negotiating) {
            this._negotiationNeeded = !0;
            return;
        }
        null != this._sdp ? ((this.negotiating = !0), (this._negotiationNeeded = !1), this.generateSessionDescription('offer')) : (this._negotiationNeeded = !0);
    }
    setRemoteDescription(e) {
        return (this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded(), Promise.resolve();
    }
    createAnswer() {
        return this.generateSessionDescription('answer');
    }
    getSSRCs(e) {
        let t = this.streams.map((e, t) => {
            let { cname: n, ssrc: r, type: i } = e,
                a = this.activeAudioSSRCs[n],
                o = this.activeVideoSSRCs[n],
                s = ''.concat(i, '_inbound_').concat(t);
            return [r, n, i, a === r || o === r ? this.direction : u.Ns.INACTIVE, s];
        });
        if ('Firefox' !== l().name) return this.connected ? t : [];
        let n = this.outboundStreams.map((e, t) => [0, 'outbound', e.type, (0, u.Mg)(e.direction), ''.concat(e.type, '_outbound_').concat(t)]);
        if ('answer' !== e) return n.concat(t);
        {
            let e = n.length - t.length;
            return n
                .slice(0, e)
                .concat(t)
                .slice(0, n.length)
                .map((e, t) => {
                    let [n, r, i, a, o] = e;
                    return [n, r, i, (0, u.Mg)(this.outboundStreams[t].direction), this.outboundStreams[t].mid];
                });
        }
    }
    generateSessionDescription(e) {
        let t = this.audioCodec,
            n = this.audioPayloadType,
            r = this.videoCodec,
            i = this.videoPayloadType,
            a = this.rtxPayloadType,
            o = this.sdp;
        if (null == t || null == n || null == r || null == i || null == a || null == o || null == this.direction)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(t, ', audioPayloadType: ')
                    .concat(null == n ? 'null' : n, ', videoCodec: ')
                    .concat(r, ', videoCodecPayloadType: ')
                    .concat(null == i ? 'null' : i, ', rtxPayloadType: ')
                    .concat(null == a ? 'null' : a, ', sdp: ')
                    .concat(o)
            );
        let s = (0, u.MP)({
            type: e,
            baseSDP: o,
            direction: this.direction,
            audioCodec: t,
            audioPayloadType: n,
            audioBitRate: 40,
            videoCodec: r,
            videoPayloadType: i,
            videoBitRate: 2500,
            rtxPayloadType: a,
            ssrcs: this.getSSRCs(e),
            extensions: this.extensions
        });
        return this.emit(e, s), Promise.resolve(s);
    }
    constructor(...e) {
        super(...e), c(this, 'audioCodec', null), c(this, 'audioPayloadType', null), c(this, 'videoCodec', null), c(this, 'videoPayloadType', null), c(this, 'rtxPayloadType', null), c(this, 'direction', null), c(this, 'outboundStreams', []), c(this, 'extensions', []), c(this, 'streams', []), c(this, 'activeAudioSSRCs', {}), c(this, 'activeVideoSSRCs', {}), c(this, '_sdp', null), c(this, 'connected', !1), c(this, 'negotiating', !1), c(this, '_negotiationNeeded', !1);
    }
}
