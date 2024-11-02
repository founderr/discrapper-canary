n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(235820),
    o = n(592125),
    s = n(944486),
    c = n(455199);
n(288552);
var u = n(981631),
    d = n(388032),
    m = n(811304);
function f(e) {
    let { closePopout: t, onSelect: n } = e,
        m = (0, r.e7)([o.Z, s.Z], () => o.Z.getChannel(s.Z.getChannelId())),
        {
            everyoneFilter: f,
            roleFilter: h,
            guildFilter: p
        } = (0, r.cj)([c.Z], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = c.Z;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n
            };
        });
    return (0, i.jsxs)(l.Menu, {
        navId: 'mentions-filter',
        'aria-label': d.intl.string(d.t.pEasFR),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(l.MenuCheckboxItem, {
                id: 'Everyone',
                label: d.intl.string(d.t.cdyUsb),
                action: function () {
                    a.Z.setGuildFilter({ everyoneFilter: !f });
                },
                checked: f
            }),
            (0, i.jsx)(l.MenuCheckboxItem, {
                id: 'Roles',
                label: d.intl.string(d.t.lZejCg),
                action: function () {
                    a.Z.setGuildFilter({ roleFilter: !h });
                },
                checked: h
            }),
            null == m || m.isPrivate()
                ? null
                : (0, i.jsx)(l.MenuCheckboxItem, {
                      id: 'All Servers',
                      label: d.intl.string(d.t.GWMA6u),
                      action: function () {
                          a.Z.setGuildFilter({ guildFilter: p === u.NgX.THIS_SERVER ? u.NgX.ALL_SERVERS : u.NgX.THIS_SERVER });
                      },
                      checked: p === u.NgX.ALL_SERVERS
                  })
        ]
    });
}
function h() {
    return (0, i.jsx)(l.Popout, {
        align: 'right',
        animation: l.Popout.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(f, { closePopout: t });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(l.CircleIconButton, {
                tooltip: d.intl.string(d.t.pEasFR),
                color: l.CircleIconButtonColors.TERTIARY,
                icon: (0, i.jsx)(l.FiltersHorizontalIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                className: m.controlButton,
                onClick: t
            });
        }
    });
}
