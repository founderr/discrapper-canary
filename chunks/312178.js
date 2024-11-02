n(411104), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    o = n(765250),
    a = n(13245),
    l = n(26229),
    c = n(552062),
    d = n(355863),
    u = n(237997),
    h = n(451478),
    p = n(434529),
    f = n(145597),
    g = n(382790),
    m = n(990673),
    v = n(906037),
    _ = n(430036),
    E = n(839434),
    Z = n(981631);
function x(e, t, n) {
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
let I = {
    [Z.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: r, dragStart: s } = e;
        return (0, i.jsx)(_.Z, {
            dragStart: s,
            locked: n,
            pinned: r,
            dragging: t
        });
    },
    [Z.Odu.GUILDS](e) {
        let { locked: t, dragStart: n } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: n,
            locked: t
        });
    },
    [Z.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: r, locked: s, pinned: o } = e;
        return (0, i.jsx)(E.Z, {
            anchor: n,
            id: t,
            locked: s,
            pinned: o,
            widget: Z.Odu.VOICE,
            isPreviewingInGame: r
        });
    },
    [Z.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: r } = e;
        return (0, i.jsx)(m.Z, {
            dragStart: r,
            dragging: t,
            locked: n,
            pinned: !1
        });
    }
};
class C extends r.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (a.Z.track(Z.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: r },
                state: { dragging: s }
            } = this,
            o = I[e.type];
        if (null == o) throw Error('OverlayLayout: Widget does not exist in WidgetMap');
        return (a) =>
            o({
                id: e.id,
                locked: i,
                pinned: e.pinned,
                dragging: s,
                isPreviewingInGame: r,
                anchor: t,
                size: n,
                dragStart: a
            });
    }
    render() {
        let { widget: e, widgetConfig: t, layoutSize: n, locked: r, isPreviewingInGame: s, isActiveRegion: o } = this.props;
        if (null == e || null == t) return null;
        let { id: a, pinned: l, zIndex: d, size: u, anchor: h } = e,
            f = (0, p.w_)(u, n),
            g = (0, p.KR)(h, n),
            { minSize: m, resizeX: _, resizeY: E, dragAnywhere: Z } = t,
            x = (0, v.eM)({
                locked: r,
                isPreviewingInGame: s,
                pinned: l
            }),
            I = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            };
        return (0, i.jsx)(c.Z, {
            id: a,
            size: f,
            anchor: g,
            container: I,
            minSize: m,
            hidden: !x,
            resizeX: _,
            resizeY: E,
            style: { zIndex: d },
            dragAnywhere: Z,
            active: !r || o,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: this.renderWidget(e, g, f)
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', {
                lastLayoutUpdate: null,
                dragging: !1
            }),
            x(this, 'handleUpdate', (e, t, n, i, r) => {
                let {
                    props: { layoutSize: s },
                    state: { lastLayoutUpdate: a }
                } = this;
                if (!(0, f.Te)(s)) return;
                let l = (0, p.jL)(n, s),
                    u = (0, p.Ox)(i, s);
                (0, o.Os)(t), (0, o.nv)(t, l, u);
                let h = e === c.B.MOVE,
                    g = (0, p.PY)(n, s.width, s.height, r.width, r.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != a && a.was_resized) || !h,
                        was_dragged: (null != a && a.was_dragged) || h,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: s.width,
                        window_height: s.height,
                        widget_width: r.width,
                        widget_height: r.height,
                        widget_left: g.left,
                        widget_top: g.top
                    }
                });
            }),
            x(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, f.Te)(t) && (0, o.Os)(e);
            }),
            x(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && a.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            x(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && a.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let S = s.ZP.connectStores([d.Z, u.Z], (e) => {
    let { widgetId: t } = e,
        n = d.Z.getWidget(t),
        i = u.Z.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
        locked: u.Z.isInstanceUILocked(),
        isPreviewingInGame: u.Z.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === Z.Odu.TEXT && i.has(Z.O0n.TEXT_WIDGET)
    };
})(C);
function y(e, t) {
    return (0, i.jsx)(
        S,
        {
            widgetId: e,
            layoutSize: t
        },
        e
    );
}
t.Z = s.ZP.connectStores([d.Z, h.Z], () => ({
    layout: d.Z.getLayout(f.qU),
    layoutSize: h.Z.windowSize(),
    renderWidget: y
}))(l.Z);
