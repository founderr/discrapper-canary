r.d(n, {
    Am: function () {
        return f;
    },
    ZP: function () {
        return _;
    },
    s$: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(430824),
    l = r(275759),
    u = r(388032);
let c = 'guild-connection-roles';
function d() {
    return {
        modalKey: c,
        contextKey: s.DEFAULT_MODAL_CONTEXT,
        onCloseRequest: () => {
            (0, s.closeModal)(c, s.DEFAULT_MODAL_CONTEXT);
        }
    };
}
function f(e) {
    (0, s.openModalLazy)(async () => {
        let { default: n } = await r.e('40897').then(r.bind(r, 507294));
        return (r) =>
            (0, i.jsx)(n, {
                ...r,
                guildId: e
            });
    }, d());
}
function _(e) {
    return (0, a.e7)([o.Z], () => (0, l.kQ)(e, o.Z.getRoles(e.id)), [e])
        ? (0, i.jsx)(s.MenuItem, {
              id: 'guild-connection-roles',
              label: u.intl.string(u.t.ghtnsr),
              icon: s.LinkIcon,
              action: () => f(e.id)
          })
        : null;
}
