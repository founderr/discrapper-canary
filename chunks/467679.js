"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("208633"),
  o = n("981729"),
  l = n("481060"),
  u = n("674563"),
  d = n("689938"),
  _ = n("461369");
let c = e => {
  let t, {
      invertColor: n = !1,
      type: r = u.BotTagTypes.BOT,
      className: c,
      verified: E,
      hideIcon: I = !1,
      useRemSizes: T = !1,
      children: f = []
    } = e,
    S = null,
    h = d.default.Messages.VERIFIED_BOT_TOOLTIP;
  switch (r) {
    case u.BotTagTypes.SYSTEM_DM:
    case u.BotTagTypes.OFFICIAL:
      E = !0, h = d.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, S = d.default.Messages.SYSTEM_DM_TAG_SYSTEM;
      break;
    case u.BotTagTypes.SERVER:
      S = d.default.Messages.BOT_TAG_SERVER;
      break;
    case u.BotTagTypes.ORIGINAL_POSTER:
      S = d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
      break;
    case u.BotTagTypes.STAFF_ONLY_DM:
      S = d.default.Messages.STAFF_BADGE_TOOLTIP;
      break;
    case u.BotTagTypes.AI:
      E = !0, h = d.default.Messages.AI_GENERATED_TOOLTIP, S = d.default.Messages.AI_TAG;
      break;
    case u.BotTagTypes.REMIX:
      E = !1, S = d.default.Messages.REMIXING_TAG;
      break;
    case u.BotTagTypes.BOT:
    default:
      S = d.default.Messages.APP_TAG
  }
  let A = r === u.BotTagTypes.ORIGINAL_POSTER,
    m = r === u.BotTagTypes.REMIX,
    N = null;
  E && (N = (0, i.jsx)(o.Tooltip, {
    text: h,
    align: "center",
    position: "top",
    children: e => (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
      ...e,
      className: _.botTagVerified,
      color: l.tokens.unsafe_rawColors.WHITE_500
    })
  })), t = r === u.BotTagTypes.AI ? _.botTagAI : n ? _.botTagInvert : _.botTagRegular;
  let p = e => (0, i.jsxs)("span", {
    ...e,
    className: s()(c, t, T ? _.rem : _.px, {
      [_.botTagOP]: A,
      [_.botTagRemix]: m
    }),
    children: [I ? null : N, f, (0, i.jsx)("span", {
      className: _.botText,
      children: S
    })]
  });
  switch (r) {
    case u.BotTagTypes.REMIX:
      return (0, i.jsx)(o.Tooltip, {
        text: d.default.Messages.REMIXING_DOWNLOAD_APP,
        position: "top",
        children: e => p(e)
      });
    case u.BotTagTypes.ORIGINAL_POSTER:
      return (0, i.jsx)(o.Tooltip, {
        text: d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
        position: "top",
        children: e => p(e)
      });
    default:
      return p()
  }
};
c.Types = u.BotTagTypes, t.default = c