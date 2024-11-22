n.d(t, {
    Wq: function () {
        return d;
    },
    Xn: function () {
        return f;
    },
    ZN: function () {
        return c;
    },
    c: function () {
        return s;
    },
    kJ: function () {
        return u;
    }
});
var r = n(877124),
    i = n(65400),
    a = n(731965);
let s = -1,
    o = Object.freeze({
        inspectedExpressionPosition: {
            rowIndex: 0,
            columnIndex: 0
        },
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null
    });
function l() {
    let e = (0, i.F)()((0, r.XR)((e) => o));
    return {
        useStore: e,
        getState: () => e.getState(),
        subscribe: (t, n) => e.subscribe(t, n),
        setInspectedExpressionPosition: (t, n, r) => {
            (0, a.j)(() =>
                e.setState({
                    inspectedExpressionPosition: {
                        rowIndex: n,
                        columnIndex: t,
                        source: r
                    }
                })
            );
        },
        setActiveCategoryIndex: (t) => {
            (0, a.j)(() => e.setState({ activeCategoryIndex: t }));
        },
        setSearchPlaceholder: (t) => {
            (0, a.j)(() => e.setState({ searchPlaceholder: t }));
        },
        resetStoreState: () => {
            (0, a.j)(() => e.setState(o));
        },
        setBottomPosition: (t) => {
            (0, a.j)(() => e.setState({ bottomPosition: t }));
        }
    };
}
let u = l(),
    c = l(),
    d = l(),
    f = l();
