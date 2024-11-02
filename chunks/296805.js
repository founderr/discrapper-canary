e.d(t, {
    T: function () {
        return r;
    }
});
var i = e(132871),
    l = e(147890),
    o = e(914010);
let r = {
    binds: ['mod+ctrl+a'],
    comboKeysBindGlobal: !0,
    action() {
        var n;
        let t = null !== (n = o.Z.getGuildId()) && void 0 !== n ? n : void 0;
        (0, l.goToAppDirectory)({
            guildId: t,
            entrypoint: { name: i.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT }
        });
    }
};
