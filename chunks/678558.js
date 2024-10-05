n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(40851),
    u = n(906732),
    c = n(78839),
    d = n(267642),
    _ = n(879892),
    E = n(981631),
    f = n(689938),
    h = n(459671);
t.Z = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: a, buttonText: p, targetBoostedGuildTier: I, onClose: m = () => {}, closeLayer: T = () => {}, pauseAnimation: S = !1, applicationId: g, handleSubscribeModalClose: A, withHighlight: N = !1, ...O } = e,
        { analyticsLocations: R } = (0, u.ZP)(),
        v = (0, l.bp)() === E.IlC.POPOUT,
        [C, L] = i.useState(!1),
        D = null != I ? Math.max((0, d.KK)(a, I), 1) : 1,
        y = (0, d.aq)(),
        b = async () => {
            L(!0),
                await (0, _.u)({
                    analyticsLocations: R,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: D,
                    onClose: m,
                    closeLayer: T,
                    inPopout: v,
                    applicationId: g,
                    handleSubscribeModalClose: A
                }),
                L(!1);
        },
        M = c.ZP.getPremiumTypeSubscription(),
        P = (0, r.jsx)('span', { children: null != p ? p : f.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER });
    return ((null == M ? void 0 : M.isPausedOrPausePending) &&
        ((P = (0, r.jsxs)('div', {
            className: h.pausedButton,
            children: [
                (0, r.jsx)(o.LockIcon, {
                    size: 'xs',
                    className: h.lockIcon
                }),
                ' ',
                P
            ]
        })),
        (O.disabled = !0)),
    null != y)
        ? (0, r.jsx)(o.Tooltip, {
              text: y,
              'aria-label': !1,
              children: (e) =>
                  (0, r.jsx)(o.ShinyButton, {
                      ...e,
                      disabled: !0,
                      size: o.Button.Sizes.SMALL,
                      pauseAnimation: S,
                      ...O,
                      children: P
                  })
          })
        : (0, r.jsx)(o.ShinyButton, {
              size: o.Button.Sizes.SMALL,
              ...O,
              className: s()(O.className, { [h.buttonHighlighted]: N }),
              submitting: C,
              onClick: b,
              pauseAnimation: S,
              children: P
          });
};
