n.r(t),
    n.d(t, {
        default: function () {
            return M;
        }
    }),
    n(47120);
var r = n(735250),
    i = n(470079),
    E = n(442837),
    s = n(481060),
    u = n(377171),
    a = n(592125),
    l = n(594174),
    o = n(5192),
    c = n(571826),
    _ = n(630759),
    d = n(539067),
    f = n(210975),
    S = n(301107),
    I = n(65692),
    R = n(785792),
    C = n(190054),
    A = n(245581),
    Z = n(760373),
    T = n(981631),
    g = n(689938),
    y = n(756843);
function U(e) {
    let { badgeText: t, badgeColor: n } = e,
        E = i.useRef(t),
        u = i.useRef(n);
    return (0, r.jsx)(s.TextBadge, {
        text: E.current,
        color: u.current
    });
}
function M(e) {
    let { transitionState: t, userId: n, channelId: M, onClose: N } = e,
        p = (0, E.e7)([l.default], () => l.default.getUser(n)),
        F = (0, E.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getChannel(M)) || void 0 === e ? void 0 : e.getGuildId();
        }),
        h = o.ZP.useName(F, null, p),
        { fingerprint: m, userKey: D, loading: V } = (0, I.q)({ userId: n }),
        K = (0, S.W)({
            fingerprintBase64: m,
            chunkSize: Z.iQ,
            desiredLength: Z.KN
        }),
        O = i.useCallback(() => {
            (0, c.s$)({
                userId: n,
                channelId: M
            });
        }, [M, n]),
        L = (0, f.wV)({
            userId: n,
            channelId: M,
            location: 'WebSecureFramesUserVerificationModal'
        }),
        { isPersistentCode: v, isCurrentUserPersistent: b, isOtherUserPersistent: w, loading: Y } = (0, d.y)({ userId: n }),
        k = i.useCallback(() => {
            null != D && ((0, _.TQ)(n, D, v, M, T.Sbl.E2EE_USER_VERIFY_MODAL), N());
        }, [D, n, v, M, N]),
        x = i.useCallback(() => {
            null != D && ((0, _.LO)(n, D, v), N());
        }, [D, n, v, N]),
        [B, P] = i.useMemo(() => (L ? [g.Z.Messages.E2EE_VERIFIED, u.Z.BG_BRAND] : [g.Z.Messages.NEW, u.Z.STATUS_DANGER]), [L]),
        G = i.useMemo(
            () =>
                (0, _.kK)({
                    isCurrentUserPersistent: b,
                    isOtherUserPersistent: w,
                    otherUserNickname: h
                }),
            [b, w, h]
        );
    return (
        i.useEffect(() => {
            (0, c.Rq)({
                userId: n,
                channelId: M
            });
        }, [M, n]),
        (0, r.jsxs)(A.Z, {
            transitionState: t,
            title: g.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: g.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: h }),
            children: [
                (0, r.jsxs)('div', {
                    className: y.verification,
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.header,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: g.Z.Messages.E2EE_VERIFICATION_CODE
                                }),
                                null != K &&
                                    (0, r.jsx)(C.H, {
                                        className: y.copyIcon,
                                        chunks: K,
                                        color: s.tokens.colors.INTERACTIVE_NORMAL,
                                        onCopy: O
                                    }),
                                Y || V
                                    ? (0, r.jsx)(s.Spinner, {
                                          className: y.spinner,
                                          type: s.SpinnerTypes.SPINNING_CIRCLE
                                      })
                                    : (0, r.jsx)(U, {
                                          badgeText: B,
                                          badgeColor: P
                                      })
                            ]
                        }),
                        (0, r.jsx)(R.b, {
                            className: y.code,
                            chunks: K,
                            columns: Z.ak
                        })
                    ]
                }),
                (0, r.jsx)(s.Text, {
                    className: y.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: G
                }),
                (0, r.jsx)(s.Button, {
                    fullWidth: !0,
                    className: y.verifiedButton,
                    color: s.ButtonColors.BRAND,
                    size: s.ButtonSizes.MEDIUM,
                    look: s.ButtonLooks.FILLED,
                    disabled: null == m || Y || V,
                    onClick: L ? x : k,
                    children: L ? g.Z.Messages.E2EE_CLEAR_VERIFICATION : g.Z.Messages.E2EE_MARK_AS_VERIFIED
                }),
                (0, r.jsx)(s.Button, {
                    fullWidth: !0,
                    color: s.ButtonColors.PRIMARY,
                    size: s.ButtonSizes.MEDIUM,
                    look: s.ButtonLooks.FILLED,
                    onClick: N,
                    children: g.Z.Messages.CANCEL
                })
            ]
        })
    );
}
