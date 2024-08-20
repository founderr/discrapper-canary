t.d(n, {
    Z: function () {
        return D;
    }
}),
    t(47120);
var l = t(735250),
    s = t(470079),
    a = t(120356),
    r = t.n(a),
    i = t(512722),
    o = t.n(i),
    c = t(848246),
    u = t(442837),
    d = t(481060),
    m = t(410575),
    E = t(2052),
    _ = t(924557),
    S = t(600164),
    h = t(436774),
    g = t(933843),
    C = t(1163),
    I = t(594174),
    x = t(78839),
    N = t(74538),
    Z = t(451467),
    f = t(122186),
    R = t(37113),
    A = t(981631),
    T = t(474936),
    v = t(689938),
    L = t(458623),
    M = t(782765),
    p = t(224499);
function O(e) {
    let { analyticsLocation: n, onClose: s } = e;
    (0, d.openModalLazy)(async () => {
        let { default: e } = await t.e('28479').then(t.bind(t, 78865));
        return (t) =>
            (0, l.jsx)(e, {
                ...t,
                onCloseParent: s,
                analyticsSource: n
            });
    });
}
function j() {
    return (0, l.jsxs)('div', {
        className: M.toolTipTextContainer,
        children: [
            (0, l.jsx)(d.NitroWheelIcon, {
                size: 'md',
                color: h.JX.PREMIUM_TIER_2,
                className: r()(M.premiumIcon)
            }),
            (0, l.jsx)(d.Text, {
                className: M.upsellText,
                variant: 'text-sm/medium',
                children: v.Z.Messages.UNLOCK_WITH_NITRO
            })
        ]
    });
}
function P(e) {
    let n,
        t,
        { type: s, selected: a, needsPremium: i, needsDemo: o, analyticsLocation: c, onClick: u, onClose: m, setIsHovering: E } = e,
        { value: _, label: S } = s;
    return (
        i
            ? ((n = (0, l.jsx)(d.TooltipContainer, {
                  tooltipClassName: M.tooltip,
                  spacing: 6,
                  'aria-label': v.Z.Messages.UNLOCK_WITH_NITRO,
                  text: (0, l.jsx)(j, {}),
                  children: (0, l.jsx)('div', {
                      className: M.textContainer,
                      onMouseEnter: () => E(!0),
                      onMouseLeave: () => E(!1),
                      children: (0, l.jsx)(d.Text, {
                          variant: 'text-xs/bold',
                          className: r()(M.selectorNitroText, M.enhancedSelectorNitroText),
                          children: S
                      })
                  })
              })),
              (t = () =>
                  O({
                      analyticsLocation: c,
                      onClose: m
                  })))
            : ((n = (0, l.jsx)('div', {
                  className: M.textContainer,
                  children: (0, l.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      className: r()(M.selectorText, { [M.enhancedSelectorNitroText]: o }),
                      children: S
                  })
              })),
              (t = () => u(_))),
        {
            content: n,
            className: r()(M.selectorButton, {
                [M.selectorButtonSelected]: a,
                [M.perksDemo]: o,
                [M.premiumUpsell]: i
            }),
            onClick: t
        }
    );
}
function D(e) {
    let { onClose: n, selectedPreset: t, selectedResolution: a, selectedFPS: r, onResolutionChange: i, onFPSChange: h, onPresetChange: j, targetGuildPremiumTier: D, captureDeviceSelected: G } = e,
        U = (0, u.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        b = N.ZP.canStreamQuality(N.U2.MID, U),
        { location: w } = (0, E.O)(),
        k = (0, _.Zq)({ autoTrackExposure: !1 }),
        B = (0, N.I5)(U, T.p9.TIER_1);
    C.Z.useExperiment(
        { location: 'Go Live Modal' },
        {
            autoTrackExposure: !0,
            disable: B
        }
    );
    let V = (0, u.e7)([x.ZP], () => x.ZP.inReverseTrial()),
        y = (0, g.So)(c.q.STREAM_HIGH_QUALITY),
        H = (!b && !k) || y,
        [W, F] = s.useState(!1),
        z = G ? R.z8 : R.WC,
        K = {
            ...w,
            section: A.jXE.STREAM_SETTINGS
        },
        Y = (0, l.jsx)(d.ButtonGroup, {
            buttons: z.map((e) =>
                P({
                    type: e,
                    selected: e.value === a,
                    needsPremium: !(0, Z.Z)(t, e.value, r, U, D),
                    needsDemo: y && e.value !== R.LY.RESOLUTION_720,
                    analyticsLocation: K,
                    onClick: () => i(e.value),
                    onClose: n,
                    setIsHovering: F
                })
            )
        }),
        Q = (0, l.jsx)(d.ButtonGroup, {
            buttons: R.k0.map((e) =>
                P({
                    type: e,
                    selected: e.value === r,
                    needsPremium: !(0, Z.Z)(t, a, e.value, U, D),
                    needsDemo: y && e.value === R.ws.FPS_60,
                    analyticsLocation: K,
                    onClick: () => h(e.value),
                    onClose: n,
                    setIsHovering: F
                })
            )
        }),
        X = [
            {
                value: R.tI.PRESET_VIDEO,
                label: v.Z.Messages.STREAM_PRESET_VIDEO
            },
            ...(G
                ? []
                : [
                      {
                          value: R.tI.PRESET_DOCUMENTS,
                          label: v.Z.Messages.STREAM_PRESET_DOCUMENTS
                      }
                  ]),
            {
                value: R.tI.PRESET_CUSTOM,
                label: v.Z.Messages.STREAM_PRESET_CUSTOM
            }
        ],
        q =
            t === R.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(S.Z, {
                              children: (0, l.jsx)(d.FormItem, {
                                  title: v.Z.Messages.STREAM_RESOLUTION,
                                  titleClassName: L.formItemTitleSlim,
                                  className: M.documentModeGroup,
                                  children: (0, l.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      children: v.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({ fps: r })
                                  })
                              })
                          }),
                          H
                              ? (0, l.jsx)(f.Z, {
                                    message: v.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                                    onClose: n,
                                    openStreamUpsellModal: O
                                })
                              : null,
                          V && (0, l.jsx)(f.c, {})
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(S.Z, {
                              children: [
                                  (0, l.jsx)(d.FormItem, {
                                      title: v.Z.Messages.STREAM_RESOLUTION,
                                      className: M.settingsGroup,
                                      titleClassName: L.formItemTitleSlim,
                                      children: Y
                                  }),
                                  (0, l.jsx)(d.FormItem, {
                                      title: v.Z.Messages.SCREENSHARE_FRAME_RATE,
                                      className: M.settingsGroup,
                                      titleClassName: L.formItemTitleSlim,
                                      children: Q
                                  })
                              ]
                          }),
                          H
                              ? (0, l.jsx)(f.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: O,
                                    glow: W
                                })
                              : null,
                          V && (0, l.jsx)(f.c, {})
                      ]
                  });
    return (0, l.jsx)(m.Z, {
        ...K,
        children: (0, l.jsx)(d.FormItem, {
            title: v.Z.Messages.STREAM_QUALITY,
            titleClassName: L.formItemTitle,
            className: L.modalContent,
            children: (0, l.jsxs)('div', {
                className: M.qualitySettingsContainer,
                children: [
                    (0, l.jsx)(d.SingleSelect, {
                        value: t,
                        className: p.marginTop8,
                        options: X,
                        onChange: (e) => j(e)
                    }),
                    q
                ]
            })
        })
    });
}
