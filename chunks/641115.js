n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(848246),
    d = n(442837),
    u = n(481060),
    f = n(410575),
    h = n(2052),
    m = n(924557),
    x = n(600164),
    g = n(436774),
    p = n(933843),
    v = n(140465),
    j = n(1163),
    C = n(774026),
    S = n(592125),
    Z = n(944486),
    _ = n(594174),
    I = n(74538),
    T = n(451467),
    N = n(122186),
    b = n(37113),
    w = n(981631),
    y = n(474936),
    E = n(388032),
    R = n(507178),
    M = n(38960),
    P = n(971436);
function A(e) {
    let { analyticsLocation: t, onClose: i } = e;
    (0, u.openModalLazy)(async () => {
        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
        return (n) =>
            (0, l.jsx)(e, {
                ...n,
                onCloseParent: i,
                analyticsSource: t
            });
    });
}
function k() {
    return (0, l.jsxs)('div', {
        className: M.toolTipTextContainer,
        children: [
            (0, l.jsx)(u.NitroWheelIcon, {
                size: 'md',
                color: g.JX.PREMIUM_TIER_2,
                className: s()(M.premiumIcon)
            }),
            (0, l.jsx)(u.Text, {
                className: M.upsellText,
                variant: 'text-sm/medium',
                children: E.intl.string(E.t.sEAnVF)
            })
        ]
    });
}
function L(e) {
    let t,
        n,
        { type: i, selected: r, needsPremium: a, needsDemo: o, analyticsLocation: c, onClick: d, onClose: f, setIsHovering: h } = e,
        { value: m, label: x } = i;
    return (
        a
            ? ((t = (0, l.jsx)(u.TooltipContainer, {
                  tooltipClassName: M.tooltip,
                  spacing: 6,
                  'aria-label': E.intl.string(E.t.sEAnVF),
                  text: (0, l.jsx)(k, {}),
                  children: (0, l.jsx)('div', {
                      className: M.textContainer,
                      onMouseEnter: () => h(!0),
                      onMouseLeave: () => h(!1),
                      children: (0, l.jsx)(u.Text, {
                          variant: 'text-xs/bold',
                          className: s()(M.selectorNitroText, M.enhancedSelectorNitroText),
                          children: x
                      })
                  })
              })),
              (n = () =>
                  A({
                      analyticsLocation: c,
                      onClose: f
                  })))
            : ((t = (0, l.jsx)('div', {
                  className: M.textContainer,
                  children: (0, l.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      className: s()(M.selectorText, { [M.enhancedSelectorNitroText]: o }),
                      children: x
                  })
              })),
              (n = () => d(m))),
        {
            content: t,
            className: s()(M.selectorButton, {
                [M.selectorButtonSelected]: r,
                [M.perksDemo]: o,
                [M.premiumUpsell]: a
            }),
            onClick: n
        }
    );
}
function B(e) {
    let { onClose: t, selectedPreset: n, selectedResolution: r, selectedFPS: s, onResolutionChange: a, onFPSChange: g, onPresetChange: k, targetGuildPremiumTier: B, captureDeviceSelected: G } = e,
        D = (0, d.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        O = (0, d.e7)([Z.Z, S.Z], () => S.Z.getChannel(Z.Z.getVoiceChannelId())),
        U = I.ZP.canStreamQuality(I.U2.MID, D),
        { location: F } = (0, h.O)(),
        H = (0, m.Zq)({ autoTrackExposure: !1 }),
        W = (0, I.I5)(D, y.p9.TIER_1);
    j.Z.useExperiment(
        { location: 'Go Live Modal' },
        {
            autoTrackExposure: !0,
            disable: W
        }
    );
    let V = (0, v.x8)('StreamSettings'),
        z = _.default.getUser(null == O ? void 0 : O.hdStreamingBuyerId),
        K = null != O && null != O.hdStreamingUntil && new Date(O.hdStreamingUntil) > new Date() && null != z,
        Y = (0, p.So)(c.q.STREAM_HIGH_QUALITY),
        X = (!U && !H) || Y,
        [J, q] = i.useState(!1),
        Q = G ? b.z8 : b.WC,
        $ = {
            ...F,
            section: w.jXE.STREAM_SETTINGS
        },
        ee = (0, l.jsx)(u.ButtonGroup, {
            buttons: Q.map((e) =>
                L({
                    type: e,
                    selected: e.value === r,
                    needsPremium: !(0, T.Z)(n, e.value, s, D, B, O),
                    needsDemo: (Y || V) && e.value !== b.LY.RESOLUTION_720,
                    analyticsLocation: $,
                    onClick: () => a(e.value),
                    onClose: t,
                    setIsHovering: q
                })
            )
        }),
        et = (0, l.jsx)(u.ButtonGroup, {
            buttons: b.k0.map((e) =>
                L({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, T.Z)(n, r, e.value, D, B, O),
                    needsDemo: (Y || V) && e.value === b.ws.FPS_60,
                    analyticsLocation: $,
                    onClick: () => g(e.value),
                    onClose: t,
                    setIsHovering: q
                })
            )
        }),
        en = [
            {
                value: b.tI.PRESET_VIDEO,
                label: E.intl.string(E.t.HcwHc3)
            },
            ...(G
                ? []
                : [
                      {
                          value: b.tI.PRESET_DOCUMENTS,
                          label: E.intl.string(E.t['/RfohI'])
                      }
                  ]),
            {
                value: b.tI.PRESET_CUSTOM,
                label: E.intl.string(E.t['+eOtrK'])
            }
        ],
        el =
            n === b.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(x.Z, {
                              children: (0, l.jsx)(u.FormItem, {
                                  title: E.intl.string(E.t.rHyPXl),
                                  titleClassName: R.formItemTitleSlim,
                                  className: M.documentModeGroup,
                                  children: (0, l.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      children: E.intl.format(E.t['U+hmam'], { fps: s })
                                  })
                              })
                          }),
                          X
                              ? (0, l.jsx)(N.Z, {
                                    message: E.intl.string(E.t.deDogI),
                                    onClose: t,
                                    openStreamUpsellModal: A
                                })
                              : null,
                          V && (0, l.jsx)(N.c, {}),
                          K &&
                              null != O.hdStreamingUntil &&
                              (0, l.jsx)(C.Z, {
                                  streamingUntil: O.hdStreamingUntil,
                                  user: z,
                                  channel: O
                              })
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(x.Z, {
                              children: [
                                  (0, l.jsx)(u.FormItem, {
                                      title: E.intl.string(E.t.rHyPXl),
                                      className: M.settingsGroup,
                                      titleClassName: R.formItemTitleSlim,
                                      children: ee
                                  }),
                                  (0, l.jsx)(u.FormItem, {
                                      title: E.intl.string(E.t.SkkeIi),
                                      className: M.settingsGroup,
                                      titleClassName: R.formItemTitleSlim,
                                      children: et
                                  })
                              ]
                          }),
                          X
                              ? (0, l.jsx)(N.Z, {
                                    onClose: t,
                                    openStreamUpsellModal: A,
                                    glow: J
                                })
                              : null,
                          V && (0, l.jsx)(N.c, {}),
                          K &&
                              null != O.hdStreamingUntil &&
                              (0, l.jsx)(C.Z, {
                                  streamingUntil: null == O ? void 0 : O.hdStreamingUntil,
                                  user: z,
                                  channel: O
                              })
                      ]
                  });
    return (0, l.jsx)(f.Z, {
        ...$,
        children: (0, l.jsx)(u.FormItem, {
            title: E.intl.string(E.t.ax4FnZ),
            titleClassName: R.formItemTitle,
            className: R.modalContent,
            children: (0, l.jsxs)('div', {
                className: M.qualitySettingsContainer,
                children: [
                    (0, l.jsx)(u.SingleSelect, {
                        value: n,
                        className: P.marginTop8,
                        options: en,
                        onChange: (e) => k(e)
                    }),
                    el
                ]
            })
        })
    });
}
