"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250"),
  a = n("470079"),
  u = n("471445"),
  i = n("592125"),
  o = n("430824"),
  s = n("286908"),
  r = n("970184"),
  d = n("811654"),
  c = n("344991"),
  p = n("981631"),
  m = n("879565");

function f(e) {
  var t;
  let {
    channelTypes: n
  } = e, f = (0, r.useComponentStateContext)(), S = null == f ? void 0 : null === (t = f.message) || void 0 === t ? void 0 : t.getChannelId(), C = i.default.getChannel(S), v = o.default.getGuild(null == C ? void 0 : C.getGuildId()), E = a.useMemo(() => (0, d.getSnowflakeSelectDefaultValues)(e.defaultValues, null == v ? void 0 : v.id, n), [e.defaultValues, v, n]);
  return (0, l.jsx)(c.default, {
    selectActionComponent: e,
    queryOptions: e => (0, d.queryChannels)(e, S, n),
    renderIcon: (e, t) => {
      let n = i.default.getChannel(null == e ? void 0 : e.value);
      if (null == n) return null;
      let a = n.type === p.ChannelTypes.GUILD_CATEGORY ? s.default : (0, u.getChannelIconComponent)(n);
      return null != a ? (0, l.jsx)(a, {
        width: t,
        height: t
      }) : null
    },
    renderOptionLabel: e => (0, l.jsx)("span", {
      className: m.label,
      children: e.label
    }),
    defaultValues: E
  })
}