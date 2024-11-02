n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(32750),
    s = n(323597),
    o = n(438536),
    c = n(193987),
    u = n(933793),
    d = n(13736),
    h = n(732393),
    m = n(214906),
    p = n(612856),
    f = n(137591),
    g = n(299206),
    C = n(727429),
    x = n(665149),
    v = n(359110),
    _ = n(585483),
    I = n(739830),
    E = n(488131),
    b = n(981631),
    S = n(388032);
function Z(e) {
    let { channel: t } = e,
        [n, a] = l.useState(!1);
    function s() {
        a((e) => !e);
    }
    let o = S.intl.string(S.t.UKOtz8);
    return (0, i.jsx)(r.Popout, {
        shouldShow: n,
        animation: r.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(T, {
                ...e,
                channel: t
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(x.ZP.Icon, {
                ...e,
                onClick: s,
                tooltip: n ? null : o,
                icon: r.MoreHorizontalIcon,
                'aria-label': o,
                selected: n
            });
        }
    });
}
function T(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        C = (0, o.Z)(t, 'Sidebar Overflow'),
        x = (0, u.Z)(t),
        I = (0, m.Z)(t),
        E = (0, p.Z)(t),
        Z = (0, a.Z)(t),
        T = (0, c.Z)(t),
        N = (0, h.Z)(t.id),
        j = (0, d.Z)(t),
        A = (0, s.Z)(t),
        y = (0, g.Z)({
            id: t.id,
            label: S.intl.string(S.t.DQ797u)
        }),
        P = (0, f.Z)(t);
    function M() {
        (0, v.Kh)(t.id);
    }
    return (0, i.jsxs)(r.Menu, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': S.intl.string(S.t['1NBjqa']),
        onSelect: l,
        children: [
            (0, i.jsxs)(r.MenuGroup, {
                children: [
                    C,
                    (0, i.jsx)(r.MenuItem, {
                        id: 'open',
                        label: S.intl.string(S.t.IxVmZm),
                        action: M
                    })
                ]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [I, E]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [j, x, N]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [
                    (0, i.jsx)(r.MenuItem, {
                        id: 'search',
                        label: S.intl.string(S.t['5h0QOD']),
                        icon: r.WindowLaunchIcon,
                        action: function () {
                            M(),
                                setTimeout(() => {
                                    _.S.dispatch(b.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2000);
                        }
                    }),
                    (0, i.jsx)(r.MenuItem, {
                        id: 'pins',
                        label: S.intl.string(S.t['2BSH7u']),
                        icon: r.WindowLaunchIcon,
                        action: function () {
                            M(), _.S.dispatch(b.CkL.TOGGLE_CHANNEL_PINS);
                        }
                    })
                ]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [P, Z, T, A]
            }),
            (0, i.jsx)(r.MenuGroup, { children: y })
        ]
    });
}
function N(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.isForumPost() ? null : (0, i.jsx)(I.Z, { channel: t }),
            (0, i.jsx)(Z, { channel: t }),
            (0, i.jsx)(x.ZP.Icon, {
                icon: r.XSmallIcon,
                tooltip: S.intl.string(S.t.cpT0Cg),
                onClick: () => (0, E.vN)((0, C.e)(t), null != n ? n : t.parent_id)
            })
        ]
    });
}
