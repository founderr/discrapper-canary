"use strict";
n(411104), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(442837),
  o = n(765250),
  a = n(13245),
  r = n(26229),
  c = n(355863),
  d = n(237997),
  u = n(451478),
  h = n(583883),
  p = n(434529),
  f = n(145597),
  E = n(382790),
  g = n(990673),
  m = n(906037),
  Z = n(430036),
  I = n(839434),
  S = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = {
  [S.Odu.TEXT](e) {
    let {
      dragging: t,
      locked: n,
      pinned: s,
      dragStart: l
    } = e;
    return (0, i.jsx)(Z.Z, {
      dragStart: l,
      locked: n,
      pinned: s,
      dragging: t
    })
  },
  [S.Odu.GUILDS](e) {
    let {
      locked: t,
      dragStart: n
    } = e;
    return (0, i.jsx)(E.Z, {
      dragStart: n,
      locked: t
    })
  },
  [S.Odu.VOICE](e) {
    let {
      id: t,
      anchor: n,
      isPreviewingInGame: s,
      locked: l,
      pinned: o
    } = e;
    return (0, i.jsx)(I.Z, {
      anchor: n,
      id: t,
      locked: l,
      pinned: o,
      widget: S.Odu.VOICE,
      isPreviewingInGame: s
    })
  },
  [S.Odu.GUILDS_TEXT](e) {
    let {
      dragging: t,
      locked: n,
      dragStart: s
    } = e;
    return (0, i.jsx)(g.Z, {
      dragStart: s,
      dragging: t,
      locked: n,
      pinned: !1
    })
  }
};
class v extends s.PureComponent {
  componentDidUpdate(e) {
    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (a.Z.track(S.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
      lastLayoutUpdate: null
    }))
  }
  renderWidget(e, t, n) {
    let {
      props: {
        locked: i,
        isPreviewingInGame: s
      },
      state: {
        dragging: l
      }
    } = this, o = C[e.type];
    if (null == o) throw Error("OverlayLayout: Widget does not exist in WidgetMap");
    return a => o({
      id: e.id,
      locked: i,
      pinned: e.pinned,
      dragging: l,
      isPreviewingInGame: s,
      anchor: t,
      size: n,
      dragStart: a
    })
  }
  render() {
    let {
      widget: e,
      widgetConfig: t,
      layoutSize: n,
      locked: s,
      isPreviewingInGame: l,
      isActiveRegion: o
    } = this.props;
    if (null == e || null == t) return null;
    let {
      id: a,
      pinned: r,
      zIndex: c,
      size: d,
      anchor: u
    } = e, f = (0, p.w_)(d, n), E = (0, p.KR)(u, n), {
      minSize: g,
      resizeX: Z,
      resizeY: I,
      dragAnywhere: S
    } = t, _ = (0, m.eM)({
      locked: s,
      isPreviewingInGame: l,
      pinned: r
    }), C = {
      minX: 0,
      minY: 0,
      maxX: n.width,
      maxY: n.height
    };
    return (0, i.jsx)(h.Z, {
      id: a,
      size: f,
      anchor: E,
      container: C,
      minSize: g,
      hidden: !_,
      resizeX: Z,
      resizeY: I,
      style: {
        zIndex: c
      },
      dragAnywhere: S,
      active: !s || o,
      onUpdate: this.handleUpdate,
      onClick: this.handleFocus,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      children: this.renderWidget(e, E, f)
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      lastLayoutUpdate: null,
      dragging: !1
    }), _(this, "handleUpdate", (e, t, n, i, s) => {
      let {
        props: {
          layoutSize: l
        },
        state: {
          lastLayoutUpdate: a
        }
      } = this;
      if (!(0, f.Te)(l)) return;
      let r = (0, p.jL)(n, l),
        d = (0, p.Ox)(i, l);
      (0, o.Os)(t), (0, o.nv)(t, r, d);
      let u = e === h.B.MOVE,
        E = (0, p.PY)(n, l.width, l.height, s.width, s.height);
      this.setState({
        lastLayoutUpdate: {
          was_resized: null != a && a.was_resized || !u,
          was_dragged: null != a && a.was_dragged || u,
          widget_type: c.Z.getWidgetType(t),
          window_width: l.width,
          window_height: l.height,
          widget_width: s.width,
          widget_height: s.height,
          widget_left: E.left,
          widget_top: E.top
        }
      })
    }), _(this, "handleFocus", e => {
      let {
        layoutSize: t
      } = this.props;
      (0, f.Te)(t) && (0, o.Os)(e)
    }), _(this, "handleDragStart", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && a.Z.setPreviewInGameMode(!0), this.setState({
        dragging: !0
      }))
    }), _(this, "handleDragEnd", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && a.Z.setPreviewInGameMode(!1), this.setState({
        dragging: !1
      }))
    })
  }
}
let x = l.ZP.connectStores([c.Z, d.Z], e => {
  let {
    widgetId: t
  } = e, n = c.Z.getWidget(t), i = d.Z.getActiveRegions();
  return {
    widget: n,
    widgetConfig: null != n ? c.Z.getWidgetConfig(n.type) : null,
    locked: d.Z.isInstanceUILocked(),
    isPreviewingInGame: d.Z.isPreviewingInGame(),
    isActiveRegion: null != n && n.type === S.Odu.TEXT && i.has(S.O0n.TEXT_WIDGET)
  }
})(v);

function N(e, t) {
  return (0, i.jsx)(x, {
    widgetId: e,
    layoutSize: t
  }, e)
}
t.Z = l.ZP.connectStores([c.Z, u.Z], () => ({
  layout: c.Z.getLayout(f.qU),
  layoutSize: u.Z.windowSize(),
  renderWidget: N
}))(r.Z)