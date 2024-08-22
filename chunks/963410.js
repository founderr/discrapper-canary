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
    E = n(539067),
    _ = n(12786),
    S = n(210975),
    I = n(301107),
    R = n(65692),
    g = n(785792),
    C = n(190054),
    m = n(245581),
    h = n(760373),
    Z = n(981631),
    T = n(689938),
    N = n(756843);
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
    let { transitionState: t, userId: n, channelId: A, onClose: y } = e,
        x = (0, i.e7)([a.default], () => a.default.getUser(n)),
        M = (0, i.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getChannel(A)) || void 0 === e ? void 0 : e.getGuildId();
        }),
        p = c.ZP.useName(M, null, x),
        { fingerprint: b, userKey: k, loading: F } = (0, R.q)({ userId: n }),
        U = (0, I.W)({
            fingerprintBase64: b,
            chunkSize: h.iQ,
            desiredLength: h.KN
        }),
        V = l.useCallback(() => {
            (0, d.s$)({
                userId: n,
                channelId: A
            });
        }, [A, n]),
        j = (0, S.wV)({
            userId: n,
            channelId: A,
            location: 'WebSecureFramesUserVerificationModal'
        }),
        D = (0, _.R)({ userId: n });
    (0, _.i)({
        isKeyConsistent: D,
        channelId: A,
        userId: n,
        nickname: p,
        onAlertOpen: y
    });
    let { isCurrentUserKeyPersistent: O, isOtherUserKeyPersistent: w, loading: K } = (0, E.y)({ userId: n }),
        L = l.useCallback(() => {
            null != k && ((0, f.TQ)(n, k, w, A, Z.Sbl.E2EE_USER_VERIFY_MODAL), y());
        }, [k, n, w, A, y]),
        B = l.useCallback(() => {
            null != k && ((0, f.LO)(n, k, w), y());
        }, [k, n, w, y]),
        [P, Y] = l.useMemo(() => (j ? [T.Z.Messages.E2EE_VERIFIED, s.Z.BG_BRAND] : [T.Z.Messages.NEW, s.Z.STATUS_DANGER]), [j]),
        z = l.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserKeyPersistent: O,
                    isOtherUserKeyPersistent: w,
                    otherUserNickname: p
                }),
            [O, w, p]
        );
    return (
        l.useEffect(() => {
            (0, d.Rq)({
                userId: n,
                channelId: A
            });
        }, [A, n]),
        (0, r.jsxs)(m.Z, {
            transitionState: t,
            title: T.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: T.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: p }),
            children: [
                (0, r.jsxs)('div', {
                    className: N.verification,
                    children: [
                        (0, r.jsxs)('div', {
                            className: N.header,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: T.Z.Messages.E2EE_VERIFICATION_CODE
                                }),
                                null != U &&
                                    (0, r.jsx)(C.H, {
                                        className: N.copyIcon,
                                        chunks: U,
                                        color: u.tokens.colors.INTERACTIVE_NORMAL,
                                        onCopy: V
                                    }),
                                (0, r.jsx)('div', {
                                    className: N.codeStatus,
                                    children:
                                        K || F
                                            ? (0, r.jsx)(u.Spinner, {
                                                  className: N.spinner,
                                                  type: u.SpinnerTypes.SPINNING_CIRCLE
                                              })
                                            : (0, r.jsx)(v, {
                                                  badgeText: P,
                                                  badgeColor: Y
                                              })
                                })
                            ]
                        }),
                        (0, r.jsx)(g.b, {
                            className: N.code,
                            chunks: U,
                            columns: h.ak
                        })
                    ]
                }),
                (0, r.jsx)(u.Text, {
                    className: N.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: z
                }),
                (0, r.jsx)(u.Button, {
                    fullWidth: !0,
                    className: N.verifiedButton,
                    color: u.ButtonColors.BRAND,
                    size: u.ButtonSizes.MEDIUM,
                    look: u.ButtonLooks.FILLED,
                    disabled: null == b || K || F,
                    onClick: j ? B : L,
                    children: j ? T.Z.Messages.E2EE_CLEAR_VERIFICATION : T.Z.Messages.E2EE_MARK_AS_VERIFIED
                }),
                (0, r.jsx)(u.Button, {
                    fullWidth: !0,
                    color: u.ButtonColors.PRIMARY,
                    size: u.ButtonSizes.MEDIUM,
                    look: u.ButtonLooks.FILLED,
                    onClick: y,
                    children: T.Z.Messages.CANCEL
                })
            ]
        })
    );
}
