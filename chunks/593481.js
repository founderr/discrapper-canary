n.d(t, {
    IC: function () {
        return s;
    },
    QR: function () {
        return I;
    },
    Yj: function () {
        return Z;
    },
    iz: function () {
        return m;
    }
});
var i,
    s,
    r,
    a = n(735250),
    o = n(470079),
    l = n(120356),
    c = n.n(l),
    d = n(481060),
    u = n(294033),
    h = n(689938),
    p = n(157004),
    f = n(113207);
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
let E = (e) => e.stopPropagation(),
    g = () =>
        (0, a.jsx)('div', {
            className: p.clickBlocker,
            onClick: E,
            onMouseEnter: E,
            onMouseOver: E
        }),
    m = () => (0, a.jsx)('div', { className: p.divider }),
    I = (e, t, n) =>
        (0, a.jsx)('div', {
            className: p.keybindMessage,
            children: n.format({
                keybind: t,
                keybindHook: (e, n) =>
                    (0, a.jsx)(
                        u.Z,
                        {
                            keybind: t,
                            className: p.keybind
                        },
                        n
                    )
            })
        }),
    Z = (e, t) =>
        (0, a.jsx)('div', {
            className: p.hintSubtleText,
            children: t
        });
((i = s || (s = {})).PRIMARY = 'PRIMARY'), (i.BRAND = 'BRAND'), (i.DANGER = 'DANGER');
class v extends (r = o.PureComponent) {
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
        return (0, a.jsx)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            onClick: this.handleDismiss,
            className: p.dismissButton,
            'aria-label': h.Z.Messages.NOTIFICATION_DISMISS,
            children: (0, a.jsx)(d.XSmallIcon, {
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
                ? (0, a.jsxs)(
                      o.Fragment,
                      {
                          children: [(0, a.jsx)(m, {}), i]
                      },
                      'hint-custom'
                  )
                : null;
        }
        return (0, a.jsxs)(
            o.Fragment,
            {
                children: [
                    (0, a.jsx)(m, {}),
                    (0, a.jsx)(
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
            props: { renderFooter: e, cancelText: t, confirmText: n, onConfirmClick: i, onCancelClick: s, hint: r, colorScheme: l },
            state: { expanded: c }
        } = this;
        if (!c) return null != r ? this.renderHint() : null;
        if (null != e) {
            let t = e(c, l);
            return null != t
                ? (0, a.jsxs)(
                      o.Fragment,
                      {
                          children: [(0, a.jsx)(m, {}), t]
                      },
                      'footer-custom-content'
                  )
                : null;
        }
        if (null != i || null != s) {
            let e = d.Button.Colors.GREEN,
                r = d.Button.Colors.PRIMARY,
                c = d.Button.Looks.FILLED;
            switch (l) {
                case 'DANGER':
                case 'BRAND':
                    (e = r = d.Button.Colors.WHITE), (c = d.Button.Looks.OUTLINED);
            }
            return (0, a.jsxs)(
                o.Fragment,
                {
                    children: [
                        (0, a.jsx)(m, {}),
                        (0, a.jsxs)('div', {
                            className: p.buttonContainer,
                            children: [
                                null != i
                                    ? (0, a.jsx)(d.Button, {
                                          fullWidth: !0,
                                          size: d.Button.Sizes.SMALL,
                                          color: e,
                                          onClick: this.handleConfirmClick,
                                          className: p.button,
                                          innerClassName: p.innerText,
                                          children: null != n ? n : h.Z.Messages.OKAY
                                      })
                                    : null,
                                null != s
                                    ? (0, a.jsx)(d.Button, {
                                          fullWidth: !0,
                                          size: d.Button.Sizes.SMALL,
                                          look: c,
                                          color: r,
                                          onClick: this.handleCancelClick,
                                          className: p.button,
                                          children: null != t ? t : h.Z.Messages.CANCEL
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
              ? (0, a.jsx)(d.Avatar, {
                    src: e,
                    size: d.AvatarSizes.SIZE_40,
                    className: p.avatar,
                    'aria-hidden': !0
                })
              : (0, a.jsx)('div', {
                    className: p.avatar,
                    children: e
                });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, a.jsxs)('div', {
            className: p.content,
            children: [
                this.renderIcon(),
                (0, a.jsxs)('div', {
                    className: p.details,
                    children: [
                        (0, a.jsx)('div', {
                            className: p.title,
                            children: t
                        }),
                        null != e
                            ? (0, a.jsx)('div', {
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
            s = null != e ? d.Clickable : 'div';
        return (0, a.jsxs)(s, {
            onMouseOver: i ? null : this.handleMouseEnter,
            onFocus: i ? null : this.handleMouseEnter,
            onClick: e,
            className: c()(p.container, {
                [p.themePrimary]: 'PRIMARY' === t,
                [p.themeBrand]: 'BRAND' === t,
                [p.themeDanger]: 'DANGER' === t,
                [p.clickable]: null != e && !n
            }),
            children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), n ? (0, a.jsx)(g, {}) : null]
        });
    }
    constructor(e) {
        super(e),
            _(this, 'handleDismiss', (e) => {
                e.stopPropagation();
                let { onDismissClick: t } = this.props;
                null == t || t(e);
            }),
            _(this, 'handleConfirmClick', (e) => {
                e.stopPropagation();
                let { onConfirmClick: t } = this.props;
                null == t || t(e);
            }),
            _(this, 'handleCancelClick', (e) => {
                e.stopPropagation();
                let { onCancelClick: t } = this.props;
                null == t || t(e);
            }),
            _(this, 'handleMouseEnter', () => {
                !this.props.disabled && this.setState({ expanded: !0 });
            });
        let { expand: t } = e;
        this.state = { expanded: t };
    }
}
_(v, 'ColorSchemes', s),
    _(v, 'defaultProps', {
        maxBodyLines: void 0,
        colorScheme: 'PRIMARY',
        expand: !1,
        disabled: !1
    }),
    (t.ZP = v);
