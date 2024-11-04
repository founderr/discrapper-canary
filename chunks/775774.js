i.d(t, {
    p: function () {
        return r;
    }
});
var o = i(358085);
let r = {
    binds: ['mod+alt+i'],
    comboKeysBindGlobal: !0,
    action(n) {
        if ((0, o.isWeb)() && 'discord.com' === location.host) return n.preventDefault(), n.stopPropagation(), !1;
    }
};
