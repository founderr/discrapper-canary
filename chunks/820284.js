r.d(t, {
    G: function () {
        return o;
    }
});
var a = r(572299),
    n = r(263449),
    _ = r(233517);
let o = function () {
    return {
        bindClient(e) {
            (0, n.nZ)().setClient(e);
        },
        withScope: n.$e,
        getClient: () => (0, n.s3)(),
        getScope: n.nZ,
        getIsolationScope: n.aF,
        captureException: (e, t) => (0, n.nZ)().captureException(e, t),
        captureMessage: (e, t, r) => (0, n.nZ)().captureMessage(e, t, r),
        captureEvent: _.eN,
        addBreadcrumb: a.n,
        setUser: _.av,
        setTags: _.mG,
        setTag: _.YA,
        setExtra: _.sU,
        setExtras: _.rJ,
        setContext: _.v,
        getIntegration(e) {
            let t = (0, n.s3)();
            return (t && t.getIntegrationByName(e.id)) || null;
        },
        startSession: _.yj,
        endSession: _.TM,
        captureSession(e) {
            if (e) return (0, _.TM)();
            (function () {
                let e = (0, n.nZ)(),
                    t = (0, n.s3)(),
                    r = e.getSession();
                t && r && t.captureSession(r);
            })();
        }
    };
};
