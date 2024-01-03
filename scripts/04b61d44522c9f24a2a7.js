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
                r = a("314743"),
                i = a("172402"),
                o = a("914271"),
                u = a("847511"),
                c = a("562228"),
                d = a("186859");

            function E(e, t) {
                let a = e.id,
                    E = l.useRef();
                null == E.current && (E.current = [(0, c.generateEmptyPollAnswer)(), (0, c.generateEmptyPollAnswer)()]);
                let [f, A] = l.useState(E.current), [m, L] = l.useState(""), [p, T] = l.useState(n.PollLayoutTypes.DEFAULT), [x, C] = l.useState(!1), [O, R] = l.useState(d.PollDurations.ONE_DAY), I = f.filter(e => (0, c.isAnswerFilled)(e, p)), N = f.filter(e => (0, c.isIncompleteAnswer)(e, p)), h = m.length > 0 && I.length >= d.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === N.length, [P, {
                    error: g,
                    loading: v
                }] = (0, s.default)(u.default.createPoll), M = f.length < d.MAX_NUMBER_OF_ANSWERS_PER_POLL, j = l.useCallback(() => {
                    M && A(e => [...e, (0, c.generateEmptyPollAnswer)()])
                }, [M]), S = l.useCallback((e, t) => {
                    A(a => {
                        let l = [...a];
                        return l[t] = {
                            ...l[t],
                            text: e
                        }, l
                    })
                }, []), D = l.useCallback((e, t, a) => {
                    A(l => {
                        var n;
                        let s = [...l];
                        return s[t] = {
                            ...s[t],
                            image: e,
                            uploadId: null != a ? a : null === (n = s[t]) || void 0 === n ? void 0 : n.uploadId
                        }, s
                    })
                }, []), b = l.useCallback((e, t, a) => {
                    var l, n;
                    let s = f[t],
                        i = null === (n = f[t]) || void 0 === n ? void 0 : null === (l = n.image) || void 0 === l ? void 0 : l.gifAttachmentState;
                    null != s && null != i && i.gifUrl !== a && o.removePollUploadAttachment(e, s.uploadId, (0, r.getFileNameFromGifUrl)(s.uploadId, i.gifUrl))
                }, [f]), k = l.useCallback(async (e, t, a) => {
                    var l, n;
                    let s = null !== (n = null === (l = f[t]) || void 0 === l ? void 0 : l.uploadId) && void 0 !== n ? n : (0, c.generateUploadId)();
                    b(e, t), D(_(a, i.PollGifUploadAttachmentStatus.PREPARING), t, s);
                    let r = await o.handlePollGifAttachmentAdd(e, s, a);
                    if (null == r) {
                        D(_(a, i.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    D(_(a, i.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [f, D, b]), y = l.useCallback((e, t) => {
                    b(a, t), D({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [a, D, b]), U = l.useCallback(e => {
                    b(a, e), A(t => {
                        let a = [...t];
                        return a.splice(e, 1), a
                    })
                }, [a, b]);
                l.useEffect(() => () => {
                    o.removeAllPollUploadAttachments(a)
                }, [a]);
                let w = l.useCallback(async () => {
                    await P({
                        channel: e,
                        question: m,
                        answers: I,
                        allowMultiSelect: x,
                        duration: O,
                        layout: p,
                        onClose: t
                    })
                }, [m, I, x, O, P, e, p, t]);
                return {
                    answers: f,
                    question: m,
                    setQuestion: L,
                    selectedLayoutType: p,
                    setSelectedLayoutType: T,
                    allowMultiSelect: x,
                    setAllowMultiSelect: C,
                    duration: O,
                    setDuration: R,
                    canPost: h,
                    canAddMoreAnswers: M,
                    handleAddAnswer: j,
                    handleAnswerTextChange: S,
                    handleGifSelect: k,
                    handleEmojiSelect: y,
                    handleRemoveAnswer: U,
                    createPoll: w,
                    submitting: v,
                    createPollError: g
                }
            }

            function _(e, t) {
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
        741138: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var l = a("186859"),
                n = a("782340");

            function s() {
                return Object.freeze({
                    [l.PollDurations.ONE_HOUR]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_1_HOUR,
                    [l.PollDurations.ONE_DAY]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_24_HOURS,
                    [l.PollDurations.THREE_DAYS]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_3_DAYS,
                    [l.PollDurations.SEVEN_DAYS]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_7_DAYS
                })
            }
        },
        362415: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useTrackPollCreationEvents: function() {
                    return r
                }
            }), a("424973");
            var l = a("884691"),
                n = a("716241"),
                s = a("49111");

            function r(e, t, a, r) {
                let i = l.useCallback(() => {
                    let l = [],
                        i = 0,
                        o = 0,
                        u = 0;
                    t.forEach(e => {
                        null != e.text && l.push(e.text);
                        let t = e.image;
                        null != t && (null != t.emoji ? o += 1 : null != t.stickerId ? u += 1 : null != t.gifAttachmentState && (i += 1))
                    }), n.default.trackWithMetadata(s.AnalyticEvents.POLL_CREATION_CANCELLED, {
                        question_text: e,
                        answers_text: l,
                        answers_count: t.length,
                        attachments_count: i,
                        emojis_count: o,
                        stickers_count: u,
                        allow_multiselect: a,
                        layout_type: r
                    })
                }, [t, a, e, r]);
                return {
                    trackPollCreationCancelled: i
                }
            }
        },
        418298: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                PollCreationMediaPreview: function() {
                    return R
                },
                default: function() {
                    return N
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                r = a.n(s),
                i = a("597287"),
                o = a("77078"),
                u = a("418009"),
                c = a("430568"),
                d = a("9560"),
                E = a("858619"),
                _ = a("46829"),
                f = a("228220"),
                A = a("562228"),
                m = a("714411"),
                L = a("356581"),
                p = a("264317"),
                T = a("186859"),
                x = a("782340"),
                C = a("177037"),
                O = a("877055");

            function R(e) {
                let {
                    hasUpload: t,
                    gifUrl: a,
                    gifFilename: n,
                    imageClassName: s,
                    emoji: r,
                    emojiClassName: i,
                    fallback: o
                } = e;
                return t ? (0, l.jsx)("img", {
                    src: a,
                    alt: n,
                    className: s
                }) : null != r ? (0, l.jsx)(c.default, {
                    className: i,
                    emojiId: r.id,
                    emojiName: r.type === E.EmojiTypes.UNICODE ? r.surrogates : r.name,
                    animated: r.animated
                }) : (0, l.jsx)(l.Fragment, {
                    children: o
                })
            }

            function I(e) {
                let {
                    channelId: t,
                    uploadId: a,
                    buttonImage: s,
                    layout: i,
                    handleTogglePollExpressionPicker: c,
                    answerIndex: d
                } = e, {
                    pollExpressionPickerId: E
                } = (0, p.default)(i), {
                    emoji: f,
                    isLoadingGif: m,
                    hasUpload: T,
                    gifUrl: O,
                    gifFilename: I
                } = (0, L.default)({
                    channelId: t,
                    uploadId: a,
                    image: s
                }), N = i === u.PollLayoutTypes.DEFAULT, h = n.useMemo(() => T ? x.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: (0, A.filterOutUUID)(I),
                    answerNumber: d + 1
                }) : null != f ? x.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: f.name,
                    answerNumber: d + 1
                }) : x.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
                    answerNumber: d + 1
                }), [T, f, d, I]);
                return m ? (0, l.jsx)(o.Spinner, {
                    className: N ? C.spinnerWrapperDefault : C.spinnerWrapperImageOnly
                }) : (0, l.jsx)(o.Clickable, {
                    onClick: c,
                    "aria-controls": E,
                    "aria-label": h,
                    className: i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? C.expressionPickerButtonImageOnly : C.expressionPickerButtonDefault,
                    "data-menu-item": "true",
                    children: (0, l.jsx)(R, {
                        hasUpload: T,
                        gifUrl: O,
                        gifFilename: I,
                        imageClassName: r(C.media, N ? C.gifDefault : C.gifJumbo),
                        emoji: f,
                        emojiClassName: r(C.media, N ? C.emojiDefault : C.emojiJumbo),
                        fallback: (0, l.jsx)(_.default, {
                            className: N ? C.expressionPickerIconDefault : C.expressionPickerIconImageOnly
                        })
                    })
                })
            }
            var N = n.forwardRef(function(e, t) {
                let {
                    channelId: n,
                    answer: s,
                    index: c,
                    layout: E,
                    onAnswerTextChange: _,
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
                            onAnswerTextChange: _,
                            ...t
                        })
                    })
                }, R = (0, l.jsx)(I, {
                    channelId: n,
                    buttonImage: s.image,
                    layout: E,
                    handleTogglePollExpressionPicker: A,
                    uploadId: s.uploadId,
                    answerIndex: c
                }), N = null != s.text && s.text.length > 0;
                return (0, l.jsx)(l.Fragment, {
                    children: E === u.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
                        className: C.answerRow,
                        children: [(0, l.jsxs)("div", {
                            className: r(O.formInput, C.defaultContainer),
                            ref: t,
                            children: [R, (0, l.jsx)(o.TextInput, {
                                "aria-label": x.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
                                    answerNumber: c + 1
                                }),
                                placeholder: x.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                                value: s.text,
                                className: C.defaultTextInput,
                                inputClassName: r(O.formInput, C.defaultTextInput),
                                onChange: e => _(e, c),
                                maxLength: T.MAX_POLL_ANSWER_LENGTH
                            })]
                        }), (0, l.jsx)(o.Clickable, {
                            onClick: () => L(c),
                            className: C.removeAnswerButtonDefault,
                            "aria-label": x.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                answerNumber: c + 1
                            }),
                            children: (0, l.jsx)(f.default, {
                                className: C.trashIcon,
                                "aria-hidden": !0
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: C.imageOnlyContainer,
                        ref: t,
                        children: [(0, l.jsxs)("div", {
                            className: C.imagePreviewContainer,
                            children: [R, N && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    className: C.altBadge,
                                    "aria-hidden": !0,
                                    children: x.default.Messages.IMAGE_ALT
                                }), (0, l.jsxs)("div", {
                                    onClick: p,
                                    children: [(0, l.jsx)(i.VisuallyHidden, {
                                        children: x.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
                                    }), (0, l.jsx)(o.Text, {
                                        variant: "text-xxs/medium",
                                        className: C.altTextPreview,
                                        children: s.text
                                    })]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: C.imageOnlyAnswerActionBar,
                            children: [(0, l.jsx)(d.default, {
                                tooltip: x.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                                "aria-label": N ? x.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
                                    answerNumber: c + 1
                                }) : x.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
                                    answerNumber: c + 1
                                }),
                                onClick: p,
                                children: (0, l.jsx)(m.ImageAltIcon, {
                                    "aria-hidden": !0
                                })
                            }), (0, l.jsx)(d.default, {
                                tooltip: x.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                                "aria-label": x.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                    answerNumber: c + 1
                                }),
                                onClick: () => L(c),
                                dangerous: !0,
                                children: (0, l.jsx)(f.default, {
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
                    return M
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                r = a.n(s),
                i = a("627445"),
                o = a.n(i),
                u = a("77078"),
                c = a("33112"),
                d = a("418009"),
                E = a("428958"),
                _ = a("476765"),
                f = a("151185"),
                A = a("562228"),
                m = a("104182"),
                L = a("741138"),
                p = a("362415"),
                T = a("418298"),
                x = a("612805"),
                C = a("53013"),
                O = a("233365"),
                R = a("264317"),
                I = a("186859"),
                N = a("660516"),
                h = a("782340"),
                P = a("877055");
            let g = (0, _.uid)();

            function v(e) {
                let {
                    selectedDuration: t,
                    onSelect: a
                } = e, n = (0, L.default)(), s = n[t];
                return (0, l.jsxs)("div", {
                    className: P.duration,
                    children: [(0, l.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "label",
                        "aria-hidden": !0,
                        children: h.default.Messages.CREATE_POLL_TEXT_PRECEDING_DURATION_SELECTION
                    }), (0, l.jsx)(u.Select, {
                        "aria-label": h.default.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({
                            duration: s
                        }),
                        className: P.durationSelect,
                        options: Object.entries(n).map(e => {
                            let [t, a] = e;
                            return {
                                label: a,
                                value: parseInt(t)
                            }
                        }),
                        isSelected: e => e === t,
                        select: a,
                        serialize: e => "".concat(e),
                        renderOptionLabel: e => (0, l.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: e.label
                        }),
                        popoutPosition: "top"
                    })]
                })
            }

            function M(e) {
                let {
                    channel: t,
                    transitionState: a,
                    onClose: s
                } = e;
                (0, E.default)({
                    type: N.ImpressionTypes.MODAL,
                    name: c.ImpressionNames.POLL_EDITOR_VIEWED
                });
                let {
                    answers: i,
                    question: _,
                    setQuestion: L,
                    selectedLayoutType: j,
                    setSelectedLayoutType: S,
                    allowMultiSelect: D,
                    setAllowMultiSelect: b,
                    duration: k,
                    setDuration: y,
                    canPost: U,
                    canAddMoreAnswers: w,
                    handleAddAnswer: G,
                    handleAnswerTextChange: B,
                    handleEmojiSelect: F,
                    handleGifSelect: H,
                    handleRemoveAnswer: W,
                    createPoll: V,
                    createPollError: Y,
                    submitting: z
                } = (0, m.default)(t, s), {
                    trackPollCreationCancelled: X
                } = (0, p.useTrackPollCreationEvents)(_, i, D, j), K = n.useRef([]), {
                    togglePollExpressionPicker: Z,
                    lastActiveParentIndex: J
                } = (0, R.default)(j), Q = n.useCallback(() => {
                    o(null != J, "Must have an active input");
                    let e = K.current[J];
                    return o(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [J]), q = j === d.PollLayoutTypes.DEFAULT, $ = n.useCallback(() => {
                    X(), s()
                }, [s, X]), ee = n.useCallback(() => {
                    let e = _.length > 0 || i.some(e => (0, A.isAnswerFilled)(e, j));
                    e ? (0, O.default)({
                        title: h.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                        body: h.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                        cta: h.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                        closeLabel: h.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                        onConfirm: () => {
                            $()
                        }
                    }) : $()
                }, [$, i, _, j]);
                return n.useEffect(() => {
                    (0, u.updateModal)(I.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(M, {
                        ...e,
                        channel: t
                    }), ee)
                }, [ee, t]), (0, l.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    className: P.container,
                    transitionState: a,
                    "aria-labelledby": g,
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: P.header,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-lg/semibold",
                            className: P.headerText,
                            id: g,
                            children: h.default.Messages.CREATE_POLL_HEADING
                        }), (0, l.jsx)(u.ModalCloseButton, {
                            onClick: ee
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        className: P.content,
                        children: [null != Y && (0, l.jsx)(u.FormErrorBlock, {
                            children: Y.getAnyErrorMessage()
                        }), (0, l.jsx)(u.TextInput, {
                            "aria-label": h.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
                            placeholder: h.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: _,
                            inputClassName: P.questionInput,
                            onChange: L,
                            maxLength: I.MAX_POLL_QUESTION_LENGTH,
                            autoFocus: !0
                        }), (0, l.jsx)(x.default, {
                            selectedLayoutType: j,
                            onSelectedLayoutType: S
                        }), (0, l.jsxs)("div", {
                            className: r(P.answerInputsContainer, q ? P.defaultContainer : P.imageOnlyContainer),
                            role: "group",
                            "aria-label": h.default.Messages.POLL_OPTIONS_ARIA,
                            children: [i.map((e, a) => (0, l.jsx)(T.default, {
                                answer: e,
                                channelId: t.id,
                                index: a,
                                ref: e => K.current[a] = e,
                                handleTogglePollExpressionPicker: () => Z(a),
                                layout: j,
                                onAnswerTextChange: B,
                                onRemoveAnswer: W
                            }, e.uploadId)), w && (0, l.jsxs)(u.Clickable, {
                                className: q ? P.addAnswerButtonDefault : P.addAnswerButtonImageOnly,
                                onClick: w ? G : void 0,
                                "aria-label": h.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                                children: [(0, l.jsx)(f.default, {
                                    className: q ? P.addAnswerIconDefault : P.addAnswerIconImageOnly
                                }), q && (0, l.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: h.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
                                })]
                            })]
                        }), (0, l.jsx)(v, {
                            selectedDuration: k,
                            onSelect: y
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        className: P.footer,
                        children: [(0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 24,
                            value: D,
                            onChange: (e, t) => b(t),
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: h.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, l.jsx)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: P.postButton,
                            onClick: V,
                            submitting: z,
                            disabled: !U,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: P.postButtonText,
                                children: h.default.Messages.CREATE_POLL_POST
                            })
                        })]
                    }), (0, l.jsx)(C.default, {
                        channel: t,
                        layout: j,
                        parentModalKey: I.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: F,
                        onGifSelect: H,
                        positionTargetRef: Q,
                        lastActiveInputIndex: J
                    })]
                })
            }
        },
        612805: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                r = a.n(s),
                i = a("77078"),
                o = a("418009"),
                u = a("95689"),
                c = a("100300"),
                d = a("782340"),
                E = a("105335");

            function _(e) {
                let {
                    label: t,
                    isSelected: a,
                    onClick: n,
                    children: s
                } = e, o = (0, i.useRadioItem)({
                    isSelected: a,
                    label: t
                });
                return (0, l.jsx)(i.Clickable, {
                    ...o,
                    onClick: n,
                    className: r(E.option, a && E.optionSelected),
                    children: s
                })
            }
            var f = function(e) {
                let {
                    selectedLayoutType: t,
                    onSelectedLayoutType: a
                } = e, s = (0, i.useRadioGroup)({
                    orientation: "horizontal"
                }), r = n.useMemo(() => [{
                    name: o.PollLayoutTypes.DEFAULT,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                    icon: c.default
                }, {
                    name: o.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                    icon: u.default
                }], []), f = e => {
                    a(e)
                };
                return (0, l.jsx)("div", {
                    className: E.container,
                    "aria-label": d.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
                    ...s,
                    children: r.map(e => {
                        let a = e.icon;
                        return (0, l.jsx)(_, {
                            label: e.label,
                            isSelected: e.name === t,
                            onClick: () => f(e.name),
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
                r = a.n(s),
                i = a("241488"),
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
                    positionTargetRef: _
                } = e, {
                    showPollExpressionPicker: f,
                    closePollExpressionPicker: A,
                    chatInputType: m
                } = (0, u.default)(a), L = n.useCallback(e => {
                    r(null != c, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && E(t.id, c, (0, o.makeTenorProxyURL)(e.gifSrc)), A()
                }, [A, c, E, t.id]), p = n.useCallback(e => {
                    r(null != c, "Expected to have an active input"), r(null != e, "Expected to have an emoji"), d(e, c), A()
                }, [c, d, A]), T = n.useCallback(() => {}, []);
                return f ? (0, l.jsx)(i.default, {
                    positionTargetRef: _,
                    type: m,
                    hideGifFavorites: !0,
                    includeCreateEmojiButton: !1,
                    onSelectGIF: L,
                    onSelectEmoji: p,
                    onSelectSticker: T,
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
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("669491"),
                s = a("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "string" == typeof r ? r : r.css,
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
                r = a("585722"),
                i = a("172402");

            function o(e) {
                var t, a;
                let {
                    channelId: o,
                    uploadId: u,
                    image: c
                } = e, d = null == c ? void 0 : c.emoji, E = (null == c ? void 0 : null === (t = c.gifAttachmentState) || void 0 === t ? void 0 : t.status) === i.PollGifUploadAttachmentStatus.PREPARING, _ = (0, n.useStateFromStores)([r.default], () => r.default.getUpload(o, u, s.DraftType.Poll)), [f, A] = l.useState(), [m, L] = l.useState("");
                return l.useEffect(() => {
                    var e;
                    if ((null == _ ? void 0 : null === (e = _.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(_.item.file);
                    return A(t), L(_.item.file.name), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == _ ? void 0 : null === (a = _.item) || void 0 === a ? void 0 : a.file]), {
                    emoji: d,
                    isLoadingGif: E,
                    hasUpload: null != _,
                    gifUrl: f,
                    gifFilename: m
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
                r = a("850391"),
                i = a("538282"),
                o = a("13030");

            function u(e) {
                let [t, a] = l.useState(null), [u, c, d, E] = (0, i.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.lastActiveView, e.pickerId], n.default), _ = r.ChatInputTypes.CREATE_POLL, f = null != u && null != c && c === _, A = null != d ? d : e === s.PollLayoutTypes.DEFAULT ? o.ExpressionPickerViewType.EMOJI : o.ExpressionPickerViewType.GIF, m = l.useCallback(e => {
                    a(e), (0, i.toggleExpressionPicker)(A, _)
                }, [A, _]), L = l.useCallback(() => {
                    (0, i.closeExpressionPicker)(_)
                }, [_]);
                return l.useEffect(() => () => {
                    (0, i.closeExpressionPicker)(_)
                }, [_]), {
                    showPollExpressionPicker: f,
                    togglePollExpressionPicker: m,
                    closePollExpressionPicker: L,
                    pollExpressionPickerId: E,
                    chatInputType: _,
                    lastActiveParentIndex: t
                }
            }
        }
    }
]);