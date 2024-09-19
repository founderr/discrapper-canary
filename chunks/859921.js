n.d(t, {
    Iy: function () {
        return E;
    },
    OI: function () {
        return m;
    },
    QQ: function () {
        return u;
    },
    jY: function () {
        return h;
    },
    jg: function () {
        return _;
    }
});
var i = n(470079),
    a = n(652874),
    s = n(143927),
    r = n(731965);
let l = Object.freeze({
        selectedTab: null,
        isSearchVisible: !1
    }),
    o = (0, a.Z)(() => l);
function c(e) {
    return (t) => t[e];
}
function d(e) {
    var t;
    return o(i.useRef(((t = e), (e) => e[t])).current, s.Z);
}
let u = () => d('isSearchVisible'),
    _ = () => d('selectedTab'),
    E = () =>
        (function (e) {
            var t;
            let n = ((t = e), (e) => e[t]);
            return n(o.getState());
        })('selectedTab'),
    h = (e) => {
        (0, r.j)(() => o.setState(e));
    };
function m() {
    h(l);
}
