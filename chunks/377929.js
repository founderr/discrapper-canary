n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(392711),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(32750),
    u = n(109764),
    d = n(323597),
    h = n(438536),
    p = n(251746),
    m = n(193987),
    _ = n(933793),
    f = n(13736),
    E = n(732393),
    g = n(137591),
    C = n(299206),
    I = n(665149),
    T = n(695346),
    x = n(979651),
    v = n(488131),
    S = n(689938);
function N(e) {
    let { channel: t } = e,
        [n, a] = s.useState(!1);
    function l() {
        a((e) => !e);
    }
    let r = S.Z.Messages.MORE;
    return (0, i.jsx)(o.Popout, {
        shouldShow: n,
        animation: o.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(A, {
                ...e,
                channel: t
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(I.ZP.Icon, {
                ...e,
                onClick: l,
                tooltip: n ? null : r,
                icon: o.MoreHorizontalIcon,
                'aria-label': r,
                selected: n
            });
        }
    });
}
function A(e) {
    let { channel: t, closePopout: n, onSelect: s } = e,
        a = (0, c.Z)(t),
        I = (0, m.Z)(t),
        N = (0, E.Z)(t.id),
        A = (0, f.Z)(t),
        Z = (0, C.Z)({
            id: t.id,
            label: S.Z.Messages.COPY_ID_THREAD
        }),
        M = (0, u.Z)(t),
        b = (0, d.Z)(t),
        R = (0, h.Z)(t, 'Toolbar Overflow'),
        L = (0, _.Z)(t),
        j = (0, p.Z)(t),
        P = (0, g.Z)(t),
        O = T.vF.useSetting(),
        y = (0, r.e7)([x.Z], () => !l().isEmpty(x.Z.getVoiceStatesForChannel(t.id)));
    return (0, i.jsxs)(o.Menu, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': S.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
        onSelect: s,
        children: [
            (0, i.jsxs)(o.MenuGroup, {
                children: [R, j]
            }),
            (0, i.jsxs)(o.MenuGroup, {
                children: [
                    A,
                    L,
                    N,
                    O && !y
                        ? (0, i.jsx)(o.MenuItem, {
                              id: 'open',
                              label: S.Z.Messages.OPEN_IN_SPLIT_VIEW,
                              action: function () {
                                  (0, v.ok)(t);
                              }
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(o.MenuGroup, {
                children: [P, a, I, b]
            }),
            (0, i.jsxs)(o.MenuGroup, {
                children: [M, Z]
            })
        ]
    });
}
