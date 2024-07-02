n.d(t, {
    E: function () {
        return a;
    }
});
var i = n(470079), l = n(250683), r = n(253135);
function a(e) {
    let {
        codeBase64: t,
        chunkSize: n,
        desiredLength: a
    } = e;
    return i.useMemo(() => {
        if (null == t)
            return null;
        let e = l.toByteArray(t), i = (0, r.D)(e, a, n);
        if (null == i)
            return null;
        let s = RegExp('.{1,'.concat(n, '}'), 'g'), o = i.match(s);
        return null == o ? null : Array.from(o);
    }, [
        n,
        t,
        a
    ]);
}
