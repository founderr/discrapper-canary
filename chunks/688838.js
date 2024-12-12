r.d(t, {
    $P: function () {
        return s;
    },
    Fi: function () {
        return a;
    },
    Fr: function () {
        return l;
    },
    Sq: function () {
        return E;
    },
    pE: function () {
        return o;
    }
});
let a = '?',
    n = /\(error: (.*)\)/,
    _ = /captureMessage|captureException/;
function o(...e) {
    let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
    return (e, r = 0, o = 0) => {
        let E = [],
            c = e.split('\n');
        for (let e = r; e < c.length; e++) {
            let r = c[e];
            if (r.length > 1024) continue;
            let a = n.test(r) ? r.replace(n, '$1') : r;
            if (!a.match(/\S*Error: /)) {
                for (let e of t) {
                    let t = e(a);
                    if (t) {
                        E.push(t);
                        break;
                    }
                }
                if (E.length >= 50 + o) break;
            }
        }
        return (function (e) {
            if (!e.length) return [];
            let t = Array.from(e);
            return (
                /sentryWrapped/.test(i(t).function || '') && t.pop(),
                t.reverse(),
                _.test(i(t).function || '') && (t.pop(), _.test(i(t).function || '') && t.pop()),
                t.slice(0, 50).map((e) => ({
                    ...e,
                    filename: e.filename || i(t).filename,
                    function: e.function || a
                }))
            );
        })(E.slice(o));
    };
}
function E(e) {
    return Array.isArray(e) ? o(...e) : e;
}
function i(e) {
    return e[e.length - 1] || {};
}
let c = '<anonymous>';
function s(e) {
    try {
        if (!e || 'function' != typeof e) return c;
        return e.name || c;
    } catch (e) {
        return c;
    }
}
function l(e) {
    let t = e.exception;
    if (t) {
        let e = [];
        try {
            return (
                t.values.forEach((t) => {
                    t.stacktrace.frames && e.push(...t.stacktrace.frames);
                }),
                e
            );
        } catch (e) {}
    }
}
