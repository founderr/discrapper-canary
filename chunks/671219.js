"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("911969"),
  d = n("906732"),
  c = n("778087"),
  f = n("603721"),
  E = n("739566"),
  _ = n("171368"),
  m = n("592125"),
  T = n("430824"),
  I = n("594174"),
  p = n("797053"),
  h = n("981631"),
  N = n("665692"),
  S = n("689938"),
  C = n("923892");
let A = {
    tag: "span",
    variant: "text-md/normal",
    color: "header-secondary"
  },
  g = {
    className: i()("mention", C.mention)
  };

function M(e) {
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(o.Text, {
      ...A,
      color: "header-primary",
      children: e
    })
  })
}
t.default = a.memo(function(e) {
  var t, n, l, i, R, v;
  let O, {
      channel: x,
      messageId: L,
      interactionData: D
    } = e,
    {
      analyticsLocations: P
    } = (0, d.default)(),
    {
      onCopy: y,
      copyRef: U
    } = (0, c.default)(x, null == D ? void 0 : null === (t = D.application_command) || void 0 === t ? void 0 : t.id),
    j = (0, r.useStateFromStores)([T.default], () => T.default.getGuild(x.guild_id), [x.guild_id]);
  if (a.useEffect(() => {
      (null == D || D.type === u.ApplicationCommandType.CHAT && void 0 === D.application_command) && f.fetchMessageInteractionData(x.id, L)
    }, [x.id, L, D]), null == D) O = (0, s.jsx)(o.Spinner, {
    type: o.Spinner.Type.SPINNING_CIRCLE,
    className: C.spinner
  });
  else {
    let e = [],
      t = Object.fromEntries((null !== (i = null === (n = D.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== i ? i : []).map(e => [e.name, e]));
    for (let n of null !== (R = D.options) && void 0 !== R ? R : []) e = e.concat(function e(t) {
      var n, l, i, r, d, c, f;
      let C, {
          option: R,
          channel: v,
          guild: O,
          messageId: x,
          parentOptionKey: L,
          commandOptionSpec: D,
          sourceAnalyticsLocations: P
        } = t,
        y = null != L ? L + " " + R.name : R.name;
      if (R.type === u.ApplicationCommandOptionType.SUB_COMMAND || R.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
        let t = [(0, s.jsxs)(a.Fragment, {
            children: [" ", (0, s.jsx)(o.Text, {
              ...A,
              children: null !== (l = null == D ? void 0 : D.name_localized) && void 0 !== l ? l : R.name
            })]
          }, y)],
          u = Object.fromEntries(null === (n = null !== (i = null == D ? void 0 : D.options) && void 0 !== i ? i : []) || void 0 === n ? void 0 : n.map(e => [e.name, e]));
        for (let n of null !== (r = R.options) && void 0 !== r ? r : []) t = t.concat(e({
          option: n,
          channel: v,
          guild: O,
          messageId: x,
          parentOptionKey: y,
          commandOptionSpec: u[n.name],
          sourceAnalyticsLocations: P
        }));
        return t
      }
      let U = R.value;
      if (null != R.value) switch (R.type) {
        case u.ApplicationCommandOptionType.USER: {
          let e = R.value.toString(),
            t = I.default.getUser(e);
          if (null != t) {
            let e = (0, E.getUserAuthor)(t, v);
            C = (0, s.jsxs)(p.default, {
              ...g,
              onClick: () => (0, _.openUserProfileModal)({
                userId: t.id,
                guildId: v.guild_id,
                channelId: v.id,
                messageId: x,
                sourceAnalyticsLocations: P,
                analyticsLocation: {
                  section: h.AnalyticsSections.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                }
              }),
              children: [N.MENTION_SENTINEL, e.nick]
            })
          }
          break
        }
        case u.ApplicationCommandOptionType.CHANNEL: {
          let e = R.value.toString(),
            t = m.default.getChannel(e);
          null != t && (C = (0, s.jsxs)(p.default, {
            ...g,
            children: [N.CHANNEL_SENTINEL, t.name]
          }));
          break
        }
        case u.ApplicationCommandOptionType.ROLE: {
          let e = R.value.toString(),
            t = null != O ? T.default.getRole(O.id, e) : void 0;
          null != t && (C = (0, s.jsxs)(p.default, {
            ...g,
            children: [N.MENTION_SENTINEL, t.name]
          }));
          break
        }
        case u.ApplicationCommandOptionType.MENTIONABLE: {
          let e = R.value.toString(),
            t = null != O ? T.default.getRole(O.id, e) : void 0;
          if (null != t) C = (0, s.jsxs)(p.default, {
            children: [N.MENTION_SENTINEL, t.name]
          });
          else {
            let t = I.default.getUser(e);
            if (null != t) {
              let e = (0, E.getUserAuthor)(t, v);
              C = (0, s.jsxs)(p.default, {
                ...g,
                onClick: () => (0, _.openUserProfileModal)({
                  userId: t.id,
                  guildId: v.guild_id,
                  analyticsLocation: {
                    section: h.AnalyticsSections.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                  }
                }),
                children: [N.MENTION_SENTINEL, e.nick]
              })
            }
          }
          break
        }
        case u.ApplicationCommandOptionType.ATTACHMENT:
          C = M(S.default.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
          break;
        default: {
          let e = null == D ? void 0 : null === (d = D.choices) || void 0 === d ? void 0 : d.find(e => e.value === R.value);
          null != e && (U = null !== (c = e.name_localized) && void 0 !== c ? c : e.name)
        }
      }
      return null == C && (C = M(null == U ? void 0 : U.toString())), [(0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsxs)(o.Text, {
          ...A,
          children: [" ", null !== (f = null == D ? void 0 : D.name_localized) && void 0 !== f ? f : R.name, ": "]
        }), C]
      }, y)]
    }({
      option: n,
      channel: x,
      guild: j,
      messageId: L,
      parentOptionKey: null,
      commandOptionSpec: t[n.name],
      sourceAnalyticsLocations: P
    }));
    O = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)(o.Text, {
        ...A,
        children: ["/", null !== (v = null === (l = D.application_command) || void 0 === l ? void 0 : l.name_localized) && void 0 !== v ? v : D.name]
      }), e]
    })
  }
  return (0, s.jsxs)("div", {
    className: C.container,
    onCopy: e => {
      var t, n, s;
      let a = null !== (s = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== s ? s : "";
      a.startsWith("/") && a.endsWith("\n") && y(e, D)
    },
    children: [(0, s.jsx)("div", {
      className: C.tooltip,
      ref: U,
      children: O
    }), (0, s.jsx)("div", {
      className: C.tooltipPointer
    })]
  })
})