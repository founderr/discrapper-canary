"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(981729),
  a = n(481060),
  l = n(674563),
  u = n(689938),
  _ = n(13534);
let c = e => {
  let t, {
      invertColor: n = !1,
      type: r = l.Hb.BOT,
      className: c,
      verified: d,
      hideIcon: E = !1,
      useRemSizes: I = !1,
      children: T = []
    } = e,
    h = null,
    f = u.Z.Messages.VERIFIED_BOT_TOOLTIP;
  switch (r) {
    case l.Hb.SYSTEM_DM:
    case l.Hb.OFFICIAL:
      d = !0, f = u.Z.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP_OFFICIAL, h = u.Z.Messages.SYSTEM_DM_TAG_OFFICIAL;
      break;
    case l.Hb.SERVER:
      h = u.Z.Messages.BOT_TAG_SERVER;
      break;
    case l.Hb.ORIGINAL_POSTER:
      h = u.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
      break;
    case l.Hb.STAFF_ONLY_DM:
      h = u.Z.Messages.STAFF_BADGE_TOOLTIP;
      break;
    case l.Hb.AI:
      d = !0, f = u.Z.Messages.AI_GENERATED_TOOLTIP, h = u.Z.Messages.AI_TAG;
      break;
    case l.Hb.REMIX:
      d = !1, h = u.Z.Messages.REMIXING_TAG;
      break;
    case l.Hb.BOT:
    default:
      h = u.Z.Messages.APP_TAG
  }
  let S = r === l.Hb.ORIGINAL_POSTER,
    N = r === l.Hb.REMIX,
    A = null;
  d && (A = (0, i.jsx)(o.u, {
    text: f,
    align: "center",
    position: "top",
    children: e => (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
      ...e,
      className: _.botTagVerified,
      color: a.tokens.unsafe_rawColors.WHITE_500
    })
  })), t = r === l.Hb.AI ? _.botTagAI : n ? _.botTagInvert : _.botTagRegular;
  let m = e => (0, i.jsxs)("span", {
    ...e,
    className: s()(c, t, I ? _.rem : _.px, {
      [_.botTagOP]: S,
      [_.botTagRemix]: N
    }),
    children: [E ? null : A, T, (0, i.jsx)("span", {
      className: _.botText,
      children: h
    })]
  });
  switch (r) {
    case l.Hb.REMIX:
      return (0, i.jsx)(o.u, {
        text: u.Z.Messages.REMIXING_DOWNLOAD_APP,
        position: "top",
        children: e => m(e)
      });
    case l.Hb.ORIGINAL_POSTER:
      return (0, i.jsx)(o.u, {
        text: u.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
        position: "top",
        children: e => m(e)
      });
    default:
      return m()
  }
};
c.Types = l.Hb, t.Z = c