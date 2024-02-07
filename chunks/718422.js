"use strict";
l.r(t), l.d(t, {
  applyChatRestrictions: function() {
    return h
  }
}), l("222007");
var n = l("37983");
l("884691");
var a = l("77078"),
  s = l("913144"),
  i = l("135230"),
  r = l("979911"),
  o = l("401848"),
  u = l("697218"),
  d = l("599110"),
  c = l("267625"),
  f = l("719923"),
  m = l("49111"),
  p = l("782340");

function h(e) {
  let {
    openWarningPopout: t,
    type: l,
    content: h,
    stickers: T,
    uploads: E,
    channel: S,
    restrictMentions: _ = !0,
    respectCooldown: g = !0
  } = e, A = f.default.canUseIncreasedMessageLength(u.default.getCurrentUser());
  return new Promise(e => (function(e) {
    var t, l, u;
    let {
      openWarningPopout: f,
      type: h,
      content: T,
      stickers: E,
      uploads: S,
      channel: _,
      restrictMentions: g,
      respectCooldown: A,
      userCanUsePremiumMessageLength: I,
      resolve: v
    } = e;
    if (0 === T.length && !(null === (t = h.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == E || 0 === E.length) && (null == S || 0 === S.length)) {
      v({
        valid: !1,
        failureReason: m.MessageRestrictionTypes.EMPTY_MESSAGE
      });
      return
    }
    let N = I ? m.MAX_MESSAGE_LENGTH_PREMIUM : m.MAX_MESSAGE_LENGTH;
    if (T.length > N) {
      if (I || null == _) {
        ;
        l = T.length, u = N, (0, a.openModal)(e => (0, n.jsx)(i.default, {
          title: p.default.Messages.MESSAGE_TOO_LONG_HEADER,
          body: p.default.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
            currentLength: l,
            maxLength: u
          }),
          confirmText: p.default.Messages.OKAY,
          ...e
        })), d.default.track(m.AnalyticEvents.OPEN_MODAL, {
          type: "Message Too Long Alert",
          message_content_length: l
        })
      } else s.default.dispatch({
        type: "MESSAGE_LENGTH_UPSELL",
        channel: _,
        content: T
      });
      v({
        valid: !1,
        failureReason: m.MessageRestrictionTypes.MESSAGE_TOO_LONG
      });
      return
    }
    if (null != _) {
      if (null != _.getGuildId() && A && o.default.getSlowmodeCooldownGuess(_.id) > 0) {
        v({
          valid: !1,
          failureReason: m.MessageRestrictionTypes.SLOWMODE_COOLDOWN
        });
        return
      }
      if (null != f)
        for (let {
            check: e,
            analyticsType: t,
            animation: l
          }
          of c.RESTRICTIONS) {
          let n = e(T, _, g);
          if (!1 !== n) {
            f({
              analyticsType: t,
              channel: _,
              onCancel: () => v({
                valid: !1,
                failureReason: m.MessageRestrictionTypes.SHOUTING_CANCELLED
              }),
              onConfirm: () => v({
                valid: !0
              }),
              popoutText: n,
              animation: l
            });
            return
          }
        }
    }
    if (r.default.isFull()) {
      (0, a.openModal)(e => (0, n.jsx)(i.default, {
        title: p.default.Messages.MESSAGE_RATE_LIMITED_HEADER,
        body: p.default.Messages.MESSAGE_RATE_LIMITED_BODY,
        confirmText: p.default.Messages.MESSAGE_RATE_LIMITED_BUTTON,
        ...e
      }), {
        onCloseRequest: m.NOOP
      }), v({
        valid: !1,
        failureReason: m.MessageRestrictionTypes.RATE_LIMITED
      });
      return
    }
    v({
      valid: !0
    })
  })({
    openWarningPopout: t,
    type: l,
    content: h,
    stickers: T,
    uploads: E,
    channel: S,
    restrictMentions: _,
    respectCooldown: g,
    userCanUsePremiumMessageLength: A,
    resolve: e
  }))
}