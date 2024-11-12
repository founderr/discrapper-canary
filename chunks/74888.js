n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(11352),
    d = n(610617),
    c = n(413684),
    u = n(298812),
    h = n(200115),
    m = n(406205),
    g = n(388032),
    x = n(235968);
function S(e) {
    return (0, i.jsx)('div', {
        className: x.sectionHeader,
        children: (0, i.jsx)(a.Heading, {
            variant: 'text-xs/bold',
            className: x.sectionHeaderTitle,
            color: 'text-muted',
            children: e.title
        })
    });
}
function p(e) {
    return (0, i.jsxs)('div', {
        children: [
            null != e.title && (0, i.jsx)(S, { title: e.title }),
            (0, i.jsx)('div', {
                className: r()(x.sectionContent, { [x.sectionContentPadding]: !0 !== e.noPadding }),
                children: e.children
            })
        ]
    });
}
function v(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(a.ModalHeader, {
        className: x.header,
        children: [
            (0, i.jsxs)('div', {
                className: x.headerLeft,
                children: [
                    (0, i.jsx)(a.BellIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: x.headerBell
                    }),
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-lg/semibold',
                        children: g.intl.string(g.t.h850Sk)
                    })
                ]
            }),
            (0, i.jsx)(a.ModalCloseButton, { onClick: t })
        ]
    });
}
function N(e) {
    let t = s.useRef(null),
        n = o.Y.useExperiment({ location: 'notification_settings_modal_redesign' }, { autoTrackExposure: !0 }).enabled,
        l = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            let n = setTimeout(() => {
                e.scrollToChannels &&
                    null != t.current &&
                    null != l.current &&
                    t.current.scrollIntoViewNode({
                        node: l.current,
                        shouldScrollToStart: !0,
                        padding: 40
                    });
            }, 1000);
            return () => clearTimeout(n);
        }, []),
        (0, i.jsxs)(a.ModalRoot, {
            size: a.ModalSize.MEDIUM,
            transitionState: e.transitionState,
            'aria-label': g.intl.string(g.t.h850Sk),
            children: [
                (0, i.jsx)(v, { onClose: e.onClose }),
                (0, i.jsxs)(a.ModalContent, {
                    className: x.content,
                    scrollerRef: t,
                    children: [
                        (0, i.jsx)(p, { children: (0, i.jsx)(h.Z, { guildId: e.guildId }) }),
                        (0, i.jsx)(p, {
                            title: g.intl.string(g.t['R9Ej9/']),
                            noPadding: !0,
                            children: (0, i.jsx)(m.Z, { guildId: e.guildId })
                        }),
                        n &&
                            (0, i.jsx)(p, {
                                children: (0, i.jsx)(d.Z, {
                                    onClose: e.onClose,
                                    guildId: e.guildId,
                                    isRedesign: !0
                                })
                            }),
                        (0, i.jsx)(p, {
                            title: g.intl.string(g.t['31DySk']),
                            children: (0, i.jsx)(c.Z, { guildId: e.guildId })
                        }),
                        (0, i.jsx)(S, { title: g.intl.string(g.t.JrySi4) }),
                        (0, i.jsx)(u.Z, {
                            guildId: e.guildId,
                            requestScrollToBottom: () => {
                                null != t && null != t.current && t.current.scrollToBottom({ animate: !0 });
                            },
                            ref: l
                        })
                    ]
                })
            ]
        })
    );
}
