"use strict";
t.r(s), t("47120");
var a = t("735250");
t("470079");
var r = t("512722"),
  i = t.n(r),
  l = t("727075"),
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
  j = t("981631"),
  L = t("689938"),
  R = t("970422");
let m = (e, s) => {
    d.default.openPrivateChannel(e), s()
  },
  E = e => {
    let {
      user: s,
      onClose: t
    } = e, {
      avatarSrc: r,
      eventHandlers: i
    } = (0, u.default)({
      user: s,
      size: o.AvatarSizes.SIZE_56
    }), l = x.default.getName(s), n = s.username !== l;
    return (0, a.jsxs)("div", {
      className: R.referredUserRowContainer,
      children: [(0, a.jsx)(o.Avatar, {
        src: r,
        "aria-label": l,
        size: o.AvatarSizes.SIZE_56,
        ...i
      }), (0, a.jsxs)("div", {
        className: R.referredUserRowBody,
        children: [(0, a.jsx)(o.Tooltip, {
          text: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: i
            } = e;
            return (0, a.jsx)(o.Clickable, {
              onClick: () => m(s.id, t),
              className: R.displayNameClickableContainer,
              onMouseEnter: r,
              onMouseLeave: i,
              children: (0, a.jsx)(o.Text, {
                variant: "text-md/medium",
                className: R.displayName,
                children: l
              })
            })
          }
        }), n && (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          className: R.userName,
          children: s.username
        })]
      })]
    })
  };
s.default = e => {
  let {
    selectedUsers: s,
    onClose: t
  } = e, r = [...s].map(e => (0, a.jsx)(E, {
    user: e,
    onClose: t
  }, e.id)), d = (0, n.useStateFromStores)([h.default], () => h.default.getReferralsRemaining());
  i()(null !== d, "Referrals remaining should not be null");
  let u = (0, c.useTheme)(),
    x = (0, C.isThemeLight)(u) ? _.default : p.default,
    m = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_COMPLETE_HEADER;
  return d > 0 && (m = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
    numReferrals: r.length
  })), (0, a.jsxs)("div", {
    className: R.confrimationContainer,
    children: [(0, a.jsx)(o.Clickable, {
      onClick: t,
      className: R.closeButtonContainer,
      children: (0, a.jsx)(l.CloseSmallIcon, {
        width: 20,
        height: 20
      })
    }), (0, a.jsx)(x, {
      className: R.headerIcon
    }), (0, a.jsx)(o.Heading, {
      variant: "heading-lg/bold",
      className: R.heading,
      children: m
    }), (0, a.jsx)("div", {
      className: R.confirmedUserContainer,
      children: r
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/medium",
      children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: f.default.getArticleURL(j.HelpdeskArticles.REFERRAL_PROGRAM)
      })
    })]
  })
}