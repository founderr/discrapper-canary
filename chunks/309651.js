n.d(t, {
    x: function () {
        return r;
    }
}),
    n(411104),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817);
async function r(e, t, n) {
    if (0 !== e) throw Error('unsupported fingerprint format version');
    if (0 === t.byteLength) throw Error('zero-length key');
    if (0 === n.length) throw Error('zero-length user ID');
    let r = BigInt(n);
    if (r < 0n || r >= 2n ** 64n) throw Error('user ID out of range');
    let E = new Uint8Array(2 + t.byteLength + 8);
    E.set(t, 2);
    let i = new DataView(E.buffer);
    return i.setUint16(0, e), i.setBigUint64(2 + t.byteLength, r), E;
}
