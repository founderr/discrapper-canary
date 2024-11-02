e.d(n, {
    D: function () {
        return r;
    }
}),
    e(411104);
function r(t, n, e) {
    if (t.byteLength < n) throw Error('data.byteLength must be greater than or equal to desiredLength');
    if (n % e != 0) throw Error('desiredLength must be a multiple of groupSize');
    if (e > 8) throw Error('groupSize must be less than or equal to '.concat(8));
    let r = BigInt(10 ** e),
        i = '';
    for (let u = 0; u < n; u += e) {
        let n = BigInt(0);
        for (let r = e; r > 0; --r) n = (n << 8n) | BigInt(t[u + (e - r)]);
        (n %= r), (i += n.toString().padStart(e, '0'));
    }
    return i;
}
