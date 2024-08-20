n.r(t),
    n.d(t, {
        default: function () {
            return M;
        }
    }),
    n(47120);
var r = n(735250),
    E = n(470079),
    i = n(442837),
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
    T = n(245581),
    Z = n(760373),
    A = n(981631),
    N = n(689938),
    g = n(756843);
function y(e) {
    let { badgeText: t, badgeColor: n } = e,
        i = E.useRef(t),
        u = E.useRef(n);
    return (0, r.jsx)(s.TextBadge, {
        text: i.current,
        color: u.current
    });
}
function M(e) {
    let { transitionState: t, userId: n, channelId: M, onClose: U } = e,
        F = (0, i.e7)([l.default], () => l.default.getUser(n)),
        p = (0, i.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getChannel(M)) || void 0 === e ? void 0 : e.getGuildId();
        }),
        m = o.ZP.useName(p, null, F),
        { fingerprint: h, userKey: O, loading: V } = (0, I.q)({ userId: n }),
        D = (0, S.W)({
            fingerprintBase64: h,
            chunkSize: Z.iQ,
            desiredLength: Z.KN
        }),
        K = E.useCallback(() => {
            (0, c.s$)({
                userId: n,
                channelId: M
            });
        }, [M, n]),
        v = (0, f.wV)({
            userId: n,
            channelId: M,
            location: 'WebSecureFramesUserVerificationModal'
        }),
        { isCurrentUserKeyPersistent: L, isOtherUserKeyPersistent: b, loading: w } = (0, d.y)({ userId: n }),
        Y = E.useCallback(() => {
            null != O && ((0, _.TQ)(n, O, b, M, A.Sbl.E2EE_USER_VERIFY_MODAL), U());
        }, [O, n, b, M, U]),
        k = E.useCallback(() => {
            null != O && ((0, _.LO)(n, O, b), U());
        }, [O, n, b, U]),
        [B, x] = E.useMemo(() => (v ? [N.Z.Messages.E2EE_VERIFIED, u.Z.BG_BRAND] : [N.Z.Messages.NEW, u.Z.STATUS_DANGER]), [v]),
        P = E.useMemo(
            () =>
                (0, _.kK)({
                    isCurrentUserKeyPersistent: L,
                    isOtherUserKeyPersistent: b,
                    otherUserNickname: m
                }),
            [L, b, m]
        );
    return (
        E.useEffect(() => {
            (0, c.Rq)({
                userId: n,
                channelId: M
            });
        }, [M, n]),
        (0, r.jsxs)(T.Z, {
            transitionState: t,
            title: N.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: N.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: m }),
            children: [
                (0, r.jsxs)('div', {
                    className: g.verification,
                    children: [
                        (0, r.jsxs)('div', {
                            className: g.header,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: N.Z.Messages.E2EE_VERIFICATION_CODE
                                }),
                                null != D &&
                                    (0, r.jsx)(C.H, {
                                        className: g.copyIcon,
                                        chunks: D,
                                        color: s.tokens.colors.INTERACTIVE_NORMAL,
                                        onCopy: K
                                    }),
                                w || V
                                    ? (0, r.jsx)(s.Spinner, {
                                          className: g.spinner,
                                          type: s.SpinnerTypes.SPINNING_CIRCLE
                                      })
                                    : (0, r.jsx)(y, {
                                          badgeText: B,
                                          badgeColor: x
                                      })
                            ]
                        }),
                        (0, r.jsx)(R.b, {
                            className: g.code,
                            chunks: D,
                            columns: Z.ak
                        })
                    ]
                }),
                (0, r.jsx)(s.Text, {
                    className: g.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: P
                }),
                (0, r.jsx)(s.Button, {
                    fullWidth: !0,
                    className: g.verifiedButton,
                    color: s.ButtonColors.BRAND,
                    size: s.ButtonSizes.MEDIUM,
                    look: s.ButtonLooks.FILLED,
                    disabled: null == h || w || V,
                    onClick: v ? k : Y,
                    children: v ? N.Z.Messages.E2EE_CLEAR_VERIFICATION : N.Z.Messages.E2EE_MARK_AS_VERIFIED
                }),
                (0, r.jsx)(s.Button, {
                    fullWidth: !0,
                    color: s.ButtonColors.PRIMARY,
                    size: s.ButtonSizes.MEDIUM,
                    look: s.ButtonLooks.FILLED,
                    onClick: U,
                    children: N.Z.Messages.CANCEL
                })
            ]
        })
    );
}
