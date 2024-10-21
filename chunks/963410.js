n.r(t),
    n.d(t, {
        default: function () {
            return A;
        }
    }),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    u = n(481060),
    s = n(377171),
    o = n(592125),
    a = n(594174),
    c = n(5192),
    d = n(571826),
    f = n(630759),
    E = n(539067),
    _ = n(802063),
    S = n(210975),
    I = n(301107),
    g = n(65692),
    R = n(540247),
    C = n(785792),
    m = n(190054),
    h = n(245581),
    N = n(760373),
    T = n(981631),
    Z = n(689938),
    v = n(722041);
function y(e) {
    let { badgeText: t, badgeColor: n } = e,
        i = l.useRef(t),
        s = l.useRef(n);
    return (0, r.jsx)(u.TextBadge, {
        text: i.current,
        color: s.current
    });
}
function A(e) {
    let { transitionState: t, userId: n, channelId: A, onClose: M } = e,
        p = (0, i.e7)([a.default], () => a.default.getUser(n)),
        x = (0, i.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getChannel(A)) || void 0 === e ? void 0 : e.getGuildId();
        }),
        U = c.ZP.useName(x, null, p),
        { fingerprint: b, userKey: F } = (0, g.q)({ userId: n }),
        k = (0, I.W)({
            fingerprintBase64: b,
            chunkSize: N.iQ,
            desiredLength: N.KN
        }),
        j = l.useCallback(() => {
            (0, d.s$)({
                userId: n,
                channelId: A
            });
        }, [A, n]),
        V = (0, S.wV)({
            userId: n,
            channelId: A,
            location: 'WebSecureFramesUserVerificationModal'
        });
    (0, _.i)({
        channelId: A,
        userId: n,
        nickname: U,
        onAlertOpen: M
    });
    let { isCurrentUserKeyPersistent: O, isOtherUserKeyPersistent: D, loading: w } = (0, E.y)({ userId: n }),
        K = l.useCallback(() => {
            null != F && ((0, f.TQ)(n, F, D, A, T.Sbl.E2EE_USER_VERIFY_MODAL), M());
        }, [F, n, D, A, M]),
        L = l.useCallback(() => {
            null != F && ((0, f.LO)(n, F, D), M());
        }, [F, n, D, M]),
        [P, B] = l.useMemo(() => (V ? [Z.Z.Messages.E2EE_VERIFIED, s.Z.BG_BRAND] : [Z.Z.Messages.NEW, s.Z.STATUS_DANGER]), [V]),
        Y = l.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserKeyPersistent: O,
                    isOtherUserKeyPersistent: D,
                    otherUserNickname: U
                }),
            [O, D, U]
        ),
        z = (0, R.P)({
            userId: n,
            keyToOmit: F
        });
    return (
        l.useEffect(() => {
            (0, d.Rq)({
                userId: n,
                channelId: A
            });
        }, [A, n]),
        (0, r.jsxs)(h.Z, {
            transitionState: t,
            title: Z.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: Z.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: U }),
            children: [
                (0, r.jsxs)('div', {
                    className: v.verification,
                    children: [
                        z > 0 &&
                            (0, r.jsx)(u.HelpMessage, {
                                messageType: u.HelpMessageTypes.INFO,
                                className: v.helpMessage,
                                children: Z.Z.Messages.E2EE_USER_EXISTING_PERSISTENT_VERIFICATIONS.format({ count: z })
                            }),
                        (0, r.jsxs)('div', {
                            className: v.header,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: Z.Z.Messages.E2EE_VERIFICATION_CODE
                                }),
                                null != k &&
                                    (0, r.jsx)(m.H, {
                                        className: v.copyIcon,
                                        chunks: k,
                                        color: u.tokens.colors.INTERACTIVE_NORMAL,
                                        onCopy: j
                                    }),
                                (0, r.jsx)('div', {
                                    className: v.codeStatus,
                                    children:
                                        null == k
                                            ? (0, r.jsx)(u.Spinner, {
                                                  className: v.spinner,
                                                  type: u.SpinnerTypes.SPINNING_CIRCLE
                                              })
                                            : (0, r.jsx)(y, {
                                                  badgeText: P,
                                                  badgeColor: B
                                              })
                                })
                            ]
                        }),
                        (0, r.jsx)(C.b, {
                            className: v.code,
                            chunks: k,
                            columns: N.ak
                        })
                    ]
                }),
                (0, r.jsx)(u.Text, {
                    className: v.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: Y
                }),
                (0, r.jsx)(u.Button, {
                    fullWidth: !0,
                    className: v.verifiedButton,
                    color: u.ButtonColors.BRAND,
                    size: u.ButtonSizes.MEDIUM,
                    look: u.ButtonLooks.FILLED,
                    disabled: null == k || w,
                    onClick: V ? L : K,
                    children: V ? Z.Z.Messages.E2EE_CLEAR_VERIFICATION : Z.Z.Messages.E2EE_MARK_AS_VERIFIED
                }),
                (0, r.jsx)(u.Button, {
                    fullWidth: !0,
                    color: u.ButtonColors.PRIMARY,
                    size: u.ButtonSizes.MEDIUM,
                    look: u.ButtonLooks.FILLED,
                    onClick: M,
                    children: Z.Z.Messages.CANCEL
                })
            ]
        })
    );
}
