n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(481060),
    l = n(32750),
    r = n(323597),
    o = n(438536),
    c = n(193987),
    u = n(933793),
    d = n(13736),
    h = n(732393),
    m = n(214906),
    p = n(612856),
    _ = n(137591),
    f = n(299206),
    E = n(727429),
    g = n(665149),
    C = n(359110),
    I = n(585483),
    x = n(739830),
    T = n(488131),
    v = n(981631),
    S = n(689938);
function N(e) {
    let { channel: t } = e,
        [n, l] = s.useState(!1);
    function r() {
        l((e) => !e);
    }
    let o = S.Z.Messages.MORE;
    return (0, i.jsx)(a.Popout, {
        shouldShow: n,
        animation: a.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(Z, {
                ...e,
                channel: t
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(g.ZP.Icon, {
                ...e,
                onClick: r,
                tooltip: n ? null : o,
                icon: a.MoreHorizontalIcon,
                'aria-label': o,
                selected: n
            });
        }
    });
}
function Z(e) {
    let { channel: t, closePopout: n, onSelect: s } = e,
        E = (0, o.Z)(t, 'Sidebar Overflow'),
        g = (0, u.Z)(t),
        x = (0, m.Z)(t),
        T = (0, p.Z)(t),
        N = (0, l.Z)(t),
        Z = (0, c.Z)(t),
        A = (0, h.Z)(t.id),
        M = (0, d.Z)(t),
        b = (0, r.Z)(t),
        R = (0, f.Z)({
            id: t.id,
            label: S.Z.Messages.COPY_ID_THREAD
        }),
        L = (0, _.Z)(t);
    function j() {
        (0, C.Kh)(t.id);
    }
    return (0, i.jsxs)(a.Menu, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': S.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
        onSelect: s,
        children: [
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    E,
                    (0, i.jsx)(a.MenuItem, {
                        id: 'open',
                        label: S.Z.Messages.OPEN_IN_FULL_VIEW,
                        action: j
                    })
                ]
            }),
            (0, i.jsxs)(a.MenuGroup, {
                children: [x, T]
            }),
            (0, i.jsxs)(a.MenuGroup, {
                children: [M, g, A]
            }),
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    (0, i.jsx)(a.MenuItem, {
                        id: 'search',
                        label: S.Z.Messages.SEARCH,
                        icon: a.WindowLaunchIcon,
                        action: function () {
                            j(),
                                setTimeout(() => {
                                    I.S.dispatch(v.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2000);
                        }
                    }),
                    (0, i.jsx)(a.MenuItem, {
                        id: 'pins',
                        label: S.Z.Messages.PINS,
                        icon: a.WindowLaunchIcon,
                        action: function () {
                            j(), I.S.dispatch(v.CkL.TOGGLE_CHANNEL_PINS);
                        }
                    })
                ]
            }),
            (0, i.jsxs)(a.MenuGroup, {
                children: [L, N, Z, b]
            }),
            (0, i.jsx)(a.MenuGroup, { children: R })
        ]
    });
}
function A(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.isForumPost() ? null : (0, i.jsx)(x.Z, { channel: t }),
            (0, i.jsx)(N, { channel: t }),
            (0, i.jsx)(g.ZP.Icon, {
                icon: a.XSmallIcon,
                tooltip: S.Z.Messages.CLOSE,
                onClick: () => (0, T.vN)((0, E.e)(t), null != n ? n : t.parent_id)
            })
        ]
    });
}
