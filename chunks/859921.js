n.d(t, {
    OI: function () {
        return h;
    },
    QQ: function () {
        return d;
    },
    jY: function () {
        return f;
    },
    jg: function () {
        return _;
    },
    z: function () {
        return E;
    }
});
var r = n(192379),
    i = n(903797),
    a = n(782690),
    s = n(731965);
let o = Object.freeze({
        selectedTab: null,
        isSearchVisible: !1,
        entrypoint: null
    }),
    l = (0, i.Z)(() => o);
function u(e) {
    return (t) => t[e];
}
function c(e) {
    return l(
        r.useMemo(() => {
            var t;
            return (t = e), (e) => e[t];
        }, [e]),
        a.Z
    );
}
let d = () => c('isSearchVisible'),
    _ = () => c('selectedTab'),
    E = () =>
        (function (e) {
            var t;
            let n = ((t = e), (e) => e[t]);
            return n(l.getState());
        })('entrypoint'),
    f = (e) => {
        (0, s.j)(() => l.setState(e));
    };
function h() {
    f(o);
}
