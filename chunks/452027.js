"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("151426"),
  i = n("255397"),
  r = n("264732"),
  u = n("176347"),
  o = n("665182"),
  d = n("850391"),
  c = n("10641"),
  f = n("474643"),
  h = n("109264"),
  m = n("945330"),
  p = n("664336"),
  E = n("659500"),
  S = n("412090"),
  g = n("49111"),
  C = n("994428"),
  _ = n("782340"),
  I = n("370835"),
  T = function(e) {
    let {
      channel: t,
      guild: n,
      maxWidth: T
    } = e;
    a.useEffect(() => {
      (0, c.markDismissibleContentAsDismissed)(s.DismissibleContent.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
        dismissAction: C.ContentDismissActionType.AUTO
      })
    }, []);
    let v = a.useCallback(() => {
        i.default.updateChatOpen(t.id, !1), E.ComponentDispatch.safeDispatch(g.ComponentActions.FOCUS_CHAT_BUTTON)
      }, [t.id]),
      x = (0, l.jsx)(p.default.Icon, {
        icon: m.default,
        tooltip: _.default.Messages.CLOSE,
        onClick: v
      });
    return (0, l.jsxs)(o.default, {
      sidebarType: o.ChatSidebarType.CallChatSidebar,
      maxWidth: T,
      floatingLayer: S.default,
      children: [(0, l.jsx)(r.default, {
        channel: t,
        draftType: f.DraftType.ChannelMessage
      }), (0, l.jsxs)(p.default, {
        toolbar: x,
        "aria-label": _.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
        children: [(0, l.jsx)(p.default.Icon, {
          icon: h.default,
          disabled: !0,
          "aria-label": _.default.Messages.VOICE_CHAT_TEXT_CHANNEL
        }), (0, l.jsx)(p.default.Title, {
          children: t.name
        })]
      }), (0, l.jsx)("div", {
        className: I.chat,
        children: (0, l.jsx)(u.default, {
          channel: t,
          guild: n,
          chatInputType: d.ChatInputTypes.SIDEBAR
        }, t.id)
      })]
    })
  }