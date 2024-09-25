n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(699581),
    s = n(990547),
    l = n(442837),
    u = n(481060),
    c = n(239091),
    d = n(40851),
    _ = n(213609),
    E = n(314910),
    f = n(210887),
    h = n(574254),
    p = n(585483),
    m = n(981631);
function I(e, t, n) {
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
function T() {
    window.getSelection().removeAllRanges();
}
let g = (e) => {
    let { children: t, close: n, onUnmount: r, target: l, rect: c, position: f, align: h, impressionName: p, impressionProperties: I } = e,
        g = a.useRef(null),
        S = a.useMemo(() => ({ current: l }), [l]);
    a.useEffect(() => {
        var e, t;
        let r = (0, o.findDOMNode)(g.current);
        if (null == r) return;
        let i = (e) => {
            let t = e.target,
                r = (0, o.findDOMNode)(g.current);
            if (!(null != r && (0, u.referencePortalAwareContains)(r, t))) T(), n();
        };
        return (
            null === (e = r.ownerDocument) || void 0 === e || e.addEventListener('click', i, !0),
            null === (t = r.ownerDocument) || void 0 === t || t.addEventListener('contextmenu', i, !0),
            () => {
                var e, t;
                null === (e = r.ownerDocument) || void 0 === e || e.removeEventListener('click', i, !0), null === (t = r.ownerDocument) || void 0 === t || t.removeEventListener('contextmenu', i, !0);
            }
        );
    }, [n]);
    let A = a.useRef(r);
    a.useEffect(() => void (A.current = r)),
        a.useEffect(
            () => () => {
                var e;
                return null === (e = A.current) || void 0 === e ? void 0 : e.call(A);
            },
            []
        ),
        a.useLayoutEffect(() => {
            var e;
            null === (e = g.current) || void 0 === e || e.updatePosition();
        }),
        (0, _.Z)({
            type: s.ImpressionTypes.MENU,
            name: p,
            properties: I
        });
    let v = (0, d.Aq)(),
        N = a.useCallback(() => {
            v.dispatch(m.CkL.POPOUT_SHOW);
        }, [v]),
        O = a.useCallback(() => {
            v.dispatch(m.CkL.POPOUT_HIDE);
        }, [v]);
    return (0, i.jsx)(E.W5, {
        onMount: N,
        onUnmount: O,
        targetRef: S,
        overrideTargetRect: c,
        position: null != f ? f : 'right',
        align: null != h ? h : 'top',
        autoInvert: !0,
        ref: g,
        nudgeAlignIntoViewport: !0,
        children: t
    });
};
class S extends a.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if ((t.addEventListener('resize', this.closeResize, !0), p.S.subscribe(m.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e)) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, i.jsx)(u.MenuSpinner, {}) });
            }, 300);
            e().then((e) => {
                this.setState({ render: e }), clearTimeout(t);
            });
        }
    }
    componentDidUpdate(e) {
        let { isOpen: t } = this.props;
        if (!t && e.isOpen) {
            var n, r;
            null === (r = e.config) || void 0 === r || null === (n = r.onClose) || void 0 === n || n.call(r);
        }
    }
    componentWillUnmount() {
        let { renderWindow: e } = this.props;
        e.removeEventListener('resize', this.closeResize, !0), p.S.unsubscribe(m.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    render() {
        var e;
        let { appContext: t, target: n, isOpen: r, theme: a, config: o, rect: s } = this.props,
            l = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
        return r && null != s && null != o && null != n && null != l && o.context === t
            ? (0, i.jsx)(g, {
                  target: n,
                  rect: s,
                  close: this.close,
                  onUnmount: o.onClose,
                  align: o.align,
                  position: o.position,
                  impressionName: o.impressionName,
                  impressionProperties: o.impressionProperties,
                  children: (e, r) => {
                      let { position: i } = e;
                      return l({
                          position: i,
                          theme: a,
                          onHeightUpdate: r,
                          config: o,
                          target: n,
                          context: t
                      });
                  }
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', { render: void 0 }),
            I(this, 'closeResize', (e) => {
                let { renderWindow: t } = this.props;
                if (e.target === t) this.close();
            }),
            I(this, 'close', () => {
                let { isOpen: e, closeContextMenu: t } = this.props;
                e && t();
            });
    }
}
function A() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n
        } = (0, l.cj)([h.Z], () => ({
            contextMenu: h.Z.getContextMenu(),
            version: h.Z.version,
            isOpen: h.Z.isOpen()
        })),
        r = (0, l.e7)([f.Z], () => f.Z.theme),
        { appContext: o, renderWindow: s } = a.useContext(d.ZP);
    return (0, i.jsx)(
        S,
        {
            appContext: o,
            renderWindow: s,
            ...e,
            isOpen: n,
            theme: r,
            closeContextMenu: c.Zy
        },
        t
    );
}
