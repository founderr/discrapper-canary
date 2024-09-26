n.d(t, {
    $G: function () {
        return _;
    },
    A3: function () {
        return T;
    },
    BK: function () {
        return f;
    },
    D1: function () {
        return C;
    },
    Dm: function () {
        return g;
    },
    LD: function () {
        return N;
    },
    NL: function () {
        return E;
    },
    WF: function () {
        return h;
    },
    a7: function () {
        return p;
    },
    lZ: function () {
        return m;
    },
    lx: function () {
        return I;
    },
    uP: function () {
        return S;
    }
});
var i = n(470079),
    a = n(652874),
    s = n(143927),
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
    var t;
    return o(i.useRef(((t = e), (e) => e[t])).current, s.Z);
}
function u(e) {
    var t;
    let n = ((t = e), (e) => e[t]);
    return n(o.getState());
}
let _ = () => d('resultsQuery'),
    h = () => u('resultsQuery'),
    E = () => d('fetchedQuery'),
    m = () => d('categoryId'),
    I = () => u('categoryId'),
    g = () => d('languageCode'),
    p = () => u('languageCode'),
    T = () => d('query'),
    S = () => u('query'),
    f = () => u('scrollPosition'),
    C = () => d('resultsInitialCategoryId'),
    N = (e) => {
        (0, r.j)(() => o.setState(e));
    };
