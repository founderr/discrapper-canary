e.d(t, {
    r: function () {
        return r;
    }
});
var i = e(481060),
    l = e(560067),
    o = e(675999);
let r = {
    binds: ['mod+shift+n'],
    comboKeysBindGlobal: !0,
    action() {
        (0, i.hasModalOpen)(o.PU)
            ? l.Z.updateCreateGuildModal({
                  slide: o._m.JOIN_GUILD,
                  location: 'Keyboard Shortcut'
              })
            : l.Z.openCreateGuildModal({ location: 'Keyboard Shortcut' });
    }
};
