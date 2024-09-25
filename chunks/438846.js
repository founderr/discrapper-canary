t.d(n, {
    K: function () {
        return E;
    }
});
var i = t(475468),
    o = t(19780),
    l = t(981631);
let E = {
    binds: ['mod+shift+alt+v'],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let n = o.Z.getGuildId(),
            t = o.Z.getChannelId();
        return null != t && (0, i.K)(null != n ? n : l.ME, t), !1;
    }
};
