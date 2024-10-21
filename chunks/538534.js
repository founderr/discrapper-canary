n.d(t, {
    Ee: function () {
        return C;
    },
    Fj: function () {
        return A;
    },
    ar: function () {
        return O;
    },
    xU: function () {
        return v;
    }
}),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(372817),
    u = n(1561),
    c = n(57260),
    d = n(15127),
    _ = n(993365),
    E = n(981729),
    f = n(481060),
    h = n(540059),
    p = n(186523),
    I = n(553826),
    m = n(981631),
    T = n(780994);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = {
    NOT_SET: '',
    NONE: '0',
    SMALL: '7px 10px',
    MEDIUM: '10px'
};
function A(e) {
    let { checked: t, radioItemIconClassName: n, icon: r } = e;
    return (0, h.Q)('RadioGroup')
        ? (0, i.jsxs)('svg', {
              className: o()(T.radioIndicator, n),
              viewBox: '0 0 24 24',
              children: [
                  (0, i.jsx)('circle', {
                      cx: '12',
                      cy: '12',
                      r: '12',
                      fill: t ? f.tokens.colors.REDESIGN_INPUT_CONTROL_SELECTED.css : 'transparent'
                  }),
                  (0, i.jsx)('circle', {
                      cx: '12',
                      cy: '12',
                      r: '12',
                      strokeWidth: 2,
                      stroke: t ? 'rgba(255, 255, 255, 0.1)' : 'var(--__temp-input-border)',
                      fill: 'none'
                  }),
                  t
                      ? (0, i.jsx)('circle', {
                            cx: '12',
                            cy: '12',
                            r: '5',
                            fill: 'white'
                        })
                      : null
              ]
          })
        : (0, i.jsxs)('div', {
              className: n,
              children: [
                  t ? (0, i.jsx)(I.Z, { foreground: T.radioIconForeground }) : (0, i.jsx)(p.Z, {}),
                  null != r &&
                      (0, i.jsx)(r, {
                          className: T.icon,
                          size: 'md',
                          color: 'currentColor'
                      })
              ]
          });
}
function N(e) {
    var t;
    let { disabled: n, checked: r, option: a, size: s, onClick: l, infoClassName: c, titleClassName: d, radioItemClassName: E, radioItemIconClassName: f, radioBarClassName: h, hasSelection: p, radioPosition: I = 'left', icon: m, withTransparentBackground: S } = e,
        g = null !== (t = a.color) && void 0 !== t ? t : '',
        N = r || !p,
        R = (0, i.jsx)(A, {
            checked: r,
            radioItemIconClassName: f,
            icon: m
        });
    return (0, i.jsx)(u.P, {
        role: 'radio',
        'aria-checked': r,
        onClick: n ? void 0 : l,
        tabIndex: !n && N ? 0 : -1,
        className: o()(
            null != a.collapsibleContent ? T.collapsibleItem : T.item,
            {
                [T.disabled]: n,
                [T.itemFilled]: !S
            },
            E
        ),
        children: (0, i.jsxs)('div', {
            style: {
                '--radio-bar-accent-color': g,
                padding: s
            },
            className: o()(
                T.radioBar,
                {
                    [T.radioPositionLeft]: 'left' === I,
                    [T.radioPositionRight]: 'right' === I
                },
                h
            ),
            children: [
                'left' === I ? R : null,
                (0, i.jsxs)('div', {
                    className: o()(T.info, c),
                    children: [
                        (0, i.jsx)(_.x, {
                            variant: 'text-md/medium',
                            className: d,
                            color: 'none',
                            children: a.name
                        }),
                        null != a.desc && '' !== a.desc
                            ? (0, i.jsx)(_.x, {
                                  color: 'none',
                                  variant: 'text-sm/normal',
                                  children: a.desc
                              })
                            : null
                    ]
                }),
                'right' === I ? R : null
            ]
        })
    });
}
class R extends (r = a.PureComponent) {
    render() {
        let { checked: e, disabled: t, option: n, size: r, infoClassName: a, hasSelection: s, titleClassName: o, radioItemClassName: l, radioItemIconClassName: u, radioBarClassName: d, collapsibleClassName: _, withTransparentBackground: f, radioPosition: h } = this.props,
            p = t || n.disabled,
            { tooltipText: I, tooltipPosition: m, icon: S } = n,
            g =
                null != n.collapsibleContent
                    ? (0, i.jsx)(c.z, {
                          className: _,
                          isExpanded: e,
                          collapsibleContent: n.collapsibleContent,
                          children: (t) => {
                              let { onClick: c } = t;
                              return (0, i.jsx)(N, {
                                  disabled: !!p,
                                  checked: e,
                                  hasSelection: s,
                                  option: n,
                                  onClick: (e) => {
                                      this.handleClick(e), c(e);
                                  },
                                  size: r,
                                  infoClassName: a,
                                  titleClassName: o,
                                  radioItemClassName: l,
                                  radioItemIconClassName: u,
                                  radioBarClassName: d,
                                  radioPosition: h,
                                  icon: S,
                                  withTransparentBackground: f
                              });
                          }
                      })
                    : (0, i.jsx)(N, {
                          disabled: !!p,
                          checked: e,
                          hasSelection: s,
                          option: n,
                          onClick: this.handleClick,
                          size: r,
                          infoClassName: a,
                          titleClassName: o,
                          radioItemClassName: l,
                          radioItemIconClassName: u,
                          radioBarClassName: d,
                          radioPosition: h,
                          icon: S,
                          withTransparentBackground: f
                      });
        return null != I
            ? (0, i.jsx)(E.u, {
                  text: I,
                  position: null != m ? m : 'top',
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: T.tooltipWrapper,
                          children: g
                      })
              })
            : g;
    }
    constructor(...e) {
        super(...e),
            S(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: t, option: n } = this.props;
                return null == t ? void 0 : t(n);
            });
    }
}
function O() {
    let { orientation: e = 'vertical', isDisabled: t = !1, labelledBy: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = a.useRef(null),
        i = a.useMemo(
            () =>
                (0, l.E)({
                    getFocusableElements() {
                        let e = r.current;
                        return null != e ? Array.from(e.querySelectorAll('[role="radio"]')) : [];
                    },
                    getActiveElement() {
                        var e;
                        return null === (e = r.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    }
                }),
            []
        );
    return {
        role: 'radiogroup',
        onKeyDown: a.useCallback(
            async (t) => {
                if (null == r.current) return;
                let n = 'vertical' === e ? m.yXg.ARROW_UP : m.yXg.ARROW_LEFT,
                    a = 'vertical' === e ? m.yXg.ARROW_DOWN : m.yXg.ARROW_RIGHT;
                switch (t.which) {
                    case a: {
                        t.stopPropagation(), t.preventDefault();
                        let e = await i.getNextFocusableElement({ wrap: !0 });
                        return null == e ? void 0 : e.focus();
                    }
                    case n: {
                        t.stopPropagation(), t.preventDefault();
                        let e = await i.getPreviousFocusableElement({ wrap: !0 });
                        return null == e ? void 0 : e.focus();
                    }
                }
            },
            [i, e]
        ),
        ref: r,
        'aria-labelledby': n,
        'aria-orientation': e,
        'aria-disabled': t
    };
}
function v(e) {
    let { isSelected: t, label: n } = e;
    return {
        role: 'radio',
        tabIndex: t ? 0 : -1,
        'aria-label': n,
        'aria-checked': t
    };
}
function C(e) {
    let { itemInfoClassName: t, itemTitleClassName: n, radioItemClassName: r, collapsibleClassName: a, className: s, value: o = null, size: l = g.MEDIUM, radioPosition: u = 'left', onChange: c = m.dG4, disabled: _ = !1, options: E = [], 'aria-labelledby': f, orientation: h, withTransparentBackground: p } = e,
        I = (0, d.Gc)(),
        T = O({
            labelledBy: null != f ? f : I.titleId,
            orientation: h,
            isDisabled: _
        }),
        S = E.some((e) => e.value === o);
    return (0, i.jsx)('div', {
        ...T,
        className: s,
        children: E.map((e) =>
            (0, i.jsx)(
                R,
                {
                    hasSelection: S,
                    disabled: _,
                    checked: o === e.value,
                    option: e,
                    onClick: c,
                    radioPosition: u,
                    size: l,
                    infoClassName: t,
                    titleClassName: n,
                    radioItemClassName: r,
                    radioItemIconClassName: e.radioItemIconClassName,
                    collapsibleClassName: a,
                    radioBarClassName: e.radioBarClassName,
                    withTransparentBackground: p
                },
                e.value
            )
        )
    });
}
S(R, 'defaultProps', {
    withTransparentBackground: !1,
    radioPosition: 'left'
}),
    (C.Sizes = g);
