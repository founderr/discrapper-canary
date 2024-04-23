"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("735250");
n("470079");
var l = n("120356"),
  a = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("239091"),
  u = n("901461"),
  d = n("592125"),
  c = n("709054"),
  f = n("723774"),
  E = n("144140"),
  _ = n("91159"),
  m = n("576799"),
  T = n("488131"),
  I = n("981631"),
  p = n("689938"),
  h = n("251113");

function N(e) {
  let {
    message: t,
    compact: n
  } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(c.default.castMessageIdAsChannelId(t.id)));
  return null == l ? null : (0, s.jsx)(S, {
    channel: l,
    compact: n,
    isSystemMessage: (0, u.default)(t)
  })
}

function S(e) {
  let {
    channel: t,
    compact: l,
    isSystemMessage: u
  } = e, d = (0, i.useStateFromStores)([E.default], () => E.default.getCount(t.id)), c = function(e) {
    var t;
    let n = (0, i.useStateFromStores)([E.default], () => E.default.getMostRecentMessage(e.id)),
      l = (0, i.useStateFromStores)([E.default], () => E.default.getCount(e.id)),
      a = (0, _.useLastMessageTimestamp)(e);
    return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? p.default.Messages.NO_RECENT_THREAD_MESSAGES : null == l || 0 === l ? p.default.Messages.NO_THREAD_MESSAGES : null == n ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("span", {
        children: p.default.Messages.NO_RECENT_THREAD_MESSAGES
      }), (0, s.jsx)("span", {
        className: h.timestamp,
        children: (0, _.getTimestampString)(a)
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(m.default, {
        message: n,
        channel: e
      }), (0, s.jsx)("span", {
        className: h.timestamp,
        children: (0, _.getTimestampString)(a)
      })]
    })
  }(t), N = null != d && d > 0;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: a()(h.spine, {
        [h.cozy]: !l,
        [h.systemMessageSpine]: u
      })
    }), (0, s.jsx)(r.Clickable, {
      onClick: function(e) {
        e.stopPropagation(), (0, T.openThreadSidebarForViewing)(t, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          s = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === I.KeyboardKeys.SPACE || e.which === I.KeyboardKeys.ENTER) && (e.preventDefault(), (n || s) && (0, T.openThreadSidebarForViewing)(t, s))
      },
      onContextMenu: function(e) {
        (0, o.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("39285"), n.e("53466"), n.e("40157")]).then(n.bind(n, "422200"));
          return n => (0, s.jsx)(e, {
            channel: t,
            ...n
          })
        })
      },
      "aria-roledescription": p.default.Messages.THREAD_MESSAGE_ROLE_DESCRIPTION,
      className: a()(h.container, {
        [h.systemMessageContainer]: u
      }),
      children: (0, s.jsxs)(r.BlockInteractions, {
        children: [(0, s.jsxs)("div", {
          className: h.topLine,
          children: [(0, s.jsx)(r.HiddenVisually, {
            children: p.default.Messages.THREAD
          }), (0, s.jsx)("span", {
            className: h.name,
            children: t.name
          }), (0, s.jsx)("span", {
            className: h.cta,
            "aria-hidden": !N,
            children: (0, f.formatMessageCountLabel)(d, t.id)
          })]
        }), (0, s.jsx)("span", {
          "aria-hidden": !0,
          className: a()(h.bottomLine),
          children: c
        })]
      })
    })]
  })
}