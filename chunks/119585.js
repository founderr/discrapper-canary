function i(e) {
    let n = !1,
        r = [];
    for (let i = 0; i < e.length; i++) {
        let a = e.charAt(i);
        '_' == a ? (n = !0) : /\d/.test(a) ? (r.push(a), (n = !0)) : n ? (r.push(a.toUpperCase()), (n = !1)) : 0 == i ? r.push(a.toLowerCase()) : r.push(a);
    }
    return r.join('');
}
r.d(n, {
    c: function () {
        return i;
    }
});
