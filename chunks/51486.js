n(47120);
var l = n(735250),
  i = n(470079),
  s = n(399606),
  a = n(704215),
  r = n(952265),
  o = n(481060),
  c = n(243778),
  u = n(38618),
  d = n(914010),
  h = n(921944);

function m(e) {
  return "dismissible_content_".concat(h.R.GUILD_TAKEOVER_MODAL, "-").concat(e)
}
t.Z = i.memo(function() {
  return ! function() {
    let e = (0, s.e7)([u.Z], () => u.Z.isConnected()) ? [] : [],
      [t, E] = (0, c.U)(e, h.R.GUILD_TAKEOVER_MODAL),
      p = (0, r.f9)(),
      g = i.useRef(null);
    i.useEffect(() => {
      if (null == t) {
        g.current = null;
        return
      }
      if (!p && g.current !== t) ! function(e) {
        let {
          dismissibleContent: t,
          markAsDismissed: i
        } = e, s = {
          onCloseCallback: e => i(null != e ? e : h.L.UNKNOWN),
          modalKey: m(t)
        }, r = d.Z.getGuildId();
        if (t === a.z.SERVER_SHOP_UPSELL) null != r && (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("7302")]).then(n.bind(n, 756779));
          return t => (0, l.jsx)(e, {
            ...t,
            guildId: r,
            markAsDismissed: i
          })
        }, s)
      }({
        dismissibleContent: t,
        markAsDismissed: E
      }), g.current = t
    }, [t, p, E]), i.useEffect(() => () => {
      null != t && (0, r.Mr)(m(t))
    }, [t])
  }(), null
})