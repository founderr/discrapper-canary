var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(704215),
    c = n(749280),
    u = n(481060),
    d = n(367907),
    h = n(499254),
    m = n(424602),
    p = n(541099),
    f = n(827498),
    g = n(569211),
    C = n(663924),
    x = n(998698),
    v = n(873387),
    _ = n(404295),
    I = n(605236),
    E = n(819640),
    b = n(291407),
    S = n(61356),
    Z = n(981631),
    T = n(314734),
    N = n(921944),
    j = n(388032),
    A = n(786899),
    y = n(795361);
let P = l.forwardRef(function (e, t) {
    let { type: n, animateRef: r } = e,
        m = (0, a.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === n),
        { Component: g, events: C, play: x } = (0, c.w)();
    l.useImperativeHandle(
        r,
        () => ({
            animate: () => {
                C.onMouseEnter();
            }
        }),
        [C]
    );
    let v = l.useCallback(() => {
        (0, d.yw)(Z.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), m ? h.yT(f.ti.DISMISSED) : ((0, I.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: N.L.TAKE_ACTION }), h.__(f._b.TEXT, n)), x();
    }, [m, n, x]);
    return (0, i.jsx)('div', {
        className: s()(A.buttonContainer, T.t4),
        ref: t,
        children: (0, i.jsx)(u.Button, {
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            tabIndex: 0,
            className: s()(A.button, { [A.buttonActive]: m }),
            onClick: v,
            'aria-label': j.intl.string(j.t.erHFxM),
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            },
            innerClassName: A.buttonContents,
            ...C,
            children: (0, i.jsx)(g, { color: 'currentColor' })
        })
    });
});
function M(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        l = (0, a.e7)([E.Z], () => E.Z.hasLayers()),
        {
            enabled: r,
            shouldShow: o,
            applicationDetails: c,
            showsTooltip: d
        } = (0, g.Z)({
            obstructedFromView: l,
            disabled: t
        });
    if (!r) return (0, i.jsx)(i.Fragment, { children: n });
    let h =
        o && (null == c ? void 0 : c.iconURL) != null
            ? (0, i.jsxs)('div', {
                  className: A.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, i.jsx)('img', {
                          className: s()(A.buttonContainer, A.button, A.channelAppLauncherButtonPopoutIcon),
                          alt: j.intl.string(j.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, i.jsx)('div', {
                          className: A.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, i.jsx)('img', {
                              className: s()(A.channelAppLauncherButtonPopoutIconShimmer),
                              alt: j.intl.string(j.t.X4IxWF),
                              src: y,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return d
        ? (0, i.jsx)(u.Tooltip, {
              text: j.intl.string(j.t.JDj6Xl),
              shouldShow: o,
              forceOpen: o,
              children: () =>
                  (0, i.jsxs)(i.Fragment, {
                      children: [h, n]
                  })
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [h, n]
          });
}
t.Z = l.memo(function (e) {
    let { channel: t, type: n, animateRef: r, entryPointCommandButtonRef: s } = e,
        o = l.useRef(null),
        c = (0, v.g)(t),
        { activeCommand: u } = (0, a.cj)([x.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? x.Z.getActiveCommand(t.id) : null };
        }),
        d = m.T.useExperiment({ location: 'chat_input' }, { autoTrackExposure: !0 }).enabled,
        h = (0, S.Z)({ type: n }),
        f = (0, _.h9)(t.id, 'ChannelAppLauncher'),
        g = (0, a.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id));
    return d && null == u && c
        ? (0, i.jsxs)('div', {
              className: A.channelAppLauncher,
              children: [
                  (0, i.jsx)(b.Z, {
                      channel: t,
                      animationContainerClassName: A.entrypointAnimation,
                      glowClassName: A.animationGlow,
                      trinketsClassName: A.animationTrinkets,
                      children: (0, i.jsx)(M, {
                          showAppLauncherPopup: h,
                          children: (0, i.jsx)(P, {
                              type: n,
                              ref: o,
                              animateRef: r
                          })
                      })
                  }),
                  h
                      ? (0, i.jsx)(C.Z, {
                            positionTargetRef: f && !g ? s : o,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
