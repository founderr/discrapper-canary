"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var i = s("735250"),
  n = s("470079"),
  a = s("120356"),
  l = s.n(a),
  r = s("481060"),
  o = s("808602"),
  d = s("413684"),
  u = s("298812"),
  c = s("200115"),
  h = s("406205"),
  S = s("689938"),
  N = s("75217");

function f(e) {
  return (0, i.jsx)("div", {
    className: N.sectionHeader,
    children: (0, i.jsx)(r.Heading, {
      variant: "text-xs/bold",
      className: N.sectionHeaderTitle,
      color: "text-muted",
      children: e.title
    })
  })
}

function g(e) {
  return (0, i.jsxs)("div", {
    children: [null != e.title && (0, i.jsx)(f, {
      title: e.title
    }), (0, i.jsx)("div", {
      className: l()(N.sectionContent, {
        [N.sectionContentPadding]: !0 !== e.noPadding
      }),
      children: e.children
    })]
  })
}

function m(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsxs)(r.ModalHeader, {
    className: N.header,
    children: [(0, i.jsxs)("div", {
      className: N.headerLeft,
      children: [(0, i.jsx)(o.default, {
        className: N.headerBell
      }), (0, i.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: S.default.Messages.NOTIFICATION_SETTINGS
      })]
    }), (0, i.jsx)(r.ModalCloseButton, {
      onClick: t
    })]
  })
}

function E(e) {
  let t = n.useRef(null);
  return (0, i.jsxs)(r.ModalRoot, {
    size: r.ModalSize.MEDIUM,
    transitionState: e.transitionState,
    "aria-label": S.default.Messages.NOTIFICATION_SETTINGS,
    children: [(0, i.jsx)(m, {
      onClose: e.onClose
    }), (0, i.jsxs)(r.ModalContent, {
      className: N.content,
      scrollerRef: t,
      children: [(0, i.jsx)(g, {
        children: (0, i.jsx)(c.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(g, {
        title: S.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
        noPadding: !0,
        children: (0, i.jsx)(h.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(g, {
        title: S.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
        children: (0, i.jsx)(d.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(f, {
        title: S.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES
      }), (0, i.jsx)(u.default, {
        guildId: e.guildId,
        requestScrollToBottom: () => {
          null != t && null != t.current && t.current.scrollToBottom({
            animate: !0
          })
        }
      })]
    })]
  })
}