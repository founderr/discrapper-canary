n(47120), n(773603);
var r = n(735250),
  i = n(470079),
  a = n(481060),
  s = n(600164),
  o = n(299443),
  l = n(185625),
  u = n(273389),
  c = n(596891),
  d = n(15667),
  _ = n(76264),
  E = n(822686),
  f = n(356110),
  h = n(730719),
  p = n(996701),
  m = n(320596),
  I = n(273514),
  T = n(995712),
  g = n(234937),
  S = n(473121),
  A = n(449413),
  N = n(266080),
  v = n(316617),
  O = n(15682),
  R = n(521332),
  C = n(905434),
  y = n(196627),
  D = n(739319),
  L = n(842401),
  b = n(375790),
  M = n(981631),
  P = n(689938),
  U = n(482441);

function w(e, t) {
  let {
elements: n
  } = e;
  return n.find(e => {
let {
  type: n
} = e;
return n === t;
  });
}

function x(e, t) {
  let {
elements: n
  } = e;
  return n.filter(e => {
let {
  type: n
} = e;
return n === t;
  });
}
t.Z = e => {
  let {
node: t,
reportType: n,
history: G,
onSelectChild: k,
onModalClose: B,
onSubmit: F,
multiSelect: V,
reportId: H,
textInput: Z
  } = e, Y = w(t, 'checkbox'), j = w(t, 'text_line_resource'), W = x(t, 'external_link'), K = x(t, 'free_text'), z = x(t, 'dropdown'), [q, Q] = i.useState(!1), [X, $] = i.useState(!1), [J, ee] = i.useState(''), [et, en] = i.useState(() => ({})), [er, ei] = i.useState(() => ({})), [ea, es] = i.useState((0, l.VP)(K, z, Y, Z, V)), eo = function(e, t) {
let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
  r = {
    ...er
  };
r[e] = {
  value: t,
  isValid: n
}, ei(r), es((0, l.VP)(K, z, Y, r, et));
  }, el = i.useMemo(() => e => {
k({
  nodeRef: t.id,
  destination: e,
  textInput: null != K || null != z ? er : void 0,
  multiSelect: null != Y ? {
    name: Y.name,
    state: et
  } : void 0
});
  }, [
t,
k,
Y,
et,
er,
K,
z
  ]);
  i.useEffect(() => {
null != V && en(V), null != Z && ei(Z);
  }, [
V,
Z
  ]);
  let eu = e => {
  if (e === M.evJ.INVALID_FORM_BODY)
    ee(P.Z.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
  else
    ee(P.Z.Messages.MOBILE_REPORTS_SUBMIT_FAILED);
},
ec = () => F({
  nodeRef: t.id,
  destination: [
    '',
    e.successNodeId
  ]
}).then(() => {
  ee(''), el([
    '',
    e.successNodeId
  ]);
}).catch(e => {
  var t;
  eu(null === (t = e.body) || void 0 === t ? void 0 : t.code);
}).finally(() => {
  Q(!1);
});
  return i.useEffect(() => {
t.is_auto_submit && !X && ($(!0), F({
  nodeRef: t.id,
  destination: [
    '',
    t.id
  ]
}));
  }, [
t.is_auto_submit,
X,
F,
t.id
  ]), (0, r.jsxs)('div', {
className: U.container,
children: [
  (0, r.jsxs)(a.ModalHeader, {
    separator: !1,
    direction: s.Z.Direction.VERTICAL,
    className: U.header,
    children: [
      (0, r.jsx)(y.Z, {
        element: w(t, 'success')
      }),
      (0, r.jsx)(S.Z, {
        node: t
      }),
      (0, r.jsx)(A.Z, {
        node: t
      })
    ]
  }),
  (0, r.jsxs)(a.ModalContent, {
    className: U.body,
    children: [
      null != j ? (0, r.jsx)(D.Z, {
        element: j
      }) : null,
      null != w(t, 'breadcrumbs') && (0, r.jsx)(d.Z, {
        history: G
      }),
      null != w(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(v.Z, {
        message: n.record
      }),
      null != w(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(L.Z, {
        user: n.record
      }) : null,
      function(e) {
        let {
          elements: t
        } = e;
        return t.some(e => {
          let {
            type: t
          } = e;
          return b.O.includes(t);
        });
      }(t) && (0, r.jsx)(a.Heading, {
        className: U.remediationElementsHeader,
        variant: 'heading-sm/semibold',
        children: P.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
      }),
      (null != w(t, 'block_users') || null != w(t, 'mute_users')) && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) && (0, r.jsx)(c.Z, {
        userId: 'user' === n.name ? n.record.id : n.record.author.id,
        reportId: H,
        reportName: n.name,
        showBlock: null != w(t, 'block_users'),
        showMute: null != w(t, 'mute_users')
      }),
      null != w(t, 'settings_upsells') && 'message' === n.name && (0, o.j)('web_iar_node_view') && (0, r.jsx)(R.Z, {}),
      null != w(t, 'delete_message') && 'message' === n.name && (0, r.jsx)(E.Z, {
        message: n.record,
        reportId: H
      }),
      null != w(t, 'leave_guild') && 'guild' === n.name && (0, r.jsx)(N.Z, {
        guildId: n.record.id,
        reportId: H
      }),
      null != w(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(C.Z, {
        stageInstance: n.record
      }),
      null != w(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(g.Z, {
        event: n.record
      }),
      null != w(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(I.Z, {
        entry: n.record
      }),
      null != w(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(T.Z, {
        entry: n.record
      }),
      null != Y && (0, r.jsx)(O.Z, {
        element: Y,
        onChange: (e, t) => {
          let n = {
            ...et
          };
          e in et ? delete n[e] : n[e] = t, en(n), es((0, l.VP)(K, z, Y, er, n));
        },
        state: et
      }),
      ('user_urf' === n.name || 'message_urf' === n.name) && null != z && z.length > 0 && (0, r.jsx)(f.Z, {
        elements: z,
        onChange: eo,
        state: er
      }),
      ('user_urf' === n.name || 'message_urf' === n.name) && null != K && K.length > 0 && (0, r.jsx)(m.Z, {
        elements: K,
        onChange: eo,
        state: er
      }),
      (0, r.jsx)(_.Z, {
        node: t,
        onSelectChild: el
      }),
      null != W && W.length > 0 ? (0, r.jsx)(p.Z, {
        elements: W
      }) : null,
      (0, r.jsx)(h.Z, {
        errorMessage: J,
        onClose: () => {
          ee('');
        }
      })
    ]
  }),
  (0, r.jsx)(u.Z, {
    button: t.button,
    submitting: q,
    disableNext: ea,
    onClick: e => {
      switch (e.type) {
        case 'done':
        case 'cancel':
          B();
          break;
        case 'next':
          el([
            '',
            e.target
          ]);
          break;
        case 'submit':
          Q(!0), ec();
      }
    },
    onBackClicked: e.onNavigateBack,
    canNavigateBack: G.length > 0
  }),
  (0, r.jsx)(a.ModalCloseButton, {
    className: U.closeButton,
    onClick: B
  })
]
  });
};