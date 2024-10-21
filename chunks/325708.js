n.d(t, {
    Z: function () {
        return E;
    },
    y: function () {
        return i;
    }
}),
    n(47120);
var i,
    s,
    a = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    c = n(392711),
    u = n(692547),
    d = n(153867),
    h = n(347469),
    p = n(740492),
    m = n(36645),
    _ = n(866274);
((s = i || (i = {}))[(s.PostSidebar = 0)] = 'PostSidebar'), (s[(s.ThreadSidebar = 1)] = 'ThreadSidebar'), (s[(s.CallChatSidebar = 2)] = 'CallChatSidebar'), (s[(s.MessageRequestSidebar = 3)] = 'MessageRequestSidebar'), (s[(s.HomeSidebar = 4)] = 'HomeSidebar');
function f(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: s } = e,
        l = (0, h.Z)({
            minDimension: m.C,
            maxDimension: s,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: h.y.HORIZONTAL_LEFT
        });
    return (0, a.jsx)('div', {
        onMouseDown: l,
        className: _.resizeHandle
    });
}
function E(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: s, floatingLayer: r } = e,
        h = l.useRef(null),
        E = (function (e) {
            switch (e) {
                case 0:
                    return 'postSidebarWidth';
                case 1:
                    return 'threadSidebarWidth';
                case 2:
                    return 'callChatSidebarWidth';
                case 3:
                    return 'messageRequestSidebarWidth';
                case 4:
                    return 'homeSidebarWidth';
            }
        })(t),
        [g, C] = l.useState(p.ZP[E]),
        I = l.useCallback(
            (e) => {
                d.ZP.updatedUnsyncedSettings({ [E]: e });
            },
            [E]
        ),
        T = (0, m.W)({ maxWidth: n }),
        x = (0, c.clamp)(g, m.C, n),
        v = T ? x : x + u.Z.modules.chat.RESIZE_HANDLE_WIDTH;
    l.useEffect(() => {
        null == i || i(x, T);
    }, [x, i, T]);
    let S = null != r ? r : l.Fragment;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !T && (0, a.jsx)('div', { style: { minWidth: v } }),
            (0, a.jsx)(S, {
                children: (0, a.jsxs)('div', {
                    className: _.chatLayerWrapper,
                    children: [
                        (0, a.jsx)('div', {
                            className: o()(_.chatTarget, {
                                [_.floating]: T,
                                [_.notFloating]: !T
                            }),
                            style: { width: v }
                        }),
                        !T &&
                            (0, a.jsx)(f, {
                                maxWidth: n,
                                resizableNode: h,
                                onResize: C,
                                onResizeEnd: I
                            }),
                        (0, a.jsx)('div', {
                            ref: h,
                            className: o()(_.container, { [_.floating]: T }),
                            style: { width: x },
                            children: s
                        })
                    ]
                })
            })
        ]
    });
}
