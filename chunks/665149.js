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
        let { className: t, iconClassName: n, children: i, selected: a = !1, disabled: o = !1, showBadge: l = !1, badgePosition: c = 'bottom', color: f, foreground: _, background: h, icon: m, onClick: g, onContextMenu: E, tooltip: v = null, tooltipColor: I, tooltipPosition: T = 'bottom', tooltipDisabled: b, hideOnClick: S = !0, role: y, 'aria-label': A, 'aria-hidden': N, 'aria-checked': C, 'aria-expanded': R, 'aria-haspopup': O } = e,
            D = (0, r.jsx)(m, {
                x: 0,
                y: 0,
                width: 24,
                height: 24,
                size: 'custom',
                className: s()(n, p.icon),
                colorClass: null != _ ? _ : void 0,
                secondaryColorClass: null != h ? h : void 0,
                color: null != f ? f : 'currentColor'
            }),
            L = A;
        return (
            null == L && 'string' == typeof v && (L = v),
            (0, r.jsx)(u.Tooltip, {
                text: v,
                color: I,
                position: T,
                hideOnClick: S,
                shouldShow: !b,
                children: (e) => {
                    let { onMouseEnter: v, onMouseLeave: I, onFocus: T, onBlur: b } = e;
                    return null == g
                        ? (0, r.jsx)('div', {
                              className: s()(t, [p.iconWrapper]),
                              children: (0, r.jsx)(m, {
                                  x: 0,
                                  y: 0,
                                  width: 24,
                                  height: 24,
                                  size: 'custom',
                                  className: s()(n, p.icon),
                                  colorClass: null != _ ? _ : void 0,
                                  secondaryColorClass: null != h ? h : void 0,
                                  color: null != f ? f : 'currentColor',
                                  'aria-hidden': N,
                                  onMouseEnter: v,
                                  onMouseLeave: I,
                                  onFocus: T,
                                  onBlur: b
                              })
                          })
                        : (0, r.jsxs)(u.Clickable, {
                              tag: 'div',
                              onClick: o ? void 0 : g,
                              onContextMenu: o ? void 0 : E,
                              onMouseEnter: v,
                              onMouseLeave: I,
                              onFocus: T,
                              onBlur: b,
                              className: s()(t, {
                                  [p.iconWrapper]: !0,
                                  [p.clickable]: !o && null != g,
                                  [p.selected]: a
                              }),
                              role: y,
                              'aria-label': L,
                              'aria-hidden': N,
                              'aria-checked': C,
                              'aria-haspopup': O,
                              'aria-expanded': R,
                              tabIndex: o || null == g ? -1 : 0,
                              children: [
                                  l
                                      ? (0, r.jsx)(d.ZP, {
                                            mask: 'top' === c ? d.ZP.Masks.HEADER_BAR_BADGE_TOP : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            children: D
                                        })
                                      : D,
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
        return (0, f.Q)('BaseHeaderBar.Divider') ? (0, r.jsx)(_.Z, { className: s()(p.dot, t) }) : (0, r.jsx)('div', { className: s()(p.divider, t) });
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
            _ = (0, f.Q)('BaseHeaderBar'),
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
