n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(570140),
    d = n(100527),
    _ = n(313201),
    E = n(98278),
    f = n(311476),
    h = n(587446),
    p = n(996073),
    m = n(327943),
    I = n(997945),
    T = n(401460),
    g = n(441319),
    S = n(981631),
    A = n(526761),
    v = n(689938),
    N = n(243132);
function O(e) {
    let { className: t, disabled: r, isEditor: o, renderCTAButtons: O } = e,
        [R, C] = (0, l.Wu)([m.Z], () => [m.Z.getCurrentDesktopIcon(), m.Z.isUpsellPreview]),
        { enabled: y } = f.Z.getCurrentConfig(
            { location: 'UserSettingsAppearanceInAppIcon' },
            {
                autoTrackExposure: C,
                disable: !C
            }
        ),
        b = a.useRef(null);
    (0, p.Z)(b, A.h1.CUSTOM_APP_ICONS);
    let L = (0, _.Dt)(),
        D = (0, u.useRadioGroup)({
            orientation: 'horizontal',
            labelledBy: L
        }),
        M = (e) => {
            if (y && !o && e !== I.aH.DEFAULT) {
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await n.e('69052').then(n.bind(n, 184250));
                    return (t) =>
                        (0, i.jsx)(e, {
                            analyticsSource: d.Z.APP_ICON_SELECTOR,
                            analyticsLocation: {
                                section: S.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
                                object: S.qAy.BUTTON_ICON
                            },
                            ...t
                        });
                });
                return;
            }
            c.Z.dispatch({
                type: 'APP_ICON_UPDATED',
                id: e
            });
        };
    return (0, i.jsx)('div', {
        ref: b,
        children: (0, i.jsx)('div', {
            ...D,
            className: N.__invalid_container,
            children: (0, i.jsxs)('div', {
                className: t,
                children: [
                    (0, i.jsxs)('div', {
                        className: N.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: N.headings,
                                children: [
                                    !o &&
                                        (0, i.jsxs)('div', {
                                            className: N.title,
                                            children: [
                                                (0, i.jsx)(u.Heading, {
                                                    variant: 'text-md/medium',
                                                    children: v.Z.Messages.APP_ICON_SETTINGS_TITLE
                                                }),
                                                !y && (0, i.jsx)(h.Z, { className: N.premiumIcon })
                                            ]
                                        }),
                                    y
                                        ? o
                                            ? null
                                            : (0, i.jsxs)('div', {
                                                  className: N.description,
                                                  children: [
                                                      (0, i.jsx)(u.NitroWheelIcon, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: N.nitroWheel
                                                      }),
                                                      (0, i.jsx)(u.Heading, {
                                                          variant: 'text-sm/normal',
                                                          children: v.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
                                                              onClick: () => {
                                                                  (0, E.$)();
                                                              }
                                                          })
                                                      })
                                                  ]
                                              })
                                        : (0, i.jsx)(u.Heading, {
                                              variant: 'text-sm/normal',
                                              children: v.Z.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                          })
                                ]
                            }),
                            null == O ? void 0 : O()
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: s()(N.presets, { [N.presetsJustified]: y && o }),
                        children: g.UZ.filter((e) => {
                            let { isHidden: t } = e;
                            return !t;
                        }).map((e, t) =>
                            (0, i.jsx)(
                                T.Z,
                                {
                                    icon: e,
                                    isSelected: R === e.id,
                                    onSelect: (e) => M(e),
                                    disabled: r,
                                    tabIndex: 0 !== t || r ? void 0 : 0,
                                    locked: y && !o && e.id !== I.aH.DEFAULT
                                },
                                e.id
                            )
                        )
                    })
                ]
            })
        })
    });
}
