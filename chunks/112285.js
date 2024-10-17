var r,
    i,
    a,
    s,
    o = n(161581),
    l = n(197187),
    u = n(566885),
    c = n(354848),
    d = n(740362),
    _ = n(936940),
    E = n(620623),
    f = n(50754),
    h = n(722063),
    p = n(202934),
    I = n(531460),
    m = n(391673),
    T = o.setImmediate,
    S = o.clearImmediate,
    g = o.process,
    A = o.Dispatch,
    N = o.Function,
    R = o.MessageChannel,
    O = o.String,
    v = 0,
    C = {},
    L = 'onreadystatechange';
_(function () {
    r = o.location;
});
var D = function (e) {
        if (d(C, e)) {
            var t = C[e];
            delete C[e], t();
        }
    },
    y = function (e) {
        return function () {
            D(e);
        };
    },
    b = function (e) {
        D(e.data);
    },
    M = function (e) {
        o.postMessage(O(e), r.protocol + '//' + r.host);
    };
(!T || !S) &&
    ((T = function (e) {
        p(arguments.length, 1);
        var t = c(e) ? e : N(e),
            n = f(arguments, 1);
        return (
            (C[++v] = function () {
                l(t, void 0, n);
            }),
            i(v),
            v
        );
    }),
    (S = function (e) {
        delete C[e];
    }),
    m
        ? (i = function (e) {
              g.nextTick(y(e));
          })
        : A && A.now
          ? (i = function (e) {
                A.now(y(e));
            })
          : R && !I
            ? ((s = (a = new R()).port2), (a.port1.onmessage = b), (i = u(s.postMessage, s)))
            : o.addEventListener && c(o.postMessage) && !o.importScripts && r && 'file:' !== r.protocol && !_(M)
              ? ((i = M), o.addEventListener('message', b, !1))
              : (i =
                    L in h('script')
                        ? function (e) {
                              E.appendChild(h('script'))[L] = function () {
                                  E.removeChild(this), D(e);
                              };
                          }
                        : function (e) {
                              setTimeout(y(e), 0);
                          })),
    (e.exports = {
        set: T,
        clear: S
    });
