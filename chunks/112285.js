var r,
    i,
    a,
    s,
    o = n(161581),
    l = n(197187),
    u = n(566885),
    c = n(354848),
    d = n(740362),
    f = n(936940),
    _ = n(620623),
    p = n(50754),
    h = n(722063),
    m = n(202934),
    g = n(531460),
    E = n(391673),
    v = o.setImmediate,
    I = o.clearImmediate,
    b = o.process,
    S = o.Dispatch,
    T = o.Function,
    y = o.MessageChannel,
    A = o.String,
    N = 0,
    C = {},
    R = 'onreadystatechange';
f(function () {
    r = o.location;
});
var O = function (e) {
        if (d(C, e)) {
            var t = C[e];
            delete C[e], t();
        }
    },
    D = function (e) {
        return function () {
            O(e);
        };
    },
    L = function (e) {
        O(e.data);
    },
    x = function (e) {
        o.postMessage(A(e), r.protocol + '//' + r.host);
    };
(!v || !I) &&
    ((v = function (e) {
        m(arguments.length, 1);
        var t = c(e) ? e : T(e),
            n = p(arguments, 1);
        return (
            (C[++N] = function () {
                l(t, void 0, n);
            }),
            i(N),
            N
        );
    }),
    (I = function (e) {
        delete C[e];
    }),
    E
        ? (i = function (e) {
              b.nextTick(D(e));
          })
        : S && S.now
          ? (i = function (e) {
                S.now(D(e));
            })
          : y && !g
            ? ((s = (a = new y()).port2), (a.port1.onmessage = L), (i = u(s.postMessage, s)))
            : o.addEventListener && c(o.postMessage) && !o.importScripts && r && 'file:' !== r.protocol && !f(x)
              ? ((i = x), o.addEventListener('message', L, !1))
              : (i =
                    R in h('script')
                        ? function (e) {
                              _.appendChild(h('script'))[R] = function () {
                                  _.removeChild(this), O(e);
                              };
                          }
                        : function (e) {
                              setTimeout(D(e), 0);
                          })),
    (e.exports = {
        set: v,
        clear: I
    });
