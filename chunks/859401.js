n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(392711),
    o = n.n(a);
function s(e, t, n) {
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
let l = [];
class u {
    static create() {
        let e = new u();
        return l.push(e), e.record;
    }
    getTotalBytes() {
        return o().sum(Object.values(this.bytes));
    }
    constructor() {
        s(this, 'bytes', {}),
            s(this, 'record', (e) => {
                if (null != e) {
                    for (let t in e.rtp.inbound)
                        for (let n of e.rtp.inbound[t]) {
                            let e = 'inbound-'.concat(t, '-').concat(n.type);
                            !(e in this.bytes) && (this.bytes[e] = 0), (this.bytes[e] = n.bytesReceived);
                        }
                    for (let t of e.rtp.outbound) {
                        let e = 'outbound-'.concat(t.type);
                        !(e in this.bytes) && (this.bytes[e] = 0), (this.bytes[e] = t.bytesSent);
                    }
                }
            });
    }
}
