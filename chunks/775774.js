t.d(n, {
    p: function () {
        return o;
    }
});
var i = t(358085);
let o = {
    binds: ['mod+alt+i'],
    comboKeysBindGlobal: !0,
    action(e) {
        if ((0, i.isWeb)() && 'discord.com' === location.host) return e.preventDefault(), e.stopPropagation(), !1;
    }
};
