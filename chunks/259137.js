n.d(t, {
    f3: function () {
        return l;
    }
});
var r = n(892816);
let i = function (e) {
        function t(e, t) {
            return (e << t) | (e >>> (32 - t));
        }
        let n = e.slice(0);
        for (let e = 8; e > 0; e -= 2) (n[4] ^= t(n[0] + n[12], 7)), (n[8] ^= t(n[4] + n[0], 9)), (n[12] ^= t(n[8] + n[4], 13)), (n[0] ^= t(n[12] + n[8], 18)), (n[9] ^= t(n[5] + n[1], 7)), (n[13] ^= t(n[9] + n[5], 9)), (n[1] ^= t(n[13] + n[9], 13)), (n[5] ^= t(n[1] + n[13], 18)), (n[14] ^= t(n[10] + n[6], 7)), (n[2] ^= t(n[14] + n[10], 9)), (n[6] ^= t(n[2] + n[14], 13)), (n[10] ^= t(n[6] + n[2], 18)), (n[3] ^= t(n[15] + n[11], 7)), (n[7] ^= t(n[3] + n[15], 9)), (n[11] ^= t(n[7] + n[3], 13)), (n[15] ^= t(n[11] + n[7], 18)), (n[1] ^= t(n[0] + n[3], 7)), (n[2] ^= t(n[1] + n[0], 9)), (n[3] ^= t(n[2] + n[1], 13)), (n[0] ^= t(n[3] + n[2], 18)), (n[6] ^= t(n[5] + n[4], 7)), (n[7] ^= t(n[6] + n[5], 9)), (n[4] ^= t(n[7] + n[6], 13)), (n[5] ^= t(n[4] + n[7], 18)), (n[11] ^= t(n[10] + n[9], 7)), (n[8] ^= t(n[11] + n[10], 9)), (n[9] ^= t(n[8] + n[11], 13)), (n[10] ^= t(n[9] + n[8], 18)), (n[12] ^= t(n[15] + n[14], 7)), (n[13] ^= t(n[12] + n[15], 9)), (n[14] ^= t(n[13] + n[12], 13)), (n[15] ^= t(n[14] + n[13], 18));
        for (let t = 0; t < 16; t++) e[t] = n[t] + e[t];
    },
    a = function (e, t) {
        for (let n = 0; n < e.length; n++) e[n] ^= t[n];
    },
    o = function (e) {
        let t = e.byteLength / 128,
            n = 16 * (2 * t - 1),
            r = e.slice(n, n + 16),
            o = new Uint32Array(e.length / 2),
            s = !0;
        for (let n = 0; n < 2 * t; n++) {
            let t = 16 * n;
            a(r, e.subarray(t, t + 16)), i(r);
            let l = 16 * (n >> 1);
            if (s) for (let t = 0; t < 16; t++) e[l + t] = r[t];
            else for (let e = 0; e < 16; e++) o[l + e] = r[e];
            s = !s;
        }
        let l = 16 * t;
        for (let t = 0; t < l; t++) e[l + t] = o[t];
    },
    s = function (e, t) {
        let n = e.byteLength / 128,
            r = Array(t);
        for (let n = 0; n < t; n++) (r[n] = e.slice(0)), o(e);
        for (let i = 0; i < t; i++) {
            let i = new DataView(e.buffer, 64 * (2 * n - 1), 64).getUint32(0, !0) % t;
            a(e, r[i]), o(e);
        }
    },
    l = async function (e, t, n, i) {
        if ('string' == typeof e) e = new TextEncoder().encode(e);
        else if (e instanceof ArrayBuffer) e = new Uint8Array(e);
        else if (!ArrayBuffer.isView(e)) throw RangeError('P should be string, ArrayBuffer, TypedArray, DataView');
        if ('string' == typeof t) t = new TextEncoder().encode(t);
        else if (t instanceof ArrayBuffer) t = new Uint8Array(t);
        else if (!ArrayBuffer.isView(t)) throw RangeError('S should be string, ArrayBuffer, TypedArray, DataView');
        if (!Number.isInteger(n) || n <= 0 || n > 137438953440) throw RangeError('dkLen is the intended output length in octets of the derived key; a positive integer less than or equal to (2^32 - 1) * hLen where hLen is 32');
        let a = void 0 !== i && void 0 !== i.N ? i.N : 131072,
            o = void 0 !== i && void 0 !== i.r ? i.r : 8,
            l = void 0 !== i && void 0 !== i.p ? i.p : 1;
        if (!Number.isInteger(a) || a <= 0 || 0 != (a & (a - 1))) throw RangeError('N must be a power of 2');
        if (!Number.isInteger(o) || o <= 0 || !Number.isInteger(l) || l <= 0 || l * o > 1073741823.75) throw RangeError('Parallelization parameter p and blocksize parameter r must be positive integers satisfying p \u2264 (2^32\u2212 1) * hLen / MFLen where hLen is 32 and MFlen is 128 * r.');
        let u = new Uint32Array(await (0, r.Z)(e, t, 1, 128 * l * o));
        for (let e = 0; e < l; e++) {
            let t = 32 * o,
                n = e * t,
                r = u.slice(n, n + t);
            s(r, a);
            for (let e = 0; e < 32 * o; e++) u[n + e] = r[e];
        }
        return await (0, r.Z)(e, u, 1, n);
    };
