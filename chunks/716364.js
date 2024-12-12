r.d(n, {
    c: function () {
        return l;
    }
});
var i = r(570140),
    a = r(626135),
    s = r(474873),
    o = r(981631);
function l(e, n) {
    a.default.track(o.rMx.SOUNDPACK_UPDATED, {
        soundpack: e,
        previous_soundpack: s.Z.getSoundpack()
    }),
        i.Z.dispatch({
            type: 'SET_SOUNDPACK',
            soundpack: e,
            forExperimentId: n
        });
}
