r.d(t, {
    D2: function () {
        return c;
    },
    Hj: function () {
        return i;
    },
    rK: function () {
        return s;
    }
});
var n = r(309544),
    a = r(622916),
    _ = r(688838);
let o = {},
    E = {};
function i(e, t) {
    (o[e] = o[e] || []), o[e].push(t);
}
function c(e, t) {
    !E[e] && (t(), (E[e] = !0));
}
function s(e, t) {
    let r = e && o[e];
    if (!!r)
        for (let o of r)
            try {
                o(t);
            } catch (t) {
                n.X &&
                    a.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, _.$P)(o)}
Error:`,
                        t
                    );
            }
}
