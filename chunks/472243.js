n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(849522),
    d = n(639119),
    _ = n(594174),
    E = n(74538),
    f = n(694320),
    h = n(981631),
    p = n(474936),
    m = n(689938),
    I = n(766905);
function T(e) {
    var t, n, i, T;
    let { type: g, textValue: S, maxCharacterCount: A, showRemainingCharsAfterCount: v, className: N } = e,
        O = (0, o.e7)([_.default], () => E.ZP.canUseIncreasedMessageLength(_.default.getCurrentUser())),
        R = (0, c.Z)(),
        C = null != A ? A : R,
        y = null !== (T = null != v ? v : A) && void 0 !== T ? T : R / 10,
        L = S.length,
        b = null != g.upsellLongMessages && (null != L ? L : 0) > h.J6R && O,
        D = null != g.upsellLongMessages && !O,
        M = (null === (n = (0, d.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === p.Si.TIER_2,
        P = C - L,
        U = P > y,
        w = P < 0 && M,
        x = 0 === P ? m.Z.Messages.CHARACTER_COUNT_AT_LIMIT : P > 0 ? m.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({ count: P }) : m.Z.Messages.CHARACTER_COUNT_OVER_LIMIT,
        { analyticsLocations: G } = (0, u.ZP)(l.Z.CHARACTER_COUNT);
    return (b && P >= 0) || !U || (D && !U)
        ? (0, r.jsx)(u.Gt, {
              value: G,
              children: (0, r.jsxs)('div', {
                  className: a()(N, I.characterCount, { [I.error]: P < 0 }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: I.flairContainer,
                          children: [
                              b && P >= 0
                                  ? (0, r.jsx)(s.Tooltip, {
                                        text: m.Z.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({ maxLength: C }),
                                        position: 'top',
                                        children: (e) =>
                                            (0, r.jsx)(s.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: I.premiumFlair,
                                                ...e
                                            })
                                    })
                                  : null,
                              U || w
                                  ? null
                                  : (0, r.jsx)(s.Tooltip, {
                                        text: x,
                                        position: 'top',
                                        children: (e) =>
                                            (0, r.jsx)('span', {
                                                'aria-hidden': !0,
                                                ...e,
                                                children: P
                                            })
                                    })
                          ]
                      }),
                      (0, r.jsx)(s.HiddenVisually, { children: m.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({ count: P }) }),
                      D && !U
                          ? (0, r.jsx)(f.Z, {
                                className: I.upsell,
                                iconOnly: (null === (i = g.upsellLongMessages) || void 0 === i ? void 0 : i.iconOnly) || !1,
                                remaining: P
                            })
                          : null
                  ]
              })
          })
        : null;
}
