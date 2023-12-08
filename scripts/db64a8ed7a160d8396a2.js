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
                let [E, m] = l.useState(d.current), [A, p] = l.useState(""), [L, _] = l.useState(n.PollLayoutTypes.DEFAULT), [T, P] = l.useState(!1), R = E.filter(e => (0, c.isAnswerFilled)(e, L)), x = E.filter(e => (0, c.isIncompleteAnswer)(e, L)), N = A.length > 0 && R.length >= 1 && 0 === x.length, [g, {
                    error: I,
                    loading: C
                }] = (0, s.default)(u.default.createPoll), h = E.length < 6, O = l.useCallback(() => {
                    h && m(e => [...e, (0, c.generateEmptyPollAnswer)()])
                }, [h]), v = l.useCallback((e, t) => {
                    m(a => {
                        let l = [...a];
                        return l[t] = {
                            ...l[t],
                            text: e
                        }, l
                    })
                }, []), M = l.useCallback((e, t, a) => {
                    m(l => {
                        var n;
                        let s = [...l];
                        return s[t] = {
                            ...s[t],
                            image: e,
                            uploadId: null != a ? a : null === (n = s[t]) || void 0 === n ? void 0 : n.uploadId
                        }, s
                    })
                }, []), S = l.useCallback((e, t, a) => {
                    var l, n;
                    let s = E[t],
                        r = null === (n = E[t]) || void 0 === n ? void 0 : null === (l = n.image) || void 0 === l ? void 0 : l.gifAttachmentState;
                    null != s && null != r && r.gifUrl !== a && i.removePollUploadAttachment(e, s.uploadId, (0, o.getFileNameFromGifUrl)(s.uploadId, r.gifUrl))
                }, [E]), k = l.useCallback(async (e, t, a) => {
                    var l, n;
                    let s = null !== (n = null === (l = E[t]) || void 0 === l ? void 0 : l.uploadId) && void 0 !== n ? n : (0, c.generateUploadId)();
                    S(e, t), M(f(a, r.PollGifUploadAttachmentStatus.PREPARING), t, s);
                    let o = await i.handlePollGifAttachmentAdd(e, s, a);
                    if (null == o) {
                        M(f(a, r.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    M(f(a, r.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [E, M, S]), y = l.useCallback((e, t) => {
                    S(a, t), M({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [a, M, S]), b = l.useCallback(e => {
                    m(t => {
                        let a = [...t];
                        return a.splice(e, 1), a
                    })
                }, []);
                l.useEffect(() => () => {
                    i.removeAllPollUploadAttachments(a)
                }, [a]);
                let j = l.useCallback(async () => {
                    await g({
                        channel: e,
                        question: A,
                        answers: R,
                        allowMultiSelect: T,
                        layout: L,
                        onClose: t
                    })
                }, [A, R, T, g, e, L, t]);
                return {
                    answers: E,
                    question: A,
                    setQuestion: p,
                    selectedLayoutType: L,
                    setSelectedLayoutType: _,
                    allowMultiSelect: T,
                    setAllowMultiSelect: P,
                    canPost: N,
                    canAddMoreAnswers: h,
                    handleAddAnswer: O,
                    handleAnswerTextChange: v,
                    handleGifSelect: k,
                    handleEmojiSelect: y,
                    handleRemoveAnswer: b,
                    createPoll: j,
                    submitting: C,
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
        418298: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
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
                d = a("9560"),
                f = a("858619"),
                E = a("474643"),
                m = a("585722"),
                A = a("46829"),
                p = a("228220"),
                L = a("172402"),
                _ = a("562228"),
                T = a("264317"),
                P = a("782340"),
                R = a("177037"),
                x = a("877055");

            function N(e) {
                var t, a;
                let {
                    channelId: s,
                    uploadId: o,
                    buttonImage: d,
                    layout: p,
                    handleTogglePollExpressionPicker: x,
                    answerIndex: N
                } = e, {
                    pollExpressionPickerId: g
                } = (0, T.default)(p), I = (null == d ? void 0 : null === (t = d.gifAttachmentState) || void 0 === t ? void 0 : t.status) === L.PollGifUploadAttachmentStatus.PREPARING, C = null == d ? void 0 : d.emoji, h = (0, i.useStateFromStores)([m.default], () => m.default.getUpload(s, o, E.DraftType.Poll)), [O, v] = n.useState(), [M, S] = n.useState("");
                n.useEffect(() => {
                    var e;
                    if ((null == h ? void 0 : null === (e = h.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(h.item.file);
                    return v(t), S(h.item.file.name), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == h ? void 0 : null === (a = h.item) || void 0 === a ? void 0 : a.file]);
                let k = n.useMemo(() => {
                        let e = p === u.PollLayoutTypes.DEFAULT;
                        return null != h ? (0, l.jsx)("img", {
                            src: O,
                            className: e ? R.gifDefault : R.gifJumbo,
                            alt: ""
                        }) : null != C ? (0, l.jsx)(c.default, {
                            emojiId: C.id,
                            emojiName: C.type === f.EmojiTypes.UNICODE ? C.surrogates : C.name,
                            animated: C.animated,
                            className: e ? R.emojiDefault : void 0,
                            size: e ? "default" : "jumbo"
                        }) : (0, l.jsx)(A.default, {
                            className: e ? R.expressionPickerIconDefault : R.expressionPickerIconImageOnly
                        })
                    }, [C, p, h, O]),
                    y = n.useMemo(() => null != C ? P.default.Messages.CREATE_POLL_EDIT_IMAGE.format({
                        imageName: C.name,
                        answerNumber: N + 1
                    }) : null != h ? P.default.Messages.CREATE_POLL_EDIT_IMAGE.format({
                        imageName: (0, _.filterOutUUID)(M),
                        answerNumber: N + 1
                    }) : P.default.Messages.CREATE_POLL_ADD_IMAGE.format({
                        answerNumber: N + 1
                    }), [C, M, h, N]);
                return I ? (0, l.jsx)(r.Spinner, {
                    className: p === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? R.spinnerWrapper : void 0
                }) : (0, l.jsx)(r.Clickable, {
                    onClick: x,
                    "aria-controls": g,
                    "aria-label": y,
                    className: p === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? R.expressionPickerButtonImageOnly : R.expressionPickerButtonDefault,
                    "data-menu-item": "true",
                    children: k
                })
            }
            var g = n.forwardRef(function(e, t) {
                let {
                    channelId: a,
                    answer: n,
                    index: s,
                    layout: i,
                    onAnswerTextChange: c,
                    handleTogglePollExpressionPicker: f,
                    onRemoveAnswer: E
                } = e, m = (0, l.jsx)(N, {
                    channelId: a,
                    buttonImage: n.image,
                    layout: i,
                    handleTogglePollExpressionPicker: f,
                    uploadId: n.uploadId,
                    answerIndex: s
                });
                return (0, l.jsx)(l.Fragment, {
                    children: i === u.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
                        className: R.answerRow,
                        children: [(0, l.jsxs)("div", {
                            className: o(x.formInput, R.defaultContainer),
                            ref: t,
                            children: [m, (0, l.jsx)(r.TextInput, {
                                "aria-label": P.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
                                    answerNumber: s + 1
                                }),
                                placeholder: P.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                                value: n.text,
                                className: R.defaultTextInput,
                                inputClassName: o(x.formInput, R.defaultTextInput),
                                onChange: e => c(e, s)
                            })]
                        }), (0, l.jsx)(r.Clickable, {
                            onClick: () => E(s),
                            className: R.removeAnswerButtonDefault,
                            "aria-label": P.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                answerNumber: s + 1
                            }),
                            children: (0, l.jsx)(p.default, {
                                className: R.trashIcon,
                                "aria-hidden": !0
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: R.imageOnlyContainer,
                        ref: t,
                        children: [(0, l.jsx)("div", {
                            className: R.imagePreviewContainer,
                            children: m
                        }), (0, l.jsx)("div", {
                            className: R.imageOnlyAnswerActionBar,
                            children: (0, l.jsx)(d.default, {
                                tooltip: P.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                                "aria-label": P.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                    answerNumber: s + 1
                                }),
                                onClick: () => E(s),
                                dangerous: !0,
                                children: (0, l.jsx)(p.default, {
                                    "aria-hidden": !0
                                })
                            })
                        })]
                    })
                })
            })
        },
        487757: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
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
                R = a("782340"),
                x = a("877055");
            let N = (0, d.uid)();

            function g(e) {
                let {
                    channel: t,
                    transitionState: a,
                    onClose: s
                } = e, {
                    answers: r,
                    question: d,
                    setQuestion: I,
                    selectedLayoutType: C,
                    setSelectedLayoutType: h,
                    allowMultiSelect: O,
                    setAllowMultiSelect: v,
                    canPost: M,
                    canAddMoreAnswers: S,
                    handleAddAnswer: k,
                    handleAnswerTextChange: y,
                    handleEmojiSelect: b,
                    handleGifSelect: j,
                    handleRemoveAnswer: D,
                    createPoll: U,
                    createPollError: w,
                    submitting: G
                } = (0, m.default)(t, s), B = n.useRef([]), {
                    togglePollExpressionPicker: F,
                    lastActiveParentIndex: W
                } = (0, T.default)(C), Y = n.useCallback(() => {
                    i(null != W, "Must have an active input");
                    let e = B.current[W];
                    return i(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [W]), V = C === c.PollLayoutTypes.DEFAULT, z = n.useCallback(() => {
                    let e = d.length > 0 || r.some(e => (0, E.isAnswerFilled)(e, C));
                    e ? (0, _.default)({
                        title: R.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                        body: R.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                        cta: R.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                        closeLabel: R.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                        onConfirm: () => {
                            s()
                        }
                    }) : s()
                }, [s, r, d, C]);
                return n.useEffect(() => {
                    (0, u.updateModal)(P.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(g, {
                        ...e,
                        channel: t
                    }), z)
                }, [z, t]), (0, l.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    className: x.container,
                    transitionState: a,
                    "aria-labelledby": N,
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: x.header,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-lg/semibold",
                            className: x.headerText,
                            id: N,
                            children: R.default.Messages.CREATE_POLL_HEADING
                        }), (0, l.jsx)(u.ModalCloseButton, {
                            onClick: s
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        className: x.content,
                        children: [null != w && (0, l.jsx)(u.FormErrorBlock, {
                            children: w.getAnyErrorMessage()
                        }), (0, l.jsx)(u.TextInput, {
                            "aria-label": R.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
                            placeholder: R.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: d,
                            inputClassName: x.questionInput,
                            onChange: I,
                            autoFocus: !0
                        }), (0, l.jsx)(p.default, {
                            selectedLayoutType: C,
                            onSelectedLayoutType: h
                        }), (0, l.jsxs)("div", {
                            className: o(x.answerInputsContainer, V ? x.defaultContainer : x.imageOnlyContainer),
                            role: "group",
                            "aria-label": R.default.Messages.POLL_OPTIONS_ARIA,
                            children: [r.map((e, a) => (0, l.jsx)(A.default, {
                                answer: e,
                                channelId: t.id,
                                index: a,
                                ref: e => B.current[a] = e,
                                handleTogglePollExpressionPicker: () => F(a),
                                layout: C,
                                onAnswerTextChange: y,
                                onRemoveAnswer: D
                            }, e.uploadId)), S && (0, l.jsxs)(u.Clickable, {
                                className: V ? x.addAnswerButtonDefault : x.addAnswerButtonImageOnly,
                                onClick: S ? k : void 0,
                                "aria-label": R.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                                children: [(0, l.jsx)(f.default, {
                                    className: V ? x.addAnswerIconDefault : x.addAnswerIconImageOnly
                                }), V && (0, l.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: R.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        className: x.footer,
                        children: [(0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 24,
                            value: O,
                            onChange: (e, t) => v(t),
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: R.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, l.jsx)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: x.postButton,
                            onClick: U,
                            submitting: G,
                            disabled: !M,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: x.postButtonText,
                                children: R.default.Messages.CREATE_POLL_POST
                            })
                        })]
                    }), (0, l.jsx)(L.default, {
                        channel: t,
                        layout: C,
                        parentModalKey: P.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: b,
                        onGifSelect: j,
                        positionTargetRef: Y,
                        lastActiveInputIndex: W
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