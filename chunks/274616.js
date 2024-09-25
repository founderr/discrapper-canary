n.d(t, {
    Z: function () {
        return f;
    },
    o: function () {
        return E;
    }
});
var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(544891),
    s = n(570140),
    l = n(503013),
    u = n(283595),
    c = n(804739),
    d = n(981631);
let _ = 50;
async function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Z.entitledBranchIds;
    if (!(0, c.Q)() || 0 === e.length) return [];
    let t = a().chunk(e, _);
    try {
        let e = t.map(async (e) =>
                (
                    await o.tn.post({
                        url: d.ANM.APPLICATION_BRANCHES,
                        body: { branch_ids: e },
                        oldFormErrors: !0
                    })
                ).body.map(l.Z.createFromServer)
            ),
            n = await Promise.all(e),
            r = a().flatten(n);
        return (
            s.Z.dispatch({
                type: 'APPLICATION_BRANCHES_FETCH_SUCCESS',
                branches: r
            }),
            r
        );
    } catch (t) {
        return (
            s.Z.dispatch({
                type: 'APPLICATION_BRANCHES_FETCH_FAIL',
                branchIds: e
            }),
            []
        );
    }
}
async function f(e) {
    try {
        let t = await o.tn.get({
                url: d.ANM.OWNED_APPLICATION_BRANCHES(e),
                oldFormErrors: !0
            }),
            n = Array.isArray(t.body) ? t.body.map(l.Z.createFromServer) : [];
        return (
            s.Z.dispatch({
                type: 'OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS',
                applicationId: e,
                branches: n
            }),
            n
        );
    } catch (t) {
        return (
            s.Z.dispatch({
                type: 'OWNED_APPLICATION_BRANCHES_FETCH_FAIL',
                applicationId: e
            }),
            []
        );
    }
}
