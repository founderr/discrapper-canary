"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("65597"),
  i = n("151426"),
  r = n("551042"),
  o = n("77078"),
  u = n("384997"),
  d = n("619443"),
  c = n("162771"),
  f = n("994428");

function h(e) {
  return "dismissible_content_".concat(f.DismissibleContentGroupName.GUILD_TAKEOVER_MODAL, "-").concat(e)
}
var m = a.memo(function() {
  return ! function() {
    let e = function() {
        let e = (0, s.default)([d.default], () => d.default.isConnected());
        return e ? [] : []
      }(),
      [t, m] = (0, u.useSelectedDismissibleContent)(e, f.DismissibleContentGroupName.GUILD_TAKEOVER_MODAL),
      p = (0, r.useHasAnyModalOpen)(),
      E = a.useRef(null);
    a.useEffect(() => {
      if (null == t) {
        E.current = null;
        return
      }!p && E.current !== t && (! function(e) {
        let {
          dismissibleContent: t,
          markAsDismissed: a
        } = e, s = {
          onCloseCallback: e => a(null != e ? e : f.ContentDismissActionType.UNKNOWN),
          modalKey: h(t)
        }, r = c.default.getGuildId();
        if (t === i.DismissibleContent.SERVER_SHOP_UPSELL) null != r && (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("730801").then(n.bind(n, "730801"));
          return t => (0, l.jsx)(e, {
            ...t,
            guildId: r,
            markAsDismissed: a
          })
        }, s)
      }({
        dismissibleContent: t,
        markAsDismissed: m
      }), E.current = t)
    }, [t, p, m]), a.useEffect(() => () => {
      null != t && (0, r.closeModal)(h(t))
    }, [t])
  }(), null
})