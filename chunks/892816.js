n.d(t, {
    Z: function () {
        return i;
    }
});
let r = {
    'SHA-1': {
        outputLength: 20,
        blockSize: 64
    },
    'SHA-256': {
        outputLength: 32,
        blockSize: 64
    },
    'SHA-384': {
        outputLength: 48,
        blockSize: 128
    },
    'SHA-512': {
        outputLength: 64,
        blockSize: 128
    }
};
function i(e, t, n, i, o = 'SHA-256') {
    return new Promise((s, l) => {
        o in r || l(RangeError(`Valid hash algorithm values are any of ${Object.keys(r).toString()}`)),
            'string' == typeof e ? (e = new TextEncoder().encode(e)) : e instanceof ArrayBuffer ? (e = new Uint8Array(e)) : ArrayBuffer.isView(e) || l(RangeError('P should be string, ArrayBuffer, TypedArray, DataView')),
            'string' == typeof t ? (t = new TextEncoder().encode(t)) : t instanceof ArrayBuffer ? (t = new Uint8Array(t)) : ArrayBuffer.isView(t) ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) : l(RangeError('S should be string, ArrayBuffer, TypedArray, DataView')),
            crypto.subtle.importKey('raw', e, 'PBKDF2', !1, ['deriveBits']).then(
                (d) => {
                    let u = {
                        name: 'PBKDF2',
                        hash: o,
                        salt: t,
                        iterations: n
                    };
                    crypto.subtle.deriveBits(u, d, 8 * i).then(
                        (e) => s(e),
                        (d) => {
                            (async function (e, t, n, i, o) {
                                if (!(o in r)) throw RangeError(`Valid hash algorithm values are any of ${Object.keys(r).toString()}`);
                                if (!Number.isInteger(n) || n <= 0) throw RangeError('c must be a positive integer');
                                let s = r[o].outputLength;
                                if (!Number.isInteger(i) || i <= 0 || i >= (4294967296 - 1) * s) throw RangeError('dkLen must be a positive integer < (2 ** 32 - 1) * hLen');
                                let l = Math.ceil(i / s),
                                    d = i - (l - 1) * s,
                                    u = Array(l);
                                0 === e.byteLength && (e = new Uint8Array(r[o].blockSize));
                                let c = await crypto.subtle.importKey(
                                        'raw',
                                        e,
                                        {
                                            name: 'HMAC',
                                            hash: { name: o }
                                        },
                                        !0,
                                        ['sign']
                                    ),
                                    I = async function (e, t) {
                                        return new Uint8Array(await crypto.subtle.sign('HMAC', e, t));
                                    };
                                for (let e = 0; e < l; e++) u[e] = await E(c, t, n, e + 1);
                                async function E(e, t, n, r) {
                                    let i = await I(
                                            e,
                                            a(
                                                t,
                                                (function (e) {
                                                    let t = new ArrayBuffer(4);
                                                    return new DataView(t).setUint32(0, e, !1), new Uint8Array(t);
                                                })(r)
                                            )
                                        ),
                                        o = i;
                                    for (let t = 1; t < n; t++)
                                        (function (e, t) {
                                            for (let n = 0; n < e.length; n++) e[n] ^= t[n];
                                        })(i, (o = await I(e, o)));
                                    return i;
                                }
                                return (u[l - 1] = u[l - 1].slice(0, d)), a(...u).buffer;
                            })(e, t, n, i, o).then(
                                (e) => s(e),
                                (e) => l(e)
                            );
                        }
                    );
                },
                (e) => l(e)
            );
    });
}
function a(...e) {
    let t = e.reduce((e, t) => e + t.length, 0);
    if (0 === e.length) throw RangeError('Cannot concat no arrays');
    let n = new Uint8Array(t),
        r = 0;
    for (let t of e) n.set(t, r), (r += t.length);
    return n;
}
