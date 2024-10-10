n.d(t, {
    q: function () {
        return i;
    }
});
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(91192),
    c = n(481060),
    d = n(166459),
    _ = n(951394),
    E = n(585483),
    f = n(43085),
    h = n(981631),
    p = n(689938),
    I = n(57604);
function m(e) {
    e.stopPropagation();
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (r[(r.CLIP = 2)] = 'CLIP');
t.Z = s.forwardRef(function (e, t) {
    let { id: n, channelId: r, className: i, children: s, actions: o, handleEditModal: T, keyboardModeEnabled: S, onKeyDown: g, draftType: A, size: N = 1 } = e,
        { onFocus: R, ...O } = (0, u.JA)(n),
        { handleFocus: v, handleBlur: C } = (0, f.b)(R),
        L = 0 === N,
        y = null != o;
    return (0, a.jsx)(c.FocusRing, {
        children: (0, a.jsx)('li', {
            ...O,
            onFocus: v,
            onBlur: C,
            onKeyDown: (e) => {
                if (!!S) {
                    switch (e.which) {
                        case h.yXg.D:
                            e.preventDefault(), d.Z.remove(r, n, A);
                            return;
                        case h.yXg.E:
                            null != T && (e.preventDefault(), T(e));
                            return;
                        case h.yXg.BACKSPACE:
                            e.ctrlKey ? (e.preventDefault(), d.Z.clearAll(r, A)) : (e.preventDefault(), d.Z.remove(r, n, A));
                            return;
                        case h.yXg.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), E.S.dispatchToLastSubscribed(h.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                    }
                    null == g || g(e);
                }
            },
            className: l()(I.upload, i, { [I.sizeClip]: 2 === N }),
            ref: t,
            children: (0, a.jsxs)('div', {
                className: I.uploadContainer,
                children: [
                    s,
                    y
                        ? (0, a.jsx)('div', {
                              className: I.actionBarContainer,
                              children: (0, a.jsx)('div', {
                                  className: l()(I.actionBar, { [I.smallActionBar]: L }),
                                  onContextMenu: m,
                                  'aria-label': p.Z.Messages.ATTACHMENT_UTILITIES,
                                  children: (0, a.jsx)(_.ZP, {
                                      className: l()({ [I.miniPopover]: L }),
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
