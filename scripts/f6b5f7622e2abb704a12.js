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
                    return E
                }
            }), a("222007");
            var l = a("884691"),
                n = a("418009"),
                s = a("162426"),
                i = a("314743"),
                r = a("172402"),
                o = a("914271"),
                u = a("847511"),
                d = a("562228"),
                c = a("186859");

            function E(e, t) {
                let a = e.id,
                    E = l.useRef();
                null == E.current && (E.current = [(0, d.generateEmptyPollAnswer)(), (0, d.generateEmptyPollAnswer)()]);
                let [A, m] = l.useState(E.current), [_, L] = l.useState(""), [p, x] = l.useState(n.PollLayoutTypes.DEFAULT), [C, T] = l.useState(!1), h = A.filter(e => (0, d.isAnswerFilled)(e, p)), g = A.filter(e => (0, d.isIncompleteAnswer)(e, p)), R = _.length > 0 && h.length >= c.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === g.length, [I, {
                    error: N,
                    loading: P
                }] = (0, s.default)(u.default.createPoll), O = A.length < c.MAX_NUMBER_OF_ANSWERS_PER_POLL, v = l.useCallback(() => {
                    O && m(e => [...e, (0, d.generateEmptyPollAnswer)()])
                }, [O]), M = l.useCallback((e, t) => {
                    m(a => {
                        let l = [...a];
                        return l[t] = {
                            ...l[t],
                            text: e
                        }, l
                    })
                }, []), j = l.useCallback((e, t, a) => {
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
                    let s = A[t],
                        r = null === (n = A[t]) || void 0 === n ? void 0 : null === (l = n.image) || void 0 === l ? void 0 : l.gifAttachmentState;
                    null != s && null != r && r.gifUrl !== a && o.removePollUploadAttachment(e, s.uploadId, (0, i.getFileNameFromGifUrl)(s.uploadId, r.gifUrl))
                }, [A]), b = l.useCallback(async (e, t, a) => {
                    var l, n;
                    let s = null !== (n = null === (l = A[t]) || void 0 === l ? void 0 : l.uploadId) && void 0 !== n ? n : (0, d.generateUploadId)();
                    S(e, t), j(f(a, r.PollGifUploadAttachmentStatus.PREPARING), t, s);
                    let i = await o.handlePollGifAttachmentAdd(e, s, a);
                    if (null == i) {
                        j(f(a, r.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    j(f(a, r.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [A, j, S]), k = l.useCallback((e, t) => {
                    S(a, t), j({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [a, j, S]), w = l.useCallback(e => {
                    S(a, e), m(t => {
                        let a = [...t];
                        return a.splice(e, 1), a
                    })
                }, [a, S]);
                l.useEffect(() => () => {
                    o.removeAllPollUploadAttachments(a)
                }, [a]);
                let y = l.useCallback(async () => {
                    await I({
                        channel: e,
                        question: _,
                        answers: h,
                        allowMultiSelect: C,
                        layout: p,
                        onClose: t
                    })
                }, [_, h, C, I, e, p, t]);
                return {
                    answers: A,
                    question: _,
                    setQuestion: L,
                    selectedLayoutType: p,
                    setSelectedLayoutType: x,
                    allowMultiSelect: C,
                    setAllowMultiSelect: T,
                    canPost: R,
                    canAddMoreAnswers: O,
                    handleAddAnswer: v,
                    handleAnswerTextChange: M,
                    handleGifSelect: b,
                    handleEmojiSelect: k,
                    handleRemoveAnswer: w,
                    createPoll: y,
                    submitting: P,
                    createPollError: N
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
                PollCreationMediaPreview: function() {
                    return g
                },
                default: function() {
                    return I
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("597287"),
                o = a("77078"),
                u = a("418009"),
                d = a("430568"),
                c = a("9560"),
                E = a("858619"),
                f = a("46829"),
                A = a("228220"),
                m = a("562228"),
                _ = a("714411"),
                L = a("356581"),
                p = a("264317"),
                x = a("186859"),
                C = a("782340"),
                T = a("177037"),
                h = a("877055");

            function g(e) {
                let {
                    hasUpload: t,
                    gifUrl: a,
                    gifFilename: n,
                    imageClassName: s,
                    emoji: i,
                    emojiClassName: r,
                    fallback: o
                } = e;
                return t ? (0, l.jsx)("img", {
                    src: a,
                    alt: n,
                    className: s
                }) : null != i ? (0, l.jsx)(d.default, {
                    className: r,
                    emojiId: i.id,
                    emojiName: i.type === E.EmojiTypes.UNICODE ? i.surrogates : i.name,
                    animated: i.animated
                }) : (0, l.jsx)(l.Fragment, {
                    children: o
                })
            }

            function R(e) {
                let {
                    channelId: t,
                    uploadId: a,
                    buttonImage: s,
                    layout: r,
                    handleTogglePollExpressionPicker: d,
                    answerIndex: c
                } = e, {
                    pollExpressionPickerId: E
                } = (0, p.default)(r), {
                    emoji: A,
                    isLoadingGif: _,
                    hasUpload: x,
                    gifUrl: h,
                    gifFilename: R
                } = (0, L.default)({
                    channelId: t,
                    uploadId: a,
                    image: s
                }), I = r === u.PollLayoutTypes.DEFAULT, N = n.useMemo(() => x ? C.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: (0, m.filterOutUUID)(R),
                    answerNumber: c + 1
                }) : null != A ? C.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: A.name,
                    answerNumber: c + 1
                }) : C.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
                    answerNumber: c + 1
                }), [x, A, c, R]);
                return _ ? (0, l.jsx)(o.Spinner, {
                    className: I ? T.spinnerWrapperDefault : T.spinnerWrapperImageOnly
                }) : (0, l.jsx)(o.Clickable, {
                    onClick: d,
                    "aria-controls": E,
                    "aria-label": N,
                    className: r === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? T.expressionPickerButtonImageOnly : T.expressionPickerButtonDefault,
                    "data-menu-item": "true",
                    children: (0, l.jsx)(g, {
                        hasUpload: x,
                        gifUrl: h,
                        gifFilename: R,
                        imageClassName: i(T.media, I ? T.gifDefault : T.gifJumbo),
                        emoji: A,
                        emojiClassName: i(T.media, I ? T.emojiDefault : T.emojiJumbo),
                        fallback: (0, l.jsx)(f.default, {
                            className: I ? T.expressionPickerIconDefault : T.expressionPickerIconImageOnly
                        })
                    })
                })
            }
            var I = n.forwardRef(function(e, t) {
                let {
                    channelId: n,
                    answer: s,
                    index: d,
                    layout: E,
                    onAnswerTextChange: f,
                    handleTogglePollExpressionPicker: m,
                    onRemoveAnswer: L
                } = e, p = () => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("38228").then(a.bind(a, "38228"));
                        return t => (0, l.jsx)(e, {
                            channelId: n,
                            answer: s,
                            index: d,
                            onAnswerTextChange: f,
                            ...t
                        })
                    })
                }, g = (0, l.jsx)(R, {
                    channelId: n,
                    buttonImage: s.image,
                    layout: E,
                    handleTogglePollExpressionPicker: m,
                    uploadId: s.uploadId,
                    answerIndex: d
                }), I = null != s.text && s.text.length > 0;
                return (0, l.jsx)(l.Fragment, {
                    children: E === u.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
                        className: T.answerRow,
                        children: [(0, l.jsxs)("div", {
                            className: i(h.formInput, T.defaultContainer),
                            ref: t,
                            children: [g, (0, l.jsx)(o.TextInput, {
                                "aria-label": C.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
                                    answerNumber: d + 1
                                }),
                                placeholder: C.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                                value: s.text,
                                className: T.defaultTextInput,
                                inputClassName: i(h.formInput, T.defaultTextInput),
                                onChange: e => f(e, d),
                                maxLength: x.MAX_POLL_ANSWER_LENGTH
                            })]
                        }), (0, l.jsx)(o.Clickable, {
                            onClick: () => L(d),
                            className: T.removeAnswerButtonDefault,
                            "aria-label": C.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                answerNumber: d + 1
                            }),
                            children: (0, l.jsx)(A.default, {
                                className: T.trashIcon,
                                "aria-hidden": !0
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: T.imageOnlyContainer,
                        ref: t,
                        children: [(0, l.jsxs)("div", {
                            className: T.imagePreviewContainer,
                            children: [g, I && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    className: T.altBadge,
                                    "aria-hidden": !0,
                                    children: C.default.Messages.IMAGE_ALT
                                }), (0, l.jsxs)("div", {
                                    onClick: p,
                                    children: [(0, l.jsx)(r.VisuallyHidden, {
                                        children: C.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
                                    }), (0, l.jsx)(o.Text, {
                                        variant: "text-xxs/medium",
                                        className: T.altTextPreview,
                                        children: s.text
                                    })]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: T.imageOnlyAnswerActionBar,
                            children: [(0, l.jsx)(c.default, {
                                tooltip: C.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                                "aria-label": I ? C.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
                                    answerNumber: d + 1
                                }) : C.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
                                    answerNumber: d + 1
                                }),
                                onClick: p,
                                children: (0, l.jsx)(_.ImageAltIcon, {
                                    "aria-hidden": !0
                                })
                            }), (0, l.jsx)(c.default, {
                                tooltip: C.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                                "aria-label": C.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                    answerNumber: d + 1
                                }),
                                onClick: () => L(d),
                                dangerous: !0,
                                children: (0, l.jsx)(A.default, {
                                    "aria-hidden": !0
                                })
                            })]
                        })]
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
                i = a.n(s),
                r = a("627445"),
                o = a.n(r),
                u = a("77078"),
                d = a("418009"),
                c = a("476765"),
                E = a("151185"),
                f = a("562228"),
                A = a("104182"),
                m = a("418298"),
                _ = a("612805"),
                L = a("53013"),
                p = a("233365"),
                x = a("264317"),
                C = a("186859"),
                T = a("782340"),
                h = a("877055");
            let g = (0, c.uid)();

            function R(e) {
                let {
                    channel: t,
                    transitionState: a,
                    onClose: s
                } = e, {
                    answers: r,
                    question: c,
                    setQuestion: I,
                    selectedLayoutType: N,
                    setSelectedLayoutType: P,
                    allowMultiSelect: O,
                    setAllowMultiSelect: v,
                    canPost: M,
                    canAddMoreAnswers: j,
                    handleAddAnswer: S,
                    handleAnswerTextChange: b,
                    handleEmojiSelect: k,
                    handleGifSelect: w,
                    handleRemoveAnswer: y,
                    createPoll: D,
                    createPollError: U,
                    submitting: G
                } = (0, A.default)(t, s), B = n.useRef([]), {
                    togglePollExpressionPicker: F,
                    lastActiveParentIndex: H
                } = (0, x.default)(N), W = n.useCallback(() => {
                    o(null != H, "Must have an active input");
                    let e = B.current[H];
                    return o(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [H]), V = N === d.PollLayoutTypes.DEFAULT, Y = n.useCallback(() => {
                    let e = c.length > 0 || r.some(e => (0, f.isAnswerFilled)(e, N));
                    e ? (0, p.default)({
                        title: T.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                        body: T.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                        cta: T.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                        closeLabel: T.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                        onConfirm: () => {
                            s()
                        }
                    }) : s()
                }, [s, r, c, N]);
                return n.useEffect(() => {
                    (0, u.updateModal)(C.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(R, {
                        ...e,
                        channel: t
                    }), Y)
                }, [Y, t]), (0, l.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    className: h.container,
                    transitionState: a,
                    "aria-labelledby": g,
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: h.header,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-lg/semibold",
                            className: h.headerText,
                            id: g,
                            children: T.default.Messages.CREATE_POLL_HEADING
                        }), (0, l.jsx)(u.ModalCloseButton, {
                            onClick: s
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        className: h.content,
                        children: [null != U && (0, l.jsx)(u.FormErrorBlock, {
                            children: U.getAnyErrorMessage()
                        }), (0, l.jsx)(u.TextInput, {
                            "aria-label": T.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
                            placeholder: T.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: c,
                            inputClassName: h.questionInput,
                            onChange: I,
                            maxLength: C.MAX_POLL_QUESTION_LENGTH,
                            autoFocus: !0
                        }), (0, l.jsx)(_.default, {
                            selectedLayoutType: N,
                            onSelectedLayoutType: P
                        }), (0, l.jsxs)("div", {
                            className: i(h.answerInputsContainer, V ? h.defaultContainer : h.imageOnlyContainer),
                            role: "group",
                            "aria-label": T.default.Messages.POLL_OPTIONS_ARIA,
                            children: [r.map((e, a) => (0, l.jsx)(m.default, {
                                answer: e,
                                channelId: t.id,
                                index: a,
                                ref: e => B.current[a] = e,
                                handleTogglePollExpressionPicker: () => F(a),
                                layout: N,
                                onAnswerTextChange: b,
                                onRemoveAnswer: y
                            }, e.uploadId)), j && (0, l.jsxs)(u.Clickable, {
                                className: V ? h.addAnswerButtonDefault : h.addAnswerButtonImageOnly,
                                onClick: j ? S : void 0,
                                "aria-label": T.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                                children: [(0, l.jsx)(E.default, {
                                    className: V ? h.addAnswerIconDefault : h.addAnswerIconImageOnly
                                }), V && (0, l.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: T.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        className: h.footer,
                        children: [(0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 24,
                            value: O,
                            onChange: (e, t) => v(t),
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: T.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, l.jsx)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: h.postButton,
                            onClick: D,
                            submitting: G,
                            disabled: !M,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: h.postButtonText,
                                children: T.default.Messages.CREATE_POLL_POST
                            })
                        })]
                    }), (0, l.jsx)(L.default, {
                        channel: t,
                        layout: N,
                        parentModalKey: C.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: k,
                        onGifSelect: w,
                        positionTargetRef: W,
                        lastActiveInputIndex: H
                    })]
                })
            }
        },
        612805: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("77078"),
                o = a("418009"),
                u = a("95689"),
                d = a("100300"),
                c = a("782340"),
                E = a("105335");

            function f(e) {
                let {
                    label: t,
                    isSelected: a,
                    onClick: n,
                    children: s
                } = e, o = (0, r.useRadioItem)({
                    isSelected: a,
                    label: t
                });
                return (0, l.jsx)(r.Clickable, {
                    ...o,
                    onClick: n,
                    className: i(E.option, a && E.optionSelected),
                    children: s
                })
            }
            var A = function(e) {
                let {
                    selectedLayoutType: t,
                    onSelectedLayoutType: a
                } = e, s = (0, r.useRadioGroup)({
                    orientation: "horizontal"
                }), i = n.useMemo(() => [{
                    name: o.PollLayoutTypes.DEFAULT,
                    label: c.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                    icon: d.default
                }, {
                    name: o.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                    label: c.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                    icon: u.default
                }], []), A = e => {
                    a(e)
                };
                return (0, l.jsx)("div", {
                    className: E.container,
                    "aria-label": c.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
                    ...s,
                    children: i.map(e => {
                        let a = e.icon;
                        return (0, l.jsx)(f, {
                            label: e.label,
                            isSelected: e.name === t,
                            onClick: () => A(e.name),
                            children: (0, l.jsx)(a, {
                                className: E.icon
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
                    return d
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("627445"),
                i = a.n(s),
                r = a("241488"),
                o = a("254398"),
                u = a("264317");

            function d(e) {
                let {
                    channel: t,
                    layout: a,
                    parentModalKey: s,
                    lastActiveInputIndex: d,
                    onEmojiSelect: c,
                    onGifSelect: E,
                    positionTargetRef: f
                } = e, {
                    showPollExpressionPicker: A,
                    closePollExpressionPicker: m,
                    chatInputType: _
                } = (0, u.default)(a), L = n.useCallback(e => {
                    i(null != d, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && E(t.id, d, (0, o.makeTenorProxyURL)(e.gifSrc)), m()
                }, [m, d, E, t.id]), p = n.useCallback(e => {
                    i(null != d, "Expected to have an active input"), i(null != e, "Expected to have an emoji"), c(e, d), m()
                }, [d, c, m]), x = n.useCallback(() => {}, []);
                return A ? (0, l.jsx)(r.default, {
                    positionTargetRef: f,
                    type: _,
                    hideGifFavorites: !0,
                    includeCreateEmojiButton: !1,
                    onSelectGIF: L,
                    onSelectEmoji: p,
                    onSelectSticker: x,
                    channel: t,
                    parentModalKey: s,
                    closeOnModalOuterClick: !0
                }) : null
            }
        },
        714411: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ImageAltIcon: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("669491"),
                s = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "string" == typeof i ? i : i.css,
                    children: [(0, l.jsxs)("g", {
                        "clip-path": "url(#clip0_1_16)",
                        children: [(0, l.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H12.2763C12.4842 22 12.6704 21.8714 12.744 21.6769L13.5005 19.6769C13.6242 19.3498 13.3825 19 13.0328 19H5.81047C5.18159 19 4.83196 18.2726 5.22482 17.7815L7.0787 15.4641C7.67918 14.7135 8.82082 14.7135 9.4213 15.4641L9.92742 16.0968L12.15 13.1333C12.95 12.0667 14.55 12.0667 15.35 13.1333L15.7659 13.6879L15.9155 13.2924C16.2097 12.5146 16.9545 12 17.7861 12H20.1143C20.6827 12 21.2003 12.2434 21.57 12.6395C21.6838 12.7614 22 12.6785 22 12.5118V5C22 3.34315 20.6569 2 19 2H5ZM8.64943 5.07947C9.32431 4.42611 10.4329 5.06617 10.2045 5.97731C10.082 6.46608 10.3694 6.96388 10.854 7.10216C11.7572 7.35994 11.7572 8.64005 10.854 8.89784C10.3694 9.03612 10.082 9.53392 10.2045 10.0227C10.4329 10.9338 9.32431 11.5739 8.64943 10.9205C8.28741 10.57 7.71259 10.57 7.35057 10.9205C6.67569 11.5739 5.56708 10.9338 5.79547 10.0227C5.91798 9.53392 5.63058 9.03612 5.14603 8.89784C4.24276 8.64006 4.24276 7.35994 5.14603 7.10216C5.63058 6.96388 5.91798 6.46608 5.79547 5.97731C5.56708 5.06617 6.67569 4.42611 7.35057 5.07947C7.71259 5.42996 8.28741 5.42996 8.64943 5.07947Z"
                        }), (0, l.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M21.613 24.04H23.912L20.1143 14H17.7861L13.9884 24.04H16.2874L16.9422 22.1193H20.9582L21.613 24.04ZM17.6115 20.1986L18.9502 16.2845L20.2889 20.1986H17.6115Z"
                        })]
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsx)("clipPath", {
                            id: "clip0_1_16",
                            children: (0, l.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })
                        })
                    })]
                })
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
        356581: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            }), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
            var l = a("884691"),
                n = a("446674"),
                s = a("474643"),
                i = a("585722"),
                r = a("172402");

            function o(e) {
                var t, a;
                let {
                    channelId: o,
                    uploadId: u,
                    image: d
                } = e, c = null == d ? void 0 : d.emoji, E = (null == d ? void 0 : null === (t = d.gifAttachmentState) || void 0 === t ? void 0 : t.status) === r.PollGifUploadAttachmentStatus.PREPARING, f = (0, n.useStateFromStores)([i.default], () => i.default.getUpload(o, u, s.DraftType.Poll)), [A, m] = l.useState(), [_, L] = l.useState("");
                return l.useEffect(() => {
                    var e;
                    if ((null == f ? void 0 : null === (e = f.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(f.item.file);
                    return m(t), L(f.item.file.name), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == f ? void 0 : null === (a = f.item) || void 0 === a ? void 0 : a.file]), {
                    emoji: c,
                    isLoadingGif: E,
                    hasUpload: null != f,
                    gifUrl: A,
                    gifFilename: _
                }
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
                i = a("850391"),
                r = a("538282"),
                o = a("13030");

            function u(e) {
                let [t, a] = l.useState(null), [u, d, c, E] = (0, r.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.lastActiveView, e.pickerId], n.default), f = i.ChatInputTypes.CREATE_POLL, A = null != u && null != d && d === f, m = null != c ? c : e === s.PollLayoutTypes.DEFAULT ? o.ExpressionPickerViewType.EMOJI : o.ExpressionPickerViewType.GIF, _ = l.useCallback(e => {
                    a(e), (0, r.toggleExpressionPicker)(m, f)
                }, [m, f]), L = l.useCallback(() => {
                    (0, r.closeExpressionPicker)(f)
                }, [f]);
                return l.useEffect(() => () => {
                    (0, r.closeExpressionPicker)(f)
                }, [f]), {
                    showPollExpressionPicker: A,
                    togglePollExpressionPicker: _,
                    closePollExpressionPicker: L,
                    pollExpressionPickerId: E,
                    chatInputType: f,
                    lastActiveParentIndex: t
                }
            }
        }
    }
]);