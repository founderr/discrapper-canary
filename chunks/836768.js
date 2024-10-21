n.d(t, {
    OA: function () {
        return E;
    },
    Sx: function () {
        return _;
    },
    qe: function () {
        return f;
    },
    uf: function () {
        return h;
    }
});
var r = n(192379),
    i = n(903797),
    a = n(60071),
    s = n(782690),
    o = n(731965),
    l = n(433517);
let u = { selectedTab: n(49898).F$.SERVERS },
    c = (0, i.Z)(
        (0, a.tJ)(() => u, {
            name: 'global-discovery-ui-store',
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = l.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => l.K.set(e, t),
                removeItem: (e) => l.K.remove(e)
            }),
            partialize: (e) => ({ selectedTab: e.selectedTab })
        })
    );
function d(e) {
    return (t) => t[e];
}
let _ = (e) => {
    (0, o.j)(() => c.setState(e));
};
function E() {
    var e;
    return (
        (e = 'selectedTab'),
        c(
            r.useMemo(() => {
                var t;
                return (t = e), (e) => e[t];
            }, [e]),
            s.Z
        )
    );
}
function f() {
    return (function (e) {
        var t;
        let n = ((t = e), (e) => e[t]);
        return n(c.getState());
    })('selectedTab');
}
function h() {
    _(u);
}
