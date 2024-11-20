n.d(t, {
    F: function () {
        return p;
    },
    n: function () {
        return g;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(924826),
    u = n(481060),
    c = n(600164),
    d = n(313201),
    f = n(487760);
function _(e, t, n) {
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
class p extends i.PureComponent {
    render() {
        let { label: e, value: t, renderValue: n, className: i } = this.props;
        return (0, r.jsxs)(c.Z, {
            className: s()(f.quickSelect, i),
            align: c.Z.Align.CENTER,
            children: [
                (0, r.jsx)('div', {
                    className: f.quickSelectLabel,
                    children: e
                }),
                (0, r.jsxs)(c.Z, {
                    align: c.Z.Align.CENTER,
                    className: f.quickSelectClick,
                    children: [
                        (0, r.jsx)('div', {
                            className: f.quickSelectValue,
                            children: null != n ? n(t) : t.label
                        }),
                        (0, r.jsx)('div', { className: f.quickSelectArrow })
                    ]
                })
            ]
        });
    }
}
class h extends i.PureComponent {
    render() {
        let { selected: e, renderOption: t, option: n } = this.props;
        return (0, r.jsx)(o.mh, {
            id: n.key,
            children: (i) =>
                (0, r.jsx)(u.Clickable, {
                    focusProps: { enabled: !1 },
                    className: s()(f.quickSelectPopoutOption, { selected: e }),
                    onClick: this.handleClick,
                    ...i,
                    role: 'option',
                    children: t(n, e)
                })
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleClick', () => {
                let { option: e, onChange: t } = this.props;
                null == t || t(e);
            });
    }
}
function m(e) {
    let { options: t, value: n, scroller: i, renderOption: a, onChange: c, className: _ } = e,
        p = s()(f.quickSelectPopout, _, { [f.quickSelectPopoutScroll]: i }),
        m = t.map((e) => {
            let t = null != n && e.value === n.value,
                i = t ? void 0 : c;
            return (0, r.jsx)(
                h,
                {
                    className: f.quickSelectPopoutOption,
                    renderOption: a,
                    option: e,
                    onChange: i,
                    selected: t
                },
                e.key || e.value
            );
        }),
        g = (0, d.Dt)(),
        E = (0, l.ZP)({
            id: g,
            isEnabled: !0,
            wrap: !0,
            async scrollToStart() {},
            async scrollToEnd() {}
        }),
        { ref: v, ...I } = E.containerProps;
    return (
        (0, u.useFocusLock)(v),
        (0, r.jsx)(o.bG, {
            navigator: E,
            children: (0, r.jsx)('div', {
                ref: v,
                className: p,
                ...I,
                role: 'listbox',
                children: i
                    ? (0, r.jsx)(u.Scroller, {
                          className: f.quickSelectScroller,
                          children: m
                      })
                    : m
            })
        })
    );
}
class g extends i.PureComponent {
    render() {
        let { label: e, value: t, renderValue: n, className: i, popoutProps: a } = this.props;
        return (0, r.jsx)(u.Popout, {
            ...a,
            renderPopout: this.renderPopout,
            children: (a, s) => {
                let { isShown: o } = s;
                return (0, r.jsx)(u.Clickable, {
                    ...a,
                    className: i,
                    'aria-haspopup': 'listbox',
                    'aria-expanded': o,
                    children: (0, r.jsx)(p, {
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
            _(this, 'renderPopout', (e) => {
                let { closePopout: t } = e,
                    { options: n, value: i, renderOption: a, popoutClassName: s, scroller: o } = this.props;
                return (0, r.jsx)(m, {
                    scroller: !!o,
                    className: s,
                    options: n,
                    value: i,
                    renderOption: a,
                    onChange: (e) => {
                        this.handleChange(e), t();
                    }
                });
            }),
            _(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e);
            });
    }
}
