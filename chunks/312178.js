n(411104), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(765250),
    a = n(13245),
    o = n(26229),
    c = n(552062),
    d = n(355863),
    u = n(237997),
    h = n(451478),
    p = n(434529),
    f = n(145597),
    m = n(382790),
    g = n(990673),
    v = n(906037),
    _ = n(430036),
    E = n(839434),
    x = n(981631);
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
let Z = {
    [x.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: r, dragStart: s } = e;
        return (0, i.jsx)(_.Z, {
            dragStart: s,
            locked: n,
            pinned: r,
            dragging: t
        });
    },
    [x.Odu.GUILDS](e) {
        let { locked: t, dragStart: n } = e;
        return (0, i.jsx)(m.Z, {
            dragStart: n,
            locked: t
        });
    },
    [x.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: r, locked: s, pinned: l } = e;
        return (0, i.jsx)(E.Z, {
            anchor: n,
            id: t,
            locked: s,
            pinned: l,
            widget: x.Odu.VOICE,
            isPreviewingInGame: r
        });
    },
    [x.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: r } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: r,
            dragging: t,
            locked: n,
            pinned: !1
        });
    }
};
class S extends r.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (a.Z.track(x.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: r },
                state: { dragging: s }
            } = this,
            l = Z[e.type];
        if (null == l) throw Error('OverlayLayout: Widget does not exist in WidgetMap');
        return (a) =>
            l({
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
        let { widget: e, widgetConfig: t, layoutSize: n, locked: r, isPreviewingInGame: s, isActiveRegion: l } = this.props;
        if (null == e || null == t) return null;
        let { id: a, pinned: o, zIndex: d, size: u, anchor: h } = e,
            f = (0, p.w_)(u, n),
            m = (0, p.KR)(h, n),
            { minSize: g, resizeX: _, resizeY: E, dragAnywhere: x } = t,
            I = (0, v.eM)({
                locked: r,
                isPreviewingInGame: s,
                pinned: o
            }),
            Z = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            };
        return (0, i.jsx)(c.Z, {
            id: a,
            size: f,
            anchor: m,
            container: Z,
            minSize: g,
            hidden: !I,
            resizeX: _,
            resizeY: E,
            style: { zIndex: d },
            dragAnywhere: x,
            active: !r || l,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: this.renderWidget(e, m, f)
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', {
                lastLayoutUpdate: null,
                dragging: !1
            }),
            I(this, 'handleUpdate', (e, t, n, i, r) => {
                let {
                    props: { layoutSize: s },
                    state: { lastLayoutUpdate: a }
                } = this;
                if (!(0, f.Te)(s)) return;
                let o = (0, p.jL)(n, s),
                    u = (0, p.Ox)(i, s);
                (0, l.Os)(t), (0, l.nv)(t, o, u);
                let h = e === c.B.MOVE,
                    m = (0, p.PY)(n, s.width, s.height, r.width, r.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != a && a.was_resized) || !h,
                        was_dragged: (null != a && a.was_dragged) || h,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: s.width,
                        window_height: s.height,
                        widget_width: r.width,
                        widget_height: r.height,
                        widget_left: m.left,
                        widget_top: m.top
                    }
                });
            }),
            I(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, f.Te)(t) && (0, l.Os)(e);
            }),
            I(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && a.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            I(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && a.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let C = s.ZP.connectStores([d.Z, u.Z], (e) => {
    let { widgetId: t } = e,
        n = d.Z.getWidget(t),
        i = u.Z.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
        locked: u.Z.isInstanceUILocked(),
        isPreviewingInGame: u.Z.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === x.Odu.TEXT && i.has(x.O0n.TEXT_WIDGET)
    };
})(S);
function y(e, t) {
    return (0, i.jsx)(
        C,
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
}))(o.Z);
