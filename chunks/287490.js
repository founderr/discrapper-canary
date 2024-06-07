"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120"), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("392711"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("492435"),
  u = s("353926"),
  c = s("430824"),
  S = s("6048"),
  E = s("499533"),
  T = s("878209"),
  _ = s("987338"),
  I = s("964966");

function N(e, t) {
  return e.map((e, s) => ({
    label: "object" == typeof t ? t[s] : E.default.getExperimentBucketName(e),
    value: e
  }))
}

function g() {
  let e = (0, r.useStateFromStoresObject)([u.default], () => u.default.getAllExperimentOverrideDescriptors()),
    t = (0, r.useStateFromStoresObject)([u.default], () => u.default.getRegisteredExperiments()),
    [s, l] = n.useState(""),
    i = (0, T.getBestMatches)((0, T.sortEntries)((0, T.getEntries)(t), e), s);
  return (0, a.jsxs)(o.FormSection, {
    tag: o.FormTitleTags.H1,
    title: "Experiments",
    children: [(0, a.jsx)(S.default, {
      size: S.default.Sizes.LARGE,
      query: s,
      onChange: l,
      onClear: () => l("")
    }), i.length > 0 ? i.map(t => {
      let s = t.experiment.type === _.ExperimentTypes.GUILD ? m : f;
      return (0, a.jsx)(s, {
        experiment: t.experiment,
        experimentId: t.id,
        overrideDescriptor: e[t.id]
      }, t.id)
    }) : (0, a.jsx)("div", {
      className: I.emptyState,
      children: (0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function f(e) {
  var t;
  let {
    experiment: s,
    experimentId: l,
    overrideDescriptor: c
  } = e, [S, E] = n.useState(null != c), [T, g] = n.useState(!1), f = n.useCallback(() => {
    E(e => !e)
  }, []), m = (0, r.useStateFromStores)([u.default], () => u.default.getUserExperimentDescriptor(l)), C = (0, r.useStateFromStores)([u.default], () => u.default.getLoadedUserExperiment(l)), A = (0, r.useStateFromStores)([u.default], () => i().sortBy(u.default.getRecentExposures(_.ExperimentTypes.USER, l), e => {
    let [t, s] = e;
    return -s
  }).map(e => {
    let [t, s] = e;
    return "".concat(new Date(s).toLocaleString(), " (").concat(t, ")")
  })), h = (0, a.jsx)(o.Clickable, {
    onClick: f,
    children: (0, a.jsxs)(o.FormTitle, {
      tag: o.FormTitleTags.H3,
      className: I.title,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)("span", {
          children: s.title
        }), (0, a.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: l
        })]
      }), (0, a.jsx)("span", {
        className: I.experimentDate,
        children: "User"
      })]
    })
  });
  return S ? (0, a.jsxs)("div", {
    className: I.group,
    children: [(0, a.jsxs)(o.FormSection, {
      children: [h, (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.FormItem, {
          title: "Bucket Override",
          children: (0, a.jsx)(o.SingleSelect, {
            value: null != c ? c.bucket : null,
            clearable: null != c,
            options: N(s.buckets, s.description),
            onChange: e => {
              (0, d.overrideBucket)(l, e)
            }
          })
        }), "string" == typeof s.description ? (0, a.jsx)("div", {
          className: I.description,
          children: (0, a.jsx)(o.FormText, {
            type: o.FormTextTypes.DESCRIPTION,
            children: s.description
          })
        }) : null]
      }), (0, a.jsxs)("div", {
        className: I.description,
        children: [(0, a.jsxs)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: ["Current assigned to bucket ", null !== (t = null == m ? void 0 : m.bucket) && void 0 !== t ? t : _.ExperimentBuckets.NOT_ELIGIBLE]
        }), null == C ? (0, a.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), T ? (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: I.debugTitle,
          children: "Server Descriptor"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: I.pre,
          children: null == C ? "None" : JSON.stringify(C, void 0, 2)
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: I.debugTitle,
          children: "Override Descriptor"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: I.pre,
          children: null == c ? "None" : JSON.stringify(c, void 0, 2)
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: I.debugTitle,
          children: "Recent Exposures"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: I.pre,
          children: 0 === A.length ? "None" : A.join("\n")
        })]
      }) : (0, a.jsx)(o.Button, {
        className: I.debugButton,
        size: o.Button.Sizes.SMALL,
        look: o.Button.Looks.BLANK,
        onClick: () => g(!0),
        children: "More Details \xbb"
      })]
    }), (0, a.jsx)(o.FormDivider, {
      className: I.divider
    })]
  }) : (0, a.jsx)("div", {
    className: I.group,
    children: (0, a.jsx)(o.FormSection, {
      children: h
    })
  })
}

