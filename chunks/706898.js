n.d(t, {
    n: function () {
        return y;
    }
}),
    n(757143),
    n(411104),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(200651),
    l = n(192379),
    u = n(120356),
    c = n.n(u),
    d = n(372817),
    f = n(866442),
    _ = n(692547),
    p = n(1561),
    h = n(993365),
    m = n(981631),
    g = n(943947);
function E(e, t, n) {
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
let v = {
        side: g.side,
        top: g.top,
        'top-pill': g.topPill
    },
    I = l.forwardRef(function (e, t) {
        let { children: n, id: r, ...i } = e;
        return (0, o.jsx)('div', {
            ...i,
            ref: t,
            role: 'tabpanel',
            id: b(r),
            tabIndex: -1,
            children: n
        });
    });
function b(e) {
    return ''.concat(e.replace(/\s+/g, '-').toLowerCase(), '-tab');
}
function T(e, t) {
    if (null == e) return;
    let n = {};
    return 'Selected' === t ? ((n.backgroundColor = e), (n.color = _.Z.unsafe_rawColors.WHITE_500.css), n) : ('Hover' === t && (n.backgroundColor = (0, f.wK)(e, 0.1)), (n.color = e), n);
}
((s = r || (r = {})).DEFAULT = 'Default'), (s.HOVER = 'Hover'), (s.SELECTED = 'Selected');
class S extends (i = l.Component) {
    getStyle() {
        let { color: e, id: t, selectedItem: n, itemType: r } = this.props,
            { hover: i, active: a } = this.state;
        if (null != e) {
            if ('side' === r) return (null != t && n === t) || a ? T(e, 'Selected') : i ? T(e, 'Hover') : T(e);
            if ('top' === r)
                return n === t
                    ? {
                          borderColor: e,
                          color: e
                      }
                    : i
                      ? {
                            borderColor: (0, f.wK)(e, 0.1),
                            color: (0, f.wK)(e, 0.6)
                        }
                      : {
                            borderColor: 'transparent',
                            color: (0, f.wK)(e, 0.4)
                        };
            if ('top-pill' === r)
                return n === t
                    ? {
                          backgroundColor: (0, f.wK)(e, 0.2),
                          color: e
                      }
                    : {
                          backgroundColor: e,
                          color: _.Z.unsafe_rawColors.WHITE_500.css
                      };
        }
    }
    render() {
        let { children: e, className: t, id: n, selectedItem: r, color: i, disabled: a, onContextMenu: s, clickableRef: l, look: u, disableItemStyles: d } = this.props,
            f = this.props['aria-label'],
            _ = r === n;
        return (0, o.jsx)(p.P, {
            className: c()(t, {
                [g.item]: !d,
                [g.brand]: 'brand' === u,
                [g.selected]: null == i && _,
                [g.themed]: 'grey' === u,
                [g.disabled]: null == i && a
            }),
            style: this.getStyle(),
            role: 'tab',
            'aria-selected': _,
            'aria-controls': _ ? b(''.concat(n)) : void 0,
            'aria-disabled': a,
            tabIndex: _ ? 0 : -1,
            onMouseEnter: null != i ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != i ? this.handleMouseOut : void 0,
            onMouseUp: null != i ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: s,
            'aria-label': f,
            ref: l,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', {
                hover: !1,
                active: !1
            }),
            E(this, 'handleClick', (e) => {
                let { disabled: t, onClick: n, id: r, onItemSelect: i } = this.props;
                if (!t) null != n ? n(e) : null != i && i(r);
            }),
            E(this, 'handleMouseDown', () => {
                let { color: e } = this.props;
                null != e && this.setState({ active: !0 });
            }),
            E(this, 'handleMouseUp', () => {
                this.setState({ active: !1 });
            }),
            E(this, 'handleMouseOver', () => {
                this.setState({ hover: !0 });
            }),
            E(this, 'handleMouseOut', () => {
                this.setState({
                    hover: !1,
                    active: !1
                });
            });
    }
}
E(S, 'defaultProps', {
    disabled: !1,
    look: 'grey',
    disableItemStyles: !1
});
class y extends (a = l.Component) {
    render() {
        let { className: e, children: t, type: n = 'side', style: r, 'aria-label': i, orientation: a = 'horizontal' } = this.props;
        return (0, o.jsx)('div', {
            ref: this.tabBarRef,
            className: c()(e, v[n]),
            style: r,
            role: 'tablist',
            'aria-orientation': a,
            onKeyDown: this.handleKeyDown,
            'aria-label': i,
            children: l.Children.map(t, this.renderChildren)
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'tabBarRef', l.createRef()),
            E(
                this,
                'focusManager',
                (0, d.E)({
                    getFocusableElements: () => {
                        let e = this.tabBarRef.current;
                        return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : [];
                    },
                    getActiveElement: () => {
                        var e;
                        return null === (e = this.tabBarRef.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    }
                })
            ),
            E(this, 'renderChildren', (e) => {
                let { selectedItem: t, onItemSelect: n, type: r = 'side', look: i = 'grey' } = this.props;
                return l.isValidElement(e)
                    ? l.cloneElement(e, {
                          selectedItem: t,
                          onItemSelect: n,
                          itemType: r,
                          look: i
                      })
                    : null;
            }),
            E(this, 'getNodeForKeydownEvent', async (e) => {
                let { orientation: t = 'horizontal' } = this.props,
                    n = 'vertical' === t ? m.yXg.ARROW_UP : m.yXg.ARROW_LEFT,
                    r = 'vertical' === t ? m.yXg.ARROW_DOWN : m.yXg.ARROW_RIGHT;
                switch (e.which) {
                    case n:
                        return this.focusManager.getPreviousFocusableElement();
                    case r:
                        return this.focusManager.getNextFocusableElement();
                    case m.yXg.HOME:
                        return this.focusManager.getFirstFocusableElement();
                    case m.yXg.END:
                        return this.focusManager.getLastFocusableElement();
                }
                return null;
            }),
            E(this, 'handleKeyDown', async (e) => {
                let t = await this.getNodeForKeydownEvent(e);
                null != t && (e.preventDefault(), t.focus());
            });
    }
}
E(y, 'Header', function (e) {
    let { className: t, onClick: n, children: r, 'aria-expanded': i, 'aria-controls': a } = e;
    return (0, o.jsx)(p.P, {
        tabIndex: null == n ? -1 : 0,
        className: c()(g.header, t),
        onClick: n,
        'aria-expanded': i,
        'aria-controls': a,
        focusProps: { offset: { top: -6 } },
        children: (0, o.jsx)(h.x, {
            variant: 'eyebrow',
            color: 'none',
            className: g.headerText,
            children: r
        })
    });
}),
    E(y, 'Item', S),
    E(y, 'Separator', function (e) {
        let { style: t } = e;
        return (0, o.jsx)('div', {
            className: g.separator,
            style: t
        });
    }),
    E(y, 'Panel', I);
