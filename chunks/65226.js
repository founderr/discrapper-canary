"use strict";
t.d(s, {
  M: function() {
    return I
  }
}), t(47120), t(757143);
var n = t(735250),
  i = t(470079),
  l = t(371917),
  a = t(481060),
  r = t(461745),
  o = t(349033),
  c = t(999650),
  d = t(72006),
  u = t(405656),
  E = t(689938),
  _ = t(679473);
t(436967);

function I(e) {
  let {
    className: s
  } = e;
  i.useEffect(() => {
    u.WU()
  }, []);
  let [t, I] = i.useState({
    editorState: d.nR([])
  }), {
    editorState: T
  } = t, [N, m] = i.useState(!0), S = null, h = e => {
    I(s => ({
      ...s,
      editorState: e
    }))
  }, g = e => {
    let s = u.kG(d.Sq(e)).filter(e => e.type !== o.ZP.NON_TOKEN_TYPE);
    return d.lv(s, e, c.ZP)
  }, C = () => {}, x = () => {
    null != S && Promise.resolve().then(() => null == S ? void 0 : S.focus())
  }, R = () => {
    null == S || S.blur()
  }, L = e => {
    S = e
  }, O = () => {
    m(!0)
  }, A = () => {
    m(!1), null != T && d.xb(T) && C()
  }, p = e => {
    if (null == T) return;
    if (d.Sq(T).length >= 512) return !0;
    let s = T;
    return s = d.x0(e, s), h(s = g(s = d.Hl(s, 512))), !N && m(!0), !0
  }, M = e => (e.preventDefault(), !0), f = e => {
    if (e = null != e ? e.replace(/\n/g, "") : "", null == T) return;
    let s = T;
    return s = d.x0(e, s), s = g(s = d.Hl(s, 512)), !N && m(!0), h(s), !0
  }, D = null != T && d.Sq(T).length > 0;
  return (0, n.jsx)("div", {
    className: s,
    children: (0, n.jsxs)("div", {
      className: _.search,
      children: [(0, n.jsxs)("div", {
        className: _.searchBar,
        children: [(0, n.jsx)(l.Editor, {
          ref: L,
          onBlur: A,
          onFocus: O,
          handleReturn: M,
          handleBeforeInput: p,
          handlePastedText: f,
          placeholder: E.Z.Messages.SEARCH,
          editorState: T,
          onChange: h,
          role: "combobox",
          ariaLabel: E.Z.Messages.SEARCH
        }), (0, n.jsx)(r.BK, {
          onClear: e => {
            if (null == T) return;
            if (e.preventDefault(), e.stopPropagation(), "" === d.Sq(T)) {
              x();
              return
            }
            let s = T;
            h(s = d.Hl(s, 0)), !N && Promise.resolve().then(() => R())
          },
          hasContent: D,
          className: _.searchIcon
        }), (0, n.jsxs)(a.Button, {
          look: a.Button.Looks.BLANK,
          className: _.filter,
          innerClassName: _.filterButton,
          onClick: () => {},
          children: [E.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_FILTER, (0, n.jsx)(a.FiltersHorizontalIcon, {
            size: "custom",
            color: "currentColor",
            className: _.filterIcon,
            width: 16,
            height: 16
          })]
        })]
      }), (0, n.jsxs)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        className: _.sort,
        innerClassName: _.sortButton,
        size: a.Button.Sizes.SMALL,
        onClick: () => {},
        children: [E.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SORT, (0, n.jsx)(a.ArrowsUpDownIcon, {
          size: "custom",
          color: "currentColor",
          className: _.sortIcon,
          width: 16,
          height: 16
        })]
      })]
    })
  })
}