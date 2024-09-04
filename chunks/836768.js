n.d(t, {
    d: function () {
        return s;
    },
    u: function () {
        return o;
    }
});
var i = n(652874),
    l = n(868888),
    r = n(433517);
let a = { selectedTab: n(49898).F$.SERVERS },
    s = (0, i.Z)(
        (0, l.tJ)(() => a, {
            name: 'global-discovery-ui-store',
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = r.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => r.K.set(e, t),
                removeItem: (e) => r.K.remove(e)
            }),
            partialize: (e) => ({ selectedTab: e.selectedTab })
        })
    );
function o() {
    s.setState(a);
}
