"use strict";
t.r(n), t.d(n, {
  default: function() {
    return f
  }
});
var l = t("735250"),
  a = t("470079"),
  s = t("471445"),
  u = t("592125"),
  i = t("430824"),
  o = t("286908"),
  r = t("970184"),
  d = t("811654"),
  c = t("344991"),
  m = t("981631"),
  p = t("41865");

function f(e) {
  var n;
  let {
    channelTypes: t
  } = e, f = (0, r.useComponentStateContext)(), S = null == f ? void 0 : null === (n = f.message) || void 0 === n ? void 0 : n.getChannelId(), C = u.default.getChannel(S), E = i.default.getGuild(null == C ? void 0 : C.getGuildId()), N = a.useMemo(() => (0, d.getSnowflakeSelectDefaultValues)(e.defaultValues, null == E ? void 0 : E.id, t), [e.defaultValues, E, t]);
  return (0, l.jsx)(c.default, {
    selectActionComponent: e,
    queryOptions: e => (0, d.queryChannels)(e, S, t),
    renderIcon: (e, n) => {
      let t = u.default.getChannel(null == e ? void 0 : e.value);
      if (null == t) return null;
      let a = t.type === m.ChannelTypes.GUILD_CATEGORY ? o.default : (0, s.getChannelIconComponent)(t);
      return null != a ? (0, l.jsx)(a, {
        width: n,
        height: n
      }) : null
    },
    renderOptionLabel: e => (0, l.jsx)("span", {
      className: p.label,
      children: e.label
    }),
    defaultValues: N
  })
}