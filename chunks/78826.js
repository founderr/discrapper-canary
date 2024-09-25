n.d(t, {
    Fl: function () {
        return p;
    },
    d7: function () {
        return m;
    },
    p: function () {
        return h;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(374470),
    l = n(626135),
    u = n(960048),
    c = n(981631);
let d = o.createContext({
    registerAsset: () => {},
    unregisterAsset: () => {},
    hasError: !1,
    isLoading: !0
});
function _(e) {
    return (0, s.k)(e, HTMLImageElement) ? e.complete : !(0, s.k)(e, HTMLVideoElement) || e.readyState >= 2;
}
function E(e) {
    return (0, s.k)(e, HTMLImageElement) ? 'load' : (0, s.k)(e, HTMLVideoElement) ? 'canplaythrough' : 'load';
}
function f(e) {
    var t, n;
    return (0, s.k)(e, HTMLImageElement) ? e.getAttribute('src') : (0, s.k)(e, HTMLVideoElement) ? (null !== (n = null === (t = e.querySelectorAll('source')[0]) || void 0 === t ? void 0 : t.getAttribute('src')) && void 0 !== n ? n : 'video') : e.tagName;
}
function h(e) {
    let { children: t, isPreview: n = !1, source: r, questId: i } = e,
        [s, h] = o.useState(!1),
        [p, m] = o.useState(new Set()),
        [I, T] = o.useState(!1),
        g = o.useRef(!1);
    o.useEffect(() => {
        let e = new Set();
        for (let t of p) !_(t) && e.add(t);
        e.size !== p.size && m(e);
    }, [p]);
    let S = o.useCallback(
            (e) => {
                let { assetNode: t, nodeId: a, errorPrefix: o, errorMessage: s } = e;
                !n &&
                    null != r &&
                    (l.default.track(c.rMx.QUEST_ASSET_LOADING_FAILURE, {
                        source: r,
                        quest_id: i,
                        asset_id: f(t)
                    }),
                    u.Z.captureException(
                        Error(
                            ''
                                .concat(o, ': ')
                                .concat(null != s ? ''.concat(s, ', ') : '')
                                .concat(f(t), ', ')
                                .concat(a)
                        ),
                        { tags: { source: r } }
                    ),
                    h(!0));
            },
            [n, r, i]
        ),
        A = o.useCallback((e) => {
            m((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        v = o.useCallback(
            (e, t) => {
                if ((T(!0), _(e))) return;
                m((t) => {
                    let n = new Set(t);
                    return n.add(e), n;
                });
                let n = E(e);
                function r() {
                    A(e), e.removeEventListener(n, r);
                }
                function i(n) {
                    A(e),
                        S({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: 'Error loading asset',
                            errorMessage: 'message' in n ? n.message : null
                        }),
                        e.removeEventListener('error', i);
                }
                e.addEventListener(n, r), e.addEventListener('error', i);
            },
            [S, A]
        ),
        N = o.useMemo(() => p.size > 0 || !I, [I, p]);
    o.useEffect(() => {
        !N && (g.current = !0);
    }, [N]);
    let O = o.useMemo(
        () => ({
            registerAsset: v,
            unregisterAsset: A,
            hasError: s,
            isLoading: N && !g.current
        }),
        [v, A, s, N]
    );
    return (0, a.jsx)(d.Provider, {
        value: O,
        children: t
    });
}
function p(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: i } = o.useContext(d),
        a = o.useRef(null);
    return (
        o.useEffect(() => {
            let e = a.current;
            return (
                null != e && r(e, t),
                () => {
                    null != e && i(e);
                }
            );
        }, [r, i, t]),
        n(a)
    );
}
function m() {
    let { hasError: e, isLoading: t } = o.useContext(d);
    return {
        hasError: e,
        isLoading: t
    };
}
