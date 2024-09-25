let r, i;
n.d(t, {
    $: function () {
        return E;
    },
    i: function () {
        return _;
    }
});
var a = n(653041);
var o = n(47120);
var s = n(177593);
var l = n(570140),
    u = n(229588),
    c = n(689938);
r = n(330711).Z;
let d = !1;
function _(e) {
    (i = c.Z.loadPromise), r && r.setLocale(e), c.Z.setLocale(e), E(e);
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (d && c.Z.loadPromise === i) return;
    (d = !0),
        t
            ? (0, u.f)(e)
            : l.Z.dispatch({
                  type: 'I18N_LOAD_START',
                  locale: e
              });
    let n = [c.Z.loadPromise];
    r && n.push(r.loadPromise);
    let a = Promise.all(n);
    setImmediate(() => {
        a.then(() => {
            l.Z.dispatch({
                type: 'I18N_LOAD_SUCCESS',
                locale: e
            });
        }).catch((t) => {
            l.Z.dispatch({
                type: 'I18N_LOAD_ERROR',
                error: t,
                locale: e
            });
        });
    });
}
