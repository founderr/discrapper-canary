t.d(n, {
    Z: function () {
        return l;
    }
});
var u = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    c = t(45114),
    s = t(306680),
    d = t(490897),
    a = t(388032);
function l(e) {
    let n = (0, i.e7)([s.ZP], () => s.ZP.hasUnread(e, d.W.GUILD_EVENT), [e]);
    return (0, u.jsx)(r.MenuItem, {
        id: 'mark-events-read',
        label: a.intl.string(a.t.e6RscX),
        action: function () {
            (0, c.Ju)(e, d.W.GUILD_EVENT);
        },
        disabled: !n
    });
}
