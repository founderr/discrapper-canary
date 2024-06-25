n(757143), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(771340),
  u = n(903223),
  d = n(285952),
  h = n(689938),
  m = n(46319);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = {
    position: "bottom",
    autoInvert: !1
  },
  g = e => {
    let {
      region: t,
      className: n = m.regionSelectName
    } = e, i = t.name.replace(/ \(VIP\)$/, "");
    return (0, l.jsx)("div", {
      className: n,
      children: i
    })
  };
class f extends i.PureComponent {
  render() {
    let {
      region: e,
      selected: t
    } = this.props;
    return (0, l.jsxs)(d.Z, {
      align: d.Z.Align.CENTER,
      className: a()({
        selected: t
      }),
      children: [(0, l.jsx)(g, {
        region: e,
        className: m.regionSelectName
      }), t ? (0, l.jsx)("i", {
        className: m.check
      }) : null]
    })
  }
}
class C extends i.PureComponent {
  componentDidMount() {
    null == this.props.regions && c.Z.fetchRegions(null)
  }
  render() {
    let {
      regions: e
    } = this.props;
    if (null == e) return null;
    let t = this.getSelectedRegion(),
      n = {
        label: t.name,
        value: t
      },
      i = e.filter(e => !e.deprecated && !e.hidden).map(e => ({
        label: e.name,
        value: e,
        key: e.id
      }));
    return (0, l.jsx)(o.QuickSelect, {
      label: h.Z.Messages.REGION,
      options: i,
      value: n,
      onChange: this.handleChangeVoiceRegion,
      renderOption: this.renderOption,
      popoutProps: p,
      popoutClassName: m.regionSelectPopout
    })
  }
  constructor(...e) {
    super(...e), E(this, "renderOption", (e, t) => (0, l.jsx)(f, {
      region: e.value,
      selected: t
    }, e.value.id)), E(this, "getSelectedRegion", () => {
      var e;
      let {
        regions: t,
        call: n
      } = this.props;
      return n.regionUpdated && null != t && null != n.region ? null !== (e = t.find(e => {
        let {
          id: t
        } = e;
        return t === n.region
      })) && void 0 !== e ? e : {
        name: n.region,
        id: n.region
      } : {
        id: "automatic",
        name: h.Z.Messages.AUTOMATIC_REGION,
        vip: !1,
        deprecated: !1,
        hidden: !1
      }
    }), E(this, "handleChangeVoiceRegion", e => {
      let {
        value: t
      } = e, {
        channelId: n
      } = this.props.call;
      c.Z.changeCallRegion(n, t.id)
    })
  }
}
t.Z = r.ZP.connectStores([u.Z], () => ({
  regions: u.Z.getRegions(null)
}))(C)