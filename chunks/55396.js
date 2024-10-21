n.r(a),
    n.d(a, {
        default: function () {
            return T;
        }
    }),
    n(47120),
    n(653041);
var s,
    t,
    l = n(200651),
    o = n(192379),
    i = n(658722),
    d = n.n(i),
    r = n(392711),
    c = n(442837),
    m = n(481060),
    u = n(224706),
    E = n(812206),
    _ = n(835473),
    g = n(206295),
    h = n(669764),
    x = n(925329),
    I = n(77498),
    v = n(49012),
    M = n(810568),
    A = n(701488),
    C = n(689938),
    p = n(666046);
((t = s || (s = {}))[(t.FEEDBACK_TYPE = 0)] = 'FEEDBACK_TYPE'), (t[(t.WRONG_GAME = 1)] = 'WRONG_GAME'), (t[(t.OUTDATED_INFO = 2)] = 'OUTDATED_INFO'), (t[(t.OTHER = 3)] = 'OTHER'), (t[(t.CONFIRMATION = 4)] = 'CONFIRMATION');
function O(e) {
    let { showOutdatedInfoOption: a, onChoice: n } = e,
        s = [
            {
                name: C.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_WRONG_GAME,
                value: 1
            },
            ...(a
                ? [
                      {
                          name: C.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_OUTDATED,
                          value: 2
                      }
                  ]
                : []),
            {
                name: C.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_OTHER,
                value: 3
            }
        ];
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(m.ModalContent, {
            className: p.content,
            children: [
                (0, l.jsx)(m.Heading, {
                    variant: 'heading-xl/bold',
                    className: p.header,
                    children: C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_CHOOSE_TYPE
                }),
                (0, l.jsx)(m.Text, {
                    className: p.tip,
                    variant: 'text-md/normal',
                    children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_CHOOSE_TYPE
                }),
                (0, l.jsx)(m.RadioGroup, {
                    className: p.radioGroup,
                    options: s,
                    onChange: (e) => {
                        let { value: a } = e;
                        return n(a);
                    }
                })
            ]
        })
    });
}
function R(e) {
    let { applicationId: a, onSubmitted: n, viewId: s } = e,
        t = (0, _.q)(a);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(m.ModalContent, {
                className: p.content,
                children: [
                    (0, l.jsx)(m.Heading, {
                        variant: 'heading-xl/bold',
                        className: p.header,
                        children: C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_OUTDATED
                    }),
                    (0, l.jsx)(m.Text, {
                        className: p.tip,
                        variant: 'text-md/normal',
                        children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OUTDATED
                    })
                ]
            }),
            (0, l.jsx)(m.ModalFooter, {
                className: p.footer,
                children: (0, l.jsx)(m.Button, {
                    fullWidth: !0,
                    onClick: () => {
                        var e;
                        (0, v.q)({
                            href: (null == (e = t) ? void 0 : e.name) != null ? ''.concat('https://www.igdb.com/search?utf8=\u2713&q=').concat(encodeURIComponent(e.name)) : 'https://www.igdb.com',
                            trusted: !0
                        }),
                            (0, M.MH)({
                                applicationId: a,
                                submitted: !0,
                                viewId: s
                            }),
                            n();
                    },
                    children: C.Z.Messages.GAME_PROFILE_FEEDBACK_VISIT_IGDB
                })
            })
        ]
    });
}
let F = (e) => {
    let { id: a, name: n, applicationRecord: s } = e;
    return (0, l.jsxs)('div', {
        className: p.gameSuggestion,
        children: [
            null != a
                ? (0, l.jsx)(x.Z, {
                      game: s,
                      className: p.smolGameIcon
                  })
                : (0, l.jsx)(m.PencilIcon, {
                      className: p.customGameNameIcon,
                      size: 'sm'
                  }),
            n
        ]
    });
};
function N(e) {
    var a, n, s;
    let { applicationId: t, onSubmitted: i, viewId: x } = e,
        [v, O] = o.useState(''),
        R = (0, c.e7)([E.Z], () => E.Z.getApplication(t)),
        [N, j] = o.useState(''),
        G = (0, c.e7)([h.Z], () => h.Z.getGame(t)),
        T = null !== (n = null !== (a = null == G ? void 0 : G.name) && void 0 !== a ? a : null == R ? void 0 : R.name) && void 0 !== n ? n : '',
        D = null == R ? void 0 : R.getIconURL(A.Si.LARGE),
        { primaryColor: b, secondaryColor: B } = (0, g.Z)(D);
    o.useEffect(() => {
        u.Z.getDetectableGames();
    }, []);
    let f = (0, c.Wu)(
            [I.Z],
            () => {
                let e = ((null == v ? void 0 : v.length) > 0 ? v : T).toLowerCase(),
                    a = null != N ? I.Z.getDetectableGame(N) : void 0;
                return (0, r.chain)(I.Z.games)
                    .filter((a) => d()(e, a.name.toLowerCase()))
                    .filter((e) => e.id !== t)
                    .take(4)
                    .concat(null != a ? [a] : [])
                    .compact()
                    .uniqBy('id')
                    .value();
            },
            [t, N, T, v]
        ),
        Z = (0, _.Z)(f.map((e) => e.id)),
        L = (0, r.chain)(Z).compact().keyBy('id').value(),
        P = v.length > 0 && !f.map((e) => e.name.toLowerCase()).includes(v.toLowerCase()),
        S = N === t || (null === N && 0 === v.length),
        H = f.map((e) => {
            let { name: a, id: n } = e;
            return {
                name: (0, l.jsx)(F, {
                    name: a,
                    id: n,
                    applicationRecord: L[n]
                }),
                value: n
            };
        });
    return (
        P &&
            H.push({
                name: (0, l.jsx)(F, { name: v }),
                value: ''
            }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(m.ModalContent, {
                    className: p.content,
                    children: [
                        (0, l.jsx)(m.Heading, {
                            variant: 'heading-xl/bold',
                            className: p.header,
                            children: C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_WRONG_GAME
                        }),
                        (0, l.jsx)(m.Text, {
                            className: p.tip,
                            variant: 'text-md/normal',
                            children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_WRONG_GAME
                        }),
                        (0, l.jsxs)('div', {
                            className: p.gameInfoBox,
                            style: { background: 'linear-gradient(45deg, '.concat(b, ', ').concat(B, ')') },
                            children: [
                                null != D &&
                                    (0, l.jsx)('img', {
                                        className: p.gameIcon,
                                        src: D,
                                        alt: ''
                                    }),
                                (0, l.jsx)(m.Heading, {
                                    variant: 'heading-lg/semibold',
                                    className: p.gameTitle,
                                    children: null !== (s = null == G ? void 0 : G.name) && void 0 !== s ? s : null == R ? void 0 : R.name
                                })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: p.applicationSearch,
                            children: [
                                (0, l.jsx)(m.SearchBar, {
                                    className: p.searchBar,
                                    query: v,
                                    onChange: (e) => {
                                        if (0 === e.length) null === N && j(t);
                                        else {
                                            var a;
                                            let n = f.find((a) => a.name.toLowerCase() === e.toLowerCase());
                                            j(null !== (a = null == n ? void 0 : n.id) && void 0 !== a ? a : '');
                                        }
                                        O(e);
                                    },
                                    size: m.SearchBar.Sizes.MEDIUM,
                                    onClear: () => {
                                        null === N && j(t), O('');
                                    },
                                    placeholder: C.Z.Messages.GAME_PROFILE_FEEDBACK_PLACEHOLDER_INCORRECT
                                }),
                                (0, l.jsx)(m.RadioGroup, {
                                    size: m.RadioGroup.Sizes.NONE,
                                    radioPosition: 'right',
                                    withTransparentBackground: !0,
                                    radioItemClassName: p.gameSuggestionRadioItem,
                                    value: N,
                                    options: H,
                                    onChange: (e) => {
                                        let { value: a } = e;
                                        return j(a);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, l.jsx)(m.ModalFooter, {
                    className: p.footer,
                    children: (0, l.jsx)(m.Button, {
                        fullWidth: !0,
                        onClick: () => {
                            let e = null != N && N.length > 0;
                            (0, M.MH)({
                                applicationId: t,
                                suggestedGameApplicationId: e ? N : void 0,
                                suggestedGameName: e ? void 0 : v,
                                submitted: !0,
                                viewId: x
                            }),
                                i();
                        },
                        disabled: S,
                        children: C.Z.Messages.SUBMIT
                    })
                })
            ]
        })
    );
}
function j(e) {
    let { applicationId: a, onSubmitted: n, viewId: s } = e,
        [t, i] = o.useState('');
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(m.ModalContent, {
                className: p.content,
                children: [
                    (0, l.jsx)(m.Heading, {
                        variant: 'heading-xl/bold',
                        className: p.header,
                        children: C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_OTHER
                    }),
                    (0, l.jsx)(m.Text, {
                        className: p.tip,
                        variant: 'text-md/normal',
                        children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OTHER
                    }),
                    (0, l.jsx)('div', {
                        className: p.otherFeedbackInput,
                        children: (0, l.jsx)(m.TextArea, {
                            value: t,
                            onChange: (e) => i(e),
                            placeholder: C.Z.Messages.GAME_PROFILE_FEEDBACK_PLACEHOLDER_OTHER,
                            maxLength: 300
                        })
                    })
                ]
            }),
            (0, l.jsx)(m.ModalFooter, {
                className: p.footer,
                children: (0, l.jsx)(m.Button, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, M.MH)({
                            applicationId: a,
                            submitted: !0,
                            feedback: t,
                            viewId: s
                        }),
                            n();
                    },
                    disabled: 0 === t.length,
                    children: C.Z.Messages.SUBMIT
                })
            })
        ]
    });
}
function G(e) {
    let { onClose: a } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(m.ModalContent, {
                className: p.content,
                children: [
                    (0, l.jsx)(m.Heading, {
                        variant: 'heading-xl/bold',
                        className: p.header,
                        children: C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_TY
                    }),
                    (0, l.jsx)(m.Text, {
                        className: p.tip,
                        variant: 'text-md/normal',
                        children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_TY
                    })
                ]
            }),
            (0, l.jsx)(m.ModalFooter, {
                className: p.footer,
                children: (0, l.jsx)(m.Button, {
                    fullWidth: !0,
                    onClick: a,
                    children: C.Z.Messages.DONE
                })
            })
        ]
    });
}
function T(e) {
    let { applicationId: a, viewId: n, transitionState: s, onClose: t, showOutdatedInfoOption: i } = e,
        [d, r] = o.useState(0);
    return (0, l.jsx)(m.ModalRoot, {
        size: m.ModalSize.SMALL,
        transitionState: s,
        children: (() => {
            switch (d) {
                case 0:
                    return (0, l.jsx)(O, {
                        showOutdatedInfoOption: i,
                        onChoice: (e) => r(e)
                    });
                case 1:
                    return (0, l.jsx)(N, {
                        applicationId: a,
                        viewId: n,
                        onSubmitted: () => r(4)
                    });
                case 2:
                    return (0, l.jsx)(R, {
                        applicationId: a,
                        viewId: n,
                        onSubmitted: () => t()
                    });
                case 3:
                    return (0, l.jsx)(j, {
                        applicationId: a,
                        viewId: n,
                        onSubmitted: () => r(4)
                    });
                case 4:
                    return (0, l.jsx)(G, { onClose: t });
            }
        })()
    });
}
