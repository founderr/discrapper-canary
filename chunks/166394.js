r.d(t, {
    CC: function () {
        return E;
    },
    GY: function () {
        return o;
    }
});
var n = r(899517);
let a = new Map(),
    _ = new Set();
function o(e, t) {
    try {
        t.exception.values.forEach((t) => {
            if (!!t.stacktrace)
                for (let E of t.stacktrace.frames || []) {
                    var r, o;
                    if (!E.filename || E.module_metadata) continue;
                    let t =
                        ((r = e),
                        (o = E.filename),
                        !(function (e) {
                            if (!!n.n._sentryModuleMetadata)
                                for (let t of Object.keys(n.n._sentryModuleMetadata)) {
                                    let r = n.n._sentryModuleMetadata[t];
                                    if (!_.has(t)) {
                                        for (let n of (_.add(t), e(t).reverse()))
                                            if (n.filename) {
                                                a.set(n.filename, r);
                                                break;
                                            }
                                    }
                                }
                        })(r),
                        a.get(o));
                    t && (E.module_metadata = t);
                }
        });
    } catch (e) {}
}
function E(e) {
    try {
        e.exception.values.forEach((e) => {
            if (!!e.stacktrace) for (let t of e.stacktrace.frames || []) delete t.module_metadata;
        });
    } catch (e) {}
}
