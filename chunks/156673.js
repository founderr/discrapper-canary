t.r(e),
    t.d(e, {
        default: function () {
            return d;
        }
    });
var r = t(200651);
t(192379);
var i = t(481060),
    u = t(239091),
    l = t(637853),
    o = t(434404),
    a = t(837949),
    s = t(981631),
    c = t(388032);
function d(n) {
    let { guild: e, onSelect: t } = n,
        d = (0, a.Z)(e.id),
        f = (0, l.wC)(e.id);
    return (0, r.jsx)(i.Menu, {
        onSelect: t,
        navId: 'guild-browse-channels-context-menu',
        'aria-label': c.intl.string(c.t.ogxXGh),
        onClose: u.Zy,
        children: (0, r.jsxs)(i.MenuGroup, {
            children: [
                f &&
                    (0, r.jsx)(i.MenuItem, {
                        id: 'go-to-settings',
                        label: c.intl.string(c.t.X70lV1),
                        action: () => {
                            o.Z.open(e.id, s.pNK.ONBOARDING);
                        }
                    }),
                d
            ]
        })
    });
}
