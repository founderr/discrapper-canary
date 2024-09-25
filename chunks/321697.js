t.d(n, {
    r: function () {
        return E;
    }
});
var i = t(481060),
    o = t(560067),
    l = t(675999);
let E = {
    binds: ['mod+shift+n'],
    comboKeysBindGlobal: !0,
    action() {
        (0, i.hasModalOpen)(l.PU)
            ? o.Z.updateCreateGuildModal({
                  slide: l._m.JOIN_GUILD,
                  location: 'Keyboard Shortcut'
              })
            : o.Z.openCreateGuildModal({ location: 'Keyboard Shortcut' });
    }
};
