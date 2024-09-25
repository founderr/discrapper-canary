n.d(t, {
    KR: function () {
        return l;
    },
    p8: function () {
        return s;
    },
    sJ: function () {
        return u;
    }
});
var r = n(470079),
    i = n(652874),
    a = n(731965);
let o = Object.freeze({
        id: null,
        activeDescendant: null
    }),
    s = (0, i.Z)(() => o);
function l(e, t, n) {
    (0, r.useEffect)(() => {
        (0, a.j)(() => {
            t
                ? s.setState({
                      id: e,
                      activeDescendant: n
                  })
                : s.setState({
                      id: null,
                      activeDescendant: null
                  });
        });
    }, [e, t, n]);
}
function u() {
    (0, a.j)(() => s.setState(() => o));
}
