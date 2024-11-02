t.d(n, {
    W: function () {
        return c;
    }
}),
    t(411104);
var o = t(192379),
    i = t(250683),
    r = t(253135);
function c(e) {
    let { fingerprintBase64: n, chunkSize: t, desiredLength: c } = e,
        l = o.useMemo(() => {
            if (null == n || '' === n) return null;
            let e = i.toByteArray(n),
                o = (0, r.Dq)(e, c, t);
            if (null == o) return null;
            let l = RegExp('.{1,'.concat(t, '}'), 'g'),
                s = o.match(l);
            return null == s ? null : Array.from(s);
        }, [t, n, c]);
    if (null != n && '' !== n && null == l) throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
    return l;
}
