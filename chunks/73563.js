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
    r = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    o = n(600164),
    c = n(507675),
    u = n(304002);
function d(e) {
    let { disableGradients: t = !1, renderHeader: n, renderBottomLeft: i, renderBottomCenter: l, renderBottomRight: a, renderCenter: s } = e;
    return (0, r.jsxs)('div', {
        className: u.videoControls,
        children: [
            !(0 === t || !0 === t) && (0, r.jsx)('div', { className: u.gradientTop }),
            !(1 === t || !0 === t) && (0, r.jsx)('div', { className: u.gradientBottom }),
            (0, r.jsx)('div', {
                className: u.topControls,
                children: null == n ? void 0 : n()
            }),
            null == s ? void 0 : s(),
            (0, r.jsxs)('div', {
                className: u.bottomControls,
                children: [
                    (0, r.jsx)(o.Z, {
                        grow: 0,
                        shrink: 1,
                        align: o.Z.Align.CENTER,
                        children: null == i ? void 0 : i()
                    }),
                    (0, r.jsx)(o.Z, {
                        grow: 1,
                        justify: o.Z.Justify.CENTER,
                        align: o.Z.Align.CENTER,
                        children: null == l ? void 0 : l()
                    }),
                    (0, r.jsx)(o.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: o.Z.Justify.END,
                        align: o.Z.Align.CENTER,
                        children: null == a ? void 0 : a()
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { screenMessage: t, onDoubleClick: n, onActive: i, onForceIdle: l, idle: a, children: o, renderChatButton: h, renderChatToasts: m, renderVoiceChannelEffects: p, style: f, ...g } = e;
    return (0, r.jsxs)('div', {
        className: s()(u.root, { [u.idle]: a }),
        style: f,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: n,
        children: [
            o,
            null != t
                ? (0, r.jsx)(c.Z, {
                      size: 'large',
                      ...t
                  })
                : null,
            (0, r.jsx)(d, { ...g }),
            null == h
                ? void 0
                : h({
                      className: u.chatButton,
                      showingClassName: u.chatButtonShowing
                  }),
            null == m ? void 0 : m(),
            null == p ? void 0 : p()
        ]
    });
}
((i = l || (l = {}))[(i.TOP = 0)] = 'TOP'), (i[(i.BOTTOM = 1)] = 'BOTTOM');
