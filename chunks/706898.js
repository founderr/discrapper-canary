n.d(t, {
    n: function () {
        return y;
    }
});
var r,
    i,
    a,
    o = n(757143);
var s = n(411104);
var l = n(47120);
var u = n(735250),
    c = n(470079),
    d = n(120356),
    _ = n.n(d),
    E = n(372817),
    f = n(866442),
    h = n(692547),
    p = n(1561),
    m = n(993365),
    I = n(981631),
    T = n(176892);
function g(e, t, n) {
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
let S = {
    side: T.side,
    top: T.top,
    'top-pill': T.topPill
};
function A(e) {
    let { className: t, onClick: n, children: r, 'aria-expanded': i, 'aria-controls': a } = e;
    return (0, u.jsx)(p.P, {
        tabIndex: null == n ? -1 : 0,
        className: _()(T.header, t),
        onClick: n,
        'aria-expanded': i,
        'aria-controls': a,
        focusProps: { offset: { top: -6 } },
        children: (0, u.jsx)(m.x, {
            variant: 'eyebrow',
            color: 'none',
            className: T.headerText,
            children: r
        })
    });
}
function v(e) {
    let { style: t } = e;
    return (0, u.jsx)('div', {
        className: T.separator,
        style: t
    });
}
let N = c.forwardRef(function (e, t) {
    let { children: n, id: r, ...i } = e;
    return (0, u.jsx)('div', {
        ...i,
        ref: t,
        role: 'tabpanel',
        id: O(r),
        tabIndex: -1,
        children: n
    });
});
function O(e) {
    return ''.concat(e.replace(/\s+/g, '-').toLowerCase(), '-tab');
}
function R(e, t) {
    if (null == e) return;
    let n = {};
    return 'Selected' === t ? ((n.backgroundColor = e), (n.color = h.Z.unsafe_rawColors.WHITE_500.css), n) : ('Hover' === t && (n.backgroundColor = (0, f.wK)(e, 0.1)), (n.color = e), n);
}
!(function (e) {
    (e.DEFAULT = 'Default'), (e.HOVER = 'Hover'), (e.SELECTED = 'Selected');
})(r || (r = {}));
class C extends (i = c.Component) {
    getStyle() {
        let { color: e, id: t, selectedItem: n, itemType: r } = this.props,
            { hover: i, active: a } = this.state;
        if (null != e) {
            if ('side' === r) return (null != t && n === t) || a ? R(e, 'Selected') : i ? R(e, 'Hover') : R(e);
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
                          color: h.Z.unsafe_rawColors.WHITE_500.css
                      };
        }
    }
    render() {
        let { children: e, className: t, id: n, selectedItem: r, color: i, disabled: a, onContextMenu: o, clickableRef: s, look: l, disableItemStyles: c } = this.props,
            d = this.props['aria-label'],
            E = r === n;
        return (0, u.jsx)(p.P, {
            className: _()(t, {
                [T.item]: !c,
                [T.brand]: 'brand' === l,
                [T.selected]: null == i && E,
                [T.themed]: 'grey' === l,
                [T.disabled]: null == i && a
            }),
            style: this.getStyle(),
            role: 'tab',
            'aria-selected': E,
            'aria-controls': E ? O(''.concat(n)) : void 0,
            'aria-disabled': a,
            tabIndex: E ? 0 : -1,
            onMouseEnter: null != i ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != i ? this.handleMouseOut : void 0,
            onMouseUp: null != i ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: o,
            'aria-label': d,
            ref: s,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', {
                hover: !1,
                active: !1
            }),
            g(this, 'handleClick', (e) => {
                let { disabled: t, onClick: n, id: r, onItemSelect: i } = this.props;
                if (!t) null != n ? n(e) : null != i && i(r);
            }),
            g(this, 'handleMouseDown', () => {
                let { color: e } = this.props;
                null != e && this.setState({ active: !0 });
            }),
            g(this, 'handleMouseUp', () => {
                this.setState({ active: !1 });
            }),
            g(this, 'handleMouseOver', () => {
                this.setState({ hover: !0 });
            }),
            g(this, 'handleMouseOut', () => {
                this.setState({
                    hover: !1,
                    active: !1
                });
            });
    }
}
g(C, 'defaultProps', {
    disabled: !1,
    look: 'grey',
    disableItemStyles: !1
});
class y extends (a = c.Component) {
    render() {
        let { className: e, children: t, type: n = 'side', style: r, 'aria-label': i, orientation: a = 'horizontal' } = this.props;
        return (0, u.jsx)('div', {
            ref: this.tabBarRef,
            className: _()(e, S[n]),
            style: r,
            role: 'tablist',
            'aria-orientation': a,
            onKeyDown: this.handleKeyDown,
            'aria-label': i,
            children: c.Children.map(t, this.renderChildren)
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'tabBarRef', c.createRef()),
            g(
                this,
                'focusManager',
                (0, E.E)({
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
            g(this, 'renderChildren', (e) => {
                let { selectedItem: t, onItemSelect: n, type: r = 'side', look: i = 'grey' } = this.props;
                return c.isValidElement(e)
                    ? c.cloneElement(e, {
                          selectedItem: t,
                          onItemSelect: n,
                          itemType: r,
                          look: i
                      })
                    : null;
            }),
            g(this, 'getNodeForKeydownEvent', async (e) => {
                let { orientation: t = 'horizontal' } = this.props,
                    n = 'vertical' === t ? I.yXg.ARROW_UP : I.yXg.ARROW_LEFT,
                    r = 'vertical' === t ? I.yXg.ARROW_DOWN : I.yXg.ARROW_RIGHT;
                switch (e.which) {
                    case n:
                        return this.focusManager.getPreviousFocusableElement();
                    case r:
                        return this.focusManager.getNextFocusableElement();
                    case I.yXg.HOME:
                        return this.focusManager.getFirstFocusableElement();
                    case I.yXg.END:
                        return this.focusManager.getLastFocusableElement();
                }
                return null;
            }),
            g(this, 'handleKeyDown', async (e) => {
                let t = await this.getNodeForKeydownEvent(e);
                null != t && (e.preventDefault(), t.focus());
            });
    }
}
g(y, 'Header', A), g(y, 'Item', C), g(y, 'Separator', v), g(y, 'Panel', N);
