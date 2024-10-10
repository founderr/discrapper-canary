r.d(t, {
    G: function () {
        return o;
    }
});
var n = r(572299),
    a = r(263449),
    _ = r(233517);
let o = function () {
    return {
        bindClient(e) {
            (0, a.nZ)().setClient(e);
        },
        withScope: a.$e,
        getClient: () => (0, a.s3)(),
        getScope: a.nZ,
        getIsolationScope: a.aF,
        captureException: (e, t) => (0, a.nZ)().captureException(e, t),
        captureMessage: (e, t, r) => (0, a.nZ)().captureMessage(e, t, r),
        captureEvent: _.eN,
        addBreadcrumb: n.n,
        setUser: _.av,
        setTags: _.mG,
        setTag: _.YA,
        setExtra: _.sU,
        setExtras: _.rJ,
        setContext: _.v,
        getIntegration(e) {
            let t = (0, a.s3)();
            return (t && t.getIntegrationByName(e.id)) || null;
        },
        startSession: _.yj,
        endSession: _.TM,
        captureSession(e) {
            if (e) return (0, _.TM)();
            (function () {
                let e = (0, a.nZ)(),
                    t = (0, a.s3)(),
                    r = e.getSession();
                t && r && t.captureSession(r);
            })();
        }
    };
};
