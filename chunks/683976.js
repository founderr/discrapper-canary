n.d(t, {
    F: function () {
        return h;
    },
    n: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(91192),
    u = n(924826),
    c = n(481060),
    d = n(600164),
    _ = n(313201),
    E = n(487760);
function f(e, t, n) {
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
class h extends a.PureComponent {
    render() {
        let { label: e, value: t, renderValue: n, className: r } = this.props;
        return (0, i.jsxs)(d.Z, {
            className: s()(E.quickSelect, r),
            align: d.Z.Align.CENTER,
            children: [
                (0, i.jsx)('div', {
                    className: E.quickSelectLabel,
                    children: e
                }),
                (0, i.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    className: E.quickSelectClick,
                    children: [
                        (0, i.jsx)('div', {
                            className: E.quickSelectValue,
                            children: null != n ? n(t) : t.label
                        }),
                        (0, i.jsx)('div', { className: E.quickSelectArrow })
                    ]
                })
            ]
        });
    }
}
class p extends a.PureComponent {
    render() {
        let { selected: e, renderOption: t, option: n } = this.props;
        return (0, i.jsx)(l.mh, {
            id: n.key,
            children: (r) =>
                (0, i.jsx)(c.Clickable, {
                    focusProps: { enabled: !1 },
                    className: s()(E.quickSelectPopoutOption, { selected: e }),
                    onClick: this.handleClick,
                    ...r,
                    role: 'option',
                    children: t(n, e)
                })
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'handleClick', () => {
                let { option: e, onChange: t } = this.props;
                null == t || t(e);
            });
    }
}
function m(e) {
    let { options: t, value: n, scroller: r, renderOption: a, onChange: o, className: d } = e,
        f = s()(E.quickSelectPopout, d, { [E.quickSelectPopoutScroll]: r }),
        h = t.map((e) => {
            let t = null != n && e.value === n.value,
                r = t ? void 0 : o;
            return (0, i.jsx)(
                p,
                {
                    className: E.quickSelectPopoutOption,
                    renderOption: a,
                    option: e,
                    onChange: r,
                    selected: t
                },
                e.key || e.value
            );
        }),
        m = (0, _.Dt)(),
        I = (0, u.ZP)({
            id: m,
            isEnabled: !0,
            wrap: !0,
            async scrollToStart() {},
            async scrollToEnd() {}
        }),
        { ref: T, ...g } = I.containerProps;
    return (
        (0, c.useFocusLock)(T),
        (0, i.jsx)(l.bG, {
            navigator: I,
            children: (0, i.jsx)('div', {
                ref: T,
                className: f,
                ...g,
                role: 'listbox',
                children: r
                    ? (0, i.jsx)(c.Scroller, {
                          className: E.quickSelectScroller,
                          children: h
                      })
                    : h
            })
        })
    );
}
class I extends a.PureComponent {
    render() {
        let { label: e, value: t, renderValue: n, className: r, popoutProps: a } = this.props;
        return (0, i.jsx)(c.Popout, {
            ...a,
            renderPopout: this.renderPopout,
            children: (a, o) => {
                let { isShown: s } = o;
                return (0, i.jsx)(c.Clickable, {
                    ...a,
                    className: r,
                    'aria-haspopup': 'listbox',
                    'aria-expanded': s,
                    children: (0, i.jsx)(h, {
                        label: e,
                        value: t,
                        renderValue: n
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'renderPopout', (e) => {
                let { closePopout: t } = e,
                    { options: n, value: r, renderOption: a, popoutClassName: o, scroller: s } = this.props;
                return (0, i.jsx)(m, {
                    scroller: !!s,
                    className: o,
                    options: n,
                    value: r,
                    renderOption: a,
                    onChange: (e) => {
                        this.handleChange(e), t();
                    }
                });
            }),
            f(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e);
            });
    }
}
