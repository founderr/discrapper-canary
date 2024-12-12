r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(995295),
    l = r(990547),
    u = r(442837),
    c = r(481060),
    d = r(239091),
    f = r(40851),
    _ = r(213609),
    h = r(314910),
    p = r(210887),
    m = r(574254),
    g = r(585483),
    E = r(981631);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function I() {
    window.getSelection().removeAllRanges();
}
let T = (e) => {
    let { children: n, close: r, onUnmount: i, target: u, rect: d, position: p, align: m, impressionName: g, impressionProperties: v } = e,
        T = s.useRef(null),
        b = s.useMemo(() => ({ current: u }), [u]);
    s.useEffect(() => {
        var e, n;
        let i = (0, o.findDOMNode)(T.current);
        if (null == i) return;
        let a = (e) => {
            let n = e.target,
                i = (0, o.findDOMNode)(T.current);
            if (!(null != i && (0, c.referencePortalAwareContains)(i, n))) I(), r();
        };
        return (
            null === (e = i.ownerDocument) || void 0 === e || e.addEventListener('click', a, !0),
            null === (n = i.ownerDocument) || void 0 === n || n.addEventListener('contextmenu', a, !0),
            () => {
                var e, n;
                null === (e = i.ownerDocument) || void 0 === e || e.removeEventListener('click', a, !0), null === (n = i.ownerDocument) || void 0 === n || n.removeEventListener('contextmenu', a, !0);
            }
        );
    }, [r]);
    let y = s.useRef(i);
    s.useEffect(() => void (y.current = i)),
        s.useEffect(
            () => () => {
                var e;
                return null === (e = y.current) || void 0 === e ? void 0 : e.call(y);
            },
            []
        ),
        s.useLayoutEffect(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.updatePosition();
        }),
        (0, _.Z)({
            type: l.ImpressionTypes.MENU,
            name: g,
            properties: v
        });
    let S = (0, f.Aq)(),
        A = s.useCallback(() => {
            S.dispatch(E.CkL.POPOUT_SHOW);
        }, [S]),
        N = s.useCallback(() => {
            S.dispatch(E.CkL.POPOUT_HIDE);
        }, [S]);
    return (0, a.jsx)(h.W5, {
        onMount: A,
        onUnmount: N,
        targetRef: b,
        overrideTargetRect: d,
        position: null != p ? p : 'right',
        align: null != m ? m : 'top',
        autoInvert: !0,
        ref: T,
        nudgeAlignIntoViewport: !0,
        children: n
    });
};
class b extends s.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: n } = this.props;
        if ((n.addEventListener('resize', this.closeResize, !0), g.S.subscribe(E.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e)) {
            let n = setTimeout(() => {
                this.setState({ render: () => (0, a.jsx)(c.MenuSpinner, {}) });
            }, 300);
            e().then((e) => {
                this.setState({ render: e }), clearTimeout(n);
            });
        }
    }
    componentDidUpdate(e) {
        let { isOpen: n } = this.props;
        if (!n && e.isOpen) {
            var r, i;
            null === (i = e.config) || void 0 === i || null === (r = i.onClose) || void 0 === r || r.call(i);
        }
    }
    componentWillUnmount() {
        let { renderWindow: e } = this.props;
        e.removeEventListener('resize', this.closeResize, !0), g.S.unsubscribe(E.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    render() {
        var e;
        let { appContext: n, target: r, isOpen: i, theme: s, config: o, rect: l } = this.props,
            u = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
        return i && null != l && null != o && null != r && null != u && o.context === n
            ? (0, a.jsx)(T, {
                  target: r,
                  rect: l,
                  close: this.close,
                  onUnmount: o.onClose,
                  align: o.align,
                  position: o.position,
                  impressionName: o.impressionName,
                  impressionProperties: o.impressionProperties,
                  children: (e, i) => {
                      let { position: a } = e;
                      return u({
                          position: a,
                          theme: s,
                          onHeightUpdate: i,
                          config: o,
                          target: r,
                          context: n
                      });
                  }
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', { render: void 0 }),
            v(this, 'closeResize', (e) => {
                let { renderWindow: n } = this.props;
                if (e.target === n) this.close();
            }),
            v(this, 'close', () => {
                let { isOpen: e, closeContextMenu: n } = this.props;
                e && n();
            });
    }
}
function y() {
    let {
            contextMenu: e,
            version: n,
            isOpen: r
        } = (0, u.cj)([m.Z], () => ({
            contextMenu: m.Z.getContextMenu(),
            version: m.Z.version,
            isOpen: m.Z.isOpen()
        })),
        i = (0, u.e7)([p.Z], () => p.Z.theme),
        { appContext: o, renderWindow: l } = s.useContext(f.ZP);
    return (0, a.jsx)(
        b,
        {
            appContext: o,
            renderWindow: l,
            ...e,
            isOpen: r,
            theme: i,
            closeContextMenu: d.Zy
        },
        n
    );
}
