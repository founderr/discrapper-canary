r.d(t, {
    d: function () {
        return l;
    },
    u: function () {
        return c;
    }
});
var a = r(652874),
    n = r(868888),
    i = r(433517);
let o = { selectedPage: r(49898).F$.SERVERS },
    l = (0, a.Z)(
        (0, n.tJ)(() => o, {
            name: 'global-discovery-ui-store',
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = i.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => i.K.set(e, t),
                removeItem: (e) => i.K.remove(e)
            }),
            partialize: (e) => ({ selectedPage: e.selectedPage })
        })
    );
function c() {
    l.setState(o);
}
