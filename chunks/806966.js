n.d(t, {
    Wq: function () {
        return c;
    },
    Xn: function () {
        return d;
    },
    ZN: function () {
        return u;
    },
    c: function () {
        return a;
    },
    kJ: function () {
        return l;
    }
});
var r = n(652874),
    i = n(731965);
let a = -1,
    o = Object.freeze({
        inspectedExpressionPosition: {
            rowIndex: 0,
            columnIndex: 0
        },
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null
    });
function s() {
    let e = (0, r.Z)((e) => o),
        t = () => e.getState(),
        n = (t, n, r) => {
            (0, i.j)(() =>
                e.setState({
                    inspectedExpressionPosition: {
                        rowIndex: n,
                        columnIndex: t,
                        source: r
                    }
                })
            );
        },
        a = (t) => {
            (0, i.j)(() => e.setState({ activeCategoryIndex: t }));
        },
        s = (t) => {
            (0, i.j)(() => e.setState({ searchPlaceholder: t }));
        },
        l = (t) => {
            (0, i.j)(() => e.setState({ bottomPosition: t }));
        },
        u = () => {
            (0, i.j)(() => e.setState(o));
        };
    return {
        useStore: e,
        getState: t,
        setInspectedExpressionPosition: n,
        setActiveCategoryIndex: a,
        setSearchPlaceholder: s,
        resetStoreState: u,
        setBottomPosition: l
    };
}
let l = s(),
    u = s(),
    c = s(),
    d = s();
