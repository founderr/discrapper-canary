n.r(t),
    n.d(t, {
        default: function () {
            return A;
        }
    }),
    n(47120);
var r = n(735250),
    l = n(470079),
    i = n(442837),
    u = n(481060),
    s = n(377171),
    o = n(592125),
    a = n(594174),
    c = n(5192),
    d = n(571826),
    f = n(630759),
    E = n(651941),
    _ = n(539067),
    S = n(802063),
    I = n(210975),
    g = n(301107),
    C = n(65692),
    R = n(785792),
    h = n(190054),
    m = n(245581),
    N = n(760373),
    T = n(981631),
    Z = n(689938),
    y = n(756843);
function v(e) {
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
        { fingerprint: b, userKey: F, loading: k } = (0, C.q)({ userId: n }),
        V = (0, g.W)({
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
        O = (0, I.wV)({
            userId: n,
            channelId: A,
            location: 'WebSecureFramesUserVerificationModal'
        });
    (0, S.i)({
        channelId: A,
        userId: n,
        nickname: U,
        onAlertOpen: M
    });
    let { isCurrentUserKeyPersistent: D, isOtherUserKeyPersistent: K, loading: w } = (0, _.y)({ userId: n }),
        L = l.useCallback(() => {
            null != F && ((0, f.TQ)(n, F, K, A, T.Sbl.E2EE_USER_VERIFY_MODAL), M());
        }, [F, n, K, A, M]),
        B = l.useCallback(() => {
            null != F && ((0, f.LO)(n, F, K), M());
        }, [F, n, K, M]),
        [P, Y] = l.useMemo(() => (O ? [Z.Z.Messages.E2EE_VERIFIED, s.Z.BG_BRAND] : [Z.Z.Messages.NEW, s.Z.STATUS_DANGER]), [O]),
        z = l.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserKeyPersistent: D,
                    isOtherUserKeyPersistent: K,
                    otherUserNickname: U
                }),
            [D, K, U]
        ),
        H = (0, i.e7)([E.Z], () => E.Z.getUserVerifiedKeysCount(n));
    return (
        l.useEffect(() => {
            (0, d.Rq)({
                userId: n,
                channelId: A
            });
        }, [A, n]),
        (0, r.jsxs)(m.Z, {
            transitionState: t,
            title: Z.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: Z.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: U }),
            children: [
                (0, r.jsxs)('div', {
                    className: y.verification,
                    children: [
                        H > 0 &&
                            (0, r.jsx)(u.HelpMessage, {
                                messageType: u.HelpMessageTypes.INFO,
                                className: y.helpMessage,
                                children: Z.Z.Messages.E2EE_USER_EXISTING_PERSISTENT_VERIFICATIONS.format({ count: H })
                            }),
                        (0, r.jsxs)('div', {
                            className: y.header,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: Z.Z.Messages.E2EE_VERIFICATION_CODE
                                }),
                                null != V &&
                                    (0, r.jsx)(h.H, {
                                        className: y.copyIcon,
                                        chunks: V,
                                        color: u.tokens.colors.INTERACTIVE_NORMAL,
                                        onCopy: j
                                    }),
                                (0, r.jsx)('div', {
                                    className: y.codeStatus,
                                    children:
                                        w || k
                                            ? (0, r.jsx)(u.Spinner, {
                                                  className: y.spinner,
                                                  type: u.SpinnerTypes.SPINNING_CIRCLE
                                              })
                                            : (0, r.jsx)(v, {
                                                  badgeText: P,
                                                  badgeColor: Y
                                              })
                                })
                            ]
                        }),
                        (0, r.jsx)(R.b, {
                            className: y.code,
                            chunks: V,
                            columns: N.ak
                        })
                    ]
                }),
                (0, r.jsx)(u.Text, {
                    className: y.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: z
                }),
                (0, r.jsx)(u.Button, {
                    fullWidth: !0,
                    className: y.verifiedButton,
                    color: u.ButtonColors.BRAND,
                    size: u.ButtonSizes.MEDIUM,
                    look: u.ButtonLooks.FILLED,
                    disabled: null == b || w || k,
                    onClick: O ? B : L,
                    children: O ? Z.Z.Messages.E2EE_CLEAR_VERIFICATION : Z.Z.Messages.E2EE_MARK_AS_VERIFIED
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
