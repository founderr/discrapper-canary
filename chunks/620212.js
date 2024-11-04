i.d(t, {
    U: function () {
        return s;
    }
});
var o = i(592125),
    r = i(944486),
    E = i(585483),
    e = i(981631);
let s = {
    binds: ['mod+shift+u'],
    comboKeysBindGlobal: !0,
    action() {
        let n = o.Z.getChannel(r.Z.getChannelId());
        return null != n && !n.isManaged() && E.S.dispatch(e.CkL.UPLOAD_FILE), !1;
    }
};
