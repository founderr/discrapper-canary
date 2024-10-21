t.d(n, {
    W: function () {
        return r;
    }
}),
    t(411104);
var o = t(192379),
    s = t(250683),
    c = t(253135);
function r(e) {
    let { fingerprintBase64: n, chunkSize: t, desiredLength: r } = e,
        i = o.useMemo(() => {
            if (null == n || '' === n) return null;
            let e = s.toByteArray(n),
                o = (0, c.Dq)(e, r, t);
            if (null == o) return null;
            let i = RegExp('.{1,'.concat(t, '}'), 'g'),
                l = o.match(i);
            return null == l ? null : Array.from(l);
        }, [t, n, r]);
    if (null != n && '' !== n && null == i) throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
    return i;
}
