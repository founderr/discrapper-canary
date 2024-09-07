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
    a = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(392711),
    u = n(692547),
    d = n(153867),
    h = n(347469),
    m = n(740492),
    p = n(36645),
    _ = n(589958);
((s = i || (i = {}))[(s.PostSidebar = 0)] = 'PostSidebar'), (s[(s.ThreadSidebar = 1)] = 'ThreadSidebar'), (s[(s.CallChatSidebar = 2)] = 'CallChatSidebar'), (s[(s.MessageRequestSidebar = 3)] = 'MessageRequestSidebar'), (s[(s.HomeSidebar = 4)] = 'HomeSidebar');
function f(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: s } = e,
        l = (0, h.Z)({
            minDimension: p.C,
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
        [g, C] = l.useState(m.ZP[E]),
        I = l.useCallback(
            (e) => {
                d.ZP.updatedUnsyncedSettings({ [E]: e });
            },
            [E]
        ),
        x = (0, p.W)({ maxWidth: n }),
        T = (0, c.clamp)(g, p.C, n),
        v = x ? T : T + u.Z.modules.chat.RESIZE_HANDLE_WIDTH;
    l.useEffect(() => {
        null == i || i(T, x);
    }, [T, i, x]);
    let S = null != r ? r : l.Fragment;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !x && (0, a.jsx)('div', { style: { minWidth: v } }),
            (0, a.jsx)(S, {
                children: (0, a.jsxs)('div', {
                    className: _.chatLayerWrapper,
                    children: [
                        (0, a.jsx)('div', {
                            className: o()(_.chatTarget, {
                                [_.floating]: x,
                                [_.notFloating]: !x
                            }),
                            style: { width: v }
                        }),
                        !x &&
                            (0, a.jsx)(f, {
                                maxWidth: n,
                                resizableNode: h,
                                onResize: C,
                                onResizeEnd: I
                            }),
                        (0, a.jsx)('div', {
                            ref: h,
                            className: o()(_.container, { [_.floating]: x }),
                            style: { width: T },
                            children: s
                        })
                    ]
                })
            })
        ]
    });
}
