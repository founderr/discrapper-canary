n.d(r, {
    Mf: function () {
        return a;
    },
    Y6: function () {
        return s;
    },
    pF: function () {
        return c;
    }
});
var t = n(905837),
    l = n(731965);
let o = Object.freeze({
        inspectedStickerPosition: {
            rowIndex: -1,
            columnIndex: -1
        }
    }),
    i = (0, t.ZP)((e) => o),
    s = i,
    a = (e, r, n) => {
        (0, l.j)(() =>
            i.setState({
                inspectedStickerPosition: {
                    rowIndex: r,
                    columnIndex: e,
                    source: n
                }
            })
        );
    },
    c = () => {
        a(-1, -1);
    };
