n(47120), n(653041);
var r = n(735250),
    i = n(470079),
    a = n(873546),
    s = n(442837),
    o = n(911969),
    l = n(607070),
    u = n(998698),
    c = n(211242),
    d = n(540059),
    _ = n(276444),
    E = n(646476),
    f = n(599659),
    h = n(963198),
    p = n(913663),
    I = n(117530),
    m = n(594174),
    T = n(74538),
    S = n(94161),
    g = n(9277),
    A = n(58995),
    N = n(897291),
    R = n(764794),
    O = n(241553),
    v = n(319417),
    C = n(728386),
    L = n(474936),
    D = n(933283);
function y(e) {
    let { disabled: t, channel: n } = e,
        { enabled: a } = E.ZP.useExperiment({ location: 'dc120b_1' }, { autoTrackExposure: !1 }),
        s = (0, E.rK)();
    i.useEffect(() => {
        s && E.ZP.trackExposure({ location: 'dc120b_2' });
    }, [s]);
    let { enabled: o } = f.O.useExperiment({ location: 'gift-button' }),
        l = a && s;
    return o
        ? (0, r.jsx)(A.Z, {
              disabled: t,
              channel: n
          })
        : l
          ? (0, r.jsx)(O.Z, {
                disabled: t,
                channel: n
            })
          : (0, r.jsx)(N.Z, {
                disabled: t,
                channel: n
            });
}
t.Z = i.memo(function (e) {
    var t, n, i, E, f, A, N, O;
    let { type: b, disabled: M, channel: P, handleSubmit: U, isEmpty: w, showAllButtons: x } = e,
        G = (0, s.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        k = (0, s.e7)([p.Z], () => p.Z.getStickerPreview(P.id, b.drafts.type)),
        B = null != k && k.length > 0,
        F = (0, s.e7)([I.Z], () => I.Z.getUploads(P.id, b.drafts.type)),
        { activeCommand: V, activeCommandOption: H } = (0, s.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(P.id),
            activeCommandOption: u.Z.getActiveOption(P.id)
        })),
        { paymentsBlocked: Z } = c.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        Y = [],
        { enabled: j } = h.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        W = m.default.getCurrentUser(),
        K = null !== (E = (0, s.e7)([_.Z], () => (j && T.ZP.isPremiumExactly(W, L.p9.TIER_2) ? _.Z.getReferralsRemaining() : 0))) && void 0 !== E ? E : 0,
        z = (0, s.e7)([_.Z], () => {
            if (!P.isDM() || void 0 === P.recipients || P.recipients.length > 1 || !j) return !1;
            let e = P.recipients[0];
            return _.Z.getSentUserIds().includes(e);
        }),
        q = (0, s.e7)([m.default], () => (!P.isDM() || void 0 === P.recipients || P.recipients.length > 1 ? null : m.default.getUser(P.recipients[0]))),
        [Q, X] = (0, s.Wu)([_.Z], () => {
            let e = [!1, !1];
            if (!P.isDM() || void 0 === P.recipients || P.recipients.length > 1 || null == q || q.bot) return e;
            let t = z || K > 0,
                n = _.Z.getRecipientEligibility(q.id);
            return [j && t && n, n];
        }),
        $ = (0, d.Q)('ChannelTextAreaButtons');
    return (!a.tq &&
        (P.isDM() &&
            (null === (f = b.gifts) || void 0 === f ? void 0 : f.button) != null &&
            null == V &&
            (T.ZP.isPremiumExactly(W, L.p9.TIER_2) && X && h.Z.trackExposure({ location: 'dc120b_5' }),
            Q &&
                Y.push(
                    (0, r.jsx)(
                        R.Z,
                        {
                            disabled: M,
                            referralsRemaining: K,
                            channel: P,
                            isResending: z
                        },
                        'referral'
                    )
                )),
        (null === (A = b.gifts) || void 0 === A ? void 0 : A.button) != null &&
            null == V &&
            !Z &&
            (null == q || T.ZP.isPremiumEligible(q)) &&
            Y.push(
                (0, r.jsx)(
                    y,
                    {
                        disabled: M,
                        channel: P
                    },
                    'gift'
                )
            ),
        (null === (N = b.gifs) || void 0 === N ? void 0 : N.button) != null &&
            null == V &&
            x &&
            Y.push(
                (0, r.jsx)(
                    g.Z,
                    {
                        disabled: M,
                        type: b
                    },
                    'gif'
                )
            ),
        (null === (O = b.stickers) || void 0 === O ? void 0 : O.button) != null &&
            null == V &&
            x &&
            Y.push(
                (0, r.jsx)(
                    C.Z,
                    {
                        disabled: M,
                        type: b
                    },
                    'sticker'
                )
            )),
    (null === (t = b.emojis) || void 0 === t ? void 0 : t.button) != null &&
        (null == V || (null != H && H.type !== o.jw.ATTACHMENT)) &&
        Y.push(
            (0, r.jsx)(
                S.Z,
                {
                    disabled: M,
                    type: b
                },
                'emoji'
            )
        ),
    (null === (n = b.submit) || void 0 === n ? void 0 : n.button) != null &&
        ((null === (i = b.submit) || void 0 === i ? void 0 : i.ignorePreference) || G) &&
        Y.push(
            (0, r.jsx)(
                v.Z,
                {
                    onClick: U,
                    disabled: M || (0 === F.length && w && !B)
                },
                'submit'
            )
        ),
    $ && Y.push((0, r.jsx)('div', { id: 'visual-refresh-app-launcher-portal' }, 'app')),
    0 === Y.length)
        ? null
        : (0, r.jsx)('div', {
              className: D.buttons,
              children: Y
          });
});
