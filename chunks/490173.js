r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(990547),
    l = r(442837),
    u = r(481060),
    c = r(239091),
    d = r(40851),
    f = r(213609),
    _ = r(314910),
    h = r(210887),
    p = r(574254),
    m = r(585483),
    g = r(981631);
function E(e, n, r) {
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
function v() {
    window.getSelection().removeAllRanges();
}
let I = (e) => {
    let { children: n, close: r, onUnmount: i, target: l, rect: c, position: h, align: p, impressionName: m, impressionProperties: E } = e,
        I = s.useRef(null),
        T = s.useMemo(() => ({ current: l }), [l]);
    s.useEffect(() => {
        var e, n, i;
        let a = null === (e = I.current) || void 0 === e ? void 0 : e.elementRef.current;
        if (null == a) return;
        let s = (e) => {
            var n;
            let i = e.target,
                a = null === (n = I.current) || void 0 === n ? void 0 : n.elementRef.current;
            if (!(null != a && (0, u.referencePortalAwareContains)(a, i))) v(), r();
        };
        return (
            null === (n = a.ownerDocument) || void 0 === n || n.addEventListener('click', s, !0),
            null === (i = a.ownerDocument) || void 0 === i || i.addEventListener('contextmenu', s, !0),
            () => {
                var e, n;
                null === (e = a.ownerDocument) || void 0 === e || e.removeEventListener('click', s, !0), null === (n = a.ownerDocument) || void 0 === n || n.removeEventListener('contextmenu', s, !0);
            }
        );
    }, [r]);
    let b = s.useRef(i);
    s.useEffect(() => void (b.current = i)),
        s.useEffect(
            () => () => {
                var e;
                return null === (e = b.current) || void 0 === e ? void 0 : e.call(b);
            },
            []
        ),
        s.useLayoutEffect(() => {
            var e;
            null === (e = I.current) || void 0 === e || e.updatePosition();
        }),
        (0, f.Z)({
            type: o.ImpressionTypes.MENU,
            name: m,
            properties: E
        });
    let y = (0, d.Aq)(),
        S = s.useCallback(() => {
            y.dispatch(g.CkL.POPOUT_SHOW);
        }, [y]),
        A = s.useCallback(() => {
            y.dispatch(g.CkL.POPOUT_HIDE);
        }, [y]);
    return (0, a.jsx)(_.W5, {
        onMount: S,
        onUnmount: A,
        targetRef: T,
        overrideTargetRect: c,
        position: null != h ? h : 'right',
        align: null != p ? p : 'top',
        autoInvert: !0,
        ref: I,
        nudgeAlignIntoViewport: !0,
        children: n
    });
};
class T extends s.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: n } = this.props;
        if ((n.addEventListener('resize', this.closeResize, !0), m.S.subscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e)) {
            let n = setTimeout(() => {
                this.setState({ render: () => (0, a.jsx)(u.MenuSpinner, {}) });
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
        e.removeEventListener('resize', this.closeResize, !0), m.S.unsubscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    render() {
        var e;
        let { appContext: n, target: r, isOpen: i, theme: s, config: o, rect: l } = this.props,
            u = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
        return i && null != l && null != o && null != r && null != u && o.context === n
            ? (0, a.jsx)(I, {
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
            E(this, 'state', { render: void 0 }),
            E(this, 'closeResize', (e) => {
                let { renderWindow: n } = this.props;
                if (e.target === n) this.close();
            }),
            E(this, 'close', () => {
                let { isOpen: e, closeContextMenu: n } = this.props;
                e && n();
            });
    }
}
function b() {
    let {
            contextMenu: e,
            version: n,
            isOpen: r
        } = (0, l.cj)([p.Z], () => ({
            contextMenu: p.Z.getContextMenu(),
            version: p.Z.version,
            isOpen: p.Z.isOpen()
        })),
        i = (0, l.e7)([h.Z], () => h.Z.theme),
        { appContext: o, renderWindow: u } = s.useContext(d.ZP);
    return (0, a.jsx)(
        T,
        {
            appContext: o,
            renderWindow: u,
            ...e,
            isOpen: r,
            theme: i,
            closeContextMenu: c.Zy
        },
        n
    );
}
