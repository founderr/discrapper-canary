t.d(n, {
    x: function () {
        return r;
    }
}),
    t(411104),
    t(518263),
    t(970173),
    t(520712),
    t(268111),
    t(941497),
    t(32026),
    t(480839),
    t(744285),
    t(492257),
    t(873817);
async function r(e, n, t) {
    if (0 !== e) throw Error('unsupported fingerprint format version');
    if (0 === n.byteLength) throw Error('zero-length key');
    if (0 === t.length) throw Error('zero-length user ID');
    let r = BigInt(t);
    if (r < 0n || r >= 2n ** 64n) throw Error('user ID out of range');
    let i = new Uint8Array(),
        u = new Uint8Array(2 + n.byteLength + 8);
    u.set(n, 2);
    let a = new DataView(u.buffer);
    a.setUint16(0, e), a.setBigUint64(2 + n.byteLength, r);
    for (let e = 0; e < 5200; e++) {
        let e = u.byteLength + n.byteLength;
        i.byteLength !== e && (i = new Uint8Array(e)), i.set(u, 0), i.set(n, u.byteLength), (u = new Uint8Array(await window.crypto.subtle.digest('SHA-512', i)));
    }
    return u;
}
