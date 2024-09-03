n.d(t, {
    ZP: function () {
        return x;
    },
    cy: function () {
        return a;
    },
    iu: function () {
        return i;
    }
}),
    n(47120);
var i,
    a,
    s,
    l,
    r,
    o = n(735250),
    c = n(470079),
    u = n(120356),
    d = n.n(u),
    h = n(780384),
    p = n(481060),
    m = n(626135),
    _ = n(600164),
    f = n(981631),
    E = n(689938),
    C = n(834095);
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
((l = i || (i = {})).CENTER = 'center'), (l.LEFT = 'left'), ((r = a || (a = {})).TOP = 'top'), (r.MIDDLE = 'middle');
class I extends c.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        m.default.track(f.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        m.default.track(f.rMx.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed
        });
    }
    render() {
        let { renderMedia: e, textAlign: t, isLongText: n, title: i, body: a, className: s, forceTheme: l, onClickSkipAll: r } = this.props,
            c = 'left' === t || n,
            u = 'center' === t || !c;
        return (0, o.jsxs)(p.Dialog, {
            className: d()(C.popoutRoot, s),
            children: [
                null != e &&
                    (0, o.jsx)(_.Z, {
                        className: C.mediaContainer,
                        justify: c ? _.Z.Justify.START : _.Z.Justify.CENTER,
                        children: e()
                    }),
                (0, o.jsx)(p.H, {
                    className: d()({
                        [C.titleCenter]: u,
                        [C.titleLeft]: c
                    }),
                    children: i
                }),
                (0, o.jsx)('string' == typeof a ? 'p' : 'div', {
                    className: d()({
                        [C.bodyCenter]: u,
                        [C.bodyLeft]: c
                    }),
                    children: a
                }),
                (0, o.jsxs)(_.Z, {
                    className: C.buttonContainer,
                    justify: c ? _.Z.Justify.BETWEEN : _.Z.Justify.CENTER,
                    children: [
                        (0, o.jsx)(p.Button, {
                            size: p.ButtonSizes.SMALL,
                            onClick: this.handleDismiss,
                            children: E.Z.Messages.TUTORIAL_CLOSE
                        }),
                        (0, o.jsx)(p.Button, {
                            size: p.ButtonSizes.SMALL,
                            look: p.Button.Looks.BLANK,
                            onClick: r,
                            color: (0, h.ap)(l) ? p.Button.Colors.PRIMARY : p.Button.Colors.WHITE,
                            className: c ? C.buttonSkipLeftAlign : C.buttonSkipCenterAlign,
                            children: E.Z.Messages.SKIP_ALL_TIPS
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', { confirmed: !1 }),
            g(this, 'handleDismiss', () => {
                let { onClickComplete: e } = this.props;
                this.setState({ confirmed: !0 }, () => (null == e ? void 0 : e()));
            });
    }
}
class x extends (s = c.PureComponent) {
    render() {
        let { renderMedia: e, textAlign: t, onComplete: n, onSkipAll: i, isLongText: a, title: s, body: l, children: r, spacing: c, forceTheme: u, ...d } = this.props,
            h = 'top' === d.position || 'bottom' === d.position ? 'center' : 'top';
        return (0, o.jsx)(p.Popout, {
            ...d,
            align: h,
            spacing: null != c ? c : 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: r
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'onClickComplete', (e) => {
                e(), this.props.onComplete();
            }),
            g(this, 'onClickSkipAll', (e) => {
                let { onSkipAll: t, uniqueId: n } = this.props;
                e(), t(), m.default.track(f.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            g(this, 'renderPopoutContent', (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: i, isLongText: a, arrowAlignment: s, renderMedia: l } = this.props,
                    r = null != l;
                return (0, o.jsx)(p.ThemeProvider, {
                    theme: i,
                    children: (e) =>
                        (0, o.jsx)(I, {
                            ...this.props,
                            className: d()(
                                {
                                    [C.bottom]: 'bottom' === n,
                                    [C.contentNarrowNoMedia]: !a && !r,
                                    [C.contentNarrowWithMedia]: !a && r,
                                    [C.contentWideNoMedia]: a && !r,
                                    [C.contentWideWithMedia]: a && r,
                                    [C.right]: 'right' === n,
                                    [C.top]: 'top' === n,
                                    [C.left]: 'left' === n,
                                    [C.arrowAlignmentTop]: 'top' === s,
                                    [C.arrowAlignmentMiddle]: 'middle' === s,
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
g(x, 'TextAlignments', i), g(x, 'defaultProps', { textAlign: 'left' });
