var r,
    i,
    a,
    o,
    s = n(668530),
    l = n(156741),
    u = n(476508),
    c = n(735471),
    d = n(141603),
    _ = n(821819),
    E = n(439230),
    f = n(780524),
    h = n(535538),
    p = n(274745),
    m = n(378636),
    I = n(42433),
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
var b = function (e) {
        if (d(C, e)) {
            var t = C[e];
            delete C[e], t();
        }
    },
    L = function (e) {
        return function () {
            b(e);
        };
    },
    D = function (e) {
        b(e.data);
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
              S.nextTick(L(e));
          })
        : A && A.now
          ? (i = function (e) {
                A.now(L(e));
            })
          : N && !m
            ? ((o = (a = new N()).port2), (a.port1.onmessage = D), (i = u(o.postMessage, o)))
            : s.addEventListener && c(s.postMessage) && !s.importScripts && r && 'file:' !== r.protocol && !_(M)
              ? ((i = M), s.addEventListener('message', D, !1))
              : (i =
                    y in h('script')
                        ? function (e) {
                              E.appendChild(h('script'))[y] = function () {
                                  E.removeChild(this), b(e);
                              };
                          }
                        : function (e) {
                              setTimeout(L(e), 0);
                          })),
    (e.exports = {
        set: T,
        clear: g
    });
