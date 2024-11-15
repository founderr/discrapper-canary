n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(995295),
    s = n(990547),
    o = n(442837),
    l = n(481060),
    u = n(239091),
    c = n(40851),
    d = n(213609),
    f = n(314910),
    _ = n(210887),
    p = n(574254),
    h = n(585483),
    m = n(981631);
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
let E = (e) => {
    let { children: t, close: n, onUnmount: o, target: u, rect: _, position: p, align: h, impressionName: g, impressionProperties: E } = e,
        v = i.useRef(null),
        b = i.useMemo(() => ({ current: u }), [u]);
    i.useEffect(() => {
        var e, t;
        let r = (0, a.findDOMNode)(v.current);
        if (null == r) return;
        let i = (e) => {
            let t = e.target,
                r = (0, a.findDOMNode)(v.current);
            if (!(null != r && (0, l.referencePortalAwareContains)(r, t))) window.getSelection().removeAllRanges(), n();
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
    let I = i.useRef(o);
    i.useEffect(() => void (I.current = o)),
        i.useEffect(
            () => () => {
                var e;
                return null === (e = I.current) || void 0 === e ? void 0 : e.call(I);
            },
            []
        ),
        i.useLayoutEffect(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.updatePosition();
        }),
        (0, d.Z)({
            type: s.ImpressionTypes.MENU,
            name: g,
            properties: E
        });
    let S = (0, c.Aq)(),
        T = i.useCallback(() => {
            S.dispatch(m.CkL.POPOUT_SHOW);
        }, [S]),
        y = i.useCallback(() => {
            S.dispatch(m.CkL.POPOUT_HIDE);
        }, [S]);
    return (0, r.jsx)(f.W5, {
        onMount: T,
        onUnmount: y,
        targetRef: b,
        overrideTargetRect: _,
        position: null != p ? p : 'right',
        align: null != h ? h : 'top',
        autoInvert: !0,
        ref: v,
        nudgeAlignIntoViewport: !0,
        children: t
    });
};
class v extends i.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if ((t.addEventListener('resize', this.closeResize, !0), h.S.subscribe(m.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e)) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, r.jsx)(l.MenuSpinner, {}) });
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
        e.removeEventListener('resize', this.closeResize, !0), h.S.unsubscribe(m.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    render() {
        var e;
        let { appContext: t, target: n, isOpen: i, theme: a, config: s, rect: o } = this.props,
            l = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
        return i && null != o && null != s && null != n && null != l && s.context === t
            ? (0, r.jsx)(E, {
                  target: n,
                  rect: o,
                  close: this.close,
                  onUnmount: s.onClose,
                  align: s.align,
                  position: s.position,
                  impressionName: s.impressionName,
                  impressionProperties: s.impressionProperties,
                  children: (e, r) => {
                      let { position: i } = e;
                      return l({
                          position: i,
                          theme: a,
                          onHeightUpdate: r,
                          config: s,
                          target: n,
                          context: t
                      });
                  }
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', { render: void 0 }),
            g(this, 'closeResize', (e) => {
                let { renderWindow: t } = this.props;
                if (e.target === t) this.close();
            }),
            g(this, 'close', () => {
                let { isOpen: e, closeContextMenu: t } = this.props;
                e && t();
            });
    }
}
function b() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n
        } = (0, o.cj)([p.Z], () => ({
            contextMenu: p.Z.getContextMenu(),
            version: p.Z.version,
            isOpen: p.Z.isOpen()
        })),
        a = (0, o.e7)([_.Z], () => _.Z.theme),
        { appContext: s, renderWindow: l } = i.useContext(c.ZP);
    return (0, r.jsx)(
        v,
        {
            appContext: s,
            renderWindow: l,
            ...e,
            isOpen: n,
            theme: a,
            closeContextMenu: u.Zy
        },
        t
    );
}
