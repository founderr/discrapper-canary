n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(570140),
    c = n(100527),
    d = n(313201),
    f = n(98278),
    _ = n(311476),
    p = n(587446),
    h = n(996073),
    m = n(327943),
    g = n(997945),
    E = n(401460),
    v = n(441319),
    b = n(981631),
    I = n(526761),
    T = n(388032),
    S = n(709554);
function y(e) {
    let { className: t, disabled: a, isEditor: y, renderCTAButtons: A } = e,
        [N, C] = (0, o.Wu)([m.Z], () => [m.Z.getCurrentDesktopIcon(), m.Z.isUpsellPreview]),
        { enabled: R } = _.Z.getCurrentConfig(
            { location: 'UserSettingsAppearanceInAppIcon' },
            {
                autoTrackExposure: C,
                disable: !C
            }
        ),
        O = i.useRef(null);
    (0, h.Z)(O, I.h1.CUSTOM_APP_ICONS);
    let D = (0, d.Dt)(),
        L = (0, l.useRadioGroup)({
            orientation: 'horizontal',
            labelledBy: D
        }),
        x = (e) => {
            if (R && !y && e !== g.aH.DEFAULT) {
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('69052').then(n.bind(n, 184250));
                    return (t) =>
                        (0, r.jsx)(e, {
                            analyticsSource: c.Z.APP_ICON_SELECTOR,
                            analyticsLocation: {
                                section: b.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
                                object: b.qAy.BUTTON_ICON
                            },
                            ...t
                        });
                });
                return;
            }
            u.Z.dispatch({
                type: 'APP_ICON_UPDATED',
                id: e
            });
        };
    return (0, r.jsx)('div', {
        ref: O,
        children: (0, r.jsx)('div', {
            ...L,
            className: S.__invalid_container,
            children: (0, r.jsxs)('div', {
                className: t,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: S.headings,
                                children: [
                                    !y &&
                                        (0, r.jsxs)('div', {
                                            className: S.title,
                                            children: [
                                                (0, r.jsx)(l.Heading, {
                                                    variant: 'text-md/medium',
                                                    children: T.intl.string(T.t.NThqT0)
                                                }),
                                                !R && (0, r.jsx)(p.Z, { className: S.premiumIcon })
                                            ]
                                        }),
                                    R
                                        ? y
                                            ? null
                                            : (0, r.jsxs)('div', {
                                                  className: S.description,
                                                  children: [
                                                      (0, r.jsx)(l.NitroWheelIcon, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: S.nitroWheel
                                                      }),
                                                      (0, r.jsx)(l.Heading, {
                                                          variant: 'text-sm/normal',
                                                          children: T.intl.format(T.t.x2dQxM, {
                                                              onClick: () => {
                                                                  (0, f.$)();
                                                              }
                                                          })
                                                      })
                                                  ]
                                              })
                                        : (0, r.jsx)(l.Heading, {
                                              variant: 'text-sm/normal',
                                              children: T.intl.string(T.t.IgENJi)
                                          })
                                ]
                            }),
                            null == A ? void 0 : A()
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: s()(S.presets, { [S.presetsJustified]: R && y }),
                        children: (0, v.wu)()
                            .filter((e) => {
                                let { isHidden: t } = e;
                                return !t;
                            })
                            .map((e, t) =>
                                (0, r.jsx)(
                                    E.Z,
                                    {
                                        icon: e,
                                        isSelected: N === e.id,
                                        onSelect: (e) => x(e),
                                        disabled: a,
                                        tabIndex: 0 !== t || a ? void 0 : 0,
                                        locked: R && !y && e.id !== g.aH.DEFAULT
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
