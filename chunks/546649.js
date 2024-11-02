e.r(t),
    e.d(t, {
        default: function () {
            return a;
        }
    });
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(239091),
    o = e(299206),
    c = e(461757),
    u = e(388032);
function a(n) {
    let { channel: t, channelId: e, originalLink: a, messageId: s, onSelect: d } = n,
        h = (0, c.Z)(t, a, s),
        p = (0, o.Z)({
            id: e,
            label: u.intl.string(u.t.gFHI3t)
        });
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-mention-context',
        onClose: l.Zy,
        onSelect: d,
        'aria-label': u.intl.string(u.t.feGACA),
        children: [(0, i.jsx)(r.MenuGroup, { children: h }, 'channel-mention-actions'), (0, i.jsx)(r.MenuGroup, { children: p }, 'developer-actions')]
    });
}
