"use strict";
t.d(s, {
  Z: function() {
    return D
  }
}), t(47120), t(653041), t(536091);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  d = t(481060),
  u = t(570140),
  E = t(275759),
  _ = t(153124),
  I = t(63063),
  T = t(243730),
  N = t(764260),
  m = t(946724),
  S = t(95242),
  h = t(530198),
  g = t(420966),
  C = t(203377),
  x = t(981631),
  R = t(856651),
  L = t(689938),
  O = t(267906),
  A = t(412200);
let p = (0, _.hQ)();

function M(e, s) {
  return s !== E.O1.AND ? Object.values(o().groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
    [...e]
  ]
}

function f(e) {
  let {
    handleAddVerificationClicked: s,
    locked: t
  } = e;
  return (0, n.jsxs)("div", {
    className: O.headerNoConfigContainer,
    children: [(0, n.jsx)(d.Heading, {
      className: O.headerHeading,
      variant: "eyebrow",
      children: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
    }), (0, n.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
        helpdeskArticleUrl: I.Z.getArticleURL(x.BhN.CONNECTION_DETAILS_ADMIN)
      })
    }), (0, n.jsx)(d.Button, {
      disabled: t,
      className: O.addVerificationButton,
      size: d.Button.Sizes.MEDIUM,
      look: d.Button.Looks.FILLED,
      color: d.Button.Colors.BRAND,
      onClick: s,
      children: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION
    })]
  })
}

