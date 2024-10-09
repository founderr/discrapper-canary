var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(704215),
    c = n(749280),
    u = n(481060),
    d = n(367907),
    h = n(499254),
    p = n(424602),
    m = n(541099),
    _ = n(827498),
    f = n(569211),
    E = n(663924),
    g = n(998698),
    C = n(873387),
    I = n(404295),
    T = n(605236),
    x = n(819640),
    v = n(291407),
    S = n(61356),
    N = n(981631),
    A = n(314734),
    Z = n(921944),
    M = n(689938),
    b = n(786899),
    R = n(795361);
let L = s.forwardRef(function (e, t) {
    let { type: n, animateRef: a } = e,
        p = (0, r.e7)([m.Z], () => m.Z.shouldShowPopup() && m.Z.activeViewType() === n),
        { Component: f, events: E, play: g } = (0, c.w)();
    s.useImperativeHandle(
        a,
        () => ({
            animate: () => {
                E.onMouseEnter();
            }
        }),
        [E]
    );
    let C = s.useCallback(() => {
        (0, d.yw)(N.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), p ? h.yT(_.ti.DISMISSED) : ((0, T.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: Z.L.TAKE_ACTION }), h.__(_._b.TEXT, n)), g();
    }, [p, n, g]);
    return (0, i.jsx)('div', {
        className: l()(b.buttonContainer, A.t4),
        ref: t,
        children: (0, i.jsx)(u.Button, {
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            tabIndex: 0,
            className: l()(b.button, { [b.buttonActive]: p }),
            onClick: C,
            'aria-label': M.Z.Messages.APP_LAUNCHER_ENTRYPOINT_BUTTON_ARIA_LABEL,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            },
            innerClassName: b.buttonContents,
            ...E,
            children: (0, i.jsx)(f, { color: 'currentColor' })
        })
    });
});
function P(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        s = (0, r.e7)([x.Z], () => x.Z.hasLayers()),
        {
            enabled: a,
            shouldShow: o,
            applicationDetails: c,
            showsTooltip: d
        } = (0, f.Z)({
            obstructedFromView: s,
            disabled: t
        });
    if (!a) return (0, i.jsx)(i.Fragment, { children: n });
    let h =
        o && (null == c ? void 0 : c.iconURL) != null
            ? (0, i.jsxs)('div', {
                  className: b.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, i.jsx)('img', {
                          className: l()(b.buttonContainer, b.button, b.channelAppLauncherButtonPopoutIcon),
                          alt: M.Z.Messages.IMAGE,
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, i.jsx)('div', {
                          className: b.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, i.jsx)('img', {
                              className: l()(b.channelAppLauncherButtonPopoutIconShimmer),
                              alt: M.Z.Messages.IMAGE,
                              src: R,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return d
        ? (0, i.jsx)(u.Tooltip, {
              text: M.Z.Messages.APP_LAUNCHER_APP_ADDED,
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
t.Z = s.memo(function (e) {
    let { channel: t, type: n, animateRef: a, entryPointCommandButtonRef: l } = e,
        o = s.useRef(null),
        c = (0, C.g)(t),
        { activeCommand: u } = (0, r.cj)([g.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? g.Z.getActiveCommand(t.id) : null };
        }),
        d = p.T.useExperiment({ location: 'chat_input' }, { autoTrackExposure: !0 }).enabled,
        h = (0, S.Z)({ type: n }),
        _ = (0, I.h9)(t.id, 'ChannelAppLauncher'),
        f = (0, r.e7)([m.Z], () => m.Z.appDMChannelsWithFailedLoads().has(t.id));
    return d && null == u && c
        ? (0, i.jsxs)('div', {
              className: b.channelAppLauncher,
              children: [
                  (0, i.jsx)(v.Z, {
                      channel: t,
                      animationContainerClassName: b.entrypointAnimation,
                      glowClassName: b.animationGlow,
                      trinketsClassName: b.animationTrinkets,
                      children: (0, i.jsx)(P, {
                          showAppLauncherPopup: h,
                          children: (0, i.jsx)(L, {
                              type: n,
                              ref: o,
                              animateRef: a
                          })
                      })
                  }),
                  h
                      ? (0, i.jsx)(E.Z, {
                            positionTargetRef: _ && !f ? l : o,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
