function a(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let r = t[6] || '',
        a = t[8] || '';
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: r,
        hash: a,
        relative: t[5] + r + a
    };
}
function n(e) {
    return e.split(/[?#]/, 1)[0];
}
r.d(t, {
    en: function () {
        return a;
    },
    rt: function () {
        return n;
    }
});
