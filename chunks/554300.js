var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(568611),
    l = n(481060),
    u = n(559171);
let c = i.forwardRef(function (e, t) {
    var n;
    let { avatar: i, name: a, children: c, subText: d, decorators: f, onClick: _, selected: p, muted: h, to: m, avatarClassName: g, selectedClassName: E, innerClassName: v, wrapContent: b, highlighted: I, focusProps: T, ...S } = e;
    (S.className = s()(S.className, u.container, {
        [u.selected]: p,
        [u.highlighted]: I,
        [null != E ? E : '']: p,
        [u.clickable]: !p && (null != m || null != _)
    })),
        (S['aria-selected'] = null !== (n = S['aria-selected']) && void 0 !== n ? n : p);
    let y = (0, r.jsxs)('div', {
        className: s()(v, u.layout, {
            [u.muted]: !p && h,
            [u.wrappedLayout]: b
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
                                className: s()(u.name, { [u.wrappedName]: b }),
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
                  ...S,
                  role: 'listitem',
                  ref: t,
                  children: y
              })
          })
        : null != _
          ? (0, r.jsx)(l.Clickable, {
                onClick: _,
                focusProps: T,
                ...S,
                role: 'listitem',
                innerRef: t,
                children: y
            })
          : (0, r.jsx)(l.FocusRing, {
                ...T,
                children: (0, r.jsx)('div', {
                    ...S,
                    role: 'listitem',
                    ref: t,
                    children: y
                })
            });
});
t.Z = c;
