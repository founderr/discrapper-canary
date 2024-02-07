"use strict";
E.r(_), E.d(_, {
  default: function() {
    return O
  }
}), E("222007");
var t = E("37983"),
  o = E("884691"),
  n = E("446674"),
  r = E("77078"),
  a = E("363658"),
  i = E("135230"),
  I = E("42887"),
  s = E("945956"),
  T = E("568307"),
  S = E("701909"),
  N = E("49111"),
  A = E("782340"),
  O = () => {
    let [e, _] = (0, n.useStateFromStoresArray)([T.default], () => [T.default.canShowAdminWarning, T.default.getVisibleGame()], []), E = (0, n.useStateFromStores)([s.default], () => s.default.isConnected(), []), O = (0, n.useStateFromStores)([I.default], () => I.default.getMode() === N.InputModes.PUSH_TO_TALK, []), R = null != _ && _.elevated && E && O && e, l = o.useRef(null);

    function u() {
      null !== l.current && ((0, r.closeModal)(l.current), l.current = null)
    }
    return o.useEffect(() => (R ? l.current = (0, r.openModal)(e => (0, t.jsx)(i.default, {
      title: A.default.Messages.PTT_PERMISSION_TITLE,
      body: A.default.Messages.PTT_PERMISSION_BODY.format({
        game: null == _ ? void 0 : _.name
      }),
      secondaryConfirmText: A.default.Messages.DONT_SHOW_AGAIN,
      onConfirmSecondary: () => a.default.clearPTTAdminWarning(),
      onConfirm: () => window.open(S.default.getArticleURL(N.HelpdeskArticles.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank"),
      confirmText: A.default.Messages.HELP_DESK,
      ...e
    })) : u(), () => {
      u()
    }), [_, R]), null
  }