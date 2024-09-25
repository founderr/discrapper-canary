n.d(t, {
    q: function () {
        return r;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(91192),
    u = n(481060),
    c = n(166459),
    d = n(951394),
    _ = n(585483),
    E = n(43085),
    f = n(981631),
    h = n(689938),
    p = n(57604);
function m(e) {
    e.stopPropagation();
}
function I(e, t) {
    let { id: n, channelId: r, className: a, children: o, actions: I, handleEditModal: T, keyboardModeEnabled: g, onKeyDown: S, draftType: A, size: v = 1 } = e,
        { onFocus: N, ...O } = (0, l.JA)(n),
        { handleFocus: R, handleBlur: C } = (0, E.b)(N),
        y = 0 === v,
        b = null != I,
        L = (e) => {
            if (!!g) {
                switch (e.which) {
                    case f.yXg.D:
                        e.preventDefault(), c.Z.remove(r, n, A);
                        return;
                    case f.yXg.E:
                        null != T && (e.preventDefault(), T(e));
                        return;
                    case f.yXg.BACKSPACE:
                        e.ctrlKey ? (e.preventDefault(), c.Z.clearAll(r, A)) : (e.preventDefault(), c.Z.remove(r, n, A));
                        return;
                    case f.yXg.ARROW_UP:
                        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                        e.preventDefault(), _.S.dispatchToLastSubscribed(f.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                }
                null == S || S(e);
            }
        };
    return (0, i.jsx)(u.FocusRing, {
        children: (0, i.jsx)('li', {
            ...O,
            onFocus: R,
            onBlur: C,
            onKeyDown: L,
            className: s()(p.upload, a, { [p.sizeClip]: 2 === v }),
            ref: t,
            children: (0, i.jsxs)('div', {
                className: p.uploadContainer,
                children: [
                    o,
                    b
                        ? (0, i.jsx)('div', {
                              className: p.actionBarContainer,
                              children: (0, i.jsx)('div', {
                                  className: s()(p.actionBar, { [p.smallActionBar]: y }),
                                  onContextMenu: m,
                                  'aria-label': h.Z.Messages.ATTACHMENT_UTILITIES,
                                  children: (0, i.jsx)(d.ZP, {
                                      className: s()({ [p.miniPopover]: y }),
                                      children: I
                                  })
                              })
                          })
                        : null
                ]
            })
        })
    });
}
!(function (e) {
    (e[(e.SMALL = 0)] = 'SMALL'), (e[(e.MEDIUM = 1)] = 'MEDIUM'), (e[(e.CLIP = 2)] = 'CLIP');
})(r || (r = {})),
    (t.Z = a.forwardRef(I));
