var i,
    a,
    s,
    o,
    l = r(161581),
    u = r(197187),
    c = r(566885),
    d = r(354848),
    f = r(740362),
    _ = r(936940),
    h = r(620623),
    p = r(50754),
    m = r(722063),
    g = r(202934),
    E = r(531460),
    v = r(391673),
    I = l.setImmediate,
    T = l.clearImmediate,
    b = l.process,
    y = l.Dispatch,
    S = l.Function,
    A = l.MessageChannel,
    N = l.String,
    C = 0,
    R = {},
    O = 'onreadystatechange';
_(function () {
    i = l.location;
});
var D = function (e) {
        if (f(R, e)) {
            var n = R[e];
            delete R[e], n();
        }
    },
    L = function (e) {
        return function () {
            D(e);
        };
    },
    x = function (e) {
        D(e.data);
    },
    w = function (e) {
        l.postMessage(N(e), i.protocol + '//' + i.host);
    };
(!I || !T) &&
    ((I = function (e) {
        g(arguments.length, 1);
        var n = d(e) ? e : S(e),
            r = p(arguments, 1);
        return (
            (R[++C] = function () {
                u(n, void 0, r);
            }),
            a(C),
            C
        );
    }),
    (T = function (e) {
        delete R[e];
    }),
    v
        ? (a = function (e) {
              b.nextTick(L(e));
          })
        : y && y.now
          ? (a = function (e) {
                y.now(L(e));
            })
          : A && !E
            ? ((o = (s = new A()).port2), (s.port1.onmessage = x), (a = c(o.postMessage, o)))
            : l.addEventListener && d(l.postMessage) && !l.importScripts && i && 'file:' !== i.protocol && !_(w)
              ? ((a = w), l.addEventListener('message', x, !1))
              : (a =
                    O in m('script')
                        ? function (e) {
                              h.appendChild(m('script'))[O] = function () {
                                  h.removeChild(this), D(e);
                              };
                          }
                        : function (e) {
                              setTimeout(L(e), 0);
                          })),
    (e.exports = {
        set: I,
        clear: T
    });
