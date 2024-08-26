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
    _ = n(802063),
    S = n(210975),
    I = n(301107),
    C = n(65692),
    R = n(785792),
    g = n(190054),
    m = n(245581),
    h = n(760373),
    N = n(981631),
    Z = n(689938),
    T = n(756843);
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
        { fingerprint: b, userKey: U, loading: k } = (0, C.q)({ userId: n }),
        F = (0, I.W)({
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
        });
    (0, _.i)({
        channelId: A,
        userId: n,
        nickname: p,
        onAlertOpen: y
    });
    let { isCurrentUserKeyPersistent: D, isOtherUserKeyPersistent: O, loading: w } = (0, E.y)({ userId: n }),
        K = l.useCallback(() => {
            null != U && ((0, f.TQ)(n, U, O, A, N.Sbl.E2EE_USER_VERIFY_MODAL), y());
        }, [U, n, O, A, y]),
        L = l.useCallback(() => {
            null != U && ((0, f.LO)(n, U, O), y());
        }, [U, n, O, y]),
        [B, P] = l.useMemo(() => (j ? [Z.Z.Messages.E2EE_VERIFIED, s.Z.BG_BRAND] : [Z.Z.Messages.NEW, s.Z.STATUS_DANGER]), [j]),
        Y = l.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserKeyPersistent: D,
                    isOtherUserKeyPersistent: O,
                    otherUserNickname: p
                }),
            [D, O, p]
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
            title: Z.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: Z.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: p }),
            children: [
                (0, r.jsxs)('div', {
                    className: T.verification,
                    children: [
                        (0, r.jsxs)('div', {
                            className: T.header,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: Z.Z.Messages.E2EE_VERIFICATION_CODE
                                }),
                                null != F &&
                                    (0, r.jsx)(g.H, {
                                        className: T.copyIcon,
                                        chunks: F,
                                        color: u.tokens.colors.INTERACTIVE_NORMAL,
                                        onCopy: V
                                    }),
                                (0, r.jsx)('div', {
                                    className: T.codeStatus,
                                    children:
                                        w || k
                                            ? (0, r.jsx)(u.Spinner, {
                                                  className: T.spinner,
                                                  type: u.SpinnerTypes.SPINNING_CIRCLE
                                              })
                                            : (0, r.jsx)(v, {
                                                  badgeText: B,
                                                  badgeColor: P
                                              })
                                })
                            ]
                        }),
                        (0, r.jsx)(R.b, {
                            className: T.code,
                            chunks: F,
                            columns: h.ak
                        })
                    ]
                }),
                (0, r.jsx)(u.Text, {
                    className: T.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: Y
                }),
                (0, r.jsx)(u.Button, {
                    fullWidth: !0,
                    className: T.verifiedButton,
                    color: u.ButtonColors.BRAND,
                    size: u.ButtonSizes.MEDIUM,
                    look: u.ButtonLooks.FILLED,
                    disabled: null == b || w || k,
                    onClick: j ? L : K,
                    children: j ? Z.Z.Messages.E2EE_CLEAR_VERIFICATION : Z.Z.Messages.E2EE_MARK_AS_VERIFIED
                }),
                (0, r.jsx)(u.Button, {
                    fullWidth: !0,
                    color: u.ButtonColors.PRIMARY,
                    size: u.ButtonSizes.MEDIUM,
                    look: u.ButtonLooks.FILLED,
                    onClick: y,
                    children: Z.Z.Messages.CANCEL
                })
            ]
        })
    );
}
