n(411104), n(47120);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    r = n(765250),
    o = n(13245),
    l = n(26229),
    c = n(552062),
    d = n(355863),
    u = n(237997),
    h = n(451478),
    p = n(434529),
    f = n(145597),
    _ = n(382790),
    E = n(990673),
    g = n(906037),
    m = n(430036),
    I = n(839434),
    Z = n(981631);
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
let S = {
    [Z.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: s, dragStart: a } = e;
        return (0, i.jsx)(m.Z, {
            dragStart: a,
            locked: n,
            pinned: s,
            dragging: t
        });
    },
    [Z.Odu.GUILDS](e) {
        let { locked: t, dragStart: n } = e;
        return (0, i.jsx)(_.Z, {
            dragStart: n,
            locked: t
        });
    },
    [Z.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: s, locked: a, pinned: r } = e;
        return (0, i.jsx)(I.Z, {
            anchor: n,
            id: t,
            locked: a,
            pinned: r,
            widget: Z.Odu.VOICE,
            isPreviewingInGame: s
        });
    },
    [Z.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: s } = e;
        return (0, i.jsx)(E.Z, {
            dragStart: s,
            dragging: t,
            locked: n,
            pinned: !1
        });
    }
};
class C extends s.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.Z.track(Z.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: a }
            } = this,
            r = S[e.type];
        if (null == r) throw Error('OverlayLayout: Widget does not exist in WidgetMap');
        return (o) =>
            r({
                id: e.id,
                locked: i,
                pinned: e.pinned,
                dragging: a,
                isPreviewingInGame: s,
                anchor: t,
                size: n,
                dragStart: o
            });
    }
    render() {
        let { widget: e, widgetConfig: t, layoutSize: n, locked: s, isPreviewingInGame: a, isActiveRegion: r } = this.props;
        if (null == e || null == t) return null;
        let { id: o, pinned: l, zIndex: d, size: u, anchor: h } = e,
            f = (0, p.w_)(u, n),
            _ = (0, p.KR)(h, n),
            { minSize: E, resizeX: m, resizeY: I, dragAnywhere: Z } = t,
            v = (0, g.eM)({
                locked: s,
                isPreviewingInGame: a,
                pinned: l
            }),
            S = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            };
        return (0, i.jsx)(c.Z, {
            id: o,
            size: f,
            anchor: _,
            container: S,
            minSize: E,
            hidden: !v,
            resizeX: m,
            resizeY: I,
            style: { zIndex: d },
            dragAnywhere: Z,
            active: !s || r,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: this.renderWidget(e, _, f)
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', {
                lastLayoutUpdate: null,
                dragging: !1
            }),
            v(this, 'handleUpdate', (e, t, n, i, s) => {
                let {
                    props: { layoutSize: a },
                    state: { lastLayoutUpdate: o }
                } = this;
                if (!(0, f.Te)(a)) return;
                let l = (0, p.jL)(n, a),
                    u = (0, p.Ox)(i, a);
                (0, r.Os)(t), (0, r.nv)(t, l, u);
                let h = e === c.B.MOVE,
                    _ = (0, p.PY)(n, a.width, a.height, s.width, s.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != o && o.was_resized) || !h,
                        was_dragged: (null != o && o.was_dragged) || h,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: a.width,
                        window_height: a.height,
                        widget_width: s.width,
                        widget_height: s.height,
                        widget_left: _.left,
                        widget_top: _.top
                    }
                });
            }),
            v(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, f.Te)(t) && (0, r.Os)(e);
            }),
            v(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            v(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let x = a.ZP.connectStores([d.Z, u.Z], (e) => {
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
function N(e, t) {
    return (0, i.jsx)(
        x,
        {
            widgetId: e,
            layoutSize: t
        },
        e
    );
}
t.Z = a.ZP.connectStores([d.Z, h.Z], () => ({
    layout: d.Z.getLayout(f.qU),
    layoutSize: h.Z.windowSize(),
    renderWidget: N
}))(l.Z);
