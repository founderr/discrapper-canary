t.d(n, {
    T: function () {
        return E;
    }
});
var i = t(132871),
    o = t(147890),
    l = t(914010);
let E = {
    binds: ['mod+ctrl+a'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        let n = null !== (e = l.Z.getGuildId()) && void 0 !== e ? e : void 0;
        (0, o.goToAppDirectory)({
            guildId: n,
            entrypoint: { name: i.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT }
        });
    }
};
