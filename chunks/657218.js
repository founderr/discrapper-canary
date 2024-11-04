n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(430742),
    u = n(144144),
    d = n(738619),
    h = n(561472),
    m = n(607070),
    p = n(100527),
    f = n(906732),
    g = n(541716),
    C = n(752305),
    x = n(893718),
    v = n(303628),
    _ = n(313201),
    I = n(967128),
    E = n(665149),
    b = n(294218),
    S = n(913663),
    Z = n(268350),
    T = n(695346),
    N = n(592125),
    j = n(703558),
    A = n(375954),
    y = n(496675),
    P = n(117530),
    M = n(459273),
    R = n(838440),
    L = n(127654),
    k = n(241309),
    O = n(928477),
    w = n(456077),
    D = n(488131),
    U = n(602034),
    B = n(981631),
    H = n(388032),
    F = n(796232),
    G = n(966319);
let V = g.I.THREAD_CREATION;
function z(e) {
    let { parentChannelId: t, parentMessageId: n, location: l } = e,
        r = (0, a.e7)([N.Z], () => N.Z.getChannel(t)),
        { analyticsLocations: s } = (0, f.ZP)(p.Z.CREATE_THREAD);
    return null == r
        ? null
        : (0, i.jsx)(f.Gt, {
              value: s,
              children: (0, i.jsx)(M.I3, {
                  children: (0, i.jsxs)('section', {
                      'aria-label': H.intl.string(H.t.rBIGBA),
                      className: F.container,
                      children: [
                          (0, i.jsx)(h.Z, {
                              channel: r,
                              draftType: j.d.FirstThreadMessage
                          }),
                          (0, i.jsxs)(E.ZP, {
                              toolbar: (0, i.jsx)(E.ZP.Icon, {
                                  icon: o.XSmallIcon,
                                  tooltip: H.intl.string(H.t.cpT0Cg),
                                  onClick: () => (0, D.NK)(t)
                              }),
                              children: [
                                  (0, i.jsx)(E.ZP.Icon, {
                                      icon: o.ThreadIcon,
                                      disabled: !0,
                                      'aria-label': H.intl.string(H.t['7Xm5QE'])
                                  }),
                                  (0, i.jsx)(E.ZP.Title, { children: H.intl.string(H.t['4WNcpq']) })
                              ]
                          }),
                          (0, i.jsx)(W, {
                              parentChannel: r,
                              parentMessageId: n,
                              location: l
                          })
                      ]
                  })
              })
          });
}
function W(e) {
    let { parentChannel: t, parentMessageId: n, location: r } = e,
        u = (0, a.e7)([m.Z], () => m.Z.messageGroupSpacing),
        h = (function () {
            let e = l.useContext(M.oo);
            return l.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        })(),
        {
            threadSettings: p,
            setThreadSettings: f,
            updateThreadSettings: g
        } = (function (e, t) {
            let [n, i] = l.useState({}),
                r = l.useCallback(
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
                updateThreadSettings: r
            };
        })(t, n),
        { textAreaState: x, setTextAreaState: v } = (function (e, t) {
            let [n, i] = l.useState((0, C.H2)());
            return (
                l.useEffect(() => {
                    function n(n) {
                        var l;
                        let r = j.Z.getDraft(e.id, j.d.FirstThreadMessage);
                        (0 === r.length || !0 === n) && i((0, C.eK)(r)), t(null !== (l = j.Z.getThreadSettings(e.id)) && void 0 !== l ? l : {});
                    }
                    return (
                        n(!0),
                        j.Z.addChangeListener(n),
                        () => {
                            j.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: i
                }
            );
        })(t, f),
        _ = (0, O.vH)(t),
        {
            nameError: E,
            messageError: b,
            submit: T,
            submitting: N
        } = (function (e) {
            let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: r, textAreaState: s, location: a } = e,
                [o, c] = l.useState(null),
                [u, d] = l.useState(null),
                [h, m] = l.useState(!1),
                p = (0, U.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: r,
                    location: a,
                    onThreadCreated: D.ok,
                    useDefaultThreadName: !0
                });
            return {
                nameError: o,
                messageError: u,
                submit: l.useCallback(
                    async (e, l, r) => {
                        var a, o, u;
                        if (h)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                        m(!0), null == e && (e = s.textValue), (e = e.trim()), (null == l || 0 === l.length) && (l = null === (a = S.Z.getStickerPreview(t.id, V.drafts.type)) || void 0 === a ? void 0 : a.map((e) => e.id)), (null == r || 0 === r.length) && (r = P.Z.getUploads(t.id, j.d.FirstThreadMessage));
                        let f = null !== (o = i.name) && void 0 !== o ? o : '',
                            g = null == n && 0 === f.length,
                            C = '' === e && (null == l || 0 === l.length) && 0 === r.length;
                        if ((c(g ? (0, k.V_)() : null), d(C ? (0, k.T4)() : null), g || C))
                            return (
                                m(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        if (null == n) {
                            let { valid: n } = await (0, R.v)({
                                content: e,
                                stickers: l,
                                uploads: r,
                                type: V,
                                channel: t
                            });
                            if (!n)
                                return (
                                    m(!1),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    }
                                );
                        }
                        try {
                            await p(e, l, r);
                        } catch (e) {
                            return (
                                (null === (u = e.body) || void 0 === u ? void 0 : u.code) === B.evJ.AUTOMOD_TITLE_BLOCKED && c((0, k.Gx)(e.body, t)),
                                m(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        }
                        return (
                            (0, Z.qB)(t.id, V.drafts.type),
                            m(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    },
                    [p, s.textValue, i.name, n, t, h]
                ),
                submitting: h
            };
        })({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: p,
            privateThreadMode: _,
            textAreaState: x,
            location: r
        }),
        A = (0, O.oD)(p, _) ? o.ThreadLockIcon : o.ThreadIcon;
    return (0, i.jsx)('div', {
        className: F.chat,
        onMouseDown: h,
        onFocus: h,
        children: (0, i.jsx)('div', {
            className: s()(F.messagesWrapper, 'group-spacing-'.concat(u)),
            children: (0, i.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), T();
                },
                className: F.form,
                children: [
                    (0, i.jsx)(o.Scroller, {
                        className: F.scroller,
                        fade: !0,
                        children: (0, i.jsxs)('div', {
                            className: F.scrollerInner,
                            children: [
                                (0, i.jsxs)(I.ZP, {
                                    channelId: 'create-thread-null',
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: G.iconWrapper,
                                            children: (0, i.jsx)(A, { className: G.icon })
                                        }),
                                        (0, i.jsx)(K, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: p,
                                            updateThreadSettings: g,
                                            error: E,
                                            disabled: N
                                        }),
                                        t.type === B.d4z.GUILD_TEXT
                                            ? (0, i.jsx)(Y, {
                                                  startedFromMessage: null != n,
                                                  threadSettings: p,
                                                  updateThreadSettings: g,
                                                  privateThreadMode: _
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
                        className: F.submitContainer,
                        children: [
                            (0, i.jsx)(q, {
                                parentChannel: t,
                                textAreaState: x,
                                setTextAreaState: v,
                                submit: T,
                                error: b
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
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: l, privateThreadMode: r } = e,
        a = (0, O.oD)(n, r),
        c = (0, i.jsx)('div', {
            className: F.privateThreadFormTitle,
            children: (0, i.jsx)('span', {
                className: F.privateThreadFormTitleText,
                children: H.intl.string(H.t.F1zyvb)
            })
        }),
        u = (0, i.jsx)(o.Checkbox, {
            className: s()(F.checkbox),
            type: o.Checkbox.Types.INVERTED,
            disabled: r === O.Jw.PrivateOnly,
            value: a,
            onChange: (e, t) => l({ isPrivate: t }),
            children: (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: H.intl.string(H.t.TRPp3t)
            })
        });
    return t || r === O.Jw.Disabled
        ? null
        : (0, i.jsxs)(o.FormSection, {
              title: c,
              className: F.formSection,
              children: [
                  u,
                  a
                      ? (0, i.jsx)(o.Text, {
                            className: F.privateThreadDescription,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: H.intl.string(H.t.EWXyc3)
                        })
                      : null
              ]
          });
}
function K(e) {
    var t;
    let { parentChannel: n, parentMessageId: l, threadSettings: r, updateThreadSettings: s, error: a, disabled: c } = e,
        d = null !== (t = r.name) && void 0 !== t ? t : '',
        h = (0, k.Op)(a, { content: d }),
        m = (0, O.Od)(n, l),
        p = null != l,
        f = (0, _.Dt)();
    return (0, i.jsx)(o.FormSection, {
        tag: 'label',
        htmlFor: f,
        title: H.intl.string(H.t.j3XWjI) + (p ? ' (Optional)' : ''),
        className: F.formSection,
        children: (0, i.jsx)(o.TextInput, {
            value: d,
            id: f,
            placeholder: '' !== m ? m : H.intl.string(H.t['Nb2/RE']),
            maxLength: B.HN8,
            onChange: (e) => {
                s({ name: (0, w.Z)(e, !1) }), '' !== e ? u.Z.startTyping(n.id) : u.Z.stopTyping(n.id);
            },
            onBlur: () => {
                let e = (0, w.Z)(d, !0);
                e !== d && s({ name: e });
            },
            error: h,
            disabled: c
        })
    });
}
function q(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: r, submit: d, error: h } = e,
        [m, p] = l.useState(!0),
        f = l.useCallback(() => p(!0), []),
        g = l.useCallback(() => p(!1), []),
        C = l.useCallback(
            (e, n, i) => {
                c.Z.saveDraft(t.id, n, j.d.FirstThreadMessage),
                    r(
                        (e) => (
                            '' !== n && e.textValue !== n ? u.Z.startTyping(t.id) : '' === n && u.Z.stopTyping(t.id),
                            {
                                textValue: n,
                                richValue: i
                            }
                        )
                    );
            },
            [t.id, r]
        ),
        _ = l.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return d(t, i, n);
            },
            [d]
        );
    (0, M.yp)({
        event: B.CkL.TEXTAREA_FOCUS,
        handler: f
    }),
        (0, M.yp)({
            event: B.CkL.TEXTAREA_BLUR,
            handler: g
        });
    let I = (0, a.e7)([y.Z], () => y.Z.can(B.Plq.ATTACH_FILES, t)),
        E = (0, k.Op)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Z, {
                channelId: t.id,
                type: V,
                canAttachFiles: I
            }),
            (0, i.jsx)('div', {
                className: F.starterMessageError,
                children: (0, i.jsx)(o.InputError, { error: E })
            }),
            (0, i.jsx)(x.Z, {
                type: V,
                channel: t,
                placeholder: H.intl.string(H.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: m,
                className: F.channelTextArea,
                innerClassName: s()(F.channelTextAreaInner, { [F.channelTextAreaInnerError]: null != E }),
                onFocus: f,
                onBlur: g,
                onChange: C,
                onSubmit: _,
                promptToUpload: L.d
            })
        ]
    });
}
function X(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        l = (0, a.e7)([A.Z], () => (null == n ? null : A.Z.getMessage(t.id, n))),
        r = T.jU.useSetting();
    return null != l
        ? (0, i.jsx)(b.Z, {
              className: F.messagePreview,
              message: l,
              channel: t,
              compact: r,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0
          })
        : null;
}
