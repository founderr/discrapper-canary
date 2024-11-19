n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(849522),
    d = n(639119),
    f = n(594174),
    _ = n(74538),
    p = n(694320),
    h = n(981631),
    m = n(474936),
    g = n(388032),
    E = n(444045);
function v(e) {
    var t, n, i, v;
    let { type: b, textValue: I, maxCharacterCount: T, showRemainingCharsAfterCount: S, className: y } = e,
        A = (0, s.e7)([f.default], () => _.ZP.canUseIncreasedMessageLength(f.default.getCurrentUser())),
        N = (0, c.Z)(),
        C = null != T ? T : N,
        R = null !== (v = null != S ? S : T) && void 0 !== v ? v : N / 10,
        O = I.length,
        D = null != b.upsellLongMessages && (null != O ? O : 0) > h.J6R && A,
        L = null != b.upsellLongMessages && !A,
        x = (null === (n = (0, d.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === m.Si.TIER_2,
        w = C - O,
        M = w > R,
        P = w < 0 && x,
        k = 0 === w ? g.intl.string(g.t.tU6YQ0) : w > 0 ? g.intl.formatToPlainString(g.t.qH8uFR, { count: w }) : g.intl.string(g.t.YSRIqa),
        { analyticsLocations: U } = (0, u.ZP)(l.Z.CHARACTER_COUNT);
    return (D && w >= 0) || !M || (L && !M)
        ? (0, r.jsx)(u.Gt, {
              value: U,
              children: (0, r.jsxs)('div', {
                  className: a()(y, E.characterCount, { [E.error]: w < 0 }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: E.flairContainer,
                          children: [
                              D && w >= 0
                                  ? (0, r.jsx)(o.Tooltip, {
                                        text: g.intl.formatToPlainString(g.t.vcvHa2, { maxLength: C }),
                                        position: 'top',
                                        children: (e) =>
                                            (0, r.jsx)(o.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: E.premiumFlair,
                                                ...e
                                            })
                                    })
                                  : null,
                              M || P
                                  ? null
                                  : (0, r.jsx)(o.Tooltip, {
                                        text: k,
                                        position: 'top',
                                        children: (e) =>
                                            (0, r.jsx)('span', {
                                                'aria-hidden': !0,
                                                ...e,
                                                children: w
                                            })
                                    })
                          ]
                      }),
                      (0, r.jsx)(o.HiddenVisually, { children: g.intl.format(g.t.qH8uFR, { count: w }) }),
                      L && !M
                          ? (0, r.jsx)(p.Z, {
                                className: E.upsell,
                                iconOnly: (null === (i = b.upsellLongMessages) || void 0 === i ? void 0 : i.iconOnly) || !1,
                                remaining: w
                            })
                          : null
                  ]
              })
          })
        : null;
}
