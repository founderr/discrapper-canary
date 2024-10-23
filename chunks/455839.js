n.r(t),
    n.d(t, {
        GuildDiscoveryMenuPopout: function () {
            return I;
        },
        default: function () {
            return m;
        }
    });
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(239091),
    o = n(299206),
    c = n(726521),
    d = n(430824),
    u = n(496675),
    _ = n(556017),
    E = n(981631),
    h = n(689938);
function m(e) {
    let { guild: t, shiftId: n, onSelect: m, closePopout: I, 'aria-label': p } = e,
        g = (0, o.Z)({
            id: t.id,
            label: h.Z.Messages.COPY_ID_GUILD,
            shiftId: n,
            onSuccess: I
        }),
        T = (0, s.e7)([d.Z], () => d.Z.getGuild(t.id), [t.id]),
        C = (0, s.e7)([u.Z], () => u.Z.can(E.Plq.ADMINISTRATOR, T)),
        { canSeeInAppReportingButtons: f } = _.N.useExperiment({ location: '0e35b9_1' }, { autoTrackExposure: !1 }),
        S = () => {
            (0, l.Zy)(), null == I || I();
        },
        N = a.useCallback((e) => {
            e.stopPropagation();
        }, []);
    return (0, i.jsx)(r.Clickable, {
        onClick: N,
        children: (0, i.jsxs)(r.Menu, {
            onSelect: m,
            navId: 'guild-discovery-context-menu',
            'aria-label': null != p ? p : h.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
            onClose: l.Zy,
            children: [
                (0, i.jsx)(r.MenuGroup, {
                    children:
                        !C && f
                            ? (0, i.jsx)(r.MenuItem, {
                                  id: 'report-guild-discovery-listing',
                                  label: h.Z.Messages.REPORT_SERVER_NO_NAME,
                                  action: () => {
                                      (0, c.lt)(t), S();
                                  },
                                  icon: r.FlagIcon,
                                  color: 'danger'
                              })
                            : null
                }),
                (0, i.jsx)(r.MenuGroup, { children: g })
            ]
        })
    });
}
let I = (e) => {
    let { guild: t, children: n, onRequestOpen: a, onRequestClose: s } = e;
    return (0, i.jsx)(r.Popout, {
        onRequestOpen: a,
        onRequestClose: s,
        animation: r.Popout.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(m, {
                guild: t,
                closePopout: n
            });
        },
        children: n
    });
};
