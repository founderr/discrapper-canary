"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250"),
  a = n("470079"),
  r = n("471445"),
  s = n("592125"),
  u = n("430824"),
  o = n("286908"),
  i = n("970184"),
  d = n("811654"),
  c = n("344991"),
  m = n("981631"),
  p = n("743002");

function f(e) {
  var t;
  let {
    channelTypes: n
  } = e, f = (0, i.useComponentStateContext)(), C = null == f ? void 0 : null === (t = f.message) || void 0 === t ? void 0 : t.getChannelId(), S = s.default.getChannel(C), E = u.default.getGuild(null == S ? void 0 : S.getGuildId()), v = a.useMemo(() => (0, d.getSnowflakeSelectDefaultValues)(e.defaultValues, null == E ? void 0 : E.id, n), [e.defaultValues, E, n]);
  return (0, l.jsx)(c.default, {
    selectActionComponent: e,
    queryOptions: e => (0, d.queryChannels)(e, C, n),
    renderIcon: (e, t) => {
      let n = s.default.getChannel(null == e ? void 0 : e.value);
      if (null == n) return null;
      let a = n.type === m.ChannelTypes.GUILD_CATEGORY ? o.default : (0, r.getChannelIconComponent)(n);
      return null != a ? (0, l.jsx)(a, {
        width: t,
        height: t
      }) : null
    },
    renderOptionLabel: e => (0, l.jsx)("span", {
      className: p.label,
      children: e.label
    }),
    defaultValues: v
  })
}