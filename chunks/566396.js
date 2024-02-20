"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("446674"),
  o = n("272030"),
  u = n("630273"),
  d = n("823704"),
  c = n("662285"),
  f = n("981601"),
  E = n("925758"),
  h = n("27618"),
  _ = n("697218"),
  C = n("663449"),
  I = n("449008"),
  S = n("782340");
class m extends s.PureComponent {
  hasParty(e) {
    return e.length > 1
  }
  handleStopListening() {
    (0, d.default)()
  }
  renderUserPopout(e, t) {
    return (0, a.jsx)(f.default, {
      ...e,
      userId: t.id
    })
  }
  render() {
    let {
      currentUser: e,
      host: t,
      party: n
    } = this.props;
    return this.hasParty(n) && null != e ? (0, a.jsx)(C.default, {
      currentUser: e,
      host: t,
      party: n,
      renderUserPopout: this.renderUserPopout,
      renderOverflowPopout: this.renderOverflowPopout,
      onStopListening: this.handleStopListening,
      onUserContextMenu: this.handleUserContextMenu
    }) : null
  }
  constructor(...e) {
    super(...e), this.handleUserContextMenu = (e, t) => {
      (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("406784").then(n.bind(n, "406784"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t
        })
      })
    }, this.renderOverflowPopout = () => {
      let {
        party: e
      } = this.props;
      return (0, a.jsx)(u.default, {
        party: e,
        header: S.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENING_ALONG_COUNT.format({
          count: e.length
        })
      })
    }
  }
}
var p = r.default.connectStores([c.default, _.default, h.default, E.default], () => {
  let e, t;
  let n = c.default.getSyncingWith(),
    a = c.default.getActivity(),
    s = _.default.getCurrentUser(),
    l = [];
  if (null != n ? (e = _.default.getUser(n.userId), t = n.partyId) : null != a && null != a.party && null != a.party.id && (e = s, t = a.party.id), null != t) {
    var r;
    l = i(Array.from(null !== (r = E.default.getParty(t)) && void 0 !== r ? r : [])).map(e => _.default.getUser(e)).filter(I.isNotNullish).orderBy([t => null == e || e.id === t.id, e => h.default.isFriend(e.id)], ["desc", "desc"]).value()
  }
  return {
    currentUser: s,
    host: e,
    party: l
  }
})(m)