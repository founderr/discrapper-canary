r.d(n, {
    p: function () {
        return o;
    },
    y: function () {
        return s;
    }
});
var i = r(482833),
    a = r(981631);
function s(e, n) {
    let { enabled: r } = i.c.useExperiment({
        guildId: null != e ? e : a.lds,
        location: n
    });
    return r;
}
function o(e, n) {
    let { enabled: r } = i.c.getCurrentConfig({
        guildId: null != e ? e : a.lds,
        location: n
    });
    return r;
}
