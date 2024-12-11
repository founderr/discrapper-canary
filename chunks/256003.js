n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var l = n(232713),
    o = n(65400),
    i = n(731965);
let a = (0, o.F)((e, t) => ({
        selectedUserIds: {},
        addUsers: (n, l) => {
            var o;
            let { selectedUserIds: a } = t(),
                r = new Set([...(null !== (o = a[n]) && void 0 !== o ? o : new Set()), ...l]);
            (0, i.j)(() => {
                e({
                    selectedUserIds: {
                        ...a,
                        [n]: r
                    }
                });
            });
        },
        removeUser: (n, l) => {
            let { selectedUserIds: o } = t(),
                a = o[n];
            if (null == a) return;
            let r = [...a].filter((e) => e !== l);
            (0, i.j)(() => {
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
                (0, i.j)(() => {
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
    return a((t) => {
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
