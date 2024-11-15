n.d(t, {
    Z: function () {
        return C;
    },
    y: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(392711),
    d = n(692547),
    u = n(153867),
    h = n(347469),
    p = n(740492),
    m = n(36645),
    f = n(672461);
((l = i || (i = {}))[(l.PostSidebar = 0)] = 'PostSidebar'), (l[(l.ThreadSidebar = 1)] = 'ThreadSidebar'), (l[(l.CallChatSidebar = 2)] = 'CallChatSidebar'), (l[(l.MessageRequestSidebar = 3)] = 'MessageRequestSidebar'), (l[(l.HomeSidebar = 4)] = 'HomeSidebar');
function g(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: l } = e,
        r = (0, h.Z)({
            minDimension: m.C,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: h.y.HORIZONTAL_LEFT
        });
    return (0, a.jsx)('div', {
        onMouseDown: r,
        className: f.resizeHandle
    });
}
function C(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: l, floatingLayer: s } = e,
        h = r.useRef(null),
        C = (function (e) {
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
        [x, v] = r.useState(p.ZP[C]),
        _ = r.useCallback(
            (e) => {
                u.ZP.updatedUnsyncedSettings({ [C]: e });
            },
            [C]
        ),
        I = (0, m.W)({ maxWidth: n }),
        E = (0, c.clamp)(x, m.C, n),
        b = I ? E : E + d.Z.modules.chat.RESIZE_HANDLE_WIDTH;
    r.useEffect(() => {
        null == i || i(E, I);
    }, [E, i, I]);
    let Z = null != s ? s : r.Fragment;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !I && (0, a.jsx)('div', { style: { minWidth: b } }),
            (0, a.jsx)(Z, {
                children: (0, a.jsxs)('div', {
                    className: f.chatLayerWrapper,
                    children: [
                        (0, a.jsx)('div', {
                            className: o()(f.chatTarget, {
                                [f.floating]: I,
                                [f.notFloating]: !I
                            }),
                            style: { width: b }
                        }),
                        !I &&
                            (0, a.jsx)(g, {
                                maxWidth: n,
                                resizableNode: h,
                                onResize: v,
                                onResizeEnd: _
                            }),
                        (0, a.jsx)('div', {
                            ref: h,
                            className: o()(f.container, { [f.floating]: I }),
                            style: { width: E },
                            children: l
                        })
                    ]
                })
            })
        ]
    });
}
