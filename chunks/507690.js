function n(e) {
    let t;
    let r = e[0],
        n = 1;
    for (; n < e.length; ) {
        let a = e[n],
            _ = e[n + 1];
        if (((n += 2), ('optionalAccess' === a || 'optionalCall' === a) && null == r)) return;
        'access' === a || 'optionalAccess' === a ? ((t = r), (r = _(r))) : ('call' === a || 'optionalCall' === a) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
r.d(t, {
    x: function () {
        return n;
    }
});
