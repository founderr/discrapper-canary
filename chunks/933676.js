var r = n(581031),
    i = n(936940),
    a = n(354848),
    o = n(974971),
    s = n(545576),
    l = n(943329),
    u = function () {},
    c = [],
    d = s('Reflect', 'construct'),
    _ = /^\s*(?:class|function)\b/,
    E = r(_.exec),
    f = !_.exec(u),
    h = function (e) {
        if (!a(e)) return !1;
        try {
            return d(u, c, e), !0;
        } catch (e) {
            return !1;
        }
    },
    p = function (e) {
        if (!a(e)) return !1;
        switch (o(e)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return !1;
        }
        try {
            return f || !!E(_, l(e));
        } catch (e) {
            return !0;
        }
    };
(p.sham = !0),
    (e.exports =
        !d ||
        i(function () {
            var e;
            return (
                h(h.call) ||
                !h(Object) ||
                !h(function () {
                    e = !0;
                }) ||
                e
            );
        })
            ? p
            : h);