function D(e) {
  let {
    guild: s,
    role: t,
    locked: l,
    setSelectedSection: r,
    integrations: o
  } = e, {
    headerHeight: _,
    headerRef: D
  } = (0, S.Z)(0), {
    scrolledToTop: v,
    handleScroll: j
  } = (0, g.V)(), Z = (0, c.e7)([T.Z], () => {
    var e;
    return null === (e = T.Z.getRoleMemberCount(s.id)) || void 0 === e ? void 0 : e[t.id]
  }, [t.id, s.id]), U = (0, c.Wu)([m.Z], () => {
    var e;
    return null !== (e = m.Z.getEditedRoleConnectionConfigurationsMap().get(t.id)) && void 0 !== e ? e : []
  }), G = U.length > 1 ? E.O1.OR : E.O1.AND, P = i.useMemo(() => G === E.O1.OR ? U.flat() : null != U && U.length > 0 ? U[0] : [], [G, U]), b = i.useMemo(() => new Set(P.map(e => e.connectionType)), [P]);

  function B(e) {
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
      n = [...P];
    n.push({
      connectionType: e,
      connectionMetadataField: void 0,
      applicationId: s,
      operator: void 0,
      value: void 0
    }), (0, N.d_)(t.id, M(n, G))
  }

  function y() {
    u.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e => B(e),
      excludedPlatformTypes: b,
      integrations: o,
      onCompleteApplication: e => B(R.Kt, e)
    })
  }
  let F = null;
  if (0 === P.length) F = (0, n.jsx)(f, {
    handleAddVerificationClicked: y,
    locked: l
  });
  else if (P.length > 0) {
    var k, H;
    let e = null;
    P.length < 10 && (e = (0, n.jsx)(d.Button, {
      className: a()(O.addVerificationButton, O.addVerificationButtonAppend),
      size: d.Button.Sizes.LARGE,
      look: d.Button.Looks.BLANK,
      color: d.Button.Colors.LINK,
      onClick: y,
      disabled: l,
      children: (0, n.jsxs)("div", {
        className: O.addVerificationButtonAppendTextContainer,
        children: [(0, n.jsx)(d.CirclePlusIcon, {
          size: "xs",
          color: "currentColor"
        }), L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION]
      })
    })), F = (0, n.jsxs)(n.Fragment, {
      children: [(k = () => (0, N.d_)(t.id, []), H = l, (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)("div", {
          className: O.headerTitleContainer,
          children: [(0, n.jsx)("div", {
            className: O.headerTitleTextContainer,
            children: (0, n.jsx)(d.Heading, {
              variant: "eyebrow",
              children: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
            })
          }), (0, n.jsx)(d.Button, {
            className: O.headerTitleButton,
            size: d.Button.Sizes.TINY,
            look: d.Button.Looks.LINK,
            color: d.Button.Colors.LINK,
            onClick: k,
            disabled: H,
            children: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_CLEAR_ALL
          })]
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
            helpdeskArticleUrl: I.Z.getArticleURL(x.BhN.CONNECTION_DETAILS_ADMIN)
          })
        })]
      })), function(e, s, t, i, l) {
        let a = M(i, E.O1.OR);
        return (0, n.jsx)(d.FormItem, {
          className: O.operatorContainer,
          title: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_REQUIREMENTS,
          children: (0, n.jsx)(d.RadioGroup, {
            options: [{
              name: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_OR_DESCRIPTION,
              value: E.O1.OR
            }, {
              name: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AND_DESCRIPTION,
              value: E.O1.AND
            }],
            onChange: e => l(i, e.value),
            value: t,
            disabled: e || a.length < 2,
            "aria-labelledby": p
          })
        })
      }(l, t.id, G, P, (e, s) => (0, N.d_)(t.id, M(e, s))), function(e, s, t, i, l) {
        function a(t, n) {
          let i = [];
          for (let s of e) i.push({
            ...s
          });
          if (null == t) {
            let s = e[n];
            null !== s && null == s.connectionMetadataField && null == s.operator && null == s.value ? i = i.filter(e => null == s.applicationId ? e.connectionType !== s.connectionType : e.connectionType !== s.connectionType && e.applicationId !== s.applicationId) : i.splice(n, 1)
          } else - 1 === n ? i.push(t) : n >= 0 && (i[n] = t);
          s(i)
        }
        let r = new Map;
        for (let s of (e.forEach((e, s) => {
            let t = "".concat(e.connectionType, ":").concat(e.applicationId);
            if (r.has(t)) {
              let n = r.get(t);
              null == n || n.push({
                index: s,
                configuration: e
              })
            } else r.set(t, [{
              index: s,
              configuration: e
            }])
          }), r.values())) {
          if (s.some(e => {
              let {
                configuration: s
              } = e;
              return null == s.connectionMetadataField && null == s.operator && null == s.value
            })) continue;
          let t = {
              ...s[0].configuration,
              connectionMetadataField: void 0,
              operator: void 0,
              value: void 0
            },
            n = e.push(t);
          s.push({
            index: n - 1,
            configuration: t
          })
        }
        return (0, n.jsx)("div", {
          className: O.configurationsContainer,
          children: Array.from(r.values()).map(e => (0, n.jsx)(h.Z, {
            configurationItems: e,
            onConfigurationChange: a,
            locked: t,
            integrations: l
          }, e[0].configuration.connectionType + ":" + e[0].index))
        })
      }(P, e => (0, N.d_)(t.id, M(e, G)), l, t.id, o), e]
    })
  }
  return (0, n.jsx)(d.AdvancedScrollerAuto, {
    className: O.scroller,
    style: {
      scrollPaddingTop: _
    },
    onScroll: j,
    children: (0, n.jsxs)("div", {
      className: A.contentWidth,
      children: [(0, n.jsx)("div", {
        className: a()(A.header, A.stickyHeader, {
          [A.stickyHeaderElevated]: !v
        }),
        ref: D,
        children: (0, n.jsx)(g.Z, {
          guild: s,
          role: t,
          selectedSection: C.ZI.VERIFICATIONS,
          setSelectedSection: r
        })
      }), (null != Z ? Z : 0) > 0 ? (0, n.jsxs)("div", {
        className: O.warningContainer,
        children: [(0, n.jsx)(d.CircleExclamationPointIcon, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: O.warningIcon
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: L.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MEMBERS_WARNING
        })]
      }) : null, F]
    })
  })
}