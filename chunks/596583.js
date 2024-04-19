"use strict";
s.r(t), s("47120");
var a = s("735250");
s("470079");
var i = s("512722"),
  l = s.n(i),
  r = s("727075"),
  C = s("442837"),
  n = s("780384"),
  d = s("481060"),
  o = s("493683"),
  c = s("410030"),
  u = s("204197"),
  f = s("63063"),
  x = s("51144"),
  h = s("276444"),
  p = s("792451"),
  _ = s("814667"),
  j = s("981631"),
  L = s("689938"),
  R = s("970422");
let m = (e, t) => {
    o.default.openPrivateChannel(e), t()
  },
  E = e => {
    let {
      user: t,
      onClose: s
    } = e, {
      avatarSrc: i,
      eventHandlers: l
    } = (0, u.default)({
      user: t,
      size: d.AvatarSizes.SIZE_56
    }), r = x.default.getName(t), C = t.username !== r;
    return (0, a.jsxs)("div", {
      className: R.referredUserRowContainer,
      children: [(0, a.jsx)(d.Avatar, {
        src: i,
        "aria-label": r,
        size: d.AvatarSizes.SIZE_56,
        ...l
      }), (0, a.jsxs)("div", {
        className: R.referredUserRowBody,
        children: [(0, a.jsx)(d.Tooltip, {
          text: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: i,
              onMouseLeave: l
            } = e;
            return (0, a.jsx)(d.Clickable, {
              onClick: () => m(t.id, s),
              className: R.displayNameClickableContainer,
              onMouseEnter: i,
              onMouseLeave: l,
              children: (0, a.jsx)(d.Text, {
                variant: "text-md/medium",
                className: R.displayName,
                children: r
              })
            })
          }
        }), C && (0, a.jsx)(d.Text, {
          variant: "text-md/medium",
          className: R.userName,
          children: t.username
        })]
      })]
    })
  };
t.default = e => {
  let {
    selectedUsers: t,
    onClose: s
  } = e, i = [...t].map(e => (0, a.jsx)(E, {
    user: e,
    onClose: s
  }, e.id)), o = (0, C.useStateFromStores)([h.default], () => h.default.getReferralsRemaining());
  l()(null !== o, "Referrals remaining should not be null");
  let u = (0, c.useTheme)(),
    x = (0, n.isThemeLight)(u) ? _.default : p.default,
    m = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_COMPLETE_HEADER;
  return o > 0 && (m = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
    numReferrals: i.length
  })), (0, a.jsxs)("div", {
    className: R.confrimationContainer,
    children: [(0, a.jsx)(d.Clickable, {
      onClick: s,
      className: R.closeButtonContainer,
      children: (0, a.jsx)(r.CloseSmallIcon, {
        width: 20,
        height: 20
      })
    }), (0, a.jsx)(x, {
      className: R.headerIcon
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-lg/bold",
      className: R.heading,
      children: m
    }), (0, a.jsx)("div", {
      className: R.confirmedUserContainer,
      children: i
    }), (0, a.jsx)(d.Text, {
      variant: "text-md/medium",
      children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: f.default.getArticleURL(j.HelpdeskArticles.REFERRAL_PROGRAM)
      })
    })]
  })
}