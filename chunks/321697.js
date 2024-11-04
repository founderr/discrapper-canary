i.d(t, {
    r: function () {
        return e;
    }
});
var o = i(481060),
    r = i(560067),
    E = i(675999);
let e = {
    binds: ['mod+shift+n'],
    comboKeysBindGlobal: !0,
    action() {
        (0, o.hasModalOpen)(E.PU)
            ? r.Z.updateCreateGuildModal({
                  slide: E._m.JOIN_GUILD,
                  location: 'Keyboard Shortcut'
              })
            : r.Z.openCreateGuildModal({ location: 'Keyboard Shortcut' });
    }
};
