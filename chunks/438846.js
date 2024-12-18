e.d(t, {
    K: function () {
        return l;
    }
});
var i = e(475468),
    o = e(19780),
    r = e(981631);
let l = {
    binds: ['mod+shift+alt+v'],
    comboKeysBindGlobal: !0,
    action(n) {
        n.preventDefault(), n.stopPropagation();
        let t = o.Z.getGuildId(),
            e = o.Z.getChannelId();
        return null != e && (0, i.K)(null != t ? t : r.ME, e), !1;
    }
};
