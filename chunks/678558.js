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
    _ = n(314884),
    E = n(78839),
    f = n(267642),
    h = n(879892),
    p = n(981631),
    I = n(474936),
    m = n(689938),
    T = n(459671);
t.Z = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: a, buttonText: S, targetBoostedGuildTier: g, onClose: A = () => {}, closeLayer: N = () => {}, pauseAnimation: R = !1, applicationId: O, handleSubscribeModalClose: v, withHighlight: C = !1, ...L } = e,
        { analyticsLocations: D } = (0, c.ZP)(),
        y = (0, u.bp)() === p.IlC.POPOUT,
        [b, M] = i.useState(!1),
        { fractionalState: P } = (0, d.Z)();
    !_.Z.hasFetched && (0, l.X8)();
    let U = (0, f.vx)(_.Z.boostSlots),
        w = null != g ? Math.max((0, f.KK)(a, g), 1) : 1,
        x = (0, f.aq)({ fractionalState: P }),
        G = async () => {
            M(!0),
                await (0, h.u)({
                    analyticsLocations: D,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: w,
                    onClose: A,
                    closeLayer: N,
                    inPopout: y,
                    applicationId: O,
                    handleSubscribeModalClose: v
                }),
                M(!1);
        },
        k = E.ZP.getPremiumTypeSubscription(),
        B = (0, r.jsx)('span', { children: null != S ? S : m.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER });
    return ((null == k ? void 0 : k.isPausedOrPausePending) &&
        (P === I.a$.NONE || 0 === U.length) &&
        ((B = (0, r.jsxs)('div', {
            className: T.pausedButton,
            children: [
                (0, r.jsx)(o.LockIcon, {
                    size: 'xs',
                    className: T.lockIcon
                }),
                ' ',
                B
            ]
        })),
        (L.disabled = !0)),
    null != x)
        ? (0, r.jsx)(o.Tooltip, {
              text: x,
              'aria-label': !1,
              children: (e) =>
                  (0, r.jsx)(o.ShinyButton, {
                      ...e,
                      disabled: !0,
                      size: o.Button.Sizes.SMALL,
                      pauseAnimation: R,
                      ...L,
                      children: B
                  })
          })
        : (0, r.jsx)(o.ShinyButton, {
              size: o.Button.Sizes.SMALL,
              ...L,
              className: s()(L.className, { [T.buttonHighlighted]: C }),
              submitting: b,
              onClick: G,
              pauseAnimation: R,
              children: B
          });
};
