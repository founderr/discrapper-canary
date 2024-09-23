n.d(t, {
    D: function () {
        return d;
    },
    T: function () {
        return c;
    }
});
var s = n(735250);
n(470079);
var a = n(481060),
    r = n(570140),
    i = n(955204),
    o = n(510273),
    l = n(689938);
function c(e) {
    r.Z.dispatch({
        type: 'POGGERMODE_ACHIEVEMENT_UNLOCK',
        achievementId: e
    });
}
function d(e, t) {
    let n = (0, i.oX)(e);
    if (null != n)
        (0, a.showToast)(
            (0, a.createToast)(l.Z.Messages.POGGERMODE_ACHIEVEMENTS, a.ToastType.CUSTOM, {
                position: a.ToastPosition.BOTTOM,
                component: (0, s.jsx)(o.Z, {
                    achievement: n,
                    unlocked: t
                }),
                duration: 6000
            })
        );
}
