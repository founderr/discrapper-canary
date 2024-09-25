var r,
    i,
    a,
    o,
    s,
    l = n(668530),
    u = n(476508),
    c = n(65007).f,
    d = n(62691).set,
    _ = n(6938),
    E = n(378636),
    f = n(192006),
    h = n(325435),
    p = n(42433),
    m = l.MutationObserver || l.WebKitMutationObserver,
    I = l.document,
    T = l.process,
    g = l.Promise,
    S = c(l, 'queueMicrotask'),
    A = S && S.value;
if (!A) {
    var v = new _(),
        N = function () {
            var e, t;
            for (p && (e = T.domain) && e.exit(); (t = v.get()); )
                try {
                    t();
                } catch (e) {
                    throw (v.head && r(), e);
                }
            e && e.enter();
        };
    E || p || h || !m || !I
        ? !f && g && g.resolve
            ? (((o = g.resolve(void 0)).constructor = g),
              (s = u(o.then, o)),
              (r = function () {
                  s(N);
              }))
            : p
              ? (r = function () {
                    T.nextTick(N);
                })
              : ((d = u(d, l)),
                (r = function () {
                    d(N);
                }))
        : ((i = !0),
          (a = I.createTextNode('')),
          new m(N).observe(a, { characterData: !0 }),
          (r = function () {
              a.data = i = !i;
          })),
        (A = function (e) {
            !v.head && r(), v.add(e);
        });
}
e.exports = A;
