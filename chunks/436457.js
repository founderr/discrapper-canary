let s, a;
n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var o = n(200651),
    i = n(192379),
    l = n(120356),
    r = n.n(l),
    c = n(481060),
    d = n(447543),
    u = n(230711),
    f = n(881052),
    _ = n(600164),
    p = n(118012),
    m = n(782605),
    h = n(981631),
    E = n(388032),
    x = n(830513);
let N = ((s = window.GLOBAL_ENV.INVITE_HOST), (a = ''), null == s && ((s = location.host), (a = h.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(s).concat(a, '/'));
function T(e) {
    let { onBack: t, onComplete: n, onConnect: s, isSlideReady: a } = e,
        [l, T] = i.useState(''),
        [A, C] = i.useState(!1),
        [b, I] = i.useState(null),
        v = i.useRef(null);
    i.useEffect(() => {
        var e;
        a && (null === (e = v.current) || void 0 === e || e.focus());
    }, [a]);
    let j = i.useCallback(
            (e) => {
                e.preventDefault();
                let t = l.trim();
                if ('' === t) {
                    I(E.intl.string(E.t.IRq5am));
                    return;
                }
                I(null), C(!0);
                let s = t.split('/'),
                    a = s[s.length - 1];
                d.Z.resolveInvite(a, 'Join Guild', { inputValue: t }).then(
                    (e) => {
                        let { invite: t } = e;
                        if ((C(!1), null == t)) {
                            I(E.intl.string(E.t['GEYI+f']));
                            return;
                        }
                        if (null != t.channel) {
                            let e = d.Z.getInviteContext('Join Guild', t);
                            d.Z.acceptInvite({
                                inviteKey: t.code,
                                context: e,
                                callback: (e) => {
                                    n(), d.Z.transitionToInvite(e);
                                }
                            }).catch((e) => {
                                e instanceof f.yZ || e instanceof f.Hx ? I((0, m.O)(e.code)) : I(E.intl.string(E.t.dDZRd3));
                            });
                        }
                    },
                    (e) => {
                        C(!1);
                        let t = new f.yZ(e);
                        I((0, m.O)(t.code));
                    }
                );
            },
            [l, C, I, n]
        ),
        g = (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(c.ModalHeader, {
                    className: x.header,
                    direction: _.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, o.jsx)(p.Z, {
                            className: x.title,
                            size: p.Z.Sizes.SIZE_24,
                            color: p.Z.Colors.HEADER_PRIMARY,
                            children: E.intl.string(E.t.riOUtL)
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: E.intl.string(E.t['7jub2t'])
                        })
                    ]
                }),
                (0, o.jsxs)(c.ModalContent, {
                    children: [
                        (0, o.jsx)('form', {
                            onSubmit: j,
                            className: x.inputForm,
                            children: (0, o.jsx)(c.FormItem, {
                                title: E.intl.string(E.t.qreV29),
                                error: b,
                                titleClassName: r()(x.formTitle, { [x.error]: null != b }),
                                children: (0, o.jsx)(c.TextInput, {
                                    value: l,
                                    onChange: T,
                                    className: x.input,
                                    inputClassName: x.inputInner,
                                    inputRef: v
                                })
                            })
                        }),
                        (0, o.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: E.intl.format(E.t.lHTZl5, { examples: ''.concat(N).concat('cool-people', ', ').concat('hTKzmak') })
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: x.connectCTA,
                            children: E.intl.format(E.t['8F/who'], {
                                onClick: () => {
                                    s(), u.Z.open(h.oAB.CONNECTIONS);
                                }
                            })
                        })
                    ]
                })
            ]
        });
    return {
        content: g,
        footer: (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    onClick: j,
                    disabled: 0 === l.length,
                    submitting: A,
                    children: E.intl.string(E.t.VJlc0d)
                }),
                (0, o.jsx)(c.Button, {
                    className: x.__invalid_skipButton,
                    look: c.Button.Looks.BLANK,
                    size: c.Button.Sizes.MIN,
                    onClick: t,
                    children: E.intl.string(E.t['13/7kZ'])
                })
            ]
        })
    };
}
