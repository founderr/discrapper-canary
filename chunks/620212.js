t.d(n, {
    U: function () {
        return r;
    }
});
var i = t(592125),
    o = t(944486),
    l = t(585483),
    E = t(981631);
let r = {
    binds: ['mod+shift+u'],
    comboKeysBindGlobal: !0,
    action() {
        let e = i.Z.getChannel(o.Z.getChannelId());
        return null != e && !e.isManaged() && l.S.dispatch(E.CkL.UPLOAD_FILE), !1;
    }
};
