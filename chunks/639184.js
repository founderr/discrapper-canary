"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250);
n(470079);
var l = n(120356),
  a = n.n(l),
  r = n(481060),
  i = n(228392),
  o = n(404616),
  c = n(710352),
  d = n(921944),
  u = n(689938),
  m = n(993772),
  h = n(385092),
  g = n(861186),
  x = n(504764);

function _(e) {
  let {
    onDismiss: t
  } = e;
  return (0, s.jsxs)(r.Clickable, {
    onClick: () => {
      open(c.V8), (0, i.GX)({
        readGuideCta: !0
      })
    },
    className: a()(g.container, h.container, m.mainCard),
    children: [(0, s.jsxs)("div", {
      className: h.inline,
      children: [(0, s.jsxs)("div", {
        className: h.author,
        children: [(0, s.jsx)(r.ClydeIcon, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: h.discordIcon
        }), (0, s.jsx)(r.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: u.Z.Messages.DISCORD_NAME
        }), (0, s.jsxs)("div", {
          className: h.notice,
          children: [(0, s.jsx)(r.CircleInformationIcon, {
            size: "md",
            color: "currentColor",
            className: h.infoIcon
          }), (0, s.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: u.Z.Messages.FORUM_HELPER_CARD_NOTICE
          })]
        })]
      }), (0, s.jsx)(r.Clickable, {
        onClick: e => {
          e.stopPropagation(), t(d.L.DISMISS), (0, i.GX)({
            readGuideCta: !1
          })
        },
        children: (0, s.jsx)(r.CloseSmallIcon, {
          size: "xs",
          color: "currentColor",
          className: h.closeIcon
        })
      })]
    }), (0, s.jsx)("hr", {
      className: h.separator
    }), (0, s.jsxs)("div", {
      className: h.inline,
      children: [(0, s.jsxs)("div", {
        children: [(0, s.jsx)(r.Heading, {
          className: a()(g.__invalid_channelName, h.title),
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: u.Z.Messages.FORUM_HELPER_CARD_TITLE
        }), (0, s.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: u.Z.Messages.FORUM_HELPER_CARD_BODY
        })]
      }), (0, s.jsx)("img", {
        src: x,
        alt: u.Z.Messages.FORUM_HELPER_CARD_ALT_TEXT,
        width: o.TJ,
        height: o.TJ
      })]
    })]
  })
}