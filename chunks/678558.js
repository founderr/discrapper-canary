var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(40851),
    c = n(906732),
    d = n(78839),
    _ = n(267642),
    E = n(879892),
    f = n(981631),
    h = n(689938),
    p = n(459671);
let m = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: r, buttonText: o, targetBoostedGuildTier: m, onClose: I = () => {}, closeLayer: T = () => {}, pauseAnimation: g = !1, applicationId: S, handleSubscribeModalClose: A, withHighlight: v = !1, ...N } = e,
        { analyticsLocations: O } = (0, c.ZP)(),
        R = (0, u.bp)() === f.IlC.POPOUT,
        [C, y] = a.useState(!1),
        L = null != m ? Math.max((0, _.KK)(r, m), 1) : 1,
        b = (0, _.aq)(),
        D = async () => {
            y(!0),
                await (0, E.u)({
                    analyticsLocations: O,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: r,
                    numberOfBoostsToAdd: L,
                    onClose: I,
                    closeLayer: T,
                    inPopout: R,
                    applicationId: S,
                    handleSubscribeModalClose: A
                }),
                y(!1);
        },
        M = d.ZP.getPremiumTypeSubscription(),
        P = (0, i.jsx)('span', { children: null != o ? o : h.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER });
    return ((null == M ? void 0 : M.isPausedOrPausePending) &&
        ((P = (0, i.jsxs)('div', {
            className: p.pausedButton,
            children: [
                (0, i.jsx)(l.LockIcon, {
                    size: 'xs',
                    className: p.lockIcon
                }),
                ' ',
                P
            ]
        })),
        (N.disabled = !0)),
    null != b)
        ? (0, i.jsx)(l.Tooltip, {
              text: b,
              'aria-label': !1,
              children: (e) =>
                  (0, i.jsx)(l.ShinyButton, {
                      ...e,
                      disabled: !0,
                      size: l.Button.Sizes.SMALL,
                      pauseAnimation: g,
                      ...N,
                      children: P
                  })
          })
        : (0, i.jsx)(l.ShinyButton, {
              size: l.Button.Sizes.SMALL,
              ...N,
              className: s()(N.className, { [p.buttonHighlighted]: v }),
              submitting: C,
              onClick: D,
              pauseAnimation: g,
              children: P
          });
};
t.Z = m;
