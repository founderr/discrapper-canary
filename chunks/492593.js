var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(12645);
t.Z = function (e) {
    let {
            className: t,
            compact: n = !1,
            contentOnly: i = !1,
            zalgo: l = !0,
            disableInteraction: u = !1,
            childrenRepliedMessage: c,
            childrenExecutedCommand: d,
            childrenHeader: f,
            childrenSystemMessage: _,
            childrenButtons: p,
            childrenMessageContent: h,
            childrenAccessories: m,
            messageRef: g,
            focusProps: E = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: v,
            isSystemMessage: b,
            hasReply: I,
            ...T
        } = e,
        S = (0, r.jsx)(s.FocusRing, {
            ...E,
            children: (0, r.jsxs)('div', {
                className: a()(t, {
                    [o.wrapper]: !0,
                    [o.contentOnly]: i,
                    [o.compact]: n,
                    [o.cozy]: !n,
                    [o.zalgo]: l,
                    [o.hasThread]: v,
                    [o.isSystemMessage]: b,
                    [o.hasReply]: I
                }),
                ref: g,
                ...T,
                role: 'article',
                children: [
                    c,
                    d,
                    (0, r.jsxs)('div', {
                        className: o.contents,
                        children: [_, f, null == _ && h]
                    }),
                    m,
                    null != p
                        ? (0, r.jsx)('div', {
                              className: o.buttonContainer,
                              children: p
                          })
                        : null
                ]
            })
        });
    return u ? (0, r.jsx)(s.FocusBlock, { children: S }) : S;
};
