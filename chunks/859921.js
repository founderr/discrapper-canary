n.d(t, {
    Iy: function () {
        return m;
    },
    OI: function () {
        return f;
    },
    QQ: function () {
        return u;
    },
    jY: function () {
        return x;
    },
    jg: function () {
        return h;
    }
});
var r = n(470079),
    a = n(652874);
if (12633 == n.j) var l = n(143927);
var i = n(731965);
let o = Object.freeze({
        selectedTab: null,
        isSearchVisible: !1
    }),
    s = (0, a.Z)(() => o);
function c(e) {
    return (t) => t[e];
}
function d(e) {
    var t;
    return s(r.useRef(((t = e), (e) => e[t])).current, l.Z);
}
let u = () => d('isSearchVisible'),
    h = () => d('selectedTab'),
    m = () =>
        (function (e) {
            var t;
            let n = ((t = e), (e) => e[t]);
            return n(s.getState());
        })('selectedTab'),
    x = (e) => {
        (0, i.j)(() => s.setState(e));
    };
function f() {
    x(o);
}
