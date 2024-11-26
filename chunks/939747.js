r.d(t, {
    Bg: function () {
        return s;
    },
    Ic: function () {
        return n;
    },
    M: function () {
        return _;
    },
    OC: function () {
        return E;
    },
    s3: function () {
        return i;
    },
    uv: function () {
        return o;
    }
});
var a = r(370336);
function n(e, t, r, n) {
    let _ = Object.entries((0, a.Jr)(n)).sort((e, t) => e[0].localeCompare(t[0]));
    return `${e}${t}${r}${_}`;
}
function _(e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) (t = (t << 5) - t + e.charCodeAt(r)), (t &= t);
    return t >>> 0;
}
function o(e) {
    let t = '';
    for (let r of e) {
        let e = Object.entries(r.tags),
            a = e.length > 0 ? `|#${e.map(([e, t]) => `${e}:${t}`).join(',')}` : '';
        t += `${r.name}@${r.unit}:${r.metric}|${r.metricType}${a}|T${r.timestamp}
`;
    }
    return t;
}
function E(e) {
    return e.replace(/[^\w]+/gi, '_');
}
function i(e) {
    return e.replace(/[^\w\-.]+/gi, '_');
}
let c = [
    ['\n', '\\n'],
    ['\r', '\\r'],
    ['\t', '\\t'],
    ['\\', '\\\\'],
    ['|', '\\u{7c}'],
    [',', '\\u{2c}']
];
function s(e) {
    let t = {};
    for (let r in e)
        if (Object.prototype.hasOwnProperty.call(e, r))
            t[r.replace(/[^\w\-./]+/gi, '')] = [...String(e[r])].reduce(
                (e, t) =>
                    e +
                    (function (e) {
                        for (let [t, r] of c) if (e === t) return r;
                        return e;
                    })(t),
                ''
            );
    return t;
}
