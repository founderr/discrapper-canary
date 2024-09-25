function r(e, t) {
    var n;
    let r = null !== (n = decodeURIComponent(t).split('/').pop()) && void 0 !== n ? n : 'temp.gif';
    return ''.concat(e, '-').concat(r);
}
n.d(t, {
    Yk: function () {
        return r;
    }
}),
    n(489887);
function i(e) {
    let t = new FileReader();
    return new Promise((n, r) => {
        (t.onload = () => {
            n(t.result.split(',').pop());
        }),
            (t.onerror = r),
            t.readAsDataURL(e);
    });
}
