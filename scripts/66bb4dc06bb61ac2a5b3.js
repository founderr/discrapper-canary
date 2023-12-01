(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3328"], {
        254398: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                makeTenorProxyURL: function() {
                    return o
                }
            }), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("222007"), l("70102");
            var a = l("49111");
            let n = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function o(e) {
                let t = new URL("".concat(window.location.protocol).concat(e)),
                    {
                        ASSET_ENDPOINT: l
                    } = window.GLOBAL_ENV;
                if (null == t.pathname.match(n)) throw Error("Unexpected Tenor GIF path.");
                let o = "".concat(a.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(l).concat(o)
            }
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
                r = l("314743"),
                i = l("172402"),
                u = l("914271"),
                c = l("847511"),
                d = l("562228");

            function f(e, t) {
                let l = e.id,
                    f = a.useRef();
                null == f.current && (f.current = [(0, d.generateEmptyPollAnswer)(), (0, d.generateEmptyPollAnswer)()]);
                let [m, E] = a.useState(f.current), [h, L] = a.useState(""), [P, A] = a.useState(n.PollLayoutTypes.DEFAULT), [x, g] = a.useState(!1), T = m.filter(e => (0, d.isAnswerFilled)(e, P)), I = m.filter(e => (0, d.isIncompleteAnswer)(e, P)), v = h.length > 0 && T.length >= 1 && 0 === I.length, [C, {
                    loading: R
                }] = (0, o.default)(c.default.createPoll), y = a.useMemo(() => [...m].every(e => null != e.image || null != e.text && e.text.length > 0), [m]), S = m.length < 6, N = a.useCallback((e, t) => {
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
                        let o = [...a];
                        return o[t] = {
                            ...o[t],
                            image: e,
                            uploadId: null != l ? l : null === (n = o[t]) || void 0 === n ? void 0 : n.uploadId
                        }, o
                    })
                }, []), k = a.useCallback((e, t, l) => {
                    var a, n;
                    let o = m[t],
                        s = null === (n = m[t]) || void 0 === n ? void 0 : null === (a = n.image) || void 0 === a ? void 0 : a.gifAttachmentState;
                    null != o && null != s && s.gifUrl !== l && u.removePollUploadAttachment(e, o.uploadId, (0, r.getFileNameFromGifUrl)(o.uploadId, s.gifUrl))
                }, [m]), O = a.useCallback(async (e, t, l) => {
                    var a, n;
                    let o = null !== (n = null === (a = m[t]) || void 0 === a ? void 0 : a.uploadId) && void 0 !== n ? n : (0, d.generateUploadId)();
                    k(e, t), _(p(l, i.PollGifUploadAttachmentStatus.PREPARING), t, o);
                    let s = await u.handlePollGifAttachmentAdd(e, o, l);
                    if (null == s) {
                        _(p(l, i.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    _(p(l, i.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [m, _, k]), j = a.useCallback((e, t) => {
                    k(l, t), _({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [l, _, k]), U = a.useCallback(e => {
                    E(t => {
                        let l = [...t];
                        return l.splice(e, 1), l
                    })
                }, []);
                a.useEffect(() => () => {
                    let e = s.default.getFiles(l);
                    (null == e || 0 === e.length) && u.removeAllPollUploadAttachments(l)
                }, [l]);
                let M = a.useCallback(async () => {
                    await C({
                        channel: e,
                        question: h,
                        answers: T,
                        allowMultiSelect: x,
                        layout: P,
                        onClose: t
                    })
                }, [h, T, x, C, e, P, t]);
                return {
                    answers: m,
                    question: h,
                    setQuestion: L,
                    selectedLayoutType: P,
                    setSelectedLayoutType: A,
                    allowMultiSelect: x,
                    setAllowMultiSelect: g,
                    canPost: v,
                    areAllAnswersFilled: y,
                    canAddMoreAnswers: S,
                    handleAnswerTextChange: N,
                    handleGifSelect: O,
                    handleEmojiSelect: j,
                    handleRemoveAnswer: U,
                    createPoll: M,
                    submitting: R
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
                    return I
                }
            }), l("222007"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660");
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                s = l.n(o),
                r = l("77078"),
                i = l("446674"),
                u = l("418009"),
                c = l("430568"),
                d = l("858619"),
                f = l("474643"),
                p = l("585722"),
                m = l("46829"),
                E = l("818643"),
                h = l("172402"),
                L = l("264317"),
                P = l("782340"),
                A = l("177037"),
                x = l("877055");

            function g(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: o,
                    layout: s,
                    image: r
                } = e, h = null == r ? void 0 : r.emoji, L = (0, i.useStateFromStores)([p.default], () => p.default.getUpload(l, o, f.DraftType.Poll)), [P, x] = n.useState();
                n.useEffect(() => {
                    var e;
                    if ((null == L ? void 0 : null === (e = L.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(L.item.file);
                    return x(t), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == L ? void 0 : null === (t = L.item) || void 0 === t ? void 0 : t.file]);
                let g = n.useMemo(() => {
                    if (null != L) return (0, a.jsx)("img", {
                        src: P,
                        className: s === u.PollLayoutTypes.DEFAULT ? A.gifDefault : A.gifJumbo,
                        alt: ""
                    });
                    if (null != h) return (0, a.jsx)(c.default, {
                        emojiId: h.id,
                        emojiName: h.type === d.EmojiTypes.UNICODE ? h.surrogates : h.name,
                        animated: h.animated,
                        className: A.expressionPickerButtonImage,
                        size: s === u.PollLayoutTypes.DEFAULT ? "default" : "jumbo"
                    });
                    let e = s === u.PollLayoutTypes.DEFAULT ? m.default : E.default;
                    return (0, a.jsx)(e, {
                        className: A.expressionPickerButtonImage
                    })
                }, [h, s, L, P]);
                return g
            }

            function T(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: n,
                    buttonImage: o,
                    layout: s,
                    handleTogglePollExpressionPicker: i
                } = e, {
                    pollExpressionPickerId: c
                } = (0, L.default)(s), d = (null == o ? void 0 : null === (t = o.gifAttachmentState) || void 0 === t ? void 0 : t.status) === h.PollGifUploadAttachmentStatus.PREPARING;
                return d ? (0, a.jsx)(r.Spinner, {
                    className: s === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? A.spinnerWrapper : void 0
                }) : (0, a.jsx)(r.Clickable, {
                    onClick: i,
                    "aria-controls": c,
                    "aria-label": P.default.Messages.POLL_EXPRESSION_PICKER_BUTTON_ARIA,
                    className: s === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? A.imageExpressionPickerButton : void 0,
                    "data-menu-item": "true",
                    children: (0, a.jsx)(g, {
                        channelId: l,
                        layout: s,
                        image: o,
                        uploadId: n
                    })
                })
            }
            var I = n.forwardRef(function(e, t) {
                let {
                    channelId: l,
                    answer: n,
                    index: o,
                    layout: i,
                    onAnswerTextChange: c,
                    handleTogglePollExpressionPicker: d
                } = e, f = (0, a.jsx)(T, {
                    channelId: l,
                    buttonImage: n.image,
                    layout: i,
                    handleTogglePollExpressionPicker: d,
                    uploadId: n.uploadId
                });
                return (0, a.jsx)(a.Fragment, {
                    children: i === u.PollLayoutTypes.DEFAULT ? (0, a.jsxs)("li", {
                        className: s(x.formInput, A.defaultContainer),
                        ref: t,
                        children: [f, (0, a.jsx)(r.TextInput, {
                            placeholder: P.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                            value: n.text,
                            className: A.defaultTextInput,
                            inputClassName: s(x.formInput, A.defaultTextInput),
                            onChange: e => c(e, o)
                        })]
                    }) : (0, a.jsx)("li", {
                        className: A.imageOnlyContainer,
                        ref: t,
                        children: f
                    })
                })
            })
        },
        487757: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("424973");
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                s = l.n(o),
                r = l("77078"),
                i = l("418009"),
                u = l("476765"),
                c = l("164424"),
                d = l("562228"),
                f = l("104182"),
                p = l("418298"),
                m = l("612805"),
                E = l("53013"),
                h = l("264317"),
                L = l("186859"),
                P = l("782340"),
                A = l("877055");
            let x = (0, u.uid)();

            function g(e) {
                let {
                    channel: t,
                    transitionState: l,
                    onClose: o
                } = e, {
                    answers: u,
                    question: g,
                    setQuestion: T,
                    selectedLayoutType: I,
                    setSelectedLayoutType: v,
                    allowMultiSelect: C,
                    setAllowMultiSelect: R,
                    canPost: y,
                    areAllAnswersFilled: S,
                    canAddMoreAnswers: N,
                    handleAnswerTextChange: _,
                    handleEmojiSelect: k,
                    handleGifSelect: O,
                    createPoll: j,
                    submitting: U
                } = (0, f.default)(t, o), M = n.useRef([]), {
                    togglePollExpressionPicker: b,
                    lastActiveParentIndex: w
                } = (0, h.default)(I), D = n.useMemo(() => {
                    let e = {
                            layout: I,
                            onAnswerTextChange: _
                        },
                        l = u.map((l, n) => (0, a.jsx)(p.default, {
                            answer: l,
                            channelId: t.id,
                            index: n,
                            ref: e => M.current[n] = e,
                            handleTogglePollExpressionPicker: () => b(n),
                            ...e
                        }, n));
                    if (S && N) {
                        let n = u.length;
                        l.push((0, a.jsx)(p.default, {
                            answer: (0, d.generateEmptyPollAnswer)(),
                            channelId: t.id,
                            index: n,
                            ref: e => M.current[n] = e,
                            handleTogglePollExpressionPicker: () => b(n),
                            ...e
                        }, n))
                    }
                    return l
                }, [u, _, I, S, N, b, M, t.id]);
                return (0, a.jsxs)(r.ModalRoot, {
                    size: r.ModalSize.DYNAMIC,
                    className: A.container,
                    transitionState: l,
                    "aria-labelledby": x,
                    children: [(0, a.jsxs)(r.ModalHeader, {
                        className: A.header,
                        separator: !1,
                        children: [(0, a.jsx)(r.Heading, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            className: A.headerText,
                            id: x,
                            children: P.default.Messages.CREATE_POLL_HEADING
                        }), (0, a.jsx)(r.ModalCloseButton, {
                            onClick: o
                        })]
                    }), (0, a.jsxs)(r.ModalContent, {
                        className: A.content,
                        children: [(0, a.jsx)(r.TextInput, {
                            placeholder: P.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: g,
                            inputClassName: A.formInput,
                            onChange: T,
                            autoFocus: !0
                        }), (0, a.jsx)(m.default, {
                            selectedLayoutType: I,
                            onSelectedLayoutType: v
                        }), (0, a.jsx)("ul", {
                            className: s(A.answerInputsContainer, I === i.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? A.imageOnlyContainer : A.defaultContainer),
                            "aria-label": P.default.Messages.POLL_OPTIONS_ARIA,
                            children: D
                        })]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        className: A.footer,
                        children: [(0, a.jsx)(r.Checkbox, {
                            type: r.Checkbox.Types.INVERTED,
                            size: 18,
                            value: C,
                            onChange: (e, t) => R(t),
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: P.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, a.jsxs)(r.Button, {
                            look: r.ButtonLooks.FILLED,
                            size: r.Button.Sizes.MEDIUM,
                            className: A.postButton,
                            innerClassName: A.postButtonInner,
                            onClick: j,
                            submitting: U,
                            disabled: !y,
                            children: [(0, a.jsx)(c.default, {
                                className: A.postIcon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                children: P.default.Messages.CREATE_POLL_POST
                            })]
                        })]
                    }), (0, a.jsx)(E.default, {
                        channel: t,
                        layout: I,
                        parentModalKey: L.POLL_CREATION_MODAL_KEY,
                        handleEmojiSelect: k,
                        handleGifSelect: O,
                        inputRefs: M,
                        lastActiveInputIndex: w
                    })]
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
                o = l("414456"),
                s = l.n(o),
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
                    } = e, o = n.useMemo(() => [{
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
                        children: o.map(e => {
                            let l = e.name === t,
                                n = e.icon;
                            return (0, a.jsx)(r.Clickable, {
                                "aria-label": e.label,
                                role: "button",
                                onClick: () => p(e.name),
                                className: s(f.option, l && f.optionSelected),
                                children: (0, a.jsx)(n, {
                                    className: s(f.icon, l && f.iconSelected)
                                })
                            }, e.name)
                        })
                    })
                }
        },
        53013: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("37983"),
                n = l("884691"),
                o = l("775560"),
                s = l("241488"),
                r = l("254398"),
                i = l("264317");

            function u(e) {
                let {
                    channel: t,
                    layout: l,
                    parentModalKey: u,
                    inputRefs: c,
                    lastActiveInputIndex: d,
                    handleEmojiSelect: f,
                    handleGifSelect: p
                } = e, m = n.useRef(null), E = (0, o.useForceUpdate)(), {
                    showPollExpressionPicker: h,
                    closePollExpressionPicker: L,
                    chatInputType: P
                } = (0, i.default)(l);
                n.useEffect(() => {
                    m.current = null != d ? c.current[d] : null, E()
                }, [c, d, E]);
                let A = n.useCallback(e => {
                        null != d && (null == e ? void 0 : e.gifSrc) != null && p(t.id, d, (0, r.makeTenorProxyURL)(e.gifSrc)), L()
                    }, [L, d, p, t.id]),
                    x = n.useCallback(e => {
                        null != d && null != e && f(e, d), L()
                    }, [d, f, L]),
                    g = n.useCallback(() => {}, []);
                return h && null != m.current ? (0, a.jsx)(s.default, {
                    positionTargetRef: m,
                    type: P,
                    onSelectGIF: A,
                    onSelectEmoji: x,
                    onSelectSticker: g,
                    channel: t,
                    parentModalKey: u,
                    closeOnModalOuterClick: !0
                }) : null
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
                r = l("538282"),
                i = l("13030");

            function u(e) {
                let [t, l] = a.useState(null), [u, c, d] = (0, r.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], n.default), f = s.ChatInputTypes.CREATE_POLL, p = null != u && null != c && c === f, m = e === o.PollLayoutTypes.DEFAULT ? i.ExpressionPickerViewType.EMOJI : i.ExpressionPickerViewType.GIF, E = a.useCallback(e => {
                    (0, r.toggleExpressionPicker)(m, f), l(e)
                }, [m, f]), h = a.useCallback(() => {
                    (0, r.closeExpressionPicker)(f)
                }, [f]);
                return a.useEffect(() => () => {
                    (0, r.closeExpressionPicker)(f)
                }, [f]), {
                    showPollExpressionPicker: p,
                    togglePollExpressionPicker: E,
                    closePollExpressionPicker: h,
                    pollExpressionPickerId: d,
                    chatInputType: f,
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
                o = l("851298"),
                s = l("75196"),
                r = (0, n.replaceIcon)(function(e) {
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