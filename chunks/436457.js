let a, n;
s.d(t, {
    Z: function () {
        return A;
    }
}),
    s(47120);
var o = s(735250),
    l = s(470079),
    r = s(120356),
    i = s.n(r),
    c = s(481060),
    d = s(447543),
    u = s(230711),
    _ = s(881052),
    f = s(600164),
    E = s(112831),
    m = s(782605),
    p = s(981631),
    h = s(689938),
    N = s(830513);
let T = ((a = window.GLOBAL_ENV.INVITE_HOST), (n = ''), null == a && ((a = location.host), (n = p.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(a).concat(n, '/'));
function A(e) {
    let { onBack: t, onComplete: s, onConnect: a, isSlideReady: n } = e,
        [r, A] = l.useState(''),
        [x, I] = l.useState(!1),
        [C, b] = l.useState(null),
        M = l.useRef(null);
    l.useEffect(() => {
        var e;
        n && (null === (e = M.current) || void 0 === e || e.focus());
    }, [n]);
    let v = l.useCallback(
            (e) => {
                e.preventDefault();
                let t = r.trim();
                if ('' === t) {
                    b(h.Z.Messages.INVALID_INVITE_LINK_ERROR);
                    return;
                }
                b(null), I(!0);
                let a = t.split('/'),
                    n = a[a.length - 1];
                d.Z.resolveInvite(n, 'Join Guild', { inputValue: t }).then(
                    (e) => {
                        let { invite: t } = e;
                        if ((I(!1), null == t)) {
                            b(h.Z.Messages.INSTANT_INVITE_EXPIRED);
                            return;
                        }
                        if (null != t.channel) {
                            let e = d.Z.getInviteContext('Join Guild', t);
                            d.Z.acceptInvite({
                                inviteKey: t.code,
                                context: e,
                                callback: (e) => {
                                    s(), d.Z.transitionToInvite(e);
                                }
                            }).catch((e) => {
                                e instanceof _.yZ || e instanceof _.Hx ? b((0, m.O)(e.code)) : b(h.Z.Messages.INVITE_MODAL_ERROR_DEFAULT);
                            });
                        }
                    },
                    (e) => {
                        I(!1);
                        let t = new _.yZ(e);
                        b((0, m.O)(t.code));
                    }
                );
            },
            [r, I, b, s]
        ),
        G = (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(c.ModalHeader, {
                    className: N.header,
                    direction: f.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, o.jsx)(E.Z, {
                            className: N.title,
                            size: E.Z.Sizes.SIZE_24,
                            color: E.Z.Colors.HEADER_PRIMARY,
                            children: h.Z.Messages.JOIN_SERVER_TITLE
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: h.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF
                        })
                    ]
                }),
                (0, o.jsxs)(c.ModalContent, {
                    children: [
                        (0, o.jsx)('form', {
                            onSubmit: v,
                            className: N.inputForm,
                            children: (0, o.jsx)(c.FormItem, {
                                title: h.Z.Messages.FORM_LABEL_INVITE_LINK,
                                error: C,
                                titleClassName: i()(N.formTitle, { [N.error]: null != C }),
                                children: (0, o.jsx)(c.TextInput, {
                                    value: r,
                                    onChange: A,
                                    className: N.input,
                                    inputClassName: N.inputInner,
                                    inputRef: M
                                })
                            })
                        }),
                        (0, o.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: h.Z.Messages.JOIN_SERVER_EXAMPLES.format({ examples: ''.concat(T).concat('cool-people', ', ').concat('hTKzmak') })
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: N.connectCTA,
                            children: h.Z.Messages.JOIN_GUILD_CONNECT.format({
                                onClick: () => {
                                    a(), u.Z.open(p.oAB.CONNECTIONS);
                                }
                            })
                        })
                    ]
                })
            ]
        });
    return {
        content: G,
        footer: (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    onClick: v,
                    disabled: 0 === r.length,
                    submitting: x,
                    children: h.Z.Messages.JOIN
                }),
                (0, o.jsx)(c.Button, {
                    className: N.__invalid_skipButton,
                    look: c.Button.Looks.BLANK,
                    size: c.Button.Sizes.MIN,
                    onClick: t,
                    children: h.Z.Messages.BACK
                })
            ]
        })
    };
}
