n.d(t, {
    d: function () {
        return o;
    },
    u: function () {
        return s;
    }
});
var r = n(652874),
    a = n(868888),
    l = n(433517);
let i = { selectedTab: n(49898).F$.SERVERS },
    o = (0, r.Z)(
        (0, a.tJ)(() => i, {
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
function s() {
    o.setState(i);
}
