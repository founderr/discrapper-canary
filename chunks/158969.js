var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(653603),
    o = n.n(r),
    c = n(442837),
    u = n(481060),
    d = n(904245),
    h = n(232961),
    m = n(223606),
    p = n(63063),
    _ = n(530472),
    f = n(453687),
    E = n(930282),
    g = n(318713),
    C = n(981631),
    I = n(689938),
    T = n(291079),
    x = n(825193),
    S = n(554034);
let v = s.memo(function (e) {
    let { message: t, notice: n, compact: s = !1, onDismiss: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(T.blockedNoticeContainer, { [T.compact]: s }),
                children: [
                    (0, i.jsx)('div', {
                        className: T.blockedNoticeIcon,
                        children: (0, i.jsx)(u.ShieldIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: T.shieldIcon
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: T.blockedNotice,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'interactive-normal',
                            children: n
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: l()(T.ephemeralAccessories, { [T.compact]: s }),
                children: (0, i.jsx)(_.Z, {
                    message: t,
                    onDeleteMessage: a,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'interactive-normal',
                        tag: 'span',
                        className: T.learnMore,
                        children: I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_LEARN_MORE.format({ helpUrl: p.Z.getArticleURL(C.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                    })
                })
            })
        ]
    });
});
t.Z = s.memo(function (e) {
    var t, n;
    let { className: a, compact: r, message: u, children: p, content: _, onUpdate: C } = e,
        N = null === (t = u.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
        A = s.useRef(!1),
        Z = (0, c.e7)([m.Z], () => m.Z.getMessage(u.id), [u.id]),
        M = s.useCallback(() => {
            (null == Z ? void 0 : Z.isBlockedEdit) ? (0, h.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
        }, [u, Z]);
    return (
        s.useLayoutEffect(() => {
            A.current ? null != C && C() : (A.current = !0);
        }, [C, u.content, _, N, p]),
        (0, i.jsxs)('div', {
            id: (0, f.ut)(u),
            className: l()(a, S.markup, {
                [x.messageContent]: !0,
                [x.markupRtl]: 'rtl' === o()(u.content),
                [T.blockedEdit]: null == Z ? void 0 : Z.isBlockedEdit,
                [T.blockedSend]: !(null == Z ? void 0 : Z.isBlockedEdit)
            }),
            children: [
                null != p ? p : (0, E.L5)(u, _),
                (null == Z ? void 0 : Z.isBlockedEdit) &&
                    null != u.timestamp &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ' ',
                            (0, i.jsx)(g.Z, {
                                timestamp: u.timestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, i.jsxs)('span', {
                                    className: x.edited,
                                    children: ['(', I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_POSTFIX, ')']
                                })
                            })
                        ]
                    }),
                (0, i.jsx)(v, {
                    notice: null !== (n = null == Z ? void 0 : Z.errorMessage) && void 0 !== n ? n : I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE,
                    message: u,
                    compact: r,
                    onDismiss: M
                })
            ]
        })
    );
}, E.HR);
