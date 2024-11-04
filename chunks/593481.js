n.d(t, {
    IC: function () {
        return r;
    },
    QR: function () {
        return E;
    },
    Yj: function () {
        return x;
    },
    iz: function () {
        return _;
    }
});
var i,
    r,
    s,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(481060),
    u = n(294033),
    h = n(388032),
    p = n(157004),
    f = n(113207);
function m(e, t, n) {
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
let g = (e) => e.stopPropagation(),
    v = () =>
        (0, l.jsx)('div', {
            className: p.clickBlocker,
            onClick: g,
            onMouseEnter: g,
            onMouseOver: g
        }),
    _ = () => (0, l.jsx)('div', { className: p.divider }),
    E = (e, t, n) =>
        (0, l.jsx)('div', {
            className: p.keybindMessage,
            children: h.intl.format(n, {
                keybind: t,
                keybindHook: (e, n) =>
                    (0, l.jsx)(
                        u.Z,
                        {
                            keybind: t,
                            className: p.keybind
                        },
                        n
                    )
            })
        }),
    x = (e, t) =>
        (0, l.jsx)('div', {
            className: p.hintSubtleText,
            children: t
        });
((i = r || (r = {})).PRIMARY = 'PRIMARY'), (i.BRAND = 'BRAND'), (i.DANGER = 'DANGER');
class I extends (s = a.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { expand: n } = e,
            { expanded: i } = t;
        return !i && n ? { expanded: !0 } : null;
    }
    componentDidMount() {
        let { onNotificationShow: e } = this.props;
        null == e || e();
    }
    componentDidUpdate(e) {
        let { onNotificationShow: t } = this.props;
        null != t && null == e.onNotificationShow && t();
    }
    renderCloseButton() {
        return (0, l.jsx)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            onClick: this.handleDismiss,
            className: p.dismissButton,
            'aria-label': h.intl.string(h.t.LnEgqa),
            children: (0, l.jsx)(d.XSmallIcon, {
                size: 'xs',
                color: 'currentColor',
                className: p.dismissIcon
            })
        });
    }
    renderHint() {
        let {
            props: { hint: e, colorScheme: t },
            state: { expanded: n }
        } = this;
        if (null == e) return null;
        if ('function' == typeof e) {
            let i = e(n, t);
            return null != i
                ? (0, l.jsxs)(
                      a.Fragment,
                      {
                          children: [(0, l.jsx)(_, {}), i]
                      },
                      'hint-custom'
                  )
                : null;
        }
        return (0, l.jsxs)(
            a.Fragment,
            {
                children: [
                    (0, l.jsx)(_, {}),
                    (0, l.jsx)(
                        'div',
                        {
                            className: 'string' == typeof e ? p.hintText : void 0,
                            children: e
                        },
                        'hint-text'
                    )
                ]
            },
            'hint-text'
        );
    }
    renderFooter() {
        let {
            props: { renderFooter: e, cancelText: t, confirmText: n, onConfirmClick: i, onCancelClick: r, hint: s, colorScheme: o },
            state: { expanded: c }
        } = this;
        if (!c) return null != s ? this.renderHint() : null;
        if (null != e) {
            let t = e(c, o);
            return null != t
                ? (0, l.jsxs)(
                      a.Fragment,
                      {
                          children: [(0, l.jsx)(_, {}), t]
                      },
                      'footer-custom-content'
                  )
                : null;
        }
        if (null != i || null != r) {
            let e = d.Button.Colors.GREEN,
                s = d.Button.Colors.PRIMARY,
                c = d.Button.Looks.FILLED;
            switch (o) {
                case 'DANGER':
                case 'BRAND':
                    (e = s = d.Button.Colors.WHITE), (c = d.Button.Looks.OUTLINED);
            }
            return (0, l.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, l.jsx)(_, {}),
                        (0, l.jsxs)('div', {
                            className: p.buttonContainer,
                            children: [
                                null != i
                                    ? (0, l.jsx)(d.Button, {
                                          fullWidth: !0,
                                          size: d.Button.Sizes.SMALL,
                                          color: e,
                                          onClick: this.handleConfirmClick,
                                          className: p.button,
                                          innerClassName: p.innerText,
                                          children: null != n ? n : h.intl.string(h.t.BddRzc)
                                      })
                                    : null,
                                null != r
                                    ? (0, l.jsx)(d.Button, {
                                          fullWidth: !0,
                                          size: d.Button.Sizes.SMALL,
                                          look: c,
                                          color: s,
                                          onClick: this.handleCancelClick,
                                          className: p.button,
                                          children: null != t ? t : h.intl.string(h.t['ETE/oK'])
                                      })
                                    : null
                            ]
                        })
                    ]
                },
                'footer-button-content'
            );
        }
        return this.renderHint();
    }
    renderIcon() {
        let { icon: e } = this.props;
        return null == e
            ? null
            : 'string' == typeof e
              ? (0, l.jsx)(d.Avatar, {
                    src: e,
                    size: d.AvatarSizes.SIZE_40,
                    className: p.avatar,
                    'aria-hidden': !0
                })
              : (0, l.jsx)('div', {
                    className: p.avatar,
                    children: e
                });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, l.jsxs)('div', {
            className: p.content,
            children: [
                this.renderIcon(),
                (0, l.jsxs)('div', {
                    className: p.details,
                    children: [
                        (0, l.jsx)('div', {
                            className: p.title,
                            children: t
                        }),
                        null != e
                            ? (0, l.jsx)('div', {
                                  className: c()(p.body, f.marginTop4),
                                  style: {
                                      WebkitLineClamp: n,
                                      lineClamp: n
                                  },
                                  children: e
                              })
                            : null
                    ]
                })
            ]
        });
    }
    render() {
        let {
                props: { onNotificationClick: e, colorScheme: t, disabled: n },
                state: { expanded: i }
            } = this,
            r = null != e ? d.Clickable : 'div';
        return (0, l.jsxs)(r, {
            onMouseOver: i ? null : this.handleMouseEnter,
            onFocus: i ? null : this.handleMouseEnter,
            onClick: e,
            className: c()(p.container, {
                [p.themePrimary]: 'PRIMARY' === t,
                [p.themeBrand]: 'BRAND' === t,
                [p.themeDanger]: 'DANGER' === t,
                [p.clickable]: null != e && !n
            }),
            children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), n ? (0, l.jsx)(v, {}) : null]
        });
    }
    constructor(e) {
        super(e),
            m(this, 'handleDismiss', (e) => {
                e.stopPropagation();
                let { onDismissClick: t } = this.props;
                null == t || t(e);
            }),
            m(this, 'handleConfirmClick', (e) => {
                e.stopPropagation();
                let { onConfirmClick: t } = this.props;
                null == t || t(e);
            }),
            m(this, 'handleCancelClick', (e) => {
                e.stopPropagation();
                let { onCancelClick: t } = this.props;
                null == t || t(e);
            }),
            m(this, 'handleMouseEnter', () => {
                !this.props.disabled && this.setState({ expanded: !0 });
            });
        let { expand: t } = e;
        this.state = { expanded: t };
    }
}
m(I, 'ColorSchemes', r),
    m(I, 'defaultProps', {
        maxBodyLines: void 0,
        colorScheme: 'PRIMARY',
        expand: !1,
        disabled: !1
    }),
    (t.ZP = I);
