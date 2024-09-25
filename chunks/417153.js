n.d(t, {
    CF: function () {
        return s;
    },
    Es: function () {
        return o;
    },
    z5: function () {
        return l;
    }
});
var r = n(47120);
var i = n(652874),
    a = n(731965);
let o = (0, i.Z)(() => ({
    currentToast: null,
    queuedToasts: []
}));
function s(e) {
    (0, a.j)(() => {
        o.setState((t) =>
            null != t.currentToast
                ? {
                      ...t,
                      queuedToasts: [...t.queuedToasts, e]
                  }
                : {
                      currentToast: e,
                      queuedToasts: []
                  }
        );
    });
}
function l() {
    (0, a.j)(() => {
        o.setState((e) => {
            let t = e.queuedToasts;
            return t.length > 0
                ? {
                      currentToast: t[0],
                      queuedToasts: t.slice(1)
                  }
                : {
                      currentToast: null,
                      queuedToasts: []
                  };
        });
    });
}
