r.d(n, {
    Kg: function () {
        return l;
    },
    Rp: function () {
        return u;
    },
    n: function () {
        return a;
    }
});
var i = r(192379);
function a(e, n) {
    var r = function (e) {
            return n && (0, i.isValidElement)(e) ? n(e) : e;
        },
        a = Object.create(null);
    return (
        e &&
            i.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                a[e.key] = r(e);
            }),
        a
    );
}
function s(e, n) {
    function r(r) {
        return r in n ? n[r] : e[r];
    }
    (e = e || {}), (n = n || {});
    var i,
        a = Object.create(null),
        s = [];
    for (var o in e) o in n ? s.length && ((a[o] = s), (s = [])) : s.push(o);
    var l = {};
    for (var u in n) {
        if (a[u])
            for (i = 0; i < a[u].length; i++) {
                var c = a[u][i];
                l[a[u][i]] = r(c);
            }
        l[u] = r(u);
    }
    for (i = 0; i < s.length; i++) l[s[i]] = r(s[i]);
    return l;
}
function o(e, n, r) {
    return null != r[n] ? r[n] : e.props[n];
}
function l(e, n) {
    return a(e.children, function (r) {
        return (0, i.cloneElement)(r, {
            onExited: n.bind(null, r),
            in: !0,
            appear: o(r, 'appear', e),
            enter: o(r, 'enter', e),
            exit: o(r, 'exit', e)
        });
    });
}
function u(e, n, r) {
    var l = a(e.children),
        u = s(n, l);
    return (
        Object.keys(u).forEach(function (a) {
            var s = u[a];
            if ((0, i.isValidElement)(s)) {
                var c = a in n,
                    d = a in l,
                    f = n[a],
                    _ = (0, i.isValidElement)(f) && !f.props.in;
                d && (!c || _)
                    ? (u[a] = (0, i.cloneElement)(s, {
                          onExited: r.bind(null, s),
                          in: !0,
                          exit: o(s, 'exit', e),
                          enter: o(s, 'enter', e)
                      }))
                    : d || !c || _
                      ? d &&
                        c &&
                        (0, i.isValidElement)(f) &&
                        (u[a] = (0, i.cloneElement)(s, {
                            onExited: r.bind(null, s),
                            in: f.props.in,
                            exit: o(s, 'exit', e),
                            enter: o(s, 'enter', e)
                        }))
                      : (u[a] = (0, i.cloneElement)(s, { in: !1 }));
            }
        }),
        u
    );
}
