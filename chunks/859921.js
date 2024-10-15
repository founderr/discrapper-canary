n.d(t, {
    OI: function () {
        return E;
    },
    QQ: function () {
        return u;
    },
    jY: function () {
        return _;
    },
    jg: function () {
        return d;
    }
});
var i = n(470079),
    a = n(652874);
if (12633 == n.j) var s = n(143927);
var r = n(731965);
let l = Object.freeze({
        selectedTab: null,
        isSearchVisible: !1
    }),
    o = (0, a.Z)(() => l);
function c(e) {
    var t;
    return o(i.useRef(((t = e), (e) => e[t])).current, s.Z);
}
let u = () => c('isSearchVisible'),
    d = () => c('selectedTab'),
    _ = (e) => {
        (0, r.j)(() => o.setState(e));
    };
function E() {
    _(l);
}
