t.d(e, {
    U: function () {
        return N;
    },
    Uf: function () {
        return E;
    },
    ng: function () {
        return j;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(442837),
    u = t(704215),
    a = t(481060),
    o = t(436774),
    d = t(706140),
    s = t(9156),
    c = t(594174),
    f = t(74538),
    I = t(759198),
    g = t(11352),
    x = t(213931),
    _ = t(767157),
    h = t(112440),
    M = t(671105),
    m = t(552958),
    p = t(981631),
    v = t(921944),
    C = t(871465),
    Z = t(388032),
    T = t(100210);
function j(n, e) {
    let t = g.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        l = S(n, void 0, u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, t.nestedEntry ? 'trailing' : 'top'),
        r = (t.nestedEntry && e) || (!t.nestedEntry && !e);
    return (0, i.jsx)(i.Fragment, { children: r && l });
}
function E(n, e, t) {
    return S(n, e, u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
}
function N() {
    let n = g.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [e] = (0, d.cv)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (0, i.jsx)(i.Fragment, {
        children:
            n.enabled &&
            n.nestedEntry &&
            e === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, i.jsx)(a.TextBadge, {
                className: T.newBadge,
                text: Z.intl.string(Z.t.y2b7CA)
            })
    });
}
function S(n, e, u, j) {
    var E, N;
    let S = (0, M.OR)(n),
        O = (0, M._c)(n, e),
        U = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        A = (0, r.e7)([s.ZP], () => s.ZP.isMuted(n), [n]),
        P = f.ZP.canUseCustomNotificationSounds(U),
        b = P ? (null != O ? O : S) : C.YC.CLASSIC,
        y = g.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [G, R] = l.useState(!1),
        { playSound: D } = (0, m.Z)(),
        [L, F] = (0, d.cv)([u]),
        k = L === u;
    if (
        (l.useEffect(
            () => () => {
                G && F(v.L.TAKE_ACTION);
            },
            [G, F]
        ),
        !y)
    )
        return null;
    let w = (t) => {
            if ((D(t), F(v.L.TAKE_ACTION), !P && t !== C.YC.CLASSIC)) {
                (0, _.Z)(t, 'contextMenu'), (0, h.Z)();
                return;
            }
            null != e ? (0, x.M)(n, e, b, t, 'contextMenu') : (0, x.t)(n, b, t, 'contextMenu');
        },
        z = P ? a.Text : I.Z,
        Y = (0, C.LB)(),
        B = null !== (N = null === (E = Y.find((n) => n.value === b)) || void 0 === E ? void 0 : E.label) && void 0 !== N ? N : Z.intl.string(Z.t.p3Hg5e),
        V = (0, i.jsx)(a.TextBadge, {
            className: T.newBadge,
            text: Z.intl.string(Z.t.y2b7CA)
        });
    return (0, i.jsx)(a.MenuItem, {
        id: 'notification-sounds',
        label: (n) => {
            let { isFocused: e } = n;
            return (
                e && R(e),
                (0, i.jsxs)('div', {
                    className: T.rootContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                k && 'top' === j && V,
                                (0, i.jsxs)('div', {
                                    className: T.headerContainer,
                                    children: [
                                        (0, i.jsx)(z, {
                                            className: T.text,
                                            color: e ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: Z.intl.string(Z.t.mrqSOj)
                                        }),
                                        (0, i.jsx)(a.NitroWheelIcon, {
                                            size: 'xs',
                                            className: T.nitroWheel,
                                            color: e ? 'white' : P ? void 0 : o.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != B &&
                                    (0, i.jsx)(z, {
                                        className: T.text,
                                        color: e ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: B
                                    })
                            ]
                        }),
                        k && 'trailing' === j && V
                    ]
                })
            );
        },
        action:
            n !== p.aIL
                ? () =>
                      (0, a.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([t.e('5863'), t.e('17468')]).then(t.bind(t, 751212));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  guildId: n
                              });
                      })
                : void 0,
        hasSubmenu: !0,
        children: (0, i.jsxs)(a.MenuGroup, {
            children: [
                Y.map((n, e) =>
                    (0, i.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                P || n.value === C.YC.CLASSIC
                                    ? (0, i.jsx)(a.MenuRadioItem, {
                                          id: n.label,
                                          group: 'notification-preset',
                                          checked: (null != b ? b : C.YC.CLASSIC) === n.value,
                                          label: n.label,
                                          action: () => w(n.value)
                                      })
                                    : (0, i.jsx)(a.MenuItem, {
                                          id: n.label,
                                          label: (e) => {
                                              let { isFocused: t } = e;
                                              return (0, i.jsxs)('div', {
                                                  className: T.labelContainer,
                                                  children: [
                                                      (0, i.jsx)(I.Z, {
                                                          color: t ? 'always-white' : void 0,
                                                          variant: 'text-sm/medium',
                                                          children: n.label
                                                      }),
                                                      (0, i.jsx)(a.CirclePlayIcon, {
                                                          className: T.playButton,
                                                          color: t ? a.tokens.colors.INTERACTIVE_ACTIVE : a.tokens.colors.INTERACTIVE_NORMAL
                                                      })
                                                  ]
                                              });
                                          },
                                          action: () => w(n.value)
                                      }),
                                n.value === C.YC.CLASSIC ? (0, i.jsx)(a.MenuSeparator, {}) : null
                            ]
                        },
                        e
                    )
                ),
                A &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(a.MenuSeparator, {}),
                            (0, i.jsx)(a.MenuItem, {
                                id: 'label',
                                label: (0, i.jsx)(a.Text, {
                                    className: T.mutedLabel,
                                    variant: 'text-sm/medium',
                                    children: Z.intl.string(Z.t['a9G/ER'])
                                })
                            })
                        ]
                    })
            ]
        })
    });
}
