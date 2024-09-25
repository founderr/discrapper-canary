n.d(t, {
    cE: function () {
        return l;
    },
    eu: function () {
        return u;
    },
    fU: function () {
        return c;
    }
});
var r = n(652874),
    i = n(731965),
    a = n(902704);
let o = {},
    s = (0, r.Z)((e) => ({
        polls: {},
        updatePollState(t, n, r) {
            (0, i.j)(() => {
                e((e) => {
                    var i;
                    return {
                        polls: {
                            ...e.polls,
                            [t]: {
                                ...e.polls[t],
                                [n]: r(null === (i = e.polls[t]) || void 0 === i ? void 0 : i[n])
                            }
                        }
                    };
                });
            });
        }
    }));
function l(e) {
    return s((t) => {
        var n;
        return null !== (n = t.polls[e]) && void 0 !== n ? n : o;
    }, a.Z);
}
function u(e, t, n) {
    s.getState().updatePollState(e, t, n);
}
function c(e, t) {
    var n;
    return null === (n = s.getState().polls[e]) || void 0 === n ? void 0 : n[t];
}
