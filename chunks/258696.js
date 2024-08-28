n(47120), n(653041);
var r = n(735250),
    i = n(470079),
    a = n(873546),
    s = n(442837),
    o = n(911969),
    l = n(607070),
    u = n(998698),
    c = n(211242),
    d = n(276444),
    _ = n(646476),
    E = n(963198),
    f = n(913663),
    h = n(117530),
    p = n(594174),
    I = n(74538),
    m = n(94161),
    T = n(9277),
    g = n(897291),
    S = n(764794),
    A = n(241553),
    N = n(319417),
    O = n(728386),
    R = n(474936),
    v = n(305489);
function C(e) {
    let { disabled: t, channel: n } = e,
        { enabled: a } = _.ZP.useExperiment({ location: 'dc120b_1' }, { autoTrackExposure: !1 }),
        s = (0, _.rK)();
    return (
        i.useEffect(() => {
            s && _.ZP.trackExposure({ location: 'dc120b_2' });
        }, [s]),
        a && s
            ? (0, r.jsx)(A.Z, {
                  disabled: t,
                  channel: n
              })
            : (0, r.jsx)(g.Z, {
                  disabled: t,
                  channel: n
              })
    );
}
let y = i.forwardRef(function (e, t) {
    var n, i, _, g, A, y, D, L;
    let { type: b, disabled: M, channel: P, handleSubmit: U, isEmpty: w } = e,
        x = (0, s.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        G = (0, s.e7)([f.Z], () => f.Z.getStickerPreview(P.id, b.drafts.type)),
        k = null != G && G.length > 0,
        B = (0, s.e7)([h.Z], () => h.Z.getUploads(P.id, b.drafts.type)),
        { activeCommand: F, activeCommandOption: V } = (0, s.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(P.id),
            activeCommandOption: u.Z.getActiveOption(P.id)
        })),
        { paymentsBlocked: H } = c.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        Z = [],
        { enabled: Y } = E.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        j = p.default.getCurrentUser(),
        W = null !== (g = (0, s.e7)([d.Z], () => (Y && I.ZP.isPremiumExactly(j, R.p9.TIER_2) ? d.Z.getReferralsRemaining() : 0))) && void 0 !== g ? g : 0,
        K = (0, s.e7)([d.Z], () => {
            if (!P.isDM() || void 0 === P.recipients || P.recipients.length > 1 || !Y) return !1;
            let e = P.recipients[0];
            return d.Z.getSentUserIds().includes(e);
        }),
        [z, q] = (0, s.Wu)([d.Z, p.default], () => {
            let e = [!1, !1];
            if (!P.isDM() || void 0 === P.recipients || P.recipients.length > 1) return e;
            let t = P.recipients[0],
                n = p.default.getUser(t);
            if (null == n || n.bot) return e;
            let r = K || W > 0,
                i = d.Z.getRecipientEligibility(t);
            return [Y && r && i, i];
        });
    return (!a.tq &&
        (P.isDM() &&
            (null === (A = b.gifts) || void 0 === A ? void 0 : A.button) != null &&
            null == F &&
            (I.ZP.isPremiumExactly(j, R.p9.TIER_2) && q && E.Z.trackExposure({ location: 'dc120b_5' }),
            z &&
                Z.push(
                    (0, r.jsx)(
                        S.Z,
                        {
                            disabled: M,
                            referralsRemaining: W,
                            channel: P,
                            isResending: K
                        },
                        'referral'
                    )
                )),
        (null === (y = b.gifts) || void 0 === y ? void 0 : y.button) != null &&
            null == F &&
            !H &&
            Z.push(
                (0, r.jsx)(
                    C,
                    {
                        disabled: M,
                        channel: P
                    },
                    'gift'
                )
            ),
        (null === (D = b.gifs) || void 0 === D ? void 0 : D.button) != null &&
            null == F &&
            Z.push(
                (0, r.jsx)(
                    T.Z,
                    {
                        disabled: M,
                        type: b
                    },
                    'gif'
                )
            ),
        (null === (L = b.stickers) || void 0 === L ? void 0 : L.button) != null &&
            null == F &&
            Z.push(
                (0, r.jsx)(
                    O.Z,
                    {
                        disabled: M,
                        type: b
                    },
                    'sticker'
                )
            )),
    (null === (n = b.emojis) || void 0 === n ? void 0 : n.button) != null &&
        (null == F || (null != V && V.type !== o.jw.ATTACHMENT)) &&
        Z.push(
            (0, r.jsx)(
                m.Z,
                {
                    disabled: M,
                    type: b
                },
                'emoji'
            )
        ),
    (null === (i = b.submit) || void 0 === i ? void 0 : i.button) != null &&
        ((null === (_ = b.submit) || void 0 === _ ? void 0 : _.ignorePreference) || x) &&
        Z.push(
            (0, r.jsx)(
                N.Z,
                {
                    onClick: U,
                    disabled: M || (0 === B.length && w && !k)
                },
                'submit'
            )
        ),
    0 === Z.length)
        ? null
        : (0, r.jsx)('div', {
              className: v.buttons,
              ref: t,
              children: Z
          });
});
t.Z = i.memo(y);
