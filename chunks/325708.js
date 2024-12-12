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
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(392711),
    d = n(692547),
    u = n(153867),
    h = n(347469),
    p = n(740492),
    m = n(36645),
    f = n(311572);
((l = i || (i = {}))[(l.PostSidebar = 0)] = 'PostSidebar'), (l[(l.ThreadSidebar = 1)] = 'ThreadSidebar'), (l[(l.CallChatSidebar = 2)] = 'CallChatSidebar'), (l[(l.MessageRequestSidebar = 3)] = 'MessageRequestSidebar'), (l[(l.HomeSidebar = 4)] = 'HomeSidebar'), (l[(l.ParticipantsSidebar = 5)] = 'ParticipantsSidebar');
function g(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: l, minWidth: a } = e,
        s = (0, h.Z)({
            minDimension: a,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: h.y.HORIZONTAL_LEFT,
            throttleDuration: 16
        });
    return (0, r.jsx)('div', {
        onMouseDown: s,
        className: f.resizeHandle
    });
}
function C(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: l, floatingLayer: s } = e,
        h = a.useRef(null),
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
                case 5:
                    return 'callParticipantsSidebarWidth';
            }
        })(t),
        [x, v] = a.useState(p.ZP[C]),
        _ = a.useCallback(
            (e) => {
                u.ZP.updatedUnsyncedSettings({ [C]: e });
            },
            [C]
        ),
        I = 5 === t ? m.at : m.Co,
        E = (0, m.WL)({
            maxWidth: n,
            minWidth: I
        }),
        b = (0, c.clamp)(x, I, n),
        Z = E ? b : b + d.Z.modules.chat.RESIZE_HANDLE_WIDTH;
    a.useEffect(() => {
        null == i || i(b, E);
    }, [b, i, E]);
    let N = null != s ? s : a.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !E && (0, r.jsx)('div', { style: { minWidth: Z } }),
            (0, r.jsx)(N, {
                children: (0, r.jsxs)('div', {
                    className: f.chatLayerWrapper,
                    children: [
                        (0, r.jsx)('div', {
                            className: o()(f.chatTarget, {
                                [f.floating]: E,
                                [f.notFloating]: !E
                            }),
                            style: { width: Z }
                        }),
                        !E &&
                            (0, r.jsx)(g, {
                                minWidth: I,
                                maxWidth: n,
                                resizableNode: h,
                                onResize: v,
                                onResizeEnd: _
                            }),
                        (0, r.jsx)('div', {
                            ref: h,
                            className: o()(f.container, { [f.floating]: E }),
                            style: { width: b },
                            children: l
                        })
                    ]
                })
            })
        ]
    });
}
