n.d(t, {
  Z: function() {
    return T
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(692547),
  a = n(481060),
  r = n(688641),
  o = n(596449),
  c = n(459502),
  u = n(856691),
  d = n(889161),
  h = n(496675),
  m = n(602623),
  E = n(146085),
  p = n(979339),
  g = n(643632),
  f = n(939863),
  C = n(689938),
  _ = n(998877);

function I(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(r.Z, {
    iconContainerClassName: _.continueIconContainer,
    icon: (0, l.jsx)(a.StageIcon, {
      size: "custom",
      color: "currentColor",
      className: _.continueIcon,
      height: 20,
      width: 20
    }),
    color: s.Z.unsafe_rawColors.PRIMARY_700.css,
    title: C.Z.Messages.STAGE_CONTINUE_PROMPT_TITLE,
    description: C.Z.Messages.STAGE_CONTINUE_PROMPT_SUBTITLE,
    onClick: t
  })
}

function x(e) {
  let {
    channel: t
  } = e, {
    participants: n,
    usersInSummary: i
  } = (0, p.Z)(t.id);
  return (0, l.jsxs)("div", {
    className: _.audienceSummary,
    children: [(0, l.jsx)(m.Z, {
      className: _.summaryItem,
      guildId: t.guild_id,
      users: i,
      size: m.u.SIZE_16
    }), (0, l.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: function(e) {
        if (0 === e.length) return "";
        if (1 === e.length) return C.Z.Messages.STAGE_AUDIENCE_WAITING_ONE.format({
          first: e[0].userNick
        });
        if (2 === e.length) return C.Z.Messages.STAGE_AUDIENCE_WAITING_TWO.format({
          first: e[0].userNick,
          second: e[1].userNick
        });
        let t = e.length - 2;
        return C.Z.Messages.STAGE_AUDIENCE_WAITING_MANY.format({
          first: e[0].userNick,
          second: e[1].userNick,
          numOthers: t
        })
      }(n)
    })]
  })
}

function T(e) {
  let {
    channel: t,
    onContinueClick: n
  } = e, s = (0, i.e7)([h.Z], () => h.Z.can(E.yP, t), [t]), r = t.guild_id, {
    canCreateGuildEvent: m
  } = (0, d.XJ)(t), T = (0, g.Z)(t.id), {
    usersInSummary: N
  } = (0, p.Z)(t.id);
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(f.Z, {
      children: (0, l.jsx)("div", {
        className: _.iconBackground,
        children: (0, l.jsx)(a.StageIcon, {
          size: "custom",
          color: "currentColor",
          width: 40,
          height: 40,
          className: _.icon
        })
      })
    }), (0, l.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, l.jsx)(a.Heading, {
        className: _.__invalid_title,
        variant: "heading-xl/semibold",
        children: C.Z.Messages.STAGE_START_PROMPT_TITLE_MODERATOR
      }), (0, l.jsx)(a.Text, {
        className: _.subtitle,
        variant: "text-sm/normal",
        children: C.Z.Messages.STAGE_START_PROMPT_SUBTITLE
      })]
    }), T ? null : (0, l.jsx)(c.Z, {
      channelId: t.id
    }), s ? (0, l.jsx)(u.Z, {
      className: _.eventPrompt,
      channel: t
    }) : null, m ? (0, l.jsx)(o.Z, {
      className: _.eventPrompt,
      guildId: r
    }) : null, (s || N.length > 0) && (0, l.jsx)("hr", {
      className: _.separator
    }), s ? (0, l.jsx)(I, {
      onClick: n
    }) : null, (0, l.jsx)(x, {
      channel: t
    })]
  })
}