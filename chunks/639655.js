r.d(n, {
    I: function () {
        return R;
    }
});
var i = r(653041);
var a = r(411104);
var s = r(518263);
var o = r(970173);
var l = r(520712);
var u = r(268111);
var c = r(941497);
var d = r(32026);
var f = r(480839);
var _ = r(744285);
var h = r(492257);
var p = r(873817);
var m = r(47120);
var g = r(710845),
    E = r(358085),
    v = r(374023),
    I = r(988348);
function T(e, n, r) {
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
let { NativeModules: b } = {},
    y = {},
    S = 65535,
    A = [];
class N {
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
    class extends N {
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
            let n;
            if (null == this._stream) throw Error('Trying to decompress with zstd but did not initialize with it');
            if (!(e instanceof ArrayBuffer)) throw Error('Expected array buffer, but got ' + typeof e);
            (n = this._stream.decompress(e)), null != this._decoder && (n = this._decoder.decode(n)), null != this._onDataReady && this._onDataReady(n);
        }
        close() {}
        constructor(e) {
            super(e), T(this, '_decoder', null), T(this, '_stream', void 0), this._gatewayEncoding.wantsString() ? (this._decoder = new TextDecoder('utf-8')) : (this._decoder = null), (this._stream = (0, I.G)());
        }
    }
),
    A.push(
        class extends N {
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
                let n = new DataView(e),
                    r = n.byteLength >= 4 && n.getUint32(n.byteLength - 4, !1) === S;
                this._inflate.push(e, !!r && this._pako.Z_SYNC_FLUSH);
            }
            close() {
                null != this._inflate && ((this._inflate.onEnd = null), (this._inflate.chunks = [])), (this._inflate = null);
            }
            handleFlushEnd(e) {
                let n;
                let r = this._pako,
                    i = this._inflate;
                if (null == i) {
                    new g.Z('GatewayCompressionHandler').error('flush end happened on closed compression adapter');
                    return;
                }
                if (e !== r.Z_OK) throw Error('zlib error, '.concat(e, ', ').concat(i.strm.msg));
                let { chunks: a } = i,
                    s = a.length;
                if (this._gatewayEncoding.wantsString()) n = s > 1 ? a.join('') : a[0];
                else if (s > 1) {
                    let e = 0;
                    for (let n = 0; n < s; n++) e += a[n].length;
                    let r = new Uint8Array(e),
                        i = 0;
                    for (let e = 0; e < s; e++) {
                        let n = a[e];
                        r.set(n, i), (i += n.length);
                    }
                    n = r;
                } else n = a[0];
                (a.length = 0), null != this._onDataReady && this._onDataReady(n);
            }
            constructor(e) {
                super(e),
                    T(this, '_inflate', void 0),
                    T(this, '_pako', r(457854)),
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
        class extends N {
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
                let n = this._pako;
                if ((e instanceof ArrayBuffer && this._gatewayEncoding.wantsString() && (e = n.inflate(e, { to: 'string' })), null == this._onDataReady)) throw Error('Cannot feed unless a data ready callback is registered.');
                this._onDataReady(e);
            }
            close() {}
            constructor(...e) {
                super(...e), T(this, '_pako', r(457854));
            }
        }
    ),
    A.push(
        class extends N {
            static canUse() {
                return !1;
            }
            bindWebSocket(e) {
                this.close(), (this._socketId = e._socketId), (0, I.N)() ? ((0, E.isAndroid)() ? null == y || y.enableZstdStreamSupport(this._socketId) : b.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0)) : (0, E.isAndroid)() ? null == y || y.enableZlibStreamSupport(this._socketId) : b.DCDCompressionManager.enableZlibStreamSupport(this._socketId);
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
                (this._socketId = null), null !== e && ((0, E.isAndroid)() ? null == y || y.disableZlibStreamSupport(e) : b.DCDCompressionManager.disableZlibStreamSupport(e));
            }
            constructor(e) {
                super(e), T(this, '_socketId', void 0), (this._socketId = null);
            }
        }
    );
class C extends N {
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
function R(e) {
    if (v.s.isDiscordGatewayPlaintextSet()) return new C(e);
    for (var n of A) if (n.canUse()) return new n(e);
    return new C(e);
}
A.push(C);
