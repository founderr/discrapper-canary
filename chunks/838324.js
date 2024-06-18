"use strict";
t.d(s, {
  Z: function() {
    return I
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(692547),
  a = t(481060),
  r = t(45966),
  o = t(637853),
  c = t(889369),
  d = t(974513),
  u = t(290511),
  E = t(689938),
  _ = t(167442);

function I(e) {
  let {
    guildId: s,
    scrollToQuestions: t
  } = e, I = (0, i.e7)([r.Z], () => r.Z.isAdvancedMode(s)), T = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds), [N, m] = (0, o.VF)(s, T), [S, h] = (0, d.OA)(s, [...T]), g = I ? h.length : m.length, C = I ? S.length : N.length, x = g < u.md, R = C >= u.X, L = h.length - m.length, O = (0, n.jsx)(a.CircleCheckIcon, {
    size: "sm",
    color: l.Z.unsafe_rawColors.BRAND_500.css,
    secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
    className: _.icon
  }), A = (0, n.jsx)(a.CircleXIcon, {
    size: "sm",
    className: _.icon,
    color: l.Z.colors.WHITE.css,
    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css
  }), p = [Math.min(u.X, C) / u.md * 100, Math.min(u.md, g) / u.md * 100], M = !x && R ? [l.Z.colors.TEXT_POSITIVE.css, l.Z.colors.TEXT_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
  return (0, n.jsxs)("div", {
    className: _.container,
    children: [(0, n.jsxs)("div", {
      className: _.header,
      children: [(0, n.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-brand",
        children: E.Z.Messages.DEFAULT_CHANNELS_CHATTABLE_COUNT.format({
          count: C
        })
      }), (0, n.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: E.Z.Messages.DEFAULT_CHANNELS_TOTAL_COUNT.format({
          count: g
        })
      })]
    }), (0, n.jsx)(a.StackedProgress, {
      foregroundColors: M,
      percents: p,
      size: a.StackedProgress.Sizes.XSMALL
    }), (0, n.jsxs)("div", {
      className: _.requiredItem,
      children: [x ? A : O, (0, n.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: E.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHANNELS.format({
          count: u.md
        })
      })]
    }), (0, n.jsxs)("div", {
      className: _.requiredItem,
      children: [R ? O : A, (0, n.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: E.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHATTABLE_CHANNELS.format({
          count: u.X
        })
      })]
    }), I && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: _.requiredItem,
        children: [(0, n.jsx)(a.CircleInformationIcon, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: _.icon
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: E.Z.Messages.DEFAULT_CHANNELS_ADVANCED_EXPLAINER
        })]
      }), (0, n.jsxs)("div", {
        className: _.requiredItem,
        children: [(0, n.jsx)(a.CircleInformationIcon, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: _.icon
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: E.Z.Messages.DEFAULT_CHANNELS_PREVIEW_ADDITIONAL.format({
            count: L,
            prejoinHook: e => (0, n.jsx)(a.Anchor, {
              onClick: t,
              children: (0, n.jsx)(a.Text, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-link",
                children: e
              })
            })
          })
        })]
      })]
    })]
  })
}