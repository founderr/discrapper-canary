n.d(t, {
    JO: function () {
        return _;
    },
    iz: function () {
        return p;
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
    f = n(815300);
let _ = (e) => {
        let { className: t, iconClassName: n, children: i, selected: a = !1, disabled: o = !1, showBadge: l = !1, badgePosition: c = 'bottom', color: _, foreground: p, background: h, icon: m, onClick: g, onContextMenu: E, tooltip: v = null, tooltipColor: I, tooltipPosition: b = 'bottom', tooltipDisabled: T, hideOnClick: S = !0, role: y, 'aria-label': A, 'aria-hidden': N, 'aria-checked': C, 'aria-expanded': R, 'aria-haspopup': O } = e,
            D = (0, r.jsx)(m, {
                x: 0,
                y: 0,
                width: 24,
                height: 24,
                size: 'custom',
                className: s()(n, f.icon),
                colorClass: null != p ? p : void 0,
                secondaryColorClass: null != h ? h : void 0,
                color: null != _ ? _ : 'currentColor'
            }),
            L = A;
        return (
            null == L && 'string' == typeof v && (L = v),
            (0, r.jsx)(u.Tooltip, {
                text: v,
                color: I,
                position: b,
                hideOnClick: S,
                shouldShow: !T,
                children: (e) => {
                    let { onMouseEnter: v, onMouseLeave: I, onFocus: b, onBlur: T } = e;
                    return null == g
                        ? (0, r.jsx)('div', {
                              className: s()(t, [f.iconWrapper]),
                              children: (0, r.jsx)(m, {
                                  x: 0,
                                  y: 0,
                                  width: 24,
                                  height: 24,
                                  size: 'custom',
                                  className: s()(n, f.icon),
                                  colorClass: null != p ? p : void 0,
                                  secondaryColorClass: null != h ? h : void 0,
                                  color: null != _ ? _ : 'currentColor',
                                  'aria-hidden': N,
                                  onMouseEnter: v,
                                  onMouseLeave: I,
                                  onFocus: b,
                                  onBlur: T
                              })
                          })
                        : (0, r.jsxs)(u.Clickable, {
                              tag: 'div',
                              onClick: o ? void 0 : g,
                              onContextMenu: o ? void 0 : E,
                              onMouseEnter: v,
                              onMouseLeave: I,
                              onFocus: b,
                              onBlur: T,
                              className: s()(t, {
                                  [f.iconWrapper]: !0,
                                  [f.clickable]: !o && null != g,
                                  [f.selected]: a
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
                                  l ? (0, r.jsx)('span', { className: s()(f.iconBadge, 'top' === c ? f.iconBadgeTop : f.iconBadgeBottom) }) : null,
                                  i
                              ]
                          });
                }
            })
        );
    },
    p = (e) => {
        let { className: t } = e;
        return (0, r.jsx)('div', { className: s()(f.divider, t) });
    },
    h = (e) => {
        let { className: t, innerClassName: n, children: a, childrenBottom: d, toolbar: _, onDoubleClick: p, 'aria-label': h, 'aria-labelledby': m, role: g, scrollable: E, transparent: v = !1 } = e,
            I = i.useRef(null),
            b = i.useContext(c.Z);
        return (0, r.jsx)('section', {
            className: s()(t, f.container, {
                [f.themed]: !v,
                [f.transparent]: v,
                [f.themedMobile]: l.tq
            }),
            'aria-label': h,
            'aria-labelledby': m,
            role: g,
            ref: I,
            children: (0, r.jsxs)(u.FocusRingScope, {
                containerRef: I,
                children: [
                    (0, r.jsxs)('div', {
                        className: f.upperContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: s()(f.children, n, { [f.scrollable]: E }),
                                onDoubleClick: p,
                                children: [
                                    l.tq && null != b
                                        ? (0, r.jsx)(o.r, {
                                              onClick: b,
                                              className: f.hamburger
                                          })
                                        : null,
                                    a
                                ]
                            }),
                            null != _
                                ? (0, r.jsx)('div', {
                                      className: f.toolbar,
                                      children: _
                                  })
                                : null
                        ]
                    }),
                    d
                ]
            })
        });
    };
(h.Icon = _),
    (h.Title = (e) => {
        let { className: t, wrapperClassName: n, children: i, onContextMenu: a, onClick: o, id: l, muted: c = !1, level: d = 1 } = e,
            _ = (0, r.jsx)(u.HeadingLevel, {
                forceLevel: d,
                children: (0, r.jsx)(u.Heading, {
                    variant: 'heading-md/semibold',
                    color: c ? 'header-secondary' : void 0,
                    className: s()(t, f.title),
                    id: l,
                    children: i
                })
            });
        return null != o
            ? (0, r.jsx)(u.Clickable, {
                  onClick: o,
                  onContextMenu: a,
                  className: s()(n, f.titleWrapper),
                  children: _
              })
            : (0, r.jsx)('div', {
                  className: s()(n, f.titleWrapper),
                  onContextMenu: a,
                  children: _
              });
    }),
    (h.Divider = p),
    (h.Caret = function (e) {
        let { direction: t = 'right' } = e;
        return 'right' === t
            ? (0, r.jsx)(u.ChevronSmallRightIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: f.caret
              })
            : (0, r.jsx)(u.ChevronSmallLeftIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: f.caret
              });
    }),
    (t.ZP = h);
