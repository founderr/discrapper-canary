"use strict";
t.r(s), t("47120");
var i = t("735250");
t("470079");
var l = t("727075"),
  C = t("780384"),
  a = t("481060"),
  r = t("493683"),
  n = t("410030"),
  o = t("204197"),
  d = t("63063"),
  c = t("51144"),
  x = t("792451"),
  f = t("814667"),
  u = t("981631"),
  h = t("689938"),
  p = t("970422");
let _ = (e, s) => {
    r.default.openPrivateChannel(e), s()
  },
  L = e => {
    let {
      user: s,
      onClose: t
    } = e, {
      avatarSrc: l,
      eventHandlers: C
    } = (0, o.default)({
      user: s,
      size: a.AvatarSizes.SIZE_56
    }), r = c.default.getName(s), n = s.username !== r;
    return (0, i.jsxs)("div", {
      className: p.referredUserRowContainer,
      children: [(0, i.jsx)(a.Avatar, {
        src: l,
        "aria-label": r,
        size: a.AvatarSizes.SIZE_56,
        ...C
      }), (0, i.jsxs)("div", {
        className: p.referredUserRowBody,
        children: [(0, i.jsx)(a.Tooltip, {
          text: h.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: l,
              onMouseLeave: C
            } = e;
            return (0, i.jsx)(a.Clickable, {
              onClick: () => _(s.id, t),
              className: p.displayNameClickableContainer,
              onMouseEnter: l,
              onMouseLeave: C,
              children: (0, i.jsx)(a.Text, {
                variant: "text-md/medium",
                className: p.displayName,
                children: r
              })
            })
          }
        }), n && (0, i.jsx)(a.Text, {
          variant: "text-md/medium",
          className: p.userName,
          children: s.username
        })]
      })]
    })
  };
s.default = e => {
  let {
    selectedUsers: s,
    onClose: t
  } = e, r = [...s].map(e => (0, i.jsx)(L, {
    user: e,
    onClose: t
  }, e.id)), o = (0, n.useTheme)(), c = (0, C.isThemeLight)(o) ? f.default : x.default;
  return (0, i.jsxs)("div", {
    className: p.confrimationContainer,
    children: [(0, i.jsx)(a.Clickable, {
      onClick: t,
      className: p.closeButtonContainer,
      children: (0, i.jsx)(l.CloseSmallIcon, {
        width: 20,
        height: 20
      })
    }), (0, i.jsx)(c, {
      className: p.headerIcon
    }), (0, i.jsx)(a.Heading, {
      variant: "heading-lg/bold",
      className: p.heading,
      children: h.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
        numReferrals: r.length
      })
    }), (0, i.jsx)("div", {
      className: p.confirmedUserContainer,
      children: r
    }), (0, i.jsx)(a.Text, {
      variant: "text-md/medium",
      children: h.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: d.default.getArticleURL(u.HelpdeskArticles.REFERRAL_PROGRAM)
      })
    })]
  })
}