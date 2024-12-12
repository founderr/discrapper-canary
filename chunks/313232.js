r.d(n, {
    r: function () {
        return o;
    }
});
var i,
    a = r(47120);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o {
    update(e) {
        for (let n in e.rtp.inbound)
            for (let r of e.rtp.inbound[n])
                if ('video' === r.type) {
                    let e = this.getInboundBytesRecevierCalculator(r),
                        n = this.getInboundFrameDecodeRateCalculator(r);
                    (r.bitrate = e.calculate(r)), (r.frameRateDecode = n.calculate(r));
                }
        for (let n of e.rtp.outbound)
            if ('video' === n.type) {
                let e = this.getOutboundBytesSentCalculator(n),
                    r = this.getOutboundEncodeRateCalculator(n);
                (n.bitrate = e.calculate(n)), (n.frameRateEncode = r.calculate(n));
            }
    }
    static getCalculatorOrCreate(e, n, r, i) {
        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            s = e[n.ssrc];
        return null == s && ((s = new u(r, i, a)), (e[n.ssrc] = s)), s;
    }
    getInboundBytesRecevierCalculator(e) {
        return o.getCalculatorOrCreate(this.inboundVideoBitrate, e, 'bytesReceived', 'timestamp', 3);
    }
    getInboundFrameDecodeRateCalculator(e) {
        return o.getCalculatorOrCreate(this.inboundDecodeFps, e, 'framesDecoded', 'timestamp', 5);
    }
    getOutboundBytesSentCalculator(e) {
        return o.getCalculatorOrCreate(this.outboundVideoBitrate, e, 'bytesSent', 'timestamp', 3);
    }
    getOutboundEncodeRateCalculator(e) {
        return o.getCalculatorOrCreate(this.outboundEncodeFps, e, 'framesEncoded', 'timestamp', 5);
    }
    constructor() {
        s(this, 'inboundVideoBitrate', {}), s(this, 'inboundDecodeFps', {}), s(this, 'outboundVideoBitrate', {}), s(this, 'outboundEncodeFps', {});
    }
}
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.MILLISECONDS_FROM_SECONDS = 1)] = 'MILLISECONDS_FROM_SECONDS'), (e[(e.BYTES_TO_BITS = 2)] = 'BYTES_TO_BITS'), (e[(e.ROUND = 4)] = 'ROUND');
})(i || (i = {}));
let l = {
    0: { multiplier: 1 },
    1: {
        postfix: '_in_ms',
        multiplier: 1000
    },
    2: {
        bitrate: !0,
        postfix: '',
        multiplier: 8
    }
};
class u {
    calculate(e) {
        let n = this.previous;
        if (((this.previous = e), null == n)) return;
        let r = e.timestamp - n.timestamp;
        if (r <= 0 || 'number' != typeof r) return;
        let i = n[this.accumulativeMetricKey],
            a = e[this.accumulativeMetricKey];
        if ('number' != typeof i || 'number' != typeof a) return;
        let s = n[this.samplesMetricKey],
            o = e[this.samplesMetricKey];
        if ('number' != typeof s || 'number' != typeof o) return;
        let l = ((a - i) / (o - s)) * this.multiplier;
        return this.round ? Math.round(l) : l;
    }
    constructor(e, n, r = 0) {
        for (let u in (s(this, 'accumulativeMetricKey', void 0), s(this, 'samplesMetricKey', void 0), s(this, 'previous', void 0), s(this, 'multiplier', void 0), s(this, 'round', void 0), (this.accumulativeMetricKey = e), (this.samplesMetricKey = n), (this.multiplier = 1), (this.round = !1), i)) {
            var a, o;
            let e = Number(u);
            if (!isNaN(e) && (r & e) != 0 && u in l) this.multiplier *= null !== (o = null === (a = l[u]) || void 0 === a ? void 0 : a.multiplier) && void 0 !== o ? o : 1;
        }
        this.round = (4 & r) != 0;
    }
}
