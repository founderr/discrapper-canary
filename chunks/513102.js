t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(132871),
    r = t(147890),
    o = t(388032);
function u(e) {
    return (0, i.jsx)(l.MenuItem, {
        id: 'application-directory',
        label: (0, i.jsx)(i.Fragment, { children: o.intl.string(o.t.AKcFUl) }),
        icon: l.AppsIcon,
        action: () => {
            (0, r.goToAppDirectory)({
                guildId: e.id,
                entrypoint: { name: a.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT }
            });
        }
    });
}
