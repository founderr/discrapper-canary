n.d(t, {
    ZP: function () {
        return I;
    },
    cy: function () {
        return l;
    },
    iu: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    r,
    a,
    s,
    o = n(200651),
    c = n(192379),
    u = n(120356),
    d = n.n(u),
    h = n(780384),
    m = n(481060),
    p = n(626135),
    f = n(600164),
    g = n(981631),
    C = n(388032),
    x = n(380752);
function v(e, t, n) {
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
((a = i || (i = {})).CENTER = 'center'), (a.LEFT = 'left'), ((s = l || (l = {})).TOP = 'top'), (s.MIDDLE = 'middle');
class _ extends c.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        p.default.track(g.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        p.default.track(g.rMx.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed
        });
    }
    render() {
        let { renderMedia: e, textAlign: t, isLongText: n, title: i, body: l, className: r, forceTheme: a, onClickSkipAll: s } = this.props,
            c = 'left' === t || n,
            u = 'center' === t || !c;
        return (0, o.jsxs)(m.Dialog, {
            className: d()(x.popoutRoot, r),
            children: [
                null != e &&
                    (0, o.jsx)(f.Z, {
                        className: x.mediaContainer,
                        justify: c ? f.Z.Justify.START : f.Z.Justify.CENTER,
                        children: e()
                    }),
                (0, o.jsx)(m.H, {
                    className: d()({
                        [x.titleCenter]: u,
                        [x.titleLeft]: c
                    }),
                    children: i
                }),
                (0, o.jsx)('string' == typeof l ? 'p' : 'div', {
                    className: d()({
                        [x.bodyCenter]: u,
                        [x.bodyLeft]: c
                    }),
                    children: l
                }),
                (0, o.jsxs)(f.Z, {
                    className: x.buttonContainer,
                    justify: c ? f.Z.Justify.BETWEEN : f.Z.Justify.CENTER,
                    children: [
                        (0, o.jsx)(m.Button, {
                            size: m.ButtonSizes.SMALL,
                            onClick: this.handleDismiss,
                            children: C.intl.string(C.t['+IrDzM'])
                        }),
                        (0, o.jsx)(m.Button, {
                            size: m.ButtonSizes.SMALL,
                            look: m.Button.Looks.BLANK,
                            onClick: s,
                            color: (0, h.ap)(a) ? m.Button.Colors.PRIMARY : m.Button.Colors.WHITE,
                            className: c ? x.buttonSkipLeftAlign : x.buttonSkipCenterAlign,
                            children: C.intl.string(C.t['33wtxs'])
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', { confirmed: !1 }),
            v(this, 'handleDismiss', () => {
                let { onClickComplete: e } = this.props;
                this.setState({ confirmed: !0 }, () => (null == e ? void 0 : e()));
            });
    }
}
class I extends (r = c.PureComponent) {
    render() {
        let { renderMedia: e, textAlign: t, onComplete: n, onSkipAll: i, isLongText: l, title: r, body: a, children: s, spacing: c, forceTheme: u, ...d } = this.props,
            h = 'top' === d.position || 'bottom' === d.position ? 'center' : 'top';
        return (0, o.jsx)(m.Popout, {
            ...d,
            align: h,
            spacing: null != c ? c : 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: s
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'onClickComplete', (e) => {
                e(), this.props.onComplete();
            }),
            v(this, 'onClickSkipAll', (e) => {
                let { onSkipAll: t, uniqueId: n } = this.props;
                e(), t(), p.default.track(g.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            v(this, 'renderPopoutContent', (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: i, isLongText: l, arrowAlignment: r, renderMedia: a } = this.props,
                    s = null != a;
                return (0, o.jsx)(m.ThemeProvider, {
                    theme: i,
                    children: (e) =>
                        (0, o.jsx)(_, {
                            ...this.props,
                            className: d()(
                                {
                                    [x.bottom]: 'bottom' === n,
                                    [x.contentNarrowNoMedia]: !l && !s,
                                    [x.contentNarrowWithMedia]: !l && s,
                                    [x.contentWideNoMedia]: l && !s,
                                    [x.contentWideWithMedia]: l && s,
                                    [x.right]: 'right' === n,
                                    [x.top]: 'top' === n,
                                    [x.left]: 'left' === n,
                                    [x.arrowAlignmentTop]: 'top' === r,
                                    [x.arrowAlignmentMiddle]: 'middle' === r,
                                    'force-theme': null != i
                                },
                                e
                            ),
                            onClickComplete: () => this.onClickComplete(t),
                            onClickSkipAll: () => this.onClickSkipAll(t)
                        })
                });
            });
    }
}
v(I, 'TextAlignments', i), v(I, 'defaultProps', { textAlign: 'left' });
