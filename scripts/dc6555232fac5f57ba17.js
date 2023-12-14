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
                c = a("562228"),
                d = a("186859");

            function E(e, t) {
                let a = e.id,
                    E = l.useRef();
                null == E.current && (E.current = [(0, c.generateEmptyPollAnswer)(), (0, c.generateEmptyPollAnswer)()]);
                let [m, A] = l.useState(E.current), [_, L] = l.useState(""), [p, x] = l.useState(n.PollLayoutTypes.DEFAULT), [C, T] = l.useState(!1), h = m.filter(e => (0, c.isAnswerFilled)(e, p)), g = m.filter(e => (0, c.isIncompleteAnswer)(e, p)), R = _.length > 0 && h.length >= d.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === g.length, [I, {
                    error: P,
                    loading: N
                }] = (0, s.default)(u.default.createPoll), O = m.length < d.MAX_NUMBER_OF_ANSWERS_PER_POLL, v = l.useCallback(() => {
                    O && A(e => [...e, (0, c.generateEmptyPollAnswer)()])
                }, [O]), M = l.useCallback((e, t) => {
                    A(a => {
                        let l = [...a];
                        return l[t] = {
                            ...l[t],
                            text: e
                        }, l
                    })
                }, []), j = l.useCallback((e, t, a) => {
                    A(l => {
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
                    let s = m[t],
                        r = null === (n = m[t]) || void 0 === n ? void 0 : null === (l = n.image) || void 0 === l ? void 0 : l.gifAttachmentState;
                    null != s && null != r && r.gifUrl !== a && o.removePollUploadAttachment(e, s.uploadId, (0, i.getFileNameFromGifUrl)(s.uploadId, r.gifUrl))
                }, [m]), k = l.useCallback(async (e, t, a) => {
                    var l, n;
                    let s = null !== (n = null === (l = m[t]) || void 0 === l ? void 0 : l.uploadId) && void 0 !== n ? n : (0, c.generateUploadId)();
                    S(e, t), j(f(a, r.PollGifUploadAttachmentStatus.PREPARING), t, s);
                    let i = await o.handlePollGifAttachmentAdd(e, s, a);
                    if (null == i) {
                        j(f(a, r.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    j(f(a, r.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [m, j, S]), y = l.useCallback((e, t) => {
                    S(a, t), j({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [a, j, S]), b = l.useCallback(e => {
                    S(a, e), A(t => {
                        let a = [...t];
                        return a.splice(e, 1), a
                    })
                }, [a, S]);
                l.useEffect(() => () => {
                    o.removeAllPollUploadAttachments(a)
                }, [a]);
                let w = l.useCallback(async () => {
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
                    answers: m,
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
                    handleGifSelect: k,
                    handleEmojiSelect: y,
                    handleRemoveAnswer: b,
                    createPoll: w,
                    submitting: N,
                    createPollError: P
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
                c = a("430568"),
                d = a("9560"),
                E = a("858619"),
                f = a("46829"),
                m = a("228220"),
                A = a("562228"),
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
                }) : null != i ? (0, l.jsx)(c.default, {
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
                    handleTogglePollExpressionPicker: c,
                    answerIndex: d
                } = e, {
                    pollExpressionPickerId: E
                } = (0, p.default)(r), {
                    emoji: m,
                    isLoadingGif: _,
                    hasUpload: x,
                    gifUrl: h,
                    gifFilename: R
                } = (0, L.default)({
                    channelId: t,
                    uploadId: a,
                    image: s
                }), I = r === u.PollLayoutTypes.DEFAULT, P = n.useMemo(() => x ? C.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: (0, A.filterOutUUID)(R),
                    answerNumber: d + 1
                }) : null != m ? C.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: m.name,
                    answerNumber: d + 1
                }) : C.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
                    answerNumber: d + 1
                }), [x, m, d, R]);
                return _ ? (0, l.jsx)(o.Spinner, {
                    className: I ? T.spinnerWrapperDefault : T.spinnerWrapperImageOnly
                }) : (0, l.jsx)(o.Clickable, {
                    onClick: c,
                    "aria-controls": E,
                    "aria-label": P,
                    className: r === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? T.expressionPickerButtonImageOnly : T.expressionPickerButtonDefault,
                    "data-menu-item": "true",
                    children: (0, l.jsx)(g, {
                        hasUpload: x,
                        gifUrl: h,
                        gifFilename: R,
                        imageClassName: i(T.media, I ? T.gifDefault : T.gifJumbo),
                        emoji: m,
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
                    index: c,
                    layout: E,
                    onAnswerTextChange: f,
                    handleTogglePollExpressionPicker: A,
                    onRemoveAnswer: L
                } = e, p = () => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("38228").then(a.bind(a, "38228"));
                        return t => (0, l.jsx)(e, {
                            channelId: n,
                            answer: s,
                            index: c,
                            onAnswerTextChange: f,
                            ...t
                        })
                    })
                }, g = (0, l.jsx)(R, {
                    channelId: n,
                    buttonImage: s.image,
                    layout: E,
                    handleTogglePollExpressionPicker: A,
                    uploadId: s.uploadId,
                    answerIndex: c
                }), I = null != s.text && s.text.length > 0;
                return (0, l.jsx)(l.Fragment, {
                    children: E === u.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
                        className: T.answerRow,
                        children: [(0, l.jsxs)("div", {
                            className: i(h.formInput, T.defaultContainer),
                            ref: t,
                            children: [g, (0, l.jsx)(o.TextInput, {
                                "aria-label": C.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
                                    answerNumber: c + 1
                                }),
                                placeholder: C.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                                value: s.text,
                                className: T.defaultTextInput,
                                inputClassName: i(h.formInput, T.defaultTextInput),
                                onChange: e => f(e, c),
                                maxLength: x.MAX_POLL_ANSWER_LENGTH
                            })]
                        }), (0, l.jsx)(o.Clickable, {
                            onClick: () => L(c),
                            className: T.removeAnswerButtonDefault,
                            "aria-label": C.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                answerNumber: c + 1
                            }),
                            children: (0, l.jsx)(m.default, {
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
                            children: [(0, l.jsx)(d.default, {
                                tooltip: C.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                                "aria-label": I ? C.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
                                    answerNumber: c + 1
                                }) : C.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
                                    answerNumber: c + 1
                                }),
                                onClick: p,
                                children: (0, l.jsx)(_.ImageAltIcon, {
                                    "aria-hidden": !0
                                })
                            }), (0, l.jsx)(d.default, {
                                tooltip: C.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                                "aria-label": C.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                    answerNumber: c + 1
                                }),
                                onClick: () => L(c),
                                dangerous: !0,
                                children: (0, l.jsx)(m.default, {
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
                    return O
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("627445"),
                o = a.n(r),
                u = a("77078"),
                c = a("33112"),
                d = a("418009"),
                E = a("428958"),
                f = a("476765"),
                m = a("151185"),
                A = a("562228"),
                _ = a("104182"),
                L = a("418298"),
                p = a("612805"),
                x = a("53013"),
                C = a("233365"),
                T = a("264317"),
                h = a("375614"),
                g = a("186859"),
                R = a("660516"),
                I = a("782340"),
                P = a("877055");
            let N = (0, f.uid)();

            function O(e) {
                let {
                    channel: t,
                    transitionState: a,
                    onClose: s
                } = e;
                (0, E.default)({
                    type: R.ImpressionTypes.MODAL,
                    name: c.ImpressionNames.POLL_EDITOR_VIEWED
                });
                let {
                    answers: r,
                    question: f,
                    setQuestion: v,
                    selectedLayoutType: M,
                    setSelectedLayoutType: j,
                    allowMultiSelect: S,
                    setAllowMultiSelect: k,
                    canPost: y,
                    canAddMoreAnswers: b,
                    handleAddAnswer: w,
                    handleAnswerTextChange: D,
                    handleEmojiSelect: U,
                    handleGifSelect: G,
                    handleRemoveAnswer: B,
                    createPoll: F,
                    createPollError: H,
                    submitting: W
                } = (0, _.default)(t, s), {
                    trackPollCreationCancelled: V
                } = (0, h.useTrackPollCreationEvents)(f, r, S, M), Y = n.useRef([]), {
                    togglePollExpressionPicker: z,
                    lastActiveParentIndex: K
                } = (0, T.default)(M), X = n.useCallback(() => {
                    o(null != K, "Must have an active input");
                    let e = Y.current[K];
                    return o(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [K]), Z = M === d.PollLayoutTypes.DEFAULT, J = n.useCallback(() => {
                    V(), s()
                }, [s, V]), Q = n.useCallback(() => {
                    let e = f.length > 0 || r.some(e => (0, A.isAnswerFilled)(e, M));
                    e ? (0, C.default)({
                        title: I.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                        body: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                        cta: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                        closeLabel: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                        onConfirm: () => {
                            J()
                        }
                    }) : J()
                }, [J, r, f, M]);
                return n.useEffect(() => {
                    (0, u.updateModal)(g.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(O, {
                        ...e,
                        channel: t
                    }), Q)
                }, [Q, t]), (0, l.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    className: P.container,
                    transitionState: a,
                    "aria-labelledby": N,
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: P.header,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-lg/semibold",
                            className: P.headerText,
                            id: N,
                            children: I.default.Messages.CREATE_POLL_HEADING
                        }), (0, l.jsx)(u.ModalCloseButton, {
                            onClick: Q
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        className: P.content,
                        children: [null != H && (0, l.jsx)(u.FormErrorBlock, {
                            children: H.getAnyErrorMessage()
                        }), (0, l.jsx)(u.TextInput, {
                            "aria-label": I.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
                            placeholder: I.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: f,
                            inputClassName: P.questionInput,
                            onChange: v,
                            maxLength: g.MAX_POLL_QUESTION_LENGTH,
                            autoFocus: !0
                        }), (0, l.jsx)(p.default, {
                            selectedLayoutType: M,
                            onSelectedLayoutType: j
                        }), (0, l.jsxs)("div", {
                            className: i(P.answerInputsContainer, Z ? P.defaultContainer : P.imageOnlyContainer),
                            role: "group",
                            "aria-label": I.default.Messages.POLL_OPTIONS_ARIA,
                            children: [r.map((e, a) => (0, l.jsx)(L.default, {
                                answer: e,
                                channelId: t.id,
                                index: a,
                                ref: e => Y.current[a] = e,
                                handleTogglePollExpressionPicker: () => z(a),
                                layout: M,
                                onAnswerTextChange: D,
                                onRemoveAnswer: B
                            }, e.uploadId)), b && (0, l.jsxs)(u.Clickable, {
                                className: Z ? P.addAnswerButtonDefault : P.addAnswerButtonImageOnly,
                                onClick: b ? w : void 0,
                                "aria-label": I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                                children: [(0, l.jsx)(m.default, {
                                    className: Z ? P.addAnswerIconDefault : P.addAnswerIconImageOnly
                                }), Z && (0, l.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        className: P.footer,
                        children: [(0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 24,
                            value: S,
                            onChange: (e, t) => k(t),
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: I.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, l.jsx)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: P.postButton,
                            onClick: F,
                            submitting: W,
                            disabled: !y,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: P.postButtonText,
                                children: I.default.Messages.CREATE_POLL_POST
                            })
                        })]
                    }), (0, l.jsx)(x.default, {
                        channel: t,
                        layout: M,
                        parentModalKey: g.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: U,
                        onGifSelect: G,
                        positionTargetRef: X,
                        lastActiveInputIndex: K
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
                i = a.n(s),
                r = a("77078"),
                o = a("418009"),
                u = a("95689"),
                c = a("100300"),
                d = a("782340"),
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
            var m = function(e) {
                let {
                    selectedLayoutType: t,
                    onSelectedLayoutType: a
                } = e, s = (0, r.useRadioGroup)({
                    orientation: "horizontal"
                }), i = n.useMemo(() => [{
                    name: o.PollLayoutTypes.DEFAULT,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                    icon: c.default
                }, {
                    name: o.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                    icon: u.default
                }], []), m = e => {
                    a(e)
                };
                return (0, l.jsx)("div", {
                    className: E.container,
                    "aria-label": d.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
                    ...s,
                    children: i.map(e => {
                        let a = e.icon;
                        return (0, l.jsx)(f, {
                            label: e.label,
                            isSelected: e.name === t,
                            onClick: () => m(e.name),
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
                    return c
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("627445"),
                i = a.n(s),
                r = a("241488"),
                o = a("254398"),
                u = a("264317");

            function c(e) {
                let {
                    channel: t,
                    layout: a,
                    parentModalKey: s,
                    lastActiveInputIndex: c,
                    onEmojiSelect: d,
                    onGifSelect: E,
                    positionTargetRef: f
                } = e, {
                    showPollExpressionPicker: m,
                    closePollExpressionPicker: A,
                    chatInputType: _
                } = (0, u.default)(a), L = n.useCallback(e => {
                    i(null != c, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && E(t.id, c, (0, o.makeTenorProxyURL)(e.gifSrc)), A()
                }, [A, c, E, t.id]), p = n.useCallback(e => {
                    i(null != c, "Expected to have an active input"), i(null != e, "Expected to have an emoji"), d(e, c), A()
                }, [c, d, A]), x = n.useCallback(() => {}, []);
                return m ? (0, l.jsx)(r.default, {
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
                    image: c
                } = e, d = null == c ? void 0 : c.emoji, E = (null == c ? void 0 : null === (t = c.gifAttachmentState) || void 0 === t ? void 0 : t.status) === r.PollGifUploadAttachmentStatus.PREPARING, f = (0, n.useStateFromStores)([i.default], () => i.default.getUpload(o, u, s.DraftType.Poll)), [m, A] = l.useState(), [_, L] = l.useState("");
                return l.useEffect(() => {
                    var e;
                    if ((null == f ? void 0 : null === (e = f.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(f.item.file);
                    return A(t), L(f.item.file.name), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == f ? void 0 : null === (a = f.item) || void 0 === a ? void 0 : a.file]), {
                    emoji: d,
                    isLoadingGif: E,
                    hasUpload: null != f,
                    gifUrl: m,
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
                let [t, a] = l.useState(null), [u, c, d, E] = (0, r.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.lastActiveView, e.pickerId], n.default), f = i.ChatInputTypes.CREATE_POLL, m = null != u && null != c && c === f, A = null != d ? d : e === s.PollLayoutTypes.DEFAULT ? o.ExpressionPickerViewType.EMOJI : o.ExpressionPickerViewType.GIF, _ = l.useCallback(e => {
                    a(e), (0, r.toggleExpressionPicker)(A, f)
                }, [A, f]), L = l.useCallback(() => {
                    (0, r.closeExpressionPicker)(f)
                }, [f]);
                return l.useEffect(() => () => {
                    (0, r.closeExpressionPicker)(f)
                }, [f]), {
                    showPollExpressionPicker: m,
                    togglePollExpressionPicker: _,
                    closePollExpressionPicker: L,
                    pollExpressionPickerId: E,
                    chatInputType: f,
                    lastActiveParentIndex: t
                }
            }
        },
        375614: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useTrackPollCreationEvents: function() {
                    return i
                }
            }), a("424973");
            var l = a("884691"),
                n = a("716241"),
                s = a("49111");

            function i(e, t, a, i) {
                let r = l.useCallback(() => {
                    let l = [],
                        r = 0,
                        o = 0,
                        u = 0;
                    t.forEach(e => {
                        null != e.text && l.push(e.text);
                        let t = e.image;
                        null != t && (null != t.emoji ? o += 1 : null != t.stickerId ? u += 1 : null != t.gifAttachmentState && (r += 1))
                    }), n.default.trackWithMetadata(s.AnalyticEvents.POLL_CREATION_CANCELLED, {
                        question_text: e,
                        answers_text: l,
                        answers_count: t.length,
                        attachments_count: r,
                        emojis_count: o,
                        stickers_count: u,
                        allow_multiselect: a,
                        layout_type: i
                    })
                }, [t, a, e, i]);
                return {
                    trackPollCreationCancelled: r
                }
            }
        }
    }
]);