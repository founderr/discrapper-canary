n.d(t, {
    t: function () {
        return f;
    }
}),
    n(411104);
var a = n(200651),
    r = n(192379),
    l = n(512722),
    o = n.n(l),
    s = n(478677),
    i = n(481060),
    c = n(570140),
    d = n(275759),
    u = n(202120),
    x = n(600164),
    h = n(710845),
    m = n(424071),
    N = n(388032),
    C = n(38920);
let j = new h.Z('TwoWayLink');
function f(e) {
    let { platformType: t, isWaitingForConnection: n, onWaitingForConnection: l, expectedCallbackState: h, onAuthToken: f, onError: v, onClose: p, img: b, title: T, body: E, redirectDestination: k } = e,
        g = r.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, u.H)(t, { twoWayLinkType: s.g.DESKTOP })), null == e)) throw Error('missing authorizeURL');
            } catch (e) {
                j.error('Error opening provider authorize page', e), v();
                return;
            }
            let { state: n } = (0, d.xp)(e);
            o()(null != n, 'Authorize URL state query parameter must be present'), null == l || l(n);
        }, [t, v, l]),
        B = r.useCallback(
            (e) => {
                let { callbackCode: n, callbackState: a } = e;
                if (a !== h) {
                    j.warn(''.concat(t, ' link: received mismatching callback state!'));
                    return;
                }
                f({
                    callbackCode: n,
                    callbackState: a
                });
            },
            [t, h, f]
        );
    return (
        r.useEffect(
            () => (
                c.Z.subscribe('USER_CONNECTIONS_LINK_CALLBACK', B),
                () => {
                    c.Z.unsubscribe('USER_CONNECTIONS_LINK_CALLBACK', B);
                }
            ),
            [B]
        ),
        (0, a.jsxs)(m.Z, {
            children: [
                (0, a.jsxs)(i.ModalHeader, {
                    direction: x.Z.Direction.VERTICAL,
                    className: C.header,
                    separator: !1,
                    children: [
                        (0, a.jsx)(i.Text, {
                            className: C.stepHeader,
                            variant: 'text-xs/bold',
                            color: 'header-secondary',
                            children: N.intl.format(N.t.fHz6eX, {
                                number: 1,
                                total: 2
                            })
                        }),
                        (0, a.jsxs)('div', {
                            className: C.illustration,
                            children: [b, ' ']
                        }),
                        (0, a.jsx)(i.Heading, {
                            className: C.title,
                            variant: 'heading-xl/extrabold',
                            children: T
                        }),
                        null != p &&
                            (0, a.jsx)(i.ModalCloseButton, {
                                className: C.closeButton,
                                onClick: p
                            })
                    ]
                }),
                (0, a.jsxs)(i.ModalContent, {
                    className: C.body,
                    paddingFix: !1,
                    children: [
                        (0, a.jsx)(i.Text, {
                            tag: 'p',
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: E
                        }),
                        !n &&
                            (0, a.jsx)(i.Text, {
                                tag: 'p',
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: N.intl.format(N.t.XhlYYm, { redirectUrl: k })
                            })
                    ]
                }),
                (0, a.jsx)(i.ModalFooter, {
                    className: C.footer,
                    children: (0, a.jsxs)(i.Button, {
                        className: C.footerButton,
                        color: n ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                        onClick: g,
                        children: [
                            n ? N.intl.string(N.t['5911LS']) : N.intl.string(N.t['3PatS0']),
                            (0, a.jsx)(i.WindowLaunchIcon, {
                                color: 'currentColor',
                                className: C.launchIcon,
                                size: 'xs'
                            })
                        ]
                    })
                })
            ]
        })
    );
}
