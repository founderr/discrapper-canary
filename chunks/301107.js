t.d(n, {
    W: function () {
        return c;
    }
}),
    t(411104);
var o = t(470079),
    r = t(250683),
    s = t(253135);
function c(e) {
    let { fingerprintBase64: n, chunkSize: t, desiredLength: c } = e,
        i = o.useMemo(() => {
            if (null == n || '' === n) return null;
            let e = r.toByteArray(n),
                o = (0, s.Dq)(e, c, t);
            if (null == o) return null;
            let i = RegExp('.{1,'.concat(t, '}'), 'g'),
                l = o.match(i);
            return null == l ? null : Array.from(l);
        }, [t, n, c]);
    if (null != n && '' !== n && null == i) throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
    return i;
}
