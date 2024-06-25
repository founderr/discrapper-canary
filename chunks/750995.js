var s = n(735250);
n(470079);
var i = n(704215),
  l = n(481060),
  a = n(570140),
  r = n(317770),
  o = n(605236),
  c = n(650774),
  u = n(430824),
  d = n(496675),
  E = n(228392),
  h = n(981631),
  _ = n(921944);
let I = e => {
  var t;
  let n = u.Z.getGuild(e),
    s = !!(null == n ? void 0 : n.hasFeature(h.oNc.COMMUNITY)),
    l = d.Z.can(h.Plq.MANAGE_CHANNELS, n),
    a = (0, o.un)(i.z.FORUM_CHANNEL_UPSELL_MODAL),
    r = null !== (t = c.Z.getMemberCount(e)) && void 0 !== t ? t : 0;
  return s && l && !a && r >= 200
};
class m extends r.Z {
  _initialize() {
    a.Z.subscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  _terminate() {
    a.Z.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  handleChannelSelect(e) {
    let {
      guildId: t
    } = e;
    if (null == t || !I(t)) return;
    (0, E.qz)(), (0, o.kk)(i.z.FORUM_CHANNEL_UPSELL_MODAL);
    let a = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.L.DISMISS;
      (0, o.EW)(i.z.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: e
      })
    };
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("18417")]).then(n.bind(n, 740696));
      return n => (0, s.jsx)(e, {
        ...n,
        onClose: e => {
          a(e), n.onClose()
        },
        guildId: t,
        shouldUpsellCreation: !0
      })
    }, {
      onCloseCallback: () => (0, o.EW)(i.z.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: _.L.DISMISS
      }),
      onCloseRequest: h.VqG
    })
  }
}
t.Z = new m