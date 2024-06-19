t.d(s, {
  Z: function() {
    return N
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  a = t(392711),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(492435),
  E = t(353926),
  d = t(430824),
  _ = t(499533),
  T = t(878209),
  S = t(987338),
  u = t(150195);

function I(e, s) {
  return e.map((e, t) => ({
    label: "object" == typeof s ? s[t] : _.Z.getExperimentBucketName(e),
    value: e
  }))
}

function N() {
  let e = (0, r.cj)([E.Z], () => E.Z.getAllExperimentOverrideDescriptors()),
    s = (0, r.cj)([E.Z], () => E.Z.getRegisteredExperiments()),
    [t, a] = i.useState(""),
    l = (0, T.Ro)((0, T.Tc)((0, T.Cg)(s), e), t);
  return (0, n.jsxs)(o.FormSection, {
    tag: o.FormTitleTags.H1,
    title: "Experiments",
    children: [(0, n.jsx)(o.SearchBar, {
      size: o.SearchBar.Sizes.LARGE,
      query: t,
      onChange: a,
      onClear: () => a("")
    }), l.length > 0 ? l.map(s => {
      let t = s.experiment.type === S.xY.GUILD ? C : A;
      return (0, n.jsx)(t, {
        experiment: s.experiment,
        experimentId: s.id,
        overrideDescriptor: e[s.id]
      }, s.id)
    }) : (0, n.jsx)("div", {
      className: u.emptyState,
      children: (0, n.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function A(e) {
  var s;
  let {
    experiment: t,
    experimentId: a,
    overrideDescriptor: d
  } = e, [_, T] = i.useState(null != d), [N, A] = i.useState(!1), C = i.useCallback(() => {
    T(e => !e)
  }, []), O = (0, r.e7)([E.Z], () => E.Z.getUserExperimentDescriptor(a)), m = (0, r.e7)([E.Z], () => E.Z.getLoadedUserExperiment(a)), h = (0, r.e7)([E.Z], () => l().sortBy(E.Z.getRecentExposures(S.xY.USER, a), e => {
    let [s, t] = e;
    return -t
  }).map(e => {
    let [s, t] = e;
    return "".concat(new Date(t).toLocaleString(), " (").concat(s, ")")
  })), g = (0, n.jsx)(o.Clickable, {
    onClick: C,
    children: (0, n.jsxs)(o.FormTitle, {
      tag: o.FormTitleTags.H3,
      className: u.title,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)("span", {
          children: t.title
        }), (0, n.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: a
        })]
      }), (0, n.jsx)("span", {
        className: u.experimentDate,
        children: "User"
      })]
    })
  });
  return _ ? (0, n.jsxs)("div", {
    className: u.group,
    children: [(0, n.jsxs)(o.FormSection, {
      children: [g, (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.FormItem, {
          title: "Bucket Override",
          children: (0, n.jsx)(o.SingleSelect, {
            value: null != d ? d.bucket : null,
            clearable: null != d,
            options: I(t.buckets, t.description),
            onChange: e => {
              (0, c.rX)(a, e)
            }
          })
        }), "string" == typeof t.description ? (0, n.jsx)("div", {
          className: u.description,
          children: (0, n.jsx)(o.FormText, {
            type: o.FormTextTypes.DESCRIPTION,
            children: t.description
          })
        }) : null]
      }), (0, n.jsxs)("div", {
        className: u.description,
        children: [(0, n.jsxs)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: ["Current assigned to bucket ", null !== (s = null == O ? void 0 : O.bucket) && void 0 !== s ? s : S.NZ.NOT_ELIGIBLE]
        }), null == m ? (0, n.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), N ? (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.FormTitle, {
          tag: "h5",
          className: u.debugTitle,
          children: "Server Descriptor"
        }), (0, n.jsx)(o.Text, {
          variant: "code",
          className: u.pre,
          children: null == m ? "None" : JSON.stringify(m, void 0, 2)
        }), (0, n.jsx)(o.FormTitle, {
          tag: "h5",
          className: u.debugTitle,
          children: "Override Descriptor"
        }), (0, n.jsx)(o.Text, {
          variant: "code",
          className: u.pre,
          children: null == d ? "None" : JSON.stringify(d, void 0, 2)
        }), (0, n.jsx)(o.FormTitle, {
          tag: "h5",
          className: u.debugTitle,
          children: "Recent Exposures"
        }), (0, n.jsx)(o.Text, {
          variant: "code",
          className: u.pre,
          children: 0 === h.length ? "None" : h.join("\n")
        })]
      }) : (0, n.jsx)(o.Button, {
        className: u.debugButton,
        size: o.Button.Sizes.SMALL,
        look: o.Button.Looks.BLANK,
        onClick: () => A(!0),
        children: "More Details \xbb"
      })]
    }), (0, n.jsx)(o.FormDivider, {
      className: u.divider
    })]
  }) : (0, n.jsx)("div", {
    className: u.group,
    children: (0, n.jsx)(o.FormSection, {
      children: g
    })
  })
}

