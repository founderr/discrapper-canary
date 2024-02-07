"use strict";
i.r(t), i.d(t, {
  useUsernameHook: function() {
    return d
  }
});
var a = i("37983"),
  n = i("884691"),
  l = i("77078"),
  o = i("506885"),
  s = i("981601"),
  r = i("42203"),
  u = i("441823");

function d(e, t, i) {
  var d, c;
  let h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    p = arguments.length > 4 ? arguments[4] : void 0;
  let T = (d = e, c = t, n.useCallback(e => {
    let t = r.default.getChannel(c);
    null != t && null != d && (0, u.openUserContextMenu)(e, d, t)
  }, [d, c]));
  return n.useCallback(r => (u, d) => {
    let c = (e, t) => (0, n.createElement)(l.NameWithRoleAnchor, {
        ...null != e ? e : {},
        key: t,
        onContextMenu: T,
        name: u,
        color: null == r ? void 0 : r.colorString,
        roleName: null == r ? void 0 : r.colorRoleName,
        "aria-label": p
      }),
      m = e => t => {
        h && t.stopPropagation(), e(t)
      };
    return null != e ? (0, a.jsx)(l.Popout, {
      position: "right",
      preload: () => (0, o.default)(e.id, e.getAvatarURL(i, 80), {
        guildId: i,
        channelId: t
      }),
      renderPopout: n => (0, a.jsx)(s.default, {
        ...n,
        userId: e.id,
        guildId: i,
        channelId: t
      }),
      children: e => {
        let {
          onClick: t,
          ...i
        } = e;
        return c({
          onClick: m(t),
          ...i
        })
      }
    }, d) : c(void 0, d)
  }, [e, t, i, T, h, p])
}