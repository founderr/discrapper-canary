r.d(t, {
    CC: function () {
        return E;
    },
    GY: function () {
        return o;
    }
});
var a = r(899517);
let n = new Map(),
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
                            if (!!a.n._sentryModuleMetadata)
                                for (let t of Object.keys(a.n._sentryModuleMetadata)) {
                                    let r = a.n._sentryModuleMetadata[t];
                                    if (!_.has(t)) {
                                        for (let a of (_.add(t), e(t).reverse()))
                                            if (a.filename) {
                                                n.set(a.filename, r);
                                                break;
                                            }
                                    }
                                }
                        })(r),
                        n.get(o));
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
