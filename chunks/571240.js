var r = n(96403),
    i = n(821819),
    a = n(735471),
    o = n(327192),
    s = n(294377),
    l = n(976396),
    u = function () {},
    c = [],
    d = s('Reflect', 'construct'),
    _ = /^\s*(?:class|function)\b/,
    E = r(_.exec),
    f = !_.test(u),
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
