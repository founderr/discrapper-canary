t.d(n, {
    z: function () {
        return E;
    }
});
var i = t(607070),
    o = t(585483),
    l = t(981631);
let E = {
    binds: ['return'],
    action() {
        if (!i.Z.keyboardModeEnabled && o.S.hasSubscribers(l.CkL.MODAL_SUBMIT)) return o.S.dispatch(l.CkL.MODAL_SUBMIT), !1;
    }
};
