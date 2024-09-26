var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(873546),
    l = n(442837),
    u = n(911969),
    c = n(607070),
    d = n(998698),
    _ = n(211242),
    E = n(276444),
    f = n(646476),
    h = n(599659),
    p = n(963198),
    m = n(913663),
    I = n(117530),
    T = n(594174),
    g = n(74538),
    S = n(94161),
    A = n(9277),
    v = n(58995),
    N = n(897291),
    O = n(764794),
    R = n(241553),
    C = n(319417),
    y = n(728386),
    L = n(474936),
    b = n(933283);
function D(e) {
    let { disabled: t, channel: n } = e,
        { enabled: r } = f.ZP.useExperiment({ location: 'dc120b_1' }, { autoTrackExposure: !1 }),
        i = (0, f.rK)();
    o.useEffect(() => {
        i && f.ZP.trackExposure({ location: 'dc120b_2' });
    }, [i]);
    let { enabled: s } = h.O.useExperiment({ location: 'gift-button' }),
        l = r && i;
    return s
        ? (0, a.jsx)(v.Z, {
              disabled: t,
              channel: n
          })
        : l
          ? (0, a.jsx)(R.Z, {
                disabled: t,
                channel: n
            })
          : (0, a.jsx)(N.Z, {
                disabled: t,
                channel: n
            });
}
function M(e) {
    var t, n, r, i, o, f, h, v;
    let { type: N, disabled: R, channel: M, handleSubmit: P, isEmpty: U, showAllButtons: w } = e,
        x = (0, l.e7)([c.Z], () => c.Z.isSubmitButtonEnabled),
        G = (0, l.e7)([m.Z], () => m.Z.getStickerPreview(M.id, N.drafts.type)),
        k = null != G && G.length > 0,
        B = (0, l.e7)([I.Z], () => I.Z.getUploads(M.id, N.drafts.type)),
        { activeCommand: F, activeCommandOption: Z } = (0, l.cj)([d.Z], () => ({
            activeCommand: d.Z.getActiveCommand(M.id),
            activeCommandOption: d.Z.getActiveOption(M.id)
        })),
        { paymentsBlocked: V } = _.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        H = [],
        { enabled: Y } = p.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        j = T.default.getCurrentUser(),
        W = null !== (i = (0, l.e7)([E.Z], () => (Y && g.ZP.isPremiumExactly(j, L.p9.TIER_2) ? E.Z.getReferralsRemaining() : 0))) && void 0 !== i ? i : 0,
        K = (0, l.e7)([E.Z], () => {
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || !Y) return !1;
            let e = M.recipients[0];
            return E.Z.getSentUserIds().includes(e);
        }),
        z = (0, l.e7)([T.default], () => (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 ? null : T.default.getUser(M.recipients[0]))),
        [q, Q] = (0, l.Wu)([E.Z], () => {
            let e = [!1, !1];
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || null == z || z.bot) return e;
            let t = K || W > 0,
                n = E.Z.getRecipientEligibility(z.id);
            return [Y && t && n, n];
        });
    return (!s.tq &&
        (M.isDM() &&
            (null === (o = N.gifts) || void 0 === o ? void 0 : o.button) != null &&
            null == F &&
            (g.ZP.isPremiumExactly(j, L.p9.TIER_2) && Q && p.Z.trackExposure({ location: 'dc120b_5' }),
            q &&
                H.push(
                    (0, a.jsx)(
                        O.Z,
                        {
                            disabled: R,
                            referralsRemaining: W,
                            channel: M,
                            isResending: K
                        },
                        'referral'
                    )
                )),
        (null === (f = N.gifts) || void 0 === f ? void 0 : f.button) != null &&
            null == F &&
            !V &&
            (null == z || g.ZP.isPremiumEligible(z)) &&
            H.push(
                (0, a.jsx)(
                    D,
                    {
                        disabled: R,
                        channel: M
                    },
                    'gift'
                )
            ),
        (null === (h = N.gifs) || void 0 === h ? void 0 : h.button) != null &&
            null == F &&
            w &&
            H.push(
                (0, a.jsx)(
                    A.Z,
                    {
                        disabled: R,
                        type: N
                    },
                    'gif'
                )
            ),
        (null === (v = N.stickers) || void 0 === v ? void 0 : v.button) != null &&
            null == F &&
            w &&
            H.push(
                (0, a.jsx)(
                    y.Z,
                    {
                        disabled: R,
                        type: N
                    },
                    'sticker'
                )
            )),
    (null === (t = N.emojis) || void 0 === t ? void 0 : t.button) != null &&
        (null == F || (null != Z && Z.type !== u.jw.ATTACHMENT)) &&
        H.push(
            (0, a.jsx)(
                S.Z,
                {
                    disabled: R,
                    type: N
                },
                'emoji'
            )
        ),
    (null === (n = N.submit) || void 0 === n ? void 0 : n.button) != null &&
        ((null === (r = N.submit) || void 0 === r ? void 0 : r.ignorePreference) || x) &&
        H.push(
            (0, a.jsx)(
                C.Z,
                {
                    onClick: P,
                    disabled: R || (0 === B.length && U && !k)
                },
                'submit'
            )
        ),
    0 === H.length)
        ? null
        : (0, a.jsx)('div', {
              className: b.buttons,
              children: H
          });
}
t.Z = o.memo(M);
