n.d(t, {
    OI: function () {
        return E;
    },
    QQ: function () {
        return c;
    },
    jY: function () {
        return _;
    },
    jg: function () {
        return d;
    }
});
var r = n(470079),
    i = n(652874),
    a = n(143927),
    s = n(731965);
let o = Object.freeze({
        selectedTab: null,
        isSearchVisible: !1
    }),
    l = (0, i.Z)(() => o);
function u(e) {
    return l(
        r.useMemo(() => {
            var t;
            return (t = e), (e) => e[t];
        }, [e]),
        a.Z
    );
}
let c = () => u('isSearchVisible'),
    d = () => u('selectedTab'),
    _ = (e) => {
        (0, s.j)(() => l.setState(e));
    };
function E() {
    _(o);
}
