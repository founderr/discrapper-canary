var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(686546),
    c = n(90837);
let d = (e) => {
    let { className: t, guild: n, isSelected: r = !0, width: o = 32, height: d = 32, shouldAnimate: _ = !0, isLocked: E = !1 } = e,
        [f, h] = a.useState(!1),
        p = n.getIconURL(32, _ && r),
        m = () => h(!0),
        I = () => h(!1);
    return (0, i.jsxs)('div', {
        onFocus: m,
        onBlur: I,
        onMouseOver: m,
        onMouseLeave: I,
        children: [
            (0, i.jsx)(u.ZP, {
                className: s()(c.mask, t),
                mask: r || f ? u.QS.SQUIRCLE : u.QS.AVATAR_DEFAULT,
                width: o,
                height: d,
                children:
                    null == p
                        ? (0, i.jsx)('div', {
                              className: s()(c.guildIcon, c.guildIconWithoutImage),
                              children: (0, i.jsx)('div', {
                                  className: c.guildAcronym,
                                  children: n.acronym
                              })
                          })
                        : (0, i.jsx)('img', {
                              alt: n.toString(),
                              src: p,
                              className: c.guildIcon
                          })
            }),
            E
                ? (0, i.jsx)('div', {
                      className: c.categoryItemLockIconContainer,
                      children: (0, i.jsx)(l.LockIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 10,
                          height: 10,
                          className: c.categoryItemLockIcon
                      })
                  })
                : null
        ]
    });
};
t.Z = d;
