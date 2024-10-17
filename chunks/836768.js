n.d(t, {
    Sx: function () {
        return u;
    },
    dj: function () {
        return l;
    },
    uf: function () {
        return c;
    }
});
var r = n(652874),
    i = n(868888),
    a = n(731965),
    s = n(433517);
let o = { selectedTab: n(49898).F$.SERVERS },
    l = (0, r.Z)(
        (0, i.tJ)(() => o, {
            name: 'global-discovery-ui-store',
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = s.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => s.K.set(e, t),
                removeItem: (e) => s.K.remove(e)
            }),
            partialize: (e) => ({ selectedTab: e.selectedTab })
        })
    ),
    u = (e) => {
        (0, a.j)(() => l.setState(e));
    };
function c() {
    u(o);
}
