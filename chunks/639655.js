n.d(t, {
    I: function () {
        return O;
    }
});
var r = n(653041);
var i = n(411104);
var a = n(518263);
var o = n(970173);
var s = n(520712);
var l = n(268111);
var u = n(941497);
var c = n(32026);
var d = n(480839);
var _ = n(744285);
var E = n(492257);
var f = n(873817);
var h = n(47120);
var p = n(710845),
    m = n(374023),
    I = n(988348);
function T(e, t, n) {
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
let { NativeModules: g } = {},
    S = 65535,
    A = [];
class v {
    static canUse() {
        return !1;
    }
    bindWebSocket(e) {}
    feed(e) {}
    dataReady(e) {
        this._onDataReady = e;
    }
    constructor(e) {
        T(this, '_onDataReady', void 0), T(this, '_gatewayEncoding', void 0), (this._onDataReady = null), (this._gatewayEncoding = e);
    }
}
A.push(
    class extends v {
        static canUse() {
            return (0, I.N)();
        }
        getAlgorithm() {
            return 'zstd-stream';
        }
        usesLegacyCompression() {
            return !1;
        }
        feed(e) {
            let t;
            if (null == this._stream) throw Error('Trying to decompress with zstd but did not initialize with it');
            if (!(e instanceof ArrayBuffer)) throw Error('Expected array buffer, but got ' + typeof e);
            (t = this._stream.decompress(e)), null != this._decoder && (t = this._decoder.decode(t)), null != this._onDataReady && this._onDataReady(t);
        }
        close() {}
        constructor(e) {
            super(e), T(this, '_decoder', null), T(this, '_stream', void 0), this._gatewayEncoding.wantsString() ? (this._decoder = new TextDecoder('utf-8')) : (this._decoder = null), (this._stream = (0, I.G)());
        }
    }
),
    A.push(
        class extends v {
            static canUse() {
                return void 0 !== window.Uint8Array;
            }
            getAlgorithm() {
                return 'zlib-stream';
            }
            usesLegacyCompression() {
                return !1;
            }
            feed(e) {
                if (null == this._inflate) throw Error('Trying to feed to closed compression adapter');
                if (null === this._onDataReady) throw Error('Cannot feed unless a data ready callback is registered.');
                if (!(e instanceof ArrayBuffer)) throw Error('Expected array buffer, but got ' + typeof e);
                let t = new DataView(e),
                    n = t.byteLength >= 4 && t.getUint32(t.byteLength - 4, !1) === S;
                this._inflate.push(e, !!n && this._pako.Z_SYNC_FLUSH);
            }
            close() {
                null != this._inflate && ((this._inflate.onEnd = null), (this._inflate.chunks = [])), (this._inflate = null);
            }
            handleFlushEnd(e) {
                let t;
                let n = this._pako,
                    r = this._inflate;
                if (null == r) {
                    new p.Z('GatewayCompressionHandler').error('flush end happened on closed compression adapter');
                    return;
                }
                if (e !== n.Z_OK) throw Error('zlib error, '.concat(e, ', ').concat(r.strm.msg));
                let { chunks: i } = r,
                    a = i.length;
                if (this._gatewayEncoding.wantsString()) t = a > 1 ? i.join('') : i[0];
                else if (a > 1) {
                    let e = 0;
                    for (let t = 0; t < a; t++) e += i[t].length;
                    let n = new Uint8Array(e),
                        r = 0;
                    for (let e = 0; e < a; e++) {
                        let t = i[e];
                        n.set(t, r), (r += t.length);
                    }
                    t = n;
                } else t = i[0];
                (i.length = 0), null != this._onDataReady && this._onDataReady(t);
            }
            constructor(e) {
                super(e),
                    T(this, '_inflate', void 0),
                    T(this, '_pako', n(457854)),
                    T(this, '_usesZstd', !1),
                    T(this, '_zstdDecoder', null),
                    T(this, '_zstdStream', null),
                    (this._inflate = new this._pako.Inflate({
                        chunkSize: 65536,
                        to: this._gatewayEncoding.wantsString() ? 'string' : ''
                    })),
                    (this._inflate.onEnd = this.handleFlushEnd.bind(this));
            }
        }
    ),
    A.push(
        class extends v {
            static canUse() {
                return !0;
            }
            getAlgorithm() {
                return null;
            }
            usesLegacyCompression() {
                return !0;
            }
            feed(e) {
                let t = this._pako;
                if ((e instanceof ArrayBuffer && this._gatewayEncoding.wantsString() && (e = t.inflate(e, { to: 'string' })), null == this._onDataReady)) throw Error('Cannot feed unless a data ready callback is registered.');
                this._onDataReady(e);
            }
            close() {}
            constructor(...e) {
                super(...e), T(this, '_pako', n(457854));
            }
        }
    ),
    A.push(
        class extends v {
            static canUse() {
                return !1;
            }
            bindWebSocket(e) {
                this.close(), (this._socketId = e._socketId), (0, I.N)() ? g.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0) : g.DCDCompressionManager.enableZlibStreamSupport(this._socketId);
            }
            getAlgorithm() {
                return (0, I.N)() ? 'zstd-stream' : 'zlib-stream';
            }
            usesLegacyCompression() {
                return !1;
            }
            feed(e) {
                if (null == this._onDataReady) throw Error('Cannot feed unless a data ready callback is registered.');
                null !== e && this._onDataReady(e);
            }
            close() {
                let e = this._socketId;
                (this._socketId = null), null !== e && g.DCDCompressionManager.disableZlibStreamSupport(e);
            }
            constructor(e) {
                super(e), T(this, '_socketId', void 0), (this._socketId = null);
            }
        }
    );
class N extends v {
    static canUse() {
        return !0;
    }
    getAlgorithm() {
        return null;
    }
    usesLegacyCompression() {
        return !1;
    }
    feed(e) {
        if (null == this._onDataReady) throw Error('Cannot feed unless a data ready callback is registered.');
        this._onDataReady(e);
    }
    close() {}
}
function O(e) {
    if (m.s.isDiscordGatewayPlaintextSet()) return new N(e);
    for (var t of A) if (t.canUse()) return new t(e);
    return new N(e);
}
A.push(N);
