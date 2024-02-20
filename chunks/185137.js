"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("446674"),
  s = n("77078"),
  r = n("363658"),
  o = n("135230"),
  u = n("42887"),
  d = n("945956"),
  c = n("568307"),
  f = n("701909"),
  E = n("49111"),
  h = n("782340"),
  _ = () => {
    let [e, t] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.canShowAdminWarning, c.default.getVisibleGame()], []), n = (0, l.useStateFromStores)([d.default], () => d.default.isConnected(), []), _ = (0, l.useStateFromStores)([u.default], () => u.default.getMode() === E.InputModes.PUSH_TO_TALK, []), C = null != t && t.elevated && n && _ && e, S = a.useRef(null);

    function g() {
      null !== S.current && ((0, s.closeModal)(S.current), S.current = null)
    }
    return a.useEffect(() => (C ? S.current = (0, s.openModal)(e => (0, i.jsx)(o.default, {
      title: h.default.Messages.PTT_PERMISSION_TITLE,
      body: h.default.Messages.PTT_PERMISSION_BODY.format({
        game: null == t ? void 0 : t.name
      }),
      secondaryConfirmText: h.default.Messages.DONT_SHOW_AGAIN,
      onConfirmSecondary: () => r.default.clearPTTAdminWarning(),
      onConfirm: () => window.open(f.default.getArticleURL(E.HelpdeskArticles.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank"),
      confirmText: h.default.Messages.HELP_DESK,
      ...e
    })) : g(), () => {
      g()
    }), [t, C]), null
  }