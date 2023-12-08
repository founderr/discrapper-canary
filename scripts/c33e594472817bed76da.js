(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3328"], {
        254398: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                makeTenorProxyURL: function() {
                    return s
                }
            }), a("511434"), a("313619"), a("654714"), a("287168"), a("956660"), a("222007"), a("70102");
            var l = a("49111");
            let n = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function s(e) {
                let t = new URL("".concat(window.location.protocol).concat(e)),
                    {
                        ASSET_ENDPOINT: a
                    } = window.GLOBAL_ENV;
                if (null == t.pathname.match(n)) throw Error("Unexpected Tenor GIF path.");
                let s = "".concat(l.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(a).concat(s)
            }
        },
        172402: function(e, t, a) {
            "use strict";
            var l, n;
            a.r(t), a.d(t, {
                PollGifUploadAttachmentStatus: function() {
                    return l
                }
            }), (n = l || (l = {})).PREPARING = "PREPARING", n.READY_TO_UPLOAD = "READY_TO_UPLOAD", n.ERROR = "ERROR"
        },
        104182: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            }), a("222007");
            var l = a("884691"),
                n = a("418009"),
                s = a("162426"),
                o = a("314743"),
                r = a("172402"),
                i = a("914271"),
                u = a("847511"),
                c = a("562228");

            function d(e, t) {
                let a = e.id,
                    d = l.useRef();
                null == d.current && (d.current = [(0, c.generateEmptyPollAnswer)(), (0, c.generateEmptyPollAnswer)()]);
                let [E, m] = l.useState(d.current), [A, p] = l.useState(""), [L, _] = l.useState(n.PollLayoutTypes.DEFAULT), [T, P] = l.useState(!1), I = E.filter(e => (0, c.isAnswerFilled)(e, L)), x = E.filter(e => (0, c.isIncompleteAnswer)(e, L)), g = A.length > 0 && I.length >= 1 && 0 === x.length, [R, {
                    error: C,
                    loading: N
                }] = (0, s.default)(u.default.createPoll), O = E.length < 6, h = l.useCallback(() => {
                    O && m(e => [...e, (0, c.generateEmptyPollAnswer)()])
                }, [O]), v = l.useCallback((e, t) => {
                    m(a => {
                        let l = [...a];
                        return l[t] = {
                            ...l[t],
                            text: e
                        }, l
                    })
                }, []), S = l.useCallback((e, t, a) => {
                    m(l => {
                        var n;
                        let s = [...l];
                        return s[t] = {
                            ...s[t],
                            image: e,
                            uploadId: null != a ? a : null === (n = s[t]) || void 0 === n ? void 0 : n.uploadId
                        }, s
                    })
                }, []), y = l.useCallback((e, t, a) => {
                    var l, n;
                    let s = E[t],
                        r = null === (n = E[t]) || void 0 === n ? void 0 : null === (l = n.image) || void 0 === l ? void 0 : l.gifAttachmentState;
                    null != s && null != r && r.gifUrl !== a && i.removePollUploadAttachment(e, s.uploadId, (0, o.getFileNameFromGifUrl)(s.uploadId, r.gifUrl))
                }, [E]), M = l.useCallback(async (e, t, a) => {
                    var l, n;
                    let s = null !== (n = null === (l = E[t]) || void 0 === l ? void 0 : l.uploadId) && void 0 !== n ? n : (0, c.generateUploadId)();
                    y(e, t), S(f(a, r.PollGifUploadAttachmentStatus.PREPARING), t, s);
                    let o = await i.handlePollGifAttachmentAdd(e, s, a);
                    if (null == o) {
                        S(f(a, r.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    S(f(a, r.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [E, S, y]), k = l.useCallback((e, t) => {
                    y(a, t), S({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [a, S, y]), b = l.useCallback(e => {
                    m(t => {
                        let a = [...t];
                        return a.splice(e, 1), a
                    })
                }, []);
                l.useEffect(() => () => {
                    i.removeAllPollUploadAttachments(a)
                }, [a]);
                let D = l.useCallback(async () => {
                    await R({
                        channel: e,
                        question: A,
                        answers: I,
                        allowMultiSelect: T,
                        layout: L,
                        onClose: t
                    })
                }, [A, I, T, R, e, L, t]);
                return {
                    answers: E,
                    question: A,
                    setQuestion: p,
                    selectedLayoutType: L,
                    setSelectedLayoutType: _,
                    allowMultiSelect: T,
                    setAllowMultiSelect: P,
                    canPost: g,
                    canAddMoreAnswers: O,
                    handleAddAnswer: h,
                    handleAnswerTextChange: v,
                    handleGifSelect: M,
                    handleEmojiSelect: k,
                    handleRemoveAnswer: b,
                    createPoll: D,
                    submitting: N,
                    createPollError: C
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
        418298: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            }), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                o = a.n(s),
                r = a("77078"),
                i = a("446674"),
                u = a("418009"),
                c = a("430568"),
                d = a("858619"),
                f = a("474643"),
                E = a("585722"),
                m = a("46829"),
                A = a("172402"),
                p = a("562228"),
                L = a("264317"),
                _ = a("782340"),
                T = a("177037"),
                P = a("877055");

            function I(e) {
                var t, a;
                let {
                    channelId: s,
                    uploadId: o,
                    buttonImage: P,
                    layout: I,
                    handleTogglePollExpressionPicker: x,
                    answerIndex: g
                } = e, {
                    pollExpressionPickerId: R
                } = (0, L.default)(I), C = (null == P ? void 0 : null === (t = P.gifAttachmentState) || void 0 === t ? void 0 : t.status) === A.PollGifUploadAttachmentStatus.PREPARING, N = null == P ? void 0 : P.emoji, O = (0, i.useStateFromStores)([E.default], () => E.default.getUpload(s, o, f.DraftType.Poll)), [h, v] = n.useState(), [S, y] = n.useState("");
                n.useEffect(() => {
                    var e;
                    if ((null == O ? void 0 : null === (e = O.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(O.item.file);
                    return v(t), y(O.item.file.name), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == O ? void 0 : null === (a = O.item) || void 0 === a ? void 0 : a.file]);
                let M = n.useMemo(() => {
                        let e = I === u.PollLayoutTypes.DEFAULT;
                        return null != O ? (0, l.jsx)("img", {
                            src: h,
                            className: e ? T.gifDefault : T.gifJumbo,
                            alt: ""
                        }) : null != N ? (0, l.jsx)(c.default, {
                            emojiId: N.id,
                            emojiName: N.type === d.EmojiTypes.UNICODE ? N.surrogates : N.name,
                            animated: N.animated,
                            className: e ? T.emojiDefault : void 0,
                            size: e ? "default" : "jumbo"
                        }) : (0, l.jsx)(m.default, {
                            className: e ? T.expressionPickerIconDefault : T.expressionPickerIconImageOnly
                        })
                    }, [N, I, O, h]),
                    k = n.useMemo(() => null != N ? _.default.Messages.CREATE_POLL_EDIT_IMAGE.format({
                        imageName: N.name,
                        answerNumber: g + 1
                    }) : null != O ? _.default.Messages.CREATE_POLL_EDIT_IMAGE.format({
                        imageName: (0, p.filterOutUUID)(S),
                        answerNumber: g + 1
                    }) : _.default.Messages.CREATE_POLL_ADD_IMAGE.format({
                        answerNumber: g + 1
                    }), [N, S, O, g]);
                return C ? (0, l.jsx)(r.Spinner, {
                    className: I === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? T.spinnerWrapper : void 0
                }) : (0, l.jsx)(r.Clickable, {
                    onClick: x,
                    "aria-controls": R,
                    "aria-label": k,
                    className: I === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? T.expressionPickerButtonImageOnly : T.expressionPickerButtonDefault,
                    "data-menu-item": "true",
                    children: M
                })
            }
            var x = n.forwardRef(function(e, t) {
                let {
                    channelId: a,
                    answer: n,
                    index: s,
                    layout: i,
                    onAnswerTextChange: c,
                    handleTogglePollExpressionPicker: d
                } = e, f = (0, l.jsx)(I, {
                    channelId: a,
                    buttonImage: n.image,
                    layout: i,
                    handleTogglePollExpressionPicker: d,
                    uploadId: n.uploadId,
                    answerIndex: s
                });
                return (0, l.jsx)(l.Fragment, {
                    children: i === u.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
                        className: o(P.formInput, T.defaultContainer),
                        ref: t,
                        children: [f, (0, l.jsx)(r.TextInput, {
                            "aria-label": _.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
                                answerNumber: s + 1
                            }),
                            placeholder: _.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                            value: n.text,
                            className: T.defaultTextInput,
                            inputClassName: o(P.formInput, T.defaultTextInput),
                            onChange: e => c(e, s)
                        })]
                    }) : (0, l.jsx)("div", {
                        className: T.imageOnlyContainer,
                        ref: t,
                        children: f
                    })
                })
            })
        },
        487757: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return R
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                o = a.n(s),
                r = a("627445"),
                i = a.n(r),
                u = a("77078"),
                c = a("418009"),
                d = a("476765"),
                f = a("151185"),
                E = a("562228"),
                m = a("104182"),
                A = a("418298"),
                p = a("612805"),
                L = a("53013"),
                _ = a("233365"),
                T = a("264317"),
                P = a("186859"),
                I = a("782340"),
                x = a("877055");
            let g = (0, d.uid)();

            function R(e) {
                let {
                    channel: t,
                    transitionState: a,
                    onClose: s
                } = e, {
                    answers: r,
                    question: d,
                    setQuestion: C,
                    selectedLayoutType: N,
                    setSelectedLayoutType: O,
                    allowMultiSelect: h,
                    setAllowMultiSelect: v,
                    canPost: S,
                    canAddMoreAnswers: y,
                    handleAddAnswer: M,
                    handleAnswerTextChange: k,
                    handleEmojiSelect: b,
                    handleGifSelect: D,
                    createPoll: j,
                    createPollError: U,
                    submitting: w
                } = (0, m.default)(t, s), G = n.useRef([]), {
                    togglePollExpressionPicker: B,
                    lastActiveParentIndex: F
                } = (0, T.default)(N), W = n.useCallback(() => {
                    i(null != F, "Must have an active input");
                    let e = G.current[F];
                    return i(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [F]), Y = N === c.PollLayoutTypes.DEFAULT, z = n.useCallback(() => {
                    let e = d.length > 0 || r.some(e => (0, E.isAnswerFilled)(e, N));
                    e ? (0, _.default)({
                        title: I.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                        body: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                        cta: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                        closeLabel: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                        onConfirm: () => {
                            s()
                        }
                    }) : s()
                }, [s, r, d, N]);
                return n.useEffect(() => {
                    (0, u.updateModal)(P.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(R, {
                        ...e,
                        channel: t
                    }), z)
                }, [z, t]), (0, l.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    className: x.container,
                    transitionState: a,
                    "aria-labelledby": g,
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: x.header,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-lg/semibold",
                            className: x.headerText,
                            id: g,
                            children: I.default.Messages.CREATE_POLL_HEADING
                        }), (0, l.jsx)(u.ModalCloseButton, {
                            onClick: s
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        className: x.content,
                        children: [null != U && (0, l.jsx)(u.FormErrorBlock, {
                            children: U.getAnyErrorMessage()
                        }), (0, l.jsx)(u.TextInput, {
                            "aria-label": I.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
                            placeholder: I.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: d,
                            inputClassName: x.questionInput,
                            onChange: C,
                            autoFocus: !0
                        }), (0, l.jsx)(p.default, {
                            selectedLayoutType: N,
                            onSelectedLayoutType: O
                        }), (0, l.jsxs)("div", {
                            className: o(x.answerInputsContainer, Y ? x.defaultContainer : x.imageOnlyContainer),
                            role: "group",
                            "aria-label": I.default.Messages.POLL_OPTIONS_ARIA,
                            children: [r.map((e, a) => (0, l.jsx)(A.default, {
                                answer: e,
                                channelId: t.id,
                                index: a,
                                ref: e => G.current[a] = e,
                                handleTogglePollExpressionPicker: () => B(a),
                                layout: N,
                                onAnswerTextChange: k
                            }, e.uploadId)), y && (0, l.jsxs)(u.Clickable, {
                                className: Y ? x.addAnswerButtonDefault : x.addAnswerButtonImageOnly,
                                onClick: y ? M : void 0,
                                "aria-label": I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                                children: [(0, l.jsx)(f.default, {
                                    className: Y ? x.addAnswerIconDefault : x.addAnswerIconImageOnly
                                }), Y && (0, l.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        className: x.footer,
                        children: [(0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 24,
                            value: h,
                            onChange: (e, t) => v(t),
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: I.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, l.jsx)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: x.postButton,
                            onClick: j,
                            submitting: w,
                            disabled: !S,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: x.postButtonText,
                                children: I.default.Messages.CREATE_POLL_POST
                            })
                        })]
                    }), (0, l.jsx)(L.default, {
                        channel: t,
                        layout: N,
                        parentModalKey: P.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: b,
                        onGifSelect: D,
                        positionTargetRef: W,
                        lastActiveInputIndex: F
                    })]
                })
            }
        },
        612805: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                o = a.n(s),
                r = a("77078"),
                i = a("418009"),
                u = a("95689"),
                c = a("100300"),
                d = a("782340"),
                f = a("105335");

            function E(e) {
                let {
                    label: t,
                    isSelected: a,
                    onClick: n,
                    children: s
                } = e, i = (0, r.useRadioItem)({
                    isSelected: a,
                    label: t
                });
                return (0, l.jsx)(r.Clickable, {
                    ...i,
                    onClick: n,
                    className: o(f.option, a && f.optionSelected),
                    children: s
                })
            }
            var m = function(e) {
                let {
                    selectedLayoutType: t,
                    onSelectedLayoutType: a
                } = e, s = (0, r.useRadioGroup)({
                    orientation: "horizontal"
                }), o = n.useMemo(() => [{
                    name: i.PollLayoutTypes.DEFAULT,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                    icon: c.default
                }, {
                    name: i.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                    icon: u.default
                }], []), m = e => {
                    a(e)
                };
                return (0, l.jsx)("div", {
                    className: f.container,
                    "aria-label": d.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
                    ...s,
                    children: o.map(e => {
                        let a = e.icon;
                        return (0, l.jsx)(E, {
                            label: e.label,
                            isSelected: e.name === t,
                            onClick: () => m(e.name),
                            children: (0, l.jsx)(a, {
                                className: f.icon
                            })
                        }, e.name)
                    })
                })
            }
        },
        53013: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("627445"),
                o = a.n(s),
                r = a("241488"),
                i = a("254398"),
                u = a("264317");

            function c(e) {
                let {
                    channel: t,
                    layout: a,
                    parentModalKey: s,
                    lastActiveInputIndex: c,
                    onEmojiSelect: d,
                    onGifSelect: f,
                    positionTargetRef: E
                } = e, {
                    showPollExpressionPicker: m,
                    closePollExpressionPicker: A,
                    chatInputType: p
                } = (0, u.default)(a), L = n.useCallback(e => {
                    o(null != c, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && f(t.id, c, (0, i.makeTenorProxyURL)(e.gifSrc)), A()
                }, [A, c, f, t.id]), _ = n.useCallback(e => {
                    o(null != c, "Expected to have an active input"), o(null != e, "Expected to have an emoji"), d(e, c), A()
                }, [c, d, A]), T = n.useCallback(() => {}, []);
                return m ? (0, l.jsx)(r.default, {
                    positionTargetRef: E,
                    type: p,
                    hideGifFavorites: !0,
                    includeCreateEmojiButton: !1,
                    onSelectGIF: L,
                    onSelectEmoji: _,
                    onSelectSticker: T,
                    channel: t,
                    parentModalKey: s,
                    closeOnModalOuterClick: !0
                }) : null
            }
        },
        233365: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("551042");

            function s(e) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await a.el("553621").then(a.bind(a, "553621"));
                    return a => (0, l.jsx)(t, {
                        ...e,
                        ...a
                    })
                })
            }
        },
        264317: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            }), a("222007");
            var l = a("884691"),
                n = a("16470"),
                s = a("418009"),
                o = a("850391"),
                r = a("538282"),
                i = a("13030");

            function u(e) {
                let [t, a] = l.useState(null), [u, c, d] = (0, r.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], n.default), f = o.ChatInputTypes.CREATE_POLL, E = null != u && null != c && c === f, m = e === s.PollLayoutTypes.DEFAULT ? i.ExpressionPickerViewType.EMOJI : i.ExpressionPickerViewType.GIF, A = l.useCallback(e => {
                    a(e), (0, r.toggleExpressionPicker)(m, f)
                }, [m, f]), p = l.useCallback(() => {
                    (0, r.closeExpressionPicker)(f)
                }, [f]);
                return l.useEffect(() => () => {
                    (0, r.closeExpressionPicker)(f)
                }, [f]), {
                    showPollExpressionPicker: E,
                    togglePollExpressionPicker: A,
                    closePollExpressionPicker: p,
                    pollExpressionPickerId: d,
                    chatInputType: f,
                    lastActiveParentIndex: t
                }
            }
        }
    }
]);