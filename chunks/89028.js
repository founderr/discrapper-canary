t.d(n, {
    f: function () {
        return E;
    }
});
var i = t(2818),
    o = t(585483),
    l = t(981631);
let E = {
    binds: ['mod+l'],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: e, inInbox: n } = i.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
        if (e && !n) return o.S.dispatch(l.CkL.TOGGLE_FOR_LATER), !1;
    }
};
