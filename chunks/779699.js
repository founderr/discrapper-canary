"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(457926),
  l = n(689938),
  u = n(157451);
t.Z = function(e) {
  let {
    iconType: t,
    children: n
  } = e, r = null;
  switch (t) {
    case "voice":
      r = (0, i.jsx)(o.VoiceNormalIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.VOICE_CHANNEL
      });
      break;
    case "voice-locked":
      r = (0, i.jsx)(o.LockIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.VOICE_CHANNEL_LOCKED
      });
      break;
    case "stage":
      r = (0, i.jsx)(o.StageIcon, {
        size: "lg",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.STAGE_CHANNEL
      });
      break;
    case "stage-locked":
      r = (0, i.jsx)(o.LockIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.STAGE_CHANNEL_LOCKED
      });
      break;
    case "thread":
      r = (0, i.jsx)(o.ThreadIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.THREAD
      });
      break;
    case "text":
      r = (0, i.jsx)(o.TextIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.CHANNEL
      });
      break;
    case "forum":
      r = (0, i.jsx)(o.ForumIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.FORUM_CHANNEL
      });
      break;
    case "post":
      r = (0, i.jsx)(o.ChatIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.FORUM_POST
      });
      break;
    case "home":
    case "guide":
      r = (0, i.jsx)(o.SignPostIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.SERVER_GUIDE
      });
      break;
    case "browse":
    case "customize":
      r = (0, i.jsx)(o.ChannelListMagnifyingGlassIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.CHANNEL_BROWSER_TITLE
      });
      break;
    case "message":
      r = (0, i.jsx)(o.ChatIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
      });
      break;
    case "locked":
      r = (0, i.jsx)(o.LockIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.NO_ACCESS
      });
      break;
    case "media":
      r = (0, i.jsx)(o.ImageIcon, {
        size: "md",
        color: "currentColor",
        className: u.icon,
        "aria-label": l.Z.Messages.MEDIA_CHANNEL
      })
  }
  return (0, i.jsxs)("span", {
    className: s()("channelWithIcon", {
      [u.iconMentionText]: "text" === t
    }),
    children: [(0, i.jsx)(a.Z, {
      children: r
    }), null != n && "" !== n ? (0, i.jsx)("span", {
      className: u.name,
      children: n
    }) : null]
  })
}