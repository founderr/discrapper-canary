n.d(t, {
    G: function () {
        return L;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(873546),
    s = n(442837),
    o = n(911969),
    l = n(607070),
    u = n(998698),
    c = n(211242),
    d = n(540059),
    f = n(276444),
    _ = n(599659),
    p = n(963198),
    h = n(286961),
    m = n(913663),
    g = n(117530),
    E = n(594174),
    v = n(74538),
    I = n(94161),
    T = n(9277),
    b = n(58995),
    S = n(897291),
    y = n(466711),
    A = n(764794),
    N = n(319417),
    C = n(728386),
    R = n(474936),
    O = n(553796);
function D(e) {
    let { disabled: t, channel: n } = e,
        { enabled: i } = _.O.useExperiment({ location: 'gift-button' }),
        a = (0, h.Z)();
    return i
        ? (0, r.jsx)(b.Z, {
              disabled: t,
              channel: n
          })
        : null != a
          ? (0, r.jsx)(y.Z, {
                giftingPromotionConfig: a,
                disabled: t,
                channel: n
            })
          : (0, r.jsx)(S.Z, {
                disabled: t,
                channel: n
            });
}
function L(e, t, n) {
    return (0, s.e7)([m.Z, g.Z], () => {
        let r = m.Z.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === g.Z.getUploads(e, t.drafts.type).length && n && !i;
    });
}
t.Z = i.memo(function (e) {
    var t, n, i, _, h, m, g, b;
    let { type: S, disabled: y, channel: x, handleSubmit: w, isEmpty: P, showAllButtons: M, children: k } = e,
        U = (0, s.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        B = L(x.id, S, P),
        { activeCommand: G, activeCommandOption: Z } = (0, s.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(x.id),
            activeCommandOption: u.Z.getActiveOption(x.id)
        })),
        { paymentsBlocked: F } = c.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        V = [],
        { enabled: j } = p.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        H = E.default.getCurrentUser(),
        Y = null !== (_ = (0, s.e7)([f.Z], () => (j && v.ZP.isPremiumExactly(H, R.p9.TIER_2) ? f.Z.getReferralsRemaining() : 0))) && void 0 !== _ ? _ : 0,
        W = (0, s.e7)([f.Z], () => {
            if (!x.isDM() || void 0 === x.recipients || x.recipients.length > 1 || !j) return !1;
            let e = x.recipients[0];
            return f.Z.getSentUserIds().includes(e);
        }),
        K = (0, s.e7)([E.default], () => (!x.isDM() || void 0 === x.recipients || x.recipients.length > 1 ? null : E.default.getUser(x.recipients[0]))),
        [z, q] = (0, s.Wu)([f.Z], () => {
            let e = [!1, !1];
            if (!x.isDM() || void 0 === x.recipients || x.recipients.length > 1 || null == K || K.bot) return e;
            let t = W || Y > 0,
                n = f.Z.getRecipientEligibility(K.id);
            return [j && t && n, n];
        }),
        Q = (0, d.Q3)('ChannelTextAreaButtons');
    return (!a.tq &&
        (x.isDM() &&
            (null === (h = S.gifts) || void 0 === h ? void 0 : h.button) != null &&
            null == G &&
            (v.ZP.isPremiumExactly(H, R.p9.TIER_2) && q && p.Z.trackExposure({ location: 'dc120b_5' }),
            z &&
                V.push(
                    (0, r.jsx)(
                        A.Z,
                        {
                            disabled: y,
                            referralsRemaining: Y,
                            channel: x,
                            isResending: W
                        },
                        'referral'
                    )
                )),
        (null === (m = S.gifts) || void 0 === m ? void 0 : m.button) != null &&
            null == G &&
            !F &&
            (null == K || v.ZP.isPremiumEligible(K)) &&
            V.push(
                (0, r.jsx)(
                    D,
                    {
                        disabled: y,
                        channel: x
                    },
                    'gift'
                )
            ),
        (null === (g = S.gifs) || void 0 === g ? void 0 : g.button) != null &&
            null == G &&
            M &&
            V.push(
                (0, r.jsx)(
                    T.Z,
                    {
                        disabled: y,
                        type: S
                    },
                    'gif'
                )
            ),
        (null === (b = S.stickers) || void 0 === b ? void 0 : b.button) != null &&
            null == G &&
            M &&
            V.push(
                (0, r.jsx)(
                    C.Z,
                    {
                        disabled: y,
                        type: S
                    },
                    'sticker'
                )
            )),
    (null === (t = S.emojis) || void 0 === t ? void 0 : t.button) != null &&
        (null == G || (null != Z && Z.type !== o.jw.ATTACHMENT)) &&
        V.push(
            (0, r.jsx)(
                I.Z,
                {
                    disabled: y,
                    type: S
                },
                'emoji'
            )
        ),
    (null === (n = S.submit) || void 0 === n ? void 0 : n.button) != null &&
        ((null === (i = S.submit) || void 0 === i ? void 0 : i.ignorePreference) || U) &&
        !Q &&
        V.push(
            (0, r.jsx)(
                N.Z,
                {
                    onClick: w,
                    disabled: y || B
                },
                'submit'
            )
        ),
    null != k && V.push(k),
    0 === V.length)
        ? null
        : (0, r.jsx)('div', {
              className: O.buttons,
              children: V
          });
});
