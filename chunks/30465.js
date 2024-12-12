r.d(n, {
    KR: function () {
        return u;
    },
    p8: function () {
        return l;
    },
    sJ: function () {
        return c;
    }
});
var i = r(192379),
    a = r(15729),
    s = r(731965);
let o = Object.freeze({
        id: null,
        activeDescendant: null
    }),
    l = (0, a.U)(() => o);
function u(e, n, r) {
    (0, i.useEffect)(() => {
        (0, s.j)(() => {
            n
                ? l.setState({
                      id: e,
                      activeDescendant: r
                  })
                : l.setState({
                      id: null,
                      activeDescendant: null
                  });
        });
    }, [e, n, r]);
}
function c() {
    (0, s.j)(() => l.setState(() => o));
}
