"use strict";
s.r(t), s.d(t, {
  GuildAuditLogSearch: function() {
    return f
  }
}), s("222007"), s("781738");
var a = s("37983"),
  l = s("884691"),
  n = s("98159"),
  i = s("77078"),
  r = s("137223"),
  o = s("76385"),
  d = s("955513"),
  u = s("172483"),
  c = s("891152"),
  E = s("202752"),
  _ = s("751520"),
  I = s("782340"),
  T = s("556229");
s("590976");

function f(e) {
  let {
    className: t
  } = e;
  l.useEffect(() => {
    _.clearTokenCache()
  }, []);
  let [s, f] = l.useState({
    editorState: E.createEmptyEditorState([])
  }), {
    editorState: S
  } = s, [m, N] = l.useState(!0), g = null, h = e => {
    f(t => ({
      ...t,
      editorState: e
    }))
  }, C = e => {
    let t = _.tokenizeQuery(E.getFirstTextBlock(e)).filter(e => e.type !== o.default.NON_TOKEN_TYPE);
    return E.applyTokensAsEntities(t, e, d.default)
  }, R = () => {}, x = () => {
    null != g && Promise.resolve().then(() => null == g ? void 0 : g.focus())
  }, L = () => {
    null == g || g.blur()
  }, O = e => {
    g = e
  }, p = () => {
    N(!0)
  }, A = () => {
    N(!1), null != S && E.isEmpty(S) && R()
  }, M = e => {
    if (null == S) return;
    let t = E.getFirstTextBlock(S);
    if (t.length >= 512) return !0;
    let s = S;
    return s = E.updateContent(e, s), h(s = C(s = E.truncateContent(s, 512))), !m && N(!0), !0
  }, D = e => (e.preventDefault(), !0), v = e => {
    if (e = null != e ? e.replace(/\n/g, "") : "", null == S) return;
    let t = S;
    return t = E.updateContent(e, t), t = C(t = E.truncateContent(t, 512)), !m && N(!0), h(t), !0
  }, j = null != S && E.getFirstTextBlock(S).length > 0;
  return (0, a.jsx)("div", {
    className: t,
    children: (0, a.jsxs)("div", {
      className: T.search,
      children: [(0, a.jsxs)("div", {
        className: T.searchBar,
        children: [(0, a.jsx)(n.Editor, {
          ref: O,
          onBlur: A,
          onFocus: p,
          handleReturn: D,
          handleBeforeInput: M,
          handlePastedText: v,
          placeholder: I.default.Messages.SEARCH,
          editorState: S,
          onChange: h,
          role: "combobox",
          ariaLabel: I.default.Messages.SEARCH
        }), (0, a.jsx)(r.SearchBarIcon, {
          onClear: e => {
            if (null == S) return;
            e.preventDefault(), e.stopPropagation();
            let t = E.getFirstTextBlock(S);
            if ("" === t) {
              x();
              return
            }
            let s = S;
            h(s = E.truncateContent(s, 0)), !m && Promise.resolve().then(() => L())
          },
          hasContent: j,
          className: T.searchIcon
        }), (0, a.jsxs)(i.Button, {
          look: i.Button.Looks.BLANK,
          className: T.filter,
          innerClassName: T.filterButton,
          onClick: () => {},
          children: [I.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_FILTER, (0, a.jsx)(u.default, {
            className: T.filterIcon,
            width: 16,
            height: 16
          })]
        })]
      }), (0, a.jsxs)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        className: T.sort,
        innerClassName: T.sortButton,
        size: i.Button.Sizes.SMALL,
        onClick: () => {},
        children: [I.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SORT, (0, a.jsx)(c.default, {
          className: T.sortIcon,
          width: 16,
          height: 16
        })]
      })]
    })
  })
}