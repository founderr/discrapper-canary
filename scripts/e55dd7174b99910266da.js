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
                s = l("314743"),
                i = l("172402"),
                r = l("914271"),
                u = l("847511"),
                c = l("562228");

            function d(e, t) {
                let l = e.id,
                    d = a.useRef();
                null == d.current && (d.current = [(0, c.generateEmptyPollAnswer)(), (0, c.generateEmptyPollAnswer)()]);
                let [E, p] = a.useState(d.current), [m, A] = a.useState(""), [L, _] = a.useState(n.PollLayoutTypes.DEFAULT), [T, P] = a.useState(!1), x = E.filter(e => (0, c.isAnswerFilled)(e, L)), I = E.filter(e => (0, c.isIncompleteAnswer)(e, L)), h = m.length > 0 && x.length >= 1 && 0 === I.length, [R, {
                    error: C,
                    loading: O
                }] = (0, o.default)(u.default.createPoll), g = E.length < 6, v = a.useCallback(() => {
                    g && p(e => [...e, (0, c.generateEmptyPollAnswer)()])
                }, [g]), N = a.useCallback((e, t) => {
                    p(l => {
                        let a = [...l];
                        return a[t] = {
                            ...a[t],
                            text: e
                        }, a
                    })
                }, []), S = a.useCallback((e, t, l) => {
                    p(a => {
                        var n;
                        let o = [...a];
                        return o[t] = {
                            ...o[t],
                            image: e,
                            uploadId: null != l ? l : null === (n = o[t]) || void 0 === n ? void 0 : n.uploadId
                        }, o
                    })
                }, []), y = a.useCallback((e, t, l) => {
                    var a, n;
                    let o = E[t],
                        i = null === (n = E[t]) || void 0 === n ? void 0 : null === (a = n.image) || void 0 === a ? void 0 : a.gifAttachmentState;
                    null != o && null != i && i.gifUrl !== l && r.removePollUploadAttachment(e, o.uploadId, (0, s.getFileNameFromGifUrl)(o.uploadId, i.gifUrl))
                }, [E]), k = a.useCallback(async (e, t, l) => {
                    var a, n;
                    let o = null !== (n = null === (a = E[t]) || void 0 === a ? void 0 : a.uploadId) && void 0 !== n ? n : (0, c.generateUploadId)();
                    y(e, t), S(f(l, i.PollGifUploadAttachmentStatus.PREPARING), t, o);
                    let s = await r.handlePollGifAttachmentAdd(e, o, l);
                    if (null == s) {
                        S(f(l, i.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    S(f(l, i.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [E, S, y]), j = a.useCallback((e, t) => {
                    y(l, t), S({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [l, S, y]), M = a.useCallback(e => {
                    p(t => {
                        let l = [...t];
                        return l.splice(e, 1), l
                    })
                }, []);
                a.useEffect(() => () => {
                    r.removeAllPollUploadAttachments(l)
                }, [l]);
                let U = a.useCallback(async () => {
                    await R({
                        channel: e,
                        question: m,
                        answers: x,
                        allowMultiSelect: T,
                        layout: L,
                        onClose: t
                    })
                }, [m, x, T, R, e, L, t]);
                return {
                    answers: E,
                    question: m,
                    setQuestion: A,
                    selectedLayoutType: L,
                    setSelectedLayoutType: _,
                    allowMultiSelect: T,
                    setAllowMultiSelect: P,
                    canPost: h,
                    canAddMoreAnswers: g,
                    handleAddAnswer: v,
                    handleAnswerTextChange: N,
                    handleGifSelect: k,
                    handleEmojiSelect: j,
                    handleRemoveAnswer: M,
                    createPoll: U,
                    submitting: O,
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
                i = l("77078"),
                r = l("446674"),
                u = l("418009"),
                c = l("430568"),
                d = l("858619"),
                f = l("474643"),
                E = l("585722"),
                p = l("46829"),
                m = l("172402"),
                A = l("264317"),
                L = l("782340"),
                _ = l("177037"),
                T = l("877055");

            function P(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: o,
                    layout: s,
                    image: i
                } = e, m = null == i ? void 0 : i.emoji, A = (0, r.useStateFromStores)([E.default], () => E.default.getUpload(l, o, f.DraftType.Poll)), [L, T] = n.useState();
                n.useEffect(() => {
                    var e;
                    if ((null == A ? void 0 : null === (e = A.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(A.item.file);
                    return T(t), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == A ? void 0 : null === (t = A.item) || void 0 === t ? void 0 : t.file]);
                let P = n.useMemo(() => {
                    let e = s === u.PollLayoutTypes.DEFAULT;
                    return null != A ? (0, a.jsx)("img", {
                        src: L,
                        className: e ? _.gifDefault : _.gifJumbo,
                        alt: ""
                    }) : null != m ? (0, a.jsx)(c.default, {
                        emojiId: m.id,
                        emojiName: m.type === d.EmojiTypes.UNICODE ? m.surrogates : m.name,
                        animated: m.animated,
                        className: e ? _.emojiDefault : void 0,
                        size: e ? "default" : "jumbo"
                    }) : (0, a.jsx)(p.default, {
                        className: e ? _.expressionPickerIconDefault : _.expressionPickerIconImageOnly
                    })
                }, [m, s, A, L]);
                return P
            }

            function x(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: n,
                    buttonImage: o,
                    layout: s,
                    handleTogglePollExpressionPicker: r
                } = e, {
                    pollExpressionPickerId: c
                } = (0, A.default)(s), d = (null == o ? void 0 : null === (t = o.gifAttachmentState) || void 0 === t ? void 0 : t.status) === m.PollGifUploadAttachmentStatus.PREPARING;
                return d ? (0, a.jsx)(i.Spinner, {
                    className: s === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? _.spinnerWrapper : void 0
                }) : (0, a.jsx)(i.Clickable, {
                    onClick: r,
                    "aria-controls": c,
                    "aria-label": L.default.Messages.POLL_EXPRESSION_PICKER_BUTTON_ARIA,
                    className: s === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? _.expressionPickerButtonImageOnly : _.expressionPickerButtonDefault,
                    "data-menu-item": "true",
                    children: (0, a.jsx)(P, {
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
                    layout: r,
                    onAnswerTextChange: c,
                    handleTogglePollExpressionPicker: d
                } = e, f = (0, a.jsx)(x, {
                    channelId: l,
                    buttonImage: n.image,
                    layout: r,
                    handleTogglePollExpressionPicker: d,
                    uploadId: n.uploadId
                });
                return (0, a.jsx)(a.Fragment, {
                    children: r === u.PollLayoutTypes.DEFAULT ? (0, a.jsxs)("li", {
                        className: s(T.formInput, _.defaultContainer),
                        ref: t,
                        children: [f, (0, a.jsx)(i.TextInput, {
                            placeholder: L.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                            value: n.text,
                            className: _.defaultTextInput,
                            inputClassName: s(T.formInput, _.defaultTextInput),
                            onChange: e => c(e, o)
                        })]
                    }) : (0, a.jsx)("li", {
                        className: _.imageOnlyContainer,
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
                    return R
                }
            });
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                s = l.n(o),
                i = l("627445"),
                r = l.n(i),
                u = l("77078"),
                c = l("418009"),
                d = l("476765"),
                f = l("151185"),
                E = l("562228"),
                p = l("104182"),
                m = l("418298"),
                A = l("612805"),
                L = l("53013"),
                _ = l("233365"),
                T = l("264317"),
                P = l("186859"),
                x = l("782340"),
                I = l("877055");
            let h = (0, d.uid)();

            function R(e) {
                let {
                    channel: t,
                    transitionState: l,
                    onClose: o
                } = e, {
                    answers: i,
                    question: d,
                    setQuestion: C,
                    selectedLayoutType: O,
                    setSelectedLayoutType: g,
                    allowMultiSelect: v,
                    setAllowMultiSelect: N,
                    canPost: S,
                    canAddMoreAnswers: y,
                    handleAddAnswer: k,
                    handleAnswerTextChange: j,
                    handleEmojiSelect: M,
                    handleGifSelect: U,
                    createPoll: b,
                    createPollError: D,
                    submitting: w
                } = (0, p.default)(t, o), G = n.useRef([]), {
                    togglePollExpressionPicker: B,
                    lastActiveParentIndex: F
                } = (0, T.default)(O), W = n.useCallback(() => {
                    r(null != F, "Must have an active input");
                    let e = G.current[F];
                    return r(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [F]), Y = O === c.PollLayoutTypes.DEFAULT, z = n.useCallback(() => {
                    let e = d.length > 0 || i.some(e => (0, E.isAnswerFilled)(e, O));
                    e ? (0, _.default)({
                        title: x.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                        body: x.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                        cta: x.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                        closeLabel: x.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                        onConfirm: () => {
                            o()
                        }
                    }) : o()
                }, [o, i, d, O]);
                return n.useEffect(() => {
                    (0, u.updateModal)(P.POLL_CREATION_MODAL_KEY, e => (0, a.jsx)(R, {
                        ...e,
                        channel: t
                    }), z)
                }, [z, t]), (0, a.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    className: I.container,
                    transitionState: l,
                    "aria-labelledby": h,
                    children: [(0, a.jsxs)(u.ModalHeader, {
                        className: I.header,
                        separator: !1,
                        children: [(0, a.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-md/medium",
                            className: I.headerText,
                            id: h,
                            children: x.default.Messages.CREATE_POLL_HEADING
                        }), (0, a.jsx)(u.ModalCloseButton, {
                            onClick: o
                        })]
                    }), (0, a.jsxs)(u.ModalContent, {
                        className: I.content,
                        children: [null != D && (0, a.jsx)(u.FormErrorBlock, {
                            children: D.getAnyErrorMessage()
                        }), (0, a.jsx)(u.TextInput, {
                            "aria-label": x.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
                            placeholder: x.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: d,
                            inputClassName: I.questionInput,
                            onChange: C,
                            autoFocus: !0
                        }), (0, a.jsx)(A.default, {
                            selectedLayoutType: O,
                            onSelectedLayoutType: g
                        }), (0, a.jsxs)("ul", {
                            className: s(I.answerInputsContainer, Y ? I.defaultContainer : I.imageOnlyContainer),
                            "aria-label": x.default.Messages.POLL_OPTIONS_ARIA,
                            children: [i.map((e, l) => (0, a.jsx)(m.default, {
                                answer: e,
                                channelId: t.id,
                                index: l,
                                ref: e => G.current[l] = e,
                                handleTogglePollExpressionPicker: () => B(l),
                                layout: O,
                                onAnswerTextChange: j
                            }, e.uploadId)), y && (0, a.jsx)("li", {
                                children: (0, a.jsxs)(u.Clickable, {
                                    className: Y ? I.addAnswerButtonDefault : I.addAnswerButtonImageOnly,
                                    onClick: y ? k : void 0,
                                    "aria-label": x.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                                    children: [(0, a.jsx)(f.default, {
                                        className: Y ? I.addAnswerIconDefault : I.addAnswerIconImageOnly
                                    }), Y && (0, a.jsx)(u.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: x.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
                                    })]
                                })
                            })]
                        })]
                    }), (0, a.jsxs)(u.ModalFooter, {
                        className: I.footer,
                        children: [(0, a.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 18,
                            value: v,
                            onChange: (e, t) => N(t),
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: x.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, a.jsx)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: I.postButton,
                            onClick: b,
                            submitting: w,
                            disabled: !S,
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: I.postButtonText,
                                children: x.default.Messages.CREATE_POLL_POST
                            })
                        })]
                    }), (0, a.jsx)(L.default, {
                        channel: t,
                        layout: O,
                        parentModalKey: P.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: M,
                        onGifSelect: U,
                        positionTargetRef: W,
                        lastActiveInputIndex: F
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
                i = l("77078"),
                r = l("418009"),
                u = l("95689"),
                c = l("100300"),
                d = l("782340"),
                f = l("105335");

            function E(e) {
                let {
                    label: t,
                    isSelected: l,
                    onClick: n,
                    children: o
                } = e, r = (0, i.useRadioItem)({
                    isSelected: l,
                    label: t
                });
                return (0, a.jsx)(i.Clickable, {
                    ...r,
                    onClick: n,
                    className: s(f.option, l && f.optionSelected),
                    children: o
                })
            }
            var p = function(e) {
                let {
                    selectedLayoutType: t,
                    onSelectedLayoutType: l
                } = e, o = (0, i.useRadioGroup)({
                    orientation: "horizontal"
                }), s = n.useMemo(() => [{
                    name: r.PollLayoutTypes.DEFAULT,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                    icon: c.default
                }, {
                    name: r.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                    icon: u.default
                }], []), p = e => {
                    l(e)
                };
                return (0, a.jsx)("div", {
                    className: f.container,
                    "aria-label": d.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
                    ...o,
                    children: s.map(e => {
                        let l = e.icon;
                        return (0, a.jsx)(E, {
                            label: e.label,
                            isSelected: e.name === t,
                            onClick: () => p(e.name),
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
                s = l.n(o),
                i = l("241488"),
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
                    positionTargetRef: E
                } = e, {
                    showPollExpressionPicker: p,
                    closePollExpressionPicker: m,
                    chatInputType: A
                } = (0, u.default)(l), L = n.useCallback(e => {
                    s(null != c, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && f(t.id, c, (0, r.makeTenorProxyURL)(e.gifSrc)), m()
                }, [m, c, f, t.id]), _ = n.useCallback(e => {
                    s(null != c, "Expected to have an active input"), s(null != e, "Expected to have an emoji"), d(e, c), m()
                }, [c, d, m]), T = n.useCallback(() => {}, []);
                return p ? (0, a.jsx)(i.default, {
                    positionTargetRef: E,
                    type: A,
                    hideGifFavorites: !0,
                    includeCreateEmojiButton: !1,
                    onSelectGIF: L,
                    onSelectEmoji: _,
                    onSelectSticker: T,
                    channel: t,
                    parentModalKey: o,
                    closeOnModalOuterClick: !0
                }) : null
            }
        },
        233365: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("551042");

            function o(e) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await l.el("553621").then(l.bind(l, "553621"));
                    return l => (0, a.jsx)(t, {
                        ...e,
                        ...l
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
                let [t, l] = a.useState(null), [u, c, d] = (0, i.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], n.default), f = s.ChatInputTypes.CREATE_POLL, E = null != u && null != c && c === f, p = e === o.PollLayoutTypes.DEFAULT ? r.ExpressionPickerViewType.EMOJI : r.ExpressionPickerViewType.GIF, m = a.useCallback(e => {
                    l(e), (0, i.toggleExpressionPicker)(p, f)
                }, [p, f]), A = a.useCallback(() => {
                    (0, i.closeExpressionPicker)(f)
                }, [f]);
                return a.useEffect(() => () => {
                    (0, i.closeExpressionPicker)(f)
                }, [f]), {
                    showPollExpressionPicker: E,
                    togglePollExpressionPicker: m,
                    closePollExpressionPicker: A,
                    pollExpressionPickerId: d,
                    chatInputType: f,
                    lastActiveParentIndex: t
                }
            }
        }
    }
]);