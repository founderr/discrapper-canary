var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(653603),
    o = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(904245),
    h = n(232961),
    m = n(223606),
    p = n(63063),
    f = n(530472),
    g = n(453687),
    C = n(930282),
    x = n(318713),
    v = n(981631),
    _ = n(388032),
    I = n(291079),
    E = n(825193),
    b = n(554034);
let S = l.memo(function (e) {
    let { message: t, notice: n, compact: l = !1, onDismiss: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: s()(I.blockedNoticeContainer, { [I.compact]: l }),
                children: [
                    (0, i.jsx)('div', {
                        className: I.blockedNoticeIcon,
                        children: (0, i.jsx)(u.ShieldIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: I.shieldIcon
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: I.blockedNotice,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'interactive-normal',
                            children: n
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: s()(I.ephemeralAccessories, { [I.compact]: l }),
                children: (0, i.jsx)(f.Z, {
                    message: t,
                    onDeleteMessage: r,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'interactive-normal',
                        tag: 'span',
                        className: I.learnMore,
                        children: _.intl.format(_.t.Nd3Gh4, { helpUrl: p.Z.getArticleURL(v.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                    })
                })
            })
        ]
    });
});
t.Z = l.memo(function (e) {
    var t, n;
    let { className: r, compact: a, message: u, children: p, content: f, onUpdate: v } = e,
        Z = null === (t = u.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
        T = l.useRef(!1),
        N = (0, c.e7)([m.Z], () => m.Z.getMessage(u.id), [u.id]),
        j = l.useCallback(() => {
            (null == N ? void 0 : N.isBlockedEdit) ? (0, h.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
        }, [u, N]);
    return (
        l.useLayoutEffect(() => {
            T.current ? null != v && v() : (T.current = !0);
        }, [v, u.content, f, Z, p]),
        (0, i.jsxs)('div', {
            id: (0, g.ut)(u),
            className: s()(r, b.markup, {
                [E.messageContent]: !0,
                [E.markupRtl]: 'rtl' === o()(u.content),
                [I.blockedEdit]: null == N ? void 0 : N.isBlockedEdit,
                [I.blockedSend]: !(null == N ? void 0 : N.isBlockedEdit)
            }),
            children: [
                null != p ? p : (0, C.L5)(u, f),
                (null == N ? void 0 : N.isBlockedEdit) &&
                    null != u.timestamp &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ' ',
                            (0, i.jsx)(x.Z, {
                                timestamp: u.timestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, i.jsxs)('span', {
                                    className: E.edited,
                                    children: ['(', _.intl.string(_.t.Z7eEx8), ')']
                                })
                            })
                        ]
                    }),
                (0, i.jsx)(S, {
                    notice: null !== (n = null == N ? void 0 : N.errorMessage) && void 0 !== n ? n : _.intl.string(_.t.zQ69pq),
                    message: u,
                    compact: a,
                    onDismiss: j
                })
            ]
        })
    );
}, C.HR);
