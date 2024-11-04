var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(653603),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(904245),
    h = n(232961),
    p = n(223606),
    m = n(63063),
    f = n(530472),
    g = n(453687),
    C = n(930282),
    x = n(318713),
    v = n(981631),
    _ = n(388032),
    I = n(291079),
    E = n(825193),
    b = n(554034);
let N = l.memo(function (e) {
    let { message: t, notice: n, compact: l = !1, onDismiss: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: r()(I.blockedNoticeContainer, { [I.compact]: l }),
                children: [
                    (0, i.jsx)('div', {
                        className: I.blockedNoticeIcon,
                        children: (0, i.jsx)(d.ShieldIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: I.shieldIcon
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: I.blockedNotice,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'interactive-normal',
                            children: n
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: r()(I.ephemeralAccessories, { [I.compact]: l }),
                children: (0, i.jsx)(f.Z, {
                    message: t,
                    onDeleteMessage: a,
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'interactive-normal',
                        tag: 'span',
                        className: I.learnMore,
                        children: _.intl.format(_.t.Nd3Gh4, { helpUrl: m.Z.getArticleURL(v.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                    })
                })
            })
        ]
    });
});
t.Z = l.memo(function (e) {
    var t, n;
    let { className: a, compact: s, message: d, children: m, content: f, onUpdate: v } = e,
        Z = null === (t = d.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
        T = l.useRef(!1),
        S = (0, c.e7)([p.Z], () => p.Z.getMessage(d.id), [d.id]),
        j = l.useCallback(() => {
            (null == S ? void 0 : S.isBlockedEdit) ? (0, h.I)(d.id) : u.Z.deleteMessage(d.channel_id, d.id, !0);
        }, [d, S]);
    return (
        l.useLayoutEffect(() => {
            T.current ? null != v && v() : (T.current = !0);
        }, [v, d.content, f, Z, m]),
        (0, i.jsxs)('div', {
            id: (0, g.ut)(d),
            className: r()(a, b.markup, {
                [E.messageContent]: !0,
                [E.markupRtl]: 'rtl' === o()(d.content),
                [I.blockedEdit]: null == S ? void 0 : S.isBlockedEdit,
                [I.blockedSend]: !(null == S ? void 0 : S.isBlockedEdit)
            }),
            children: [
                null != m ? m : (0, C.L5)(d, f),
                (null == S ? void 0 : S.isBlockedEdit) &&
                    null != d.timestamp &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ' ',
                            (0, i.jsx)(x.Z, {
                                timestamp: d.timestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, i.jsxs)('span', {
                                    className: E.edited,
                                    children: ['(', _.intl.string(_.t.Z7eEx8), ')']
                                })
                            })
                        ]
                    }),
                (0, i.jsx)(N, {
                    notice: null !== (n = null == S ? void 0 : S.errorMessage) && void 0 !== n ? n : _.intl.string(_.t.zQ69pq),
                    message: d,
                    compact: s,
                    onDismiss: j
                })
            ]
        })
    );
}, C.HR);
