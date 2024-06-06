"use strict";
t.r(s), t("47120");
var a = t("735250");
t("470079");
var r = t("120356"),
  l = t.n(r),
  i = t("512722"),
  n = t.n(i),
  C = t("727075"),
  d = t("442837"),
  o = t("780384"),
  c = t("481060"),
  u = t("493683"),
  f = t("37234"),
  x = t("410030"),
  h = t("204197"),
  p = t("819640"),
  _ = t("63063"),
  R = t("51144"),
  E = t("281494"),
  j = t("276444"),
  L = t("792451"),
  m = t("814667"),
  g = t("981631"),
  S = t("689938"),
  A = t("830292");
let M = (e, s) => {
    p.default.hasLayers() && (0, f.popLayer)(), u.default.openPrivateChannel(e), s()
  },
  F = e => {
    let {
      user: s,
      trialCreationResult: t,
      onClose: r
    } = e, {
      avatarSrc: i,
      eventHandlers: n
    } = (0, h.default)({
      user: s,
      size: c.AvatarSizes.SIZE_56
    }), C = R.default.getName(s), d = s.username !== C && t === E.CreateReferralStatus.SUCCESS, o = t === E.CreateReferralStatus.FAIL;
    return (0, a.jsxs)("div", {
      className: A.referredUserRowContainer,
      children: [(0, a.jsx)(c.Avatar, {
        imageClassName: l()({
          [A.erroredAvatar]: o
        }),
        src: i,
        "aria-label": C,
        size: c.AvatarSizes.SIZE_56,
        ...n
      }), (0, a.jsxs)("div", {
        className: A.referredUserRowBody,
        children: [o ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c.Text, {
            className: A.errorDisplayName,
            variant: "text-md/medium",
            children: C
          }), (0, a.jsx)(c.Text, {
            variant: "text-md/medium",
            className: A.userName,
            children: S.default.Messages.REFERRAL_PROGRAM_CONFIRMATION_ERROR_PAGE.format({
              userName: C
            })
          })]
        }) : (0, a.jsx)(c.Tooltip, {
          text: S.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: l
            } = e;
            return (0, a.jsx)(c.Clickable, {
              onClick: () => M(s.id, r),
              className: A.displayNameClickableContainer,
              onMouseEnter: t,
              onMouseLeave: l,
              children: (0, a.jsx)(c.Text, {
                variant: "text-md/medium",
                className: A.displayName,
                children: C
              })
            })
          }
        }), d && (0, a.jsx)(c.Text, {
          variant: "text-md/medium",
          className: A.userName,
          children: s.username
        })]
      })]
    })
  };
s.default = e => {
  let {
    selectedUsers: s,
    trialCreationResult: t,
    onClose: r
  } = e, l = [...s].map(e => (0, a.jsx)(F, {
    user: e,
    trialCreationResult: t.get(e.id),
    onClose: r
  }, e.id)), i = (0, d.useStateFromStores)([j.default], () => j.default.getReferralsRemaining());
  n()(null !== i, "Referrals remaining should not be null");
  let u = (0, x.useTheme)(),
    f = (0, o.isThemeLight)(u) ? m.default : L.default,
    h = S.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_COMPLETE_HEADER,
    p = [...t.values()].filter(e => e === E.CreateReferralStatus.SUCCESS).length;
  return i > 0 && (h = S.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
    numReferrals: p
  })), 0 === p && (h = S.default.Messages.REFERRAL_PROGRAM_CONFIRMATION_ERROR_PAGE_HEADER), (0, a.jsxs)("div", {
    className: A.confrimationContainer,
    children: [(0, a.jsx)(c.Clickable, {
      onClick: r,
      className: A.closeButtonContainer,
      children: (0, a.jsx)(C.CloseSmallIcon, {
        width: 20,
        height: 20
      })
    }), (0, a.jsx)(f, {
      className: A.headerIcon
    }), (0, a.jsx)(c.Heading, {
      variant: "heading-lg/bold",
      className: A.heading,
      children: h
    }), (0, a.jsx)("div", {
      className: A.confirmedUserContainer,
      children: l
    }), (0, a.jsx)(c.Text, {
      variant: "text-md/medium",
      children: S.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: _.default.getArticleURL(g.HelpdeskArticles.REFERRAL_PROGRAM)
      })
    })]
  })
}