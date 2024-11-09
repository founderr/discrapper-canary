var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(568611),
    l = n(481060),
    u = n(440718);
let c = i.forwardRef(function (e, t) {
    var n;
    let { avatar: i, name: a, children: c, subText: d, decorators: f, onClick: _, selected: h, muted: p, to: m, avatarClassName: g, selectedClassName: E, innerClassName: v, wrapContent: I, highlighted: S, focusProps: T, ...b } = e;
    (b.className = s()(b.className, u.container, {
        [u.selected]: h,
        [u.highlighted]: S,
        [null != E ? E : '']: h,
        [u.clickable]: !h && (null != m || null != _)
    })),
        (b['aria-selected'] = null !== (n = b['aria-selected']) && void 0 !== n ? n : h);
    let y = (0, r.jsxs)('div', {
        className: s()(v, u.layout, {
            [u.muted]: !h && p,
            [u.wrappedLayout]: I
        }),
        children: [
            (0, r.jsx)('div', {
                className: s()(u.avatar, g),
                children: i
            }),
            (0, r.jsxs)('div', {
                className: u.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: u.nameAndDecorators,
                        children: [
                            (0, r.jsx)('div', {
                                className: s()(u.name, { [u.wrappedName]: I }),
                                children: a
                            }),
                            f
                        ]
                    }),
                    null != d
                        ? (0, r.jsx)('div', {
                              className: u.subText,
                              children: d
                          })
                        : null
                ]
            }),
            null != c
                ? (0, r.jsx)('div', {
                      className: u.children,
                      children: c
                  })
                : null
        ]
    });
    return null != m
        ? (0, r.jsx)(l.FocusRing, {
              ...T,
              children: (0, r.jsx)(o.rU, {
                  to: m,
                  onClick: _,
                  ...b,
                  role: 'listitem',
                  ref: t,
                  children: y
              })
          })
        : null != _
          ? (0, r.jsx)(l.Clickable, {
                onClick: _,
                focusProps: T,
                ...b,
                role: 'listitem',
                innerRef: t,
                children: y
            })
          : (0, r.jsx)(l.FocusRing, {
                ...T,
                children: (0, r.jsx)('div', {
                    ...b,
                    role: 'listitem',
                    ref: t,
                    children: y
                })
            });
});
t.Z = c;
