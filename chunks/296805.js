i.d(t, {
    T: function () {
        return e;
    }
});
var o = i(132871),
    r = i(147890),
    E = i(914010);
let e = {
    binds: ['mod+ctrl+a'],
    comboKeysBindGlobal: !0,
    action() {
        var n;
        let t = null !== (n = E.Z.getGuildId()) && void 0 !== n ? n : void 0;
        (0, r.goToAppDirectory)({
            guildId: t,
            entrypoint: { name: o.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT }
        });
    }
};
