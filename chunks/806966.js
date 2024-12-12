r.d(n, {
    Wq: function () {
        return f;
    },
    Xn: function () {
        return _;
    },
    ZN: function () {
        return d;
    },
    c: function () {
        return o;
    },
    kJ: function () {
        return c;
    }
});
var i = r(877124),
    a = r(65400),
    s = r(731965);
let o = -1,
    l = Object.freeze({
        inspectedExpressionPosition: {
            rowIndex: 0,
            columnIndex: 0
        },
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null
    });
function u() {
    let e = (0, a.F)()((0, i.XR)((e) => l)),
        n = () => e.getState(),
        r = (n, r, i) => {
            (0, s.j)(() =>
                e.setState({
                    inspectedExpressionPosition: {
                        rowIndex: r,
                        columnIndex: n,
                        source: i
                    }
                })
            );
        },
        o = (n) => {
            (0, s.j)(() => e.setState({ activeCategoryIndex: n }));
        },
        u = (n) => {
            (0, s.j)(() => e.setState({ searchPlaceholder: n }));
        },
        c = (n) => {
            (0, s.j)(() => e.setState({ bottomPosition: n }));
        },
        d = () => {
            (0, s.j)(() => e.setState(l));
        },
        f = (n, r) => e.subscribe(n, r);
    return {
        useStore: e,
        getState: n,
        subscribe: f,
        setInspectedExpressionPosition: r,
        setActiveCategoryIndex: o,
        setSearchPlaceholder: u,
        resetStoreState: d,
        setBottomPosition: c
    };
}
let c = u(),
    d = u(),
    f = u(),
    _ = u();
