var r,
    i,
    a,
    o,
    s = n(161581),
    l = n(197187),
    u = n(566885),
    c = n(354848),
    d = n(740362),
    _ = n(936940),
    E = n(620623),
    f = n(50754),
    h = n(722063),
    p = n(202934),
    m = n(531460),
    I = n(391673),
    T = s.setImmediate,
    g = s.clearImmediate,
    S = s.process,
    A = s.Dispatch,
    v = s.Function,
    N = s.MessageChannel,
    O = s.String,
    R = 0,
    C = {},
    y = 'onreadystatechange';
_(function () {
    r = s.location;
});
var L = function (e) {
        if (d(C, e)) {
            var t = C[e];
            delete C[e], t();
        }
    },
    b = function (e) {
        return function () {
            L(e);
        };
    },
    D = function (e) {
        L(e.data);
    },
    M = function (e) {
        s.postMessage(O(e), r.protocol + '//' + r.host);
    };
(!T || !g) &&
    ((T = function (e) {
        p(arguments.length, 1);
        var t = c(e) ? e : v(e),
            n = f(arguments, 1);
        return (
            (C[++R] = function () {
                l(t, void 0, n);
            }),
            i(R),
            R
        );
    }),
    (g = function (e) {
        delete C[e];
    }),
    I
        ? (i = function (e) {
              S.nextTick(b(e));
          })
        : A && A.now
          ? (i = function (e) {
                A.now(b(e));
            })
          : N && !m
            ? ((o = (a = new N()).port2), (a.port1.onmessage = D), (i = u(o.postMessage, o)))
            : s.addEventListener && c(s.postMessage) && !s.importScripts && r && 'file:' !== r.protocol && !_(M)
              ? ((i = M), s.addEventListener('message', D, !1))
              : (i =
                    y in h('script')
                        ? function (e) {
                              E.appendChild(h('script'))[y] = function () {
                                  E.removeChild(this), L(e);
                              };
                          }
                        : function (e) {
                              setTimeout(b(e), 0);
                          })),
    (e.exports = {
        set: T,
        clear: g
    });
