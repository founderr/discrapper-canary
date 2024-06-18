"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(25209),
  o = n(794295),
  a = n(865427),
  l = n(853425),
  u = n(49012),
  _ = n(773352);

function c(e) {
  return {
    react(t, n, c) {
      if (e.enableBuildOverrides && (0, a._G)(t.target)) return (0, i.jsx)(r.Fragment, {
        children: (0, i.jsx)(l.Z, {
          url: t.target
        }, t.target)
      }, c.key);
      let d = n(t.content, c),
        E = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, s.Rp)(t.content),
        I = (null == e ? void 0 : e.mustConfirmExternalLink) ? e => (null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, u.q)({
          href: t.target,
          shouldConfirm: !0,
          messageId: c.messageId,
          channelId: c.channelId
        }), null) : void 0;
      if (c.previewLinkTarget && !(0, _.r)(t)) {
        let e = "\n\n(".concat(t.target, ")");
        E.length + e.length > 1024 && (e = "..." + e, E = (E = E.substr(0, 1024 - e.length)).trimEnd()), E += e
      }
      return c.noStyleAndInteraction ? (0, i.jsx)("span", {
        title: E,
        children: d
      }, c.key) : (0, i.jsx)(o.Z, {
        title: E,
        href: t.target,
        trusted: () => (0, _.r)(t),
        onClick: I,
        messageId: c.messageId,
        channelId: c.channelId,
        children: d
      }, c.key)
    }
  }
}