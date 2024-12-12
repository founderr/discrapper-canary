r.d(n, {
    Aq: function () {
        return R;
    },
    ZP: function () {
        return D;
    },
    bn: function () {
        return C;
    },
    cI: function () {
        return N;
    },
    f0: function () {
        return S;
    },
    gE: function () {
        return A;
    },
    mc: function () {
        return O;
    }
});
var i = r(47120);
var a = r(733860);
var s = r(65400),
    o = r(731965),
    l = r(261376);
let u = new (r(499303).I)(),
    c = 300000,
    d = 3600000,
    f = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0
    }),
    _ = (0, s.F)(f),
    h = (e) => ({
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup)
    }),
    p = (e, n) => {
        var r;
        return null == n ? e : (null != n.content && e.currentlyShown.delete(n.content), null != n.groupName && e.currentlyShownGroup.delete(n.groupName), (null === (r = e.shownFatigableCandidate) || void 0 === r ? void 0 : r.content) === n.content && (e.shownFatigableCandidate = null), e);
    },
    m = (e, n) => {
        var r, i;
        if (null == n) return e;
        e.currentlyShown.add(n.content);
        let a = e.recentlyShown.filter((e) => e !== n.content);
        return a.unshift(n.content), a.splice(5), (e.recentlyShown = a), null != n.groupName && e.currentlyShownGroup.add(n.groupName), !l.O.has(n.content) && ((e.shownFatigableCandidate = n), (null === (i = e.prevFatigableCandidate) || void 0 === i ? void 0 : i.content) !== n.content && ((e.prevFatigableCandidate = n), (e.lastWinnerTime = new Date().getTime()))), null === (r = n.onAdded) || void 0 === r || r.call(n), e;
    },
    g = (e, n) => (e.candidates.set(n.content, n), e),
    E = (e, n) => (e.candidates.delete(n.content), e),
    v = (e, n) => m(p(e, e.shownFatigableCandidate), n),
    I = (e) => (null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0),
    T = (e) => {
        let n = [...e.candidates.keys()];
        return (
            null !== e.prevFatigableCandidate &&
                e.candidates.has(e.prevFatigableCandidate.content) &&
                e.candidates.size > 1 &&
                (n = n.filter((n) => {
                    var r;
                    return n !== (null === (r = e.prevFatigableCandidate) || void 0 === r ? void 0 : r.content);
                })),
            e.candidates.get(n[Math.floor(Math.random() * n.length)])
        );
    },
    b = (e) => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
    y = (e) => {
        if (0 === e.candidates.size) return e;
        let n = new Date().getTime() - e.lastWinnerTime > c;
        if (b(e) && !n) return u.unschedule(), v(e, I(e));
        if ((null != e.shownFatigableCandidate && !n) || u.scheduled()) return e;
        let r = new Date().getTime();
        return null == e.shownFatigableCandidate && r - e.lastWinnerTime < d
            ? e
            : (u.schedule(() => {
                  (0, o.j)(() => {
                      _.setState((e) => {
                          let n = h(e);
                          return v(n, T(n));
                      });
                  });
              }, 250),
              e);
    },
    S = (e) => {
        let n = l.O.has(e.content);
        (0, o.j)(() => {
            _.setState((r) => {
                let i = h(r);
                return n ? m(i, e) : y(g(i, e));
            });
        });
    },
    A = (e, n) => {
        (0, o.j)(() => {
            _.setState((r) => {
                let i = h(r);
                return n ? y(p(E(i, e), e)) : p(E(i, e), e);
            });
        });
    },
    N = (e) => _.getState().currentlyShown.has(e),
    C = (e) => _((n) => n.currentlyShown.has(e)),
    R = () => {
        let e = [..._.getState().currentlyShown].filter((e) => !l.O.has(e)).length;
        return [_.getState().currentlyShown.size, e];
    },
    O = () => {
        (0, o.j)(() => _.setState(f)), u.unschedule();
    };
function D(e, n) {
    return _(e, n);
}
