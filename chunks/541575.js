var s = n(200651);
n(192379);
var a = n(780384),
    i = n(481060),
    r = n(410030),
    l = n(367907),
    o = n(906732),
    c = n(91218),
    d = n(807582),
    u = n(518738),
    _ = n(26323),
    I = n(764260),
    E = n(981631),
    T = n(30513),
    m = n(689938),
    N = n(691440);
t.Z = function (e) {
    let { guild: t, disabled: S, role: g } = e,
        h = (0, r.ZP)(),
        C = (0, u.oC)(t.id, g),
        { analyticsLocations: x } = (0, o.ZP)(),
        p = () => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await n.e('22942').then(n.bind(n, 660727));
                return (n) =>
                    (0, s.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        onUploadIcon: (e) => (0, I._l)(g.id, e, null),
                        onSelectUnicodeEmoji: (e) => (0, I._l)(g.id, null, e)
                    });
            });
        },
        R = t.features.has(E.oNc.ROLE_ICONS),
        L = (e) => {
            !R &&
                ((0, l.yw)(E.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: {
                        ...e,
                        section: E.jXE.CUSTOM_ROLE_ICONS_TOOLTIP
                    },
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: x
                }),
                (0, _.Z)({
                    analyticsLocations: x,
                    analyticsSourceLocation: {
                        page: E.ZY5.GUILD_SETTINGS,
                        section: E.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: E.qAy.BADGE
                    },
                    guild: t,
                    perks: (0, T.Yp)()
                }));
        },
        f = (0, s.jsx)(d.Z, {
            className: N.availabilityIndicator,
            guild: t,
            guildFeature: E.oNc.ROLE_ICONS,
            tooltipPosition: 'top',
            hideTooltip: R,
            onClick: () =>
                L({
                    object: E.qAy.LEARN_MORE,
                    objectType: E.Qqv.TIER_2
                })
        });
    return (0, s.jsxs)(i.FormItem, {
        className: N.container,
        children: [
            (0, s.jsxs)(i.FormTitle, {
                className: N.formTitle,
                children: [(0, s.jsx)('div', { children: m.Z.Messages.FORM_LABEL_ROLE_ICON }), f]
            }),
            (0, s.jsx)(i.FormText, {
                className: N.description,
                children: m.Z.Messages.ROLE_ICON_HELP
            }),
            (0, s.jsxs)('div', {
                className: N.rolePreviewArea,
                children: [
                    (0, s.jsx)('div', {
                        className: N.previewContainer,
                        children:
                            null != C
                                ? (0, s.jsx)(c.Z, {
                                      ...C,
                                      className: N.roleIconPreview,
                                      enableTooltip: !1
                                  })
                                : (0, s.jsx)(i.ImagePlusIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 24,
                                      height: 24,
                                      className: N.preview
                                  })
                    }),
                    (0, s.jsx)(i.Button, {
                        className: N.button,
                        color: (0, a.ap)(h) ? i.Button.Colors.PRIMARY : i.Button.Colors.WHITE,
                        look: i.Button.Looks.OUTLINED,
                        onClick: () => (t.hasFeature(E.oNc.ROLE_ICONS) ? p() : L({ object: E.qAy.UPLOAD_IMAGE })),
                        disabled: S,
                        children: m.Z.Messages.ROLE_ICON_CHOOSE_IMAGE
                    }),
                    null != C
                        ? (0, s.jsx)(i.Button, {
                              className: N.button,
                              color: (0, a.ap)(h) ? i.Button.Colors.PRIMARY : i.Button.Colors.TRANSPARENT,
                              look: i.Button.Looks.BLANK,
                              onClick: () => {
                                  (0, I._l)(g.id, null, null);
                              },
                              disabled: S,
                              children: m.Z.Messages.REMOVE_ICON
                          })
                        : null
                ]
            })
        ]
    });
};
