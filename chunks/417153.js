r.d(n, {
    CF: function () {
        return l;
    },
    Es: function () {
        return o;
    },
    z5: function () {
        return u;
    }
});
var i = r(47120);
var a = r(15729),
    s = r(731965);
let o = (0, a.U)(() => ({
    currentToast: null,
    queuedToasts: []
}));
function l(e) {
    (0, s.j)(() => {
        o.setState((n) =>
            null != n.currentToast
                ? {
                      ...n,
                      queuedToasts: [...n.queuedToasts, e]
                  }
                : {
                      currentToast: e,
                      queuedToasts: []
                  }
        );
    });
}
function u() {
    (0, s.j)(() => {
        o.setState((e) => {
            let n = e.queuedToasts;
            return n.length > 0
                ? {
                      currentToast: n[0],
                      queuedToasts: n.slice(1)
                  }
                : {
                      currentToast: null,
                      queuedToasts: []
                  };
        });
    });
}
