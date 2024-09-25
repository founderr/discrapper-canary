t.d(n, {
    iN: function () {
        return o;
    },
    oV: function () {
        return l;
    }
});
var i = t(846027);
let o = {
        binds: ['mod+shift+m'],
        comboKeysBindGlobal: !0,
        action: () => (
            i.Z.toggleSelfMute({
                usedKeybind: !0,
                location: 'Default Keybind'
            }),
            !1
        )
    },
    l = {
        binds: ['mod+shift+d'],
        comboKeysBindGlobal: !0,
        action: () => (i.Z.toggleSelfDeaf(), !1)
    };
