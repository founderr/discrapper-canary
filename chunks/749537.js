r.d(n, {
    s: function () {
        return s;
    }
});
let i = (e, n) => ({
        x: e.x - n.x,
        y: e.y - n.y
    }),
    a = (e) => {
        let n = e.getInitialClientOffset(),
            r = e.getInitialSourceClientOffset();
        return null === n || null === r
            ? {
                  x: 0,
                  y: 0
              }
            : i(n, r);
    },
    s = (e, n) => {
        let r = e.getClientOffset();
        if (null === r) return null;
        if (!n.current || !n.current.getBoundingClientRect) return i(r, a(e));
        let s = n.current.getBoundingClientRect();
        return i(r, {
            x: s.width / 2,
            y: s.height / 2
        });
    };
