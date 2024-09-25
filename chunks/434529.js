n.d(t, {
    KR: function () {
        return a;
    },
    Ox: function () {
        return l;
    },
    PY: function () {
        return u;
    },
    R: function () {
        return c;
    },
    jL: function () {
        return s;
    },
    o4: function () {
        return E;
    },
    ou: function () {
        return d;
    },
    uq: function () {
        return f;
    },
    vS: function () {
        return _;
    },
    w_: function () {
        return o;
    }
});
var r = n(411104);
function i(e) {
    return Math.max(Math.min(e, 1), 0);
}
function a(e, t) {
    let { top: n, bottom: r, left: a, right: o } = e;
    return {
        top: null != n ? Math.floor(i(n) * t.height) : null,
        left: null != a ? Math.floor(i(a) * t.width) : null,
        bottom: null != r ? Math.floor(i(r) * t.height) : null,
        right: null != o ? Math.floor(i(o) * t.width) : null
    };
}
function o(e, t) {
    let { width: n, height: r } = e;
    return {
        width: 'auto' === n ? n : Math.floor(i(n) * t.width),
        height: 'auto' === r ? r : Math.floor(i(r) * t.height)
    };
}
function s(e, t) {
    let { top: n, bottom: r, left: a, right: o } = e;
    return {
        top: null != n ? i(n / t.height) : null,
        left: null != a ? i(a / t.width) : null,
        bottom: null != r ? i(r / t.height) : null,
        right: null != o ? i(o / t.width) : null
    };
}
function l(e, t) {
    let { width: n, height: r } = e;
    return {
        width: 'auto' === n ? n : n / t.width,
        height: 'auto' === r ? r : r / t.height
    };
}
function u(e, t, n, r, i) {
    let { top: a, bottom: o, left: s, right: l } = e;
    if ((null == a && null == o ? ((a = 0), (o = n - i)) : null == a && null != o ? (a = n - (o + i)) : null != a && (o = n - (a + i)), null == s && null == l ? ((s = 0), (l = t - r)) : null == s && null != l ? (s = t - (l + r)) : null == l && null != s && (l = t - (s + r)), null == a || null == o || null == s || null == l)) throw Error('Logically this can never happen based on our if/else statements');
    return {
        top: a,
        left: s,
        bottom: o,
        right: l
    };
}
function c(e) {
    let { top: t, left: n, bottom: r, right: i } = e;
    return (
        0 === t || t <= r ? (r = null) : (t = null),
        0 === n || n <= i ? (i = null) : (n = null),
        {
            top: t,
            left: n,
            bottom: r,
            right: i
        }
    );
}
function d(e) {
    let { top: t, left: n, bottom: r, right: i } = e;
    return (
        r < 0 && ((t += r), (r = 0)),
        t < 0 && ((r += t), (t = 0)),
        i < 0 && ((n += i), (i = 0)),
        n < 0 && ((i += n), (n = 0)),
        {
            top: t,
            left: n,
            bottom: r,
            right: i
        }
    );
}
function _(e, t, n) {
    e = a(e, n);
    let { width: r, height: i } = o(t, n);
    return (r = 'string' == typeof r ? 0 : r), (i = 'string' == typeof i ? 0 : i), u(e, n.width, n.height, r, i);
}
function E(e, t, n) {
    let { top: r, left: i } = e,
        { x: a, y: o } =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      x: 0,
                      y: 0
                  },
        { width: _, height: E } = t;
    return [
        s(
            c(
                d(
                    u(
                        {
                            top: r + o,
                            left: i + a,
                            bottom: null,
                            right: null
                        },
                        n.width,
                        n.height,
                        'number' == typeof _ ? _ : 0,
                        'number' == typeof E ? E : 0
                    )
                )
            ),
            n
        ),
        l(t, n)
    ];
}
function f(e, t, n) {
    let { top: r, right: i } = e,
        { x: a, y: o } =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      x: 0,
                      y: 0
                  },
        { width: _, height: E } = t;
    return [
        s(
            c(
                d(
                    u(
                        {
                            top: r + o,
                            left: null,
                            bottom: null,
                            right: i - a
                        },
                        n.width,
                        n.height,
                        'number' == typeof _ ? _ : 0,
                        'number' == typeof E ? E : 0
                    )
                )
            ),
            n
        ),
        l(t, n)
    ];
}
