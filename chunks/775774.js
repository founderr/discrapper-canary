e.d(t, {
    p: function () {
        return o;
    }
});
var i = e(358085);
let o = {
    binds: ['mod+alt+i'],
    comboKeysBindGlobal: !0,
    action(n) {
        if ((0, i.isWeb)() && 'discord.com' === location.host) return n.preventDefault(), n.stopPropagation(), !1;
    }
};
