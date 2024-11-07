n.d(t, {
    DT: function () {
        return i;
    },
    cd: function () {
        return a;
    },
    pZ: function () {
        return r;
    },
    sx: function () {
        return o;
    }
});
function r(e) {
    return -1 !== e.search(/^(data:)/);
}
function i(e, t) {
    return `data:${t};base64,${e}`;
}
async function a(e, t, n) {
    let r = await fetch(e, t);
    if (404 === r.status) throw Error(`Resource "${r.url}" not found`);
    let i = await r.blob();
    return new Promise((e, t) => {
        let a = new FileReader();
        (a.onerror = t),
            (a.onloadend = () => {
                try {
                    e(
                        n({
                            res: r,
                            result: a.result
                        })
                    );
                } catch (e) {
                    t(e);
                }
            }),
            a.readAsDataURL(i);
    });
}
let s = {};
async function o(e, t, n) {
    var r, o, l;
    let u, c;
    let d = ((r = e), (o = t), (l = n.includeQueryParams), (c = r.replace(/\?.*/, '')), l && (c = r), /ttf|otf|eot|woff2?/i.test(c) && (c = c.replace(/.*\//, '')), o ? `[${o}]${c}` : c);
    if (null != s[d]) return s[d];
    n.cacheBust && (e += (/\?/.test(e) ? '&' : '?') + new Date().getTime());
    try {
        let r = await a(e, n.fetchRequestInit, ({ res: e, result: n }) => (!t && (t = e.headers.get('Content-Type') || ''), n.split(/,/)[1]));
        u = i(r, t);
    } catch (r) {
        u = n.imagePlaceholder || '';
        let t = `Failed to fetch resource: ${e}`;
        r && (t = 'string' == typeof r ? r : r.message), t && console.warn(t);
    }
    return (s[d] = u), u;
}
