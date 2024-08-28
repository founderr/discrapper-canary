r.d(t, {
    Cf: function () {
        return _;
    },
    LD: function () {
        return i;
    },
    RU: function () {
        return o;
    },
    kg: function () {
        return E;
    }
});
var n = r(309544),
    a = r(899517);
let o = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'],
    i = {};
function _(e) {
    if (!('console' in a.n)) return e();
    let t = a.n.console,
        r = {},
        n = Object.keys(i);
    n.forEach((e) => {
        let n = i[e];
        (r[e] = t[e]), (t[e] = n);
    });
    try {
        return e();
    } finally {
        n.forEach((e) => {
            t[e] = r[e];
        });
    }
}
let E = (function () {
    let e = !1,
        t = {
            enable: () => {
                e = !0;
            },
            disable: () => {
                e = !1;
            },
            isEnabled: () => e
        };
    return (
        n.X
            ? o.forEach((r) => {
                  t[r] = (...t) => {
                      e &&
                          _(() => {
                              a.n.console[r](`Sentry Logger [${r}]:`, ...t);
                          });
                  };
              })
            : o.forEach((e) => {
                  t[e] = () => void 0;
              }),
        t
    );
})();
