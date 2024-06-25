"use strict";
n(47120), n(724458);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(788911),
  _ = n(911969),
  c = n(367907),
  d = n(30465),
  E = n(806966),
  I = n(98528),
  T = n(551058),
  h = n(156361),
  f = n(695464),
  S = n(153124),
  A = n(555573),
  N = n(10718),
  m = n(367790),
  O = n(895924),
  p = n(581364),
  R = n(56801),
  g = n(342687),
  C = n(826298),
  v = n(689079),
  L = n(981631),
  D = n(689938),
  M = n(700413),
  P = n(239840);
let y = [8, 8, 0, 8],
  U = l().debounce(() => {
    (0, c.yw)(L.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED)
  }, 300);

function b(e) {
  e.preventDefault()
}
t.Z = r.forwardRef(function(e, t) {
  let {
    channel: n,
    canOnlyUseTextCommands: s
  } = e, a = r.useRef(!1), l = r.useRef(0), [G, w] = r.useState(0), x = r.useRef(null), [B, k] = r.useState(!1), V = E.Xn.useStore(e => e.activeCategoryIndex);
  r.useEffect(() => {
    (0, c.yw)(L.rMx.APPLICATION_COMMAND_BROWSER_OPENED)
  }, []);
  let {
    sectionDescriptors: Z,
    activeSections: H,
    commandsByActiveSection: F,
    hasMoreAfter: Y,
    commands: j,
    filteredSectionId: W,
    scrollDown: K,
    filterSection: z
  } = N.wi(n, {
    commandType: _.yU.CHAT,
    builtIns: s ? m.D.ONLY_TEXT : m.D.ALLOW,
    applicationCommands: !s
  }, {
    placeholderCount: 7,
    limit: v.tn,
    includeFrecency: !0
  }), q = (0, I.Qs)({
    activeCategoryIndex: V,
    isScrolling: a,
    listRef: x,
    onActiveCategoryIndexChange: e => {
      let t = H[e];
      if (null != t) {
        let e = Z.findIndex(e => e.id === t.id);
        E.Xn.setActiveCategoryIndex(e)
      }
    },
    scrollOffset: 20,
    searchQuery: ""
  }), X = e => {
    let t = H.length,
      n = F.reduce((e, t) => e + t.data.length, 0) - (Y ? 7 : 0);
    Y && e + 420 > 48 * t + 56 * n - 512 && K(), q(e), U(), l.current = e
  };
  r.useEffect(() => {
    X(l.current)
  }, [j]);
  let Q = r.useCallback(e => e !== H.length - 1 || Y ? 16 : 0, [H.length, Y]),
    J = F.map(e => e.data.length);
  r.useEffect(() => {
    null != x.current && B && null != G && x.current.scrollRowIntoView(G)
  }, [B, G]), r.useLayoutEffect(() => {
    if (null != W) {
      var e;
      null === (e = x.current) || void 0 === e || e.scrollToSectionTop(0)
    }
  }, [j, W]);
  let $ = r.useCallback(e => {
      if (e.id === W || e.id === v.bi.FRECENCY) {
        var t;
        z(null), null === (t = x.current) || void 0 === t || t.scrollToSectionTop(0)
      } else z(e.id)
    }, [z, W]),
    ee = r.useCallback((e, t, i) => {
      A.Po({
        channelId: n.id,
        command: e,
        section: t,
        location: O.Vh.DISCOVERY,
        triggerSection: i
      })
    }, [n.id]);
  r.useImperativeHandle(t, () => ({
    onTabOrEnter: e => {
      if (null == G) return !e && (w(0), !0);
      if (null == G) return !1;
      let t = 0,
        n = 0;
      for (let e of F)
        if (t = n, G < (n += e.data.length)) {
          let n = e.data[G - t],
            i = Z.find(e => e.id === n.applicationId);
          ee(n, i, (0, p.tI)(e.section));
          break
        } return !0
    },
    onMoveSelection: e => {
      if (0 === j.length) return !0;
      let t = Y ? 7 : 0,
        n = j.length + t,
        i = null == G ? 0 : G + e;
      return i >= n ? i = n - 1 : i < 0 && (i = 0), w(i), k(!0), !0
    }
  }), [j.length, F, Y, Z, ee, G]);
  let et = r.useCallback(e => {
      let t = H[e];
      if (null == t) return null;
      let r = (0, C.ky)(t),
        s = (0, i.jsx)(r, {
          channel: n,
          section: t,
          width: 16,
          height: 16,
          padding: 0
        });
      return (0, i.jsx)(T.Z, {
        className: M.categoryHeader,
        icon: s,
        children: t.name
      }, e)
    }, [n, H]),
    en = r.useCallback((e, t) => {
      let n = e === H.length - 1,
        r = H[e],
        {
          data: s
        } = F[e];
      return (0, i.jsxs)("ul", {
        role: "group",
        "aria-label": r.name,
        className: o()(M.categorySection, {
          [M.categorySectionLast]: n
        }),
        children: [t, 0 === s.length && (0, i.jsx)(u.Z, {
          message: D.Z.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
            applicationName: r.name
          }),
          noResultsImageURL: P,
          className: M.noSearchResults
        })]
      }, e)
    }, [H, F]),
    ei = r.useCallback((e, t) => {
      var r;
      let s = F[t.sectionIndex],
        o = s.data[t.sectionRowIndex],
        a = "".concat(s.section.id, ":").concat(null !== (r = null == o ? void 0 : o.id) && void 0 !== r ? r : e);
      if (null == o || s.section.id !== o.applicationId && s.section.id !== v.bi.FRECENCY || o.inputType === O.iw.PLACEHOLDER) return (0, i.jsx)(g.Z, {}, a);
      let l = Z.find(e => e.id === o.applicationId);
      return (0, i.jsx)(h.ZP.NewCommand, {
        index: e,
        command: o,
        channel: n,
        className: M.itemWrapper,
        selected: G === e,
        showImage: s.section.id !== o.applicationId,
        section: l,
        onClick: () => ee(o, l, (0, p.tI)(s.section)),
        onHover: () => {
          w(null), k(!1)
        }
      }, a)
    }, [n, F, ee, Z, G]),
    er = (0, S.Dt)();
  return (0, d.KR)(er, !0, (0, h.DJ)(G)), r.useEffect(() => () => {
    (0, d.sJ)()
  }, []), (0, i.jsxs)(h.ZP, {
    id: er,
    className: M.outerWrapper,
    innerClassName: M.wrapper,
    onMouseDown: b,
    children: [(0, i.jsx)(R.Z, {
      className: M.rail,
      channel: n,
      sections: Z,
      filteredSectionId: W,
      activeCategoryIndex: V,
      onSectionClick: $,
      applicationCommandListRef: x
    }), (0, i.jsx)(f.Z, {
      role: "listbox",
      className: M.list,
      listPadding: y,
      onScroll: X,
      renderRow: ei,
      renderSection: en,
      renderSectionHeader: et,
      rowCount: H.length,
      rowCountBySection: J,
      rowHeight: 56,
      sectionHeaderHeight: 32,
      sectionMarginBottom: Q,
      ref: x,
      stickyHeaders: !0
    })]
  })
})