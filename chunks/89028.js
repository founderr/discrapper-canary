e.d(t, {
    f: function () {
        return r;
    }
});
var i = e(2818),
    l = e(585483),
    o = e(981631);
let r = {
    binds: ['mod+l'],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: n, inInbox: t } = i.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
        if (n && !t) return l.S.dispatch(o.CkL.TOGGLE_FOR_LATER), !1;
    }
};
