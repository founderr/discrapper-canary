"use strict";
n.d(t, {
  v: function() {
    return T
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(570140),
  o = n(468026),
  a = n(673750),
  l = n(300429),
  u = n(594174),
  _ = n(626135),
  c = n(760729),
  d = n(74538),
  E = n(981631),
  I = n(689938);

function T(e) {
  let {
    openWarningPopout: t,
    type: n,
    content: T,
    stickers: h,
    uploads: f,
    channel: S,
    restrictMentions: N = !0,
    respectCooldown: A = !0
  } = e, m = d.ZP.canUseIncreasedMessageLength(u.default.getCurrentUser());
  return new Promise(e => (function(e) {
    var t, n, u;
    let {
      openWarningPopout: d,
      type: T,
      content: h,
      stickers: f,
      uploads: S,
      channel: N,
      restrictMentions: A,
      respectCooldown: m,
      userCanUsePremiumMessageLength: O,
      resolve: p
    } = e;
    if (0 === h.length && !(null === (t = T.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == f || 0 === f.length) && (null == S || 0 === S.length)) {
      p({
        valid: !1,
        failureReason: E.zYc.EMPTY_MESSAGE
      });
      return
    }
    let R = O ? E.en1 : E.J6R;
    if (h.length > R) {
      if (O || null == N) {
        ;
        n = h.length, u = R, (0, r.openModal)(e => (0, i.jsx)(o.default, {
          title: I.Z.Messages.MESSAGE_TOO_LONG_HEADER,
          body: I.Z.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
            currentLength: n,
            maxLength: u
          }),
          confirmText: I.Z.Messages.OKAY,
          ...e
        })), _.default.track(E.rMx.OPEN_MODAL, {
          type: "Message Too Long Alert",
          message_content_length: n
        })
      } else s.Z.dispatch({
        type: "MESSAGE_LENGTH_UPSELL",
        channel: N,
        content: h
      });
      p({
        valid: !1,
        failureReason: E.zYc.MESSAGE_TOO_LONG
      });
      return
    }
    if (null != N) {
      if (null != N.getGuildId() && m && l.Z.getSlowmodeCooldownGuess(N.id) > 0) {
        p({
          valid: !1,
          failureReason: E.zYc.SLOWMODE_COOLDOWN
        });
        return
      }
      if (null != d)
        for (let {
            check: e,
            analyticsType: t,
            animation: n
          }
          of c.$) {
          let i = e(h, N, A);
          if (!1 !== i) {
            d({
              analyticsType: t,
              channel: N,
              onCancel: () => p({
                valid: !1,
                failureReason: E.zYc.SHOUTING_CANCELLED
              }),
              onConfirm: () => p({
                valid: !0
              }),
              popoutText: i,
              animation: n
            });
            return
          }
        }
    }
    if (a.ZP.isFull()) {
      (0, r.openModal)(e => (0, i.jsx)(o.default, {
        title: I.Z.Messages.MESSAGE_RATE_LIMITED_HEADER,
        body: I.Z.Messages.MESSAGE_RATE_LIMITED_BODY,
        confirmText: I.Z.Messages.MESSAGE_RATE_LIMITED_BUTTON,
        ...e
      }), {
        onCloseRequest: E.dG4
      }), p({
        valid: !1,
        failureReason: E.zYc.RATE_LIMITED
      });
      return
    }
    p({
      valid: !0
    })
  })({
    openWarningPopout: t,
    type: n,
    content: T,
    stickers: h,
    uploads: f,
    channel: S,
    restrictMentions: N,
    respectCooldown: A,
    userCanUsePremiumMessageLength: m,
    resolve: e
  }))
}