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
    Z = n(245581),
    A = n(760373),
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
    let { transitionState: t, userId: n, channelId: M, onClose: F } = e,
        N = (0, E.e7)([l.default], () => l.default.getUser(n)),
        p = (0, E.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getChannel(M)) || void 0 === e ? void 0 : e.getGuildId();
        }),
        m = o.ZP.useName(p, null, N),
        { fingerprint: h, userKey: D, loading: V } = (0, I.q)({ userId: n }),
        K = (0, S.W)({
            fingerprintBase64: h,
            chunkSize: A.iQ,
            desiredLength: A.KN
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
        { isCurrentUserKeyPersistent: v, isOtherUserKeyPersistent: b, loading: w } = (0, d.y)({ userId: n }),
        Y = i.useCallback(() => {
            null != D && ((0, _.TQ)(n, D, b, M, T.Sbl.E2EE_USER_VERIFY_MODAL), F());
        }, [D, n, b, M, F]),
        k = i.useCallback(() => {
            null != D && ((0, _.LO)(n, D, b), F());
        }, [D, n, b, F]),
        [x, B] = i.useMemo(() => (L ? [g.Z.Messages.E2EE_VERIFIED, u.Z.BG_BRAND] : [g.Z.Messages.NEW, u.Z.STATUS_DANGER]), [L]),
        P = i.useMemo(
            () =>
                (0, _.kK)({
                    isCurrentUserKeyPersistent: v,
                    isOtherUserKeyPersistent: b,
                    otherUserNickname: m
                }),
            [v, b, m]
        );
    return (
        i.useEffect(() => {
            (0, c.Rq)({
                userId: n,
                channelId: M
            });
        }, [M, n]),
        (0, r.jsxs)(Z.Z, {
            transitionState: t,
            title: g.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: g.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: m }),
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
                                w || V
                                    ? (0, r.jsx)(s.Spinner, {
                                          className: y.spinner,
                                          type: s.SpinnerTypes.SPINNING_CIRCLE
                                      })
                                    : (0, r.jsx)(U, {
                                          badgeText: x,
                                          badgeColor: B
                                      })
                            ]
                        }),
                        (0, r.jsx)(R.b, {
                            className: y.code,
                            chunks: K,
                            columns: A.ak
                        })
                    ]
                }),
                (0, r.jsx)(s.Text, {
                    className: y.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: P
                }),
                (0, r.jsx)(s.Button, {
                    fullWidth: !0,
                    className: y.verifiedButton,
                    color: s.ButtonColors.BRAND,
                    size: s.ButtonSizes.MEDIUM,
                    look: s.ButtonLooks.FILLED,
                    disabled: null == h || w || V,
                    onClick: L ? k : Y,
                    children: L ? g.Z.Messages.E2EE_CLEAR_VERIFICATION : g.Z.Messages.E2EE_MARK_AS_VERIFIED
                }),
                (0, r.jsx)(s.Button, {
                    fullWidth: !0,
                    color: s.ButtonColors.PRIMARY,
                    size: s.ButtonSizes.MEDIUM,
                    look: s.ButtonLooks.FILLED,
                    onClick: F,
                    children: g.Z.Messages.CANCEL
                })
            ]
        })
    );
}
