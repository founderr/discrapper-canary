n.d(t, {
    R: function () {
        return s;
    }
});
var i = n(442837),
    l = n(998698),
    r = n(873387),
    a = n(424602);
function s(e) {
    let { channel: t, chatInputType: n, location: s } = e,
        o = a.T.useExperiment({ location: s }, { autoTrackExposure: !0 }).enabled,
        c = (0, r.g)(t),
        { activeCommand: d } = (0, i.cj)([l.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? l.Z.getActiveCommand(t.id) : null };
        });
    return o && null == d && c;
}
