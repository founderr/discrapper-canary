"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
});
var t = E("37983"),
  o = E("884691"),
  n = E("446674"),
  a = E("77078"),
  i = E("629109"),
  r = E("135230"),
  I = E("42887"),
  T = E("782340"),
  s = () => {
    let e = (0, n.useStateFromStores)([I.default], () => I.default.isInteractionRequired(), []),
      _ = o.useRef(null);

    function E() {
      null !== _.current && ((0, a.closeModal)(_.current), _.current = null)
    }

    function s() {
      i.default.interact()
    }
    return o.useEffect(() => (e ? _.current = (0, a.openModal)(e => (0, t.jsx)(r.default, {
      title: T.default.Messages.INTERACTION_REQUIRED_TITLE,
      body: T.default.Messages.INTERACTION_REQUIRED_BODY,
      onConfirm: s,
      confirmText: T.default.Messages.OKAY,
      ...e
    })) : E(), () => {
      E()
    }), [e]), null
  }