n.r(t),
    n.d(t, {
        default: function () {
            return U;
        }
    }),
    n(47120);
var r = n(735250),
    s = n(470079),
    E = n(442837),
    i = n(481060),
    a = n(377171),
    o = n(592125),
    u = n(594174),
    l = n(5192),
    c = n(571826),
    _ = n(630759),
    d = n(539067),
    f = n(210975),
    S = n(301107),
    I = n(65692),
    R = n(785792),
    A = n(190054),
    C = n(245581),
    T = n(760373),
    Z = n(981631),
    y = n(689938),
    M = n(756843);
function p(e) {
    let { badgeText: t, badgeColor: n } = e,
        E = s.useRef(t),
        a = s.useRef(n);
    return (0, r.jsx)(i.TextBadge, {
        text: E.current,
        color: a.current
    });
}
function U(e) {
    let { transitionState: t, userId: n, channelId: U, onClose: g } = e,
        h = (0, E.e7)([u.default], () => u.default.getUser(n)),
        F = (0, E.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getChannel(U)) || void 0 === e ? void 0 : e.getGuildId();
        }),
        N = l.ZP.useName(F, null, h),
        { fingerprint: m, userKey: D, loading: V } = (0, I.q)({ userId: n }),
        K = (0, S.W)({
            fingerprintBase64: m,
            chunkSize: T.iQ,
            desiredLength: T.KN
        }),
        O = s.useCallback(() => {
            (0, c.s$)({
                userId: n,
                channelId: U
            });
        }, [U, n]),
        L = (0, f.wV)({
            userId: n,
            channelId: U,
            location: 'WebSecureFramesUserVerificationModal'
        }),
        { isPersistentCode: b, isCurrentUserPersistent: k, isOtherUserPersistent: v, loading: B } = (0, d.y)({ userId: n }),
        w = s.useCallback(() => {
            null != D && ((0, _.TQ)(n, D, b, U, Z.Sbl.E2EE_USER_VERIFY_MODAL), g());
        }, [D, n, b, U, g]),
        x = s.useCallback(() => {
            null != D && ((0, _.LO)(n, D, b), g());
        }, [D, n, b, g]),
        [Y, P] = s.useMemo(() => (L ? [y.Z.Messages.E2EE_VERIFIED, a.Z.BG_BRAND] : [y.Z.Messages.NEW, a.Z.STATUS_DANGER]), [L]),
        G = s.useMemo(
            () =>
                (0, _.kK)({
                    isCurrentUserPersistent: k,
                    isOtherUserPersistent: v,
                    otherUserNickname: N
                }),
            [k, v, N]
        );
    return (
        s.useEffect(() => {
            (0, c.Rq)({
                userId: n,
                channelId: U
            });
        }, [U, n]),
        (0, r.jsxs)(C.Z, {
            transitionState: t,
            title: y.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: y.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: N }),
            children: [
                (0, r.jsxs)('div', {
                    className: M.verification,
                    children: [
                        (0, r.jsxs)('div', {
                            className: M.header,
                            children: [
                                (0, r.jsx)(i.Heading, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: y.Z.Messages.E2EE_VERIFICATION_CODE
                                }),
                                null != K &&
                                    (0, r.jsx)(A.H, {
                                        className: M.copyIcon,
                                        chunks: K,
                                        color: i.tokens.colors.INTERACTIVE_NORMAL,
                                        onCopy: O
                                    }),
                                B || V
                                    ? (0, r.jsx)(i.Spinner, {
                                          className: M.spinner,
                                          type: i.SpinnerTypes.SPINNING_CIRCLE
                                      })
                                    : (0, r.jsx)(p, {
                                          badgeText: Y,
                                          badgeColor: P
                                      })
                            ]
                        }),
                        (0, r.jsx)(R.b, {
                            className: M.code,
                            chunks: K,
                            columns: T.ak
                        })
                    ]
                }),
                (0, r.jsx)(i.Text, {
                    className: M.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: G
                }),
                (0, r.jsx)(i.Button, {
                    fullWidth: !0,
                    className: M.verifiedButton,
                    color: i.ButtonColors.BRAND,
                    size: i.ButtonSizes.MEDIUM,
                    look: i.ButtonLooks.FILLED,
                    disabled: null == m || B || V,
                    onClick: L ? x : w,
                    children: L ? y.Z.Messages.E2EE_CLEAR_VERIFICATION : y.Z.Messages.E2EE_MARK_AS_VERIFIED
                }),
                (0, r.jsx)(i.Button, {
                    fullWidth: !0,
                    color: i.ButtonColors.PRIMARY,
                    size: i.ButtonSizes.MEDIUM,
                    look: i.ButtonLooks.FILLED,
                    onClick: g,
                    children: y.Z.Messages.CANCEL
                })
            ]
        })
    );
}
