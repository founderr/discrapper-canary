e.d(t, {
    U: function () {
        return d;
    }
});
var i = e(592125),
    o = e(944486),
    r = e(585483),
    l = e(981631);
let d = {
    binds: ['mod+shift+u'],
    comboKeysBindGlobal: !0,
    action() {
        let n = i.Z.getChannel(o.Z.getChannelId());
        return null != n && !n.isManaged() && r.S.dispatch(l.CkL.UPLOAD_FILE), !1;
    }
};
