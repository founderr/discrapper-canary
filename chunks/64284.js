"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("77078"),
  r = s("448993"),
  o = s("50926"),
  d = s("526253"),
  u = s("192918"),
  c = s("394294"),
  E = s("782340"),
  _ = s("935090"),
  I = function(e) {
    var t;
    let {
      guildId: s
    } = e, I = (0, n.useStateFromStores)([d.default], () => d.default.get(s)), [T, f] = l.useState(null), [S, m] = l.useState(null !== (t = null == I ? void 0 : I.description) && void 0 !== t ? t : ""), N = l.useRef(!1), g = l.useRef(!1);
    l.useEffect(() => () => {
      g.current = !0
    }, []);
    let h = l.useCallback(async () => {
      if (!N.current) {
        f(null);
        try {
          await o.default.updateVerificationFormDescription(s, S)
        } catch (t) {
          if (g.current) return;
          let e = new r.APIError(t);
          f(e.getAnyErrorMessage())
        } finally {
          if (g.current) return;
          N.current = !1
        }
      }
    }, [S, s]);
    return (0, a.jsxs)(u.default, {
      title: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
      children: [(0, a.jsx)(i.TextArea, {
        className: _.fieldBackground,
        maxLength: c.MAX_DESCRIPTION_LENGTH,
        value: null != S ? S : "",
        placeholder: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
        onChange: e => {
          m(e)
        },
        onBlur: h,
        autosize: !0
      }), null != T && "" !== T ? (0, a.jsx)(i.Text, {
        className: _.errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: T
      }) : null]
    })
  }