"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("392711"),
  i = a.n(l),
  r = a("442837"),
  o = a("239091"),
  u = a("476669"),
  d = a("524331"),
  c = a("768419"),
  f = a("831506"),
  E = a("699516"),
  h = a("594174"),
  _ = a("643126"),
  C = a("823379"),
  m = a("689938");

function S(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class p extends s.PureComponent {
  hasParty(e) {
    return e.length > 1
  }
  handleStopListening() {
    (0, d.default)()
  }
  render() {
    let {
      currentUser: e,
      host: t,
      party: a
    } = this.props;
    return this.hasParty(a) && null != e ? (0, n.jsx)(_.default, {
      currentUser: e,
      host: t,
      party: a,
      renderOverflowPopout: this.renderOverflowPopout,
      onStopListening: this.handleStopListening,
      onUserContextMenu: this.handleUserContextMenu
    }) : null
  }
  constructor(...e) {
    super(...e), S(this, "handleUserContextMenu", (e, t) => {
      (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("79695"), a.e("85559"), a.e("64409")]).then(a.bind(a, "881351"));
        return a => (0, n.jsx)(e, {
          ...a,
          user: t
        })
      })
    }), S(this, "renderOverflowPopout", () => {
      let {
        party: e
      } = this.props;
      return (0, n.jsx)(u.default, {
        party: e,
        header: m.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENING_ALONG_COUNT.format({
          count: e.length
        })
      })
    })
  }
}
t.default = r.default.connectStores([c.default, h.default, E.default, f.default], () => {
  let e, t;
  let a = c.default.getSyncingWith(),
    n = c.default.getActivity(),
    s = h.default.getCurrentUser(),
    l = [];
  if (null != a ? (e = h.default.getUser(a.userId), t = a.partyId) : null != n && null != n.party && null != n.party.id && (e = s, t = n.party.id), null != t) {
    var r;
    l = i()(Array.from(null !== (r = f.default.getParty(t)) && void 0 !== r ? r : [])).map(e => h.default.getUser(e)).filter(C.isNotNullish).orderBy([t => null == e || e.id === t.id, e => E.default.isFriend(e.id)], ["desc", "desc"]).value()
  }
  return {
    currentUser: s,
    host: e,
    party: l
  }
})(p)