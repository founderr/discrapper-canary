n.d(t, {
    JO: function () {
        return h;
    },
    iz: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(608863),
    l = n(873546),
    u = n(481060),
    c = n(290297),
    d = n(686546),
    f = n(540059),
    _ = n(79712),
    p = n(815300);
let h = (e) => {
        let { className: t, iconClassName: n, children: i, selected: a = !1, disabled: o = !1, showBadge: l = !1, badgePosition: c = 'bottom', color: _, foreground: h, background: m, icon: g, iconSize: E = 24, onClick: v, onContextMenu: I, tooltip: T = null, tooltipColor: b, tooltipPosition: S = 'bottom', tooltipDisabled: y, hideOnClick: A = !0, role: N, 'aria-label': C, 'aria-hidden': R, 'aria-checked': O, 'aria-expanded': D, 'aria-haspopup': L } = e,
            x = (0, f.Q3)('BaseHeaderBar'),
            w = (0, r.jsx)(g, {
                x: 0,
                y: 0,
                width: E,
                height: E,
                size: 'custom',
                className: s()(n, p.icon),
                colorClass: null != h ? h : void 0,
                secondaryColorClass: null != m ? m : void 0,
                color: null != _ ? _ : 'currentColor'
            }),
            P = C;
        return (
            null == P && 'string' == typeof T && (P = T),
            (0, r.jsx)(u.Tooltip, {
                text: T,
                color: b,
                position: S,
                hideOnClick: A,
                shouldShow: !y,
                children: (e) => {
                    let { onMouseEnter: f, onMouseLeave: T, onFocus: b, onBlur: S } = e;
                    return null == v
                        ? (0, r.jsx)('div', {
                              className: s()(t, [p.iconWrapper]),
                              children: (0, r.jsx)(g, {
                                  x: 0,
                                  y: 0,
                                  width: E,
                                  height: E,
                                  size: 'custom',
                                  className: s()(n, p.icon),
                                  colorClass: null != h ? h : void 0,
                                  secondaryColorClass: null != m ? m : void 0,
                                  color: null != _ ? _ : 'currentColor',
                                  'aria-hidden': R,
                                  onMouseEnter: f,
                                  onMouseLeave: T,
                                  onFocus: b,
                                  onBlur: S
                              })
                          })
                        : (0, r.jsxs)(u.Clickable, {
                              tag: 'div',
                              onClick: o ? void 0 : v,
                              onContextMenu: o ? void 0 : I,
                              onMouseEnter: f,
                              onMouseLeave: T,
                              onFocus: b,
                              onBlur: S,
                              className: s()(t, {
                                  [p.iconWrapper]: !0,
                                  [p.clickable]: !o && null != v,
                                  [p.selected]: a
                              }),
                              role: N,
                              'aria-label': P,
                              'aria-hidden': R,
                              'aria-checked': O,
                              'aria-haspopup': L,
                              'aria-expanded': D,
                              tabIndex: o || null == v ? -1 : 0,
                              children: [
                                  l
                                      ? (0, r.jsx)(d.ZP, {
                                            mask: 'top' === c ? d.ZP.Masks.HEADER_BAR_BADGE_TOP : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: x ? E : void 0,
                                            width: x ? E : void 0,
                                            children: w
                                        })
                                      : w,
                                  l ? (0, r.jsx)('span', { className: s()(p.iconBadge, 'top' === c ? p.iconBadgeTop : p.iconBadgeBottom) }) : null,
                                  i
                              ]
                          });
                }
            })
        );
    },
    m = (e) => {
        let { className: t } = e;
        return (0, f.Q3)('BaseHeaderBar.Divider') ? (0, r.jsx)(_.Z, { className: s()(p.dot, t) }) : (0, r.jsx)('div', { className: s()(p.divider, t) });
    },
    g = (e) => {
        let { className: t, innerClassName: n, children: a, childrenBottom: d, toolbar: f, onDoubleClick: _, 'aria-label': h, 'aria-labelledby': m, role: g, scrollable: E, transparent: v = !1 } = e,
            I = i.useRef(null),
            T = i.useContext(c.Z);
        return (0, r.jsx)('section', {
            className: s()(t, p.container, {
                [p.themed]: !v,
                [p.transparent]: v,
                [p.themedMobile]: l.tq
            }),
            'aria-label': h,
            'aria-labelledby': m,
            role: g,
            ref: I,
            children: (0, r.jsxs)(u.FocusRingScope, {
                containerRef: I,
                children: [
                    (0, r.jsxs)('div', {
                        className: p.upperContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: s()(p.children, n, { [p.scrollable]: E }),
                                onDoubleClick: _,
                                children: [
                                    l.tq && null != T
                                        ? (0, r.jsx)(o.r, {
                                              onClick: T,
                                              className: p.hamburger
                                          })
                                        : null,
                                    a
                                ]
                            }),
                            null != f
                                ? (0, r.jsx)('div', {
                                      className: p.toolbar,
                                      children: f
                                  })
                                : null
                        ]
                    }),
                    d
                ]
            })
        });
    };
(g.Icon = h),
    (g.Title = (e) => {
        let { className: t, wrapperClassName: n, children: i, onContextMenu: a, onClick: o, id: l, muted: c = !1, level: d = 1 } = e,
            _ = (0, f.Q3)('BaseHeaderBar'),
            h = (0, r.jsx)(u.HeadingLevel, {
                forceLevel: d,
                children: (0, r.jsx)(u.Heading, {
                    variant: _ ? 'text-md/medium' : 'heading-md/semibold',
                    color: c ? 'header-secondary' : void 0,
                    className: s()(t, p.title),
                    id: l,
                    children: i
                })
            });
        return null != o
            ? (0, r.jsx)(u.Clickable, {
                  onClick: o,
                  onContextMenu: a,
                  className: s()(n, p.titleWrapper),
                  children: h
              })
            : (0, r.jsx)('div', {
                  className: s()(n, p.titleWrapper),
                  onContextMenu: a,
                  children: h
              });
    }),
    (g.Divider = m),
    (g.Caret = function (e) {
        let { direction: t = 'right' } = e;
        return 'right' === t
            ? (0, r.jsx)(u.ChevronSmallRightIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: p.caret
              })
            : (0, r.jsx)(u.ChevronSmallLeftIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: p.caret
              });
    }),
    (t.ZP = g);
