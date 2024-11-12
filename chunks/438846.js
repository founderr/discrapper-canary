e.d(t, {
    K: function () {
        return r;
    }
});
var i = e(475468),
    l = e(19780),
    o = e(981631);
let r = {
    binds: ['mod+shift+alt+v'],
    comboKeysBindGlobal: !0,
    action(n) {
        n.preventDefault(), n.stopPropagation();
        let t = l.Z.getGuildId(),
            e = l.Z.getChannelId();
        return null != e && (0, i.K)(null != t ? t : o.ME, e), !1;
    }
};