function m(e) {
  let {
    experiment: t,
    experimentId: s,
    overrideDescriptor: l
  } = e, [S, E] = n.useState(null != l), [T, g] = n.useState(!1), f = n.useCallback(() => {
    E(e => !e)
  }, []), m = (0, r.useStateFromStores)([u.default], () => u.default.getLoadedGuildExperiment(s)), C = (0, r.useStateFromStores)([u.default], () => i().sortBy(u.default.getRecentExposures(_.ExperimentTypes.GUILD, s), e => {
    let [t, s] = e;
    return -s
  }).map(e => {
    let [t, s] = e;
    return "".concat(new Date(s).toLocaleString(), " (").concat(t, ")")
  })), [A, h] = (0, r.useStateFromStoresArray)([c.default, u.default], () => {
    let e = i().sortBy(i().values(c.default.getGuilds()), e => e.name.toLowerCase()),
      t = {},
      a = [];
    for (let l of e) {
      var n;
      let e = u.default.getGuildExperimentDescriptor(s, l.id),
        i = null !== (n = null == e ? void 0 : e.bucket) && void 0 !== n ? n : _.ExperimentBuckets.NOT_ELIGIBLE;
      !(i in t) && (t[i] = 0), t[i]++, a.push("".concat(l.name, ": ").concat(i))
    }
    return [a, i()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ")]
  }), O = (0, a.jsx)(o.Clickable, {
    onClick: f,
    children: (0, a.jsxs)(o.FormTitle, {
      tag: o.FormTitleTags.H3,
      className: I.title,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)("span", {
          children: t.title
        }), (0, a.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: s
        })]
      }), (0, a.jsx)("span", {
        className: I.experimentDate,
        children: "Guild"
      })]
    })
  });
  return S ? (0, a.jsxs)("div", {
    className: I.group,
    children: [(0, a.jsxs)(o.FormSection, {
      children: [O, (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.FormItem, {
          title: "Bucket Override",
          children: (0, a.jsx)(o.SingleSelect, {
            value: null != l ? l.bucket : null,
            clearable: null != l,
            options: N(t.buckets, t.description),
            onChange: e => {
              (0, d.overrideBucket)(s, e)
            }
          })
        }), "string" == typeof t.description ? (0, a.jsx)("div", {
          className: I.description,
          children: (0, a.jsx)(o.FormText, {
            type: o.FormTextTypes.DESCRIPTION,
            children: t.description
          })
        }) : null]
      }), (0, a.jsxs)("div", {
        className: I.description,
        children: [(0, a.jsxs)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: ["Current Assignments: ", h]
        }), null == m ? (0, a.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), T ? (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: I.debugTitle,
          children: "Guild Assignments"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: I.pre,
          children: A.join("\n")
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: I.debugTitle,
          children: "Server Descriptor"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: I.pre,
          children: null == m ? "None" : JSON.stringify(m, void 0, 2)
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: I.debugTitle,
          children: "Override Descriptor"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: I.pre,
          children: null == l ? "None" : JSON.stringify(l, void 0, 2)
        }), (0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: I.debugTitle,
          children: "Recent Exposures"
        }), (0, a.jsx)(o.Text, {
          variant: "code",
          className: I.pre,
          children: 0 === C.length ? "None" : C.join("\n")
        })]
      }) : (0, a.jsx)(o.Button, {
        className: I.debugButton,
        size: o.Button.Sizes.SMALL,
        look: o.Button.Looks.BLANK,
        onClick: () => g(!0),
        children: "More Details \xbb"
      })]
    }), (0, a.jsx)(o.FormDivider, {
      className: I.divider
    })]
  }) : (0, a.jsx)("div", {
    className: I.group,
    children: (0, a.jsx)(o.FormSection, {
      children: O
    })
  })
}