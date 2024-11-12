e.d(t, {
    U: function () {
        return u;
    }
});
var i = e(592125),
    l = e(944486),
    o = e(585483),
    r = e(981631);
let u = {
    binds: ['mod+shift+u'],
    comboKeysBindGlobal: !0,
    action() {
        let n = i.Z.getChannel(l.Z.getChannelId());
        return null != n && !n.isManaged() && o.S.dispatch(r.CkL.UPLOAD_FILE), !1;
    }
};