function C(e) {
  let {
    experiment: s,
    experimentId: t,
    overrideDescriptor: a
  } = e, [_, T] = i.useState(null != a), [N, A] = i.useState(!1), C = i.useCallback(() => {
    T(e => !e)
  }, []), O = (0, r.e7)([E.Z], () => E.Z.getLoadedGuildExperiment(t)), m = (0, r.e7)([E.Z], () => l().sortBy(E.Z.getRecentExposures(S.xY.GUILD, t), e => {
    let [s, t] = e;
    return -t
  }).map(e => {
    let [s, t] = e;
    return "".concat(new Date(t).toLocaleString(), " (").concat(s, ")")
  })), [h, g] = (0, r.Wu)([d.Z, E.Z], () => {
    let e = l().sortBy(l().values(d.Z.getGuilds()), e => e.name.toLowerCase()),
      s = {},
      n = [];
    for (let a of e) {
      var i;
      let e = E.Z.getGuildExperimentDescriptor(t, a.id),
        l = null !== (i = null == e ? void 0 : e.bucket) && void 0 !== i ? i : S.NZ.NOT_ELIGIBLE;
      !(l in s) && (s[l] = 0), s[l]++, n.push("".concat(a.name, ": ").concat(l))
    }
    return [n, l()(s).keys().map(Number).sort().map(e => "".concat(s[e], " guilds in bucket ").concat(e)).join(", ")]
  }), R = (0, n.jsx)(o.Clickable, {
    onClick: C,
    children: (0, n.jsxs)(o.FormTitle, {
      tag: o.FormTitleTags.H3,
      className: u.title,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)("span", {
          children: s.title
        }), (0, n.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: t
        })]
      }), (0, n.jsx)("span", {
        className: u.experimentDate,
        children: "Guild"
      })]
    })
  });
  return _ ? (0, n.jsxs)("div", {
    className: u.group,
    children: [(0, n.jsxs)(o.FormSection, {
      children: [R, (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.FormItem, {
          title: "Bucket Override",
          children: (0, n.jsx)(o.SingleSelect, {
            value: null != a ? a.bucket : null,
            clearable: null != a,
            options: I(s.buckets, s.description),
            onChange: e => {
              (0, c.rX)(t, e)
            }
          })
        }), "string" == typeof s.description ? (0, n.jsx)("div", {
          className: u.description,
          children: (0, n.jsx)(o.FormText, {
            type: o.FormTextTypes.DESCRIPTION,
            children: s.description
          })
        }) : null]
      }), (0, n.jsxs)("div", {
        className: u.description,
        children: [(0, n.jsxs)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: ["Current Assignments: ", g]
        }), null == O ? (0, n.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), N ? (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.FormTitle, {
          tag: "h5",
          className: u.debugTitle,
          children: "Guild Assignments"
        }), (0, n.jsx)(o.Text, {
          variant: "code",
          className: u.pre,
          children: h.join("\n")
        }), (0, n.jsx)(o.FormTitle, {
          tag: "h5",
          className: u.debugTitle,
          children: "Server Descriptor"
        }), (0, n.jsx)(o.Text, {
          variant: "code",
          className: u.pre,
          children: null == O ? "None" : JSON.stringify(O, void 0, 2)
        }), (0, n.jsx)(o.FormTitle, {
          tag: "h5",
          className: u.debugTitle,
          children: "Override Descriptor"
        }), (0, n.jsx)(o.Text, {
          variant: "code",
          className: u.pre,
          children: null == a ? "None" : JSON.stringify(a, void 0, 2)
        }), (0, n.jsx)(o.FormTitle, {
          tag: "h5",
          className: u.debugTitle,
          children: "Recent Exposures"
        }), (0, n.jsx)(o.Text, {
          variant: "code",
          className: u.pre,
          children: 0 === m.length ? "None" : m.join("\n")
        })]
      }) : (0, n.jsx)(o.Button, {
        className: u.debugButton,
        size: o.Button.Sizes.SMALL,
        look: o.Button.Looks.BLANK,
        onClick: () => A(!0),
        children: "More Details \xbb"
      })]
    }), (0, n.jsx)(o.FormDivider, {
      className: u.divider
    })]
  }) : (0, n.jsx)("div", {
    className: u.group,
    children: (0, n.jsx)(o.FormSection, {
      children: R
    })
  })
}