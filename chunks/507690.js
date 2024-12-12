function a(e) {
    let t;
    let r = e[0],
        a = 1;
    for (; a < e.length; ) {
        let n = e[a],
            _ = e[a + 1];
        if (((a += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == r)) return;
        'access' === n || 'optionalAccess' === n ? ((t = r), (r = _(r))) : ('call' === n || 'optionalCall' === n) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
r.d(t, {
    x: function () {
        return a;
    }
});
