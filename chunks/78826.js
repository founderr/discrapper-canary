n.d(t, {
    Fl: function () {
        return _;
    },
    d7: function () {
        return p;
    },
    p: function () {
        return f;
    }
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(374470),
    s = n(626135),
    o = n(960048),
    l = n(981631);
let u = i.createContext({
    registerAsset: () => {},
    unregisterAsset: () => {},
    hasError: !1,
    isLoading: !0
});
function c(e) {
    return (0, a.k)(e, HTMLImageElement) ? e.complete : !(0, a.k)(e, HTMLVideoElement) || e.readyState >= 2;
}
function d(e) {
    var t, n;
    return (0, a.k)(e, HTMLImageElement) ? e.getAttribute('src') : (0, a.k)(e, HTMLVideoElement) ? (null !== (n = null === (t = e.querySelectorAll('source')[0]) || void 0 === t ? void 0 : t.getAttribute('src')) && void 0 !== n ? n : 'video') : e.tagName;
}
function f(e) {
    let { children: t, isPreview: n = !1, source: f, questId: _ } = e,
        [p, h] = i.useState(!1),
        [m, g] = i.useState(new Set()),
        [E, v] = i.useState(!1),
        b = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of m) !c(t) && e.add(t);
        e.size !== m.size && g(e);
    }, [m]);
    let I = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: a } = e;
                !n &&
                    null != f &&
                    (s.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
                        source: f,
                        quest_id: _,
                        asset_id: d(t)
                    }),
                    o.Z.captureException(
                        Error(
                            ''
                                .concat(i, ': ')
                                .concat(null != a ? ''.concat(a, ', ') : '')
                                .concat(d(t), ', ')
                                .concat(r)
                        ),
                        { tags: { source: f } }
                    ),
                    h(!0));
            },
            [n, f, _]
        ),
        T = i.useCallback((e) => {
            g((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        S = i.useCallback(
            (e, t) => {
                var n;
                if ((v(!0), c(e))) return;
                g((t) => {
                    let n = new Set(t);
                    return n.add(e), n;
                });
                let r = ((n = e), (0, a.k)(n, HTMLImageElement) ? 'load' : (0, a.k)(n, HTMLVideoElement) ? 'canplaythrough' : 'load');
                e.addEventListener(r, function t() {
                    T(e), e.removeEventListener(r, t);
                });
                e.addEventListener('error', function n(r) {
                    T(e),
                        I({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: 'Error loading asset',
                            errorMessage: 'message' in r ? r.message : null
                        }),
                        e.removeEventListener('error', n);
                });
            },
            [I, T]
        ),
        y = i.useMemo(() => m.size > 0 || !E, [E, m]);
    i.useEffect(() => {
        !y && (b.current = !0);
    }, [y]);
    let A = i.useMemo(
        () => ({
            registerAsset: S,
            unregisterAsset: T,
            hasError: p,
            isLoading: y && !b.current
        }),
        [S, T, p, y]
    );
    return (0, r.jsx)(u.Provider, {
        value: A,
        children: t
    });
}
function _(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: a } = i.useContext(u),
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = s.current;
            return (
                null != e && r(e, t),
                () => {
                    null != e && a(e);
                }
            );
        }, [r, a, t]),
        n(s)
    );
}
function p() {
    let { hasError: e, isLoading: t } = i.useContext(u);
    return {
        hasError: e,
        isLoading: t
    };
}
