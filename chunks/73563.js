n.d(t, {
    Z: function () {
        return h;
    },
    e: function () {
        return l;
    }
});
var i,
    l,
    a = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    o = n(600164),
    c = n(507675),
    d = n(486469);
function u(e) {
    let { disableGradients: t = !1, renderHeader: n, renderBottomLeft: i, renderBottomCenter: l, renderBottomRight: r, renderCenter: s } = e;
    return (0, a.jsxs)('div', {
        className: d.videoControls,
        children: [
            !(0 === t || !0 === t) && (0, a.jsx)('div', { className: d.gradientTop }),
            !(1 === t || !0 === t) && (0, a.jsx)('div', { className: d.gradientBottom }),
            (0, a.jsx)('div', {
                className: d.topControls,
                children: null == n ? void 0 : n()
            }),
            null == s ? void 0 : s(),
            (0, a.jsxs)('div', {
                className: d.bottomControls,
                children: [
                    (0, a.jsx)(o.Z, {
                        grow: 0,
                        shrink: 1,
                        align: o.Z.Align.CENTER,
                        children: null == i ? void 0 : i()
                    }),
                    (0, a.jsx)(o.Z, {
                        grow: 1,
                        justify: o.Z.Justify.CENTER,
                        align: o.Z.Align.CENTER,
                        children: null == l ? void 0 : l()
                    }),
                    (0, a.jsx)(o.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: o.Z.Justify.END,
                        align: o.Z.Align.CENTER,
                        children: null == r ? void 0 : r()
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { screenMessage: t, onDoubleClick: n, onActive: i, onForceIdle: l, idle: r, children: o, renderChatButton: h, renderChatToasts: p, renderVoiceChannelEffects: m, style: f, ...g } = e;
    return (0, a.jsxs)('div', {
        className: s()(d.root, { [d.idle]: r }),
        style: f,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: n,
        children: [
            o,
            null != t
                ? (0, a.jsx)(c.Z, {
                      size: 'large',
                      ...t
                  })
                : null,
            (0, a.jsx)(u, { ...g }),
            null == h
                ? void 0
                : h({
                      className: d.chatButton,
                      showingClassName: d.chatButtonShowing
                  }),
            null == p ? void 0 : p(),
            null == m ? void 0 : m()
        ]
    });
}
((i = l || (l = {}))[(i.TOP = 0)] = 'TOP'), (i[(i.BOTTOM = 1)] = 'BOTTOM');
