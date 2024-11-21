n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var l = n(976649),
    o = n(454000),
    a = n(731965);
let i = (0, o.F)((e, t) => ({
        selectedUserIds: {},
        addUsers: (n, l) => {
            var o;
            let { selectedUserIds: i } = t(),
                r = new Set([...(null !== (o = i[n]) && void 0 !== o ? o : new Set()), ...l]);
            (0, a.j)(() => {
                e({
                    selectedUserIds: {
                        ...i,
                        [n]: r
                    }
                });
            });
        },
        removeUser: (n, l) => {
            let { selectedUserIds: o } = t(),
                i = o[n];
            if (null == i) return;
            let r = [...i].filter((e) => e !== l);
            (0, a.j)(() => {
                e({
                    selectedUserIds: {
                        ...o,
                        [n]: new Set(r)
                    }
                });
            });
        },
        clearSelection: (n) => {
            let { selectedUserIds: l } = t();
            null != l &&
                (0, a.j)(() => {
                    e({
                        selectedUserIds: {
                            ...l,
                            [n]: new Set()
                        }
                    });
                });
        }
    })),
    r = new Set();
function s(e) {
    return i((t) => {
        var n;
        return {
            selectedUserIds: null !== (n = t.selectedUserIds[e]) && void 0 !== n ? n : r,
            addUsers: (n) => {
                t.addUsers(e, n);
            },
            removeUser: (n) => {
                t.removeUser(e, n);
            },
            clearSelection: () => {
                t.clearSelection(e);
            }
        };
    }, l.X);
}
