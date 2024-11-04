i.d(t, {
    K: function () {
        return e;
    }
});
var o = i(475468),
    r = i(19780),
    E = i(981631);
let e = {
    binds: ['mod+shift+alt+v'],
    comboKeysBindGlobal: !0,
    action(n) {
        n.preventDefault(), n.stopPropagation();
        let t = r.Z.getGuildId(),
            i = r.Z.getChannelId();
        return null != i && (0, o.K)(null != t ? t : E.ME, i), !1;
    }
};
