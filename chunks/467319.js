n.d(e, {
    H: function () {
        return i;
    },
    a: function () {
        return l;
    }
});
var r = n(460083);
function i(t) {
    let { enabled: e } = r.d.getCurrentConfig({
        guildId: t,
        location: '988d4e_3'
    });
    return e;
}
function l(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = r.d.useExperiment(
            {
                guildId: t,
                location: '988d4e_4'
            },
            { autoTrackExposure: e }
        );
    return n;
}
