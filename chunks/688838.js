r.d(t, {
    $P: function () {
        return s;
    },
    Fi: function () {
        return n;
    },
    Fr: function () {
        return I;
    },
    Sq: function () {
        return i;
    },
    pE: function () {
        return o;
    }
});
let n = '?',
    a = /\(error: (.*)\)/,
    _ = /captureMessage|captureException/;
function o(...e) {
    let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
    return (e, r = 0, o = 0) => {
        let i = [],
            c = e.split('\n');
        for (let e = r; e < c.length; e++) {
            let r = c[e];
            if (r.length > 1024) continue;
            let n = a.test(r) ? r.replace(a, '$1') : r;
            if (!n.match(/\S*Error: /)) {
                for (let e of t) {
                    let t = e(n);
                    if (t) {
                        i.push(t);
                        break;
                    }
                }
                if (i.length >= 50 + o) break;
            }
        }
        return (function (e) {
            if (!e.length) return [];
            let t = Array.from(e);
            return (
                /sentryWrapped/.test(E(t).function || '') && t.pop(),
                t.reverse(),
                _.test(E(t).function || '') && (t.pop(), _.test(E(t).function || '') && t.pop()),
                t.slice(0, 50).map((e) => ({
                    ...e,
                    filename: e.filename || E(t).filename,
                    function: e.function || n
                }))
            );
        })(i.slice(o));
    };
}
function i(e) {
    return Array.isArray(e) ? o(...e) : e;
}
function E(e) {
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
function I(e) {
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
