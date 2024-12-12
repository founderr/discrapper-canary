r.d(n, {
    Z: function () {
        return p;
    },
    o: function () {
        return h;
    }
});
var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(544891),
    l = r(570140),
    u = r(503013),
    c = r(283595),
    d = r(804739),
    f = r(981631);
let _ = 50;
async function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.Z.entitledBranchIds;
    if (!(0, d.Q)() || 0 === e.length) return [];
    let n = s().chunk(e, _);
    try {
        let e = n.map(async (e) =>
                (
                    await o.tn.post({
                        url: f.ANM.APPLICATION_BRANCHES,
                        body: { branch_ids: e },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                ).body.map(u.Z.createFromServer)
            ),
            r = await Promise.all(e),
            i = s().flatten(r);
        return (
            l.Z.dispatch({
                type: 'APPLICATION_BRANCHES_FETCH_SUCCESS',
                branches: i
            }),
            i
        );
    } catch (n) {
        return (
            l.Z.dispatch({
                type: 'APPLICATION_BRANCHES_FETCH_FAIL',
                branchIds: e
            }),
            []
        );
    }
}
async function p(e) {
    try {
        let n = await o.tn.get({
                url: f.ANM.OWNED_APPLICATION_BRANCHES(e),
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            r = Array.isArray(n.body) ? n.body.map(u.Z.createFromServer) : [];
        return (
            l.Z.dispatch({
                type: 'OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS',
                applicationId: e,
                branches: r
            }),
            r
        );
    } catch (n) {
        return (
            l.Z.dispatch({
                type: 'OWNED_APPLICATION_BRANCHES_FETCH_FAIL',
                applicationId: e
            }),
            []
        );
    }
}
