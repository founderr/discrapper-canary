"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  i = a("907002"),
  l = a("77078"),
  r = a("79112"),
  o = a("217513"),
  u = a("701909"),
  d = a("158998"),
  c = a("303270"),
  E = a("935583"),
  f = a("49111"),
  m = a("782340"),
  g = a("341923");

function S(e) {
  let {
    userRef: t,
    usernameSuggestionLoading: a = !1,
    oneClickFlow: S = !1,
    ..._
  } = e, {
    user: I,
    editState: T,
    onClose: h
  } = _, O = (0, o.default)(I.id), M = function(e, t, a) {
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
            helpdeskArticle: u.default.getArticleURL(f.HelpdeskArticles.POMELO_FAQ)
          })
        };
      default:
        return {
          header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
        }
    }
  }(T, d.default.getName(I), h), [N, L] = (0, i.useSpring)(() => ({
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
    className: g.displayNameContainer,
    children: [(0, s.jsxs)(i.animated.div, {
      style: {
        opacity: N.opacity,
        y: N.y
      },
      children: [(0, s.jsx)(l.Heading, {
        className: g.title,
        color: "header-primary",
        variant: "heading-xl/extrabold",
        children: M.header
      }), (0, s.jsxs)("div", {
        className: g.subtitle,
        children: [(0, s.jsx)(l.Heading, {
          color: "header-secondary",
          variant: "heading-sm/medium",
          children: M.subtitle
        }), null != M.link && (0, s.jsx)(l.Text, {
          className: g.link,
          color: "header-secondary",
          variant: "text-sm/medium",
          children: M.link
        })]
      })]
    }), (0, s.jsx)(c.default, {
      ..._,
      displayProfile: O,
      ref: t,
      usernameSuggestionLoading: a,
      oneClickFlow: S
    })]
  })
}