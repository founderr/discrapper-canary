var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(568611),
    l = n(481060),
    u = n(440718);
let c = i.forwardRef(function (e, t) {
    var n;
    let { avatar: i, name: a, children: c, subText: d, decorators: _, onClick: E, selected: f, muted: h, to: p, avatarClassName: I, selectedClassName: m, innerClassName: T, wrapContent: S, highlighted: g, focusProps: A, ...N } = e;
    (N.className = s()(N.className, u.container, {
        [u.selected]: f,
        [u.highlighted]: g,
        [null != m ? m : '']: f,
        [u.clickable]: !f && (null != p || null != E)
    })),
        (N['aria-selected'] = null !== (n = N['aria-selected']) && void 0 !== n ? n : f);
    let R = (0, r.jsxs)('div', {
        className: s()(T, u.layout, {
            [u.muted]: !f && h,
            [u.wrappedLayout]: S
        }),
        children: [
            (0, r.jsx)('div', {
                className: s()(u.avatar, I),
                children: i
            }),
            (0, r.jsxs)('div', {
                className: u.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: u.nameAndDecorators,
                        children: [
                            (0, r.jsx)('div', {
                                className: s()(u.name, { [u.wrappedName]: S }),
                                children: a
                            }),
                            _
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
    return null != p
        ? (0, r.jsx)(l.FocusRing, {
              ...A,
              children: (0, r.jsx)(o.rU, {
                  to: p,
                  onClick: E,
                  ...N,
                  role: 'listitem',
                  ref: t,
                  children: R
              })
          })
        : null != E
          ? (0, r.jsx)(l.Clickable, {
                onClick: E,
                focusProps: A,
                ...N,
                role: 'listitem',
                innerRef: t,
                children: R
            })
          : (0, r.jsx)(l.FocusRing, {
                ...A,
                children: (0, r.jsx)('div', {
                    ...N,
                    role: 'listitem',
                    ref: t,
                    children: R
                })
            });
});
t.Z = c;
