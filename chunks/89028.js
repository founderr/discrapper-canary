e.d(t, {
    f: function () {
        return l;
    }
});
var i = e(2818),
    o = e(585483),
    r = e(981631);
let l = {
    binds: ['mod+l'],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: n, inInbox: t } = i.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
        if (n && !t) return o.S.dispatch(r.CkL.TOGGLE_FOR_LATER), !1;
    }
};
