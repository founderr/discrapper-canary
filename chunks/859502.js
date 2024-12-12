r.d(t, {
    a: function () {
        return s;
    }
});
var a = r(824851),
    n = r(753642),
    _ = r(622916),
    o = r(255768),
    E = r(696486),
    i = r(793373);
let c = !1;
function s() {
    if (!c) (c = !0), (0, a.V)(l), (0, n.h)(l);
}
function l() {
    let e = (0, E.HN)(),
        t = e && (0, E.Gx)(e);
    if (t) {
        let e = 'internal_error';
        o.X && _.kg.log(`[Tracing] Root span: ${e} -> Global error occured`),
            t.setStatus({
                code: i.jt,
                message: e
            });
    }
}
l.tag = 'sentry_tracingErrorCallback';
