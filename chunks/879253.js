"use strict";
n.r(t), n.d(t, {
  ClydeEditProfileModalPersonalitySection: function() {
    return p
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  r = n("65597"),
  s = n("77078"),
  a = n("570697"),
  o = n("826432"),
  u = n("204203"),
  d = n("599110"),
  c = n("335189"),
  f = n("473591"),
  E = n("680894"),
  h = n("49111"),
  _ = n("782340"),
  C = n("192731");

function p(e) {
  var t;
  let {
    settings: n
  } = e, [p, S] = l.useState(!1), [I, R] = l.useState(), {
    pendingPersonality: m,
    errors: g
  } = (0, r.useStateFromStoresObject)([f.default], () => ({
    pendingPersonality: f.default.getPendingPersonality(),
    errors: f.default.getErrors()
  })), [v, L] = l.useState(), T = null != m && I === m, N = null != g && Number(g.code) === h.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? g.message : void 0, A = T ? _.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : _.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
  return (0, i.jsxs)(a.default, {
    title: _.default.Messages.PERSONALITY_CLYDE_SECTION,
    children: [(0, i.jsxs)(s.FormText, {
      type: s.FormText.Types.DESCRIPTION,
      className: C.description,
      children: [_.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, i.jsx)(s.Anchor, {
        href: E.CLYDE_PERSONALITY_FEEDBACK_URL,
        children: _.default.Messages.PERSONALITY_FEEDBACK
      })]
    }), (0, i.jsx)(s.TextArea, {
      value: null !== (t = null != m ? m : n.personality) && void 0 !== t ? t : "",
      onChange: e => {
        (0, c.setPendingPersonality)(e)
      },
      placeholder: _.default.Messages.PERSONALITY_PLACEHOLDER,
      maxLength: E.CLYDE_PERSONALITY_MAX_LENGTH,
      disabled: p,
      autosize: !0
    }), null != N ? (0, i.jsx)(s.FormErrorBlock, {
      className: C.errorBlock,
      children: N
    }) : null, (0, i.jsxs)("div", {
      className: C.generateButtonContainer,
      children: [(0, i.jsx)(s.Button, {
        color: T ? s.ButtonColors.PRIMARY : s.ButtonColors.BRAND,
        innerClassName: C.generateButton,
        onClick: () => {
          if (T && null != v) {
            (0, c.setPendingPersonality)(v), L(void 0);
            return
          }
          null != m && "" !== m.trim() && (d.default.track(h.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
            guild_id: n.guild_id
          }), S(!0), (0, c.generatePersonality)(m).then(e => {
            null != e && (L(m), R(e), (0, c.setPendingPersonality)(e, !0)), S(!1)
          }))
        },
        disabled: null == m || "" === m.trim(),
        submitting: p,
        children: T ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(u.default, {
            className: C.buttonIcon
          }), _.default.Messages.UNDO]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(o.default, {
            className: C.buttonIcon
          }), _.default.Messages.CLYDE_GENERATE_PERSONALITY]
        })
      }), (0, i.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: A
      })]
    })]
  }, "personality")
}