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
    r = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(392711),
    u = n(692547),
    d = n(153867),
    h = n(347469),
    m = n(740492),
    p = n(36645),
    f = n(866274);
((l = i || (i = {}))[(l.PostSidebar = 0)] = 'PostSidebar'), (l[(l.ThreadSidebar = 1)] = 'ThreadSidebar'), (l[(l.CallChatSidebar = 2)] = 'CallChatSidebar'), (l[(l.MessageRequestSidebar = 3)] = 'MessageRequestSidebar'), (l[(l.HomeSidebar = 4)] = 'HomeSidebar');
function g(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: l } = e,
        s = (0, h.Z)({
            minDimension: p.C,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: h.y.HORIZONTAL_LEFT
        });
    return (0, r.jsx)('div', {
        onMouseDown: s,
        className: f.resizeHandle
    });
}
function C(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: l, floatingLayer: a } = e,
        h = s.useRef(null),
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
        [x, v] = s.useState(m.ZP[C]),
        _ = s.useCallback(
            (e) => {
                d.ZP.updatedUnsyncedSettings({ [C]: e });
            },
            [C]
        ),
        I = (0, p.W)({ maxWidth: n }),
        E = (0, c.clamp)(x, p.C, n),
        b = I ? E : E + u.Z.modules.chat.RESIZE_HANDLE_WIDTH;
    s.useEffect(() => {
        null == i || i(E, I);
    }, [E, i, I]);
    let S = null != a ? a : s.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !I && (0, r.jsx)('div', { style: { minWidth: b } }),
            (0, r.jsx)(S, {
                children: (0, r.jsxs)('div', {
                    className: f.chatLayerWrapper,
                    children: [
                        (0, r.jsx)('div', {
                            className: o()(f.chatTarget, {
                                [f.floating]: I,
                                [f.notFloating]: !I
                            }),
                            style: { width: b }
                        }),
                        !I &&
                            (0, r.jsx)(g, {
                                maxWidth: n,
                                resizableNode: h,
                                onResize: v,
                                onResizeEnd: _
                            }),
                        (0, r.jsx)('div', {
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
