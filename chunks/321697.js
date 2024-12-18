e.d(t, {
    r: function () {
        return l;
    }
});
var i = e(481060),
    o = e(560067),
    r = e(675999);
let l = {
    binds: ['mod+shift+n'],
    comboKeysBindGlobal: !0,
    action() {
        (0, i.hasModalOpen)(r.PU)
            ? o.Z.updateCreateGuildModal({
                  slide: r._m.JOIN_GUILD,
                  location: 'Keyboard Shortcut'
              })
            : o.Z.openCreateGuildModal({ location: 'Keyboard Shortcut' });
    }
};
