"use strict";
t.r(s), t("47120");
var i = t("735250");
t("470079");
var a = t("727075"),
  l = t("780384"),
  r = t("481060"),
  C = t("493683"),
  n = t("410030"),
  d = t("204197"),
  o = t("63063"),
  c = t("51144"),
  u = t("792451"),
  f = t("814667"),
  x = t("981631"),
  h = t("689938"),
  p = t("970422");
let _ = (e, s) => {
    C.default.openPrivateChannel(e), s()
  },
  j = e => {
    let {
      user: s,
      onClose: t
    } = e, {
      avatarSrc: a,
      eventHandlers: l
    } = (0, d.default)({
      user: s,
      size: r.AvatarSizes.SIZE_56
    }), C = c.default.getName(s), n = s.username !== C;
    return (0, i.jsxs)("div", {
      className: p.referredUserRowContainer,
      children: [(0, i.jsx)(r.Avatar, {
        src: a,
        "aria-label": C,
        size: r.AvatarSizes.SIZE_56,
        ...l
      }), (0, i.jsxs)("div", {
        className: p.referredUserRowBody,
        children: [(0, i.jsx)(r.Tooltip, {
          text: h.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: a,
              onMouseLeave: l
            } = e;
            return (0, i.jsx)(r.Clickable, {
              onClick: () => _(s.id, t),
              className: p.displayNameClickableContainer,
              onMouseEnter: a,
              onMouseLeave: l,
              children: (0, i.jsx)(r.Text, {
                variant: "text-md/medium",
                className: p.displayName,
                children: C
              })
            })
          }
        }), n && (0, i.jsx)(r.Text, {
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
  } = e, C = [...s].map(e => (0, i.jsx)(j, {
    user: e,
    onClose: t
  }, e.id)), d = (0, n.useTheme)(), c = (0, l.isThemeLight)(d) ? f.default : u.default;
  return (0, i.jsxs)("div", {
    className: p.confrimationContainer,
    children: [(0, i.jsx)(r.Clickable, {
      onClick: t,
      className: p.closeButtonContainer,
      children: (0, i.jsx)(a.CloseSmallIcon, {
        width: 20,
        height: 20
      })
    }), (0, i.jsx)(c, {
      className: p.headerIcon
    }), (0, i.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      className: p.heading,
      children: h.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
        numReferrals: C.length
      })
    }), (0, i.jsx)("div", {
      className: p.confirmedUserContainer,
      children: C
    }), (0, i.jsx)(r.Text, {
      variant: "text-md/medium",
      children: h.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: o.default.getArticleURL(x.HelpdeskArticles.REFERRAL_PROGRAM)
      })
    })]
  })
}