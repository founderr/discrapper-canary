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
                o = l("162426"),
                s = l("462495"),
                i = l("314743"),
                r = l("172402"),
                u = l("914271"),
                c = l("847511"),
                d = l("562228");

            function f(e, t) {
                let l = e.id,
                    f = a.useRef();
                null == f.current && (f.current = [(0, d.generateEmptyPollAnswer)(), (0, d.generateEmptyPollAnswer)()]);
                let [p, E] = a.useState(f.current), [x, A] = a.useState(""), [h, P] = a.useState(n.PollLayoutTypes.DEFAULT), [L, C] = a.useState(!1), g = p.filter(e => (0, d.isAnswerFilled)(e, h)), I = p.filter(e => (0, d.isIncompleteAnswer)(e, h)), T = x.length > 0 && g.length >= 1 && 0 === I.length, [j, {
                    loading: v
                }] = (0, o.default)(c.default.createPoll), R = a.useMemo(() => [...p].every(e => null != e.image || null != e.text && e.text.length > 0), [p]), N = p.length < 6, _ = a.useCallback((e, t) => {
                    E(l => {
                        let a = [...l];
                        return a[t] = {
                            ...a[t],
                            text: e
                        }, a
                    })
                }, []), y = a.useCallback((e, t, l) => {
                    E(a => {
                        var n;
                        let o = [...a];
                        return o[t] = {
                            ...o[t],
                            image: e,
                            uploadId: null != l ? l : null === (n = o[t]) || void 0 === n ? void 0 : n.uploadId
                        }, o
                    })
                }, []), S = a.useCallback((e, t, l) => {
                    var a, n;
                    let o = p[t],
                        s = null === (n = p[t]) || void 0 === n ? void 0 : null === (a = n.image) || void 0 === a ? void 0 : a.gifAttachmentState;
                    null != o && null != s && s.gifUrl !== l && u.removePollUploadAttachment(e, o.uploadId, (0, i.getFileNameFromGifUrl)(o.uploadId, s.gifUrl))
                }, [p]), O = a.useCallback(async (e, t, l) => {
                    var a, n;
                    let o = null !== (n = null === (a = p[t]) || void 0 === a ? void 0 : a.uploadId) && void 0 !== n ? n : (0, d.generateUploadId)();
                    S(e, t), y(m(l, r.PollGifUploadAttachmentStatus.PREPARING), t, o);
                    let s = await u.handlePollGifAttachmentAdd(e, o, l);
                    if (null == s) {
                        y(m(l, r.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    y(m(l, r.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [p, y, S]), k = a.useCallback((e, t) => {
                    S(l, t), y({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [l, y, S]);
                a.useEffect(() => () => {
                    let e = s.default.getFiles(l);
                    (null == e || 0 === e.length) && u.removeAllPollUploadAttachments(l)
                }, [l]);
                let M = a.useCallback(async () => {
                    await j({
                        channel: e,
                        question: x,
                        answers: g,
                        allowMultiSelect: L,
                        layout: h,
                        onClose: t
                    })
                }, [x, g, L, j, e, h, t]);
                return {
                    answers: p,
                    question: x,
                    setQuestion: A,
                    selectedLayoutType: h,
                    setSelectedLayoutType: P,
                    allowMultiSelect: L,
                    setAllowMultiSelect: C,
                    canPost: T,
                    areAllAnswersFilled: R,
                    canAddMoreAnswers: N,
                    handleAnswerTextChange: _,
                    handleGifSelect: O,
                    handleEmojiSelect: k,
                    createPoll: M,
                    submitting: v
                }
            }

            function m(e, t) {
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
                o = l("414456"),
                s = l.n(o),
                i = l("77078"),
                r = l("418009"),
                u = l("430568"),
                c = l("46829"),
                d = l("818643"),
                f = l("264317"),
                m = l("782340"),
                p = l("177037"),
                E = l("877055");

            function x(e) {
                let {
                    image: t,
                    icon: l,
                    emojiStyles: o,
                    emojiSize: s
                } = e, i = (null == t ? void 0 : t.emoji) != null, r = n.useMemo(() => {
                    if ((null == t ? void 0 : t.emoji) != null) return (0, a.jsx)(u.default, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated,
                        className: o,
                        size: s
                    })
                }, [t, o, s]);
                return (0, a.jsx)("div", {
                    children: i ? r : l
                })
            }

            function A(e) {
                let {
                    buttonImage: t,
                    layout: l,
                    handleTogglePollExpressionPicker: n
                } = e, {
                    pollExpressionPickerId: o
                } = (0, f.default)(l);
                return (0, a.jsx)(i.Clickable, {
                    onClick: n,
                    "aria-controls": o,
                    "aria-label": m.default.Messages.POLL_EXPRESSION_PICKER_BUTTON_ARIA,
                    className: l === r.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? p.imageExpressionPickerButton : void 0,
                    "data-menu-item": "true",
                    children: l === r.PollLayoutTypes.DEFAULT ? (0, a.jsx)(x, {
                        image: t,
                        icon: (0, a.jsx)(c.default, {
                            className: p.emojiIcon
                        }),
                        emojiStyles: p.emoji,
                        emojiSize: "default"
                    }) : (0, a.jsx)(x, {
                        image: t,
                        icon: (0, a.jsx)(d.default, {
                            className: p.imageUploadIcon
                        }),
                        emojiSize: "jumbo"
                    })
                })
            }
            var h = n.forwardRef(function(e, t) {
                let {
                    answer: l,
                    index: n,
                    layout: o,
                    onAnswerTextChange: u,
                    handleTogglePollExpressionPicker: c
                } = e, d = (0, a.jsx)(A, {
                    buttonImage: l.image,
                    layout: o,
                    handleTogglePollExpressionPicker: c
                });
                return (0, a.jsx)(a.Fragment, {
                    children: o === r.PollLayoutTypes.DEFAULT ? (0, a.jsxs)("li", {
                        className: s(E.formInput, p.defaultContainer),
                        ref: t,
                        children: [d, (0, a.jsx)(i.TextInput, {
                            placeholder: m.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                            value: l.text,
                            className: p.defaultTextInput,
                            inputClassName: s(E.formInput, p.defaultTextInput),
                            onChange: e => u(e, n)
                        })]
                    }) : (0, a.jsx)("li", {
                        className: p.imageOnlyContainer,
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
                o = l("414456"),
                s = l.n(o),
                i = l("77078"),
                r = l("418009"),
                u = l("241488"),
                c = l("476765"),
                d = l("164424"),
                f = l("562228"),
                m = l("104182"),
                p = l("418298"),
                E = l("612805"),
                x = l("264317"),
                A = l("186859"),
                h = l("782340"),
                P = l("877055");
            let L = (0, c.uid)();

            function C(e) {
                let {
                    channel: t,
                    transitionState: l,
                    onClose: o
                } = e, c = n.useRef(null), {
                    answers: C,
                    question: g,
                    setQuestion: I,
                    selectedLayoutType: T,
                    setSelectedLayoutType: j,
                    allowMultiSelect: v,
                    setAllowMultiSelect: R,
                    canPost: N,
                    areAllAnswersFilled: _,
                    canAddMoreAnswers: y,
                    handleAnswerTextChange: S,
                    handleGifSelect: O,
                    handleEmojiSelect: k
                } = (0, m.default)(t, o), {
                    showPollExpressionPicker: M,
                    togglePollExpressionPicker: b,
                    chatInputType: U,
                    parentRefs: w,
                    lastActiveParentIndex: D
                } = (0, x.default)(T);
                c.current = null != D ? w.current[D] : null;
                let F = n.useCallback(() => {}, []),
                    G = n.useCallback(() => {}, []),
                    H = n.useCallback(() => {}, []),
                    V = n.useMemo(() => {
                        let e = {
                                layout: T,
                                onAnswerTextChange: S,
                                onAnswerGifSelect: O,
                                onAnswerEmojiSelect: k
                            },
                            t = C.map((t, l) => (0, a.jsx)(p.default, {
                                answer: t,
                                index: l,
                                ref: e => w.current[l] = e,
                                handleTogglePollExpressionPicker: () => b(l),
                                ...e
                            }, l));
                        if (_ && y) {
                            let l = C.length;
                            t.push((0, a.jsx)(p.default, {
                                answer: (0, f.generateEmptyPollAnswer)(),
                                index: l,
                                ref: e => w.current[l] = e,
                                handleTogglePollExpressionPicker: () => b(l),
                                ...e
                            }, l))
                        }
                        return t
                    }, [C, S, O, k, T, _, y, b, w]);
                return (0, a.jsxs)(i.ModalRoot, {
                    size: i.ModalSize.DYNAMIC,
                    className: P.container,
                    transitionState: l,
                    "aria-labelledby": L,
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        className: P.header,
                        separator: !1,
                        children: [(0, a.jsx)(i.Heading, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            className: P.headerText,
                            id: L,
                            children: h.default.Messages.CREATE_POLL_HEADING
                        }), (0, a.jsx)(i.ModalCloseButton, {
                            onClick: o
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: P.content,
                        children: [(0, a.jsx)(i.TextInput, {
                            placeholder: h.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: g,
                            inputClassName: P.formInput,
                            onChange: I,
                            autoFocus: !0
                        }), (0, a.jsx)(E.default, {
                            selectedLayoutType: T,
                            onSelectedLayoutType: j
                        }), (0, a.jsx)("ul", {
                            className: s(P.answerInputsContainer, T === r.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? P.imageOnlyContainer : P.defaultContainer),
                            "aria-label": h.default.Messages.POLL_OPTIONS_ARIA,
                            children: V
                        })]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        className: P.footer,
                        children: [(0, a.jsx)(i.Checkbox, {
                            type: i.Checkbox.Types.INVERTED,
                            size: 18,
                            value: v,
                            onChange: (e, t) => R(t),
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: h.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, a.jsxs)(i.Button, {
                            look: i.ButtonLooks.FILLED,
                            size: i.Button.Sizes.MEDIUM,
                            className: P.postButton,
                            innerClassName: P.postButtonInner,
                            disabled: !N,
                            children: [(0, a.jsx)(d.default, {
                                className: P.postIcon
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                children: h.default.Messages.CREATE_POLL_POST
                            })]
                        })]
                    }), M ? (0, a.jsx)(u.default, {
                        positionTargetRef: c,
                        type: U,
                        onSelectGIF: F,
                        onSelectEmoji: G,
                        onSelectSticker: H,
                        channel: t,
                        parentModalKey: A.POLL_CREATION_MODAL_KEY,
                        closeOnModalOuterClick: !0
                    }) : null]
                })
            }
        },
        612805: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                s = l.n(o),
                i = l("77078"),
                r = l("418009"),
                u = l("95689"),
                c = l("100300"),
                d = l("782340"),
                f = l("105335"),
                m = function(e) {
                    let {
                        selectedLayoutType: t,
                        onSelectedLayoutType: l
                    } = e, o = n.useMemo(() => [{
                        name: r.PollLayoutTypes.DEFAULT,
                        label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                        icon: c.default
                    }, {
                        name: r.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                        label: d.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                        icon: u.default
                    }], []), m = e => {
                        l(e)
                    };
                    return (0, a.jsx)("div", {
                        className: f.container,
                        children: o.map(e => {
                            let l = e.name === t,
                                n = e.icon;
                            return (0, a.jsx)(i.Clickable, {
                                "aria-label": e.label,
                                role: "button",
                                onClick: () => m(e.name),
                                className: s(f.option, l && f.optionSelected),
                                children: (0, a.jsx)(n, {
                                    className: s(f.icon, l && f.iconSelected)
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
                o = l("418009"),
                s = l("850391"),
                i = l("538282"),
                r = l("13030");

            function u(e) {
                let [t, l] = a.useState(null), u = a.useRef([]), [c, d, f] = (0, i.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], n.default), m = s.ChatInputTypes.CREATE_POLL, p = null != c && null != d && d === m, E = e === o.PollLayoutTypes.DEFAULT ? r.ExpressionPickerViewType.EMOJI : r.ExpressionPickerViewType.GIF, x = a.useCallback(e => {
                    (0, i.toggleExpressionPicker)(E, m), l(e)
                }, [E, m]);
                return a.useEffect(() => () => {
                    (0, i.closeExpressionPicker)(m)
                }, [m]), {
                    showPollExpressionPicker: p,
                    togglePollExpressionPicker: x,
                    pollExpressionPickerId: f,
                    chatInputType: m,
                    parentRefs: u,
                    lastActiveParentIndex: t
                }
            }
        },
        818643: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                o = l("851298"),
                s = l("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        ...o
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, s.default)(o),
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
                }, o.ImagePlusIcon, void 0, {
                    size: 24
                })
        }
    }
]);