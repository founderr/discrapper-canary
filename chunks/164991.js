n.d(t, {
    $G: function () {
        return _;
    },
    A3: function () {
        return T;
    },
    BK: function () {
        return S;
    },
    D1: function () {
        return C;
    },
    Dm: function () {
        return p;
    },
    LD: function () {
        return N;
    },
    NL: function () {
        return E;
    },
    Zq: function () {
        return h;
    },
    a7: function () {
        return g;
    },
    lZ: function () {
        return m;
    },
    lx: function () {
        return I;
    },
    uP: function () {
        return f;
    }
});
var i = n(192379),
    a = n(903797),
    s = n(782690),
    r = n(731965);
let l = Object.freeze({
        query: '',
        languageCode: null,
        categoryId: n(731455).Hk,
        fetchedQuery: '',
        resultsQuery: '',
        resultsInitialCategoryId: null,
        scrollPosition: null
    }),
    o = (0, a.Z)(() => l);
function c(e) {
    return (t) => t[e];
}
function d(e) {
    return o(
        i.useMemo(() => {
            var t;
            return (t = e), (e) => e[t];
        }, [e]),
        s.Z
    );
}
function u(e) {
    var t;
    let n = ((t = e), (e) => e[t]);
    return n(o.getState());
}
let _ = () => d('resultsQuery'),
    E = () => d('fetchedQuery'),
    h = () => u('fetchedQuery'),
    m = () => d('categoryId'),
    I = () => u('categoryId'),
    p = () => d('languageCode'),
    g = () => u('languageCode'),
    T = () => d('query'),
    f = () => u('query'),
    S = () => u('scrollPosition'),
    C = () => d('resultsInitialCategoryId'),
    N = (e) => {
        (0, r.j)(() => o.setState(e));
    };
