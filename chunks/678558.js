n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(179360),
    u = n(40851),
    c = n(906732),
    d = n(975298),
    f = n(125529),
    _ = n(314884),
    p = n(78839),
    h = n(267642),
    m = n(879892),
    g = n(981631),
    E = n(474936),
    v = n(388032),
    I = n(459671);
t.Z = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: a, buttonText: b, targetBoostedGuildTier: S, onClose: T = () => {}, closeLayer: y = () => {}, pauseAnimation: A = !1, applicationId: N, handleSubscribeModalClose: C, withHighlight: R = !1, ...O } = e,
        { analyticsLocations: D } = (0, c.ZP)(),
        L = (0, u.bp)() === g.IlC.POPOUT,
        [x, w] = i.useState(!1),
        { fractionalState: M } = (0, d.Z)();
    !_.Z.hasFetched && (0, l.X8)();
    let P = (0, h.vx)(_.Z.boostSlots),
        k = null != S ? Math.max((0, h.KK)(a, S), 1) : 1,
        U = (0, h.aq)({ fractionalState: M }),
        G = async () => {
            w(!0),
                await (0, m.u)({
                    analyticsLocations: D,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: k,
                    onClose: T,
                    closeLayer: y,
                    inPopout: L,
                    applicationId: N,
                    handleSubscribeModalClose: C
                }),
                w(!1);
        },
        B = p.ZP.getPremiumTypeSubscription(),
        Z = (0, r.jsx)('span', { children: null != b ? b : v.intl.string(v.t.gKmQ1N) });
    return ((null == B ? void 0 : B.isPausedOrPausePending) &&
        (M === E.a$.NONE || 0 === P.length) &&
        ((Z = (0, r.jsxs)('div', {
            className: I.pausedButton,
            children: [
                (0, r.jsx)(o.LockIcon, {
                    size: 'xs',
                    className: I.lockIcon
                }),
                ' ',
                Z
            ]
        })),
        (O.disabled = !0)),
    null != U)
        ? (0, r.jsx)(f.Z, {
              text: U,
              'aria-label': !1,
              children: (e) =>
                  (0, r.jsx)(o.ShinyButton, {
                      ...e,
                      disabled: !0,
                      size: o.Button.Sizes.SMALL,
                      pauseAnimation: A,
                      ...O,
                      children: Z
                  })
          })
        : (0, r.jsx)(o.ShinyButton, {
              size: o.Button.Sizes.SMALL,
              ...O,
              className: s()(O.className, { [I.buttonHighlighted]: R }),
              submitting: x,
              onClick: G,
              pauseAnimation: A,
              children: Z
          });
};
