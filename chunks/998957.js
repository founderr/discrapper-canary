"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  i = a("907002"),
  l = a("77078"),
  r = a("79112"),
  o = a("217513"),
  d = a("701909"),
  u = a("158998"),
  c = a("303270"),
  E = a("935583"),
  f = a("49111"),
  m = a("782340"),
  S = a("250727");

function g(e) {
  let {
    userRef: t,
    usernameSuggestionLoading: a = !1,
    oneClickFlow: g = !1,
    ..._
  } = e, {
    user: I,
    editState: T,
    onClose: h
  } = _, O = (0, o.default)(I.id), N = function(e, t, a) {
    switch (e) {
      case E.EditState.EDIT_USERNAME:
        return {
          header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
        };
      case E.EditState.EDIT_DISPLAY_NAME:
        return {
          header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
        };
      case E.EditState.PREVIEW:
        return {
          header: m.default.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({
            displayName: t
          }), subtitle: m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
            onClick: () => {
              a(), r.default.open(f.UserSettingsSections.ACCOUNT)
            }
          })
        };
      case E.EditState.SUGGESTION:
        return {
          header: m.default.Messages.POMELO_ACTION_LABEL_OCF, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(), link: m.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
            helpdeskArticle: d.default.getArticleURL(f.HelpdeskArticles.POMELO_FAQ)
          })
        };
      default:
        return {
          header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
        }
    }
  }(T, u.default.getName(I), h), [M, L] = (0, i.useSpring)(() => ({
    opacity: 0,
    y: 10
  }));
  return n.useEffect(() => {
    L({
      y: 0,
      opacity: 1,
      from: {
        y: 10,
        opacity: 0
      }
    })
  }, [L, T]), (0, s.jsxs)("div", {
    className: S.displayNameContainer,
    children: [(0, s.jsxs)(i.animated.div, {
      style: {
        opacity: M.opacity,
        y: M.y
      },
      children: [(0, s.jsx)(l.Heading, {
        className: S.title,
        color: "header-primary",
        variant: "heading-xl/extrabold",
        children: N.header
      }), (0, s.jsxs)("div", {
        className: S.subtitle,
        children: [(0, s.jsx)(l.Heading, {
          color: "header-secondary",
          variant: "heading-sm/medium",
          children: N.subtitle
        }), null != N.link && (0, s.jsx)(l.Text, {
          className: S.link,
          color: "header-secondary",
          variant: "text-sm/medium",
          children: N.link
        })]
      })]
    }), (0, s.jsx)(c.default, {
      ..._,
      displayProfile: O,
      ref: t,
      usernameSuggestionLoading: a,
      oneClickFlow: g
    })]
  })
}