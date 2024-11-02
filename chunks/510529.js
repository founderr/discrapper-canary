r.d(t, {
    U: function () {
        return o;
    },
    h: function () {
        return i;
    }
});
var n = r(370336),
    a = r(967752);
function _(e) {
    let t = e.protocol ? `${e.protocol}:` : '',
        r = e.port ? `:${e.port}` : '';
    return `${t}//${e.host}${r}${e.path ? `/${e.path}` : ''}/api/`;
}
function o(e, t, r) {
    var a, o, i;
    return (
        t ||
        `${((a = e), `${_(a)}${a.projectId}/envelope/`)}?${
            ((o = e),
            (i = r),
            (0, n._j)({
                sentry_key: o.publicKey,
                sentry_version: '7',
                ...(i && { sentry_client: `${i.name}/${i.version}` })
            }))
        }`
    );
}
function i(e, t) {
    let r = (0, a.vK)(e);
    if (!r) return '';
    let n = `${_(r)}embed/error-page/`,
        o = `dsn=${(0, a.RA)(r)}`;
    for (let e in t) {
        if ('dsn' !== e && 'onClose' !== e)
            if ('user' === e) {
                let e = t.user;
                if (!e) continue;
                e.name && (o += `&name=${encodeURIComponent(e.name)}`), e.email && (o += `&email=${encodeURIComponent(e.email)}`);
            } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
    }
    return `${n}?${o}`;
}
