n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(235820),
    s = n(592125),
    l = n(944486),
    u = n(455199);
n(288552);
var c = n(981631),
    d = n(689938),
    _ = n(811304);
let E = 'Everyone',
    f = 'Roles',
    h = 'All Servers';
function p(e) {
    let { closePopout: t, onSelect: n } = e,
        _ = (0, i.e7)([s.Z, l.Z], () => s.Z.getChannel(l.Z.getChannelId())),
        {
            everyoneFilter: p,
            roleFilter: m,
            guildFilter: I
        } = (0, i.cj)([u.Z], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = u.Z;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n
            };
        });
    function T() {
        o.Z.setGuildFilter({ guildFilter: I === c.NgX.THIS_SERVER ? c.NgX.ALL_SERVERS : c.NgX.THIS_SERVER });
    }
    function g() {
        o.Z.setGuildFilter({ roleFilter: !m });
    }
    function S() {
        o.Z.setGuildFilter({ everyoneFilter: !p });
    }
    return (0, r.jsxs)(a.Menu, {
        navId: 'mentions-filter',
        'aria-label': d.Z.Messages.FILTER,
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(a.MenuCheckboxItem, {
                id: E,
                label: d.Z.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
                action: S,
                checked: p
            }),
            (0, r.jsx)(a.MenuCheckboxItem, {
                id: f,
                label: d.Z.Messages.RECENT_MENTIONS_FILTER_ROLES,
                action: g,
                checked: m
            }),
            null == _ || _.isPrivate()
                ? null
                : (0, r.jsx)(a.MenuCheckboxItem, {
                      id: h,
                      label: d.Z.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
                      action: T,
                      checked: I === c.NgX.ALL_SERVERS
                  })
        ]
    });
}
function m() {
    return (0, r.jsx)(a.Popout, {
        align: 'right',
        animation: a.Popout.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(p, { closePopout: t });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(a.CircleIconButton, {
                tooltip: d.Z.Messages.FILTER,
                color: a.CircleIconButtonColors.TERTIARY,
                icon: (0, r.jsx)(a.FiltersHorizontalIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                className: _.controlButton,
                onClick: t
            });
        }
    });
}
