i.d(t, {
    f: function () {
        return e;
    }
});
var o = i(2818),
    r = i(585483),
    E = i(981631);
let e = {
    binds: ['mod+l'],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: n, inInbox: t } = o.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
        if (n && !t) return r.S.dispatch(E.CkL.TOGGLE_FOR_LATER), !1;
    }
};
