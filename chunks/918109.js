"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("446674"),
  s = n("77078"),
  r = n("629109"),
  o = n("135230"),
  u = n("42887"),
  d = n("782340"),
  c = () => {
    let e = (0, l.useStateFromStores)([u.default], () => u.default.isInteractionRequired(), []),
      t = a.useRef(null);

    function n() {
      null !== t.current && ((0, s.closeModal)(t.current), t.current = null)
    }

    function c() {
      r.default.interact()
    }
    return a.useEffect(() => (e ? t.current = (0, s.openModal)(e => (0, i.jsx)(o.default, {
      title: d.default.Messages.INTERACTION_REQUIRED_TITLE,
      body: d.default.Messages.INTERACTION_REQUIRED_BODY,
      onConfirm: c,
      confirmText: d.default.Messages.OKAY,
      ...e
    })) : n(), () => {
      n()
    }), [e]), null
  }