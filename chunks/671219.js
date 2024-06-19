n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(911969),
  u = n(906732),
  d = n(778087),
  E = n(603721),
  _ = n(124072),
  I = n(739566),
  T = n(171368),
  N = n(592125),
  m = n(430824),
  h = n(594174),
  C = n(981631),
  S = n(665692),
  A = n(689938),
  p = n(768634);
let g = {
    tag: "span",
    variant: "text-md/normal",
    color: "header-secondary"
  },
  f = {
    className: a()("mention", p.mention)
  };

function O(e) {
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(o.Text, {
      ...g,
      color: "header-primary",
      children: e
    })
  })
}
t.Z = i.memo(function(e) {
  var t, n, l, a, R, M;
  let x, {
      channel: v,
      messageId: L,
      interactionData: Z
    } = e,
    {
      analyticsLocations: P
    } = (0, u.ZP)(),
    {
      onCopy: D,
      copyRef: j
    } = (0, d.Z)(v, null == Z ? void 0 : null === (t = Z.application_command) || void 0 === t ? void 0 : t.id),
    U = (0, r.e7)([m.Z], () => m.Z.getGuild(v.guild_id), [v.guild_id]);
  if (i.useEffect(() => {
      (null == Z || Z.type === c.yU.CHAT && void 0 === Z.application_command) && E.OG(v.id, L)
    }, [v.id, L, Z]), null == Z) x = (0, s.jsx)(o.Spinner, {
    type: o.Spinner.Type.SPINNING_CIRCLE,
    className: p.spinner
  });
  else {
    let e = [],
      t = Object.fromEntries((null !== (a = null === (n = Z.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== a ? a : []).map(e => [e.name, e]));
    for (let n of null !== (R = Z.options) && void 0 !== R ? R : []) e = e.concat(function e(t) {
      var n, l, a, r, u, d, E;
      let p, {
          option: R,
          channel: M,
          guild: x,
          messageId: v,
          parentOptionKey: L,
          commandOptionSpec: Z,
          sourceAnalyticsLocations: P
        } = t,
        D = null != L ? L + " " + R.name : R.name;
      if (R.type === c.jw.SUB_COMMAND || R.type === c.jw.SUB_COMMAND_GROUP) {
        let t = [(0, s.jsxs)(i.Fragment, {
            children: [" ", (0, s.jsx)(o.Text, {
              ...g,
              children: null !== (l = null == Z ? void 0 : Z.name_localized) && void 0 !== l ? l : R.name
            })]
          }, D)],
          c = Object.fromEntries(null === (n = null !== (a = null == Z ? void 0 : Z.options) && void 0 !== a ? a : []) || void 0 === n ? void 0 : n.map(e => [e.name, e]));
        for (let n of null !== (r = R.options) && void 0 !== r ? r : []) t = t.concat(e({
          option: n,
          channel: M,
          guild: x,
          messageId: v,
          parentOptionKey: D,
          commandOptionSpec: c[n.name],
          sourceAnalyticsLocations: P
        }));
        return t
      }
      let j = R.value;
      if (null != R.value) switch (R.type) {
        case c.jw.USER: {
          let e = R.value.toString(),
            t = h.default.getUser(e);
          if (null != t) {
            let e = (0, I.ij)(t, M);
            p = (0, s.jsxs)(_.Z, {
              ...f,
              onClick: () => (0, T.openUserProfileModal)({
                userId: t.id,
                guildId: M.guild_id,
                channelId: M.id,
                messageId: v,
                sourceAnalyticsLocations: P,
                analyticsLocation: {
                  section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                }
              }),
              children: [S.ME, e.nick]
            })
          }
          break
        }
        case c.jw.CHANNEL: {
          let e = R.value.toString(),
            t = N.Z.getChannel(e);
          null != t && (p = (0, s.jsxs)(_.Z, {
            ...f,
            children: [S.zy, t.name]
          }));
          break
        }
        case c.jw.ROLE: {
          let e = R.value.toString(),
            t = null != x ? m.Z.getRole(x.id, e) : void 0;
          null != t && (p = (0, s.jsxs)(_.Z, {
            ...f,
            children: [S.ME, t.name]
          }));
          break
        }
        case c.jw.MENTIONABLE: {
          let e = R.value.toString(),
            t = null != x ? m.Z.getRole(x.id, e) : void 0;
          if (null != t) p = (0, s.jsxs)(_.Z, {
            children: [S.ME, t.name]
          });
          else {
            let t = h.default.getUser(e);
            if (null != t) {
              let e = (0, I.ij)(t, M);
              p = (0, s.jsxs)(_.Z, {
                ...f,
                onClick: () => (0, T.openUserProfileModal)({
                  userId: t.id,
                  guildId: M.guild_id,
                  analyticsLocation: {
                    section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                  }
                }),
                children: [S.ME, e.nick]
              })
            }
          }
          break
        }
        case c.jw.ATTACHMENT:
          p = O(A.Z.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
          break;
        default: {
          let e = null == Z ? void 0 : null === (u = Z.choices) || void 0 === u ? void 0 : u.find(e => e.value === R.value);
          null != e && (j = null !== (d = e.name_localized) && void 0 !== d ? d : e.name)
        }
      }
      return null == p && (p = O(null == j ? void 0 : j.toString())), [(0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsxs)(o.Text, {
          ...g,
          children: [" ", null !== (E = null == Z ? void 0 : Z.name_localized) && void 0 !== E ? E : R.name, ": "]
        }), p]
      }, D)]
    }({
      option: n,
      channel: v,
      guild: U,
      messageId: L,
      parentOptionKey: null,
      commandOptionSpec: t[n.name],
      sourceAnalyticsLocations: P
    }));
    x = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)(o.Text, {
        ...g,
        children: ["/", null !== (M = null === (l = Z.application_command) || void 0 === l ? void 0 : l.name_localized) && void 0 !== M ? M : Z.name]
      }), e]
    })
  }
  return (0, s.jsxs)("div", {
    className: p.container,
    onCopy: e => {
      var t, n, s;
      let i = null !== (s = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== s ? s : "";
      i.startsWith("/") && i.endsWith("\n") && D(e, Z)
    },
    children: [(0, s.jsx)("div", {
      className: p.tooltip,
      ref: j,
      children: x
    }), (0, s.jsx)("div", {
      className: p.tooltipPointer
    })]
  })
})