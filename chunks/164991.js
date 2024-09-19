n.d(t, {
    $G: function () {
        return _;
    },
    A3: function () {
        return p;
    },
    BK: function () {
        return S;
    },
    D1: function () {
        return f;
    },
    Dm: function () {
        return I;
    },
    LD: function () {
        return C;
    },
    WF: function () {
        return E;
    },
    a7: function () {
        return g;
    },
    lZ: function () {
        return h;
    },
    lx: function () {
        return m;
    },
    uP: function () {
        return T;
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
    E = () => u('resultsQuery'),
    h = () => d('categoryId'),
    m = () => u('categoryId'),
    I = () => d('languageCode'),
    g = () => u('languageCode'),
    p = () => d('query'),
    T = () => u('query'),
    S = () => u('scrollPosition'),
    f = () => d('resultsInitialCategoryId'),
    C = (e) => {
        (0, r.j)(() => o.setState(e));
    };
