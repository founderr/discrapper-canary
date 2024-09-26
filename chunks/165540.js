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
    m = n(424602),
    p = n(541099),
    _ = n(827498),
    f = n(663924),
    E = n(998698),
    g = n(873387),
    C = n(605236),
    I = n(291407),
    T = n(981631),
    x = n(314734),
    S = n(921944),
    v = n(689938),
    N = n(786899);
let A = s.forwardRef(function (e, t) {
    let { type: n, animateRef: a } = e,
        m = (0, r.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === n),
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
    let I = s.useCallback(() => {
        (0, d.yw)(T.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), m ? h.y(_.ti.DISMISSED) : ((0, C.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: S.L.TAKE_ACTION }), h._(_._b.TEXT, n)), g();
    }, [m, n, g]);
    return (0, i.jsx)('div', {
        className: l()(N.buttonContainer, x.t4),
        ref: t,
        children: (0, i.jsx)(u.Button, {
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            tabIndex: 0,
            className: l()(N.button, { [N.buttonActive]: m }),
            onClick: I,
            'aria-label': v.Z.Messages.APP_LAUNCHER_ENTRYPOINT_BUTTON_ARIA_LABEL,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            },
            innerClassName: N.buttonContents,
            ...E,
            children: (0, i.jsx)(f, { color: 'currentColor' })
        })
    });
});
t.Z = s.memo(function (e) {
    let { channel: t, type: n, animateRef: a } = e,
        l = s.useRef(null),
        o = (0, g.g)(t),
        { activeCommand: c } = (0, r.cj)([E.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? E.Z.getActiveCommand(t.id) : null };
        }),
        u = m.T.useExperiment({ location: 'chat_input' }, { autoTrackExposure: !0 }).enabled,
        d = (0, r.e7)(
            [p.Z],
            () => {
                let e = p.Z.activeViewType();
                return null != e && e === n && p.Z.shouldShowPopup();
            },
            [n]
        );
    return u && null == c && o
        ? (0, i.jsxs)('div', {
              className: N.channelAppLauncher,
              children: [
                  (0, i.jsx)(I.Z, {
                      channel: t,
                      animationContainerClassName: N.entrypointAnimation,
                      glowClassName: N.animationGlow,
                      trinketsClassName: N.animationTrinkets,
                      children: (0, i.jsx)(A, {
                          type: n,
                          ref: l,
                          animateRef: a
                      })
                  }),
                  d
                      ? (0, i.jsx)(f.Z, {
                            positionTargetRef: l,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
