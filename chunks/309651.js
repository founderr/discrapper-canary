e.d(n, {
    x: function () {
        return r;
    }
}),
    e(411104),
    e(518263),
    e(970173),
    e(520712),
    e(268111),
    e(941497),
    e(32026),
    e(480839),
    e(744285),
    e(492257),
    e(873817);
async function r(t, n, e) {
    if (0 !== t) throw Error('unsupported fingerprint format version');
    if (0 === n.byteLength) throw Error('zero-length key');
    if (0 === e.length) throw Error('zero-length user ID');
    let r = BigInt(e);
    if (r < 0n || r >= 2n ** 64n) throw Error('user ID out of range');
    let i = new Uint8Array(2 + n.byteLength + 8);
    i.set(n, 2);
    let u = new DataView(i.buffer);
    return u.setUint16(0, t), u.setBigUint64(2 + n.byteLength, r), i;
}
