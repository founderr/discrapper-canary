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
                s = l("172402"),
                r = l("914271"),
                u = l("847511"),
                c = l("562228");

            function d(e, t) {
                let l = e.id,
                    d = a.useRef();
                null == d.current && (d.current = [(0, c.generateEmptyPollAnswer)(), (0, c.generateEmptyPollAnswer)()]);
                let [p, m] = a.useState(d.current), [E, A] = a.useState(""), [P, x] = a.useState(n.PollLayoutTypes.DEFAULT), [h, L] = a.useState(!1), T = p.filter(e => (0, c.isAnswerFilled)(e, P)), g = p.filter(e => (0, c.isIncompleteAnswer)(e, P)), I = E.length > 0 && T.length >= 1 && 0 === g.length, [v, {
                    error: R,
                    loading: _
                }] = (0, o.default)(u.default.createPoll), C = a.useMemo(() => [...p].every(e => null != e.image || null != e.text && e.text.length > 0), [p]), y = p.length < 6, O = a.useCallback((e, t) => {
                    m(l => {
                        let a = [...l];
                        return a[t] = {
                            ...a[t],
                            text: e
                        }, a
                    })
                }, []), S = a.useCallback((e, t, l) => {
                    m(a => {
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
                    let o = p[t],
                        s = null === (n = p[t]) || void 0 === n ? void 0 : null === (a = n.image) || void 0 === a ? void 0 : a.gifAttachmentState;
                    null != o && null != s && s.gifUrl !== l && r.removePollUploadAttachment(e, o.uploadId, (0, i.getFileNameFromGifUrl)(o.uploadId, s.gifUrl))
                }, [p]), N = a.useCallback(async (e, t, l) => {
                    var a, n;
                    let o = null !== (n = null === (a = p[t]) || void 0 === a ? void 0 : a.uploadId) && void 0 !== n ? n : (0, c.generateUploadId)();
                    k(e, t), S(f(l, s.PollGifUploadAttachmentStatus.PREPARING), t, o);
                    let i = await r.handlePollGifAttachmentAdd(e, o, l);
                    if (null == i) {
                        S(f(l, s.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    S(f(l, s.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [p, S, k]), j = a.useCallback((e, t) => {
                    k(l, t), S({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [l, S, k]), U = a.useCallback(e => {
                    m(t => {
                        let l = [...t];
                        return l.splice(e, 1), l
                    })
                }, []);
                a.useEffect(() => () => {
                    r.removeAllPollUploadAttachments(l)
                }, [l]);
                let b = a.useCallback(async () => {
                    await v({
                        channel: e,
                        question: E,
                        answers: T,
                        allowMultiSelect: h,
                        layout: P,
                        onClose: t
                    })
                }, [E, T, h, v, e, P, t]);
                return {
                    answers: p,
                    question: E,
                    setQuestion: A,
                    selectedLayoutType: P,
                    setSelectedLayoutType: x,
                    allowMultiSelect: h,
                    setAllowMultiSelect: L,
                    canPost: I,
                    areAllAnswersFilled: C,
                    canAddMoreAnswers: y,
                    handleAnswerTextChange: O,
                    handleGifSelect: N,
                    handleEmojiSelect: j,
                    handleRemoveAnswer: U,
                    createPoll: b,
                    submitting: _,
                    createPollError: R
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
                    return g
                }
            }), l("222007"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660");
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                i = l.n(o),
                s = l("77078"),
                r = l("446674"),
                u = l("418009"),
                c = l("430568"),
                d = l("858619"),
                f = l("474643"),
                p = l("585722"),
                m = l("46829"),
                E = l("172402"),
                A = l("264317"),
                P = l("782340"),
                x = l("177037"),
                h = l("877055");

            function L(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: o,
                    layout: i,
                    image: s
                } = e, E = null == s ? void 0 : s.emoji, A = (0, r.useStateFromStores)([p.default], () => p.default.getUpload(l, o, f.DraftType.Poll)), [P, h] = n.useState();
                n.useEffect(() => {
                    var e;
                    if ((null == A ? void 0 : null === (e = A.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(A.item.file);
                    return h(t), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == A ? void 0 : null === (t = A.item) || void 0 === t ? void 0 : t.file]);
                let L = n.useMemo(() => {
                    let e = i === u.PollLayoutTypes.DEFAULT;
                    return null != A ? (0, a.jsx)("img", {
                        src: P,
                        className: e ? x.gifDefault : x.gifJumbo,
                        alt: ""
                    }) : null != E ? (0, a.jsx)(c.default, {
                        emojiId: E.id,
                        emojiName: E.type === d.EmojiTypes.UNICODE ? E.surrogates : E.name,
                        animated: E.animated,
                        className: e ? x.emojiDefault : void 0,
                        size: e ? "default" : "jumbo"
                    }) : (0, a.jsx)(m.default, {
                        className: e ? x.expressionPickerIconDefault : x.expressionPickerIconImageOnly
                    })
                }, [E, i, A, P]);
                return L
            }

            function T(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: n,
                    buttonImage: o,
                    layout: i,
                    handleTogglePollExpressionPicker: r
                } = e, {
                    pollExpressionPickerId: c
                } = (0, A.default)(i), d = (null == o ? void 0 : null === (t = o.gifAttachmentState) || void 0 === t ? void 0 : t.status) === E.PollGifUploadAttachmentStatus.PREPARING;
                return d ? (0, a.jsx)(s.Spinner, {
                    className: i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? x.spinnerWrapper : void 0
                }) : (0, a.jsx)(s.Clickable, {
                    onClick: r,
                    "aria-controls": c,
                    "aria-label": P.default.Messages.POLL_EXPRESSION_PICKER_BUTTON_ARIA,
                    className: i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? x.expressionPickerButtonImageOnly : x.expressionPickerButtonDefault,
                    "data-menu-item": "true",
                    children: (0, a.jsx)(L, {
                        channelId: l,
                        layout: i,
                        image: o,
                        uploadId: n
                    })
                })
            }
            var g = n.forwardRef(function(e, t) {
                let {
                    channelId: l,
                    answer: n,
                    index: o,
                    layout: r,
                    onAnswerTextChange: c,
                    handleTogglePollExpressionPicker: d
                } = e, f = (0, a.jsx)(T, {
                    channelId: l,
                    buttonImage: n.image,
                    layout: r,
                    handleTogglePollExpressionPicker: d,
                    uploadId: n.uploadId
                });
                return (0, a.jsx)(a.Fragment, {
                    children: r === u.PollLayoutTypes.DEFAULT ? (0, a.jsxs)("li", {
                        className: i(h.formInput, x.defaultContainer),
                        ref: t,
                        children: [f, (0, a.jsx)(s.TextInput, {
                            placeholder: P.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                            value: n.text,
                            className: x.defaultTextInput,
                            inputClassName: i(h.formInput, x.defaultTextInput),
                            onChange: e => c(e, o)
                        })]
                    }) : (0, a.jsx)("li", {
                        className: x.imageOnlyContainer,
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
                i = l.n(o),
                s = l("627445"),
                r = l.n(s),
                u = l("77078"),
                c = l("418009"),
                d = l("476765"),
                f = l("562228"),
                p = l("104182"),
                m = l("418298"),
                E = l("612805"),
                A = l("53013"),
                P = l("264317"),
                x = l("186859"),
                h = l("782340"),
                L = l("877055");
            let T = (0, d.uid)();

            function g(e) {
                let {
                    channel: t,
                    transitionState: l,
                    onClose: o
                } = e, {
                    answers: s,
                    question: d,
                    setQuestion: g,
                    selectedLayoutType: I,
                    setSelectedLayoutType: v,
                    allowMultiSelect: R,
                    setAllowMultiSelect: _,
                    canPost: C,
                    areAllAnswersFilled: y,
                    canAddMoreAnswers: O,
                    handleAnswerTextChange: S,
                    handleEmojiSelect: k,
                    handleGifSelect: N,
                    createPoll: j,
                    createPollError: U,
                    submitting: b
                } = (0, p.default)(t, o), M = n.useRef([]), {
                    togglePollExpressionPicker: w,
                    lastActiveParentIndex: D
                } = (0, P.default)(I), G = n.useCallback(() => {
                    r(null != D, "Must have an active input");
                    let e = M.current[D];
                    return r(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [D]), F = n.useMemo(() => {
                    let e = {
                            layout: I,
                            onAnswerTextChange: S
                        },
                        l = s.map((l, n) => (0, a.jsx)(m.default, {
                            answer: l,
                            channelId: t.id,
                            index: n,
                            ref: e => M.current[n] = e,
                            handleTogglePollExpressionPicker: () => w(n),
                            ...e
                        }, n));
                    if (y && O) {
                        let n = s.length;
                        l.push((0, a.jsx)(m.default, {
                            answer: (0, f.generateEmptyPollAnswer)(),
                            channelId: t.id,
                            index: n,
                            ref: e => M.current[n] = e,
                            handleTogglePollExpressionPicker: () => w(n),
                            ...e
                        }, n))
                    }
                    return l
                }, [s, S, I, y, O, w, M, t.id]);
                return (0, a.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    className: L.container,
                    transitionState: l,
                    "aria-labelledby": T,
                    children: [(0, a.jsxs)(u.ModalHeader, {
                        className: L.header,
                        separator: !1,
                        children: [(0, a.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-md/medium",
                            className: L.headerText,
                            id: T,
                            children: h.default.Messages.CREATE_POLL_HEADING
                        }), (0, a.jsx)(u.ModalCloseButton, {
                            onClick: o
                        })]
                    }), (0, a.jsxs)(u.ModalContent, {
                        className: L.content,
                        children: [null != U && (0, a.jsx)(u.FormErrorBlock, {
                            children: U.getAnyErrorMessage()
                        }), (0, a.jsx)(u.TextInput, {
                            "aria-label": h.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
                            placeholder: h.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: d,
                            inputClassName: L.questionInput,
                            onChange: g,
                            autoFocus: !0
                        }), (0, a.jsx)(E.default, {
                            selectedLayoutType: I,
                            onSelectedLayoutType: v
                        }), (0, a.jsx)("ul", {
                            className: i(L.answerInputsContainer, I === c.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? L.imageOnlyContainer : L.defaultContainer),
                            "aria-label": h.default.Messages.POLL_OPTIONS_ARIA,
                            children: F
                        })]
                    }), (0, a.jsxs)(u.ModalFooter, {
                        className: L.footer,
                        children: [(0, a.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 18,
                            value: R,
                            onChange: (e, t) => _(t),
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: h.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, a.jsx)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: L.postButton,
                            onClick: j,
                            submitting: b,
                            disabled: !C,
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: L.postButtonText,
                                children: h.default.Messages.CREATE_POLL_POST
                            })
                        })]
                    }), (0, a.jsx)(A.default, {
                        channel: t,
                        layout: I,
                        parentModalKey: x.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: k,
                        onGifSelect: N,
                        positionTargetRef: G,
                        lastActiveInputIndex: D
                    })]
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
                i = l.n(o),
                s = l("77078"),
                r = l("418009"),
                u = l("95689"),
                c = l("100300"),
                d = l("782340"),
                f = l("105335");

            function p(e) {
                let {
                    label: t,
                    isSelected: l,
                    onClick: n,
                    children: o
                } = e, r = (0, s.useRadioItem)({
                    isSelected: l,
                    label: t
                });
                return (0, a.jsx)(s.Clickable, {
                    ...r,
                    onClick: n,
                    className: i(f.option, l && f.optionSelected),
                    children: o
                })
            }
            var m = function(e) {
                let {
                    selectedLayoutType: t,
                    onSelectedLayoutType: l
                } = e, o = (0, s.useRadioGroup)({
                    orientation: "horizontal"
                }), i = n.useMemo(() => [{
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
                    "aria-label": d.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
                    ...o,
                    children: i.map(e => {
                        let l = e.icon;
                        return (0, a.jsx)(p, {
                            label: e.label,
                            isSelected: e.name === t,
                            onClick: () => m(e.name),
                            children: (0, a.jsx)(l, {
                                className: f.icon
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
                s = l("241488"),
                r = l("254398"),
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
                    chatInputType: A
                } = (0, u.default)(l), P = n.useCallback(e => {
                    i(null != c, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && f(t.id, c, (0, r.makeTenorProxyURL)(e.gifSrc)), E()
                }, [E, c, f, t.id]), x = n.useCallback(e => {
                    i(null != c, "Expected to have an active input"), i(null != e, "Expected to have an emoji"), d(e, c), E()
                }, [c, d, E]), h = n.useCallback(() => {}, []);
                return m ? (0, a.jsx)(s.default, {
                    positionTargetRef: p,
                    type: A,
                    hideGifFavorites: !0,
                    includeCreateEmojiButton: !1,
                    onSelectGIF: P,
                    onSelectEmoji: x,
                    onSelectSticker: h,
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
                s = l("538282"),
                r = l("13030");

            function u(e) {
                let [t, l] = a.useState(null), [u, c, d] = (0, s.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], n.default), f = i.ChatInputTypes.CREATE_POLL, p = null != u && null != c && c === f, m = e === o.PollLayoutTypes.DEFAULT ? r.ExpressionPickerViewType.EMOJI : r.ExpressionPickerViewType.GIF, E = a.useCallback(e => {
                    l(e), (0, s.toggleExpressionPicker)(m, f)
                }, [m, f]), A = a.useCallback(() => {
                    (0, s.closeExpressionPicker)(f)
                }, [f]);
                return a.useEffect(() => () => {
                    (0, s.closeExpressionPicker)(f)
                }, [f]), {
                    showPollExpressionPicker: p,
                    togglePollExpressionPicker: E,
                    closePollExpressionPicker: A,
                    pollExpressionPickerId: d,
                    chatInputType: f,
                    lastActiveParentIndex: t
                }
            }
        }
    }
]);