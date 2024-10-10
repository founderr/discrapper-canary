n.d(t, {
    Z: function () {
        return W;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(430742),
    u = n(144144),
    d = n(738619),
    h = n(561472),
    p = n(607070),
    m = n(100527),
    _ = n(906732),
    f = n(541716),
    E = n(752305),
    g = n(893718),
    C = n(303628),
    I = n(313201),
    T = n(967128),
    x = n(665149),
    v = n(294218),
    S = n(913663),
    N = n(268350),
    A = n(695346),
    Z = n(592125),
    M = n(703558),
    b = n(375954),
    R = n(496675),
    L = n(117530),
    j = n(459273),
    P = n(838440),
    O = n(127654),
    y = n(241309),
    D = n(928477),
    U = n(456077),
    k = n(488131),
    w = n(602034),
    B = n(981631),
    H = n(689938),
    G = n(796232),
    V = n(966319);
let F = f.I.THREAD_CREATION;
function W(e) {
    let { parentChannelId: t, parentMessageId: n, location: s } = e,
        a = (0, r.e7)([Z.Z], () => Z.Z.getChannel(t)),
        { analyticsLocations: l } = (0, _.ZP)(m.Z.CREATE_THREAD);
    return null == a
        ? null
        : (0, i.jsx)(_.Gt, {
              value: l,
              children: (0, i.jsx)(j.I3, {
                  children: (0, i.jsxs)('section', {
                      'aria-label': H.Z.Messages.CREATE_THREAD,
                      className: G.container,
                      children: [
                          (0, i.jsx)(h.Z, {
                              channel: a,
                              draftType: M.d.FirstThreadMessage
                          }),
                          (0, i.jsxs)(x.ZP, {
                              toolbar: (0, i.jsx)(x.ZP.Icon, {
                                  icon: o.XSmallIcon,
                                  tooltip: H.Z.Messages.CLOSE,
                                  onClick: () => (0, k.NK)(t)
                              }),
                              children: [
                                  (0, i.jsx)(x.ZP.Icon, {
                                      icon: o.ThreadIcon,
                                      disabled: !0,
                                      'aria-label': H.Z.Messages.THREAD
                                  }),
                                  (0, i.jsx)(x.ZP.Title, { children: H.Z.Messages.NEW_THREAD })
                              ]
                          }),
                          (0, i.jsx)(z, {
                              parentChannel: a,
                              parentMessageId: n,
                              location: s
                          })
                      ]
                  })
              })
          });
}
function z(e) {
    let { parentChannel: t, parentMessageId: n, location: a } = e,
        u = (0, r.e7)([p.Z], () => p.Z.messageGroupSpacing),
        h = (function () {
            let e = s.useContext(j.oo);
            return s.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        })(),
        {
            threadSettings: m,
            setThreadSettings: _,
            updateThreadSettings: f
        } = (function (e, t) {
            let [n, i] = s.useState({}),
                a = s.useCallback(
                    (n) => {
                        i((e) => ({
                            ...e,
                            ...n
                        })),
                            c.Z.changeThreadSettings(e.id, {
                                ...n,
                                parentMessageId: t
                            });
                    },
                    [e.id, t]
                );
            return {
                threadSettings: n,
                setThreadSettings: i,
                updateThreadSettings: a
            };
        })(t, n),
        { textAreaState: g, setTextAreaState: C } = (function (e, t) {
            let [n, i] = s.useState((0, E.H2)());
            return (
                s.useEffect(() => {
                    function n(n) {
                        var s;
                        let a = M.Z.getDraft(e.id, M.d.FirstThreadMessage);
                        (0 === a.length || !0 === n) && i((0, E.eK)(a)), t(null !== (s = M.Z.getThreadSettings(e.id)) && void 0 !== s ? s : {});
                    }
                    return (
                        n(!0),
                        M.Z.addChangeListener(n),
                        () => {
                            M.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: i
                }
            );
        })(t, _),
        I = (0, D.vH)(t),
        {
            nameError: x,
            messageError: v,
            submit: A,
            submitting: Z
        } = (function (e) {
            let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: a, textAreaState: l, location: r } = e,
                [o, c] = s.useState(null),
                [u, d] = s.useState(null),
                [h, p] = s.useState(!1),
                m = (0, w.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: a,
                    location: r,
                    onThreadCreated: k.ok,
                    useDefaultThreadName: !0
                });
            return {
                nameError: o,
                messageError: u,
                submit: s.useCallback(
                    async (e, s, a) => {
                        var r, o, u;
                        if (h)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                        p(!0), null == e && (e = l.textValue), (e = e.trim()), (null == s || 0 === s.length) && (s = null === (r = S.Z.getStickerPreview(t.id, F.drafts.type)) || void 0 === r ? void 0 : r.map((e) => e.id)), (null == a || 0 === a.length) && (a = L.Z.getUploads(t.id, M.d.FirstThreadMessage));
                        let _ = null !== (o = i.name) && void 0 !== o ? o : '',
                            f = null == n && 0 === _.length,
                            E = '' === e && (null == s || 0 === s.length) && 0 === a.length;
                        if ((c(f ? (0, y.V_)() : null), d(E ? (0, y.T4)() : null), f || E))
                            return (
                                p(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        if (null == n) {
                            let { valid: n } = await (0, P.v)({
                                content: e,
                                stickers: s,
                                uploads: a,
                                type: F,
                                channel: t
                            });
                            if (!n)
                                return (
                                    p(!1),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    }
                                );
                        }
                        try {
                            await m(e, s, a);
                        } catch (e) {
                            return (
                                (null === (u = e.body) || void 0 === u ? void 0 : u.code) === B.evJ.AUTOMOD_TITLE_BLOCKED && c((0, y.Gx)(e.body, t)),
                                p(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        }
                        return (
                            (0, N.qB)(t.id, F.drafts.type),
                            p(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    },
                    [m, l.textValue, i.name, n, t, h]
                ),
                submitting: h
            };
        })({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: m,
            privateThreadMode: I,
            textAreaState: g,
            location: a
        }),
        b = (0, D.oD)(m, I) ? o.ThreadLockIcon : o.ThreadIcon;
    return (0, i.jsx)('div', {
        className: G.chat,
        onMouseDown: h,
        onFocus: h,
        children: (0, i.jsx)('div', {
            className: l()(G.messagesWrapper, 'group-spacing-'.concat(u)),
            children: (0, i.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), A();
                },
                className: G.form,
                children: [
                    (0, i.jsx)(o.Scroller, {
                        className: G.scroller,
                        fade: !0,
                        children: (0, i.jsxs)('div', {
                            className: G.scrollerInner,
                            children: [
                                (0, i.jsxs)(T.ZP, {
                                    channelId: 'create-thread-null',
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: V.iconWrapper,
                                            children: (0, i.jsx)(b, { className: V.icon })
                                        }),
                                        (0, i.jsx)(K, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: m,
                                            updateThreadSettings: f,
                                            error: x,
                                            disabled: Z
                                        }),
                                        t.type === B.d4z.GUILD_TEXT
                                            ? (0, i.jsx)(Y, {
                                                  startedFromMessage: null != n,
                                                  threadSettings: m,
                                                  updateThreadSettings: f,
                                                  privateThreadMode: I
                                              })
                                            : null
                                    ]
                                }),
                                (0, i.jsx)(X, {
                                    parentChannel: t,
                                    parentMessageId: n
                                })
                            ]
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: G.submitContainer,
                        children: [
                            (0, i.jsx)(q, {
                                parentChannel: t,
                                textAreaState: g,
                                setTextAreaState: C,
                                submit: A,
                                error: v
                            }),
                            (0, i.jsx)(d.Z, {
                                channel: t,
                                isThreadCreation: !0
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function Y(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: s, privateThreadMode: a } = e,
        r = (0, D.oD)(n, a),
        c = (0, i.jsx)('div', {
            className: G.privateThreadFormTitle,
            children: (0, i.jsx)('span', {
                className: G.privateThreadFormTitleText,
                children: H.Z.Messages.PRIVATE_THREAD
            })
        }),
        u = (0, i.jsx)(o.Checkbox, {
            className: l()(G.checkbox),
            type: o.Checkbox.Types.INVERTED,
            disabled: a === D.Jw.PrivateOnly,
            value: r,
            onChange: (e, t) => s({ isPrivate: t }),
            children: (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: H.Z.Messages.FORM_THREAD_PRIVATE_THREAD_SECTION_LABEL
            })
        });
    return t || a === D.Jw.Disabled
        ? null
        : (0, i.jsxs)(o.FormSection, {
              title: c,
              className: G.formSection,
              children: [
                  u,
                  r
                      ? (0, i.jsx)(o.Text, {
                            className: G.privateThreadDescription,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: H.Z.Messages.FORM_THREAD_PRIVATE_THREAD_DESCRIPTION
                        })
                      : null
              ]
          });
}
function K(e) {
    var t;
    let { parentChannel: n, parentMessageId: s, threadSettings: a, updateThreadSettings: l, error: r, disabled: c } = e,
        d = null !== (t = a.name) && void 0 !== t ? t : '',
        h = (0, y.Op)(r, { content: d }),
        p = (0, D.Od)(n, s),
        m = null != s,
        _ = (0, I.Dt)();
    return (0, i.jsx)(o.FormSection, {
        tag: 'label',
        htmlFor: _,
        title: H.Z.Messages.THREAD_NAME + (m ? ' (Optional)' : ''),
        className: G.formSection,
        children: (0, i.jsx)(o.TextInput, {
            value: d,
            id: _,
            placeholder: '' !== p ? p : H.Z.Messages.FORM_THREAD_NAME_PLACEHOLDER,
            maxLength: B.HN8,
            onChange: (e) => {
                l({ name: (0, U.Z)(e, !1) }), '' !== e ? u.Z.startTyping(n.id) : u.Z.stopTyping(n.id);
            },
            onBlur: () => {
                let e = (0, U.Z)(d, !0);
                e !== d && l({ name: e });
            },
            error: h,
            disabled: c
        })
    });
}
function q(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: a, submit: d, error: h } = e,
        [p, m] = s.useState(!0),
        _ = s.useCallback(() => m(!0), []),
        f = s.useCallback(() => m(!1), []),
        E = s.useCallback(
            (e, n, i) => {
                c.Z.saveDraft(t.id, n, M.d.FirstThreadMessage),
                    a(
                        (e) => (
                            '' !== n && e.textValue !== n ? u.Z.startTyping(t.id) : '' === n && u.Z.stopTyping(t.id),
                            {
                                textValue: n,
                                richValue: i
                            }
                        )
                    );
            },
            [t.id, a]
        ),
        I = s.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return d(t, i, n);
            },
            [d]
        );
    (0, j.yp)({
        event: B.CkL.TEXTAREA_FOCUS,
        handler: _
    }),
        (0, j.yp)({
            event: B.CkL.TEXTAREA_BLUR,
            handler: f
        });
    let T = (0, r.e7)([R.Z], () => R.Z.can(B.Plq.ATTACH_FILES, t)),
        x = (0, y.Op)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.Z, {
                channelId: t.id,
                type: F,
                canAttachFiles: T
            }),
            (0, i.jsx)('div', {
                className: G.starterMessageError,
                children: (0, i.jsx)(o.InputError, { error: x })
            }),
            (0, i.jsx)(g.Z, {
                type: F,
                channel: t,
                placeholder: H.Z.Messages.FORM_THREAD_STARTER_MESSAGE_PLACEHOLDER,
                textValue: n.textValue,
                richValue: n.richValue,
                focused: p,
                className: G.channelTextArea,
                innerClassName: l()(G.channelTextAreaInner, { [G.channelTextAreaInnerError]: null != x }),
                onFocus: _,
                onBlur: f,
                onChange: E,
                onSubmit: I,
                promptToUpload: O.d
            })
        ]
    });
}
function X(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        s = (0, r.e7)([b.Z], () => (null == n ? null : b.Z.getMessage(t.id, n))),
        a = A.jU.useSetting();
    return null != s
        ? (0, i.jsx)(v.Z, {
              className: G.messagePreview,
              message: s,
              channel: t,
              compact: a,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0
          })
        : null;
}
