n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var l = n(200651),
    s = n(192379),
    i = n(120356),
    r = n.n(i),
    a = n(512722),
    o = n.n(a),
    c = n(848246),
    d = n(442837),
    u = n(481060),
    f = n(410575),
    h = n(2052),
    m = n(924557),
    x = n(600164),
    _ = n(436774),
    g = n(933843),
    p = n(1163),
    C = n(592125),
    S = n(944486),
    E = n(594174),
    v = n(78839),
    j = n(74538),
    I = n(451467),
    Z = n(122186),
    T = n(37113),
    N = n(981631),
    M = n(474936),
    R = n(689938),
    A = n(410894),
    O = n(13458),
    L = n(113207);
function w(e) {
    let { analyticsLocation: t, onClose: s } = e;
    (0, u.openModalLazy)(async () => {
        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
        return (n) =>
            (0, l.jsx)(e, {
                ...n,
                onCloseParent: s,
                analyticsSource: t
            });
    });
}
function b() {
    return (0, l.jsxs)('div', {
        className: O.toolTipTextContainer,
        children: [
            (0, l.jsx)(u.NitroWheelIcon, {
                size: 'md',
                color: _.JX.PREMIUM_TIER_2,
                className: r()(O.premiumIcon)
            }),
            (0, l.jsx)(u.Text, {
                className: O.upsellText,
                variant: 'text-sm/medium',
                children: R.Z.Messages.UNLOCK_WITH_NITRO
            })
        ]
    });
}
function D(e) {
    let t,
        n,
        { type: s, selected: i, needsPremium: a, needsDemo: o, analyticsLocation: c, onClick: d, onClose: f, setIsHovering: h } = e,
        { value: m, label: x } = s;
    return (
        a
            ? ((t = (0, l.jsx)(u.TooltipContainer, {
                  tooltipClassName: O.tooltip,
                  spacing: 6,
                  'aria-label': R.Z.Messages.UNLOCK_WITH_NITRO,
                  text: (0, l.jsx)(b, {}),
                  children: (0, l.jsx)('div', {
                      className: O.textContainer,
                      onMouseEnter: () => h(!0),
                      onMouseLeave: () => h(!1),
                      children: (0, l.jsx)(u.Text, {
                          variant: 'text-xs/bold',
                          className: r()(O.selectorNitroText, O.enhancedSelectorNitroText),
                          children: x
                      })
                  })
              })),
              (n = () =>
                  w({
                      analyticsLocation: c,
                      onClose: f
                  })))
            : ((t = (0, l.jsx)('div', {
                  className: O.textContainer,
                  children: (0, l.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      className: r()(O.selectorText, { [O.enhancedSelectorNitroText]: o }),
                      children: x
                  })
              })),
              (n = () => d(m))),
        {
            content: t,
            className: r()(O.selectorButton, {
                [O.selectorButtonSelected]: i,
                [O.perksDemo]: o,
                [O.premiumUpsell]: a
            }),
            onClick: n
        }
    );
}
function P(e) {
    let { onClose: t, selectedPreset: n, selectedResolution: i, selectedFPS: r, onResolutionChange: a, onFPSChange: _, onPresetChange: b, targetGuildPremiumTier: P, captureDeviceSelected: y } = e,
        G = (0, d.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        B = (0, d.e7)([S.Z, C.Z], () => C.Z.getChannel(S.Z.getVoiceChannelId())),
        k = j.ZP.canStreamQuality(j.U2.MID, G),
        { location: U } = (0, h.O)(),
        V = (0, m.Zq)({ autoTrackExposure: !1 }),
        H = (0, j.I5)(G, M.p9.TIER_1);
    p.Z.useExperiment(
        { location: 'Go Live Modal' },
        {
            autoTrackExposure: !0,
            disable: H
        }
    );
    let F = (0, d.e7)([v.ZP], () => v.ZP.inReverseTrial()),
        W = (0, g.So)(c.q.STREAM_HIGH_QUALITY),
        z = (!k && !V) || W,
        [Y, K] = s.useState(!1),
        Q = y ? T.z8 : T.WC,
        X = {
            ...U,
            section: N.jXE.STREAM_SETTINGS
        },
        q = (0, l.jsx)(u.ButtonGroup, {
            buttons: Q.map((e) =>
                D({
                    type: e,
                    selected: e.value === i,
                    needsPremium: !(0, I.Z)(n, e.value, r, G, P, B),
                    needsDemo: (W || F) && e.value !== T.LY.RESOLUTION_720,
                    analyticsLocation: X,
                    onClick: () => a(e.value),
                    onClose: t,
                    setIsHovering: K
                })
            )
        }),
        J = (0, l.jsx)(u.ButtonGroup, {
            buttons: T.k0.map((e) =>
                D({
                    type: e,
                    selected: e.value === r,
                    needsPremium: !(0, I.Z)(n, i, e.value, G, P, B),
                    needsDemo: W && e.value === T.ws.FPS_60,
                    analyticsLocation: X,
                    onClick: () => _(e.value),
                    onClose: t,
                    setIsHovering: K
                })
            )
        }),
        $ = [
            {
                value: T.tI.PRESET_VIDEO,
                label: R.Z.Messages.STREAM_PRESET_VIDEO
            },
            ...(y
                ? []
                : [
                      {
                          value: T.tI.PRESET_DOCUMENTS,
                          label: R.Z.Messages.STREAM_PRESET_DOCUMENTS
                      }
                  ]),
            {
                value: T.tI.PRESET_CUSTOM,
                label: R.Z.Messages.STREAM_PRESET_CUSTOM
            }
        ],
        ee =
            n === T.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(x.Z, {
                              children: (0, l.jsx)(u.FormItem, {
                                  title: R.Z.Messages.STREAM_RESOLUTION,
                                  titleClassName: A.formItemTitleSlim,
                                  className: O.documentModeGroup,
                                  children: (0, l.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      children: R.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({ fps: r })
                                  })
                              })
                          }),
                          z
                              ? (0, l.jsx)(Z.Z, {
                                    message: R.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                                    onClose: t,
                                    openStreamUpsellModal: w
                                })
                              : null,
                          F && (0, l.jsx)(Z.c, {})
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(x.Z, {
                              children: [
                                  (0, l.jsx)(u.FormItem, {
                                      title: R.Z.Messages.STREAM_RESOLUTION,
                                      className: O.settingsGroup,
                                      titleClassName: A.formItemTitleSlim,
                                      children: q
                                  }),
                                  (0, l.jsx)(u.FormItem, {
                                      title: R.Z.Messages.SCREENSHARE_FRAME_RATE,
                                      className: O.settingsGroup,
                                      titleClassName: A.formItemTitleSlim,
                                      children: J
                                  })
                              ]
                          }),
                          z
                              ? (0, l.jsx)(Z.Z, {
                                    onClose: t,
                                    openStreamUpsellModal: w,
                                    glow: Y
                                })
                              : null,
                          F && (0, l.jsx)(Z.c, {})
                      ]
                  });
    return (0, l.jsx)(f.Z, {
        ...X,
        children: (0, l.jsx)(u.FormItem, {
            title: R.Z.Messages.STREAM_QUALITY,
            titleClassName: A.formItemTitle,
            className: A.modalContent,
            children: (0, l.jsxs)('div', {
                className: O.qualitySettingsContainer,
                children: [
                    (0, l.jsx)(u.SingleSelect, {
                        value: n,
                        className: L.marginTop8,
                        options: $,
                        onChange: (e) => b(e)
                    }),
                    ee
                ]
            })
        })
    });
}
