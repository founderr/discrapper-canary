n.r(t),
    n.d(t, {
        default: function () {
            return M;
        }
    }),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(377171),
    u = n(313201),
    l = n(592125),
    c = n(594174),
    E = n(5192),
    d = n(571826),
    f = n(630759),
    _ = n(539067),
    h = n(210975),
    y = n(301107),
    I = n(65692),
    S = n(785792),
    g = n(190054),
    A = n(760373),
    R = n(981631),
    p = n(689938),
    C = n(958153);
function T(e) {
    let { badgeText: t, badgeColor: n } = e,
        a = i.useRef(t),
        s = i.useRef(n);
    return (0, r.jsx)(o.TextBadge, {
        text: a.current,
        color: s.current
    });
}
function M(e) {
    let { transitionState: t, userId: n, channelId: M, onClose: m } = e,
        U = (0, u.Dt)(),
        w = (0, a.e7)([c.default], () => c.default.getUser(n)),
        b = (0, a.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.getChannel(M)) || void 0 === e ? void 0 : e.getGuildId();
        }),
        N = E.ZP.useName(b, null, w),
        { fingerprint: Z, userKey: D, loading: L } = (0, I.q)({ userId: n }),
        F = (0, y.W)({
            fingerprintBase64: Z,
            chunkSize: A.iQ,
            desiredLength: A.KN
        }),
        v = i.useCallback(() => {
            (0, d.s$)({
                userId: n,
                channelId: M
            });
        }, [M, n]),
        V = (0, h.wV)({
            userId: n,
            channelId: M,
            location: 'WebSecureFramesUserVerificationModal'
        }),
        { isPersistentCode: x, isCurrentUserPersistent: k, isOtherUserPersistent: O, loading: B } = (0, _.y)({ userId: n }),
        K = i.useCallback(() => {
            null != D && ((0, f.TQ)(n, D, x, M, R.Sbl.E2EE_USER_VERIFY_MODAL), m());
        }, [D, n, x, M, m]),
        P = i.useCallback(() => {
            null != D && ((0, f.LO)(n, D, x), m());
        }, [D, n, x, m]),
        [j, Y] = i.useMemo(() => (V ? [p.Z.Messages.E2EE_VERIFIED, s.Z.BG_BRAND] : [p.Z.Messages.NEW, s.Z.STATUS_DANGER]), [V]),
        G = i.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserPersistent: k,
                    isOtherUserPersistent: O,
                    otherUserNickname: N
                }),
            [k, O, N]
        );
    return (
        i.useEffect(() => {
            (0, d.Rq)({
                userId: n,
                channelId: M
            });
        }, [M, n]),
        (0, r.jsxs)(o.ModalRoot, {
            transitionState: t,
            'aria-labelledby': U,
            children: [
                (0, r.jsx)('div', {
                    className: C.shieldIconContainer,
                    children: (0, r.jsx)('div', {
                        className: C.shieldIcon,
                        children: (0, r.jsx)(o.ShieldLockIcon, {
                            size: 'custom',
                            width: 55,
                            height: 55,
                            color: o.tokens.colors.HEADER_SECONDARY
                        })
                    })
                }),
                (0, r.jsxs)(o.ModalContent, {
                    className: C.content,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            className: C.title,
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            children: p.Z.Messages.E2EE_VERIFICATION_CODE
                        }),
                        (0, r.jsx)(o.Text, {
                            className: C.subtitle,
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: p.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: N })
                        }),
                        (0, r.jsxs)('div', {
                            className: C.verification,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: C.header,
                                    children: [
                                        (0, r.jsx)(o.Heading, {
                                            variant: 'text-sm/bold',
                                            color: 'header-primary',
                                            children: p.Z.Messages.E2EE_VERIFICATION_CODE
                                        }),
                                        null != F &&
                                            (0, r.jsx)(g.H, {
                                                className: C.copyIcon,
                                                chunks: F,
                                                color: o.tokens.colors.INTERACTIVE_NORMAL,
                                                onCopy: v
                                            }),
                                        B || L
                                            ? (0, r.jsx)(o.Spinner, {
                                                  className: C.spinner,
                                                  type: o.SpinnerTypes.SPINNING_CIRCLE
                                              })
                                            : (0, r.jsx)(T, {
                                                  badgeText: j,
                                                  badgeColor: Y
                                              })
                                    ]
                                }),
                                (0, r.jsx)(S.b, {
                                    className: C.code,
                                    chunks: F,
                                    columns: A.ak
                                })
                            ]
                        }),
                        (0, r.jsx)(o.Text, {
                            className: C.details,
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: G
                        }),
                        (0, r.jsx)(o.Button, {
                            fullWidth: !0,
                            className: C.verifiedButton,
                            color: o.ButtonColors.BRAND,
                            size: o.ButtonSizes.MEDIUM,
                            look: o.ButtonLooks.FILLED,
                            disabled: null == Z || B || L,
                            onClick: V ? P : K,
                            children: V ? p.Z.Messages.E2EE_CLEAR_VERIFICATION : p.Z.Messages.E2EE_MARK_AS_VERIFIED
                        }),
                        (0, r.jsx)(o.Button, {
                            fullWidth: !0,
                            color: o.ButtonColors.PRIMARY,
                            size: o.ButtonSizes.MEDIUM,
                            look: o.ButtonLooks.FILLED,
                            onClick: m,
                            children: p.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    );
}
