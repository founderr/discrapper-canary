"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("781738"), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("363484"),
  o = n("402904"),
  d = n("145131"),
  c = n("841283"),
  f = n("782340"),
  h = n("315426");
let m = {
    position: "bottom",
    autoInvert: !1
  },
  p = e => {
    let {
      region: t,
      className: n = h.regionSelectName
    } = e, a = t.name.replace(/ \(VIP\)$/, "");
    return (0, l.jsx)("div", {
      className: n,
      children: a
    })
  };
class E extends a.PureComponent {
  render() {
    let {
      region: e,
      selected: t
    } = this.props;
    return (0, l.jsxs)(d.default, {
      align: d.default.Align.CENTER,
      className: i({
        selected: t
      }),
      children: [(0, l.jsx)(p, {
        region: e,
        className: h.regionSelectName
      }), t ? (0, l.jsx)("i", {
        className: h.check
      }) : null]
    })
  }
}
class g extends a.PureComponent {
  componentDidMount() {
    null == this.props.regions && u.default.fetchRegions(null)
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
      a = e.filter(e => !e.deprecated && !e.hidden).map(e => ({
        label: e.name,
        value: e,
        key: e.id
      }));
    return (0, l.jsx)(c.default, {
      label: f.default.Messages.REGION,
      options: a,
      value: n,
      onChange: this.handleChangeVoiceRegion,
      renderOption: this.renderOption,
      popoutProps: m,
      popoutClassName: h.regionSelectPopout
    })
  }
  constructor(...e) {
    super(...e), this.renderOption = (e, t) => (0, l.jsx)(E, {
      region: e.value,
      selected: t
    }, e.value.id), this.getSelectedRegion = () => {
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
        name: f.default.Messages.AUTOMATIC_REGION,
        vip: !1,
        deprecated: !1,
        hidden: !1
      }
    }, this.handleChangeVoiceRegion = e => {
      let {
        value: t
      } = e, {
        channelId: n
      } = this.props.call;
      u.default.changeCallRegion(n, t.id)
    }
  }
}
var C = r.default.connectStores([o.default], () => ({
  regions: o.default.getRegions(null)
}))(g)