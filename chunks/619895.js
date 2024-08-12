n.d(t, {
  Id: function() {
return s;
  },
  Qm: function() {
return p;
  },
  hR: function() {
return _;
  }
}), n(47120);
var i = n(470079),
  a = n(892814),
  o = n(442837),
  l = n(581364),
  c = n(768581),
  d = n(823379),
  r = n(399654),
  m = n(844439);
let s = {
'1238332854602043454': {
  imageOption: 'image'
},
'1181475143340539995': {
  imageOption: 'image',
  additionalOptions: [{
      motion_prompt: [{
        text: '$dimi_deadpool_bye_bye_bye',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$simone_biles_floor_routine',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$fortnite_starlit_emote',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$apple_guy_running',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$man_in_finance',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$lil_yachty_stage_entrance',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$anthony_edwards_score',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$beyonce_single_ladies',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$rickroll_never_gonna_give_you_up',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$gimme_head_top',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$hugo_hilaire_goofy_dance',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    }
  ]
},
'1091213298818613408': {
  imageOption: 'image'
},
'1029794689932611625': {
  imageOption: 'image'
}
  },
  u = new Set(Object.keys(s));

function p(e) {
  let {
contentType: t
  } = e;
  switch (t) {
case 'image/jpeg':
case 'image/jpg':
  return '.jpg';
case 'image/png':
case 'image/apng':
  return '.png';
case 'image/webp':
  return '.webp';
default:
  return '';
  }
}

function _(e) {
  let {
channelId: t
  } = e, {
fetchState: n,
recommendationsSections: s
  } = function(e) {
let {
  channelId: t
} = e, n = a.I.CONTEXTUAL_IMAGE, l = i.useMemo(() => ({
  channelId: t,
  location: n,
  withCommands: !0
}), [
  t,
  n
]);
i.useEffect(() => {
  (0, r.a)(l);
}, [l]);
let {
  fetchState: c,
  recommendationsSections: d
} = (0, o.cj)([m.ZP], () => ({
  fetchState: m.ZP.getFetchState(l),
  recommendationsSections: m.ZP.getRecommendations(l)
}));
return {
  fetchState: c,
  recommendationsSections: d
};
  }({
channelId: t
  });
  return {
fetchState: n,
imageRecCommandContexts: i.useMemo(() => {
  let e = s.length > 0 ? s[0].items : void 0;
  return void 0 === e ? [] : e.map(e => {
    let {
      application: t,
      commands: n
    } = e, i = null == n ? void 0 : n.find(e => u.has(e.id));
    if (null == i)
      return null;
    let a = (0, l.Z8)({
      rootCommand: i,
      command: i,
      applicationId: t.id
    });
    return {
      command: {
        ...a,
        name: a.name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
      },
      applicationImageURL: c.ZP.getApplicationIconURL({
        id: t.id,
        icon: t.icon,
        bot: t.bot
      }),
      application: t
    };
  }).filter(d.lm);
}, [s])
  };
}