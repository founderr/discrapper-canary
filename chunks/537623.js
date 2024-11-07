n.r(e),
    n.d(e, {
        default: function () {
            return h;
        }
    }),
    n(47120);
var l = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    r = n(481060),
    s = n(367907),
    c = n(369994),
    d = n(177862),
    u = n(981631),
    _ = n(388032),
    x = n(312929);
function h(t) {
    let { guildId: e, messageId: a, transitionState: h, onClose: f } = t,
        [I, A] = o.useState([]),
        [C, N] = o.useState(),
        p = o.useCallback(() => {
            let t = {
                raid_alert_type: d.wR.JOIN_RAID,
                raid_alert_id: a,
                false_alarm_type: I.map((t) => t.toString()),
                false_alarm_other_reason: C,
                guild_id: e
            };
            (0, s.yw)(u.rMx.GUILD_RAID_FEEDBACK, t),
                (0, c.Fi)(e, a, (0, d.J$)(I)),
                f(),
                (0, r.openModalLazy)(async () => {
                    let { default: t } = await n.e('37564').then(n.bind(n, 969214));
                    return (e) => (0, l.jsx)(t, { ...e });
                });
        }, [f, a, e, C, I]),
        T = [
            {
                text: _.intl.string(_.t.yeaXw8),
                value: d.$l.LEGITIMATE_ACTIVITY
            },
            {
                text: _.intl.string(_.t['o++3Bw']),
                value: d.$l.DM_SPAM
            },
            {
                text: _.intl.string(_.t.UfHAwc),
                value: d.$l.JOIN_RAID
            },
            {
                text: _.intl.string(_.t.K3UWeX),
                value: d.$l.OTHER
            }
        ];
    function R(t) {
        I.includes(t) ? A((e) => e.filter((e) => e !== t)) : A((e) => [...e, t]);
    }
    return (0, l.jsxs)(r.ModalRoot, {
        transitionState: h,
        size: r.ModalSize.SMALL,
        children: [
            (0, l.jsx)(r.ModalHeader, {
                separator: !1,
                className: x.center,
                children: (0, l.jsx)(r.Heading, {
                    color: 'header-primary',
                    variant: 'heading-xl/bold',
                    children: _.intl.string(_.t['1zmw/P'])
                })
            }),
            (0, l.jsxs)(r.ModalContent, {
                className: x.center,
                children: [
                    (0, l.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: x.textCenter,
                        children: _.intl.string(_.t.nF79oK)
                    }),
                    (0, l.jsx)('div', {
                        className: x.options,
                        children: T.map((t) => {
                            let { text: e, value: n } = t;
                            return (0, l.jsxs)(
                                'div',
                                {
                                    className: i()(x.optionContainer, { [x.optionContainerOther]: n === d.$l.OTHER }),
                                    children: [
                                        (0, l.jsxs)(r.Clickable, {
                                            className: x.optionText,
                                            onClick: () => R(n),
                                            children: [
                                                (0, l.jsx)('div', {
                                                    children: (0, l.jsx)(r.Checkbox, {
                                                        type: r.Checkbox.Types.INVERTED,
                                                        size: 20,
                                                        value: I.includes(n),
                                                        onChange: () => R(n)
                                                    })
                                                }),
                                                (0, l.jsx)(r.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: e
                                                })
                                            ]
                                        }),
                                        n === d.$l.OTHER &&
                                            I.includes(d.$l.OTHER) &&
                                            (0, l.jsx)('div', {
                                                className: x.textboxContainer,
                                                children: (0, l.jsx)(r.TextArea, {
                                                    className: x.falseAlarmReasonText,
                                                    placeholder: _.intl.string(_.t['PAM+JS']),
                                                    onChange: (t) => N(t),
                                                    value: C,
                                                    rows: 2,
                                                    autoFocus: !0,
                                                    flex: !0
                                                })
                                            })
                                    ]
                                },
                                n
                            );
                        })
                    })
                ]
            }),
            (0, l.jsxs)(r.ModalFooter, {
                className: x.__invalid_modalFooter,
                children: [
                    (0, l.jsx)('div', {
                        className: x.button,
                        children: (0, l.jsx)(r.Button, {
                            onClick: p,
                            color: r.Button.Colors.BRAND,
                            look: r.Button.Looks.FILLED,
                            children: _.intl.string(_.t.Gh3A0N)
                        })
                    }),
                    (0, l.jsx)(r.Button, {
                        onClick: f,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        children: _.intl.string(_.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
