n.r(t),
    n.d(t, {
        default: function () {
            return N;
        }
    }),
    n(47120);
var l = n(200651),
    r = n(192379),
    a = n(990547),
    i = n(442837),
    u = n(481060),
    o = n(390885),
    s = n(594174),
    c = n(626135),
    d = n(63063),
    f = n(771308),
    _ = n(13430),
    p = n(723359),
    m = n(981631),
    E = n(630724),
    A = n(388032),
    T = n(282222);
function N(e) {
    let { transitionState: t, onClose: n } = e,
        [N, h] = r.useState(null),
        [y, g] = r.useState(null),
        [S, v] = r.useState(!1),
        G = r.createRef(),
        C = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        M = r.createRef();
    r.useEffect(() => {
        o.Z.flowStep(E.MK.ANY, E.FF.AGE_GATE), c.default.track(m.rMx.OPEN_MODAL, { type: 'Claim Age Gate' });
    }, []),
        r.useEffect(() => {
            (null == C ? void 0 : C.nsfwAllowed) != null && n();
        }, [C, n]);
    let x = async (e) => {
            if ((e.preventDefault(), null != N)) {
                v(!0);
                try {
                    await f.Av(N, m.jXE.CLAIM_ACCOUNT_MODAL);
                } catch (e) {
                    if (null != e.body && null != e.body.date_of_birth) o.Z.flowStep(E.MK.ANY, E.FF.AGE_GATE_UNDERAGE), f.wE(p.L0.CLAIM_ACCOUNT), f.hp(p.L0.CLAIM_ACCOUNT), n();
                    else {
                        var t;
                        (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? g(A.intl.string(A.t['TGg/2t'])) : g(null == e ? void 0 : e.body.message);
                    }
                }
                v(!1);
            }
        },
        U = r.useCallback(() => {
            var e;
            null === (e = M.current) || void 0 === e || e.focus();
        }, [M]);
    return (0, l.jsx)(u.ModalRoot, {
        transitionState: t,
        size: u.ModalSize.DYNAMIC,
        'aria-label': A.intl.string(A.t.QpSKo6),
        className: T.modal,
        impression: {
            impressionName: a.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 }
        },
        children: (0, l.jsxs)(u.ModalContent, {
            className: T.content,
            children: [
                (0, l.jsx)('div', { className: T.image }),
                (0, l.jsxs)('form', {
                    onSubmit: x,
                    children: [
                        (0, l.jsx)(u.Heading, {
                            className: T.title,
                            variant: 'heading-xl/semibold',
                            children: A.intl.string(A.t.QpSKo6)
                        }),
                        (0, l.jsx)(u.Text, {
                            color: 'header-secondary',
                            className: T.description,
                            variant: 'text-md/normal',
                            children: A.intl.format(A.t.EcJBEB, { helpURL: d.Z.getArticleURL(m.BhN.AGE_GATE) })
                        }),
                        (0, l.jsx)(_.Z, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: T.formItem,
                            label: A.intl.string(A.t.rhBeKS),
                            name: 'birthday',
                            onChange: (e) => h(e),
                            onPopulated: U,
                            error: y,
                            value: N,
                            ref: G
                        }),
                        (0, l.jsx)(u.Button, {
                            buttonRef: M,
                            type: 'submit',
                            size: u.Button.Sizes.LARGE,
                            submitting: S,
                            disabled: null == N,
                            fullWidth: !0,
                            children: A.intl.string(A.t.i4jeWV)
                        })
                    ]
                })
            ]
        })
    });
}
