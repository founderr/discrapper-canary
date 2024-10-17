n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(849522),
    d = n(639119),
    _ = n(594174),
    E = n(74538),
    f = n(694320),
    h = n(981631),
    p = n(474936),
    I = n(689938),
    m = n(766905);
function T(e) {
    var t, n, i, T;
    let { type: S, textValue: g, maxCharacterCount: A, showRemainingCharsAfterCount: N, className: R } = e,
        O = (0, s.e7)([_.default], () => E.ZP.canUseIncreasedMessageLength(_.default.getCurrentUser())),
        v = (0, c.Z)(),
        C = null != A ? A : v,
        L = null !== (T = null != N ? N : A) && void 0 !== T ? T : v / 10,
        D = g.length,
        y = null != S.upsellLongMessages && (null != D ? D : 0) > h.J6R && O,
        b = null != S.upsellLongMessages && !O,
        M = (null === (n = (0, d.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === p.Si.TIER_2,
        P = C - D,
        U = P > L,
        w = P < 0 && M,
        x = 0 === P ? I.Z.Messages.CHARACTER_COUNT_AT_LIMIT : P > 0 ? I.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({ count: P }) : I.Z.Messages.CHARACTER_COUNT_OVER_LIMIT,
        { analyticsLocations: G } = (0, u.ZP)(l.Z.CHARACTER_COUNT);
    return (y && P >= 0) || !U || (b && !U)
        ? (0, r.jsx)(u.Gt, {
              value: G,
              children: (0, r.jsxs)('div', {
                  className: a()(R, m.characterCount, { [m.error]: P < 0 }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: m.flairContainer,
                          children: [
                              y && P >= 0
                                  ? (0, r.jsx)(o.Tooltip, {
                                        text: I.Z.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({ maxLength: C }),
                                        position: 'top',
                                        children: (e) =>
                                            (0, r.jsx)(o.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: m.premiumFlair,
                                                ...e
                                            })
                                    })
                                  : null,
                              U || w
                                  ? null
                                  : (0, r.jsx)(o.Tooltip, {
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
                      (0, r.jsx)(o.HiddenVisually, { children: I.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({ count: P }) }),
                      b && !U
                          ? (0, r.jsx)(f.Z, {
                                className: m.upsell,
                                iconOnly: (null === (i = S.upsellLongMessages) || void 0 === i ? void 0 : i.iconOnly) || !1,
                                remaining: P
                            })
                          : null
                  ]
              })
          })
        : null;
}
