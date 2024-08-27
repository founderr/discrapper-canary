t.d(n, {
    Z: function () {
        return P;
    }
}),
    t(47120);
var l = t(735250),
    s = t(470079),
    a = t(120356),
    r = t.n(a),
    i = t(512722),
    o = t.n(i),
    u = t(848246),
    c = t(442837),
    d = t(481060),
    m = t(410575),
    E = t(2052),
    S = t(924557),
    _ = t(600164),
    g = t(436774),
    h = t(933843),
    x = t(1163),
    Z = t(594174),
    f = t(78839),
    C = t(74538),
    N = t(451467),
    I = t(122186),
    R = t(37113),
    v = t(981631),
    T = t(474936),
    A = t(689938),
    p = t(458623),
    M = t(782765),
    j = t(224499);
function L(e) {
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
function O() {
    return (0, l.jsxs)('div', {
        className: M.toolTipTextContainer,
        children: [
            (0, l.jsx)(d.NitroWheelIcon, {
                size: 'md',
                color: g.JX.PREMIUM_TIER_2,
                className: r()(M.premiumIcon)
            }),
            (0, l.jsx)(d.Text, {
                className: M.upsellText,
                variant: 'text-sm/medium',
                children: A.Z.Messages.UNLOCK_WITH_NITRO
            })
        ]
    });
}
function D(e) {
    let n,
        t,
        { type: s, selected: a, needsPremium: i, needsDemo: o, analyticsLocation: u, onClick: c, onClose: m, setIsHovering: E } = e,
        { value: S, label: _ } = s;
    return (
        i
            ? ((n = (0, l.jsx)(d.TooltipContainer, {
                  tooltipClassName: M.tooltip,
                  spacing: 6,
                  'aria-label': A.Z.Messages.UNLOCK_WITH_NITRO,
                  text: (0, l.jsx)(O, {}),
                  children: (0, l.jsx)('div', {
                      className: M.textContainer,
                      onMouseEnter: () => E(!0),
                      onMouseLeave: () => E(!1),
                      children: (0, l.jsx)(d.Text, {
                          variant: 'text-xs/bold',
                          className: r()(M.selectorNitroText, M.enhancedSelectorNitroText),
                          children: _
                      })
                  })
              })),
              (t = () =>
                  L({
                      analyticsLocation: u,
                      onClose: m
                  })))
            : ((n = (0, l.jsx)('div', {
                  className: M.textContainer,
                  children: (0, l.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      className: r()(M.selectorText, { [M.enhancedSelectorNitroText]: o }),
                      children: _
                  })
              })),
              (t = () => c(S))),
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
function P(e) {
    let { onClose: n, selectedPreset: t, selectedResolution: a, selectedFPS: r, onResolutionChange: i, onFPSChange: g, onPresetChange: O, targetGuildPremiumTier: P, captureDeviceSelected: G } = e,
        U = (0, c.e7)([Z.default], () => {
            let e = Z.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        b = C.ZP.canStreamQuality(C.U2.MID, U),
        { location: w } = (0, E.O)(),
        k = (0, S.Zq)({ autoTrackExposure: !1 }),
        V = (0, C.I5)(U, T.p9.TIER_1);
    x.Z.useExperiment(
        { location: 'Go Live Modal' },
        {
            autoTrackExposure: !0,
            disable: V
        }
    );
    let B = (0, c.e7)([f.ZP], () => f.ZP.inReverseTrial()),
        W = (0, h.So)(u.q.STREAM_HIGH_QUALITY),
        H = (!b && !k) || W,
        [y, F] = s.useState(!1),
        z = G ? R.z8 : R.WC,
        Y = {
            ...w,
            section: v.jXE.STREAM_SETTINGS
        },
        K = (0, l.jsx)(d.ButtonGroup, {
            buttons: z.map((e) =>
                D({
                    type: e,
                    selected: e.value === a,
                    needsPremium: !(0, N.Z)(t, e.value, r, U, P),
                    needsDemo: (W || B) && e.value !== R.LY.RESOLUTION_720,
                    analyticsLocation: Y,
                    onClick: () => i(e.value),
                    onClose: n,
                    setIsHovering: F
                })
            )
        }),
        Q = (0, l.jsx)(d.ButtonGroup, {
            buttons: R.k0.map((e) =>
                D({
                    type: e,
                    selected: e.value === r,
                    needsPremium: !(0, N.Z)(t, a, e.value, U, P),
                    needsDemo: W && e.value === R.ws.FPS_60,
                    analyticsLocation: Y,
                    onClick: () => g(e.value),
                    onClose: n,
                    setIsHovering: F
                })
            )
        }),
        X = [
            {
                value: R.tI.PRESET_VIDEO,
                label: A.Z.Messages.STREAM_PRESET_VIDEO
            },
            ...(G
                ? []
                : [
                      {
                          value: R.tI.PRESET_DOCUMENTS,
                          label: A.Z.Messages.STREAM_PRESET_DOCUMENTS
                      }
                  ]),
            {
                value: R.tI.PRESET_CUSTOM,
                label: A.Z.Messages.STREAM_PRESET_CUSTOM
            }
        ],
        J =
            t === R.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(_.Z, {
                              children: (0, l.jsx)(d.FormItem, {
                                  title: A.Z.Messages.STREAM_RESOLUTION,
                                  titleClassName: p.formItemTitleSlim,
                                  className: M.documentModeGroup,
                                  children: (0, l.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      children: A.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({ fps: r })
                                  })
                              })
                          }),
                          H
                              ? (0, l.jsx)(I.Z, {
                                    message: A.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                                    onClose: n,
                                    openStreamUpsellModal: L
                                })
                              : null,
                          B && (0, l.jsx)(I.c, {})
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(_.Z, {
                              children: [
                                  (0, l.jsx)(d.FormItem, {
                                      title: A.Z.Messages.STREAM_RESOLUTION,
                                      className: M.settingsGroup,
                                      titleClassName: p.formItemTitleSlim,
                                      children: K
                                  }),
                                  (0, l.jsx)(d.FormItem, {
                                      title: A.Z.Messages.SCREENSHARE_FRAME_RATE,
                                      className: M.settingsGroup,
                                      titleClassName: p.formItemTitleSlim,
                                      children: Q
                                  })
                              ]
                          }),
                          H
                              ? (0, l.jsx)(I.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: L,
                                    glow: y
                                })
                              : null,
                          B && (0, l.jsx)(I.c, {})
                      ]
                  });
    return (0, l.jsx)(m.Z, {
        ...Y,
        children: (0, l.jsx)(d.FormItem, {
            title: A.Z.Messages.STREAM_QUALITY,
            titleClassName: p.formItemTitle,
            className: p.modalContent,
            children: (0, l.jsxs)('div', {
                className: M.qualitySettingsContainer,
                children: [
                    (0, l.jsx)(d.SingleSelect, {
                        value: t,
                        className: j.marginTop8,
                        options: X,
                        onChange: (e) => O(e)
                    }),
                    J
                ]
            })
        })
    });
}
