n(47120);
var i = n(735250),
  s = n(470079),
  l = n(392711),
  a = n.n(l),
  r = n(442837),
  o = n(239091),
  c = n(476669),
  u = n(524331),
  d = n(768419),
  E = n(831506),
  h = n(699516),
  _ = n(594174),
  I = n(643126),
  m = n(823379),
  g = n(689938);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class T extends s.PureComponent {
  hasParty(e) {
    return e.length > 1
  }
  handleStopListening() {
    (0, u.Z)()
  }
  render() {
    let {
      currentUser: e,
      host: t,
      party: n
    } = this.props;
    return this.hasParty(n) && null != e ? (0, i.jsx)(I.Z, {
      currentUser: e,
      host: t,
      party: n,
      renderOverflowPopout: this.renderOverflowPopout,
      onStopListening: this.handleStopListening,
      onUserContextMenu: this.handleUserContextMenu
    }) : null
  }
  constructor(...e) {
    super(...e), p(this, "handleUserContextMenu", (e, t) => {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
        return n => (0, i.jsx)(e, {
          ...n,
          user: t
        })
      })
    }), p(this, "renderOverflowPopout", () => {
      let {
        party: e
      } = this.props;
      return (0, i.jsx)(c.Z, {
        party: e,
        header: g.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENING_ALONG_COUNT.format({
          count: e.length
        })
      })
    })
  }
}
t.Z = r.ZP.connectStores([d.Z, _.default, h.Z, E.Z], () => {
  let e, t;
  let n = d.Z.getSyncingWith(),
    i = d.Z.getActivity(),
    s = _.default.getCurrentUser(),
    l = [];
  if (null != n ? (e = _.default.getUser(n.userId), t = n.partyId) : null != i && null != i.party && null != i.party.id && (e = s, t = i.party.id), null != t) {
    var r;
    l = a()(Array.from(null !== (r = E.Z.getParty(t)) && void 0 !== r ? r : [])).map(e => _.default.getUser(e)).filter(m.lm).orderBy([t => null == e || e.id === t.id, e => h.Z.isFriend(e.id)], ["desc", "desc"]).value()
  }
  return {
    currentUser: s,
    host: e,
    party: l
  }
})(T)