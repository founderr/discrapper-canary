n.d(t, {
    OI: function () {
        return h;
    },
    QQ: function () {
        return d;
    },
    jY: function () {
        return m;
    },
    jg: function () {
        return u;
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
    var t;
    return s(r.useRef(((t = e), (e) => e[t])).current, l.Z);
}
let d = () => c('isSearchVisible'),
    u = () => c('selectedTab'),
    m = (e) => {
        (0, i.j)(() => s.setState(e));
    };
function h() {
    m(o);
}
