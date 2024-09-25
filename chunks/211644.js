n.d(t, {
    Aq: function () {
        return C;
    },
    ZP: function () {
        return b;
    },
    bn: function () {
        return R;
    },
    cI: function () {
        return O;
    },
    f0: function () {
        return v;
    },
    gE: function () {
        return N;
    },
    mc: function () {
        return y;
    }
});
var r = n(47120);
var i = n(733860);
var a = n(652874),
    o = n(731965),
    s = n(261376);
let l = new (n(499303).I)(),
    u = 300000,
    c = 3600000,
    d = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0
    }),
    _ = (0, a.Z)(d),
    E = (e) => ({
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup)
    }),
    f = (e, t) => {
        var n;
        return null == t ? e : (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null === (n = e.shownFatigableCandidate) || void 0 === n ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null), e);
    },
    h = (e, t) => {
        var n, r;
        if (null == t) return e;
        e.currentlyShown.add(t.content);
        let i = e.recentlyShown.filter((e) => e !== t.content);
        return i.unshift(t.content), i.splice(5), (e.recentlyShown = i), null != t.groupName && e.currentlyShownGroup.add(t.groupName), !s.O.has(t.content) && ((e.shownFatigableCandidate = t), (null === (r = e.prevFatigableCandidate) || void 0 === r ? void 0 : r.content) !== t.content && ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))), null === (n = t.onAdded) || void 0 === n || n.call(t), e;
    },
    p = (e, t) => (e.candidates.set(t.content, t), e),
    m = (e, t) => (e.candidates.delete(t.content), e),
    I = (e, t) => h(f(e, e.shownFatigableCandidate), t),
    T = (e) => (null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0),
    g = (e) => {
        let t = [...e.candidates.keys()];
        return (
            null !== e.prevFatigableCandidate &&
                e.candidates.has(e.prevFatigableCandidate.content) &&
                e.candidates.size > 1 &&
                (t = t.filter((t) => {
                    var n;
                    return t !== (null === (n = e.prevFatigableCandidate) || void 0 === n ? void 0 : n.content);
                })),
            e.candidates.get(t[Math.floor(Math.random() * t.length)])
        );
    },
    S = (e) => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
    A = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > u;
        if (S(e) && !t) return l.unschedule(), I(e, T(e));
        if ((null != e.shownFatigableCandidate && !t) || l.scheduled()) return e;
        let n = new Date().getTime();
        return null == e.shownFatigableCandidate && n - e.lastWinnerTime < c
            ? e
            : (l.schedule(() => {
                  (0, o.j)(() => {
                      _.setState((e) => {
                          let t = E(e);
                          return I(t, g(t));
                      });
                  });
              }, 250),
              e);
    },
    v = (e) => {
        let t = s.O.has(e.content);
        (0, o.j)(() => {
            _.setState((n) => {
                let r = E(n);
                return t ? h(r, e) : A(p(r, e));
            });
        });
    },
    N = (e, t) => {
        (0, o.j)(() => {
            _.setState((n) => {
                let r = E(n);
                return t ? A(f(m(r, e), e)) : f(m(r, e), e);
            });
        });
    },
    O = (e) => _.getState().currentlyShown.has(e),
    R = (e) => _((t) => t.currentlyShown.has(e)),
    C = () => {
        let e = [..._.getState().currentlyShown].filter((e) => !s.O.has(e)).length;
        return [_.getState().currentlyShown.size, e];
    },
    y = () => {
        (0, o.j)(() => _.setState(d)), l.unschedule();
    };
function b(e) {
    return _(e);
}
