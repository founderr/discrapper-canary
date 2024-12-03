var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(704215),
    c = n(749280),
    d = n(481060),
    u = n(367907),
    h = n(499254),
    p = n(541099),
    m = n(827498),
    f = n(569211),
    g = n(663924),
    C = n(533379),
    x = n(404295),
    v = n(605236),
    _ = n(819640),
    I = n(291407),
    E = n(61356),
    b = n(981631),
    N = n(314734),
    Z = n(921944),
    S = n(388032),
    T = n(805660),
    j = n(795361);
let A = l.forwardRef(function (e, t) {
    let { type: n, animateRef: r } = e,
        f = (0, s.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === n),
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
    let _ = l.useCallback(() => {
        (0, u.yw)(b.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), f ? h.yT(m.ti.DISMISSED) : ((0, v.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: Z.L.TAKE_ACTION }), h.__(m._b.TEXT, n)), x();
    }, [f, n, x]);
    return (0, i.jsx)('div', {
        className: a()(T.buttonContainer, N.t4),
        ref: t,
        children: (0, i.jsx)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            tabIndex: 0,
            className: a()(T.button, { [T.buttonActive]: f }),
            onClick: _,
            'aria-label': S.intl.string(S.t.erHFxM),
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            },
            innerClassName: T.buttonContents,
            ...C,
            children: (0, i.jsx)(g, { color: 'currentColor' })
        })
    });
});
function y(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        l = (0, s.e7)([_.Z], () => _.Z.hasLayers()),
        {
            enabled: r,
            shouldShow: o,
            applicationDetails: c,
            showsTooltip: u
        } = (0, f.Z)({
            obstructedFromView: l,
            disabled: t
        });
    if (!r) return (0, i.jsx)(i.Fragment, { children: n });
    let h =
        o && (null == c ? void 0 : c.iconURL) != null
            ? (0, i.jsxs)('div', {
                  className: T.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, i.jsx)('img', {
                          className: a()(T.buttonContainer, T.button, T.channelAppLauncherButtonPopoutIcon),
                          alt: S.intl.string(S.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, i.jsx)('div', {
                          className: T.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, i.jsx)('img', {
                              className: a()(T.channelAppLauncherButtonPopoutIconShimmer),
                              alt: S.intl.string(S.t.X4IxWF),
                              src: j,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return u
        ? (0, i.jsx)(d.Tooltip, {
              text: S.intl.string(S.t.JDj6Xl),
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
    let { channel: t, type: n, animateRef: r, entryPointCommandButtonRef: a } = e,
        o = l.useRef(null),
        c = (0, C.R)({
            channel: t,
            chatInputType: n,
            location: 'chat_input'
        }),
        d = (0, E.Z)({ type: n }),
        u = (0, x.h9)(t.id, 'ChannelAppLauncher'),
        h = (0, s.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id));
    return c
        ? (0, i.jsxs)('div', {
              className: T.channelAppLauncher,
              children: [
                  (0, i.jsx)(I.Z, {
                      channel: t,
                      animationContainerClassName: T.entrypointAnimation,
                      glowClassName: T.animationGlow,
                      trinketsClassName: T.animationTrinkets,
                      children: (0, i.jsx)(y, {
                          showAppLauncherPopup: d,
                          children: (0, i.jsx)(A, {
                              type: n,
                              ref: o,
                              animateRef: r
                          })
                      })
                  }),
                  d
                      ? (0, i.jsx)(g.Z, {
                            positionTargetRef: u && !h ? a : o,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
