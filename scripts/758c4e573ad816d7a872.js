(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3328"], {
        314743: function(e, t, l) {
            "use strict";

            function a(e, t) {
                var l;
                let a = decodeURIComponent(t),
                    n = null !== (l = a.split("/").pop()) && void 0 !== l ? l : "temp.gif";
                return "".concat(e, "-").concat(n)
            }
            l.r(t), l.d(t, {
                getFileNameFromGifUrl: function() {
                    return a
                }
            }), l("186859")
        },
        172402: function(e, t, l) {
            "use strict";
            var a, n;
            l.r(t), l.d(t, {
                PollGifUploadAttachmentStatus: function() {
                    return a
                }
            }), (n = a || (a = {})).PREPARING = "PREPARING", n.READY_TO_UPLOAD = "READY_TO_UPLOAD", n.ERROR = "ERROR"
        },
        104182: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("222007");
            var a = l("884691"),
                n = l("418009"),
                s = l("162426"),
                o = l("462495"),
                r = l("314743"),
                i = l("172402"),
                u = l("914271"),
                c = l("847511"),
                d = l("562228");

            function f(e, t) {
                let l = e.id,
                    f = a.useRef();
                null == f.current && (f.current = [(0, d.generateEmptyPollAnswer)(), (0, d.generateEmptyPollAnswer)()]);
                let [m, E] = a.useState(f.current), [x, P] = a.useState(""), [A, h] = a.useState(n.PollLayoutTypes.DEFAULT), [L, C] = a.useState(!1), g = m.filter(e => (0, d.isAnswerFilled)(e, A)), T = m.filter(e => (0, d.isIncompleteAnswer)(e, A)), I = x.length > 0 && g.length >= 1 && 0 === T.length, [R, {
                    loading: v
                }] = (0, s.default)(c.default.createPoll), y = a.useMemo(() => [...m].every(e => null != e.image || null != e.text && e.text.length > 0), [m]), k = m.length < 6, N = a.useCallback((e, t) => {
                    E(l => {
                        let a = [...l];
                        return a[t] = {
                            ...a[t],
                            text: e
                        }, a
                    })
                }, []), _ = a.useCallback((e, t, l) => {
                    E(a => {
                        var n;
                        let s = [...a];
                        return s[t] = {
                            ...s[t],
                            image: e,
                            uploadId: null != l ? l : null === (n = s[t]) || void 0 === n ? void 0 : n.uploadId
                        }, s
                    })
                }, []), O = a.useCallback((e, t, l) => {
                    var a, n;
                    let s = m[t],
                        o = null === (n = m[t]) || void 0 === n ? void 0 : null === (a = n.image) || void 0 === a ? void 0 : a.gifAttachmentState;
                    null != s && null != o && o.gifUrl !== l && u.removePollUploadAttachment(e, s.uploadId, (0, r.getFileNameFromGifUrl)(s.uploadId, o.gifUrl))
                }, [m]), j = a.useCallback(async (e, t, l) => {
                    var a, n;
                    let s = null !== (n = null === (a = m[t]) || void 0 === a ? void 0 : a.uploadId) && void 0 !== n ? n : (0, d.generateUploadId)();
                    O(e, t), _(p(l, i.PollGifUploadAttachmentStatus.PREPARING), t, s);
                    let o = await u.handlePollGifAttachmentAdd(e, s, l);
                    if (null == o) {
                        _(p(l, i.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    _(p(l, i.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [m, _, O]), S = a.useCallback((e, t) => {
                    O(l, t), _({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [l, _, O]);
                a.useEffect(() => () => {
                    let e = o.default.getFiles(l);
                    (null == e || 0 === e.length) && u.removeAllPollUploadAttachments(l)
                }, [l]);
                let M = a.useCallback(async () => {
                    await R({
                        channel: e,
                        question: x,
                        answers: g,
                        allowMultiSelect: L,
                        layout: A,
                        onClose: t
                    })
                }, [x, g, L, R, e, A, t]);
                return {
                    answers: m,
                    question: x,
                    setQuestion: P,
                    selectedLayoutType: A,
                    setSelectedLayoutType: h,
                    allowMultiSelect: L,
                    setAllowMultiSelect: C,
                    canPost: I,
                    areAllAnswersFilled: y,
                    canAddMoreAnswers: k,
                    handleAnswerTextChange: N,
                    handleGifSelect: j,
                    handleEmojiSelect: S,
                    createPoll: M,
                    submitting: v
                }
            }

            function p(e, t) {
                return {
                    gifAttachmentState: {
                        status: t,
                        gifUrl: e
                    },
                    emoji: void 0,
                    stickerId: void 0
                }
            }
        },
        418298: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                o = l.n(s),
                r = l("77078"),
                i = l("418009"),
                u = l("430568"),
                c = l("858619"),
                d = l("46829"),
                f = l("818643"),
                p = l("264317"),
                m = l("782340"),
                E = l("177037"),
                x = l("877055");

            function P(e) {
                let {
                    layout: t,
                    image: l
                } = e, s = null == l ? void 0 : l.emoji, o = n.useMemo(() => {
                    if (null != s) return (0, a.jsx)(u.default, {
                        emojiId: s.id,
                        emojiName: s.type === c.EmojiTypes.UNICODE ? s.surrogates : s.name,
                        animated: s.animated,
                        className: E.expressionPickerButtonImage,
                        size: t === i.PollLayoutTypes.DEFAULT ? "default" : "jumbo"
                    });
                    let e = t === i.PollLayoutTypes.DEFAULT ? d.default : f.default;
                    return (0, a.jsx)(e, {
                        className: E.expressionPickerButtonImage
                    })
                }, [s, t]);
                return o
            }

            function A(e) {
                let {
                    buttonImage: t,
                    layout: l,
                    handleTogglePollExpressionPicker: n
                } = e, {
                    pollExpressionPickerId: s
                } = (0, p.default)(l);
                return (0, a.jsx)(r.Clickable, {
                    onClick: n,
                    "aria-controls": s,
                    "aria-label": m.default.Messages.POLL_EXPRESSION_PICKER_BUTTON_ARIA,
                    className: l === i.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? E.imageExpressionPickerButton : void 0,
                    "data-menu-item": "true",
                    children: (0, a.jsx)(P, {
                        layout: l,
                        image: t
                    })
                })
            }
            var h = n.forwardRef(function(e, t) {
                let {
                    answer: l,
                    index: n,
                    layout: s,
                    onAnswerTextChange: u,
                    handleTogglePollExpressionPicker: c
                } = e, d = (0, a.jsx)(A, {
                    buttonImage: l.image,
                    layout: s,
                    handleTogglePollExpressionPicker: c
                });
                return (0, a.jsx)(a.Fragment, {
                    children: s === i.PollLayoutTypes.DEFAULT ? (0, a.jsxs)("li", {
                        className: o(x.formInput, E.defaultContainer),
                        ref: t,
                        children: [d, (0, a.jsx)(r.TextInput, {
                            placeholder: m.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                            value: l.text,
                            className: E.defaultTextInput,
                            inputClassName: o(x.formInput, E.defaultTextInput),
                            onChange: e => u(e, n)
                        })]
                    }) : (0, a.jsx)("li", {
                        className: E.imageOnlyContainer,
                        ref: t,
                        children: d
                    })
                })
            })
        },
        487757: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            }), l("424973");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                o = l.n(s),
                r = l("77078"),
                i = l("418009"),
                u = l("241488"),
                c = l("476765"),
                d = l("164424"),
                f = l("562228"),
                p = l("104182"),
                m = l("418298"),
                E = l("612805"),
                x = l("264317"),
                P = l("186859"),
                A = l("782340"),
                h = l("877055");
            let L = (0, c.uid)();

            function C(e) {
                let {
                    channel: t,
                    transitionState: l,
                    onClose: s
                } = e, c = n.useRef(null), {
                    answers: C,
                    question: g,
                    setQuestion: T,
                    selectedLayoutType: I,
                    setSelectedLayoutType: R,
                    allowMultiSelect: v,
                    setAllowMultiSelect: y,
                    canPost: k,
                    areAllAnswersFilled: N,
                    canAddMoreAnswers: _,
                    handleAnswerTextChange: O,
                    handleEmojiSelect: j
                } = (0, p.default)(t, s), {
                    showPollExpressionPicker: S,
                    togglePollExpressionPicker: M,
                    closePollExpressionPicker: b,
                    chatInputType: U,
                    parentRefs: w,
                    lastActiveParentIndex: D
                } = (0, x.default)(I);
                c.current = null != D ? w.current[D] : null;
                let F = n.useCallback(() => {}, []),
                    G = n.useCallback(e => {
                        null != D && null != e && j(e, D), b()
                    }, [D, j, b]),
                    H = n.useCallback(() => {}, []),
                    V = n.useMemo(() => {
                        let e = {
                                layout: I,
                                onAnswerTextChange: O
                            },
                            t = C.map((t, l) => (0, a.jsx)(m.default, {
                                answer: t,
                                index: l,
                                ref: e => w.current[l] = e,
                                handleTogglePollExpressionPicker: () => M(l),
                                ...e
                            }, l));
                        if (N && _) {
                            let l = C.length;
                            t.push((0, a.jsx)(m.default, {
                                answer: (0, f.generateEmptyPollAnswer)(),
                                index: l,
                                ref: e => w.current[l] = e,
                                handleTogglePollExpressionPicker: () => M(l),
                                ...e
                            }, l))
                        }
                        return t
                    }, [C, O, I, N, _, M, w]);
                return (0, a.jsxs)(r.ModalRoot, {
                    size: r.ModalSize.DYNAMIC,
                    className: h.container,
                    transitionState: l,
                    "aria-labelledby": L,
                    children: [(0, a.jsxs)(r.ModalHeader, {
                        className: h.header,
                        separator: !1,
                        children: [(0, a.jsx)(r.Heading, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            className: h.headerText,
                            id: L,
                            children: A.default.Messages.CREATE_POLL_HEADING
                        }), (0, a.jsx)(r.ModalCloseButton, {
                            onClick: s
                        })]
                    }), (0, a.jsxs)(r.ModalContent, {
                        className: h.content,
                        children: [(0, a.jsx)(r.TextInput, {
                            placeholder: A.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: g,
                            inputClassName: h.formInput,
                            onChange: T,
                            autoFocus: !0
                        }), (0, a.jsx)(E.default, {
                            selectedLayoutType: I,
                            onSelectedLayoutType: R
                        }), (0, a.jsx)("ul", {
                            className: o(h.answerInputsContainer, I === i.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? h.imageOnlyContainer : h.defaultContainer),
                            "aria-label": A.default.Messages.POLL_OPTIONS_ARIA,
                            children: V
                        })]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        className: h.footer,
                        children: [(0, a.jsx)(r.Checkbox, {
                            type: r.Checkbox.Types.INVERTED,
                            size: 18,
                            value: v,
                            onChange: (e, t) => y(t),
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: A.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, a.jsxs)(r.Button, {
                            look: r.ButtonLooks.FILLED,
                            size: r.Button.Sizes.MEDIUM,
                            className: h.postButton,
                            innerClassName: h.postButtonInner,
                            disabled: !k,
                            children: [(0, a.jsx)(d.default, {
                                className: h.postIcon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                children: A.default.Messages.CREATE_POLL_POST
                            })]
                        })]
                    }), S ? (0, a.jsx)(u.default, {
                        positionTargetRef: c,
                        type: U,
                        onSelectGIF: F,
                        onSelectEmoji: G,
                        onSelectSticker: H,
                        channel: t,
                        parentModalKey: P.POLL_CREATION_MODAL_KEY,
                        closeOnModalOuterClick: !0
                    }) : null]
                })
            }
        },
        612805: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                o = l.n(s),
                r = l("77078"),
                i = l("418009"),
                u = l("95689"),
                c = l("100300"),
                d = l("782340"),
                f = l("105335"),
                p = function(e) {
                    let {
                        selectedLayoutType: t,
                        onSelectedLayoutType: l
                    } = e, s = n.useMemo(() => [{
                        name: i.PollLayoutTypes.DEFAULT,
                        label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                        icon: c.default
                    }, {
                        name: i.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                        label: d.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                        icon: u.default
                    }], []), p = e => {
                        l(e)
                    };
                    return (0, a.jsx)("div", {
                        className: f.container,
                        children: s.map(e => {
                            let l = e.name === t,
                                n = e.icon;
                            return (0, a.jsx)(r.Clickable, {
                                "aria-label": e.label,
                                role: "button",
                                onClick: () => p(e.name),
                                className: o(f.option, l && f.optionSelected),
                                children: (0, a.jsx)(n, {
                                    className: o(f.icon, l && f.iconSelected)
                                })
                            }, e.name)
                        })
                    })
                }
        },
        264317: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            }), l("222007");
            var a = l("884691"),
                n = l("16470"),
                s = l("418009"),
                o = l("850391"),
                r = l("538282"),
                i = l("13030");

            function u(e) {
                let [t, l] = a.useState(null), u = a.useRef([]), [c, d, f] = (0, r.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], n.default), p = o.ChatInputTypes.CREATE_POLL, m = null != c && null != d && d === p, E = e === s.PollLayoutTypes.DEFAULT ? i.ExpressionPickerViewType.EMOJI : i.ExpressionPickerViewType.GIF, x = a.useCallback(e => {
                    (0, r.toggleExpressionPicker)(E, p), l(e)
                }, [E, p]), P = a.useCallback(() => {
                    (0, r.closeExpressionPicker)(p)
                }, [p]);
                return a.useEffect(() => () => {
                    (0, r.closeExpressionPicker)(p)
                }, [p]), {
                    showPollExpressionPicker: m,
                    togglePollExpressionPicker: x,
                    closePollExpressionPicker: P,
                    pollExpressionPickerId: f,
                    chatInputType: p,
                    parentRefs: u,
                    lastActiveParentIndex: t
                }
            }
        },
        818643: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                s = l("851298"),
                o = l("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        ...s
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: n
                        }), (0, a.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: n
                        })]
                    })
                }, s.ImagePlusIcon, void 0, {
                    size: 24
                })
        }
    }
]);