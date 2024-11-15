n.d(t, {
    q: function () {
        return i;
    }
});
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(91192),
    c = n(481060),
    d = n(166459),
    f = n(951394),
    _ = n(585483),
    p = n(43085),
    h = n(981631),
    m = n(388032),
    g = n(57604);
function E(e) {
    e.stopPropagation();
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (r[(r.CLIP = 2)] = 'CLIP');
t.Z = s.forwardRef(function (e, t) {
    let { id: n, channelId: r, className: i, children: s, actions: o, handleEditModal: v, keyboardModeEnabled: b, onKeyDown: I, draftType: S, size: T = 1 } = e,
        { onFocus: y, ...A } = (0, u.JA)(n),
        { handleFocus: N, handleBlur: C } = (0, p.b)(y),
        R = 0 === T,
        O = null != o;
    return (0, a.jsx)(c.FocusRing, {
        children: (0, a.jsx)('li', {
            ...A,
            onFocus: N,
            onBlur: C,
            onKeyDown: (e) => {
                if (!!b) {
                    switch (e.which) {
                        case h.yXg.D:
                            e.preventDefault(), d.Z.remove(r, n, S);
                            return;
                        case h.yXg.E:
                            null != v && (e.preventDefault(), v(e));
                            return;
                        case h.yXg.BACKSPACE:
                            e.ctrlKey ? (e.preventDefault(), d.Z.clearAll(r, S)) : (e.preventDefault(), d.Z.remove(r, n, S));
                            return;
                        case h.yXg.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), _.S.dispatchToLastSubscribed(h.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                    }
                    null == I || I(e);
                }
            },
            className: l()(g.upload, i, { [g.sizeClip]: 2 === T }),
            ref: t,
            children: (0, a.jsxs)('div', {
                className: g.uploadContainer,
                children: [
                    s,
                    O
                        ? (0, a.jsx)('div', {
                              className: g.actionBarContainer,
                              children: (0, a.jsx)('div', {
                                  className: l()(g.actionBar, { [g.smallActionBar]: R }),
                                  onContextMenu: E,
                                  'aria-label': m.intl.string(m.t['8Lu3Dg']),
                                  children: (0, a.jsx)(f.ZP, {
                                      className: l()({ [g.miniPopover]: R }),
                                      children: o
                                  })
                              })
                          })
                        : null
                ]
            })
        })
    });
});
