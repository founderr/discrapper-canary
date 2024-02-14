"use strict";
i.r(t), i.d(t, {
  LurkerModeUpsellPopoutTypes: function() {
    return a
  },
  default: function() {
    return f
  }
}), i("222007");
var a, n, l = i("37983"),
  o = i("884691"),
  s = i("446674"),
  r = i("77078"),
  u = i("851387"),
  d = i("476765"),
  c = i("449008"),
  h = i("267567"),
  p = i("49111"),
  T = i("782340"),
  m = i("194627");
(n = a || (a = {}))[n.CHAT = 0] = "CHAT", n[n.REACTIONS = 1] = "REACTIONS";
var f = e => {
  let {
    type: t,
    guild: a,
    closePopout: n,
    ctaRef: f
  } = e, E = (0, d.useUID)(), [R, I] = o.useState(!1), g = (0, s.useStateFromStores)([h.default], () => h.default.isLurking(a.id), [a.id]);
  o.useEffect(() => {
    R && !g && n()
  }, [R, g, n]);
  let _ = null,
    N = T.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
  switch (t) {
    case 0:
      _ = T.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
      break;
    case 1:
      _ = T.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
      break;
    default:
      return (0, c.assertNever)(t)
  }
  if (null == _) return null;
  let C = async () => {
    I(!0);
    try {
      await u.default.joinGuild(a.id, {
        source: p.JoinGuildSources.CHAT_INPUT_BLOCKER
      }), n()
    } catch {
      I(!1)
    }
  };
  return (0, l.jsxs)(r.Dialog, {
    className: m.container,
    "aria-labelledby": E,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: m.image,
      src: i("748301")
    }), (0, l.jsxs)("div", {
      className: m.content,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        id: E,
        children: _
      }), (0, l.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: N
      }), (0, l.jsxs)("div", {
        className: m.buttonContainer,
        children: [(0, l.jsx)(r.Button, {
          buttonRef: f,
          onClick: C,
          submitting: R,
          children: T.default.Messages.LURKER_MODE_POPOUT_JOIN
        }), (0, l.jsx)(r.Button, {
          onClick: n,
          look: r.Button.Looks.BLANK,
          className: m.cancel,
          children: T.default.Messages.LURKER_MODE_POPOUT_CANCEL
        })]
      })]
    })]
  })
}