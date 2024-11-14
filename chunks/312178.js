n(411104), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(765250),
    l = n(13245),
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
function Z(e, t, n) {
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
    [x.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: s, dragStart: r } = e;
        return (0, i.jsx)(_.Z, {
            dragStart: r,
            locked: n,
            pinned: s,
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
        let { id: t, anchor: n, isPreviewingInGame: s, locked: r, pinned: a } = e;
        return (0, i.jsx)(E.Z, {
            anchor: n,
            id: t,
            locked: r,
            pinned: a,
            widget: x.Odu.VOICE,
            isPreviewingInGame: s
        });
    },
    [x.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: s } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: s,
            dragging: t,
            locked: n,
            pinned: !1
        });
    }
};
class C extends s.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (l.Z.track(x.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: r }
            } = this,
            a = S[e.type];
        if (null == a) throw Error('OverlayLayout: Widget does not exist in WidgetMap');
        return (l) =>
            a({
                id: e.id,
                locked: i,
                pinned: e.pinned,
                dragging: r,
                isPreviewingInGame: s,
                anchor: t,
                size: n,
                dragStart: l
            });
    }
    render() {
        let { widget: e, widgetConfig: t, layoutSize: n, locked: s, isPreviewingInGame: r, isActiveRegion: a } = this.props;
        if (null == e || null == t) return null;
        let { id: l, pinned: o, zIndex: d, size: u, anchor: h } = e,
            f = (0, p.w_)(u, n),
            m = (0, p.KR)(h, n),
            { minSize: g, resizeX: _, resizeY: E, dragAnywhere: x } = t,
            Z = (0, v.eM)({
                locked: s,
                isPreviewingInGame: r,
                pinned: o
            }),
            S = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            };
        return (0, i.jsx)(c.Z, {
            id: l,
            size: f,
            anchor: m,
            container: S,
            minSize: g,
            hidden: !Z,
            resizeX: _,
            resizeY: E,
            style: { zIndex: d },
            dragAnywhere: x,
            active: !s || a,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: this.renderWidget(e, m, f)
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'state', {
                lastLayoutUpdate: null,
                dragging: !1
            }),
            Z(this, 'handleUpdate', (e, t, n, i, s) => {
                let {
                    props: { layoutSize: r },
                    state: { lastLayoutUpdate: l }
                } = this;
                if (!(0, f.Te)(r)) return;
                let o = (0, p.jL)(n, r),
                    u = (0, p.Ox)(i, r);
                (0, a.Os)(t),
                    (0, a.nv)({
                        widgetId: t,
                        anchor: o,
                        size: u
                    });
                let h = e === c.B.MOVE,
                    m = (0, p.PY)(n, r.width, r.height, s.width, s.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != l && l.was_resized) || !h,
                        was_dragged: (null != l && l.was_dragged) || h,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: r.width,
                        window_height: r.height,
                        widget_width: s.width,
                        widget_height: s.height,
                        widget_left: m.left,
                        widget_top: m.top
                    }
                });
            }),
            Z(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, f.Te)(t) && (0, a.Os)(e);
            }),
            Z(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && l.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            Z(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && l.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let I = r.ZP.connectStores([d.Z, u.Z], (e) => {
    let { widgetId: t } = e,
        n = d.Z.getWidget(t),
        i = u.Z.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
        locked: u.Z.isInstanceLocked(),
        isPreviewingInGame: u.Z.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === x.Odu.TEXT && i.has(x.O0n.TEXT_WIDGET)
    };
})(C);
function y(e, t) {
    return (0, i.jsx)(
        I,
        {
            widgetId: e,
            layoutSize: t
        },
        e
    );
}
t.Z = r.ZP.connectStores([d.Z, h.Z], () => {
    var e;
    return {
        layout: null !== (e = d.Z.getLayout(f.qU)) && void 0 !== e ? e : void 0,
        layoutSize: h.Z.windowSize(),
        renderWidget: y
    };
})(o.Z);
