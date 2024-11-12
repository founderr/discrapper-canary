n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var l = n(905837),
    o = n(731965);
let a = (0, l.Ue)((e, t) => ({
    selectedUserIds: {},
    addUsers: (n, l) => {
        var a;
        let { selectedUserIds: i } = t(),
            r = new Set([...(null !== (a = i[n]) && void 0 !== a ? a : new Set()), ...l]);
        (0, o.j)(() => {
            e({
                selectedUserIds: {
                    ...i,
                    [n]: r
                }
            });
        });
    },
    removeUser: (n, l) => {
        let { selectedUserIds: a } = t(),
            i = a[n];
        if (null == i) return;
        let r = [...i].filter((e) => e !== l);
        (0, o.j)(() => {
            e({
                selectedUserIds: {
                    ...a,
                    [n]: new Set(r)
                }
            });
        });
    },
    clearSelection: (n) => {
        let { selectedUserIds: l } = t();
        null != l &&
            (0, o.j)(() => {
                e({
                    selectedUserIds: {
                        ...l,
                        [n]: new Set()
                    }
                });
            });
    }
}));
function i(e) {
    return a((t) => {
        var n;
        return {
            selectedUserIds: null !== (n = t.selectedUserIds[e]) && void 0 !== n ? n : new Set(),
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
    });
}
