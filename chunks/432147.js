"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("239091"),
  u = n("901461"),
  d = n("592125"),
  c = n("709054"),
  E = n("723774"),
  f = n("144140"),
  _ = n("91159"),
  T = n("576799"),
  I = n("488131"),
  m = n("981631"),
  p = n("689938"),
  N = n("251113");

function S(e) {
  let {
    message: t,
    compact: n
  } = e, a = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(c.default.castMessageIdAsChannelId(t.id)));
  return null == a ? null : (0, s.jsx)(C, {
    channel: a,
    compact: n,
    isSystemMessage: (0, u.default)(t)
  })
}

function C(e) {
  let {
    channel: t,
    compact: a,
    isSystemMessage: u
  } = e, d = (0, i.useStateFromStores)([f.default], () => f.default.getCount(t.id)), c = function(e) {
    var t;
    let n = (0, i.useStateFromStores)([f.default], () => f.default.getMostRecentMessage(e.id)),
      a = (0, i.useStateFromStores)([f.default], () => f.default.getCount(e.id)),
      l = (0, _.useLastMessageTimestamp)(e);
    return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? p.default.Messages.NO_RECENT_THREAD_MESSAGES : null == a || 0 === a ? p.default.Messages.NO_THREAD_MESSAGES : null == n ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("span", {
        children: p.default.Messages.NO_RECENT_THREAD_MESSAGES
      }), (0, s.jsx)("span", {
        className: N.timestamp,
        children: (0, _.getTimestampString)(l)
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(T.default, {
        message: n,
        channel: e
      }), (0, s.jsx)("span", {
        className: N.timestamp,
        children: (0, _.getTimestampString)(l)
      })]
    })
  }(t), S = null != d && d > 0;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: l()(N.spine, {
        [N.cozy]: !a,
        [N.systemMessageSpine]: u
      })
    }), (0, s.jsx)(r.Clickable, {
      onClick: function(e) {
        e.stopPropagation(), (0, I.openThreadSidebarForViewing)(t, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          s = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === m.KeyboardKeys.SPACE || e.which === m.KeyboardKeys.ENTER) && (e.preventDefault(), (n || s) && (0, I.openThreadSidebarForViewing)(t, s))
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
      className: l()(N.container, {
        [N.systemMessageContainer]: u
      }),
      children: (0, s.jsxs)(r.BlockInteractions, {
        children: [(0, s.jsxs)("div", {
          className: N.topLine,
          children: [(0, s.jsx)(r.HiddenVisually, {
            children: p.default.Messages.THREAD
          }), (0, s.jsx)("span", {
            className: N.name,
            children: t.name
          }), (0, s.jsx)("span", {
            className: N.cta,
            "aria-hidden": !S,
            children: (0, E.formatMessageCountLabel)(d, t.id)
          })]
        }), (0, s.jsx)("span", {
          "aria-hidden": !0,
          className: l()(N.bottomLine),
          children: c
        })]
      })
    })]
  })
}