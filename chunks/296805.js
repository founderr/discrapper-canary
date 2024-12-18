e.d(t, {
    T: function () {
        return l;
    }
});
var i = e(132871),
    o = e(147890),
    r = e(914010);
let l = {
    binds: ['mod+ctrl+a'],
    comboKeysBindGlobal: !0,
    action() {
        var n;
        let t = null !== (n = r.Z.getGuildId()) && void 0 !== n ? n : void 0;
        (0, o.goToAppDirectory)({
            guildId: t,
            entrypoint: { name: i.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT }
        });
    }
};
