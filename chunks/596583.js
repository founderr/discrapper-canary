"use strict";
t.r(s), t("47120");
var a = t("735250");
t("470079");
var r = t("512722"),
  l = t.n(r),
  i = t("727075"),
  n = t("442837"),
  C = t("780384"),
  o = t("481060"),
  d = t("493683"),
  c = t("410030"),
  u = t("204197"),
  f = t("63063"),
  x = t("51144"),
  h = t("276444"),
  p = t("792451"),
  _ = t("814667"),
  R = t("981631"),
  j = t("689938"),
  E = t("970422");
let L = (e, s) => {
    d.default.openPrivateChannel(e), s()
  },
  m = e => {
    let {
      user: s,
      onClose: t
    } = e, {
      avatarSrc: r,
      eventHandlers: l
    } = (0, u.default)({
      user: s,
      size: o.AvatarSizes.SIZE_56
    }), i = x.default.getName(s), n = s.username !== i;
    return (0, a.jsxs)("div", {
      className: E.referredUserRowContainer,
      children: [(0, a.jsx)(o.Avatar, {
        src: r,
        "aria-label": i,
        size: o.AvatarSizes.SIZE_56,
        ...l
      }), (0, a.jsxs)("div", {
        className: E.referredUserRowBody,
        children: [(0, a.jsx)(o.Tooltip, {
          text: j.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: l
            } = e;
            return (0, a.jsx)(o.Clickable, {
              onClick: () => L(s.id, t),
              className: E.displayNameClickableContainer,
              onMouseEnter: r,
              onMouseLeave: l,
              children: (0, a.jsx)(o.Text, {
                variant: "text-md/medium",
                className: E.displayName,
                children: i
              })
            })
          }
        }), n && (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          className: E.userName,
          children: s.username
        })]
      })]
    })
  };
s.default = e => {
  let {
    selectedUsers: s,
    onClose: t
  } = e, r = [...s].map(e => (0, a.jsx)(m, {
    user: e,
    onClose: t
  }, e.id)), d = (0, n.useStateFromStores)([h.default], () => h.default.getReferralsRemaining());
  l()(null !== d, "Referrals remaining should not be null");
  let u = (0, c.useTheme)(),
    x = (0, C.isThemeLight)(u) ? _.default : p.default,
    L = j.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_COMPLETE_HEADER;
  return d > 0 && (L = j.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
    numReferrals: r.length
  })), (0, a.jsxs)("div", {
    className: E.confrimationContainer,
    children: [(0, a.jsx)(o.Clickable, {
      onClick: t,
      className: E.closeButtonContainer,
      children: (0, a.jsx)(i.CloseSmallIcon, {
        width: 20,
        height: 20
      })
    }), (0, a.jsx)(x, {
      className: E.headerIcon
    }), (0, a.jsx)(o.Heading, {
      variant: "heading-lg/bold",
      className: E.heading,
      children: L
    }), (0, a.jsx)("div", {
      className: E.confirmedUserContainer,
      children: r
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/medium",
      children: j.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: f.default.getArticleURL(R.HelpdeskArticles.REFERRAL_PROGRAM)
      })
    })]
  })
}