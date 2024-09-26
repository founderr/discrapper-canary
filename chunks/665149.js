n.d(t, {
    JO: function () {
        return h;
    },
    iz: function () {
        return p;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(608863),
    l = n(873546),
    u = n(481060),
    c = n(290297),
    d = n(686546),
    _ = n(977148);
let E = 24,
    f = (e) => {
        let { className: t, wrapperClassName: n, children: i, onContextMenu: a, onClick: s, id: l, muted: c = !1, level: d = 1 } = e,
            E = (0, r.jsx)(u.HeadingLevel, {
                forceLevel: d,
                children: (0, r.jsx)(u.Heading, {
                    variant: 'heading-md/semibold',
                    color: c ? 'header-secondary' : void 0,
                    className: o()(t, _.title),
                    id: l,
                    children: i
                })
            });
        return null != s
            ? (0, r.jsx)(u.Clickable, {
                  onClick: s,
                  onContextMenu: a,
                  className: o()(n, _.titleWrapper),
                  children: E
              })
            : (0, r.jsx)('div', {
                  className: o()(n, _.titleWrapper),
                  onContextMenu: a,
                  children: E
              });
    },
    h = (e) => {
        let { className: t, iconClassName: n, children: i, selected: a = !1, disabled: s = !1, showBadge: l = !1, badgePosition: c = 'bottom', color: f, foreground: h, background: p, icon: m, onClick: I, onContextMenu: T, tooltip: g = null, tooltipColor: S, tooltipPosition: A = 'bottom', tooltipDisabled: v, hideOnClick: N = !0, role: O, 'aria-label': R, 'aria-hidden': C, 'aria-checked': y, 'aria-expanded': L, 'aria-haspopup': b } = e,
            D = (0, r.jsx)(m, {
                x: 0,
                y: 0,
                width: E,
                height: E,
                size: 'custom',
                className: o()(n, _.icon),
                colorClass: null != h ? h : void 0,
                secondaryColorClass: null != p ? p : void 0,
                color: null != f ? f : 'currentColor'
            }),
            M = R;
        return (
            null == M && 'string' == typeof g && (M = g),
            (0, r.jsx)(u.Tooltip, {
                text: g,
                color: S,
                position: A,
                hideOnClick: N,
                shouldShow: !v,
                children: (e) => {
                    let { onMouseEnter: g, onMouseLeave: S, onFocus: A, onBlur: v } = e;
                    return null == I
                        ? (0, r.jsx)('div', {
                              className: o()(t, [_.iconWrapper]),
                              children: (0, r.jsx)(m, {
                                  x: 0,
                                  y: 0,
                                  width: E,
                                  height: E,
                                  size: 'custom',
                                  className: o()(n, _.icon),
                                  colorClass: null != h ? h : void 0,
                                  secondaryColorClass: null != p ? p : void 0,
                                  color: null != f ? f : 'currentColor',
                                  'aria-hidden': C,
                                  onMouseEnter: g,
                                  onMouseLeave: S,
                                  onFocus: A,
                                  onBlur: v
                              })
                          })
                        : (0, r.jsxs)(u.Clickable, {
                              tag: 'div',
                              onClick: s ? void 0 : I,
                              onContextMenu: s ? void 0 : T,
                              onMouseEnter: g,
                              onMouseLeave: S,
                              onFocus: A,
                              onBlur: v,
                              className: o()(t, {
                                  [_.iconWrapper]: !0,
                                  [_.clickable]: !s && null != I,
                                  [_.selected]: a
                              }),
                              role: O,
                              'aria-label': M,
                              'aria-hidden': C,
                              'aria-checked': y,
                              'aria-haspopup': b,
                              'aria-expanded': L,
                              tabIndex: s || null == I ? -1 : 0,
                              children: [
                                  l
                                      ? (0, r.jsx)(d.ZP, {
                                            mask: 'top' === c ? d.ZP.Masks.HEADER_BAR_BADGE_TOP : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            children: D
                                        })
                                      : D,
                                  l ? (0, r.jsx)('span', { className: o()(_.iconBadge, 'top' === c ? _.iconBadgeTop : _.iconBadgeBottom) }) : null,
                                  i
                              ]
                          });
                }
            })
        );
    },
    p = (e) => {
        let { className: t } = e;
        return (0, r.jsx)('div', { className: o()(_.divider, t) });
    };
function m(e) {
    let { direction: t = 'right' } = e;
    return 'right' === t
        ? (0, r.jsx)(u.ChevronSmallRightIcon, {
              size: 'md',
              color: 'currentColor',
              className: _.caret
          })
        : (0, r.jsx)(u.ChevronSmallLeftIcon, {
              size: 'md',
              color: 'currentColor',
              className: _.caret
          });
}
let I = (e) => {
    let { className: t, innerClassName: n, children: a, childrenBottom: d, toolbar: E, onDoubleClick: f, 'aria-label': h, 'aria-labelledby': p, role: m, scrollable: I, transparent: T = !1 } = e,
        g = i.useRef(null),
        S = i.useContext(c.Z);
    return (0, r.jsx)('section', {
        className: o()(t, _.container, {
            [_.themed]: !T,
            [_.transparent]: T,
            [_.themedMobile]: l.tq
        }),
        'aria-label': h,
        'aria-labelledby': p,
        role: m,
        ref: g,
        children: (0, r.jsxs)(u.FocusRingScope, {
            containerRef: g,
            children: [
                (0, r.jsxs)('div', {
                    className: _.upperContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(_.children, n, { [_.scrollable]: I }),
                            onDoubleClick: f,
                            children: [
                                l.tq && null != S
                                    ? (0, r.jsx)(s.r, {
                                          onClick: S,
                                          className: _.hamburger
                                      })
                                    : null,
                                a
                            ]
                        }),
                        null != E
                            ? (0, r.jsx)('div', {
                                  className: _.toolbar,
                                  children: E
                              })
                            : null
                    ]
                }),
                d
            ]
        })
    });
};
(I.Icon = h), (I.Title = f), (I.Divider = p), (I.Caret = m), (t.ZP = I);
