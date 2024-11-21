t.d(e, {
    U: function () {
        return N;
    },
    Uf: function () {
        return E;
    },
    ng: function () {
        return T;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    l = t(442837),
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
    h = t(767157),
    _ = t(112440),
    m = t(671105),
    M = t(552958),
    p = t(981631),
    v = t(921944),
    C = t(871465),
    Z = t(388032),
    j = t(100210);
function T(n, e) {
    let t = g.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        r = S(n, void 0, u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, t.nestedEntry ? 'trailing' : 'top'),
        l = (t.nestedEntry && e) || (!t.nestedEntry && !e);
    return (0, i.jsx)(i.Fragment, { children: l && r });
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
                className: j.newBadge,
                text: Z.intl.string(Z.t.y2b7CA)
            })
    });
}
function S(n, e, u, T) {
    var E, N;
    let S = (0, m.OR)(n),
        O = (0, m._c)(n, e),
        U = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        A = (0, l.e7)([s.ZP], () => s.ZP.isMuted(n), [n]),
        P = f.ZP.canUseCustomNotificationSounds(U),
        b = P ? (null != O ? O : S) : C.YC.CLASSIC,
        y = g.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [G, R] = r.useState(!1),
        { playSound: D } = (0, M.Z)(),
        [F, L] = (0, d.cv)([u]),
        k = F === u;
    if (
        (r.useEffect(
            () => () => {
                G && L(v.L.TAKE_ACTION);
            },
            [G, L]
        ),
        !y)
    )
        return null;
    let w = (t) => {
            if ((D(t), L(v.L.TAKE_ACTION), !P && t !== C.YC.CLASSIC)) {
                (0, h.Z)(t, 'contextMenu'), (0, _.Z)();
                return;
            }
            null != e ? (0, x.M)(n, e, b, t, 'contextMenu') : (0, x.t)(n, b, t, 'contextMenu');
        },
        z = P ? a.Text : I.Z,
        Y = (0, C.LB)(),
        B = null !== (N = null === (E = Y.find((n) => n.value === b)) || void 0 === E ? void 0 : E.label) && void 0 !== N ? N : Z.intl.string(Z.t.p3Hg5e),
        V = (0, i.jsx)(a.TextBadge, {
            className: j.newBadge,
            text: Z.intl.string(Z.t.y2b7CA)
        });
    return (0, i.jsx)(a.MenuItem, {
        id: 'notification-sounds',
        label: (n) => {
            let { isFocused: e } = n;
            return (
                e && R(e),
                (0, i.jsxs)('div', {
                    className: j.rootContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                k && 'top' === T && V,
                                (0, i.jsxs)('div', {
                                    className: j.headerContainer,
                                    children: [
                                        (0, i.jsx)(z, {
                                            className: j.text,
                                            color: e ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: Z.intl.string(Z.t.mrqSOj)
                                        }),
                                        (0, i.jsx)(a.NitroWheelIcon, {
                                            size: 'xs',
                                            className: j.nitroWheel,
                                            color: e ? 'white' : P ? void 0 : o.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != B &&
                                    (0, i.jsx)(z, {
                                        className: j.text,
                                        color: e ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: B
                                    })
                            ]
                        }),
                        k && 'trailing' === T && V
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
                        r.Fragment,
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
                                                  className: j.labelContainer,
                                                  children: [
                                                      (0, i.jsx)(I.Z, {
                                                          color: t ? 'always-white' : void 0,
                                                          variant: 'text-sm/medium',
                                                          children: n.label
                                                      }),
                                                      (0, i.jsx)(a.CirclePlayIcon, {
                                                          className: j.playButton,
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
                                    className: j.mutedLabel,
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
