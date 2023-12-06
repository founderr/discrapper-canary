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
                    return d
                }
            }), l("222007");
            var a = l("884691"),
                n = l("418009"),
                o = l("162426"),
                i = l("314743"),
                r = l("172402"),
                s = l("914271"),
                u = l("847511"),
                c = l("562228");

            function d(e, t) {
                let l = e.id,
                    d = a.useRef();
                null == d.current && (d.current = [(0, c.generateEmptyPollAnswer)(), (0, c.generateEmptyPollAnswer)()]);
                let [p, m] = a.useState(d.current), [E, h] = a.useState(""), [x, A] = a.useState(n.PollLayoutTypes.DEFAULT), [L, P] = a.useState(!1), v = p.filter(e => (0, c.isAnswerFilled)(e, x)), g = p.filter(e => (0, c.isIncompleteAnswer)(e, x)), T = E.length > 0 && v.length >= 1 && 0 === g.length, [C, {
                    error: I,
                    loading: R
                }] = (0, o.default)(u.default.createPoll), y = a.useMemo(() => [...p].every(e => null != e.image || null != e.text && e.text.length > 0), [p]), S = p.length < 6, k = a.useCallback((e, t) => {
                    m(l => {
                        let a = [...l];
                        return a[t] = {
                            ...a[t],
                            text: e
                        }, a
                    })
                }, []), N = a.useCallback((e, t, l) => {
                    m(a => {
                        var n;
                        let o = [...a];
                        return o[t] = {
                            ...o[t],
                            image: e,
                            uploadId: null != l ? l : null === (n = o[t]) || void 0 === n ? void 0 : n.uploadId
                        }, o
                    })
                }, []), _ = a.useCallback((e, t, l) => {
                    var a, n;
                    let o = p[t],
                        r = null === (n = p[t]) || void 0 === n ? void 0 : null === (a = n.image) || void 0 === a ? void 0 : a.gifAttachmentState;
                    null != o && null != r && r.gifUrl !== l && s.removePollUploadAttachment(e, o.uploadId, (0, i.getFileNameFromGifUrl)(o.uploadId, r.gifUrl))
                }, [p]), j = a.useCallback(async (e, t, l) => {
                    var a, n;
                    let o = null !== (n = null === (a = p[t]) || void 0 === a ? void 0 : a.uploadId) && void 0 !== n ? n : (0, c.generateUploadId)();
                    _(e, t), N(f(l, r.PollGifUploadAttachmentStatus.PREPARING), t, o);
                    let i = await s.handlePollGifAttachmentAdd(e, o, l);
                    if (null == i) {
                        N(f(l, r.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    N(f(l, r.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [p, N, _]), O = a.useCallback((e, t) => {
                    _(l, t), N({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [l, N, _]), M = a.useCallback(e => {
                    m(t => {
                        let l = [...t];
                        return l.splice(e, 1), l
                    })
                }, []);
                a.useEffect(() => () => {
                    s.removeAllPollUploadAttachments(l)
                }, [l]);
                let U = a.useCallback(async () => {
                    await C({
                        channel: e,
                        question: E,
                        answers: v,
                        allowMultiSelect: L,
                        layout: x,
                        onClose: t
                    })
                }, [E, v, L, C, e, x, t]);
                return {
                    answers: p,
                    question: E,
                    setQuestion: h,
                    selectedLayoutType: x,
                    setSelectedLayoutType: A,
                    allowMultiSelect: L,
                    setAllowMultiSelect: P,
                    canPost: T,
                    areAllAnswersFilled: y,
                    canAddMoreAnswers: S,
                    handleAnswerTextChange: k,
                    handleGifSelect: j,
                    handleEmojiSelect: O,
                    handleRemoveAnswer: M,
                    createPoll: U,
                    submitting: R,
                    createPollError: I
                }
            }

            function f(e, t) {
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
                    return T
                }
            }), l("222007"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660");
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                i = l.n(o),
                r = l("77078"),
                s = l("446674"),
                u = l("418009"),
                c = l("430568"),
                d = l("858619"),
                f = l("474643"),
                p = l("585722"),
                m = l("46829"),
                E = l("818643"),
                h = l("172402"),
                x = l("264317"),
                A = l("782340"),
                L = l("177037"),
                P = l("877055");

            function v(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: o,
                    layout: i,
                    image: r
                } = e, h = null == r ? void 0 : r.emoji, x = (0, s.useStateFromStores)([p.default], () => p.default.getUpload(l, o, f.DraftType.Poll)), [A, P] = n.useState();
                n.useEffect(() => {
                    var e;
                    if ((null == x ? void 0 : null === (e = x.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(x.item.file);
                    return P(t), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == x ? void 0 : null === (t = x.item) || void 0 === t ? void 0 : t.file]);
                let v = n.useMemo(() => {
                    if (null != x) return (0, a.jsx)("img", {
                        src: A,
                        className: i === u.PollLayoutTypes.DEFAULT ? L.gifDefault : L.gifJumbo,
                        alt: ""
                    });
                    if (null != h) return (0, a.jsx)(c.default, {
                        emojiId: h.id,
                        emojiName: h.type === d.EmojiTypes.UNICODE ? h.surrogates : h.name,
                        animated: h.animated,
                        className: L.expressionPickerButtonImage,
                        size: i === u.PollLayoutTypes.DEFAULT ? "default" : "jumbo"
                    });
                    let e = i === u.PollLayoutTypes.DEFAULT ? m.default : E.default;
                    return (0, a.jsx)(e, {
                        className: L.expressionPickerButtonImage
                    })
                }, [h, i, x, A]);
                return v
            }

            function g(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: n,
                    buttonImage: o,
                    layout: i,
                    handleTogglePollExpressionPicker: s
                } = e, {
                    pollExpressionPickerId: c
                } = (0, x.default)(i), d = (null == o ? void 0 : null === (t = o.gifAttachmentState) || void 0 === t ? void 0 : t.status) === h.PollGifUploadAttachmentStatus.PREPARING;
                return d ? (0, a.jsx)(r.Spinner, {
                    className: i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? L.spinnerWrapper : void 0
                }) : (0, a.jsx)(r.Clickable, {
                    onClick: s,
                    "aria-controls": c,
                    "aria-label": A.default.Messages.POLL_EXPRESSION_PICKER_BUTTON_ARIA,
                    className: i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? L.imageExpressionPickerButton : void 0,
                    "data-menu-item": "true",
                    children: (0, a.jsx)(v, {
                        channelId: l,
                        layout: i,
                        image: o,
                        uploadId: n
                    })
                })
            }
            var T = n.forwardRef(function(e, t) {
                let {
                    channelId: l,
                    answer: n,
                    index: o,
                    layout: s,
                    onAnswerTextChange: c,
                    handleTogglePollExpressionPicker: d
                } = e, f = (0, a.jsx)(g, {
                    channelId: l,
                    buttonImage: n.image,
                    layout: s,
                    handleTogglePollExpressionPicker: d,
                    uploadId: n.uploadId
                });
                return (0, a.jsx)(a.Fragment, {
                    children: s === u.PollLayoutTypes.DEFAULT ? (0, a.jsxs)("li", {
                        className: i(P.formInput, L.defaultContainer),
                        ref: t,
                        children: [f, (0, a.jsx)(r.TextInput, {
                            placeholder: A.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                            value: n.text,
                            className: L.defaultTextInput,
                            inputClassName: i(P.formInput, L.defaultTextInput),
                            onChange: e => c(e, o)
                        })]
                    }) : (0, a.jsx)("li", {
                        className: L.imageOnlyContainer,
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
                    return T
                }
            }), l("424973");
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                i = l.n(o),
                r = l("627445"),
                s = l.n(r),
                u = l("77078"),
                c = l("418009"),
                d = l("476765"),
                f = l("164424"),
                p = l("562228"),
                m = l("104182"),
                E = l("418298"),
                h = l("612805"),
                x = l("53013"),
                A = l("264317"),
                L = l("186859"),
                P = l("782340"),
                v = l("877055");
            let g = (0, d.uid)();

            function T(e) {
                let {
                    channel: t,
                    transitionState: l,
                    onClose: o
                } = e, {
                    answers: r,
                    question: d,
                    setQuestion: T,
                    selectedLayoutType: C,
                    setSelectedLayoutType: I,
                    allowMultiSelect: R,
                    setAllowMultiSelect: y,
                    canPost: S,
                    areAllAnswersFilled: k,
                    canAddMoreAnswers: N,
                    handleAnswerTextChange: _,
                    handleEmojiSelect: j,
                    handleGifSelect: O,
                    createPoll: M,
                    createPollError: U,
                    submitting: b
                } = (0, m.default)(t, o), w = n.useRef([]), {
                    togglePollExpressionPicker: D,
                    lastActiveParentIndex: G
                } = (0, A.default)(C), F = n.useCallback(() => {
                    s(null != G, "Must have an active input");
                    let e = w.current[G];
                    return s(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [G]), B = n.useMemo(() => {
                    let e = {
                            layout: C,
                            onAnswerTextChange: _
                        },
                        l = r.map((l, n) => (0, a.jsx)(E.default, {
                            answer: l,
                            channelId: t.id,
                            index: n,
                            ref: e => w.current[n] = e,
                            handleTogglePollExpressionPicker: () => D(n),
                            ...e
                        }, n));
                    if (k && N) {
                        let n = r.length;
                        l.push((0, a.jsx)(E.default, {
                            answer: (0, p.generateEmptyPollAnswer)(),
                            channelId: t.id,
                            index: n,
                            ref: e => w.current[n] = e,
                            handleTogglePollExpressionPicker: () => D(n),
                            ...e
                        }, n))
                    }
                    return l
                }, [r, _, C, k, N, D, w, t.id]);
                return (0, a.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.DYNAMIC,
                    className: v.container,
                    transitionState: l,
                    "aria-labelledby": g,
                    children: [(0, a.jsxs)(u.ModalHeader, {
                        className: v.header,
                        separator: !1,
                        children: [(0, a.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            className: v.headerText,
                            id: g,
                            children: P.default.Messages.CREATE_POLL_HEADING
                        }), (0, a.jsx)(u.ModalCloseButton, {
                            onClick: o
                        })]
                    }), (0, a.jsxs)(u.ModalContent, {
                        className: v.content,
                        children: [null != U && (0, a.jsx)(u.FormErrorBlock, {
                            children: U.getAnyErrorMessage()
                        }), (0, a.jsx)(u.TextInput, {
                            placeholder: P.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: d,
                            inputClassName: v.formInput,
                            onChange: T,
                            autoFocus: !0
                        }), (0, a.jsx)(h.default, {
                            selectedLayoutType: C,
                            onSelectedLayoutType: I
                        }), (0, a.jsx)("ul", {
                            className: i(v.answerInputsContainer, C === c.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? v.imageOnlyContainer : v.defaultContainer),
                            "aria-label": P.default.Messages.POLL_OPTIONS_ARIA,
                            children: B
                        })]
                    }), (0, a.jsxs)(u.ModalFooter, {
                        className: v.footer,
                        children: [(0, a.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 18,
                            value: R,
                            onChange: (e, t) => y(t),
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: P.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, a.jsxs)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: v.postButton,
                            innerClassName: v.postButtonInner,
                            onClick: M,
                            submitting: b,
                            disabled: !S,
                            children: [(0, a.jsx)(f.default, {
                                className: v.postIcon
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                children: P.default.Messages.CREATE_POLL_POST
                            })]
                        })]
                    }), (0, a.jsx)(x.default, {
                        channel: t,
                        layout: C,
                        parentModalKey: L.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: j,
                        onGifSelect: O,
                        positionTargetRef: F,
                        lastActiveInputIndex: G
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
                i = l.n(o),
                r = l("77078"),
                s = l("418009"),
                u = l("95689"),
                c = l("100300"),
                d = l("782340"),
                f = l("105335"),
                p = function(e) {
                    let {
                        selectedLayoutType: t,
                        onSelectedLayoutType: l
                    } = e, o = n.useMemo(() => [{
                        name: s.PollLayoutTypes.DEFAULT,
                        label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                        icon: c.default
                    }, {
                        name: s.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
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
                                className: i(f.option, l && f.optionSelected),
                                children: (0, a.jsx)(n, {
                                    className: i(f.icon, l && f.iconSelected)
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
                    return c
                }
            });
            var a = l("37983"),
                n = l("884691"),
                o = l("627445"),
                i = l.n(o),
                r = l("241488"),
                s = l("254398"),
                u = l("264317");

            function c(e) {
                let {
                    channel: t,
                    layout: l,
                    parentModalKey: o,
                    lastActiveInputIndex: c,
                    onEmojiSelect: d,
                    onGifSelect: f,
                    positionTargetRef: p
                } = e, {
                    showPollExpressionPicker: m,
                    closePollExpressionPicker: E,
                    chatInputType: h
                } = (0, u.default)(l), x = n.useCallback(e => {
                    i(null != c, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && f(t.id, c, (0, s.makeTenorProxyURL)(e.gifSrc)), E()
                }, [E, c, f, t.id]), A = n.useCallback(e => {
                    i(null != c, "Expected to have an active input"), i(null != e, "Expected to have an emoji"), d(e, c), E()
                }, [c, d, E]), L = n.useCallback(() => {}, []);
                return m ? (0, a.jsx)(r.default, {
                    positionTargetRef: p,
                    type: h,
                    includeCreateEmojiButton: !1,
                    onSelectGIF: x,
                    onSelectEmoji: A,
                    onSelectSticker: L,
                    channel: t,
                    parentModalKey: o,
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
                i = l("850391"),
                r = l("538282"),
                s = l("13030");

            function u(e) {
                let [t, l] = a.useState(null), [u, c, d] = (0, r.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], n.default), f = i.ChatInputTypes.CREATE_POLL, p = null != u && null != c && c === f, m = e === o.PollLayoutTypes.DEFAULT ? s.ExpressionPickerViewType.EMOJI : s.ExpressionPickerViewType.GIF, E = a.useCallback(e => {
                    l(e), (0, r.toggleExpressionPicker)(m, f)
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
                i = l("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        ...o
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, i.default)(o),
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